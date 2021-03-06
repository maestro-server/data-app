import datetime
import re
from app import db
from bson.objectid import ObjectId
from pymongo import InsertOne, UpdateOne
from pymongo.errors import BulkWriteError
from app.error.factoryInvalid import FactoryInvalid


class Model(object):
    def __init__(self, id=None, name=None):
        if name is None:
            name = self.__class__.__name__.lower()

        self.col = db[name]
        self.__id = id

    def getAll(self, filter={}, limit=10, skip=0):
        result = self.col.find(filter) \
            .limit(limit) \
            .skip(skip)

        return list(result)

    def count(self, filter={}):
        return self.col.count(filter)

    def get(self):
        return self.col.find_one(Model.makeObjectId(self.__id))

    def update(self, data):
        if not self.__id:
            return FactoryInvalid.responseInvalid(
                {'msg': 'Id not setted'},
                422)

        setUpdatedData = {'$set': data}
        result = self.col.update_one(Model.makeObjectId(self.__id), setUpdatedData)
        return result.raw_result

    def updateMany(self, filters, data):
        setUpdatedData = {'$set': data}
        result = self.col.update_many(filters, setUpdatedData)
        return result.raw_result

    def batch_process(self, data):
        requests = []
        for item in data:
            obj = {**Model.makeDateAt(key='updated_at'), **item['data']}
            
            if item['filter']:
                args = Model.reservedWordMongo(obj)
                cal = UpdateOne(item['filter'], args, upsert=True)
            else:
                obj = {**Model.makeDateAt(key='created_at'), **obj}
                cal = InsertOne(obj)

            requests.append(cal)

        try:
            result = self.col.bulk_write(requests, ordered=False)
        except BulkWriteError as bwe:
            print(bwe.details)
            raise

        return result.bulk_api_result

    @staticmethod
    def makeDateAt(key):
        return {key: datetime.datetime.utcnow()}

    @staticmethod
    def reservedWordMongo(obj):
        filter = {'$set': {}}
        for key, item in obj.items():
            if item is not None:
                if re.match(r"\$", key):
                    filter[key] = item
                else:
                    filter['$set'][key] = item

        return filter

    @staticmethod
    def makeObjectId(id):
        if id:
            return {'_id': Model.castObjectId(id)}

    @staticmethod
    def castObjectId(id):
        return ObjectId(id)
