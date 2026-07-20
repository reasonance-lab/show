# Reasonance Labs

Showroom site for [reasonance-lab](https://github.com/reasonance-lab) — a single-page
portfolio linking out to projects across AI & learning, chemistry & science,
robotics & hardware, and developer tools.

**Live:** https://reasonance-lab.github.io/

*reasonance* /ˌriː.zəˈnɑːns/ — *n.* the amplification an idea gains when
reasoning is iterated until it rings true.

## Editing content

All project entries live in **[`js/projects.data.js`](js/projects.data.js)** — one array,
one object per card. The schema is documented at the top of that file. Add, remove or
reorder entries there; nothing else needs to change.

> Current entries are **placeholders**: names and descriptions are modeled on real
> projects, but most `links` are empty pending final URLs. Fill in `links.live` /
> `links.repo` as projects go public, and flip `status` accordingly.

Domain sections (headings, blurbs, hues) are static HTML in `index.html` — each
`<section class="domain">` sets its accent with `style="--hue:N"`, and every card
inside inherits it. The `<noscript>` lists in each section should be kept roughly in
sync with the data file by hand.

## Stack

None. Hand-written HTML/CSS/vanilla JS, no build step, no dependencies beyond one
self-hosted variable font ([Syne](https://fonts.google.com/specimen/Syne), OFL).
The hero is a ~100-line canvas drawing layered standing waves; it pauses when
hidden and respects `prefers-reduced-motion`.

## Local development

```
py -m http.server 8080
```

then open http://localhost:8080. No build, no watch — edit and refresh.

## Deployment

Pushed to `main` → GitHub Pages ("deploy from a branch", root) publishes
automatically. `.nojekyll` keeps Pages from running Jekyll. Changes can take
up to ~10 minutes to propagate through the Pages CDN.
