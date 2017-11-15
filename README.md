# ramverk2-me

[![Build Status](https://travis-ci.org/oenstrom/ramverk2-me.svg?branch=master)](https://travis-ci.org/oenstrom/ramverk2-me)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/oenstrom/ramverk2-me/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/oenstrom/ramverk2-me/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/oenstrom/ramverk2-me/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/oenstrom/ramverk2-me/?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/b58273f2f8cb94db5df7/maintainability)](https://codeclimate.com/github/oenstrom/ramverk2-me/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b58273f2f8cb94db5df7/test_coverage)](https://codeclimate.com/github/oenstrom/ramverk2-me/test_coverage)
[![BCH compliance](https://bettercodehub.com/edge/badge/oenstrom/ramverk2-me?branch=master)](https://bettercodehub.com/)

Olof's me-page in the course ramverk2.

## Install

1. Clone the repo
2. `cd` into the repo
3. `npm install`
4. `npm start`

The server listens to the port set in `DBWEBB_PORT` or defaults to `3000`.

## Test
* Run `npm test` to run linters and tests.
* Run `npm test1` to test on Node 9 (alpine) using docker.
* Run `npm test2` to test on Node 8 (alpine) using docker.
* Run `npm test3` to test on Node 7 (alpine) using docker.
* Run `npm coverage` to generate code coverage.
