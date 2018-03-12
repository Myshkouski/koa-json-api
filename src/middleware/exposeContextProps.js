import JsonApi from '@alexeimyshkouski/json-api'
import * as jsonapiMedia from '../helpers/jsonapiMedia'

const properties = ['data', 'meta', 'links', 'included']

export default options => async (ctx, next) => {
  ctx.body = {}
  const mediaTypes = jsonapiMedia.types(ctx)

  ctx.jsonapi = new JsonApi(
    Object.assign({}, options, {
      body: ctx.body
    })
  )

  Object.defineProperties(ctx, properties.reduce((descriptor, prop) => {
    descriptor[prop] = {
      async value(...args) {
        let path = '', value = args[0]

        if(args.length > 1) {
          path = args[0]
          value = args[1]
        }

        return await ctx.jsonapi.add(`/${ prop }${ path }`, value)
      }
    }

    return descriptor
  }, {}))

  await next()

  ctx.set('content-type', `${ mediaTypes[0] };charset=utf-8`)
}
