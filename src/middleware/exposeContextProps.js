import Error from 'http-errors'
// import Store from '@alexeimyshkouski/store'
// import JsonStore from '@alexeimyshkouski/store-json-plugin'
//
//
// const JsonApiPlugin = Store => {
//   Object.assign(Store.prototype, {
//     body() {
//       return this.get('')
//     },
//
//     setMaxErrors(count) {
//       if (typeof count == 'number') {
//         this._state.options.maxErrors = count
//       }
//     },
//
//     error(...args) {
//       const errorPath = '/errors'
//
//       if (!this.has(errorPath)) {
//         this.set(errorPath, [])
//       }
//
//       this._store.errors.push(new Error(...args))
//
//       // this.patch(this._store, [
//       //   op: 'add',
//       //   path: `${ errorPath }/-`,
//       //   value: new Error(...args)
//       // ])
//
//       if (errors.length > this._state.options.maxErrors) {
//         this._state.options.ctx.throw(errors)
//       }
//     }
//   })
//
//   return {
//     init(options) {
//       // if (typeof options.body == 'object') {
//       //   Object.defineProperty(this, '_state', {
//       //     get: () => options.store
//       //   })
//       // }
//
//       this._options = Object.assign({
//         maxErrors: 0
//       }, options)
//     },
//
//     set: {
//       pre: true,
//       apply(path, value) {
//
//       }
//     },
//
//     remove: {
//       pre: true,
//       apply(path) {
//
//       }
//     }
//   }
// }
//
// const JsonApiStore = Store.create().use(JsonApiPlugin)

import JsonApi from '../modules/json-api'

export default () => async (ctx, next) => {
  ctx.body = {}
  ctx.jsonapi = new JsonApi({
    body: ctx.body
  })

  await next()
}
