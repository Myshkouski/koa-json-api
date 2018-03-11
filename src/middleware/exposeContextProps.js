import JsonApi from '../modules/json-api'
import * as jsonapiMedia from '../helpers/jsonapiMedia'

export default options => async (ctx, next) => {
  ctx.body = {}
  const mediaTypes = jsonapiMedia.types(ctx)

  ctx.jsonapi = new JsonApi(
    Object.assign({}, options, {
      body: ctx.body
    })
  )

  await next()

  ctx.set('content-type', mediaTypes[0])
}
