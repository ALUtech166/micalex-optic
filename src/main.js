import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import store from './store'
import axios from 'axios'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


axios.defaults.baseURL = 'https://b478-102-64-213-166.ngrok.io/api'
window.axios = axios

createApp(App).use(VueSweetalert2).use(store).use(router).mount('#app')
import 'bootstrap/dist/js/bootstrap.js';