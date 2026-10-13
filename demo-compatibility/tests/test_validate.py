import unittest
from validate import validate
class TestCompatibility(unittest.TestCase):
 def setUp(self): self.rules=[{"mode":"road","service":"standard","allowed":"1"},{"mode":"sea","service":"express","allowed":"0"}]
 def test_outcomes_and_normalization(self):
  rows=[{"id":"A","mode":" ROAD ","service":"Standard"},{"id":"B","mode":"sea","service":"express"},{"id":"C","mode":None,"service":"standard"},{"id":"D","mode":"air","service":"express"}]
  self.assertEqual([x["status"] for x in validate(rows,self.rules)],["OK","Invalid","Missing","Unknown"])
 def test_catalog_duplicates(self):
  with self.assertRaises(ValueError):validate([],self.rules+self.rules)
 def test_bad_flags(self):
  with self.assertRaises(ValueError):validate([],[{"mode":"road","service":"standard","allowed":"yes"}])
 def test_bad_master_ids(self):
  for rows in [[{"id":"A"},{"id":"A"}],[{"id":""}]]:
   with self.assertRaises(ValueError):validate(rows,self.rules)
if __name__=="__main__":unittest.main()
