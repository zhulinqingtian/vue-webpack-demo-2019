// 服务端拦截请求,再用request发送请求
var request = require('request')
var config = require('../../config/index')
var mode = process.env.NODE_ENV === 'production' ? 'build' : 'dev';
var apiServerUrl = config[mode].proxyTable['/api']

// 判断是否为json
function isJson(req) {
  var str = req.headers['content-type'] || '';
  var contentType = str.split(';')[0];
  return ('application/json' === contentType);
}

exports.proxy = function(req, res) {
  var method = req.method
  var url = req.path
  var options = {
    url: apiServerUrl + url,
    method: method
  }

  // 判断是否登录 - todo

  if (method === 'post') {
    // 验证传参是否为json数据
    if (isJson(req)) {
      // application/json
      // request payload传参
      options.json = true
      options.body = req.body // post请求的数据在body中，get请求的数据在query中
    } else {
      // application/x-www-form-urlencode
      // name=aa&age=10
      // 浏览器中看到是Form Data传参
      options.form = req.body
    }
  } else {
    options.qs = req.query
  }

  // request发起请求
  request(options, function (err, response, body) { // body:接口返回的数据
    if (err) {
      console.log('api proxy err:', err)
      res.send('发生错误')
      return
    }
    if (response.statusCode !== 200) {
      console.log('api proxy err code:', response.statusCode)
      res.send('发生错误')
      return
    }

    res.send(body)
  })
}
