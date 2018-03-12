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
  const schemas = getSchemas().map(({ type, id }) => ({ type, id }))

  await ctx.data(null)
  await ctx.included(schemas)
})

koa.use(router.routes())

koa.listen(8090, '0.0.0.0')
