/**
 * Endpoint to compile javascripts.
 * @module sugo-endpoint-compile
 * @version 2.0.7
 */

'use strict'

const create = require('./create')
const pkg = require('../package.json')

let lib = create.bind(this)

Object.assign(lib, create, {
 create,
 version: pkg.version
})

module.exports = lib
