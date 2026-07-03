<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Download</span>
    </div>

    <h1 class="docs-heading">Download</h1>
    <p class="docs-lead">Download Karibase CSS Framework</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="cdn-links">CSS/JS Files Only</h2>
      <p class="docs-text">Karibase works with plain CSS and JavaScript files. No npm, no build tools, no framework dependencies.</p>
      <CodeViewer title="HTML">
&lt;!-- CSS --&gt;
&lt;link rel="stylesheet" href="karibase.css"&gt;

&lt;!-- JavaScript --&gt;
&lt;script src="karibase.js"&gt;&lt;/script&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="download-files">Download Framework Files</h2>
      <p class="docs-text">Download the complete framework files from the Home page:</p>
      <ul class="docs-list">
        <li><strong>karibase.css</strong> - Complete CSS framework with all components</li>
        <li><strong>karibase.js</strong> - JavaScript components (modals, inactivity detector, auto SEO)</li>
      </ul>
      <p class="docs-text">Simply link these files in your HTML and start using Karibase immediately.</p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="quick-start">Quick Start</h2>
      <p class="docs-text">Create a basic dashboard in minutes:</p>
      <CodeViewer title="HTML">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;My Dashboard&lt;/title&gt;
    &lt;link rel="stylesheet" href="karibase.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="kb-dashboard"&gt;
        &lt;header class="kb-header"&gt;
            &lt;div class="kb-logo"&gt;My App&lt;/div&gt;
        &lt;/header&gt;
        &lt;main class="kb-content"&gt;
            &lt;h1 class="kb-heading"&gt;Dashboard&lt;/h1&gt;
            &lt;div class="kb-grid kb-grid-3"&gt;
                &lt;div class="kb-card"&gt;
                    &lt;h3 class="kb-card-title"&gt;Total Users&lt;/h3&gt;
                    &lt;p class="kb-card-text"&gt;1,234&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/main&gt;
    &lt;/div&gt;
    &lt;script src="karibase.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
      </CodeViewer>
    </div>

    <div class="docs-next-prev">
      <router-link to="/getting-started" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Getting Started</span>
      </router-link>
      <router-link to="/contents" class="docs-next">
        <span>Contents</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import CodeViewer from '../components/CodeViewer.vue'

export default {
  name: 'Download',
  components: {
    CodeViewer
  }
}
</script>

<script setup>
import { usePageInfo } from '../composables/usePageInfo'

usePageInfo({
  title: 'Download Karibase CSS Framework',
  description: 'Download Karibase CSS Framework via CDN, npm, yarn, or pnpm. Get started quickly with our installation guide.',
  keywords: 'Karibase, download, CDN, npm, yarn, pnpm, installation, CSS framework',
  author: 'Karibase - UCLA Graduate'
})
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

.docs-section {
  margin-bottom: 48px;
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
