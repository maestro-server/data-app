# -*- encoding: utf-8 -*-
"""
Python Aplication Template
Licence: GPLv3
"""

import os
from app.libs.jsonEncoder import DateTimeEncoder
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())


class Config(object):
    TESTING = os.environ.get("TESTING", False)
    DATABASE_URI = "mongodb://" + os.environ.get("MAESTRO_MONGO_URI", "localhost")
    DATABASE_NAME = os.environ.get("MAESTRO_MONGO_DATABASE", "maestro-client")
    RESTFUL_JSON = {'cls': DateTimeEncoder}


class ProductionConfig(Config):
    pass


class DevelopmentConfig(Config):
    DEBUG = True


class TestingConfig(Config):
    TESTING = True
