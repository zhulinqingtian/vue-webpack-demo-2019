var multer = require('multer');

var apiProxy = require('./controllers/api-proxy-controller')
var imageUpload = require('./controllers/image-upload')
var upload = multer({ dest: 'uploads/' }); // 上传文件夹

exports.setup = function setup (app) {
  // view部分
  app.get(['/', '/view/*'], function (req, res, next) {
    next('/')
  })

  // 接口部分
  app.post('/api/admin/uploadFile/uploadImage', upload.single('file'), function (req, res, next) {
    next();
  }, imageUpload.proxy);

  app.all('/api/*', apiProxy.proxy);
}
