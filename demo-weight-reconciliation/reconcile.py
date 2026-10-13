"""Fictional weight reconciliation; decimal half-up, aggregation before rounding."""
import csv
from decimal import Decimal, InvalidOperation, ROUND_HALF_UP
from pathlib import Path

def weight(value):
    if value is None or str(value).strip() == "": return None
    try: number=Decimal(str(value).strip())
    except InvalidOperation as exc: raise ValueError("Invalid weight") from exc
    if not number.is_finite() or number < 0: raise ValueError("Weight must be finite and nonnegative")
    return number

def rounded(value):
    return value.quantize(Decimal("1"),rounding=ROUND_HALF_UP)

def reconcile(masters, details):
    ids=[str(m.get("id") or "").strip() for m in masters]
    if any(not i for i in ids) or len(ids)!=len(set(ids)): raise ValueError("Master IDs must be unique and nonempty")
    grouped={i:[] for i in ids};units=set()
    for row in details:
        key=str(row.get("id") or "").strip();unit=str(row.get("unit") or "").strip()
        if key not in grouped: raise ValueError("Orphan detail")
        if not unit or (key,unit) in units: raise ValueError("Unit IDs must be unique per master")
        units.add((key,unit));grouped[key].append(weight(row.get("weight")))
    output=[]
    for m,key in zip(masters,ids):
        declared=weight(m.get("weight"));parts=grouped[key]
        total=sum(parts,Decimal(0)) if parts and all(p is not None for p in parts) else None
        status="Missing" if declared is None or total is None else "OK" if rounded(declared)==rounded(total) else "Review"
        output.append({"id":key,"declared":str(declared) if declared is not None else "","detail_total":str(total) if total is not None else "","status":status})
    return output

def main():
    root=Path(__file__).resolve().parent
    def load(name):
        with (root/name).open(newline="") as f:return list(csv.DictReader(f))
    rows=reconcile(load("masters.csv"),load("details.csv"))
    with (root/"output.csv").open("w",newline="") as f:
        w=csv.DictWriter(f,fieldnames=["id","declared","detail_total","status"]);w.writeheader();w.writerows(rows)
    print(rows)
if __name__=="__main__":main()
