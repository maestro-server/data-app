import re
import datetime
from pydash.objects import get
from app.repository.model import Model



class Ruler(object):
    @staticmethod
    def searchID(key, rule):
        id = re.search('(^_id)|(\._id)', key)

        if id:
            return Ruler.makeObjectId(key, rule)

        return rule

    @staticmethod
    def searchAt(key, rule):
        time = re.search('_at', key)

        if time and rule:
            if isinstance(rule, dict):
                for k, v in rule.items():
                    rule[k] = Ruler.makeDatetime(v)

            if isinstance(rule, str):
                rule = Ruler.makeDatetime(rule)

        return rule

    @staticmethod
    def makeDatetime(rule):
        if type(rule) is str:
            return datetime.datetime.strptime(rule[:19] + "Z", "%Y-%m-%dT%H:%M:%SZ")

    @staticmethod
    def makeObjectId(key, rule):
        if isinstance(rule, list):
            arr = map(lambda x: Ruler.searchID(key, x), rule)
            return list(arr)

        return Model.castObjectId(rule)

    @staticmethod
    def translateLists(key, rule):
        if isinstance(rule, list):
            rule = {'$in': rule}

        return rule

    @staticmethod
    def setV(source, batch):
        return source

    @staticmethod
    def switch(source, batch, default=None):
        return get(batch, source, default)
