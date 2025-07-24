import { createApp } from 'vue'

import router from './router'
import App from './App.vue'

import '@/assets/css/_reset.css'
import '@/assets/css/common.css'
import '@/assets/fonts/font.css'


const app = createApp(App)
app.use(router)

app.mount('#app')