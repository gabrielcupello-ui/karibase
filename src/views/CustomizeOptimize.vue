<template>
  <DocsArticle
    title="Optimize"
    lead="Optimize your Karibase build for production"
    :breadcrumb="[{ name: 'Customize', path: '/customize' }, { name: 'Optimize' }]"
    :prev="{ name: 'CSS variables', path: '/customize/css-variables' }"
    :next="{ name: 'Layout', path: '/layout/breakpoints' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="tree-shaking">Tree Shaking</h2>
      <p class="docs-text">Include only the components you use:</p>
      <div class="docs-code-block">
        <pre><code>// Import only what you need
@import 'karibase/scss/variables';
@import 'karibase/scss/reboot';
@import 'karibase/scss/base';
@import 'karibase/scss/components/buttons';
@import 'karibase/scss/components/cards';</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="minification">Minification</h2>
      <p class="docs-text">Minify CSS for production:</p>
      <div class="docs-code-block">
        <pre><code>// vite.config.js
export default defineConfig({
  build: {
    cssMinify: true,
    minify: 'terser'
  }
})</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="purge-css">Purge Unused CSS</h2>
      <p class="docs-text">Remove unused CSS with PurgeCSS:</p>
      <div class="docs-code-block">
        <pre><code>npm install --save-dev @fullhuman/postcss-purgecss postcss</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="critical-css">Critical CSS</h2>
      <p class="docs-text">Extract critical CSS for above-the-fold content:</p>
      <div class="docs-code-block">
        <pre><code>npm install --save-dev critical</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="bundle-size">Bundle Size</h2>
      <p class="docs-text">Optimize bundle size:</p>
      <ul class="docs-list">
        <li>Use minified CSS (~100KB)</li>
        <li>Enable gzip compression (~20KB)</li>
        <li>Use CDN for static assets</li>
        <li>Lazy load components when possible</li>
      </ul>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'CustomizeOptimize'
}
</script>