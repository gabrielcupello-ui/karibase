<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">CSS Extractor</span>
    </div>

    <h1 class="docs-heading">CSS Extractor</h1>
    <p class="docs-lead">Extract CSS styles from any website</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2">Extract Styles</h2>
      <p class="docs-text">Enter a URL to extract CSS styles from that website:</p>
      
      <div class="extractor-form">
        <input 
          v-model="url" 
          type="url" 
          placeholder="https://example.com" 
          class="extractor-input"
          @keyup.enter="extractCSS"
        />
        <button @click="extractCSS" class="extractor-button" :disabled="loading">
          <span v-if="loading">Extracting...</span>
          <span v-else>Extract CSS</span>
        </button>
      </div>

      <div v-if="error" class="extractor-error">
        {{ error }}
      </div>
    </div>

    <div v-if="extractedCSS" class="docs-section">
      <h2 class="docs-heading docs-heading-2">Extracted CSS</h2>
      <div class="extractor-actions">
        <button @click="copyCSS" class="extractor-action-button">
          <i class="fas fa-copy"></i> Copy CSS
        </button>
        <button @click="downloadCSS" class="extractor-action-button">
          <i class="fas fa-download"></i> Download CSS
        </button>
        <button @click="clearCSS" class="extractor-action-button extractor-action-button-danger">
          <i class="fas fa-trash"></i> Clear
        </button>
      </div>
      <CodeViewer title="Extracted CSS">{{ extractedCSS }}</CodeViewer>
    </div>

    <div v-if="stats" class="docs-section">
      <h2 class="docs-heading docs-heading-2">Statistics</h2>
      <div class="extractor-stats">
        <div class="stat-item">
          <span class="stat-label">Total Rules:</span>
          <span class="stat-value">{{ stats.rules }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Selectors:</span>
          <span class="stat-value">{{ stats.selectors }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Properties:</span>
          <span class="stat-value">{{ stats.properties }}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">File Size:</span>
          <span class="stat-value">{{ formatBytes(stats.size) }}</span>
        </div>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2">How it works</h2>
      <p class="docs-text">The CSS Extractor tool:</p>
      <ul class="docs-list">
        <li>Fetches the HTML from the specified URL</li>
        <li>Parses all <code>&lt;style&gt;</code> tags and external CSS files</li>
        <li>Extracts and combines all CSS rules</li>
        <li>Provides statistics about the extracted styles</li>
        <li>Allows you to copy or download the extracted CSS</li>
      </ul>
      <p class="docs-text docs-warning">
        <strong>Note:</strong> Due to CORS restrictions, this tool works best with websites that allow cross-origin requests. For production use, consider using a proxy server.
      </p>
    </div>

    <div class="docs-next-prev">
      <router-link to="/tools" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Tools</span>
      </router-link>
      <router-link to="/customizer" class="docs-next">
        <span>Customizer</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import CodeViewer from '../components/CodeViewer.vue'

export default {
  name: 'CSSExtractor',
  components: {
    CodeViewer
  },
  data() {
    return {
      url: '',
      extractedCSS: '',
      loading: false,
      error: null,
      stats: null
    }
  },
  methods: {
    async extractCSS() {
      if (!this.url) {
        this.error = 'Please enter a URL'
        return
      }

      this.loading = true
      this.error = null
      this.extractedCSS = ''
      this.stats = null

      try {
        // For demo purposes, we'll use a CORS proxy
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(this.url)}`
        const response = await fetch(proxyUrl)
        const data = await response.json()

        if (!data.contents) {
          throw new Error('Failed to fetch website content')
        }

        // Parse HTML and extract CSS
        const parser = new DOMParser()
        const doc = parser.parseFromString(data.contents, 'text/html')
        
        let css = ''
        let ruleCount = 0
        let selectorCount = 0
        let propertyCount = 0

        // Extract inline styles
        const styleTags = doc.querySelectorAll('style')
        styleTags.forEach(tag => {
          css += `/* Inline Style */\n${tag.textContent}\n\n`
          const rules = this.parseCSSRules(tag.textContent)
          ruleCount += rules.rules
          selectorCount += rules.selectors
          propertyCount += rules.properties
        })

        // Extract external stylesheets
        const linkTags = doc.querySelectorAll('link[rel="stylesheet"]')
        for (const link of linkTags) {
          const href = link.getAttribute('href')
          if (href) {
            const fullUrl = new URL(href, this.url).href
            try {
              const cssResponse = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(fullUrl)}`)
              const cssData = await cssResponse.json()
              if (cssData.contents) {
                css += `/* External: ${href} */\n${cssData.contents}\n\n`
                const rules = this.parseCSSRules(cssData.contents)
                ruleCount += rules.rules
                selectorCount += rules.selectors
                propertyCount += rules.properties
              }
            } catch (e) {
              css += `/* Could not load: ${href} */\n\n`
            }
          }
        }

        this.extractedCSS = css
        this.stats = {
          rules: ruleCount,
          selectors: selectorCount,
          properties: propertyCount,
          size: css.length
        }

      } catch (err) {
        this.error = `Error extracting CSS: ${err.message}`
      } finally {
        this.loading = false
      }
    },

    parseCSSRules(css) {
      let rules = 0
      let selectors = 0
      let properties = 0

      // Simple CSS parsing
      const ruleRegex = /[^{}]+\{[^{}]*\}/g
      const matches = css.match(ruleRegex)
      
      if (matches) {
        rules = matches.length
        matches.forEach(rule => {
          const parts = rule.split('{')
          if (parts.length > 0) {
            selectors += parts[0].split(',').length
          }
          const props = rule.match(/[^:]+:[^;]+;/g)
          if (props) {
            properties += props.length
          }
        })
      }

      return { rules, selectors, properties }
    },

    copyCSS() {
      navigator.clipboard.writeText(this.extractedCSS)
      alert('CSS copied to clipboard!')
    },

    downloadCSS() {
      const blob = new Blob([this.extractedCSS], { type: 'text/css' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'extracted-styles.css'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    },

    clearCSS() {
      this.extractedCSS = ''
      this.stats = null
      this.url = ''
    },

    formatBytes(bytes) {
      if (bytes === 0) return '0 Bytes'
      const k = 1024
      const sizes = ['Bytes', 'KB', 'MB', 'GB']
      const i = Math.floor(Math.log(bytes) / Math.log(k))
      return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
    }
  }
}
</script>

