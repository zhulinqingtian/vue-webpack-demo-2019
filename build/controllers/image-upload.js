
var request = require('request');
var fs = require('fs');
var path = require('path');
var config = require('../../config/index');
var mode = 'dev' || 'build'; // TODO
var apiServerUrl = config[mode].proxyTable['/api'];
var apiAdminServerUrl = config[mode].proxyTable['/api/admin'];

exports.proxy = function (req, res) {
  var method = req.method;
  var serverURL = req.path.indexOf('admin') > -1 ? apiAdminServerUrl : apiServerUrl;
  var options = {
    url: serverURL + req.path,
    method: method,
    formData:{
      file: {
        value: fs.createReadStream(path.resolve(__dirname, '../../' + req.file.path)),
        options: {
          filename: req.file.originalname,
          contentType: req.file.mimetype
        },
        accept:'image/jpg,image/jpeg,image/png,image/gif,image/bmp'
      }
    }
  };

  request(options, function (err, response, body) {
    if (err) {
      console.log('api proxy error.', err);
      res.send('发生错误');
      return;
    }
    if (response.statusCode !== 200) {
      console.log("api proxy error. code: " + response.statusCode + ", body: " + body);
      res.send('发生错误');
      return;
    }
    res.send(body);
  });
}
