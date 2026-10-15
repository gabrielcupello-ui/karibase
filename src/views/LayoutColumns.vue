<template>
  <DocsArticle
    title="Columns"
    lead="Column utilities in Karibase"
    :breadcrumb="[{ name: 'Layout', path: '/layout' }, { name: 'Columns' }]"
    :prev="{ name: 'Grid', path: '/layout/grid' }"
    :next="{ name: 'Gutters', path: '/layout/gutters' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-columns">Basic Columns</h2>
      <p class="docs-text">Create basic column layouts:</p>
      <div class="docs-example">
        <div class="kb-columns">
          <div class="kb-column">Column 1</div>
          <div class="kb-column">Column 2</div>
          <div class="kb-column">Column 3</div>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-columns"&gt;
  &lt;div class="kb-column"&gt;Column 1&lt;/div&gt;
  &lt;div class="kb-column"&gt;Column 2&lt;/div&gt;
  &lt;div class="kb-column"&gt;Column 3&lt;/div&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="column-sizes">Column Sizes</h2>
      <p class="docs-text">Control column sizes:</p>
      <div class="docs-example">
        <div class="kb-columns">
          <div class="kb-column kb-column-25">25%</div>
          <div class="kb-column kb-column-50">50%</div>
          <div class="kb-column kb-column-25">25%</div>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-columns"&gt;
  &lt;div class="kb-column kb-column-25"&gt;25%&lt;/div&gt;
  &lt;div class="kb-column kb-column-50"&gt;50%&lt;/div&gt;
  &lt;div class="kb-column kb-column-25"&gt;25%&lt;/div&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="responsive-columns">Responsive Columns</h2>
      <p class="docs-text">Responsive column layouts:</p>
      <div class="docs-example">
        <div class="kb-columns">
          <div class="kb-column kb-column-100 kb-column-md-50 kb-column-lg-33">
            Responsive column
          </div>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-columns"&gt;
  &lt;div class="kb-column kb-column-100 kb-column-md-50 kb-column-lg-33"&gt;
    Responsive column
  &lt;/div&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
import CodeViewer from '../components/CodeViewer.vue'

export default {
  name: 'LayoutColumns',
  components: { CodeViewer, DocsArticle }
}
</script>