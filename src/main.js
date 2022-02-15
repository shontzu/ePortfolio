import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' 
import router from './router'  
import VueAnalytics from 'vue-analytics';

Vue.use(VueRouter)

Vue.use(VueAnalytics, {
    id: '303633791',
    router
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
