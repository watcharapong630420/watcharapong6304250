import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

// import  firebase  from "firebase/app";
// import  "firebase/firestore";

import { initializeApp } from "firebase/app";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyDFUoPWZ1hiahELgj3amddBCifusciYsUo",
  authDomain: "ite225final.firebaseapp.com",
  projectId: "ite225final",
  storageBucket: "ite225final.appspot.com",
  messagingSenderId: "56914981333",
  appId: "1:56914981333:web:992d14fb17c9657aeb0d5c",
  measurementId: "G-CYTFNWQ3KF"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  firebase,  
  render: h => h(App)
}).$mount('#app')
