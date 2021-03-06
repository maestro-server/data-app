import os
import json
from math import ceil
from flask import request
from flask_restful import Resource
from pydash import defaults, has, map_values_deep, omit

from app.libs.deepUpdateForMongo import updaterIds
from app.services.filter import FilterAPI
from app.error.factoryInvalid import FactoryInvalid
from app.services.privateAuth import private_auth


class DcApp(Resource):

    @private_auth
    def get(self):
        req = request.args.to_dict()

        if not has(req, 'query'):
            return FactoryInvalid.responseInvalid(
                                                 {'msg': 'Query params is needed'},
                                                 422)

        if not has(req, 'query.roles._id'):
            return FactoryInvalid.responseInvalid(
                                                 {'msg': 'Must have owner id'},
                                                 422)

        pagination = defaults(
                              req,
                              {'limit': os.environ.get("MAESTRO_SCAN_QTD", 200),
                              'page': 1})

        limit = int(pagination['limit'])
        page = int(pagination['page'])
        skip = (page - 1) * limit

        query = json.loads(req['query'])

        args = FilterAPI() \
            .addBatchFilters(query) \
            .make()

        count = self.entity().count(args)
        return {
            'found': self.entity().count(args),
            'total_pages': ceil(count / limit),
            'page': page,
            'limit': limit,
            'items': self.entity().getAll(args, limit, skip)
        }

    @private_auth
    def post(self):
        req = request.get_json(force=True)
        pagination = defaults(
                              req,
                              {'limit': os.environ.get("MAESTRO_SCAN_QTD", 200),
                              'page': 1})

        limit = int(pagination['limit'])
        page = int(pagination['page'])
        skip = (page - 1) * limit

        query = {}

        if has(req, 'query'):
            query = json.loads(req['query'])

        args = FilterAPI() \
            .addBatchFilters(query) \
            .make()

        count = self.entity().count(args)
        return {
            'found': count,
            'total_pages': ceil(count / limit) + 1,
            'page': page,
            'limit': limit,
            'items': self.entity().getAll(args, limit, skip)
        }

    @private_auth
    def put(self):
        data = request.get_json(force=True)

        objToPut = []

        for item in data['body']:
            filters = self.makeFilter(item)

            item = omit(item, ['_id', 'updated_at'])
            item = map_values_deep(item, updaterIds)

            objToPut.append({
                'filter': filters,
                'data': item
            })

        return self.entity().batch_process(objToPut)

    def makeFilter(self, item):
        opts = ['_id', 'unique_id']
        filter = {}

        for opt in opts:
            if (opt in item):
                data = item.get(opt)

                if (opt == '_id'):
                    data = self.entity().castObjectId(data)

                filter[opt] = data
                break

        return filter
