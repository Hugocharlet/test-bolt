import { createApp } from 'vue'
import './assets/styles/index.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
  offset: 50
})

const app = createApp(App)
app.use(router)
app.mount('#app')