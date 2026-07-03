<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Vite</span>
    </div>

    <h1 class="docs-heading">Vite</h1>
    <p class="docs-lead">Using Karibase with Vite</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="installation">Installation</h2>
      <p class="docs-text">Install Karibase in your Vite project:</p>
      <div class="docs-code-block">
        <pre><code>npm install karibase</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="importing">Importing</h2>
      <p class="docs-text">Import Karibase in your main entry file:</p>
      <div class="docs-code-block">
        <pre><code>// main.js
import 'karibase/css/karibase.css'</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="vue-setup">Vue Setup</h2>
      <p class="docs-text">For Vue projects with Vite:</p>
      <div class="docs-code-block">
        <pre><code>// main.js
import { createApp } from 'vue'
import App from './App.vue'
import 'karibase/css/karibase.css'

const app = createApp(App)
app.mount('#app')</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="react-setup">React Setup</h2>
      <p class="docs-text">For React projects with Vite:</p>
      <div class="docs-code-block">
        <pre><code>// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'karibase/css/karibase.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;
)</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="customization">Customization</h2>
      <p class="docs-text">Customize Karibase with CSS variables:</p>
      <div class="docs-code-block">
        <pre><code>:root {
  --kb-primary: #ea2845;
  --kb-secondary: #6366f1;
  --kb-radius: 12px;
}</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/parcel" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Parcel</span>
      </router-link>
      <router-link to="/accessibility" class="docs-next">
        <span>Accessibility</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vite'
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
  font-size: 48px;
  font-weight: 800;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}

.docs-heading-2 {
  font-size: 32px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 16px;
  color: var(--docs-text-primary);
  letter-spacing: -0.01em;
}

.docs-lead {
  font-size: 20px;
  color: var(--docs-text-secondary);
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 65ch;
}

.docs-text {
  font-size: 16px;
  color: var(--docs-text-secondary);
  line-height: 1.75;
  margin: 0 0 16px;
  max-width: 65ch;
}

.docs-section {
  margin-bottom: 48px;
}

.docs-code-block {
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
  margin: 16px 0 24px;
  overflow-x: auto;
}

.docs-code-block pre {
  margin: 0;
  padding: 0;
}

.docs-code-block code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
  font-size: 14px;
  color: #e5e7eb;
  line-height: 1.6;
}

.docs-next-prev {
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  padding-top: 32px;
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
  font-weight: 500;
  transition: var(--docs-transition);
  font-size: 14px;
}

.docs-prev:hover,
.docs-next:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}
</style>
