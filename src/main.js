import Vue from 'vue';
import {router} from './router';
var $ = require('jquery');

Vue.component('nv-head',require('./components/header.vue'));
Vue.component('foot',require('./components/footer.vue'));
Vue.component('bread-crumb',require('./components/breadcrumb.vue'));
const app = new Vue({router}).$mount('#app');