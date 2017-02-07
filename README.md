[![Build Status](https://travis-ci.org/robertkowalski/mgnl-custom.svg?branch=master)](https://travis-ci.org/robertkowalski/mgnl-custom)

# mgnl-custom

Small demo module built with webpack.


## Tests

### Fixture Setup

Fixture was exported from Magnolia using the "Export"-functionality of the UI

### JS Unit Tests

Unit tests are using Jest as test runner, as it supplies a DOM environment

### Template / Integration tests

Tests are super simple and based `cheerio`. Mocha is used as test runner

### Travis

Main test step in Travis executes `npm test`

Setting up the Magnolia server is done with the `before_script` hook.
