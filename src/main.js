import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/karibase.css'
import './styles/karibase-admin-utilities.css'
import './js/karibase-ui.js'
import './js/karibase-modal.js'
import './js/karibase-inactivity-detector.js'
import './js/karibase-auto-seo.js'

const app = createApp(App)

app.use(router)
app.mount('#app')

// Initialize Auto SEO
if (typeof AutoSEO !== 'undefined') {
  window.autoSEO = new AutoSEO({
    autoGenerate: true,
    updateMeta: true,
    updateOpenGraph: true,
    updateTwitter: true,
    addStructuredData: true,
    optimizeImages: true,
    debug: false
  })
}

// Initialize Inactivity Detector (optional - enable as needed)
if (typeof InactivityDetector !== 'undefined') {
  window.inactivityDetector = new InactivityDetector({
    timeout: 30 * 60 * 1000, // 30 minutes
    warningTime: 5 * 60 * 1000, // 5 minutes
    autoLogout: false,
    showWarning: true,
    debug: false
  })
}
