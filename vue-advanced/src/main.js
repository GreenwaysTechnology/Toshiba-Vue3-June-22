import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .provide('company', 'google')
    .mount('#app')
