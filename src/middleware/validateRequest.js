import Error from 'http-errors'
import {
  validate
} from '../service/validate'

const mapValidationErrors = ({
  message,
  params
}) => ({
  statusCode: 422,
  detail: message
})

export default () => async (ctx, next) => {
  if (ctx.request.rawBody) {
    try {
      await validate('/', ctx.request.body)
    } catch (error) {
      throw error.errors.map(mapValidationErrors)
    }
  }

  await next()
}
