# vue-wepack-demo-2019

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## sass引入
1.安装依赖
```
npm install node-sass --save-dev
npm install sass-loader --save-dev
npm install style-loader --save-dev
npm install sass-resources-loader --save-dev
```
2.添加sass配置
webpack.base.conf.js的rules中，添加sass的配置
{
  test: /\.scss$/,
  loaders: ["style", "css", "sass"]
}
3.修改样式语言
```
<style lang='scss'></style>
```
