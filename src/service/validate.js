import Ajv from 'ajv'
import AjvErrors from 'ajv-errors'
import schemas from '~/schema/body'

const ajv = new Ajv({
  schemas,
  allErrors: true,
  jsonPointers: true
})
AjvErrors(ajv)

export const validate = (schemaId, data) => ajv.validate(schemaId, data)
export { schemas }

// ---

const data = {
  meta: {},
  included: []
}

const res = ajv.validate('/', data)
  .then(data => console.log('ok', data))
  .catch(err => console.dir(...err.errors))
