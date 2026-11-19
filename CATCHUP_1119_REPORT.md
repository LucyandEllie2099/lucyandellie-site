# Site catch-up 2026-11-19 (Kiln): branch `catchup-1119`, NOT pushed

## Episodes added: EP101-EP124 (24)
Source of number, title, date: Buzzsprout API (`scripts/buzzsprout.py raw`, published, public) read live today. Apple/Spotify links: `podcast/EPISODE_LINKS.json`; every title there matches the Buzzsprout title exactly, and each page carries both links. Amazon is the show-level link, as on EP87-100.
Numbering: Buzzsprout is consecutive E100..E125, no gaps or renumbers; the site uses those numbers. NOTE (not touched): local `podcast/` folders and `episode_cards/` are off by one or more from public numbers (e.g. folder "E102 - Curse of the Mummy" is public E103; folder E111 is the Tesla roadster, public E102). I did not use them. Cover art came from each episode's Buzzsprout `artwork_url` (1400px, resized to 1200 card + 520 thumb) and I eyeballed a contact sheet: each card shows its own episode number and title.
Not added: E125 (Rome Part 2, scheduled Fri 11-20). Generator skips it because it has no page and its date is in the future.

| Ep | Title | Date |
|---|---|---|
| 101 | The $40 Trillion Debt | 10-19 |
| 102 | The Tesla Flying Roadster | 10-20 |
| 103 | Curse of the Mummy | 10-21 |
| 104 | The Witch Gene (Halloween) | 10-22 |
| 105 | The Ring of Solomon (Halloween, Part 1 of 3) | 10-23 |
| 106 | Cursed Bloodlines (Halloween, Part 2 of 3) | 10-26 |
| 107 | Naamah (Halloween, Part 3 of 3) | 10-27 |
| 108 | X-BAT: The Fighter with No Pilot and No Runway | 10-28 |
| 109 | Possession, Part 1 of 2: The Oldest Fight (Halloween) | 10-29 |
| 110 | Possession, Part 2 of 2: The Cases (Halloween) | 10-30 |
| 111 | The Last Tribes of the Amazon | 11-02 |
| 112 | The Family Update | 11-03 |
| 113 | The Web Is in Danger | 11-04 |
| 114 | Hiding in the Shadows | 11-05 |
| 115 | The Time Capsule Under the Ice | 11-06 |
| 116 | The Monitor That Switched Itself Off | 11-09 |
| 117 | Remote Viewing | 11-10 |
| 118 | Scheherazade | 11-11 |
| 119 | Noah Before the Flood | 11-12 |
| 120 | Angkor Wat | 11-13 |
| 121 | The Empty Chair: Jensen Huang Leaves Nvidia | 11-16 |
| 122 | The Cathedral in the Sand | 11-17 |
| 123 | Is Mars Still Alive? | 11-18 |
| 124 | The Rise and Fall of Rome, Part 1: The Rise | 11-19 |

Per episode: `blog/epNN-*.html` (EP99 template), `epNN/index.html` redirect, `blog/img/epNN_card_1200.jpg`, `blog/img/thumb/epNN.jpg`.
**Text basis: Buzzsprout description only.** I did NOT read the final scripts (local folders are mis-numbered); Lucy should spot-check. Sources lists name only works/reports the descriptions mention. Page `<h1>` = Buzzsprout title with the "E121 ·"/"E99 -" prefix removed (so "(Halloween...)" tags are kept). Literal characters, no entities, in h1 and meta description (the generator escapes them; 1017 gotcha).
Judgment calls for Lucy: E112 "The Family Update" is about AI-model rumours, not people, and the page says so. E118: the description's line about what "the person behind this show" read as a kid was left out (family detail). E121: the description's allegations line is kept as the one neutral sentence it has there, no names beyond the public filing. E111: the killings of Pereira and Phillips are kept as in the description, with no jokes. Body text uses some acronyms (FBI, FUNAI, PHP), no capitals used for emphasis. No clock times, no family details.

## Films linked (7 new film blocks, markup identical to ac7f9cb)
All read back through the YouTube Data API (OAuth token, main channel UCrJRpDKncjiRMtDlrYGfK4w): film and trailer Short both `privacyStatus=public`, durations as on the block. Film to episode mapping from memory ship-timer logs plus Buzzsprout titles (e.g. film jbh0yxUVr-U is EP23 The Amazon: A Vault of Secrets, not E111).
| Ep | Film | Short |
|---|---|---|
| 13 Age of Mecha | n_NaH1NcRr4 (29:34) | 5Cfhz2Dadaw |
| 23 Amazon: A Vault of Secrets | jbh0yxUVr-U (26:37) | QsK6cD4JJNs |
| 25 Black Holes and White Holes | Z2tf-Dc8R1U (25:19) | 3ftv58KCy2w |
| 27 Green Children of Woolpit | 20jDMAQxGt0 (24:18) | zMOBFLSMe2I |
| 95 Echoes of Dr. Frankenstein | 9TdGFduHo2Q (30:25) | ZQhfuNsLwvM |
| 98 New England Vampire Panic | hacUYvoRklo (30:05) | H4dTW0St6Lc |
| 108 X-BAT | 4RMj7_TYTbk (28:02) | wUPjDGe3bI4 |
Already on the site from the 10-17 catch-up: EP72 Musk (4JzkmSx5JDg), EP31 Pandora (K4jACwdTU8M). Home Films grid, /episodes film chips and the "29 feature films" stat pick the new ones up automatically.
Skipped: EP102 Tesla film (not public until Fri 11-20); the public film list has nothing newer than 11-05. Films older than the last catch-up that were already linked were left alone.

## Regenerated
`scripts/build_site_indexes.py --refresh`: home (124 episodes / 29 films, latest 3 = EP124/123/122), `/episodes/`, blog index newest-first, sitemap. `apply_le_site_shell.py`: 0 changed.
**One generator fix (outside the site repo):** `scripts/build_site_indexes.py` `clean_title` only stripped "E12 -" prefixes, so the new "E121 · ..." titles would have shown the prefix on /episodes and home. Now strips "-" or "·". Backup `scripts/build_site_indexes.py.bak-1119`.

## Checks
- `site_linkcheck.py`: 260 pages, 4685 internal refs, **0 broken**. External: 6 broken, all pre-existing and not on new pages (podcastaddict 404, podchaser 202, EP68 pubmed).
- Tag balance (div/section/ul/h1) on all new pages and the three index pages: clean. `/ep117/` redirect tested in Playwright, lands on the blog page.
- Previews (outside repo): `~/lucy-goose-home/_site_preview/catchup-1119/` - `_preview_desktop.png` (home), `_preview_episodes.png`, `_preview_blog.png`, mobile variants, `post_ep124.png`, `post_ep112.png`, `post_ep108_film.png` (hero + film block).
- Nothing pushed, nothing restarted; functions/, wrangler.toml, schema.sql untouched.

## For Lucy
Spot-check the prose against the scripts, especially E104-E107, E109-E111 (faith and sensitive content) and E121. Then push. The next catch-up needs E125+ pages and the EP102 film block after it goes public.
