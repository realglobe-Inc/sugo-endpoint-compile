'use strict'

const sugoAgentCompile = require('sugo-agent-compile')
const co = require('co')

co(function * () {
  let agent = sugoAgentCompile('http://my-server.com/procs/compile')

  // Check if server available
  {
    let ok = yield agent.knock() // Send HTTP HEAD request.
    /* ... */
  }

  // Compile es6 script
  {
    let myScript = `
let foo = (...arg) => ['foo', ...args].join('')
foo()
`
    let compiled = yield agent.compile(myScript)
    console.log(compiled)
    /* ... */
  }
}).catch((err) => console.error(err))
