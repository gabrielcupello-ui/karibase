<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/layout" class="docs-breadcrumb-link">Layout</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Utilities</span>
    </div>

    <h1 class="docs-heading">Utilities</h1>
    <p class="docs-lead">Layout utilities in Karibase</p>

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

    <div class="docs-next-prev">
      <router-link to="/layout/gutters" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Gutters</span>
      </router-link>
      <router-link to="/layout/z-index" class="docs-next">
        <span>Z-index</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutUtilities'
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
