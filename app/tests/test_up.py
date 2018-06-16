import unittest

import os
import json
from app import app
from app import views
from pydash import pick
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())


class BasicTests(unittest.TestCase):

    # executed prior to each test
    def setUp(self):
        self.app = app.test_client()
        self.assertEqual(app.debug, False)

    # executed after each test
    def tearDown(self):
        pass

    def test_main_page(self):
        response = self.app.get('/', follow_redirects=True)
        dtv = json.loads(response.data.decode('utf-8'))

        root_path = os.path.join(app.root_path, '..')

        file = open(root_path + '/package.json')
        json_data = file.read()
        data = json.loads(json_data)

        file.close()
        compare = pick(data, ['name', 'provider', 'description', 'version', 'license'])

        self.assertEqual(dtv.get('version'), compare.get('version'))


if __name__ == "__main__":
    unittest.main()
