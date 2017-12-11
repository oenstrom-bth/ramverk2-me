# ramverk2-me

[![Build Status](https://travis-ci.org/oenstrom/ramverk2-me.svg?branch=master)](https://travis-ci.org/oenstrom/ramverk2-me)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/oenstrom/ramverk2-me/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/oenstrom/ramverk2-me/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/oenstrom/ramverk2-me/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/oenstrom/ramverk2-me/?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/b58273f2f8cb94db5df7/maintainability)](https://codeclimate.com/github/oenstrom/ramverk2-me/maintainability)
[![BCH compliance](https://bettercodehub.com/edge/badge/oenstrom/ramverk2-me?branch=master)](https://bettercodehub.com/)

Olof's me-page in the course ramverk2.

## Techniques used
* **Node.js** - Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.
* **Express.js** - Express.js, or simply Express, is a web application framework for Node.js. It is designed for building web applications and APIs.
* **Docker** - Docker is a software technology providing containers. Docker provides an additional layer of abstraction and automation of operating-system-level virtualization·
* **Socket.io** - Socket.IO is a JavaScript library for realtime web applications. It enables realtime, bi-directional communication between web clients and servers.
* **MongoDB** - MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemas. 


## Install

1. Clone the repo
2. `cd` into the repo
3. `npm install`

## Start

You can start the database and server either by running `npm run mongo` and then `npm run express` or you can run `npm run start-docker` to start both.

The server listens to the port set in `DBWEBB_PORT` or defaults to `3000`. To configure the ports used in Docker you have to edit `docker-compose.yml`. Under the service mongodb you can see:
```
environment:
    - DBWEBB_PORT=3000
```
and
```
ports:
    - "3000:3000"
```
Edit these to your likings.


## Test
* Run `npm test` to run linters and tests.
* Run `npm run test1` to test on Node 9 (alpine) using docker.
* Run `npm run test2` to test on Node 8 (alpine) using docker.
* Run `npm run test3` to test on Node 7 (alpine) using docker.
* Run `npm run coverage` to generate code coverage.
