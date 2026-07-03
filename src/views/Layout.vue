<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Layout</span>
    </div>

    <h1 class="docs-heading">Layout</h1>
    <p class="docs-lead">Grid system and layout utilities</p>

    <h2 class="docs-heading docs-heading-2" id="container">Container</h2>
    <p class="docs-text">Container for centering content:</p>
    
    <div class="docs-preview">
      <div class="kb-container">
        <div class="kb-container-demo">
          Container
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-container"&gt;
  Content
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="grid-system">Grid System</h2>
    <p class="docs-text">Responsive grid layout:</p>
    
    <div class="docs-preview">
      <div class="kb-grid kb-grid-3">
        <div class="kb-grid-item">Column 1</div>
        <div class="kb-grid-item">Column 2</div>
        <div class="kb-grid-item">Column 3</div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-grid kb-grid-3"&gt;
  &lt;div class="kb-grid-item"&gt;Column 1&lt;/div&gt;
  &lt;div class="kb-grid-item"&gt;Column 2&lt;/div&gt;
  &lt;div class="kb-grid-item"&gt;Column 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="grid-variants">Grid Variants</h2>
    <p class="docs-text">Different grid column options:</p>
    
    <div class="docs-preview">
      <div class="kb-grid kb-grid-2">
        <div class="kb-grid-item">2 Columns</div>
        <div class="kb-grid-item">2 Columns</div>
      </div>
      <div class="kb-grid kb-grid-4">
        <div class="kb-grid-item">4 Columns</div>
        <div class="kb-grid-item">4 Columns</div>
        <div class="kb-grid-item">4 Columns</div>
        <div class="kb-grid-item">4 Columns</div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-grid kb-grid-2"&gt;...&lt;/div&gt;
&lt;div class="kb-grid kb-grid-3"&gt;...&lt;/div&gt;
&lt;div class="kb-grid kb-grid-4"&gt;...&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="flexbox">Flexbox</h2>
    <p class="docs-text">Flexbox utilities:</p>
    
    <div class="docs-preview">
      <div class="kb-flex kb-flex-between">
        <div class="kb-flex-item">Left</div>
        <div class="kb-flex-item">Right</div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-flex kb-flex-between"&gt;
  &lt;div&gt;Left&lt;/div&gt;
  &lt;div&gt;Right&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="docs-next-prev">
      <router-link to="/components/tables" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Tables</span>
      </router-link>
      <router-link to="/utilities" class="docs-next">
        <span>Utilities</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout'
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
  font-size: 40px;
  font-weight: 800;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
}

.docs-heading-2 {
  font-size: 28px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 16px;
}

.docs-lead {
  font-size: 20px;
  color: var(--docs-text-secondary);
  line-height: 1.6;
  margin: 0 0 24px;
}

.docs-text {
  font-size: 16px;
  color: var(--docs-text-secondary);
  line-height: 1.8;
  margin: 0 0 16px;
}

.docs-preview {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
  padding: 32px;
  margin: 24px 0;
}

.kb-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

.kb-container-demo {
  background-color: var(--docs-bg-tertiary);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: var(--docs-text-primary);
}

.kb-grid {
  display: grid;
  gap: 16px;
}

.kb-grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.kb-grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.kb-grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

.kb-grid-item {
  background-color: var(--docs-bg-tertiary);
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: var(--docs-text-primary);
}

.kb-flex {
  display: flex;
  gap: 16px;
}

.kb-flex-between {
  justify-content: space-between;
}

.kb-flex-item {
  background-color: var(--docs-bg-tertiary);
  padding: 20px;
  border-radius: 8px;
  color: var(--docs-text-primary);
}

.docs-code-block {
  background-color: var(--docs-bg-tertiary);
  border: 1px solid var(--docs-border-color);
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
  font-family: 'Inconsolata', monospace;
  font-size: 14px;
  color: var(--docs-text-primary);
  line-height: 1.6;
}

.docs-next-prev {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  padding-top: 24px;
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
  font-weight: 600;
  transition: var(--docs-transition);
}

.docs-prev:hover,
.docs-next:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}
</style>
