from app.controller.factory.dc import DcApp
from app.repository.connections import Connections


class DcConnectionsApp(DcApp):
    """
@api {get} /connections 1. Get all connections (GET)
    @apiName GetConnections
    @apiGroup Connections

    @apiParam {Object} query Filters.
    <br/>
    <pre class="prettyprint language-json" data-type="json">
    <code>{
    <br/>   "query": {
    <br/>       "roles": {
    <br/>           "_id": (String) // Must be
    <br/>       },
    <br/>       "limit": (Number)
    <br/>       "page": (Number)
    <br/>   }
    <br/>}
    <br/><br/>
    // You can use any field do filters
    <br/>{
    <br/>   "query": {
    <br/>       "roles": {
    <br/>           "_id": (String) // Must be
    <br/>       },
    <br/>       "_id": (String)
    <br/>       "name": (String)
    <br/>       "limit": (Number)
    <br/>       "page": (Number)
    <br/>   }
    <br/>}
    </code>
    </pre>

    query.roles._id Must be required.

    @apiPermission JWT Private (MAESTRO_SECRETJWT_PRIVATE)
    @apiHeader (Header) {String} Authorization JWT {Token}

    @apiError (Error) PermissionError Token don`t have permission
    @apiError (Error) Unauthorized Invalid Token

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [{
        'found': (Number),
        'total_pages': (Number),
        'page': (Number),
        'limit': (Number),
        'items': (Array)
    }]

    """

    """

    @api {post} /connections 2. Get all connections (POST)
    @apiName PostConnections
    @apiGroup Connections
    @apiDescription Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.

    @apiParam {Object} query Filters.
    <br/>
    <pre class="prettyprint language-json" data-type="json">
    <code>{
    <br/>   "query": {
    <br/>       "roles": {
    <br/>           "_id": (String) // Must be
    <br/>       },
    <br/>       "limit": (Number)
    <br/>       "page": (Number)
    <br/>   }
    <br/>}
    </code>
    </pre>

    query.roles._id Must be required.

    @apiPermission JWT Private (MAESTRO_SECRETJWT_PRIVATE)
    @apiHeader (Header) {String} Authorization JWT {Token}

    @apiError (Error) PermissionError Token don`t have permission
    @apiError (Error) Unauthorized Invalid Token

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [{
        'found': (Number),
        'total_pages': (Number),
        'page': (Number),
        'limit': (Number),
        'items': (Array)
    }]

    """

    """

    @api {put} /connections 3. Create or edit a list of entities
    @apiName PutConnections
    @apiGroup Connections
    @apiDescription Batch create or edit entities.

    @apiParam {Array} body List of batches data, if exist _id this item only be updated, otherwise will be created.

    @apiPermission JWT Private (MAESTRO_SECRETJWT_PRIVATE)
    @apiHeader (Header) {String} Authorization JWT {Token}

    @apiError (Error) PermissionError Token don`t have permission
    @apiError (Error) Unauthorized Invalid Token

    @apiSuccessExample {json} Success-Response:
    HTTP/1.1 200 OK
    [{
        'filter': (Object),
        'data': (Array)
    }]
    """
    def __init__(self):
        self.entity = Connections
