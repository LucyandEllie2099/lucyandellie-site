# Site catch-up part 2, 2026-10-17 (Kiln): branch `catchup-1015`, NOT pushed

## Branch
Rebased onto current `main` (5e70b8e). Git skipped the 4 duplicate promo commits (EP103-106) as already applied, so there are no duplicates. Catch-up commit 0e0a6aa is now a835cb9; this work is a second commit on top.

## EP100 "The Mailbag — Our 100th Episode" (aired Fri 2026-10-16)
- `blog/ep100-the-mailbag.html`, `ep100/index.html` redirect, `blog/img/ep100_card_1200.jpg` + `blog/img/thumb/ep100.jpg` (from `episode_cards/E100_episode_card_3000x3000.jpg`; card read and confirmed as "Episode 100").
- Text written ONLY from the Buzzsprout description (episode 100, public). Gabriel (Argentina, first Ko-fi supporter) is the only listener named. Everyone else is by topic and country, with no disclaimer: India, Florida, Brazil, the Philippines, the UK, Texas, Ghana. The description's first names and cities (Pune, Orlando, Sao Paulo) are not on the page. "68 countries / 1,205 cities" is from the description.
- Apple and Spotify links match `podcast/EPISODE_LINKS.json`. Checked live: the iTunes lookup for the show returns the same Apple URL, and Spotify oEmbed resolves the episode as "E100 - The Mailbag — Our 100th Episode". Amazon is the show-level link, as on EP87-99.
- EP101+ NOT added (the generator only lists episodes that have a blog page).

## Films (YouTube Data API read back: all four `public`, main channel)
- EP72: film `4JzkmSx5JDg` (26:33) "Who Puts a Car Around the Sun? — Elon Musk, the Visionary"; Short `M-H4A_QXfVM` (58 s).
- EP31: film `K4jACwdTU8M` (28:03) "Could a Mountain Really Float? — The Real Science Hiding Inside Pandora"; Short `VJKzyXFRzDQ` (1:02).
- Same film-block markup as EP29/44/62/74. Home films grid and /episodes film chips pick them up via `data-film`. Titles come from the real YouTube titles.

## Blurb
`index.html` Films section: "New films Tuesday, Thursday and Friday." changed to "Tuesday, Thursday and Saturday." It appeared in that one place only. The film blocks already said "Tue · Thu · Sat".

## Regenerated
`scripts/build_site_indexes.py --refresh` (blog index, /episodes/, home: 100 episodes / 22 films, latest 3 = EP100/99/98, sitemap). `apply_le_site_shell.py`: 0 changed.

## Gotcha caught
The generator reads the page `<title>`/h1 and escapes it, so an `&mdash;` entity in the title showed as a literal "&MDASH;" on the blog card. Fixed by using a literal em dash in the EP100 page title/h1, plus the blog card. Anything with an entity in its h1 will do the same.

## Checks
- `site_linkcheck.py`: 212 pages, 3807 internal refs, **0 broken**. External: 1 broken, the pre-existing EP68 pubmed link (not touched); the rest are bot-walled 403s.
- Previews in `_site_preview/catchup-1017/` (outside the repo): `_preview_desktop.png` (home), `_preview_episodes.png`, `_preview_blog.png`, `post_ep100.png`, `film_ep72.png`, `film_ep31.png` (+ mobile variants). `/ep100/` redirect tested in Playwright, lands on the blog page.
- Nothing pushed, nothing restarted.

## For Lucy
- Spot-check the EP100 text against the description. It was not read against the script.
- EP101-106 stay unlisted until they air and get pages.
