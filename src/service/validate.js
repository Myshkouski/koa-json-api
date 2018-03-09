import Ajv from 'ajv'
import AjvErrors from 'ajv-errors'
import schemas from '../schema/jsonapi'

const ajv = new Ajv({
  schemas,
  allErrors: true,
  jsonPointers: true
})
AjvErrors(ajv)

export const validate = (schemaId, data) => ajv.validate(schemaId, data)
export { schemas }
