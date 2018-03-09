import bodyParser from 'koa-bodyparser'
import isDevContext from '../helpers/isDevContext'
import * as jsonapiMedia from '../helpers/jsonapiMedia'

export default (options = {}) => bodyParser({
  strict: true,
  enableTypes: ['json'],
  detectJSON: ctx => {
    const mediaTypes = jsonapiMedia.types(ctx)
    return !!ctx.request.is(...mediaTypes)
  },
  onerror: (ctx, error) => {
    ctx.throw(415, {
      detail: error.message,
      headers: {
        accept: jsonapiMedia.stringify(jsonapiMedia.types(ctx))
      }
    })
  }
})
