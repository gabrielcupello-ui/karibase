<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/components" class="docs-breadcrumb-link">Components</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Buttons</span>
    </div>

    <h1 class="docs-heading">Buttons</h1>
    <p class="docs-lead">Interactive buttons with multiple styles and states</p>

    <h2 class="docs-heading docs-heading-2" id="basic-buttons">Basic Buttons</h2>
    <p class="docs-text">Use the <code class="docs-inline-code">kb-btn</code> class for basic buttons:</p>
    
    <div class="docs-preview">
      <button class="kb-btn kb-btn-primary">Primary</button>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;button class="kb-btn kb-btn-primary"&gt;Primary&lt;/button&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="button-sizes">Button Sizes</h2>
    <p class="docs-text">Buttons come in different sizes:</p>
    
    <div class="docs-preview">
      <button class="kb-btn kb-btn-primary kb-btn-lg">Large</button>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;button class="kb-btn kb-btn-primary kb-btn-lg"&gt;Large&lt;/button&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="outline-buttons">Outline Buttons</h2>
    <p class="docs-text">Outline buttons with transparent background:</p>
    
    <div class="docs-preview">
      <button class="kb-btn kb-btn-outline kb-btn-outline-primary">Primary</button>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;button class="kb-btn kb-btn-outline kb-btn-outline-primary"&gt;Primary&lt;/button&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="icon-buttons">Icon Buttons</h2>
    <p class="docs-text">Buttons with icons:</p>
    
    <div class="docs-preview">
      <button class="kb-btn kb-btn-primary">
        <i class="fas fa-download"></i>
        Download
      </button>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;button class="kb-btn kb-btn-primary"&gt;
  &lt;i class="fas fa-download"&gt;&lt;/i&gt;
  Download
&lt;/button&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="button-states">Button States</h2>
    <p class="docs-text">Disabled and loading states:</p>
    
    <div class="docs-preview">
      <button class="kb-btn kb-btn-primary" disabled>Disabled</button>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;button class="kb-btn kb-btn-primary" disabled&gt;Disabled&lt;/button&gt;</code></pre>
    </div>

    <div class="docs-next-prev">
      <router-link to="/components" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Components</span>
      </router-link>
      <router-link to="/components/cards" class="docs-next">
        <span>Cards</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Buttons'
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

.docs-inline-code {
  background-color: var(--docs-bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Inconsolata', monospace;
  font-size: 14px;
  color: var(--docs-primary-color);
}

.docs-preview {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
  padding: 32px;
  margin: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
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
