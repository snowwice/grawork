import Vue from 'vue';
import {router} from './router';

Vue.component('nv-head',require('./components/header.vue'));
Vue.component('foot',require('./components/footer.vue'));
const app = new Vue({router}).$mount('#app');