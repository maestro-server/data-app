# -*- encoding: utf-8 -*-
"""
Python Aplication Template
Licence: GPLv3
"""

import pymongo
from flask import Flask
from pymongo import MongoClient
from app.libs.logger import logger

app = Flask(__name__)
app.config.from_object('instance.config.Config')

client = MongoClient(app.config['DATABASE_URI'], serverSelectionTimeoutMS=1)
db = client[app.config['DATABASE_NAME']]

try:
    client.server_info()
    logger.info("Mongo Online")
except pymongo.errors.ServerSelectionTimeoutError as err:
    logger.error("==================================> MongoDB is down %s", err)
