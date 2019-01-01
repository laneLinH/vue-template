// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css/normalize.css'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'

Vue.config.productionTip = false
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

router.beforeEach((to,from,next) => {
  next()
  if(to.meta.title){
    document.title=to.meta.title;
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
