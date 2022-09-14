import Vue from 'vue';

import App from './App.vue';

import router from '@/router';

import store from './store';

//三级联动全局组件
import TypeNav from '@/components/TypeNav';

import Carsousel from '@/components/Carousel';

Vue.component(TypeNav.name,TypeNav);

Vue.component(Carsousel.name,Carsousel);

import '@/mock/mockServe.js';

import "swiper/css/swiper.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
