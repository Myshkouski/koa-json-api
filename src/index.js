import Router from 'koa-router'
import defaults from 'lodash.defaultsdeep'

import JsonApi from '@alexeimyshkouski/json-api'

import exposeContextProps from './middleware/exposeContextProps'
import ensureErrorHandling from './middleware/ensureErrorHandling'
import errors from './middleware/errors'
import validate from './middleware/validate'
import bodyParser from './middleware/bodyParser'

function JsonApiRouter(options) {
  options = defaults({}, options, {
    validate: {
      patch: false,
      request: true,
      response: false
    }
  })
  const router = new Router(options)

  return router
    .use(ensureErrorHandling())
      .use(exposeContextProps({ validatePatch: options.validate.patch }))
        .use(errors())
          .use(bodyParser())
            .use(validate({
              request: options.validate.request,
              response: options.validate.response
            }))
}

export { JsonApiRouter as Router }

export const getSchemas = options => JsonApi.getSchemas(options)
