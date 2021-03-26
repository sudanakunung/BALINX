import Vue from 'vue'
import App from './App.vue'
import Guest from './guest.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import VueSplide from '@splidejs/vue-splide';
import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: 'CLIENT_ID.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

Vue.config.productionTip = false

if(localStorage.token){

new Vue({
  router,
  store,
  GAuth,
  VueSplide, 
  gauthOption,
  render: h => h(App)
}).$mount('#app')
}else{
  
new Vue({
  router,
  store,
  GAuth, 
  gauthOption,
  render: h => h(Guest)
}).$mount('#app')
}
