const router = require('koa-router')()
const resolve = require('path').resolve

module.exports = function(app, prefixRoot, path) {

  try{
    let handler = require(resolve(prefixRoot, path))
    if(handler.get) {
      router.get(path, handler.get)
    } else if (typeof handler !== 'object') {
      router.get(path, handler)
    }
    if(handler.post) {
      router.post(path, handler.post)
    }
    if(handler.put) {
      router.put(path, handler.put)
    }
    if(handler.del) {
      router.del(path, handler.del)
    }
  } catch(e) {
    // todo log
    console.log(e.stack)
  }


  app.use(router.routes())
  app.use(router.allowedMethods())
}