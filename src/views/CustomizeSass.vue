<template>
  <DocsArticle
    title="Sass"
    lead="Using Sass to customize Karibase"
    :breadcrumb="[{ name: 'Customize', path: '/customize' }, { name: 'Sass' }]"
    :prev="{ name: 'Overview', path: '/customize/overview' }"
    :next="{ name: 'Options', path: '/customize/options' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="installation">Installation</h2>
      <p class="docs-text">Install Sass if you haven't already:</p>
      <div class="docs-code-block">
        <pre><code>npm install --save-dev sass</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="file-structure">File Structure</h2>
      <p class="docs-text">Karibase Sass structure:</p>
      <div class="docs-code-block">
        <pre><code>karibase/
├── scss/
│   ├── karibase.scss
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _functions.scss
│   ├── _reboot.scss
│   ├── _base.scss
│   ├── _components.scss
│   ├── _utilities.scss
│   └── _dark-mode.scss</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="importing">Importing</h2>
      <p class="docs-text">Import Karibase in your Sass file:</p>
      <div class="docs-code-block">
        <pre><code>// Override variables first
$kb-primary: #ea2845;
$kb-secondary: #6366f1;

// Then import Karibase
@import 'karibase/scss/karibase';</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="variables">Variables</h2>
      <p class="docs-text">Available Sass variables:</p>
      <div class="docs-code-block">
        <pre><code>// Colors
$kb-primary: #ea2845;
$kb-secondary: #6366f1;
$kb-success: #10b981;
$kb-warning: #f59e0b;
$kb-danger: #ef4444;

// Spacing
$kb-spacing-xs: 0.25rem;
$kb-spacing-sm: 0.5rem;
$kb-spacing-md: 1rem;
$kb-spacing-lg: 1.5rem;
$kb-spacing-xl: 2rem;

// Typography
$kb-font-family: 'Inter', sans-serif;
$kb-font-size-base: 1rem;
$kb-line-height: 1.6;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="mixins">Mixins</h2>
      <p class="docs-text">Available Sass mixins:</p>
      <div class="docs-code-block">
        <pre><code>// Breakpoint mixin
@include breakpoint(md) {
  .element {
    // Styles for medium screens and up
  }
}

// Flexbox mixin
.element {
  @include flex-center;
}

// Button variant mixin
.btn-custom {
  @include button-variant($kb-primary, white);
}</code></pre>
      </div>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'CustomizeSass'
}
</script>