import { createApp } from 'vue'
import App from './App.vue'
import { myPlugin } from './plugins/myplugin'

createApp(App)
    .provide('company', 'google')
    .directive('focus', (element, binding) => {
        console.log('directive => ', element)
        element.focus()
    })
    .directive('highlight', (element, binding) => {
      
        //set inital color:
        element.style.backgroundColor = binding.value
        element.addEventListener('mousemove', (evt) => {
            //element.style.backgroundColor = 'yellow'
            highLight('yellow')
        })
        //remove style
        element.addEventListener('mouseleave', (evt) => {
            // element.style.backgroundColor = null
            highLight(null)
        })
        const highLight = (color) => {
            element.style.backgroundColor = color
        }
    })
    .use(myPlugin)
    .mount('#app')
