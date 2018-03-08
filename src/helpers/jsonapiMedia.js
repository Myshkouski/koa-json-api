import isDevContext from '~/helpers/isDevContext'

export const JSON_API_MEDIA_TYPES = ['application/vnd.api+json']
export const JSON_API_MEDIA_TYPES_DEV = ['application/json']

export const types = ctx => isDevContext(ctx) ? [...JSON_API_MEDIA_TYPES, ...JSON_API_MEDIA_TYPES_DEV] : [...JSON_API_MEDIA_TYPES]
export const stringify = arrayOfTypes => arrayOfTypes.filter(type => !!type).join(',')
