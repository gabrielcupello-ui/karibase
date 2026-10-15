<template>
  <DocsArticle
    title="Download"
    lead="Download Karibase CSS Framework"
    :prev="{ name: 'Getting Started', path: '/getting-started' }"
    :next="{ name: 'Contents', path: '/contents' }"
  >

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

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
import CodeViewer from '../components/CodeViewer.vue'

export default {
  name: 'Download',
  components: { CodeViewer, DocsArticle }
}
</script>