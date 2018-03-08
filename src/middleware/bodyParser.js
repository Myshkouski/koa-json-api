import isDevContext from '../helpers/isDevContext'
import jsonapiMedia from '../helpers/jsonapiMedia'

export default options => bodyParser({
  strict: true,
  enableTypes: ['json'],
  detectJSON: ctx => ctx.is(isDevContext(ctx) ? jsonapiMedia.JSON_API_MEDIA_TYPES_DEV : jsonapiMedia.JSON_API_MEDIA_TYPES),
  onerror: options.onError || (error, ctx) => {
    ctx.jsonapi.throw(415, {
      headers: {
        accept: stringifyApiMediaTypes(defineApiMediaTypes(ctx))
      }
    })
  }
})
