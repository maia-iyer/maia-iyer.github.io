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
| Industry experience | `src/experience/*.md` |
| Education & credentials | `src/credentials/*.md` |
| Layout / styles | `src/index.njk`, `src/css/styles.css` |

### Highlighted works

The Highlighted works section is not a separate folder. Mark any talk or writing entry with:

```yaml
kind: Talk          # label shown in Highlighted works (e.g. Talk, Blog, Podcast)
featured: true
featuredOrder: 1    # sort key within Highlighted works only
```

Put the short blurb in the markdown body (below the frontmatter). That body is used only in Highlighted works; the Talks / Publications lists ignore it.

To change what’s featured, toggle `featured` / `featuredOrder` on the source file — no duplicates to keep in sync.

## Deploy

Pushes to `main` build and publish via GitHub Actions. The `_site` output is not committed.

In the repo **Settings → Pages**, set Source to **GitHub Actions**.
