import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import exposeContextProps from './middleware/exposeContextProps'
import ensureErrorHandling from './middleware/ensureErrorHandling'
import error from './middleware/error'

function JsonApiRouter(options) {
  const router = new Router()

  return router
    .use(exposeContextProps)
    .use(ensureErrorHandling)
    .use(error)
    .use(bodyParser({
      strict: true,
      enableTypes: ['json'],
      extendTypes: {
        json: [...JSON_API_MEDIA_TYPES]
      },
      onerror(error, ctx) {
        ctx.throw(415, {
          headers: {
            accept: stringifyApiMediaTypes(defineApiMediaTypes(ctx))
          }
        })
      }
    }))
}

export { JsonApiRouter as Router }
