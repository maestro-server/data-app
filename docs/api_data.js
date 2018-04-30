define({ "api": [
  {
    "type": "get",
    "url": "/adminer",
    "title": "1. Get all configs (GET)",
    "name": "GetAdminer",
    "group": "Adminer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcAdminer.py",
    "groupTitle": "Adminer"
  },
  {
    "type": "post",
    "url": "/adminer",
    "title": "2. Get all adminer (POST)",
    "name": "PostAdminer",
    "group": "Adminer",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcAdminer.py",
    "groupTitle": "Adminer"
  },
  {
    "type": "put",
    "url": "/adminer",
    "title": "3. Create or edit a list of entities",
    "name": "PutAdminer",
    "group": "Adminer",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcAdminer.py",
    "groupTitle": "Adminer"
  },
  {
    "type": "post",
    "url": "/aggregate>",
    "title": "1. Execute aggregate query",
    "name": "PostAggregate",
    "group": "Aggregate",
    "parameter": {
      "fields": {
        "Body x-www": [
          {
            "group": "Body x-www",
            "type": "String",
            "optional": false,
            "field": "entity",
            "description": "<p>Table name (Ex. server, applications, clients, system)</p>"
          },
          {
            "group": "Body x-www",
            "type": "Json",
            "optional": false,
            "field": "query",
            "description": "<p>Aggregation query (See, mongodb aggregate for more information)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    'items': [\n        {\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/aggregationApp.py",
    "groupTitle": "Aggregate"
  },
  {
    "type": "get",
    "url": "/applications",
    "title": "1. Get all applications (GET)",
    "name": "GetApplications",
    "group": "Applications",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcApplications.py",
    "groupTitle": "Applications"
  },
  {
    "type": "post",
    "url": "/applications",
    "title": "2. Get all applications (POST)",
    "name": "PostApplications",
    "group": "Applications",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcApplications.py",
    "groupTitle": "Applications"
  },
  {
    "type": "put",
    "url": "/applications",
    "title": "3. Create or edit a list of entities",
    "name": "PutApplications",
    "group": "Applications",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcApplications.py",
    "groupTitle": "Applications"
  },
  {
    "type": "get",
    "url": "/clients",
    "title": "1. Get all clients (GET)",
    "name": "GetClients",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcClients.py",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "/clients",
    "title": "2. Get all clients (POST)",
    "name": "PostClients",
    "group": "Clients",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcClients.py",
    "groupTitle": "Clients"
  },
  {
    "type": "put",
    "url": "/clients",
    "title": "3. Create or edit a list of entities",
    "name": "PutClients",
    "group": "Clients",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcClients.py",
    "groupTitle": "Clients"
  },
  {
    "type": "get",
    "url": "/connection/<instance>",
    "title": "1. Get single connection",
    "name": "GetConnection",
    "group": "Connection",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instance",
            "description": "<p>Instance ID of connection.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'name': (Number)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/connection.py",
    "groupTitle": "Connection"
  },
  {
    "type": "post",
    "url": "/connection/<instance>",
    "title": "2. Change connection state",
    "name": "PostConnection",
    "group": "Connection",
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "instance",
            "description": "<p>Instance ID of connection.</p>"
          }
        ],
        "Body x-www": [
          {
            "group": "Body x-www",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status [Sucess, warning, error]</p>"
          },
          {
            "group": "Body x-www",
            "type": "String",
            "optional": false,
            "field": "task",
            "description": "<p>Specific task [server-list, dbs-list and etc]</p>"
          },
          {
            "group": "Body x-www",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Message</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'name': (string),\n    'status': (string) [sucess, warning or error]\n    'task': (string)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/connection.py",
    "groupTitle": "Connection"
  },
  {
    "type": "get",
    "url": "/connections",
    "title": "1. Get all connections (GET)",
    "name": "GetConnections",
    "group": "Connections",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcConnections.py",
    "groupTitle": "Connections"
  },
  {
    "type": "post",
    "url": "/connections",
    "title": "2. Get all connections (POST)",
    "name": "PostConnections",
    "group": "Connections",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcConnections.py",
    "groupTitle": "Connections"
  },
  {
    "type": "put",
    "url": "/connections",
    "title": "3. Create or edit a list of entities",
    "name": "PutConnections",
    "group": "Connections",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcConnections.py",
    "groupTitle": "Connections"
  },
  {
    "type": "get",
    "url": "/datacenter",
    "title": "1. Get all datacenter (GET)",
    "name": "GetDatacenter",
    "group": "Datacenter",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcDatacenter.py",
    "groupTitle": "Datacenter"
  },
  {
    "type": "post",
    "url": "/datacenter",
    "title": "2. Get all datacenter (POST)",
    "name": "PostDatacenter",
    "group": "Datacenter",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcDatacenter.py",
    "groupTitle": "Datacenter"
  },
  {
    "type": "put",
    "url": "/datacenter",
    "title": "3. Create or edit a list of entities",
    "name": "PutDatacenter",
    "group": "Datacenter",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcDatacenter.py",
    "groupTitle": "Datacenter"
  },
  {
    "type": "get",
    "url": "/events",
    "title": "1. Get all events (GET)",
    "name": "GetEvents",
    "group": "Events",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcEvents.py",
    "groupTitle": "Events"
  },
  {
    "type": "post",
    "url": "/events",
    "title": "2. Get all events (POST)",
    "name": "PostEvents",
    "group": "Events",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcEvents.py",
    "groupTitle": "Events"
  },
  {
    "type": "put",
    "url": "/events",
    "title": "3. Create or edit a list of entities",
    "name": "PutEvents",
    "group": "Events",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcEvents.py",
    "groupTitle": "Events"
  },
  {
    "type": "get",
    "url": "/flavors",
    "title": "1. Get all flavors (GET)",
    "name": "GetFlavors",
    "group": "Flavors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcFlavors.py",
    "groupTitle": "Flavors"
  },
  {
    "type": "post",
    "url": "/flavors",
    "title": "2. Get all flavors (POST)",
    "name": "PostFlavors",
    "group": "Flavors",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcFlavors.py",
    "groupTitle": "Flavors"
  },
  {
    "type": "post",
    "url": "/flavors_public",
    "title": "2. Get all flavors (POST)",
    "name": "PublicPostFlavors",
    "group": "FlavorsPublic",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcFlavorsPublic.py",
    "groupTitle": "FlavorsPublic"
  },
  {
    "type": "put",
    "url": "/flavors",
    "title": "3. Create or edit a list of entities",
    "name": "PutFlavors",
    "group": "Flavors",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcFlavors.py",
    "groupTitle": "Flavors"
  },
  {
    "type": "get",
    "url": "/images",
    "title": "1. Get all images (GET)",
    "name": "GetImages",
    "group": "Images",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcImages.py",
    "groupTitle": "Images"
  },
  {
    "type": "post",
    "url": "/images",
    "title": "2. Get all images (POST)",
    "name": "PostImages",
    "group": "Images",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcImages.py",
    "groupTitle": "Images"
  },
  {
    "type": "put",
    "url": "/images",
    "title": "3. Create or edit a list of entities",
    "name": "PutImages",
    "group": "Images",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcImages.py",
    "groupTitle": "Images"
  },
  {
    "type": "get",
    "url": "/network",
    "title": "1. Get all network (GET)",
    "name": "GetNetwork",
    "group": "Network",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcNetwork.py",
    "groupTitle": "Network"
  },
  {
    "type": "post",
    "url": "/network",
    "title": "2. Get all network (POST)",
    "name": "PostNetwork",
    "group": "Network",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcNetwork.py",
    "groupTitle": "Network"
  },
  {
    "type": "put",
    "url": "/network",
    "title": "3. Create or edit a list of entities",
    "name": "PutNetwork",
    "group": "Network",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcNetwork.py",
    "groupTitle": "Network"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Ping",
    "name": "GetPing",
    "group": "Ping",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n   app: (String)\n   description: (String)\n   version: (String)\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/home.py",
    "groupTitle": "Ping"
  },
  {
    "type": "get",
    "url": "/projects",
    "title": "1. Get all projects (GET)",
    "name": "GetProjects",
    "group": "Projects",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcProjects.py",
    "groupTitle": "Projects"
  },
  {
    "type": "get",
    "url": "/flavors_public",
    "title": "1. Get all flavors (GET)",
    "name": "GetFlavorsPublic",
    "group": "PublicFlavors",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcFlavorsPublic.py",
    "groupTitle": "PublicFlavors"
  },
  {
    "type": "put",
    "url": "/flavors_public",
    "title": "3. Create or edit a list of entities",
    "name": "PutFlavorsPublic",
    "group": "PublicFlavors",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcFlavorsPublic.py",
    "groupTitle": "PublicFlavors"
  },
  {
    "type": "get",
    "url": "/reports",
    "title": "1. Get all reports (GET)",
    "name": "GetReports",
    "group": "Reports",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcReports.py",
    "groupTitle": "Reports"
  },
  {
    "type": "post",
    "url": "/reports",
    "title": "2. Get all reports (POST)",
    "name": "PostReports",
    "group": "Reports",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcReports.py",
    "groupTitle": "Reports"
  },
  {
    "type": "put",
    "url": "/reports",
    "title": "3. Create or edit a list of entities",
    "name": "PutReports",
    "group": "Reports",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcReports.py",
    "groupTitle": "Reports"
  },
  {
    "type": "get",
    "url": "/schedulers",
    "title": "1. Get all schedulers (GET)",
    "name": "GetSchedulers",
    "group": "Schedulers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcSchedulers.py",
    "groupTitle": "Schedulers"
  },
  {
    "type": "post",
    "url": "/schedulers",
    "title": "2. Get all schedulers (POST)",
    "name": "PostSchedulers",
    "group": "Schedulers",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcSchedulers.py",
    "groupTitle": "Schedulers"
  },
  {
    "type": "put",
    "url": "/schedulers",
    "title": "3. Create or edit a list of entities",
    "name": "PutSchedulers",
    "group": "Schedulers",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcSchedulers.py",
    "groupTitle": "Schedulers"
  },
  {
    "type": "get",
    "url": "/servers",
    "title": "1. Get all servers (GET)",
    "name": "GetServers",
    "group": "Servers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcServers.py",
    "groupTitle": "Servers"
  },
  {
    "type": "post",
    "url": "/servers",
    "title": "2. Get all servers (POST)",
    "name": "PostServers",
    "group": "Servers",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcServers.py",
    "groupTitle": "Servers"
  },
  {
    "type": "put",
    "url": "/servers",
    "title": "3. Create or edit a list of entities",
    "name": "PutServers",
    "group": "Servers",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcServers.py",
    "groupTitle": "Servers"
  },
  {
    "type": "get",
    "url": "/services",
    "title": "1. Get all services (GET)",
    "name": "GetServices",
    "group": "Services",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcServices.py",
    "groupTitle": "Services"
  },
  {
    "type": "post",
    "url": "/services",
    "title": "2. Get all services (POST)",
    "name": "PostServices",
    "group": "Services",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcServices.py",
    "groupTitle": "Services"
  },
  {
    "type": "put",
    "url": "/services",
    "title": "3. Create or edit a list of entities",
    "name": "PutServices",
    "group": "Services",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcServices.py",
    "groupTitle": "Services"
  },
  {
    "type": "get",
    "url": "/snapshots",
    "title": "1. Get all snapshots (GET)",
    "name": "GetSnapshots",
    "group": "Snapshots",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcSnapshots.py",
    "groupTitle": "Snapshots"
  },
  {
    "type": "post",
    "url": "/snapshots",
    "title": "2. Get all snapshots (POST)",
    "name": "PostSnapshots",
    "group": "Snapshots",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcSnapshots.py",
    "groupTitle": "Snapshots"
  },
  {
    "type": "put",
    "url": "/snapshots",
    "title": "3. Create or edit a list of entities",
    "name": "PutSnapshots",
    "group": "Snapshots",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcSnapshots.py",
    "groupTitle": "Snapshots"
  },
  {
    "type": "get",
    "url": "/system",
    "title": "1. Get all system (GET)",
    "name": "GetSystem",
    "group": "System",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcSystem.py",
    "groupTitle": "System"
  },
  {
    "type": "post",
    "url": "/system",
    "title": "2. Get all system (POST)",
    "name": "PostSystem",
    "group": "System",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcSystem.py",
    "groupTitle": "System"
  },
  {
    "type": "put",
    "url": "/system",
    "title": "3. Create or edit a list of entities",
    "name": "PutSystem",
    "group": "System",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcSystem.py",
    "groupTitle": "System"
  },
  {
    "type": "get",
    "url": "/teams",
    "title": "1. Get all teams (GET)",
    "name": "GetTeams",
    "group": "Teams",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcTeams.py",
    "groupTitle": "Teams"
  },
  {
    "type": "post",
    "url": "/teams",
    "title": "2. Get all teams (POST)",
    "name": "PostTeams",
    "group": "Teams",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcTeams.py",
    "groupTitle": "Teams"
  },
  {
    "type": "put",
    "url": "/teams",
    "title": "3. Create or edit a list of entities",
    "name": "PutTeams",
    "group": "Teams",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcTeams.py",
    "groupTitle": "Teams"
  },
  {
    "type": "get",
    "url": "/volumes",
    "title": "1. Get all volumes (GET)",
    "name": "GetVolumes",
    "group": "Volumes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} <br/><br/> // You can use any field do filters <br/>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;_id&quot;: (String) <br/>       &quot;name&quot;: (String) <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcVolumes.py",
    "groupTitle": "Volumes"
  },
  {
    "type": "post",
    "url": "/volumes",
    "title": "2. Get all volumes (POST)",
    "name": "PostVolumes",
    "group": "Volumes",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>    query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcProjects.py",
    "groupTitle": "Volumes"
  },
  {
    "type": "post",
    "url": "/volumes",
    "title": "2. Get all volumes (POST)",
    "name": "PostVolumes",
    "group": "Volumes",
    "description": "<p>Look like te same of get action, if you need to do a long filters likes a list of ids, you can use this endpoint.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "query",
            "description": "<p>Filters. <br/> <pre class=\"prettyprint language-json\" data-type=\"json\"> <code>{ <br/>   &quot;query&quot;: { <br/>       &quot;roles&quot;: { <br/>           &quot;_id&quot;: (String) // Must be <br/>       }, <br/>       &quot;limit&quot;: (Number) <br/>       &quot;page&quot;: (Number) <br/>   } <br/>} </code> </pre></p> <pre><code>query.roles._id Must be required.</code></pre>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'found': (Number),\n    'total_pages': (Number),\n    'page': (Number),\n    'limit': (Number),\n    'items': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcVolumes.py",
    "groupTitle": "Volumes"
  },
  {
    "type": "put",
    "url": "/volumes",
    "title": "3. Create or edit a list of entities",
    "name": "PutVolumes",
    "group": "Volumes",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcVolumes.py",
    "groupTitle": "Volumes"
  },
  {
    "type": "put",
    "url": "/volumes",
    "title": "3. Create or edit a list of entities",
    "name": "PutVolumes",
    "group": "Volumes",
    "description": "<p>Batch create or edit entities.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "body",
            "description": "<p>List of batches data, if exist _id this item only be updated, otherwise will be created.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n    'filter': (Object),\n    'data': (Array)\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controller/dcProjects.py",
    "groupTitle": "Volumes"
  }
] });
