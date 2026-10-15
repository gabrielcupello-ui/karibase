<template>
  <DocsArticle
    title="Parcel"
    lead="Using Karibase with Parcel bundler"
    :prev="{ name: 'Webpack', path: '/webpack' }"
    :next="{ name: 'Vite', path: '/vite' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="installation">Installation</h2>
      <p class="docs-text">Install Karibase and Parcel:</p>
      <div class="docs-code-block">
        <pre><code>npm install karibase
npm install --save-dev parcel</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="usage">Usage</h2>
      <p class="docs-text">Import Karibase in your entry file:</p>
      <div class="docs-code-block">
        <pre><code>// index.js
import 'karibase/css/karibase.css'</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="running">Running</h2>
      <p class="docs-text">Start the development server:</p>
      <div class="docs-code-block">
        <pre><code>npx parcel src/index.html</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="building">Building</h2>
      <p class="docs-text">Build for production:</p>
      <div class="docs-code-block">
        <pre><code>npx parcel build src/index.html</code></pre>
      </div>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'Parcel'
}
</script>