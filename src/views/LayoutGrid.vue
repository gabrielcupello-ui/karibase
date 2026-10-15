<template>
  <DocsArticle
    title="Grid"
    lead="Grid system in Karibase"
    :breadcrumb="[{ name: 'Layout', path: '/layout' }, { name: 'Grid' }]"
    :prev="{ name: 'Containers', path: '/layout/containers' }"
    :next="{ name: 'Columns', path: '/layout/columns' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Karibase uses a flexible 12-column grid system. The grid is responsive and works with all breakpoints.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-grid">Basic Grid</h2>
      <p class="docs-text">Create a basic grid layout:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-grid"&gt;
  &lt;div class="kb-col-4"&gt;Column 1&lt;/div&gt;
  &lt;div class="kb-col-4"&gt;Column 2&lt;/div&gt;
  &lt;div class="kb-col-4"&gt;Column 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="responsive-grid">Responsive Grid</h2>
      <p class="docs-text">Create responsive grid layouts:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-grid"&gt;
  &lt;div class="kb-col-12 kb-col-md-6 kb-col-lg-4"&gt;
    Column 1
  &lt;/div&gt;
  &lt;div class="kb-col-12 kb-col-md-6 kb-col-lg-4"&gt;
    Column 2
  &lt;/div&gt;
  &lt;div class="kb-col-12 kb-col-md-12 kb-col-lg-4"&gt;
    Column 3
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="grid-options">Grid Options</h2>
      <p class="docs-text">Available grid column classes:</p>
      <div class="docs-breakpoint-table">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>kb-col-1</code> to <code>kb-col-12</code></td>
              <td>Column width (1-12)</td>
            </tr>
            <tr>
              <td><code>kb-col-auto</code></td>
              <td>Auto width</td>
            </tr>
            <tr>
              <td><code>kb-col-{breakpoint}-1</code> to <code>kb-col-{breakpoint}-12</code></td>
              <td>Responsive column width</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'LayoutGrid'
}
</script>