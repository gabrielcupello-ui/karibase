import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initPlugins } from './js/plugins'

import './styles/karibase.css'
import './styles/karibase-admin-utilities.css'
import './styles/karibase-style-docs.css'

const app = createApp(App)

app.use(router)
app.mount('#app')

initPlugins()
