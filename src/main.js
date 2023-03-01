import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue3-lazyload'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App).use(router,VueAxios, axios, VueLazyLoad, VueSweetalert2).mount('#app')

import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/js/bootstrap.min"
