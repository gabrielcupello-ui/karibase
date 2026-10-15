<template>
  <DocsArticle
    title="Containers"
    lead="Container components in Karibase"
    :breadcrumb="[{ name: 'Layout', path: '/layout' }, { name: 'Containers' }]"
    :prev="{ name: 'Breakpoints', path: '/layout/breakpoints' }"
    :next="{ name: 'Grid', path: '/layout/grid' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Containers are the most basic layout element in Karibase. They center content with a maximum width 
        and add horizontal padding.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="default-container">Default Container</h2>
      <p class="docs-text">Use the default container class:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-container"&gt;
  &lt;!-- Content --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="responsive-containers">Responsive Containers</h2>
      <p class="docs-text">Use responsive container classes:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-container kb-container-sm"&gt;
  &lt;!-- Small container --&gt;
&lt;/div&gt;

&lt;div class="kb-container kb-container-md"&gt;
  &lt;!-- Medium container --&gt;
&lt;/div&gt;

&lt;div class="kb-container kb-container-lg"&gt;
  &lt;!-- Large container --&gt;
&lt;/div&gt;

&lt;div class="kb-container kb-container-xl"&gt;
  &lt;!-- Extra large container --&gt;
&lt;/div&gt;

&lt;div class="kb-container kb-container-fluid"&gt;
  &lt;!-- Full width container --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="container-widths">Container Widths</h2>
      <p class="docs-text">Container maximum widths:</p>
      <div class="docs-breakpoint-table">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Max Width</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>kb-container</code></td>
              <td>100%</td>
            </tr>
            <tr>
              <td><code>kb-container-sm</code></td>
              <td>540px</td>
            </tr>
            <tr>
              <td><code>kb-container-md</code></td>
              <td>720px</td>
            </tr>
            <tr>
              <td><code>kb-container-lg</code></td>
              <td>960px</td>
            </tr>
            <tr>
              <td><code>kb-container-xl</code></td>
              <td>1140px</td>
            </tr>
            <tr>
              <td><code>kb-container-fluid</code></td>
              <td>100%</td>
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
  name: 'LayoutContainers'
}
</script>