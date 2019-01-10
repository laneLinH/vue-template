import Vue from 'vue'
import Components from './components'
import Router from 'vue-router'
Vue.use(Router)
const routes=[
  {
    path: '/home',
    name: 'Home',
    component:Components.defualtTemplate,
    hidden:true,
    children:[
      {
        path: 'test1',
        name: 'test1',
        component: Components.test,
        children: []
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component:Components.login
  },
  {
    path: '*',
    redirect:'/home'
  }
]

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes
})
