import { createApp } from 'vue'
import App from './App.vue'
import Company from './components/Company.vue'
const app = createApp(App)

//Global Components :Without build tool
// app.component('Company', {
//     template: `<h1>Vue Corporation</h1>`
// })
app.component('Company', Company)

app.mount('#app')
