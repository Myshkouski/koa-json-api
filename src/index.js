import Router from 'koa-router'

import exposeContextProps from './middleware/exposeContextProps'
import ensureErrorHandling from './middleware/ensureErrorHandling'
import errors from './middleware/errors'
import validateRequest from './middleware/validateRequest'
import bodyParser from './middleware/bodyParser'

function JsonApiRouter(options) {
  const router = new Router()

  return router
    .use(ensureErrorHandling())
    .use(exposeContextProps())
    .use(errors())
    .use(bodyParser())
    .use(validateRequest())
}

export { JsonApiRouter as Router }
