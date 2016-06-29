/** This is example of client */

'use strict'

const sgAgentCompile = require('sg-agent-compile')
const co = require('co')

const myScript = `() => { /* ... */ }`

co(function * () {
  let agent = sgAgentCompile('/procedures/compile')
  let compiled = yield agent.compile(myScript)
  /* .. */
}).catch((err) => console.error(err))
