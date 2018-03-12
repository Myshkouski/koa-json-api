import JsonApi from '@alexeimyshkouski/json-api'
import * as jsonapiMedia from '../helpers/jsonapiMedia'

const properties = ['data', 'meta', 'links']
const mapKeys = (value, keys) => {
  if(!value) {
    return value
  }

  return keys
    .reduce((_value, key) => {
      _value[key] = value[key]
      return _value
    }, {})
}

export default options => async (ctx, next) => {
  ctx.body = {}
  const mediaTypes = jsonapiMedia.types(ctx)

  ctx.jsonapi = new JsonApi(
    Object.assign({}, options, {
      body: ctx.body
    })
  )

  Object.defineProperties(ctx, {
    rel: {
      value() {
        
      }
    }
  })

  Object.defineProperties(ctx, properties.reduce((descriptor, prop) => {
    descriptor[prop] = {
      async value(...args) {
        let path = '', value, options = {}

        if(typeof args[0] == 'string') {
          path = args[0]
          value = args[1]

          if(args.length > 2) {
            options = args[2]
          }
        } else {
          value = args[0]
          if(args.length > 1) {
            options = args[1]
          }
        }

        let _value

        if('keys' in options) {
          if(Array.isArray(value)) {
            _value = value.map(item => mapKeys(item, options.keys))
          } else {
            _value = mapKeys(value, options.keys)
          }
        } else {
          _value = value
        }

        return await ctx.jsonapi.add(`/${ prop }${ path }`, _value)
      }
    }

    return descriptor
  }, {}))

  await next()

  ctx.set('content-type', `${ mediaTypes[0] };charset=utf-8`)
}
