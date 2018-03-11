import JsonApi from '../modules/json-api'

export default () => async (ctx, next) => {
  if (ctx.state.hasBody) {
    await JsonApi.validate(ctx.request.body)
  }

  await next()
}
