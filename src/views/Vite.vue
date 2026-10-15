<template>
  <DocsArticle
    title="Vite"
    lead="Using Karibase with Vite"
    :prev="{ name: 'Parcel', path: '/parcel' }"
    :next="{ name: 'Accessibility', path: '/accessibility' }"
  >

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

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'Vite'
}
</script>