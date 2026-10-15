<template>
  <DocsArticle
    title="Installation"
    lead="Get started with Karibase in your project"
    :breadcrumb="[{ name: 'Getting Started', path: '/introduction' }, { name: 'Installation' }]"
    :prev="{ name: 'Introduction', path: '/introduction' }"
    :next="{ name: 'Quick Start', path: '/quick-start' }"
  >





    <h2 class="docs-heading docs-heading-2" id="npm">NPM</h2>
    <p class="docs-text">Install Karibase via npm:</p>

    <div class="docs-code-block">
      <pre><code>npm install karibase</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="yarn">Yarn</h2>
    <p class="docs-text">Install Karibase via yarn:</p>

    <div class="docs-code-block">
      <pre><code>yarn add karibase</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="cdn">CDN</h2>
    <p class="docs-text">You can also use Karibase via CDN:</p>

    <div class="docs-code-block">
      <pre><code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/karibase/css/karibase.css"&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="import-css">Import CSS</h2>
    <p class="docs-text">After installation, import the CSS file in your main application file:</p>

    <div class="docs-code-block">
      <pre><code>// In your main.js or index.js
import 'karibase/css/karibase.css'</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="import-individual">Import Individual Components</h2>
    <p class="docs-text">For better performance, you can import only the components you need:</p>

    <div class="docs-code-block">
      <pre><code>// Import individual components
import 'karibase/css/karibase-reset.css'
import 'karibase/css/karibase-variables.css'
import 'karibase/css/karibase-components.css'</code></pre>
    </div>

    <div class="docs-callout docs-callout-info">
      <div class="docs-callout-icon">
        <i class="fas fa-info-circle"></i>
      </div>
      <div class="docs-callout-content">
        <h4 class="docs-callout-title">Pro Tip</h4>
        <p class="docs-callout-text">For production builds, consider using a bundler with CSS optimization to remove unused styles.</p>
      </div>
    </div>

    <h2 class="docs-heading docs-heading-2" id="download">Download</h2>
    <p class="docs-text">Download the latest release from GitHub:</p>

    <div class="docs-code-block">
      <pre><code>git clone https://github.com/yourusername/karibase.git</code></pre>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'Installation'
}
</script>