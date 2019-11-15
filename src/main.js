import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import firebase from '@/firebaseinit'

Vue.config.productionTip = false

let mounted = false;
firebase.auth().onAuthStateChanged(() => {
  if (!mounted) {
    new Vue({
      router,
      render: function (h) { return h(App) }
    }).$mount('#app')
    mounted = true;
  }
});


