const Koa = require('koa')
const {
  Router,
  getSchemas
} = require('../')

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

  await ctx.error({ status: 501, message: 'test501' })
  await ctx.error({ status: 502, message: 'test502' })
  await ctx.error([
    { status: 503, message: 'test503' },
    { status: 504, message: 'test504' }
  ])
})

router.get('/schemas', async ctx => {
  await ctx.data(getSchemas(), {
    keys: ['id', 'type', 'attributes.title'],
    dict: {
      id: '/attributes/$id'
    },
    defaults: {
      type: 'schema'
    }
  })
})

koa.use(router.routes())

koa.listen(8090, '0.0.0.0')
