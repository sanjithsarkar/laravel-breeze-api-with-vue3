import { createApp } from 'vue'
import router from './router';

import './axios.js'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // Import Bootstrap JS (including Popper.js)


const app = createApp(App);
app.use(router);
app.mount('#app')
