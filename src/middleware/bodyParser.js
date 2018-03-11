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
  },
  // onerror: (error, ctx) => {
  //   ctx.throw(error.statusCode || 415, {
  //     details: error.message,
  //     headers: {
  //       accept: jsonapiMedia.stringify(jsonapiMedia.types(ctx))
  //     }
  //   })
  // }
}

export default options => {
  const parser = bodyParser(options)

  return async (ctx, next) => {
    try {
      await parser(ctx, async () => {
        ctx.state.hasBody = true
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
