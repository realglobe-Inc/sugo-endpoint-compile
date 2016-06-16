/**
 * Compiler middleware for SUGOS.
 * @function sugoEndpointCompile
 * @param {object} [options] - Optional settings.
 * @returns {function} - Defined app function.
 */

'use strict'

const co = require('co')
const sgCompiler = require('sg-compiler')
const debug = require('debug')('sugo:middleware:compile')

/** @lends sugoEndpointCompile */
function create (options = {}) {
  let compiler = sgCompiler()
  let endpoint = co.wrap(function * middleware (ctx) {
    let { data } = ctx.request.body
    let { type, attributes } = data || {}
    try {
      let script = yield compiler.compile(String(attributes.script))
      ctx.body = {
        meta: {},
        data: {
          type,
          attributes: {
            script
          }
        }
      }
    } catch (e) {
      ctx.status = 400
      ctx.body = {
        errors: [
          endpoint.compileFailError()
        ]
      }
    }
  })

  Object.assign(endpoint, {
    /**
     * Description of this endpoint.
     */
    $desc: 'Compile scripts',

    compileFailError () {
      return {
        title: 'COMPILE_FAILED',
        detail: 'Failed to compile javascript.',
        source: {
          pointer: '/data/attributes/script'
        }
      }
    }
  })

  return endpoint
}

module.exports = create
