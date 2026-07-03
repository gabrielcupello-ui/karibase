<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/customize" class="docs-breadcrumb-link">Customize</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Components</span>
    </div>

    <h1 class="docs-heading">Components</h1>
    <p class="docs-lead">Customizing Karibase components</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Customize individual components by overriding their CSS variables or Sass variables. 
        This allows you to maintain the component's functionality while changing its appearance.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="button-customization">Button Customization</h2>
      <p class="docs-text">Customize button styles:</p>
      <div class="docs-code-block">
        <pre><code>:root {
  --kb-btn-padding-x: 1rem;
  --kb-btn-padding-y: 0.5rem;
  --kb-btn-font-size: 0.875rem;
  --kb-btn-border-radius: 8px;
  --kb-btn-transition: all 0.2s ease;
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="card-customization">Card Customization</h2>
      <p class="docs-text">Customize card styles:</p>
      <div class="docs-code-block">
        <pre><code>:root {
  --kb-card-padding: 1.5rem;
  --kb-card-border-radius: 12px;
  --kb-card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --kb-card-border: 1px solid var(--kb-border-color);
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="form-customization">Form Customization</h2>
      <p class="docs-text">Customize form input styles:</p>
      <div class="docs-code-block">
        <pre><code>:root {
  --kb-input-padding-x: 0.75rem;
  --kb-input-padding-y: 0.5rem;
  --kb-input-border-radius: 6px;
  --kb-input-border: 1px solid var(--kb-border-color);
  --kb-input-focus-border: var(--kb-primary);
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="component-variants">Component Variants</h2>
      <p class="docs-text">Create custom component variants:</p>
      <div class="docs-code-block">
        <pre><code>.kb-btn-custom {
  --kb-btn-bg: #8b5cf6;
  --kb-btn-hover-bg: #7c3aed;
  --kb-btn-text: white;
}</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/customize/color-modes" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Color modes</span>
      </router-link>
      <router-link to="/customize/css-variables" class="docs-next">
        <span>CSS variables</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizeComponents'
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
