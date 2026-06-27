import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/router.ts"
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import PrimeVue from 'primevue/config';
import MyPreset from './theme/preset.ts'

// Fonts
import "@fontsource-variable/onest";
import "@fontsource/jetbrains-mono";
import ru from './theme/ru.ts'


// Plugins
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App)
    .use(router).use(PrimeVue, {
        theme: {
            preset: MyPreset,
        },
        locale: ru
    }).use(pinia).mount('#app')
