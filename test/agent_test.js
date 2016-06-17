/**
 * Test case for agent.
 * Runs with mocha.
 */
'use strict'

const agent = require('../lib/agent.js')
const assert = require('assert')
const co = require('co')

describe('agent', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Agent', () => co(function * () {
    assert.ok(agent({ url: '/api/compile' }))
  }))
})

/* global describe, before, after, it */
