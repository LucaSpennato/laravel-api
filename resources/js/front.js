window.Vue = require('vue');

// import Vue from 'vue';
import App from '../views/guest/App.vue';

const app = new Vue({
    el: '#root',
    render: h => h(App)
});