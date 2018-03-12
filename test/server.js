const Koa = require('koa')
const { Router, getSchemas } = require('../')

const koa = new Koa()
const router = new Router({
  validate: {
    patch: false,
    request: false,
    response: true
  },
  optionalSchema: []
})

router.post('/', async ctx => {
  await ctx.data({
    id: '0',
    type: 'test'
  })

  await ctx.links({})
  await ctx.links('/self', '/')

  await ctx.jsonapi.add('/errors', [])
})

router.get('/schemas', async ctx => {
  await ctx.data(getSchemas(), { keys: [ 'id', 'type' ] })
})

koa.use(router.routes())

koa.listen(8090, '0.0.0.0')
