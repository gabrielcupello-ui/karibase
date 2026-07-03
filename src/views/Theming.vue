<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Theming</span>
    </div>

    <h1 class="docs-heading">Theming</h1>
    <p class="docs-lead">Customize Karibase to match your brand</p>

    <h2 class="docs-heading docs-heading-2" id="css-variables">CSS Variables</h2>
    <p class="docs-text">Karibase uses CSS variables for easy customization. Override these variables to create your custom theme:</p>
    
    <div class="docs-code-block">
      <pre><code>:root {
  /* Primary Colors */
  --kb-primary-color: #ea2845;
  --kb-primary-light: #ff4d6a;
  --kb-primary-dark: #c91f3a;
  
  /* Secondary Colors */
  --kb-secondary-color: #6366f1;
  --kb-secondary-light: #818cf8;
  --kb-secondary-dark: #4f46e5;
  
  /* Neutral Colors */
  --kb-text-primary: #1a1a1a;
  --kb-text-secondary: #666666;
  --kb-text-muted: #999999;
  
  --kb-bg-primary: #ffffff;
  --kb-bg-secondary: #f8f9fa;
  --kb-bg-tertiary: #e9ecef;
  
  /* Borders */
  --kb-border-color: #dee2e6;
  --kb-border-radius: 8px;
  
  /* Spacing */
  --kb-spacing-xs: 4px;
  --kb-spacing-sm: 8px;
  --kb-spacing-md: 16px;
  --kb-spacing-lg: 24px;
  --kb-spacing-xl: 32px;
  
  /* Typography */
  --kb-font-family: 'Source Sans Pro', sans-serif;
  --kb-font-size-base: 16px;
  --kb-font-size-lg: 18px;
  --kb-font-size-xl: 20px;
  
  /* Shadows */
  --kb-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --kb-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --kb-shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
}</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="custom-theme">Custom Theme Example</h2>
    <p class="docs-text">Create a custom theme by overriding variables:</p>
    
    <div class="docs-code-block">
      <pre><code>:root {
  /* Custom Blue Theme */
  --kb-primary-color: #3b82f6;
  --kb-primary-light: #60a5fa;
  --kb-primary-dark: #2563eb;
  
  --kb-secondary-color: #10b981;
  --kb-secondary-light: #34d399;
  --kb-secondary-dark: #059669;
}</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="dark-mode">Dark Mode</h2>
    <p class="docs-text">Karibase includes built-in dark mode support. Override variables for dark theme:</p>
    
    <div class="docs-code-block">
      <pre><code>[data-theme="dark"] {
  --kb-text-primary: #ffffff;
  --kb-text-secondary: #b0b0b0;
  --kb-text-muted: #808080;
  
  --kb-bg-primary: #1a1a1a;
  --kb-bg-secondary: #242424;
  --kb-bg-tertiary: #2d2d2d;
  
  --kb-border-color: #404040;
}</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="component-theming">Component Theming</h2>
    <p class="docs-text">Customize specific components:</p>
    
    <div class="docs-code-block">
      <pre><code>/* Custom Button Styles */
.kb-btn-primary {
  background: linear-gradient(135deg, var(--kb-primary-color), var(--kb-primary-dark));
  border: none;
  color: white;
  padding: 12px 24px;
  border-radius: var(--kb-border-radius);
  font-weight: 600;
  transition: all 0.2s ease;
}

.kb-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--kb-shadow-md);
}</code></pre>
    </div>

    <div class="docs-callout docs-callout-info">
      <div class="docs-callout-icon">
        <i class="fas fa-info-circle"></i>
      </div>
      <div class="docs-callout-content">
        <h4 class="docs-callout-title">Best Practices</h4>
        <p class="docs-callout-text">Always define your custom variables after importing Karibase CSS to ensure your overrides take effect.</p>
      </div>
    </div>

    <h2 class="docs-heading docs-heading-2" id="preset-themes">Preset Themes</h2>
    <p class="docs-text">Karibase includes several preset themes:</p>
    
    <div class="docs-themes-grid">
      <div class="docs-theme-card">
        <div class="docs-theme-preview docs-theme-default"></div>
        <h4 class="docs-theme-name">Default</h4>
        <p class="docs-theme-desc">Red primary color</p>
      </div>
      <div class="docs-theme-card">
        <div class="docs-theme-preview docs-theme-blue"></div>
        <h4 class="docs-theme-name">Ocean</h4>
        <p class="docs-theme-desc">Blue primary color</p>
      </div>
      <div class="docs-theme-card">
        <div class="docs-theme-preview docs-theme-green"></div>
        <h4 class="docs-theme-name">Forest</h4>
        <p class="docs-theme-desc">Green primary color</p>
      </div>
      <div class="docs-theme-card">
        <div class="docs-theme-preview docs-theme-purple"></div>
        <h4 class="docs-theme-name">Royal</h4>
        <p class="docs-theme-desc">Purple primary color</p>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/utilities" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Utilities</span>
      </router-link>
      <router-link to="/introduction" class="docs-next">
        <span>Introduction</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Theming'
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

.docs-callout {
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  margin: 32px 0;
}

.docs-callout-info {
  background-color: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.docs-callout-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.docs-callout-content {
  flex: 1;
}

.docs-callout-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--docs-text-primary);
  margin: 0 0 8px;
}

.docs-callout-text {
  font-size: 14px;
  color: var(--docs-text-secondary);
  margin: 0;
  line-height: 1.6;
}

.docs-themes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin: 32px 0;
}

.docs-theme-card {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: var(--docs-transition);
}

.docs-theme-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--docs-shadow-md);
}

.docs-theme-preview {
  width: 100%;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.docs-theme-default {
  background: linear-gradient(135deg, #ea2845, #ea2868);
}

.docs-theme-blue {
  background: linear-gradient(135deg, #3b82f6, #6366f1);
}

.docs-theme-green {
  background: linear-gradient(135deg, #10b981, #059669);
}

.docs-theme-purple {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.docs-theme-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--docs-text-primary);
  margin: 0 0 8px;
}

.docs-theme-desc {
  font-size: 14px;
  color: var(--docs-text-secondary);
  margin: 0;
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
