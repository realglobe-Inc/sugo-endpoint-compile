/** This is an example to use sugo-middleware-compile */

'use strict'

const sgServer = require('sg-server')

const server = sgServer({
  middlewares: [
    require('sugo-middleware-compile')({
      // Options
    })
  ],
  routes: {
    /* ... */
  }
})

server.listen(3000)

