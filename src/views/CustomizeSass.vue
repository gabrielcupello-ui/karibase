<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/customize" class="docs-breadcrumb-link">Customize</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Sass</span>
    </div>

    <h1 class="docs-heading">Sass</h1>
    <p class="docs-lead">Using Sass to customize Karibase</p>

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

    <div class="docs-next-prev">
      <router-link to="/customize/overview" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Overview</span>
      </router-link>
      <router-link to="/customize/options" class="docs-next">
        <span>Options</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizeSass'
}
</script>

<style scoped>
.docs-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 14px;
}

.docs-breadcrumb-link {
  color: var(--docs-text-secondary);
  text-decoration: none;
  transition: var(--docs-transition);
}

.docs-breadcrumb-link:hover {
  color: var(--docs-primary-color);
}

.docs-breadcrumb-separator {
  color: var(--docs-text-muted);
}

.docs-breadcrumb-current {
  color: var(--docs-text-primary);
  font-weight: 600;
}

.docs-heading {
  font-size: 48px;
  font-weight: 800;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}

.docs-heading-2 {
  font-size: 32px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 16px;
  color: var(--docs-text-primary);
  letter-spacing: -0.01em;
}

.docs-lead {
  font-size: 20px;
  color: var(--docs-text-secondary);
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 65ch;
}

.docs-text {
  font-size: 16px;
  color: var(--docs-text-secondary);
  line-height: 1.75;
  margin: 0 0 16px;
  max-width: 65ch;
}

.docs-section {
  margin-bottom: 48px;
}

.docs-code-block {
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 20px;
  margin: 16px 0 24px;
  overflow-x: auto;
}

.docs-code-block pre {
  margin: 0;
  padding: 0;
}

.docs-code-block code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
  font-size: 14px;
  color: #e5e7eb;
  line-height: 1.6;
}

.docs-next-prev {
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid var(--docs-border-color);
}

.docs-prev,
.docs-next {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  color: var(--docs-text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--docs-transition);
  font-size: 14px;
}

.docs-prev:hover,
.docs-next:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}
</style>
