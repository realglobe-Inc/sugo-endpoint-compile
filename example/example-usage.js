/** This is an example to use sugo-endpoint-compile */

'use strict'

const sgServer = require('sg-server')

const server = sgServer({
  middlewares: [
    /* ... */
  ],
  endpoints: {
    '/procedures/compile': {
      'POST': require('sugo-endpoint-compile')({
        // Options
      })
    }
  }
})

server.listen(3000)
