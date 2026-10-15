<template>
  <DocsArticle
    title="Reboot"
    lead="CSS reset and normalization in Karibase"
    :breadcrumb="[{ name: 'Content', path: '/content' }, { name: 'Reboot' }]"
    :prev="{ name: 'CSS Grid', path: '/layout/css-grid' }"
    :next="{ name: 'Typography', path: '/content/typography' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Karibase includes a reboot that normalizes CSS across browsers. It provides a consistent starting point 
        for building your application by resetting default browser styles.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="what-it-does">What It Does</h2>
      <p class="docs-text">The reboot handles:</p>
      <ul class="docs-list">
        <li>Box-sizing reset to border-box</li>
        <li>Removal of default margins</li>
        <li>Font family normalization</li>
        <li>Line-height normalization</li>
        <li>Heading font size normalization</li>
        <li>Link decoration removal</li>
        <li>List style removal</li>
        <li>Form element normalization</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="box-sizing">Box-sizing</h2>
      <p class="docs-text">All elements use border-box:</p>
      <div class="docs-code-block">
        <pre><code>*, *::before, *::after {
  box-sizing: border-box;
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="native-font-stack">Native Font Stack</h2>
      <p class="docs-text">Karibase uses a system font stack:</p>
      <div class="docs-code-block">
        <pre><code>font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="headings">Headings</h2>
      <p class="docs-text">All headings are reset to remove default margins:</p>
      <div class="docs-code-block">
        <pre><code>h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}</code></pre>
      </div>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'ContentReboot'
}
</script>