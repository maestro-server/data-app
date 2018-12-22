from flask_restful import Resource

from app.services.privateAuth import private_auth
from app.validate.connValidate import connValidate
from app.repository.connections import Connections


class ConnectionApp(Resource):
    """
    @api {get} /connection/<instance> 1. Get single connection
    @apiName GetConnection
    @apiGroup Connection

    @apiParam {String} instance Instance ID of connection.

    @apiPermission JWT Private (MAESTRO_SECRETJWT_PRIVATE)
    @apiHeader (Header) {String} Authorization JWT {Token}

    @apiError (Error) PermissionError Token don`t have permission
    @apiError (Errr) Unauthorized Invalid Token

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [{
        'name': (Number)
    }]
    """

    @private_auth
    def get(self, instance):
        return Connections(instance).get()

    """
    @api {post} /connection/<instance> 2. Change connection state
    @apiName PostConnection
    @apiGroup Connection
    
    @apiParam (Query) {String} instance Instance ID of connection.
    @apiParam (Body x-www) {String} status Status [Sucess, warning, error]
    @apiParam (Body x-www) {String} task Specific task [server-list, dbs-list and etc]
    @apiParam (Body x-www) {String} msg Message

    @apiPermission JWT Private (MAESTRO_SECRETJWT_PRIVATE)
    @apiHeader (Header) {String} Authorization JWT {Token}

    @apiError (Error) PermissionError Token don`t have permission
    @apiError (Error) Unauthorized Invalid Token

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [{
        'name': (string),
        'status': (string) [sucess, warning or error]
        'task': (string)
    }]
    """

    @private_auth
    def post(self, instance):
        valid = connValidate().validate()

        if valid:
            Connection = Connections(instance)
            return Connection.markStatus(valid['status'], valid['task']).updateState(valid['msg'])

        return valid
