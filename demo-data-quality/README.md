# Synthetic Data Quality Rules Engine

This is a **fully independent educational demonstration**. All identifiers and rules are fictional; no corporate data, code, rules or screenshots are used.

## Problem

An order can have many detail lines. A business requirement matrix marks certain detail types as mandatory. The validator must emit exactly one result per order, even when the detail table contains duplicate rows.

## Run

```bash
cd demo-data-quality
python validator.py
python -m unittest discover -s tests -v
```

Expected: five master orders, one exception (`DEMO-002`). The generated `validation_output.csv` is the resulting audit table.

## Model grain

- `orders.csv`: 1 row per order ID.
- `details.csv`: 0–N rows per order.
- `requirements.csv`: optional requirement flags, potentially multiple rows per order.
- `validation_output.csv`: exactly 1 row per order.

## Technical decisions

- Convert the detail rows into per-order sets, preventing one-to-many row multiplication.
- Aggregate mandatory requirements using set union.
- Compare **exact** normalized detail labels.
- Missing mandatory details produce `Incorrect`; optional details produce `OK`.
- Reject missing/duplicate master IDs rather than silently collapsing them.

## Planned extensions

Add equivalent SQL (`MAX(CASE WHEN...)`) and Qlik (`RESIDENT`, `GROUP BY`, `ApplyMap`) implementations, plus property-based tests and a synthetic dashboard.
