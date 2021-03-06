import json
from flask_restful import Resource
from pydash import map_values_deep, has

from app.repository.aggregate import Aggregate
from app.libs.deepUpdateForMongo import updaterIds
from app.error.factoryInvalid import FactoryInvalid
from app.services.privateAuth import private_auth
from app.validate.aggregateValidate import aggregateValidate



class AggregationApp(Resource):
    """
    @api {post} /aggregate> 1. Execute aggregate query
    @apiName PostAggregate
    @apiGroup Aggregate

    @apiParam (Body x-www) {String} entity Table name (Ex. server, applications, clients, system)
    @apiParam (Body x-www) {Json} query Aggregation query (See, mongodb aggregate for more information)

    @apiPermission JWT Private (MAESTRO_SECRETJWT_PRIVATE)
    @apiHeader (Header) {String} Authorization JWT {Token}

    @apiError (Error) PermissionError Token don`t have permission
    @apiError (Error) Unauthorized Invalid Token

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    {
        'items': [
            {
            }
        ]
    }
    """

    @private_auth
    def post(self):
        valid = aggregateValidate().validate()

        if valid:
            try:
                pipeline = json.loads(valid['pipeline'])
                entity = valid['entity']
            except Exception as error:
                return FactoryInvalid.responseInvalid({'msg': str(error)}, 422)

            if not has(pipeline, '[0].$match.roles\._id'):
                return FactoryInvalid.responseInvalid(
                    {'msg': 'Must delimite $match which roles._id ($match {role.id})'}, 422)

            args = map_values_deep(pipeline, updaterIds)
            return {
                'items': Aggregate(entity).pipeline(args)
            }
