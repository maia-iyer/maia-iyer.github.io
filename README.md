# maia-iyer.github.io

Personal site built with [Eleventy](https://www.11ty.dev/).

## Local development

Requires Node.js 22+ (this repo expects `npm` / `npx`).

```bash
npm install
npm start
```

Open the URL Eleventy prints (usually `http://localhost:8080`).

## Edit content

| What | Where |
| --- | --- |
| Name, role, social links | `src/_data/site.json` |
| About bio | `src/about.md` |
| Technical publications (Medium + papers) | `src/writing/*.md` |
| Conference talks & podcasts | `src/talks/*.md` |
| Experience & education | `src/experience/*.md` — set `logo:` to a file under `src/assets/orgs/` |
| Credentials badges | `src/credentials/*.md` — set `credly:` to a Credly badge UUID to embed |
| Layout / styles | `src/index.njk`, `src/css/styles.css` |

### Talks (`src/talks/*.md`)

Titles are plain text. Optional resource links render next to the title when present:

```yaml
recording: https://...              # [recording]
slides: /assets/2026.slides.foo.pdf # [slides]
poster: /assets/2026.poster.foo.pdf # [poster]
event: https://...                  # [event] (schedule / event page)
```

None of these fields are required. Drop PDFs under `src/assets/` (passthrough-copied to `/assets/`).

### Highlighted works

The Highlighted works section is not a separate folder. Mark any talk or writing entry with:

```yaml
kind: Talk          # label shown in Highlighted works (e.g. Talk, Blog, Podcast)
featured: true
featuredOrder: 1    # sort key within Highlighted works only
```

Put the short blurb in the markdown body (below the frontmatter). That body is used only in Highlighted works; the Talks / Publications lists ignore it.

Featured entries can show media under the blurb:

- **Talks / podcasts** with a YouTube `recording:` URL get a click-to-play embed automatically.
- **Writing** with an external `url:` get a Medium-style link preview. Optional fields:

```yaml
image: /assets/previews/mcp-oauth.jpg   # cover image
preview: Short dek shown in the preview # optional subtitle
embed: false                            # opt out of media for this entry
```

To change what’s featured, toggle `featured` / `featuredOrder` on the source file — no duplicates to keep in sync.

## Deploy

Pushes to `main` build and publish via GitHub Actions. The `_site` output is not committed.

In the repo **Settings → Pages**, set Source to **GitHub Actions**.
