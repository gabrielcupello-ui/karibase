<template>
  <DocsArticle
    title="CSS Grid"
    lead="CSS Grid layout in Karibase"
    :breadcrumb="[{ name: 'Layout', path: '/layout' }, { name: 'CSS Grid' }]"
    :prev="{ name: 'Z-index', path: '/layout/z-index' }"
    :next="{ name: 'Content', path: '/content/reboot' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Karibase includes utilities for CSS Grid layout. CSS Grid provides a two-dimensional layout system 
        that's more powerful than flexbox for complex layouts.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-grid">Basic Grid</h2>
      <p class="docs-text">Create a basic CSS grid:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-css-grid"&gt;
  &lt;div class="kb-css-grid-item"&gt;Item 1&lt;/div&gt;
  &lt;div class="kb-css-grid-item"&gt;Item 2&lt;/div&gt;
  &lt;div class="kb-css-grid-item"&gt;Item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="grid-columns">Grid Columns</h2>
      <p class="docs-text">Control grid columns:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-css-grid kb-css-grid-cols-3"&gt;
  &lt;!-- 3 columns --&gt;
&lt;/div&gt;

&lt;div class="kb-css-grid kb-css-grid-cols-4"&gt;
  &lt;!-- 4 columns --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="grid-rows">Grid Rows</h2>
      <p class="docs-text">Control grid rows:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-css-grid kb-css-grid-rows-2"&gt;
  &lt;!-- 2 rows --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="grid-gap">Grid Gap</h2>
      <p class="docs-text">Control grid gap:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-css-grid kb-css-grid-gap-4"&gt;
  &lt;!-- Gap of 1rem --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'LayoutCSSGrid'
}
</script>