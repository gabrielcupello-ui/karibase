<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/layout" class="docs-breadcrumb-link">Layout</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Gutters</span>
    </div>

    <h1 class="docs-heading">Gutters</h1>
    <p class="docs-lead">Gutter utilities in Karibase</p>

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

    <div class="docs-next-prev">
      <router-link to="/layout/columns" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Columns</span>
      </router-link>
      <router-link to="/layout/utilities" class="docs-next">
        <span>Utilities</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutGutters'
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
