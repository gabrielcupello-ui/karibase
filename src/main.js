import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/karibase.css'
import './styles/karibase-style-docs.css'
import './styles/karibase-framework-base.css'
import './styles/karibase-framework-preflight.css'
import './styles/karibase-framework-theme.css'
import './styles/karibase-admin-utilities.css'
import './js/karibase-ui.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
