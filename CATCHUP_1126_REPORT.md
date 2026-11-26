# Site catch-up 2026-11-26 (Kiln): branch `catchup-1126`, NOT pushed

## Episodes added (Buzzsprout `scripts/buzzsprout.py raw`: private=false, published_at in the past)
| Ep | Title | Published | Apple / Spotify |
|---|---|---|---|
| 127 | The Hum: A Sound Only Some People Hear | 2026-11-24 04:00 | `podcast/EPISODE_LINKS.json` key 127, title matches |
| 128 | The Real First Thanksgiving | 2026-11-25 04:00 | key 128, title matches |
| 129 | Why Turkey? | 2026-11-26 04:00 | key 129, title matches |

Amazon is the show-level link, as on EP126. Each has a blog page, `/epNN` redirect, 1200px card and 520px thumb (resized from Buzzsprout's 1400px artwork).

## Text
- From the Buzzsprout descriptions. Compared with `*_script_v4.md`: E128 spoken lines read in full (Lucy's and Ellie's); E127 and E129 only the Unfiltered/verdict blocks plus keyword spot checks.
- Sources lists are my short wording of what the description and verdict blocks name. Please read them.
- E128: the description's cranberry-sauce joke is left off the page; no joke added. The hook is the description's opening table scene.
- E129: hook and "a pardon that began with a joke" follow the description. On air Lucy says the Reagan "joke" account rests on a single source; the short blurb does not carry that caveat. Reword if you want it.
- E127: "Nobody the hosts meet is making it up" follows the description.
- No family details, no EP130 (grep for ep130 / E130 / Black Friday in every changed text file: 0).

## Film block
- EP105: `98g7uvm36b8` "The Ring of Solomon — How a King With No Ring Became Lord of the Jinn", 30:27, public. Trailer Short `rcaOMu_JBzs`, 1:04, public. Both read back via the YouTube Data API (OAuth token), channel UCrJRpDKncjiRMtDlrYGfK4w.
- Markup copied from the EP102 block. Home Films grid, `/episodes/` and blog index picked it up (31 films). No other film added.

## Regenerated
`scripts/build_site_indexes.py --refresh` (129 episodes, 31 films): home, `/episodes/`, blog index, sitemap. `apply_le_site_shell.py`: 0 changed.

## The date filter noted on 11-23
Not a bug. The generator skips an episode only when it has no blog page and its date is after today. On 11-23, EP127-129 were still in the future. EP129 (today) is listed. Nothing changed in the script.

## Checks
- `site_linkcheck.py`: 270 pages, 4869 internal refs, 0 broken. External: 4 broken, all on older or shared links (EP68 pubmed 203; podchaser 202 on home, links, start); none on new pages. Run before a one-sentence text edit on EP127.
- Tag balance clean on changed HTML.
- Previews: `~/lucy-goose-home/_site_preview/catchup-1126/`. Viewed: ep127, ep128, ep129, ep105 pages (ep127 before the one-sentence edit), blog index, home desktop, episodes mobile.

Nothing pushed or restarted; functions/, wrangler.toml, schema.sql untouched.
