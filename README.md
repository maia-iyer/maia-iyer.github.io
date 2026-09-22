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
| Highlighted works | `src/works/*.md` |
| Technical publications (Medium + papers) | `src/writing/*.md` |
| Conference talks | `src/talks/*.md` |
| Industry experience | `src/experience/*.md` |
| Education & credentials | `src/credentials/*.md` |
| Layout / styles | `src/index.njk`, `src/css/styles.css` |

## Deploy

Pushes to `main` build and publish via GitHub Actions. The `_site` output is not committed.

In the repo **Settings → Pages**, set Source to **GitHub Actions**.
