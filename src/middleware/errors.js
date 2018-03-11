import HttpError from 'http-errors'
import isDevContext from '../helpers/isDevContext'
import * as jsonapiMedia from '../helpers/jsonapiMedia'

const mapErrrosToJsonApiErrors = isDev => error => {
  const {
    id,
    status,
    expose,
    message,
    detail,
    stack,
    headers,
    meta
  } = error

  const jsonapiError = {
    id: error.id,
    status: error.status
  }

  if(isDev || expose) {
    Object.assign(jsonapiError, {
      title: message,
      detail
    })
  }

  if(isDev || headers) {
    const jsonapiMeta = Object.assign(meta, {
      headers,
      stack: isDev ? stack : undefined
    })

    Object.assign(jsonapiError, {
      meta
    })
  }

  return jsonapiError
}

export default () => async (ctx, next) => {
  const isDev = isDevContext(ctx)
  const contentTypes = jsonapiMedia.types(ctx)

  try {
    await next()
  } catch (errorOrErrors) {
    const errors = (Array.isArray(errorOrErrors) ? errorOrErrors : [errorOrErrors]).map(mapErrrosToJsonApiErrors(isDev))

    const initialError = errors[0]

    if(!initialError.status) {
      ctx.throw(500, {
        detail: `Initial error has no status code. Assuming it is an implementation error.`,
        meta: {
          initialError
        }
      })
    } else if (errors.length > 1) {
      if (initialError.status >= 500) {
        ctx.status = 500
      } else if (initialError.status >= 400) {
        ctx.status = 400
      }
    } else {
      ctx.status = initialError.status
      if ('meta' in initialError && 'headers' in initialError.meta) {
        ctx.set(initialError.meta.headers)
      }
    }

    ctx.body = {
      errors
    }
  }
}
