# Interactive BI dashboard / Dashboard interactivo

Working browser demo integrated into `index.html#dashboard`. Four views: operations, data quality, financial control, automation. Client, month, mode, exception and shipment-ID filters update the same population. Select a workbench ID for record inspection. Export filtered records as CSV.

## Data pipeline

`python dashboard/build_data.py` regenerates deterministic fictional data (seed 3190): 2,400 shipments, 12 clients, July–September 2026. Normalized SQLite tables and CSVs are in `dashboard/data/`. `dashboard/data.js` is an identical browser snapshot; the site runs without a backend or SQLite browser dependency. Python SQLite is used to construct and validate the source model; JavaScript calculates the interactive dashboard from that snapshot. Changes to the database are reflected after rerunning the generator.

## Eight fictional rules

- Invoice exists.
- Appointment exists when required for Road.
- Header and aggregated handling-unit weights match after integer half-up rounding; missing weights fail.
- Sea/Express is incompatible in this fictional catalog.
- Actual transit days do not exceed expected SLA days (fictional: Road 3, Air 2, Sea 8).
- Revenue is at least cost.
- A recorded automation completed successfully. No recorded execution is a monitoring exception, not counted as a failed execution in the automation success KPI.
- Key data complete: invoice, header weight and all detail weights exist.

Only eight demo rule types are implemented. These do not claim to reproduce the professional 45+ control points.

## Definitions

SLA, completeness and exceptions: denominator is filtered shipments. Data-control pass rate: four data checks per filtered shipment. Automation success: successful recorded executions / recorded executions. Hours saved: sum(before minutes − after minutes) / 60; no annualization, wage conversion or association with reported RPA savings. Financial margin: summed revenue − summed cost, in fictional USD. Detail records are aggregated before comparisons; financial amounts are computed independently of unit multiplicity. Weekly rates are calculated from records rather than averaging precomputed percentages.

## Verify

```bash
python -m unittest discover -s dashboard/tests -v
node tools/dashboard-qa.js
```

These validate data and simulated interactions. They do not replace browser layout or accessibility review.

## Español

Datos completamente ficticios, separados de los logros profesionales. SQLite y el snapshot JS se generan desde los mismos registros. El navegador usa el snapshot local; no requiere servidor ni conexión externa. Los filtros recalculan métricas, gráficos, excepciones y CSV exportable. Las ocho reglas de ejemplo no son las reglas internas del empleador. Las horas simuladas no equivalen a los ahorros RPA declarados.
