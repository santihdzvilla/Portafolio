# demo-weight-reconciliation

Independent synthetic demonstration; no employer data, source code or rules. Python 3.10+, standard library only.

## Run / Ejecutar

```bash
cd demo-weight-reconciliation
python reconcile.py
python -m unittest discover -s tests -v
```

Input CSVs and generated `output.csv` are fictional. One output per unique master record. Input errors raise ValueError rather than producing a misleading OK.

Los CSV y las reglas son ficticios. Una salida por registro maestro único. Los datos inválidos generan ValueError. Esta demo no reproduce una implementación de producción.
