/**
 * Browser side agent for compile endpoint
 * @function agent
 */
'use strict'

const co = require('co')

const apRequest = require('apeman-brws-request')

class SugoEndpointCompileAgent {
  constructor (url) {
    const s = this
    s.url = url
  }

  post (...args) {
    return apRequest.post(...args)
  }

  /**
   * Compile a script
   * @param {string} script
   * @param {Object} options
   * @returns {Promise}
   */
  compile (script, options = {}) {
    const s = this
    let { url } = s
    return co(function * () {
      let { body } = yield s.post(url, {
        data: {
          type: 'javascript',
          attributes: {
            script
          }
        }
      })
      let { attributes } = body.data
      return attributes.script
    })
  }
}

/** @lends agent */
function agent (url = '/actions/compile') {
  return new SugoEndpointCompileAgent(url)
}

module.exports = agent