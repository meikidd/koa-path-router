const koa = require('koa')
const pathRouter = require('../build/index')()

var app = koa()

app.use(pathRouter.routes())
app.use(pathRouter.allowdMethods())

app.use(function *(next) {
  this.body = 'hello world'
})

app.listen(9999, function() {
  console.log('koa-path-router demo started on: 80')
})