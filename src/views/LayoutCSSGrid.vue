<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/layout" class="docs-breadcrumb-link">Layout</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">CSS Grid</span>
    </div>

    <h1 class="docs-heading">CSS Grid</h1>
    <p class="docs-lead">CSS Grid layout in Karibase</p>

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

    <div class="docs-next-prev">
      <router-link to="/layout/z-index" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Z-index</span>
      </router-link>
      <router-link to="/content/reboot" class="docs-next">
        <span>Content</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutCSSGrid'
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
