# -*- encoding: utf-8 -*-
"""
Python Routes
Licence: GPLv3
"""

from app import app
from flask_restful import Api
from flask import jsonify
from .controller import *

api = Api(app)

api.add_resource(HomeApp, '/')
api.add_resource(ConnectionApp, '/connections/<instance>', '/connection/<instance>', '/connection/<instance>/')

api.add_resource(DcAdminerApp, '/adminer')
api.add_resource(DcConnectionsApp, '/connections')
api.add_resource(DcServersApp, '/servers')
api.add_resource(DcApplicationApp, '/applications')
api.add_resource(DcSystemApp, '/systems')
api.add_resource(DcVolumesApp, '/volumes')
api.add_resource(DcImagesApp, '/images')
api.add_resource(DcNetworkApp, '/networks')
api.add_resource(DcSnapshotsApp, '/snapshots')
api.add_resource(DcFlavorsApp, '/flavors')
api.add_resource(DcFlavorsPublicApp, '/flavors_public')
api.add_resource(DcClientsApp, '/clients')
api.add_resource(DcServicesApp, '/services')
api.add_resource(DcProjectsApp, '/projects')
api.add_resource(DcTeamsApp, '/teams')
api.add_resource(DcEventsApp, '/events')
api.add_resource(DcSchedulersApp, '/schedulers')
api.add_resource(DcDatacentersApp, '/datacenters')
api.add_resource(DcReportsApp, '/reports')
api.add_resource(AggregationApp, '/aggregate')


@app.errorhandler(404)
def error(e):
    return jsonify({'error': 'Resource not found'}), 404
