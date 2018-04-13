[![Codacy Badge](https://api.codacy.com/project/badge/Grade/105fc88179e640d3b7433d24dec6d644)](https://www.codacy.com/app/maestro/discovery-api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=maestro-server/discovery-api&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/maestro-server/discovery-api.svg?branch=master)](https://travis-ci.org/maestro-server/discovery-api) 
[![Maintainability](https://api.codeclimate.com/v1/badges/082edc45c4509b79f751/maintainability)](https://codeclimate.com/github/maestro-server/discovery-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/082edc45c4509b79f751/test_coverage)](https://codeclimate.com/github/maestro-server/discovery-api/test_coverage)

# Maestro Server - Discovery API #

Core API, organized by modules:

* API Rest
* Worker - Scan
* Worker - Translate
* Worker - Insert

## Dependencies ##
* Python <3.4
* Flask
* Celery
* RabbitMq
* Redis

## Setup #
Create .env file, with:

CELERY_BROKER_URL="amqp://localhost:5672"
CELERYD_TASK_TIME_LIMIT=30

MAESTRO_PORT=5000
MAESTRO_MONGO_URI='localhost'
MAESTRO_MONGO_DATABASE='maestro-client'
MAESTRO_DISCOVERY_URL = 'http://localhost'
MAESTRO_SECRETJWT='xxxx'
MAESTRO_SCAN_QTD=200