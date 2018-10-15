
from flask_restful.reqparse import RequestParser


class syncValidate(object):
    def validate(self):
        valid = RequestParser(bundle_errors=True)
        valid.add_argument("entity", required=True)
        valid.add_argument("query", required=True)
        valid.add_argument("body", required=True)

        return valid.parse_args()
