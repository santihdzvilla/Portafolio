import unittest,sqlite3
from pathlib import Path
DB=Path(__file__).resolve().parents[1]/'data/synthetic.db'
class SyntheticModelTests(unittest.TestCase):
 def setUp(self):self.db=sqlite3.connect(DB)
 def tearDown(self):self.db.close()
 def test_record_grain(self):
  self.assertEqual(self.db.execute('SELECT COUNT(*) FROM shipments').fetchone()[0],2400)
  self.assertEqual(self.db.execute('SELECT COUNT(*) FROM financial_summary').fetchone()[0],2400)
  self.assertEqual(self.db.execute('PRAGMA foreign_key_check').fetchall(),[])
 def test_finance_no_duplication(self):
  actual=self.db.execute('SELECT SUM(revenue) FROM financial_summary').fetchone()[0]
  raw=self.db.execute("SELECT SUM(amount) FROM charges WHERE kind='revenue'").fetchone()[0]
  self.assertAlmostEqual(actual,raw,places=6)
  naive=self.db.execute("SELECT SUM(c.amount) FROM charges c JOIN units u ON c.shipment_id=u.shipment_id WHERE c.kind='revenue'").fetchone()[0]
  self.assertGreater(naive,actual)
 def test_missing_and_failure_examples(self):
  for query in ['SELECT COUNT(*) FROM shipments WHERE invoice IS NULL','SELECT COUNT(*) FROM shipments WHERE actual_days>sla_days',"SELECT COUNT(*) FROM automation_events WHERE status='Review'",'SELECT COUNT(*) FROM units WHERE weight IS NULL']:
   self.assertGreater(self.db.execute(query).fetchone()[0],0)
 def test_hours_savings_nonnegative(self):
  self.assertEqual(self.db.execute('SELECT COUNT(*) FROM automation_events WHERE minutes_after>minutes_before').fetchone()[0],0)
  self.assertGreater(self.db.execute('SELECT SUM(minutes_before-minutes_after) FROM automation_events').fetchone()[0],0)
if __name__=='__main__':unittest.main()
