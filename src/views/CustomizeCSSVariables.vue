<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/customize" class="docs-breadcrumb-link">Customize</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">CSS variables</span>
    </div>

    <h1 class="docs-heading">CSS variables</h1>
    <p class="docs-lead">Design tokens and CSS custom properties in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Karibase uses CSS custom properties (CSS variables) as design tokens. This makes it easy to customize 
        the framework without modifying the source code.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="root-variables">Root Variables</h2>
      <p class="docs-text">All variables are defined on the :root pseudo-class:</p>
      <div class="docs-code-block">
        <pre><code>:root {
  /* Colors */
  --kb-primary: #ea2845;
  --kb-secondary: #6366f1;
  --kb-success: #10b981;
  --kb-warning: #f59e0b;
  --kb-danger: #ef4444;
  --kb-info: #3b82f6;
  
  /* Spacing */
  --kb-spacing-xs: 0.25rem;
  --kb-spacing-sm: 0.5rem;
  --kb-spacing-md: 1rem;
  --kb-spacing-lg: 1.5rem;
  --kb-spacing-xl: 2rem;
  
  /* Typography */
  --kb-font-family: 'Inter', sans-serif;
  --kb-font-size-base: 1rem;
  --kb-line-height: 1.6;
  
  /* Border radius */
  --kb-radius-sm: 4px;
  --kb-radius-md: 8px;
  --kb-radius-lg: 12px;
  --kb-radius-xl: 16px;
  
  /* Shadows */
  --kb-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --kb-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --kb-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overriding">Overriding Variables</h2>
      <p class="docs-text">Override variables in your CSS:</p>
      <div class="docs-code-block">
        <pre><code>:root {
  --kb-primary: #8b5cf6;
  --kb-secondary: #ec4899;
  --kb-radius-lg: 16px;
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="component-variables">Component Variables</h2>
      <p class="docs-text">Component-specific variables:</p>
      <div class="docs-code-block">
        <pre><code>:root {
  /* Button variables */
  --kb-btn-padding-x: 1rem;
  --kb-btn-padding-y: 0.5rem;
  --kb-btn-font-size: 0.875rem;
  --kb-btn-border-radius: 8px;
  
  /* Card variables */
  --kb-card-padding: 1.5rem;
  --kb-card-border-radius: 12px;
  --kb-card-shadow: var(--kb-shadow-md);
  
  /* Input variables */
  --kb-input-padding-x: 0.75rem;
  --kb-input-padding-y: 0.5rem;
  --kb-input-border-radius: 6px;
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="dark-mode-variables">Dark Mode Variables</h2>
      <p class="docs-text">Override variables for dark mode:</p>
      <div class="docs-code-block">
        <pre><code>[mode="dark"] {
  --kb-bg-primary: #1a1a1a;
  --kb-bg-secondary: #2a2a2a;
  --kb-bg-tertiary: #3a3a3a;
  --kb-text-primary: #ffffff;
  --kb-text-secondary: #cccccc;
  --kb-border-color: #444444;
}</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/customize/components" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Components</span>
      </router-link>
      <router-link to="/customize/optimize" class="docs-next">
        <span>Optimize</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizeCSSVariables'
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
