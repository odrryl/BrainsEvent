import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import './assets/fonts/fonts.css'
import router from './router' 

createApp(App).use(router).mount('#app')