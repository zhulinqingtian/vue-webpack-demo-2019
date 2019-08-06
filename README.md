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

## axios引入及配置(修改原型链方式)
```
npm install axios --save
```

安装其他插件的时候，可以直接在 main.js 中引入并 Vue.use()，但是 axios 并不能 use，只能每个需要发送请求的组件中即时引入.
为了解决这个问题，有两种开发思路，一是在引入 axios 之后，修改原型链，二是结合 Vuex，封装一个 aciton。这里只说修改原型链的方式.

1. 在 main.js 中引入 axios
```
import axios from 'axios'
```

2. 将 axios 改写为 Vue 的原型属性
```
Vue.prototype.$http= axios
```

## 使用json-server实现后台数据接口
```
mock文件夹，及下面的三个文件，然后在package.json里配置运行script
```

### vue引入iview
```
npm install  iview  --save

// main.js
import iView from 'iview'; // 导入组件库
import 'iview/dist/styles/iview.css'; // 导入样式
Vue.use(iView);
```

### vue引入vuex
```
npm install vuex --save

// main.js
import store from './store/index.js'
import Vuex from 'vuex'
Vue.use(Vuex)

// 在实例中挂载
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
```
