const assert = require('assert')
const KoaRouter = require('koa-router')
const KoaJsonApi = require('../')

describe('Module', () => {
  it('should be [KoaRouter] instance', () => {
    const router = KoaJsonApi.Router()

    assert.ok(router instanceof KoaRouter)
  })
})
