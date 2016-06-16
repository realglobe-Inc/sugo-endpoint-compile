/**
 * Compiler middleware for SUGOS.
 * @function sugoMiddlewareCompile
 * @param {object} [options] - Optional settings.
 * @returns {function} - Defined app function.
 */

'use strict'

const co = require('co')
const debug = require('debug')('sugo:middleware:compile')

/** @lends sugoMiddlewareCompile */
function create (options = {}) {
  let middleware = co.wrap(function * middleware (ctx, next) {
    yield next()
  })

  Object.assign(middleware, {
    /**
     * Description of this middleware.
     */
    $desc: '__your_middleware_description__'
  })

  return middleware
}

module.exports = create
