import Vue from 'vue'
import Router from 'vue-router'
import Me from '../views/me/me.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'me',
      component: Me
    }
  ]
})
