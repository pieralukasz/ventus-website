import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueAgile);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


console.log( )

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: window.innerWidth > 600 ? -110 : -60,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

