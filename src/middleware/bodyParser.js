import bodyParser from 'koa-bodyparser'
import isDevContext from '../helpers/isDevContext'
import * as jsonapiMedia from '../helpers/jsonapiMedia'

const options = {
  strict: true,
  enableTypes: ['json'],
  detectJSON: ctx => {
    const mediaTypes = jsonapiMedia.types(ctx)
    const isJSON = !!ctx.request.is(...mediaTypes)
    ctx.assert(isJSON, 415)
    return isJSON
  }
}

export default options => {
  const parser = bodyParser(options)

  return async (ctx, next) => {
    try {
      await parser(ctx, async () => {
        const rawBody = ctx.request.rawBody
        ctx.state.hasBody = !!(rawBody && rawBody.length)
      })
    } catch (error) {
      ctx.throw(error.statusCode || 415, {
        details: error.message,
        headers: {
          accept: jsonapiMedia.stringify(jsonapiMedia.types(ctx))
        }
      })
    }

    await next()
  }
}
