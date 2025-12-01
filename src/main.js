import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// Create Vue application, mount router, and mount the app to index.html (#app)
createApp(App)
  .use(router)
  .mount('#app')