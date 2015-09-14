const router = require('koa-router')()

module.exports = PathRouter

// Class PathRouter
function PathRouter(options) {
  var routes = PathRouter.getRoutesFromDir(options.base)

  routes.forEach(function(route) {
    var handler = require(route.filepath)

    // 如果 handler 是一个 generator
    router.get(route.urlpath, handler)

    // 如果 handler.GET 是一个 generator
    router.get(route.urlpath, handler.GET)

    // 如果 handler.POST 是一个 generator
    router.get(route.urlpath, handler.POST)

    // 如果 handler.PUT 是一个 generator
    router.get(route.urlpath, handler.PUT)

    // 如果 handler.DELETE 是一个 generator
    router.get(route.urlpath, handler.DELETE)

  })
}

PathRouter.prototype.routes = function() {
  return router.routes
}

PathRouter.prototype.allowedMethods = function() {
  return router.allowedMethods
}

PathRouter.getRoutesFromDir = function() {
  // TODO
  return []
}