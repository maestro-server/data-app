[![Codacy Badge](https://app.codacy.com/project/badge/Grade/facb8140aef846768f20732da29c5ada)](https://www.codacy.com/gh/maestro-server/data-app/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=maestro-server/data-app&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.com/maestro-server/data-app.svg?branch=master)](https://travis-ci.com/maestro-server/data-app)
[![Maintainability](https://api.codeclimate.com/v1/badges/0d6930d08ca210a9e46e/maintainability)](https://codeclimate.com/github/maestro-server/data-app/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0d6930d08ca210a9e46e/test_coverage)](https://codeclimate.com/github/maestro-server/data-app/test_coverage)
[![Coverage Status](https://coveralls.io/repos/github/maestro-server/data-app/badge.svg?branch=master)](https://coveralls.io/github/maestro-server/data-app?branch=master)

# Maestro Server #

Maestro Server is an open source software platform for management and discovery servers, apps and system for Hybrid IT. Can manage small and large environments, be able to visualize the latest multi-cloud environment state.

### Demo ###
To test out the demo, [Demo Online](http://demo.maestroserver.io "Demo Online")

## Documentation ##
* [UserGuide](http://docs.maestroserver.io/en/latest/userguide/cloud_inventory/inventory.html "User Guide")
* [API Contract](https://maestro-server.github.io/data-app/ "API Contract")

# Maestro Server - Data Layer API #

Data app is a gateway connection to the mongodb.

* CRUD database operations

Data app use `Flask <http://flask.pocoo.org>`_,  on python >3.5.

## TechStack ##
* Python <3.4
* Flask

## Connect to: ##
None

## Setup #

#### Installation by docker ####

```bash
version: '2'

services:
    data:
        image: maestroserver/data-maestro
        environment:
            - "MAESTRO_MONGO_URI=mongodb"
            - "MAESTRO_MONGO_DATABASE=maestro-client"
```

#### Dev Env ####

Install pip dependences
```bash
pip install -r requeriments.txt
```

Run server
```bash
python -m flask run.py

or

FLASK_APP=run.py FLASK_DEBUG=1 flask run

or 

npm run server
```

Run all tests 
```bash
python -m unittest discover
```

Create doc
```bash
npm install
apidoc -i app/controller/ -o docs/
```

### Env variables ###

| Env Variables                | Example                  | Description                                |
|------------------------------|--------------------------|--------------------------------------------|
| MAESTRO_PORT                 | 5010                     | port used                                  |
| MAESTRO_GWORKERS             | 2 | DB string connection | Gunicorn multi process                     |
| MAESTRO_MONGO_URI            | mongodb://localhost      | MongoDB URL                                |
| MAESTRO_MONGO_DATABASE       | maestro-client           | Database name                              |
| MAESTRO_SCAN_QTD             | 200                      | Prefetch limit                             |
|                              |                          |                                            |
| MAESTRO_SECRETJWT_PRIVATE    | XXX                      | Secret Key - JWT private connections       |
| MAESTRO_NOAUTH               | XXX                      | Secret Pass to validate private connections|


### Contribute ###

Are you interested in developing Maestro Server, creating new features or extending them?

We created a set of documentation, explaining how to set up your development environment, coding styles, standards, learn about the architecture and more. Welcome to the team and contribute with us.

[See our developer guide](http://docs.maestroserver.io/en/latest/contrib.html)

### Contact ###

We may be able to resolve support queries via email. [Please send me a message here](https://maestroserver.typeform.com/to/vf6sGR)

### Donate ###

I have made Maestro Server with my heart, think to solve a real operation IT problem. Its not easy, take time and resources.

The donation will be user to:

- Create new features, implement new providers.
- Maintenance libs, securities flaws, and technical points.

<a href="https://www.buymeacoffee.com/9lVypB7WQ" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

### Sponsor ###

[<img src="docs/_imgs/jetbrains.png" width="100">](https://www.jetbrains.com/?from=maestroserver) 
