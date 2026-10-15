<template>
  <div class="landing-page">
    <header class="landing-header">
      <div class="landing-container">
        <div class="landing-nav">
          <div class="landing-logo">
            <img :src="`${baseUrl}logo.svg`" alt="Karibase Logo" class="landing-logo-image">
            <span class="landing-logo-text">Karibase</span>
          </div>
          <nav class="landing-nav-links">
            <router-link to="/docs" class="landing-nav-link">Docs</router-link>
            <router-link to="/blog" class="landing-nav-link">Blog</router-link>
            <router-link to="/showcase" class="landing-nav-link">Showcase</router-link>
            <router-link to="/partners" class="landing-nav-link">Partners</router-link>
            <router-link to="/plus" class="landing-nav-link">Plus</router-link>
          </nav>
          <div class="landing-nav-actions">
            <button class="landing-icon-btn">
              <i class="fas fa-search"></i>
            </button>
            <a href="https://github.com" target="_blank" class="landing-icon-btn">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="landing-main">
      <div class="landing-container">
        <div class="landing-hero">
          <h1 class="landing-hero-title">Rapidly build modern websites without ever leaving your HTML</h1>
          <p class="landing-hero-subtitle">
            A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
          </p>
          <div class="landing-hero-actions">
            <router-link to="/docs" class="landing-btn landing-btn-primary">
              Get started
            </router-link>
            <button @click="downloadCompleteFramework" class="landing-btn landing-btn-secondary">
              <i class="fas fa-download"></i>
              Download Framework (CSS + JS)
            </button>
            <button @click="downloadHTML" class="landing-btn landing-btn-secondary">
              <i class="fas fa-code"></i>
              Starter HTML
            </button>
          </div>
        </div>

        <div class="landing-download-section">
          <h2 class="landing-section-title">Download Karibase Framework</h2>
          <p class="landing-section-subtitle">Get everything you need to start building with Karibase - no CDN or npm required!</p>

          <div class="landing-download-cards">
            <div class="landing-download-card">
              <div class="landing-download-icon">
                <i class="fas fa-file-code"></i>
              </div>
              <h3 class="landing-download-card-title">Complete Framework</h3>
              <p class="landing-download-card-description">
                Download both CSS and JavaScript files with all components, utilities, themes, and dark mode support.
              </p>
              <button @click="downloadCompleteFramework" class="landing-download-btn">
                <i class="fas fa-download"></i>
                Download CSS + JS
              </button>
              <p class="landing-download-size">~330KB total</p>
            </div>

            <div class="landing-download-card">
              <div class="landing-download-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h3 class="landing-download-card-title">Modern CSS</h3>
              <p class="landing-download-card-description">
                Modern CSS with Cascade Layers, Container Queries, and CSS functions.
              </p>
              <button @click="downloadModernCSS" class="landing-download-btn">
                <i class="fas fa-download"></i>
                Download karibase-modern.css
              </button>
              <p class="landing-download-size">~50KB (optimized)</p>
            </div>

            <div class="landing-download-card">
              <div class="landing-download-icon">
                <i class="fab fa-js"></i>
              </div>
              <h3 class="landing-download-card-title">Complete JS</h3>
              <p class="landing-download-card-description">
                Complete JavaScript bundle with Bootstrap components and Karibase UI.
              </p>
              <button @click="downloadJS" class="landing-download-btn">
                <i class="fas fa-download"></i>
                Download karibase.js
              </button>
              <p class="landing-download-size">~80KB</p>
            </div>

            <div class="landing-download-card">
              <div class="landing-download-icon">
                <i class="fas fa-html5"></i>
              </div>
              <h3 class="landing-download-card-title">Starter HTML</h3>
              <p class="landing-download-card-description">
                Ready-to-use HTML template with Karibase classes and examples.
              </p>
              <button @click="downloadHTML" class="landing-download-btn">
                <i class="fas fa-download"></i>
                Download starter.html
              </button>
              <p class="landing-download-size">~2KB</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { frameworkStyles } from '@/config'

