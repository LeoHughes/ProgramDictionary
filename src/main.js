import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Add from './components/Add/Add'


Vue.use(VueRouter)

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

const router = new VueRouter({
  routes
})


const app = new Vue({
  el: '#app',
  router
})
