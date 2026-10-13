import sys
import unittest
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from validator import validate, load_csv


class ValidationTests(unittest.TestCase):
    def test_exactly_one_row_per_master(self):
        result = validate(load_csv('orders.csv'), load_csv('details.csv'), load_csv('requirements.csv'))
        self.assertEqual(len(result), 5)
        self.assertEqual(len({r['order_id'] for r in result}), 5)

    def test_duplicate_detail_does_not_duplicate_order(self):
        result = validate([{'order_id': 'A'}], [{'order_id': 'A', 'detail_type': 'appointment'}] * 3,
                          [{'order_id': 'A', 'appointment': '1'}])
        self.assertEqual(len(result), 1)
        self.assertEqual(result[0]['validation_flag'], 'OK')

    def test_missing_required_detail(self):
        result = validate([{'order_id': 'A'}], [], [{'order_id': 'A', 'appointment': '1'}])
        self.assertEqual(result[0]['check_appointment'], 'Incorrect')

    def test_optional_detail_is_ok(self):
        result = validate([{'order_id': 'A'}], [], [{'order_id': 'A', 'appointment': ''}])
        self.assertEqual(result[0]['validation_flag'], 'OK')

    def test_duplicate_master_rejected(self):
        with self.assertRaises(ValueError):
            validate([{'order_id': 'A'}, {'order_id': 'A'}], [], [])

    def test_exact_match_not_partial(self):
        result = validate([{'order_id': 'A'}], [{'order_id': 'A', 'detail_type': 'appointment-extra'}],
                          [{'order_id': 'A', 'appointment': '1'}])
        self.assertEqual(result[0]['validation_flag'], 'Incorrect')


if __name__ == '__main__':
    unittest.main()

class NullMasterTests(unittest.TestCase):
    def test_null_id_is_rejected(self):
        with self.assertRaises(ValueError):
            validate([{"order_id": None}], [], [])
