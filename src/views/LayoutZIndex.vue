<template>
  <DocsArticle
    title="Z-index"
    lead="Z-index utilities in Karibase"
    :breadcrumb="[{ name: 'Layout', path: '/layout' }, { name: 'Z-index' }]"
    :prev="{ name: 'Utilities', path: '/layout/utilities' }"
    :next="{ name: 'CSS Grid', path: '/layout/css-grid' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Karibase provides z-index utilities to control the stacking order of elements. These utilities follow 
        a consistent z-index scale.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="z-index-values">Z-index Values</h2>
      <p class="docs-text">Available z-index utilities:</p>
      <div class="docs-breakpoint-table">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Value</th>
              <th>Usage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>kb-z-0</code></td>
              <td>0</td>
              <td>Default</td>
            </tr>
            <tr>
              <td><code>kb-z-10</code></td>
              <td>10</td>
              <td>Dropdowns</td>
            </tr>
            <tr>
              <td><code>kb-z-20</code></td>
              <td>20</td>
              <td>Sticky headers</td>
            </tr>
            <tr>
              <td><code>kb-z-30</code></td>
              <td>30</td>
              <td>Fixed elements</td>
            </tr>
            <tr>
              <td><code>kb-z-40</code></td>
              <td>40</td>
              <td>Modals</td>
            </tr>
            <tr>
              <td><code>kb-z-50</code></td>
              <td>50</td>
              <td>Popovers</td>
            </tr>
            <tr>
              <td><code>kb-z-auto</code></td>
              <td>auto</td>
              <td>Auto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="usage">Usage</h2>
      <p class="docs-text">Use z-index utilities:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-z-40"&gt;
  &lt;!-- Modal with z-index 40 --&gt;
&lt;/div&gt;

&lt;div class="kb-z-50"&gt;
  &lt;!-- Popover with z-index 50 --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'LayoutZIndex'
}
</script>