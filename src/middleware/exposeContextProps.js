import Error from 'http-errors'
import Store from '@alexeimyshkouski/store'
import JsonStore from '@alexeimyshkouski/store-json-plugin'

const OPTIONS = Symbol('options')

const JsonApiPlugin = Store => {
  Object.assign(Store.prototype, {
    body() {
      return this.get('')
    },

    setMaxErrors(count) {
      if(typeof count == 'number') {
        this[OPTIONS].maxErrors = count
      }
    },

    throw (...args) {
      const errorPath = '/errors'

      if (!this.has(errorPath)) {
        this.set(errorPath, [])
      }

      this[Store.symbols.STORE].errors.push(new Error(...args))

      // this.patch(this[Store.symbols.STORE], [
      //   op: 'add',
      //   path: `${ errorPath }/-`,
      //   value: new Error(...args)
      // ])

      if (errors.length > this[OPTIONS].maxErrors) {
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

export default () => async (ctx, next) => {
  ctx.jsonapi = new JsonApiStore()

  await next()
}
