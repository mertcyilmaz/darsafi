import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

import './assets/css/base.css';
import './assets/css/components.css';
import './assets/css/layout.css';
import './assets/css/overrides.css';
import './assets/css/utilities.css';
import './assets/js/include.js';

const app = createApp(App)
app.use(router)
app.mount('#app')
