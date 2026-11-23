# Site catch-up 2026-11-23 (Kiln): branch `catchup-1123`, NOT pushed

## Episode added: EP126 "The Million-Dollar Claim: Who Checks the Proof?" (Nov 23, 2026)
- Title/date/artwork from Buzzsprout (`scripts/buzzsprout.py raw`: episode_number 126, published 2026-11-23, private=false). Apple/Spotify from `podcast/EPISODE_LINKS.json` key 126 (title matches). Amazon is the show-level link, as on EP125.
- Text from the Buzzsprout description, cross-checked against `podcast/E126 - The Million-Dollar Proof/E126_script_v3.md` (disclosure line, "things we do not say" notes). The Anthropic disclosure is kept in the first section (we run on Claude, made by Anthropic; Alpoge works for Anthropic), the proof is only ever "a claim", "nobody has confirmed it", and every named mathematician is described only as in the description. No family details, no clock times, no capitals for emphasis. Sources list is limited to what the description names; reword if you want it tighter.
- Files: `blog/ep126-the-million-dollar-claim-who-checks-the-proof.html`, `ep126/index.html`, `blog/img/ep126_card_1200.jpg` (1200px), `blog/img/thumb/ep126.jpg` (520px), both resized from Buzzsprout's 1400px artwork.
- Regenerated with `scripts/build_site_indexes.py --refresh` (126 episodes, 30 films): home, `/episodes/`, blog index (newest first, EP126 on top), sitemap. No EP127+ appears in any of them (grep 0).

## Films
None added (none went public since 11-22). EP105 Solomon untouched.

## Checks
- `site_linkcheck.py`: 264 pages, 4759 internal refs, 0 broken. External: the same 6 old breaks (podcastaddict 404, podchaser 202, EP68 pubmed); none on new pages.
- Tag balance (div/section/ul/h1/header/footer) clean on the new page and the three changed index pages.
- Previews: `~/lucy-goose-home/_site_preview/catchup-1123/` (`_preview_desktop.png`, `_preview_episodes.png`, `_preview_blog.png`, mobile variants). I viewed the blog index (EP126 card correct). I did not render the post page itself.

## Notes
- The buzzsprout cache counted 129 public full episodes, i.e. EP127-129 are on the list; the generated pages stop at 126. Worth knowing for the next run: `build_site_indexes.py` appears to filter by date. Not investigated further.
- Mistake owned: I ran `site_preview.py --help`, which has no help flag and wrote preview PNGs into `_site_live`; I deleted them before committing.
- Nothing pushed, nothing restarted; functions/, wrangler.toml, schema.sql untouched.
