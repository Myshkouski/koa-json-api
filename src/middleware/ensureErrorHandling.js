import isDevContext from '~/helpers/isDevContext'

export default () => async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    const isDev = isDevContext(ctx)
    ctx.status = 500
    ctx.body = {
      errors: [{
        status: 500,
        title: 'JSON API error',
        details: isDev ? error.message : undefined
      }]
    }
  }
}
