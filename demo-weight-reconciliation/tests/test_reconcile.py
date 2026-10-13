import unittest
from reconcile import weight,rounded,reconcile
class TestReconciliation(unittest.TestCase):
 def test_boundaries(self):
  self.assertEqual([rounded(weight(v)) for v in ["37.49","37.50","37.51"]],[37,38,38])
 def test_aggregate_before_round(self):
  self.assertEqual(reconcile([{"id":"A","weight":"1"}],[{"id":"A","unit":"1","weight":"0.49"},{"id":"A","unit":"2","weight":"0.49"}])[0]["status"],"OK")
 def test_missing_and_zero(self):
  self.assertEqual(reconcile([{"id":"A","weight":"0"}],[])[0]["status"],"Missing")
  self.assertEqual(reconcile([{"id":"A","weight":"0"}],[{"id":"A","unit":"1","weight":"0"}])[0]["status"],"OK")
  self.assertEqual(reconcile([{"id":"A","weight":"1"}],[{"id":"A","unit":"1","weight":""}])[0]["status"],"Missing")
 def test_review(self):
  self.assertEqual(reconcile([{"id":"A","weight":"2"}],[{"id":"A","unit":"1","weight":"1"}])[0]["status"],"Review")
 def test_reject_bad_data(self):
  for value in ["-1","NaN","Infinity","abc"]:
   with self.assertRaises(ValueError): weight(value)
  for masters,details in [([{"id":"A"},{"id":"A"}],[]),([{"id":"A"}],[{"id":"B","unit":"1","weight":"1"}]),([{"id":"A"}],[{"id":"A","unit":"1","weight":"1"}]*2)]:
   with self.assertRaises(ValueError):reconcile(masters,details)
if __name__=="__main__":unittest.main()
