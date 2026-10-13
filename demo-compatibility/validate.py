"""Fictional pair catalog. Unknown is distinct from explicitly invalid."""
import csv
from pathlib import Path

def normalize(value):return str(value or "").strip().casefold()
def validate(rows,catalog):
    rules={}
    for row in catalog:
        pair=(normalize(row.get("mode")),normalize(row.get("service")))
        flag=normalize(row.get("allowed"))
        if not all(pair) or flag not in ("0","1") or pair in rules:raise ValueError("Invalid or duplicate catalog rule")
        rules[pair]=flag=="1"
    ids=[str(row.get("id") or "").strip() for row in rows]
    if any(not i for i in ids) or len(ids)!=len(set(ids)):raise ValueError("Unique nonempty IDs required")
    result=[]
    for row,key in zip(rows,ids):
        pair=(normalize(row.get("mode")),normalize(row.get("service")))
        status="Missing" if not all(pair) else "Unknown" if pair not in rules else "OK" if rules[pair] else "Invalid"
        result.append({"id":key,"mode":pair[0],"service":pair[1],"status":status})
    return result

def main():
    root=Path(__file__).resolve().parent
    def load(name):
        with (root/name).open(newline="") as f:return list(csv.DictReader(f))
    rows=validate(load("records.csv"),load("catalog.csv"))
    with (root/"output.csv").open("w",newline="") as f:
        w=csv.DictWriter(f,fieldnames=["id","mode","service","status"]);w.writeheader();w.writerows(rows)
    print(rows)
if __name__=="__main__":main()
