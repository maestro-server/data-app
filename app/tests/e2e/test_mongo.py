import unittest

from app import app
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())


class MongoTests(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        self.app = app.test_client()
        self.assertEqual(app.debug, False)

    # executed after each test
    def tearDown(self):
        pass

    def test_simple_request(self):
        response = self.app.get('/servers?query=%27{}%27', follow_redirects=True)
        self.assertEqual(response.status_code, 401)


if __name__ == "__main__":
    unittest.main()
