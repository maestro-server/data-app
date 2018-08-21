from app.controller.factory.dc import DcApp
from app.repository.graphs import Graphs


class DcGraphsApp(DcApp):

    # @api {get} /graphs 1. Get all graphs (GET)
    # @apiName GetGraphs
    # @apiGroup Graphs

    # @apiParam {Object} query Filters.
    # <br/>
    # <pre class="prettyprint language-json" data-type="json">
    # <code>{
    # <br/>   "query": {
    # <br/>       "roles": {
    # <br/>           "_id": (String) // Must be
    # <br/>       },
    # <br/>       "limit": (Number)
    # <br/>       "page": (Number)
    # <br/>   }
    # <br/>}
    # <br/><br/>
    # // You can use any field do filters
    # <br/>{
    # <br/>   "query": {
    # <br/>       "roles": {
    # <br/>           "_id": (String) // Must be
    # <br/>       },
    # <br/>       "_id": (String)
    # <br/>       "name": (String)
    # <br/>       "limit": (Number)
    # <br/>       "page": (Number)
    # <br/>   }
    # <br/>}
    # </code>
    # </pre>

    # query.roles._id Must be required.

    # @apiSuccessExample {json} Success-Response:
    # HTTP/1.1 200 OK
    # [{
    #     'found': (Number),
    #     'total_pages': (Number),
    #     'page': (Number),
    #     'limit': (Number),
    #     'items': (Array)
    # }]



    # @api {post} /graphs 2. Get all graphs (POST)
    # @apiName PostGraphs
    # @apiGroup Graphs
    # @apiDescription Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.

    # @apiParam {Object} query Filters.
    # <br/>
    # <pre class="prettyprint language-json" data-type="json">
    # <code>{
    # <br/>   "query": {
    # <br/>       "roles": {
    # <br/>           "_id": (String) // Must be
    # <br/>       },
    # <br/>       "limit": (Number)
    # <br/>       "page": (Number)
    # <br/>   }
    # <br/>}
    # </code>
    # </pre>

    # query.roles._id Must be required.

    # @apiSuccessExample {json} Success-Response:
    # HTTP/1.1 200 OK
    # [{
    #     'found': (Number),
    #     'total_pages': (Number),
    #     'page': (Number),
    #     'limit': (Number),
    #     'items': (Array)
    # }]



    # @api {put} /graphs 3. Create or edit a list of entities
    # @apiName PutGraphs
    # @apiGroup Graphs
    # @apiDescription Batch create or edit entities.

    # @apiParam {Array} body List of batches data, if exist _id this item only be updated, otherwise will be created.

    # @apiSuccessExample {json} Success-Response:
    # HTTP/1.1 200 OK
    # [{
    #     'filter': (Object),
    #     'data': (Array)
    # }]
    def __init__(self):
        self.entity = Graphs
