import HttpError from 'http-errors'
import isDevContext from '../helpers/isDevContext'

export default () => async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    const isDev = isDevContext(ctx)
    const errors = []

    if (error.status) {
      errors.push(error)
    } else {
      errors.push({
        status: 501,
        title: 'Internal Server Error',
        detail: `JSON API implementation error${ isDev ? `: ${ error.message }` : ''}`,
        meta: {
          stack: isDev ? error.stack : undefined
        }
      })
    }

    ctx.status = errors[0].status
    ctx.body = {
      errors
    }
  }
}
