import JsonApi from '@alexeimyshkouski/json-api'
import defaults from 'lodash.defaultsdeep'

export default options => {
  options = defaults({}, options, {
    request: true,
    response: false
  })

  return async (ctx, next) => {
    if (options.request && ctx.state.hasBody) {
      try {
        await JsonApi.validate(ctx.request.body)
      } catch (error) {
        ctx.throw(422, {
          detail: `ValidationError: request body is not valid`,
          meta: error.reasons
        })
      }
    }

    await next()

    if (options.response) {
      try {
        await JsonApi.validate(ctx.body)
      } catch (error) {
        Object.assign({
          detail: `ValidationError: response body is not valid`,
          meta: error.reasons
        })

        throw error
      }
    }
  }
}
