# rike.dev

Personal site of Ulrike Exner — Next.js static export, deployed on Netlify.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

`next-sitemap` runs on `postbuild` and regenerates `public/sitemap.xml`,
`public/sitemap-0.xml`, and `public/robots.txt` from the routes in `pages/`.
Configuration lives in `next-sitemap.js`.

## Structure

- `pages/` — routes (`/`, `/legal`, `/404`)
- `components/Layout.js` — nav + footer wrapper
- `data/events.js` — list of talks/workshops rendered on the homepage
- `styles/globals.css` — single stylesheet
- `public/` — favicon, manifest, generated sitemaps
- `netlify.toml` — 301 redirects for legacy URLs (`/kurse`, `/blog/*`, dated archives)
