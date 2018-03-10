import jsonPatch from 'fast-json-patch'
import jsonPointer from 'json-pointer'
import Ajv from 'ajv'

import schemas from './schemas'
// import ops from './ops'

const ajv = new Ajv({
  schemas
})

const noError = doc => {
  if (jsonPointer.has(doc, '/errors')) {
    throw new Error(`'/errors' has been already set`)
  }
}

class JsonApi {
  constructor({
    body
  }) {
    this.body = typeof body == 'object' ? body : {};
    const keys = ['data', 'meta', 'error']
    keys.forEach(key => {
      this[key] = JsonApi[key].bind(this, this.body)
    })
  }

  static patch(doc, ops) {
    return jsonPatch.applyPatch(doc, ops).newDocument
  }

  static data(doc, value) {
    noError(doc)

    const path = '/data'

    const ops = [{
      op: 'replace',
      path,
      value
    }]

    return JsonApi.patch(doc, ops)
  }

  static error(doc, value) {
    const path = '/errors'

    const ops = [{
      op: 'add',
      path: `${ path }/-`,
      value
    }]

    if (!jsonPointer.has(doc, path)) {
      ops.unshift({
        op: 'add',
        path,
        value: []
      })
    }

    if (jsonPointer.has(doc, '/data')) {
      ops.unshift({
        op: 'remove',
        path: '/included'
      })
      ops.unshift({
        op: 'remove',
        path: '/data'
      })
    }

    return JsonApi.patch(doc, ops)
  }

  static meta(doc, value) {
    noError(doc)

    const path = '/meta'

    const ops = [{
      op: 'add',
      path,
      value
    }]

    return JsonApi.patch(doc, ops)
  }
}

export default JsonApi