<style scoped>
.docs-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 14px;
}

.docs-breadcrumb-link {
  color: var(--docs-text-secondary);
  text-decoration: none;
  transition: var(--docs-transition);
}

.docs-breadcrumb-link:hover {
  color: var(--docs-primary-color);
}

.docs-breadcrumb-separator {
  color: var(--docs-text-muted);
}

.docs-breadcrumb-current {
  color: var(--docs-text-primary);
  font-weight: 600;
}

.docs-heading {
  font-size: 40px;
  font-weight: 800;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
}

.docs-heading-2 {
  font-size: 28px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 16px;
}

.docs-lead {
  font-size: 20px;
  color: var(--docs-text-secondary);
  line-height: 1.6;
  margin: 0 0 24px;
}

.docs-text {
  font-size: 16px;
  color: var(--docs-text-secondary);
  line-height: 1.8;
  margin: 0 0 16px;
}

.docs-warning {
  background-color: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}

.docs-list {
  margin: 16px 0;
  padding-left: 24px;
}

.docs-list li {
  margin-bottom: 8px;
  color: var(--docs-text-secondary);
}

.docs-section {
  margin-bottom: 48px;
}

.extractor-form {
  display: flex;
  gap: 12px;
  margin: 24px 0;
}

.extractor-input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid var(--docs-border-color);
  border-radius: 8px;
  font-size: 16px;
  transition: var(--docs-transition);
}

.extractor-input:focus {
  outline: none;
  border-color: var(--docs-primary-color);
}

.extractor-button {
  padding: 12px 24px;
  background-color: var(--docs-primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--docs-transition);
}

.extractor-button:hover:not(:disabled) {
  background-color: var(--docs-primary-color-dark);
}

.extractor-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.extractor-error {
  background-color: #f8d7da;
  border-left: 4px solid #dc3545;
  color: #721c24;
  padding: 12px 16px;
  margin: 16px 0;
  border-radius: 4px;
}

.extractor-actions {
  display: flex;
  gap: 12px;
  margin: 16px 0;
}

.extractor-action-button {
  padding: 8px 16px;
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 6px;
  color: var(--docs-text-primary);
  cursor: pointer;
  transition: var(--docs-transition);
  font-size: 14px;
}

.extractor-action-button:hover {
  background-color: var(--docs-border-color);
}

.extractor-action-button-danger {
  background-color: #f8d7da;
  border-color: #dc3545;
  color: #721c24;
}

.extractor-action-button-danger:hover {
  background-color: #dc3545;
  color: white;
}

.extractor-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.stat-item {
  background-color: var(--docs-bg-secondary);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--docs-border-color);
}

.stat-label {
  display: block;
  font-size: 14px;
  color: var(--docs-text-secondary);
  margin-bottom: 8px;
}

.stat-value {
  display: block;
  font-size: 24px;
  font-weight: 700;
  color: var(--docs-primary-color);
}

.docs-next-prev {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--docs-border-color);
}

.docs-prev,
.docs-next {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  color: var(--docs-text-primary);
  text-decoration: none;
  font-weight: 600;
  transition: var(--docs-transition);
}

.docs-prev:hover,
.docs-next:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}
</style>
