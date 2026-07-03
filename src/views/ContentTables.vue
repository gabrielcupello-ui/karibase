<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/content" class="docs-breadcrumb-link">Content</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Tables</span>
    </div>

    <h1 class="docs-heading">Tables</h1>
    <p class="docs-lead">Table styles in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-table">Basic Table</h2>
      <p class="docs-text">Use the basic table class:</p>
      <div class="docs-code-block">
        <pre><code>&lt;table class="kb-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Header 1&lt;/th&gt;
      &lt;th&gt;Header 2&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Cell 1&lt;/td&gt;
      &lt;td&gt;Cell 2&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="striped-table">Striped Table</h2>
      <p class="docs-text">Add striped rows:</p>
      <div class="docs-code-block">
        <pre><code>&lt;table class="kb-table kb-table-striped"&gt;
  &lt;!-- Table content --&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="bordered-table">Bordered Table</h2>
      <p class="docs-text">Add borders to the table:</p>
      <div class="docs-code-block">
        <pre><code>&lt;table class="kb-table kb-table-bordered"&gt;
  &lt;!-- Table content --&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="hover-table">Hover Table</h2>
      <p class="docs-text">Add hover effect to rows:</p>
      <div class="docs-code-block">
        <pre><code>&lt;table class="kb-table kb-table-hover"&gt;
  &lt;!-- Table content --&gt;
&lt;/table&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="responsive-table">Responsive Table</h2>
      <p class="docs-text">Make tables responsive:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-table-responsive"&gt;
  &lt;table class="kb-table"&gt;
    &lt;!-- Table content --&gt;
  &lt;/table&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/content/images" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Images</span>
      </router-link>
      <router-link to="/content/figures" class="docs-next">
        <span>Figures</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentTables'
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
