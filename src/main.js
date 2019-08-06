// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/index'
import axios from 'axios'

// 引用vuex
import store from '../store/index.js'
import Vuex from 'vuex'

// 引用iview
import iView from 'iview' // 导入组件库
import 'iview/dist/styles/iview.css' // 导入样式

Vue.use(iView)
Vue.use(Vuex)

Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
