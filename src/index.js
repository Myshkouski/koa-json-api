import Router from 'koa-router'

import exposeContextProps from './middleware/exposeContextProps'
import ensureErrorHandling from './middleware/ensureErrorHandling'
import errors from './middleware/errors'
import validateRequest from './middleware/validateRequest'
import bodyParser from './middleware/bodyParser'

function JsonApiRouter(options) {
  const router = new Router(options)

  return router
    .use(ensureErrorHandling())
    .use(exposeContextProps({
      validate: options.validate
    }))
    .use(errors())
    .use(bodyParser())
    .use(validateRequest())
}

export { JsonApiRouter as Router }
