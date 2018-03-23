import JsonApi from 'test@alexeimyshkouski/json-api'
import defaults from 'lodash/defaultsDeep'
import pick from 'lodash/pick'
import * as jsonapiMedia from '../helpers/jsonapiMedia'

const dataPath = '/data'
const includedPath = '/included'
const errorsPath = '/errors'

const properties = ['data', 'meta', 'links']
// const pick = (value, keys) => {
//   if (!value) {
//     return value
//   }
//
//   return keys
//     .reduce((_value, key) => {
//       _value[key] = value[key]
//       return _value
//     }, {})
// }

const transformDict = async (value, dict) => {
  // console.log(value, dict)
  if(typeof dict == 'string') {
    return JsonApi.get(value, dict)
  } else if(Array.isArray(dict)) {
    const array = []

    for(let index in dict) {
      array[key] = await transformDict(value[key], dict[index])
    }

    return array
  } else if(typeof dict == 'object') {
    const obj = Object.assign({}, value)

    for(let key in dict) {
      obj[key] = await transformDict(value[key], dict[key])
    }

    return obj
  } else {
    const error = new TypeError('Canot apply dictionary to document')
    error.doc = value
    error.dict = dict
    throw error
  }
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
    data: {
      async value(...args) {
        let path = dataPath,
          value, options = {}
        if (typeof args[0] == 'string') {
          path += args[0]
          value = args[1]

          if (args.length > 2) {
            options = args[2]
          }
        } else {
          value = args[0]
          if (args.length > 1) {
            options = args[1]
          }
        }

        options = defaults({}, options, {

        })

        const ops = []

        if('dict' in options) {
          if (Array.isArray(value)) {
            const _value = []
            for(let item of value) {
              _value.push(await transformDict(item, options.dict))
            }
            value = _value
          } else {
            value = await transformDict(value, options.dict)
          }
        }

        if ('defaults' in options) {
          if (Array.isArray(value)) {
            value = value.map(item => defaults(undefined, item, options.defaults))
          } else {
            value = defaults(undefined, value, options.defaults)
          }
        }

        if ('keys' in options) {
          if (Array.isArray(value)) {
            value = value.map(item => pick(item, options.keys))
          } else {
            value = pick(value, options.keys)
          }
        }

        if(this.jsonapi.has(path)) {
          ops.unshift({ op: 'replace', path, value })
        } else {
          ops.unshift({ op: 'add', path, value })
        }

        return await this.jsonapi.patch(ops)
      }
    },
    error: {
      async value(value) {
        const ops = [];
        const hasErrors = this.jsonapi.has(errorsPath)
        const hasData = this.jsonapi.has(dataPath)
        let errors

        if (hasErrors) {
          errors = this.jsonapi.get(errorsPath)
        } else {
          errors = []
        }

        if (Array.isArray(value)) {
          errors = [...errors, ...value]
        } else {
          errors = [...errors, value]
        }

        if (hasErrors) {
          ops.unshift({
            op: 'replace',
            path: errorsPath,
            value: errors
          })
        } else {
          ops.unshift({
            op: 'add',
            path: errorsPath,
            value: errors
          })
        }

        if (hasData) {
          ops.unshift({
            op: 'remove',
            path: dataPath
          })
          const hasIncluded = this.jsonapi.has(includedPath)
          if (hasIncluded) {
            ops.unshift({
              op: 'remove',
              path: includedPath
            })
          }
        }

        return await this.jsonapi.patch(ops)
      }
    }
  })

  // Object.defineProperties(ctx, properties.reduce((descriptor, prop) => {
  //   descriptor[prop] = {
  //     async value(...args) {
  //       let path = '', value, options = {}
  //
  //       if(typeof args[0] == 'string') {
  //         path = args[0]
  //         value = args[1]
  //
  //         if(args.length > 2) {
  //           options = args[2]
  //         }
  //       } else {
  //         value = args[0]
  //         if(args.length > 1) {
  //           options = args[1]
  //         }
  //       }
  //
  //       let _value
  //
  //       if('keys' in options) {
  //         if(Array.isArray(value)) {
  //           _value = value.map(item => pick(item, options.keys))
  //         } else {
  //           _value = pick(value, options.keys)
  //         }
  //       } else {
  //         _value = value
  //       }
  //
  //       return await ctx.jsonapi.add(`/${ prop }${ path }`, _value)
  //     }
  //   }
  //
  //   return descriptor
  // }, {}))

  await next()

  ctx.set('content-type', `${ mediaTypes[0] };charset=utf-8`)
}
