import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/karibase.css'
import './styles/Style-docs.css'
import './js/karibase-ui.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
