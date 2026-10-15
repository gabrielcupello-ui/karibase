<template>
  <DocsArticle
    title="Gutters"
    lead="Gutter utilities in Karibase"
    :breadcrumb="[{ name: 'Layout', path: '/layout' }, { name: 'Gutters' }]"
    :prev="{ name: 'Columns', path: '/layout/columns' }"
    :next="{ name: 'Utilities', path: '/layout/utilities' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Gutters are the spacing between columns in the grid system. Karibase provides utilities to control 
        gutter spacing at different breakpoints.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="default-gutters">Default Gutters</h2>
      <p class="docs-text">The default gutter size is 1.5rem (24px):</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-grid kb-gutter"&gt;
  &lt;div class="kb-col-6"&gt;Column 1&lt;/div&gt;
  &lt;div class="kb-col-6"&gt;Column 2&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="gutter-sizes">Gutter Sizes</h2>
      <p class="docs-text">Available gutter sizes:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-grid kb-gutter-sm"&gt;
  &lt;!-- Small gutters (0.5rem) --&gt;
&lt;/div&gt;

&lt;div class="kb-grid kb-gutter-md"&gt;
  &lt;!-- Medium gutters (1rem) --&gt;
&lt;/div&gt;

&lt;div class="kb-grid kb-gutter-lg"&gt;
  &lt;!-- Large gutters (1.5rem) --&gt;
&lt;/div&gt;

&lt;div class="kb-grid kb-gutter-xl"&gt;
  &lt;!-- Extra large gutters (2rem) --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="no-gutters">No Gutters</h2>
      <p class="docs-text">Remove gutters completely:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-grid kb-gutter-0"&gt;
  &lt;!-- No gutters --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'LayoutGutters'
}
</script>