import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers} from './router'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: routers
}

/* eslint import/prefer-default-export: 0 */
export const router = new VueRouter(RouterConfig)

// 全局导航钩子
router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})
