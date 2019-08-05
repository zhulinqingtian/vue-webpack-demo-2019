var apiProxy = require('./controllers/api-proxy-controller')

exports.setup = function setup (app) {
  // view部分
  app.get(['/', '/view/*'], function (req, res, next) {
    next('/')
  })

  // 接口部分
  app.all('/api/*', apiProxy.proxy);
}
