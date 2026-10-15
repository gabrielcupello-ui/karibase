<template>
  <DocsArticle
    title="Utilities"
    lead="Layout utilities in Karibase"
    :breadcrumb="[{ name: 'Layout', path: '/layout' }, { name: 'Utilities' }]"
    :prev="{ name: 'Gutters', path: '/layout/gutters' }"
    :next="{ name: 'Z-index', path: '/layout/z-index' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Layout utilities provide quick and flexible ways to control the layout of your elements without 
        writing custom CSS.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="display">Display</h2>
      <p class="docs-text">Control display properties:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-d-none"&gt;Hidden&lt;/div&gt;
&lt;div class="kb-d-inline"&gt;Inline&lt;/div&gt;
&lt;div class="kb-d-inline-block"&gt;Inline block&lt;/div&gt;
&lt;div class="kb-d-block"&gt;Block&lt;/div&gt;
&lt;div class="kb-d-flex"&gt;Flex&lt;/div&gt;
&lt;div class="kb-d-grid"&gt;Grid&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="flexbox">Flexbox</h2>
      <p class="docs-text">Flexbox utilities:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-d-flex kb-flex-row"&gt;
  &lt;div class="kb-flex-grow-1"&gt;Grow&lt;/div&gt;
  &lt;div class="kb-flex-shrink-0"&gt;Shrink&lt;/div&gt;
&lt;/div&gt;

&lt;div class="kb-d-flex kb-justify-center kb-align-center"&gt;
  Centered content
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="position">Position</h2>
      <p class="docs-text">Position utilities:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-position-relative"&gt;Relative&lt;/div&gt;
&lt;div class="kb-position-absolute"&gt;Absolute&lt;/div&gt;
&lt;div class="kb-position-fixed"&gt;Fixed&lt;/div&gt;
&lt;div class="kb-position-sticky"&gt;Sticky&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="spacing">Spacing</h2>
      <p class="docs-text">Spacing utilities:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-m-0"&gt;No margin&lt;/div&gt;
&lt;div class="kb-m-4"&gt;Margin 1rem&lt;/div&gt;
&lt;div class="kb-p-4"&gt;Padding 1rem&lt;/div&gt;
&lt;div class="kb-mx-auto"&gt;Horizontal auto margin&lt;/div&gt;</code></pre>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'LayoutUtilities'
}
</script>