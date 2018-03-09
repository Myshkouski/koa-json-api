import isDevContext from '../helpers/isDevContext'

export default () => async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    const isDev = isDevContext(ctx)
    ctx.status = 501
    ctx.body = {
      errors: [{
        status: ctx.status,
        title: 'JSON API error',
        details: isDev ? error.message : undefined,
        meta: {
          stack: isDev ? error.stack : undefined
        }
      }]
    }
  }
}
