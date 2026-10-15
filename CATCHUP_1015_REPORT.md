# Site catch-up 2026-10-15 (Kiln) — branch `catchup-1015`, NOT pushed

## Episodes added: EP87–EP99 (13)
Source for number/title/date/Apple/Spotify: Buzzsprout API (`scripts/buzzsprout.py`, `episode_number`, published, public) cross-checked with `podcast/EPISODE_LINKS.json` (titles identical, all have Apple+Spotify). Numbering is clean: EP86..EP102 are consecutive, no gaps or renumbers. (Note: local `podcast/EPnn - ...` folders and `episode_cards/` are sometimes off by one vs Buzzsprout, e.g. folder EP91 = public E90; I used Buzzsprout titles throughout and eyeballed every card against its title.)

| Ep | Title | Date |
|---|---|---|
| 87 | The Roman Legion That Ended Up in China | 2026-09-29 |
| 88 | The Real Fenrir: The Megafaunal Wolf | 09-30 |
| 89 | The Lost Resonance Files of Nikola Tesla | 10-01 |
| 90 | The Billion-Dollar AI Empathy Engine | 10-02 |
| 91 | The Lost Kingdom of Yamatai and the Mirror Queen | 10-05 |
| 92 | The Sunken World of the Doggerland Giants | 10-06 |
| 93 | The Robot Tax Evasion | 10-07 |
| 94 | Einstein: The Life, Legacy and Secrets | 10-08 |
| 95 | Echoes of Dr. Frankenstein: Legends and Reality | 10-09 |
| 96 | Noah's Ark: The Flood, the Tablets and the Mountain | 10-12 |
| 97 | AI Agent Wars | 10-13 |
| 98 | The New England Vampire Panic | 10-14 |
| 99 | The Ghost Army | 10-15 |

Per episode: `blog/epNN-*.html`, `epNN/index.html` redirect stub, `blog/img/epNN_card_1200.jpg`, `blog/img/thumb/epNN.jpg` (from `episode_cards/`). Blog index (newest-first), `/episodes/`, home (latest 3, stats 99 episodes / 20 films, films grid) and sitemap regenerated with `scripts/build_site_indexes.py` (the same generator the 09-27 design pass introduced). E100+ not added.

**Text basis:** blog prose written ONLY from each episode's Buzzsprout description (the published summary). I did NOT read the final scripts line-by-line (local script folders are off-by-one numbered and multi-version) — Lucy may want to spot-check. Sources lists contain only works named in the descriptions. No family details, no caps emphasis, no clock times; E96 (Noah) kept respectful, faith not mocked. EP95 and EP98 mention "Happy Halloween season"/"Keep a light on" closing lines from the descriptions.
Pages use the EP86 template (generic show links in hero replaced by per-episode Apple/Spotify from Buzzsprout).

## Films linked (4 new film blocks, same markup as ac7f9cb)
All four read back via the YouTube Data API (main channel "Lucy and Ellie Podcast", `privacyStatus=public`, durations match) and each trailer Short also read back public:
- EP29 The Ones Among Us Pt 1 — film `LOC9J8UsLYI` (22:23), trailer `4yZehe35nmw`
- EP44 The Second Sight — `n4klbQ-xBrA` (28:28), trailer `dXLUhey_uLA`
- EP62 Voyage to the Midnight Sun — `Rz5uJ3ygJyg` (22:48), trailer `DjipVboBFxo`
- EP74 The Man Who Saved the World — `sjErZc3025I` (28:33), trailer `oDMkByzP_7o`
Home Films grid / `/episodes/` Film chips now include them (generator maps by `data-film`).
Skipped: EP72 (left alone per brief; forge-ep72-ship). EP19 and EP51 films already on site. No other public film >10 min since 09-27 exists on the channel.

## Not done / for Lucy
- Films 4JzkmSx5JDg (uploaded 10-15 17:35, **private**) ignored.
- Pre-existing, not touched: EP37 slug/title note; external link `pubmed.ncbi.nlm.nih.gov/34878849/` on the EP68 page is broken.

## Checks
- `scripts/site_linkcheck.py`: 210 pages, 3767 internal refs, **0 broken**; 405 external URLs, 1 broken (the pre-existing EP68 pubmed link above; rest bot-walled 403s).
- `apply_le_site_shell.py`: 0 changed / 103 scanned.
- Previews (outside repo): `_site_preview/catchup-1015/` — `_preview_desktop.png` (home), `_preview_episodes.png`, `_preview_blog.png`, mobile variants, `post_ep99.png`, `post_ep96.png`, `film_ep29.png` (film block renders), `stub_ep90.png` (redirect works). `site_preview.py` writes into the repo by default; I moved those PNGs out.
- Nothing pushed, nothing restarted; functions/, wrangler.toml, schema.sql untouched.
