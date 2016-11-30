import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Control from './components/Control/Control'
import Top from './components/Top/Top'

// 声明使用vue-router
Vue.use(VueRouter)

// 创建路由表
const routes = [
  {
    path: '/',
    name: 'Index',
    component: App
  },
  {
    path: '/add',
    name: 'Add',
    component: Control
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Control
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
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
