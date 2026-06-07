// Cloudflare Pages Function — /api/comments
// MVP stub: accepts notes, returns ok.
// TODO: wire up KV or D1 storage for persistence.

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, location, message } = body;

    if (!message || message.trim().length === 0) {
      return Response.json({ ok: false, error: 'Message is required.' }, { status: 400 });
    }

    // Log to console (visible in CF Pages real-time logs)
    console.log(`[note] ${new Date().toISOString()} | ${name || 'Anonymous'} | ${location || '—'} | ${message}`);

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }
}