export default {
  name: 'Home',
  methods: {
    async downloadFramework() {
      try {
        // Fetch ALL CSS files from src/styles (core + ARC themes + plugin styles)
        const cssFiles = frameworkStyles()

        let combinedCSS = '/*!\n' +
' * Karibase CSS Framework v2.0.0\n' +
' * Complete bundled version - No CDN or npm required\n' +
' * Just link this file in your HTML and start using Karibase!\n' +
' * \n' +
' * Includes all core styles, components, utilities, themes, and integrations:\n' +
' * - Core framework (variables, reset, base, layout)\n' +
' * - Components (basic, extended, React)\n' +
' * - Utilities (basic, extended)\n' +
' * - Dark mode support\n' +
' * - Dashboard styles\n' +
' * - Modern CSS features\n' +
' * - Container queries\n' +
' * - Karibase CSS Framework integration\n' +
' * - 12+ theme presets (RetailRidge, CommerceCraft, Blogify, Flexiweb, Edinburgh, Printifix, Kelion, Aureon, Archeon, Clinic, Dashboard, Builder)\n' +
' * \n' +
' * Usage:\n' +
' * \x3Clink rel="stylesheet" href="karibase.css"\x3E\n' +
' * \n' +
' * @license MIT\n' +
' * @copyright 2026\n' +
' */\n\n'

        for (const file of cssFiles) {
          const response = await fetch('/src/styles/' + file)
          const css = await response.text()
          combinedCSS += '/* ========================================\n' +
'   ' + file.toUpperCase() + '\n' +
'   ======================================== */\n\n' + css + '\n\n'
        }

        // Create download
        const blob = new Blob([combinedCSS], { type: 'text/css' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'karibase.css'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      } catch (error) {
        console.error('Error downloading framework:', error)
        alert('Error downloading framework. Please try again.')
      }
    },
    async downloadCompleteFramework() {
      try {
        // Download unified CSS (core + ARC themes + plugin styles)
        const cssFiles = frameworkStyles()

        let combinedCSS = '/*!\n' +
' * Karibase CSS Framework v2.0.0\n' +
' * Complete bundled version - No CDN or npm required\n' +
' * Just link this file in your HTML and start using Karibase!\n' +
' * \n' +
' * Includes all core styles, components, utilities, themes, and integrations:\n' +
' * - Core framework (variables, reset, base, layout)\n' +
' * - Components (basic, extended, React)\n' +
' * - Utilities (basic, extended)\n' +
' * - Dark mode support\n' +
' * - Dashboard styles\n' +
' * - Modern CSS features\n' +
' * - Container queries\n' +
' * - Karibase CSS Framework integration\n' +
' * - 12+ theme presets (RetailRidge, CommerceCraft, Blogify, Flexiweb, Edinburgh, Printifix, Kelion, Aureon, Archeon, Clinic, Dashboard, Builder)\n' +
' * \n' +
' * Usage:\n' +
' * \x3Clink rel="stylesheet" href="karibase.css"\x3E\n' +
' * \n' +
' * @license MIT\n' +
' * @copyright 2026\n' +
' */\n\n'

        for (const file of cssFiles) {
          const response = await fetch('/src/styles/' + file)
          const css = await response.text()
          combinedCSS += '/* ========================================\n' +
'   ' + file.toUpperCase() + '\n' +
'   ======================================== */\n\n' + css + '\n\n'
        }

        // Download CSS
        const cssBlob = new Blob([combinedCSS], { type: 'text/css' })
        const cssUrl = URL.createObjectURL(cssBlob)
        const cssLink = document.createElement('a')
        cssLink.href = cssUrl
        cssLink.download = 'karibase.css'
        document.body.appendChild(cssLink)
        cssLink.click()
        document.body.removeChild(cssLink)
        URL.revokeObjectURL(cssUrl)

        // Download unified JS
        const jsFiles = [
          'karibase-ui.js',
          'karibase.bundle.min.js'
        ]

        let combinedJS = '/*!\n' +
' * Karibase JavaScript Framework v2.0.0\n' +
' * Complete bundled version - No CDN or npm required\n' +
' * Includes all Bootstrap components + Karibase UI components\n' +
' * \n' +
' * Usage:\n' +
' * \x3Cscript src="karibase.js"\x3E\x3C/script\x3E\n' +
' * \n' +
' * @license MIT\n' +
' * @copyright 2026\n' +
' */\n\n'

        for (const file of jsFiles) {
          const response = await fetch('/src/js/' + file)
          const js = await response.text()
          combinedJS += '/* ========================================\n' +
'   ' + file.toUpperCase() + '\n' +
'   ======================================== */\n\n' + js + '\n\n'
        }

        // Download JS
        const jsBlob = new Blob([combinedJS], { type: 'text/javascript' })
        const jsUrl = URL.createObjectURL(jsBlob)
        const jsLink = document.createElement('a')
        jsLink.href = jsUrl
        jsLink.download = 'karibase.js'
        document.body.appendChild(jsLink)
        jsLink.click()
        document.body.removeChild(jsLink)
        URL.revokeObjectURL(jsUrl)

      } catch (error) {
        console.error('Error downloading complete framework:', error)
        alert('Error downloading complete framework. Please try again.')
      }
    },
    async downloadModernCSS() {
      try {
        // Fetch the modern CSS file
        const response = await fetch('/src/styles/karibase-modern.css')
        const css = await response.text()

        const cssContent = '/*!\n' +
' * Karibase CSS Framework v2.0.0 - Modern Version\n' +
' * \n' +
' * Modern CSS Features:\n' +
' * - Cascade Layers (@layer) for style isolation\n' +
' * - Container Queries for component-level responsiveness\n' +
' * - CSS Custom Properties for dynamic theming\n' +
' * - Modern CSS functions (clamp, min, max, aspect-ratio)\n' +
' * \n' +
' * Usage:\n' +
' * <link rel="stylesheet" href="karibase-modern.css">\n' +
' * \n' +
' * Requires PostCSS with cascade-layers plugin for full support.\n' +
' * See CSS-ARCHITECTURE.md for details.\n' +
' * \n' +
' * @license MIT\n' +
' * @copyright 2026\n' +
' */\n\n' + css

        const blob = new Blob([cssContent], { type: 'text/css' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'karibase-modern.css'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      } catch (error) {
        console.error('Error downloading modern CSS:', error)
        alert('Error downloading modern CSS. Please try again.')
      }
    },
    async downloadJS() {
      try {
        // Fetch the minified bundle JS
        const response = await fetch('/src/js/karibase.bundle.min.js')
        const js = await response.text()

        const jsContent = '/*!\n' +
' * Karibase JavaScript Framework v2.0.0\n' +
' * Complete bundled version - No CDN or npm required\n' +
' * Includes all Bootstrap components + Karibase UI components\n' +
' * \n' +
' * Usage:\n' +
' * \x3Cscript src="karibase.js"\x3E\x3C/script\x3E\n' +
' * \n' +
' * @license MIT\n' +
' * @copyright 2026\n' +
' */\n\n' + js

        const blob = new Blob([jsContent], { type: 'text/javascript' })
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'karibase.js'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      } catch (error) {
        console.error('Error downloading JS:', error)
        alert('Error downloading JavaScript. Please try again.')
      }
    },
    downloadHTML() {
      const htmlTemplate = '<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'    <meta charset="UTF-8">\n' +
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'    <title>Karibase Framework - Quick Start</title>\n' +
'    <link rel="stylesheet" href="karibase.css">\n' +
'</head>\n' +
'<body>\n' +
'    <div class="kb-container kb-py-5">\n' +
'        <div class="kb-row kb-justify-content-center">\n' +
'            <div class="kb-col-md-8">\n' +
'                <h1 class="kb-text-3xl kb-font-bold kb-mb-4">Hello, Karibase!</h1>\n' +
'                <p class="kb-text-lg kb-mb-4">This is a quick start template using Karibase CSS Framework.</p>\n' +
'                \n' +
'                <button class="kb-btn kb-btn-primary kb-mr-2">Primary Button</button>\n' +
'                <button class="kb-btn kb-btn-secondary kb-mr-2">Secondary Button</button>\n' +
'                <button class="kb-btn kb-btn-success">Success Button</button>\n' +
'                \n' +
'                <div class="kb-card kb-mt-4 kb-shadow kb-p-4">\n' +
'                    <h3 class="kb-text-xl kb-font-bold kb-mb-2">Card Example</h3>\n' +
'                    <p>This is a card component styled with Karibase classes.</p>\n' +
'                </div>\n' +
'            </div>\n' +
'        </div>\n' +
'    </div>\n' +
'    \n' +
'    <!-- Karibase JavaScript -->\n' +
'    \x3Cscript src="karibase.js"\x3E\x3C/script\x3E\n' +
'</body>\n' +
'</html>'

      const blob = new Blob([htmlTemplate], { type: 'text/html' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'karibase-starter.html'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    },
    downloadFullPackage() {
      // This would download a zip file with CSS, HTML, and README
      // For now, we'll create a simple text file with instructions
      const packageContent = 'Karibase CSS Framework v2.0.0\n' +
'================================\n' +
'\n' +
'Thank you for downloading Karibase!\n' +
'\n' +
'QUICK START:\n' +
'1. Link karibase.css in your HTML:\n' +
'   \x3Clink rel="stylesheet" href="karibase.css"\x3E\n' +
'\n' +
'2. Use karibase-starter.html as a template\n' +
'\n' +
'3. Link karibase.js for JavaScript components:\n' +
'   \x3Cscript src="karibase.js"\x3E\x3C/script\x3E\n' +
'\n' +
'FEATURES:\n' +
'- Admin Dashboard Components\n' +
'- Floating Bot System\n' +
'- Modern CSS with Cascade Layers\n' +
'- Container Queries Support\n' +
'- Dark Mode Ready\n' +
'- 12+ Theme Presets\n' +
'\n' +
'DOCUMENTATION:\n' +
'https://karibase.dev/docs\n' +
'\n' +
'GitHub: https://github.com/gabrielcupello-ui/karibase\n' +
'\n' +
'LICENSE: MIT'

      const blob = new Blob([packageContent], { type: 'text/plain' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'karibase-package.txt'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
  }
}
</script>

<script setup>
import { usePageInfo } from '../composables/usePageInfo'

const baseUrl = import.meta.env.BASE_URL

usePageInfo({
  title: 'Karibase CSS Framework - Admin Dashboards & Floating Bots',
  description: 'Modern CSS framework created by a UCLA graduate. Specialized in admin dashboards, floating bots, and modern UI components with 12+ theme presets.',
  keywords: 'Karibase, CSS framework, admin dashboard, floating bot, UCLA, modern UI, responsive design, theme presets',
  author: 'Karibase - UCLA Graduate'
})
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background-color: #ffffff;
  color: #1a1a1a;
}

.landing-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e5e5;
}

.landing-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.landing-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.landing-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.landing-logo-image {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.landing-logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
}

.landing-nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.landing-nav-link {
  font-size: 14px;
  font-weight: 500;
  color: #4a4a4a;
  text-decoration: none;
  transition: color 0.2s ease;
}

.landing-nav-link:hover {
  color: #1a1a1a;
}

.landing-nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.landing-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: #4a4a4a;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
}

.landing-icon-btn:hover {
  background-color: #f5f5f5;
  color: #1a1a1a;
}

.landing-main {
  padding: 80px  0;
}

.landing-hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
}

.landing-hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  color: #1a1a1a;
  margin: 0 0 24px;
  letter-spacing: -0.02em;
}

.landing-hero-title span {
  color: #ea2845;
}

.landing-hero-subtitle {
  font-size: 20px;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0 0 40px;
}

.landing-hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.landing-btn {
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  border: none;
}

.landing-btn-primary {
  background-color: #ea2845;
  color: white;
}

.landing-btn-primary:hover {
  background-color: #d11e38;
  transform: translateY(-2px);
}

.landing-btn-secondary {
  background-color: #f5f5f5;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 8px;
}

.landing-btn-secondary:hover {
  background-color: #e5e5e5;
  transform: translateY(-2px);
}

.landing-download-section {
  margin-top: 120px;
  padding: 80px 0;
  background-color: #f9fafb;
  border-radius: 16px;
}

.landing-section-title {
  font-size: 36px;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin: 0 0 16px;
}

.landing-section-subtitle {
  font-size: 18px;
  color: #4a4a4a;
  text-align: center;
  margin: 0 0 48px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.landing-download-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.landing-download-card {
  background-color: white;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.landing-download-card:hover {
  border-color: #ea2845;
  box-shadow: 0 8px 24px rgba(234, 40, 69, 0.15);
  transform: translateY(-4px);
}

.landing-download-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #ea2845, #ea2868);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 24px;
  color: white;
}

.landing-download-card-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 12px;
}

.landing-download-card-description {
  font-size: 14px;
  color: #4a4a4a;
  line-height: 1.6;
  margin: 0 0 24px;
  min-height: 48px;
}

.landing-download-btn {
  padding: 12px 24px;
  background-color: #ea2845;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.landing-download-btn:hover {
  background-color: #d11e38;
  transform: translateY(-2px);
}

.landing-download-size {
  font-size: 12px;
  color: #9ca3af;
  margin: 0;
}

.landing-code-section {
  margin-top: 80px;
}

.landing-code-block {
  background-color: #1e1e1e;
  border-radius: 12px;
  padding: 32px;
  overflow-x: auto;
}

.landing-code-block pre {
  margin: 0;
  padding: 0;
}

.landing-code-block code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #e5e7eb;
}

.code-tag {
  color: #569cd6;
}

.code-attr {
  color: #9cdcfe;
}

.code-string {
  color: #ce9178;
}

@media (max-width: 768px) {
  .landing-nav-links {
    display: none;
  }

  .landing-hero-title {
    font-size: 40px;
  }

  .landing-hero-subtitle {
    font-size: 18px;
  }

  .landing-hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .landing-btn {
    width: 100%;
  }
}
</style>
