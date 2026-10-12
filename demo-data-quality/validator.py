"""Standalone synthetic data-quality demo; no employer data or business rules."""
from __future__ import annotations
import csv
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent
REQUIRED_FIELDS = ('fragile_handling', 'appointment')


def validate(master_rows: list[dict], detail_rows: list[dict], requirement_rows: list[dict]) -> list[dict]:
    """Return exactly one row per master ID with required detail checks.

    Requirement rows use '1' to indicate mandatory detail labels. A missing
    detail is flagged; an optional detail is OK. Null/missing IDs are rejected.
    """
    masters = [str(row['order_id']).strip() for row in master_rows]
    if any(not key for key in masters) or len(masters) != len(set(masters)):
        raise ValueError('Master IDs must be nonempty and unique')
    details = defaultdict(set)
    for row in detail_rows:
        key = str(row.get('order_id') or '').strip()
        label = str(row.get('detail_type') or '').strip().lower()
        if key and label:
            details[key].add(label)
    required = defaultdict(set)
    for row in requirement_rows:
        key = str(row.get('order_id') or '').strip()
        if key:
            for field in REQUIRED_FIELDS:
                if str(row.get(field) or '').strip() == '1':
                    required[key].add(field)
    result = []
    for key in masters:
        checks = {f'check_{field}': 'OK' if field not in required[key] or field in details[key] else 'Incorrect' for field in REQUIRED_FIELDS}
        result.append({'order_id': key, **checks, 'validation_flag': 'Incorrect' if 'Incorrect' in checks.values() else 'OK'})
    return result


def load_csv(name: str) -> list[dict]:
    with (ROOT / name).open(newline='', encoding='utf-8') as f:
        return list(csv.DictReader(f))


def main() -> None:
    rows = validate(load_csv('orders.csv'), load_csv('details.csv'), load_csv('requirements.csv'))
    with (ROOT / 'validation_output.csv').open('w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['order_id', 'check_fragile_handling', 'check_appointment', 'validation_flag'])
        writer.writeheader()
        writer.writerows(rows)
    print(f'Validated {len(rows)} orders; {sum(r["validation_flag"] == "Incorrect" for r in rows)} exceptions.')


if __name__ == '__main__':
    main()
