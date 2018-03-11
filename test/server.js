const Koa = require('koa')
const { Router } = require('../')

const koa = new Koa()
const router = new Router({
  validate: true
})

router.post('/', async ctx => {
  await ctx.jsonapi.add('/data', {
    id: '0',
    type: 'test'
  })

  await ctx.jsonapi.add('/links', {})
  await ctx.jsonapi.add('/links/self', '/')
})

koa.use(router.routes())

koa.listen(8090, '0.0.0.0')
