import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router.ts"

// Fonts
import "@fontsource-variable/onest";

createApp(App).use(router).mount('#app')
