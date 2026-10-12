# Santiago Hernández Villa — Portfolio Website

Responsive bilingual (EN/ES) static portfolio for **Business Intelligence, Data Analytics, Mathematical Optimization and Process Improvement**.

## Run locally

Open `index.html` in a browser, or serve it from this directory:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`. No build step or dependencies are required. Google Fonts are optional; the site has system font fallbacks.

## Deploy to GitHub Pages

1. Create a new repository (e.g. `santiago-portfolio`).
2. Upload the contents of this folder to the repository root.
3. In **Settings → Pages**, select **Deploy from a branch**, `main`, `/ (root)`.
4. Wait for GitHub Pages to publish and open the URL shown in Pages settings.

## Site structure

- `index.html` — page sections and semantic markup.
- `styles.css` — responsive design.
- `script.js` — bilingual copy, skill taxonomy, project metadata, filters and case-study dialog.
- `assets/` — owner-supplied original photo and an authentic cropped web version (no generative edits).
- `demo-data-quality/` — **real, runnable synthetic-data example** with tests.
- `CONTENT_REVIEW.md` — editorial checklist and claims requiring confirmation.

## Content and confidentiality

- Academic projects are described as **team or individual academic work**, not employer production deployments.
- A reported +51% retail scenario is a **modeled academic result**, not verified deployed commercial uplift.
- The 23% reduction in operator travel is a **résumé-reported academic project result**.
- Professional projects are labeled **synthetic demos planned**, except the standalone data-quality sample included here.
- **No employer source code, client data, tariff tables, internal system screenshots or confidential business rules are included.**
- Do not upload original partner/company reports without verifying permission to publish.
- Contact email and LinkedIn are configured from owner-provided information. GitHub URL is not yet supplied.

## Updating projects

Edit the `projects` array in `script.js`. Each project includes an `academic` or `professional` category and English/Spanish summaries, methods, evidence and next steps. Never describe a planned demo as implemented until code/tests/screenshots are published.

## Next improvements

- Confirm GitHub profile URL (email and LinkedIn are already configured).
- Publish self-contained synthetic repositories for the retail optimizer, bike-share routing and downtime statistics.
- Add tested repo links to case studies.
- Replace draft case-study copy with individual contributions, public screenshots and measured reproducible results.
- Add SEO/social cards, favicon, custom domain and analytics only with consent.

## Design direction (v1.1)
Hybrid corporate/minimalist + subtle technical visual language. The portrait is a crop of the original user-supplied photo, not an AI-generated replacement.

## v2 — Expanded case studies

This update adds 13 illustrated case studies, 11 original analytical graphics, bilingual deep-dive modals, CENEVAL EGEL recognition, Tecnológico de Monterrey academic recognition, Nebrija exchange, Spanish/English/French language information, and Mandarin currently in progress. It also adds a separate RPA savings case with clearly qualified €13,452/year CV-reported figure. Source and privacy notes are in `CASE_STUDY_SOURCES.md`.
