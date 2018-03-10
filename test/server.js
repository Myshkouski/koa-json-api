const Koa = require('koa')
const { Router } = require('../')

const koa = new Koa()
const router = new Router()

router.post('/', async ctx => {
  ctx.jsonapi.data({
    ok: true
  })
})

koa.use(router.routes())

koa.listen(8090, '0.0.0.0')
