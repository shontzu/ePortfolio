import Vue from 'vue'
import Router from 'vue-router'
import About from '../About.vue'
import Home from '../Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/your-github-repo/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})