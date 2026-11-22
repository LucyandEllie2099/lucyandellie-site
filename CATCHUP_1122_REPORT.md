# Site catch-up 2026-11-22 (Kiln): branch `catchup-1122`, NOT pushed

## Episode added: EP125 "The Rise and Fall of Rome, Part 2: The Fall" (Nov 20, 2026)
- Title/date/artwork from the Buzzsprout API (`scripts/buzzsprout.py raw`, public, not private). Buzzsprout is consecutive E123..E128 on the public list; EP126+ were left out (not aired as of this run).
- Apple/Spotify links from `podcast/EPISODE_LINKS.json` (key 125; title matches Buzzsprout). Amazon is the show-level link, as on EP124.
- Page text written from the Buzzsprout description, cross-checked against the final script `podcast/E125 - Rome Part 2 - The Fall/E125_script_v3.md` (block list and the "things we do not say" notes). Nothing invented: legends are marked as legends, Josephus series said to follow after Thanksgiving, no family details, no clock times, no capitals for emphasis.
- Files: `blog/ep125-the-rise-and-fall-of-rome-part-2-the-fall.html`, `ep125/index.html` redirect, `blog/img/ep125_card_1200.jpg` (1200px), `blog/img/thumb/ep125.jpg` (520px), both resized from Buzzsprout's 1400px artwork (the cover shows "Episode 125" and the title).

## Film block: EP102 The Tesla Flying Roadster
- Film `DGqNZU-WOuw` "Did a Tesla Really Fly? — The Flying Roadster, Claim by Claim", 33:30, `privacyStatus=public`; trailer Short `yQxcWfscBrs` (52s), `public`. Both read back via the YouTube Data API (OAuth token, channel UCrJRpDKncjiRMtDlrYGfK4w) at the time of this run.
- Markup identical to the EP108 block, inserted after the listen buttons. Home Films grid picked it up automatically (30 films now).

## Regenerated
`scripts/build_site_indexes.py --refresh` (125 episodes, 30 films): home (stats, latest 3 = EP125/124/123, Films grid), `/episodes/`, blog index newest-first, sitemap. `apply_le_site_shell.py`: 0 changed.

## Checks
- `site_linkcheck.py`: 262 pages, 4723 internal refs, 0 broken. External: the same 6 pre-existing breaks as 11-19 (podcastaddict 404, podchaser 202, EP68 pubmed); none on new pages.
- Tag balance (div/section/ul/h1) clean on the new page and the four changed pages.
- Previews outside the repo: `~/lucy-goose-home/_site_preview/catchup-1122/` (`_preview_desktop.png` home, `_preview_episodes.png`, `_preview_blog.png`, mobile variants). I looked at the blog index (EP125 card correct); I did not render the two post pages separately.

## Skipped
EP126+ (not aired). Nothing pushed, nothing restarted; functions/, wrangler.toml, schema.sql untouched.
