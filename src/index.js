import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import exposeContextProps from './middleware/exposeContextProps'
import ensureErrorHandling from './middleware/ensureErrorHandling'
import errors from './middleware/errors'
import validate from './service/validate'

function JsonApiRouter(options) {
  const router = new Router()

  return router
    .use(exposeContextProps())
    .use(ensureErrorHandling())
    .use(errors())
    .use(bodyParser())
}

export { JsonApiRouter as Router }
