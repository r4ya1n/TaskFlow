import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router.ts"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// Fonts
import "@fontsource-variable/onest";

// Plugins
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).mount('#app')
