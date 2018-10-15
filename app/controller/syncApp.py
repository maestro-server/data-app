import json
from flask_restful import Resource
from pydash import map_values_deep
from app.libs.deepUpdateForMongo import updaterIds
from app.repository.model import Model
from app.error.factoryInvalid import FactoryInvalid
from app.validate.syncValidate import syncValidate


class SyncApp(Resource):

    # @api {post} /sync> 1. Execute syncronization command (update many)
    # @apiName PostSync
    # @apiGroup Sync

    # @apiParam (Body x-www) {Object} query Filter query
    # @apiParam (Body x-www) {Json} body Update data
    # @apiParam (Body x-www) {Str} entity Collection name. (servers, applications)

    # @apiSuccessExample {json} Success-Response:
    # HTTP/1.1 200 OK
    # {
    #     'results': {
    #         "ok": <number>,
    #         "n": <number>,
    #         "updatedExisting": <bool>,
    #         "nModified": <number>
    #     }
    # }

    def post(self):
        valid = syncValidate().validate()

        if valid:
            try:
                query = json.loads(valid['query'])
                body = json.loads(valid['body'])
                entity = valid['entity']
            except Exception as error:
                return FactoryInvalid.responseInvalid({'msg': str(error)}, 422)

            query = map_values_deep(query, updaterIds)
            return {
                'results':  Model(name=entity).updateMany(query, body)
            }
