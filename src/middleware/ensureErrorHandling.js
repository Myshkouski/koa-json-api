import HttpError from 'http-errors'
import isDevContext from '../helpers/isDevContext'
import createInitialError from '../helpers/createInitialError'

export default () => async (ctx, next) => {
  try {
    await next()
    // throw new Error('test')
  } catch (error) {
    const isDev = isDevContext(ctx)
    const errors = []

    if (error.status) {
      errors.push(Object.assign({
        status: error.status
      }, error))
    } else {
      const _error = new HttpError(500, {
        detail: `JSON API implementation error`,
        meta: isDev ? {
          initialError: createInitialError(error)
        } : undefined
      })

      errors.push(Object.assign({
        status: _error.status
      }, _error))
    }

    ctx.status = errors[0].status
    ctx.body = {
      errors
    }
  }
}
