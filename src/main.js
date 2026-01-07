import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 導入全域樣式
import './assets/styles/variables.css'
import './assets/styles/main.css'
import './assets/styles/animations.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
