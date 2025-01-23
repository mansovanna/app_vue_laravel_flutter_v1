import './assets/css/app.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia) // Using Pinia
app.use(router) // Using Vue Router

app.mount('#app')
