from app.controller.factory.dc import DcApp
from app.repository.adminer import Adminer


class DcAdminerApp(DcApp):
    """
    @api {get} /adminer 1. Get all configs (GET)
    @apiName GetAdminer
    @apiGroup Adminer

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
    @api {post} /adminer 2. Get all adminer (POST)
    @apiName PostAdminer
    @apiGroup Adminer
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
    @api {put} /adminer 3. Create or edit a list of entities
    @apiName PutAdminer
    @apiGroup Adminer
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
        self.entity = Adminer
