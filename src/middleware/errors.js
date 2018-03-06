import isDevContext from '../helpers/isDevContext'
import jsonapiMedia from '../helpers/jsonapiMedia'

export default async (ctx, next) => {
  const isDev = isDevContext(ctx)
  const contentTypes = jsonapiMedia.types(ctx)

  try {
    ctx.assert(ctx.request.accepts(contentTypes), 406)
    if (ctx.request.rawBody && ctx.request.rawBody.length) {
      ctx.assert(ctx.request.is(...contentTypes), 415, {
        headers: {
          accept: jsonapiMedia.stringify(contentTypes)
        }
      })
    }

    ctx.state.errors = []

    await next()

    if (Array.isArray(ctx.state.errors) && ctx.state.errors.length) {
      throw ctx.state.errors
    }
  } catch (errorOrErrors) {
    const errors = (Array.isArray(errorOrErrors) ? errorOrErrors : [errorOrErrors]).map(({
      id,
      statusCode: status,
      expose,
      message,
      detail,
      stack,
      headers
    }) => ({
      id,
      status,
      title: expose ? message : undefined,
      detail,
      meta: (isDev || headers) ? {
        headers,
        stack: isDev ? stack : undefined,
      } : undefined
    }))

    const initialError = errors[0]

    if (errors.length > 1) {
      if (initialError.status >= 500) {
        ctx.status = 500
      } else if (initialError.status >= 400) {
        ctx.status = 400
      }
    } else {
      if ('meta' in initialError && 'headers' in initialError.meta) {
        for (let key in initialError.meta.headers) {
          ctx.set(key, initialError.meta.headers[key])
        }
      }
    }

    ctx.body = {
      errors
    }
  } finally {
    ctx.type = contentTypes[0]
  }
}
