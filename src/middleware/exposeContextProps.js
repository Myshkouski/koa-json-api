import Store from '@alexeimyshkouski/store'
import JsonStore from '@alexeimyshkouski/store-json-plugin'
import * as symbols from '@alexeimyshkouski/store/dist/symbols'

const OPTIONS = Symbol('options')

const JsonApiPlugin = Store => {
  Object.assign(Store.prototype, {
    body() {
      return this.get('')
    },

    setMaxErrors(count) {

    },

    throw() {
      const errors = [] // this.set('/errors')
      if(errors.length > this[OPTIONS].maxErrors) {
        this[OPTIONS].ctx.throw(errors)
      }
    }
  })

  return {
    init(options) {
      this[OPTIONS] = Object.assign({
        maxErrors: 0
      }, options)
    },

    set: {
      pre: true,
      apply(path, value) {

      }
    },

    remove: {
      pre: true,
      apply(path) {

      }
    }
  }
}

const JsonApiStore = Store.create().use(JsonApiPlugin)

export default async (ctx, next) => {
  ctx.jsonapi = new JsonApiStore()

  await next()
}
