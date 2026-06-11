// Cloudflare Pages Function — /api/comments
// v2.0 — D1 storage + Resend email notifications + spam filter

// Basic spam/abuse patterns
const SPAM_PATTERNS = [
  /<script/i, /javascript:/i, /alert\s*\(/i,       // XSS
  /\b(fuck|shit|cunt|nigger|faggot)\b/i,            // hate/abuse
  /\b(buy now|click here|free money|crypto|bitcoin|earn \$)\b/i, // spam
  /https?:\/\/[^\s]{4,}/i,                          // URLs
];

function isSpam(text) {
  return SPAM_PATTERNS.some(p => p.test(text));
}

// Send email notification via Resend
async function sendNotification(env, note) {
  if (!env.RESEND_API_KEY) return; // graceful — skip if not configured
  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Lucy & Ellie Notes <noreply@lucyandellie.ai>',
        to: ['admin@lucyandellie.ai'],
        subject: `📬 New Listener Note — ${note.name || 'Anonymous'}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #7c3aed;">📬 New Listener Note</h2>
            <table style="width:100%; border-collapse:collapse; margin-top:16px;">
              <tr><td style="padding:8px; font-weight:bold; color:#555; width:100px;">Name</td>
                  <td style="padding:8px;">${note.name || '<em>Anonymous</em>'}</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding:8px; font-weight:bold; color:#555;">Location</td>
                  <td style="padding:8px;">${note.location || '<em>Not provided</em>'}</td></tr>
              <tr><td style="padding:8px; font-weight:bold; color:#555;">Message</td>
                  <td style="padding:8px;">${note.message}</td></tr>
              <tr style="background:#f9f9f9;"><td style="padding:8px; font-weight:bold; color:#555;">Time</td>
                  <td style="padding:8px;">${note.created_at}</td></tr>
            </table>
            <p style="margin-top:24px; font-size:12px; color:#999;">
              Submitted via lucyandellie.ai · Lucy & Ellie Podcast
            </p>
          </div>
        `,
      }),
    });
  } catch (err) {
    console.error('[notify] email failed:', err.message);
  }
}

// POST — submit a note
export async function onRequestPost(context) {
  const { request, env } = context;
  try {
    const body = await request.json();
    const name     = (body.name     || '').trim().slice(0, 100);
    const location = (body.location || '').trim().slice(0, 100);
    const message  = (body.message  || '').trim().slice(0, 2000);

    if (!message) {
      return Response.json({ ok: false, error: 'Message is required.' }, { status: 400 });
    }

    const created_at = new Date().toISOString();

    // Spam check
    if (isSpam(name) || isSpam(message)) {
      // Save to blocked table silently — don't reveal to sender
      if (env.DB) {
        await env.DB.prepare(
          'INSERT INTO blocked_notes (name, message, reason, created_at) VALUES (?, ?, ?, ?)'
        ).bind(name, message, 'spam_filter', created_at).run();
      }
      console.warn(`[blocked] ${created_at} | ${name} | ${message.slice(0, 80)}`);
      return Response.json({ ok: true }); // appear to succeed
    }

    // Save to D1
    if (env.DB) {
      await env.DB.prepare(
        'INSERT INTO comments (name, location, message, created_at) VALUES (?, ?, ?, ?)'
      ).bind(name, location, message, created_at).run();
    }

    console.log(`[note] ${created_at} | ${name} | ${location} | ${message.slice(0, 80)}`);

    // Fire email notification (non-blocking)
    context.waitUntil(sendNotification(env, { name, location, message, created_at }));

    return Response.json({ ok: true });

  } catch (err) {
    console.error('[error]', err.message);
    return Response.json({ ok: false, error: 'Something went wrong.' }, { status: 500 });
  }
}

// GET — read notes (protected by secret token)
export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const token = url.searchParams.get('token');

  if (!token || token !== env.ADMIN_TOKEN) {
    return Response.json({ ok: false, error: 'Unauthorized.' }, { status: 401 });
  }

  if (!env.DB) {
    return Response.json({ ok: false, error: 'Database not configured.' }, { status: 503 });
  }

  const limit  = Math.min(parseInt(url.searchParams.get('limit')  || '50'), 200);
  const offset = Math.max(parseInt(url.searchParams.get('offset') || '0'),  0);

  const { results } = await env.DB.prepare(
    'SELECT id, name, location, message, created_at FROM comments ORDER BY created_at DESC LIMIT ? OFFSET ?'
  ).bind(limit, offset).all();

  const count = await env.DB.prepare('SELECT COUNT(*) as total FROM comments').first();

  return Response.json({ ok: true, total: count.total, notes: results });
}
