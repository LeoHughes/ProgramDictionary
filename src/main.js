import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Add from './components/Add/Add'

// 声明使用vue-router
Vue.use(VueRouter)

// 创建路由表
const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/add',
    component: Add
  }
]

// 注册路由表
const router = new VueRouter({
  routes
})

// 挂载实例，启动应用
const app = new Vue({
  el: '#app',
  router
})
