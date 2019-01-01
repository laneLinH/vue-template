import Vue from 'vue'
import Components from './components'
import Router from 'vue-router'
Vue.use(Router)
const routes=[
  {
    path: '/',
    name: 'Home',
    component:Components.Home
  },
  {
    path: '/home1',
    name: 'Home1',
    component:Components.Home1
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes
})
