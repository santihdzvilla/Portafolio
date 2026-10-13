"""Reproducible synthetic data. No company data, rates or confidential rules."""
import csv,json,random,sqlite3
from datetime import date,timedelta
from pathlib import Path
ROOT=Path(__file__).resolve().parent
rng=random.Random(3190)
clients=[{'id':f'C{i:02d}','name':f'Atlas {name}'} for i,name in enumerate(['Mobility','Devices','Apparel','Foods','Energy','Home','Labs','Retail','Industrial','Digital','Health','Components'],1)]
shipments=[];units=[];charges=[];events=[]
for i in range(1,2401):
 sid=f'DEMO-{i:05d}';day=date(2026,7,1)+timedelta(days=rng.randrange(92));mode=rng.choice(['Road','Air','Sea']);sla={'Road':3,'Air':2,'Sea':8}[mode];actual=max(1,sla+rng.choice([-1,0,0,0,0,1,2]));unit_count=rng.randint(1,4)
 weights=[round(rng.uniform(3,90),2) for _ in range(unit_count)];total=round(sum(weights),2);declared=round(total+rng.choice([0,0,0,0,0,1.2,4.7]),2)
 service=rng.choice(['Standard','Express']) if mode!='Sea' else rng.choice(['Standard','Standard','Standard','Express'])
 invoice=None if rng.random()<.055 else f'INV-{i:05d}'
 master={'id':sid,'client_id':rng.choice(clients)['id'],'created':str(day),'mode':mode,'service':service,'sla_days':sla,'actual_days':actual,'declared_weight':None if rng.random()<.03 else declared,'invoice':invoice,'currency':'USD','required_appointment':int(mode=='Road'),'appointment':None if rng.random()<.10 else f'AP-{i:05d}','distance_km':rng.randint(80,2500)}
 shipments.append(master)
 for j,w in enumerate(weights,1):units.append({'shipment_id':sid,'unit_id':f'U{j}','weight':None if rng.random()<.008 else w})
 cost=round(rng.uniform(150,1400),2);revenue=round(cost*rng.choice([.86,1.10,1.18,1.28,1.45]),2)
 charges.extend([{'shipment_id':sid,'kind':'revenue','amount':revenue},{'shipment_id':sid,'kind':'cost','amount':cost}])
 if rng.random()<.84:
  success=rng.random()>.065;before=rng.choice([12,18,24]);after=rng.choice([2,3,4]) if success else before
  events.append({'shipment_id':sid,'workflow':rng.choice(['Validation','Reconciliation','Alerts']),'status':'Success' if success else 'Review','minutes_before':before,'minutes_after':after})
root=ROOT/'data';root.mkdir(exist_ok=True)
tables={'clients':clients,'shipments':shipments,'units':units,'charges':charges,'automation_events':events}
for name,rows in tables.items():
 with (root/(name+'.csv')).open('w',newline='') as f:
  w=csv.DictWriter(f,fieldnames=list(rows[0]));w.writeheader();w.writerows(rows)
p=root/'synthetic.db';p.unlink(missing_ok=True)
with sqlite3.connect(p) as db:
 db.execute('PRAGMA foreign_keys=ON')
 db.execute('CREATE TABLE clients (id TEXT PRIMARY KEY,name TEXT NOT NULL)')
 db.execute('CREATE TABLE shipments (id TEXT PRIMARY KEY,client_id TEXT REFERENCES clients(id),created TEXT,mode TEXT,service TEXT,sla_days INTEGER,actual_days INTEGER,declared_weight REAL,invoice TEXT,currency TEXT,required_appointment INTEGER,appointment TEXT,distance_km INTEGER)')
 db.execute('CREATE TABLE units (shipment_id TEXT REFERENCES shipments(id),unit_id TEXT,weight REAL,PRIMARY KEY(shipment_id,unit_id))')
 db.execute('CREATE TABLE charges (shipment_id TEXT REFERENCES shipments(id),kind TEXT,amount REAL,PRIMARY KEY(shipment_id,kind))')
 db.execute('CREATE TABLE automation_events (shipment_id TEXT PRIMARY KEY REFERENCES shipments(id),workflow TEXT,status TEXT,minutes_before INTEGER,minutes_after INTEGER)')
 for name,rows in tables.items():
  cols=list(rows[0]);db.executemany(f'INSERT INTO {name} ({",".join(cols)}) VALUES ({",".join("?" for _ in cols)})',[tuple(x[c] for c in cols) for x in rows])
 db.execute('CREATE INDEX shipment_filters ON shipments(client_id,created,mode)')
 db.execute('''CREATE VIEW financial_summary AS SELECT s.id,COALESCE(c.revenue,0) revenue,COALESCE(c.cost,0) cost FROM shipments s LEFT JOIN (SELECT shipment_id,SUM(CASE WHEN kind='revenue' THEN amount ELSE 0 END) revenue,SUM(CASE WHEN kind='cost' THEN amount ELSE 0 END) cost FROM charges GROUP BY shipment_id) c ON s.id=c.shipment_id''')
 assert db.execute('PRAGMA foreign_key_check').fetchall()==[]
 assert db.execute('SELECT COUNT(*) FROM financial_summary').fetchone()[0]==2400
 assert abs(db.execute('SELECT SUM(revenue) FROM financial_summary').fetchone()[0]-sum(x['amount'] for x in charges if x['kind']=='revenue'))<.01
payload={'meta':{'synthetic':True,'seed':3190,'records':2400,'range':['2026-07-01','2026-09-30'],'currency':'USD'},**tables}
(ROOT/'data.js').write_text('/* Synthetic snapshot generated from the same records as data/synthetic.db. */\nwindow.DASHBOARD_DATA='+json.dumps(payload,separators=(',',':'))+';\n')
print('Built 2,400 fictional shipments, normalized CSVs, SQLite and identical browser snapshot. Integrity and financial grain checks passed.')
