<template>
  <DocsArticle
    title="Tables"
    lead="Table styles in Karibase"
    :breadcrumb="[{ name: 'Content', path: '/content' }, { name: 'Tables' }]"
    :prev="{ name: 'Images', path: '/content/images' }"
    :next="{ name: 'Figures', path: '/content/figures' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-table">Basic Table</h2>
      <p class="docs-text">Use the basic table class:</p>
      <div class="docs-code-block">
        <pre><code>&lt;table class="kb-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Header 1&lt;/th&gt;
      &lt;th&gt;Header 2&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Cell 1&lt;/td&gt;
      &lt;td&gt;Cell 2&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="striped-table">Striped Table</h2>
      <p class="docs-text">Add striped rows:</p>
      <div class="docs-code-block">
        <pre><code>&lt;table class="kb-table kb-table-striped"&gt;
  &lt;!-- Table content --&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="bordered-table">Bordered Table</h2>
      <p class="docs-text">Add borders to the table:</p>
      <div class="docs-code-block">
        <pre><code>&lt;table class="kb-table kb-table-bordered"&gt;
  &lt;!-- Table content --&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="hover-table">Hover Table</h2>
      <p class="docs-text">Add hover effect to rows:</p>
      <div class="docs-code-block">
        <pre><code>&lt;table class="kb-table kb-table-hover"&gt;
  &lt;!-- Table content --&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="responsive-table">Responsive Table</h2>
      <p class="docs-text">Make tables responsive:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-table-responsive"&gt;
  &lt;table class="kb-table"&gt;
    &lt;!-- Table content --&gt;
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'ContentTables'
}
</script>