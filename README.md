# Santiago Hernández Villa — Portfolio v2.1

Bilingual static portfolio for GitHub Pages. Original supplied portrait preserved. No build or private dependencies.

## Run / Ejecutar

Open `index.html`, or run `python -m http.server 8000` from this folder.

## GitHub Pages

Upload this folder’s contents to a repository root. Settings → Pages → Deploy from a branch → main → root. GitHub profile URL has not been supplied; none is fabricated. Publication remains pending owner review.

## Content

- `cases.json`: editable bilingual case catalog with sources, tools, attribution, evidence status, images and implementation folders.
- `python tools/build_catalog.py`: regenerates the browser adapter `case-studies.js` after catalog edits.
- `script.js`: navigation, homepage copy, skills, filters and modal rendering.
- `case-study.html?id=retail&lang=es`: standalone, shareable case pages using the same catalog as dialogs.
- `assets/`: authentic portrait and original reconstructed technical graphics. No raw reports included.
- `demo-data-quality/`, `demo-weight-reconciliation/`, `demo-compatibility/`: executable, standard-library Python demos with fictional inputs, output CSVs and tests.

## Demo validation

Run from each demo folder: `python -m unittest discover -s tests -v`. Demo-specific README files describe execution. These independent demonstrations do not reproduce company systems. Other implementations remain planned.

## Evidence

Coppel poster displays 94 / 122.5 / 135.8 M. The base-to-final change calculates to 44.5%, while the poster headline says +51%; the discrepancy is explicitly disclosed and the homepage does not use the +51% headline. Lean and other academic figures are reported proposals, not independently verified sustained production impact. RPA savings are a single reported aggregate, without initiative-level allocation. See `PUBLICATION_CHECKLIST.md` and `CHANGELOG.md`.

## Español

Portafolio estático bilingüe. `cases.json` centraliza contenido y evidencia. Incluye tres demos independientes con datos ficticios y pruebas. Publicación, permisos de marcas, contribuciones individuales y desglose de ahorros pendientes de confirmación. Los originales privados no se incluyen en el ZIP.
