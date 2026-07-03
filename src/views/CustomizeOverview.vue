<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/customize" class="docs-breadcrumb-link">Customize</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Overview</span>
    </div>

    <h1 class="docs-heading">Customize</h1>
    <p class="docs-lead">Overview of customization options in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="introduction">Introduction</h2>
      <p class="docs-text">
        Karibase is designed to be highly customizable. You can modify colors, spacing, typography, and more 
        to match your brand identity. Choose the customization method that works best for your workflow.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="customization-methods">Customization Methods</h2>
      <p class="docs-text">Karibase offers multiple ways to customize:</p>
      <ul class="docs-list">
        <li><strong>CSS Variables:</strong> Override design tokens with CSS custom properties</li>
        <li><strong>Sass:</strong> Use Sass variables and mixins for deep customization</li>
        <li><strong>Build Options:</strong> Configure the build process to include only what you need</li>
        <li><strong>Component Overrides:</strong> Override specific component styles</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="css-variables">CSS Variables</h2>
      <p class="docs-text">The easiest way to customize Karibase:</p>
      <div class="docs-code-block">
        <pre><code>:root {
  --kb-primary: #ea2845;
  --kb-secondary: #6366f1;
  --kb-success: #10b981;
  --kb-warning: #f59e0b;
  --kb-danger: #ef4444;
  --kb-radius: 12px;
  --kb-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="sass-customization">Sass Customization</h2>
      <p class="docs-text">For advanced customization with Sass:</p>
      <div class="docs-code-block">
        <pre><code>// Override Sass variables before importing
$kb-primary: #ea2845;
$kb-secondary: #6366f1;
$kb-font-family: 'Inter', sans-serif;

@import 'karibase/scss/karibase';</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="next-steps">Next Steps</h2>
      <p class="docs-text">Explore detailed customization guides:</p>
      <ul class="docs-list">
        <li><router-link to="/customize/sass">Sass</router-link> - Deep customization with Sass</li>
        <li><router-link to="/customize/options">Options</router-link> - Build configuration options</li>
        <li><router-link to="/customize/color">Color</router-link> - Color system customization</li>
        <li><router-link to="/customize/color-modes">Color modes</router-link> - Light and dark themes</li>
        <li><router-link to="/customize/components">Components</router-link> - Component customization</li>
        <li><router-link to="/customize/css-variables">CSS variables</router-link> - Design tokens</li>
        <li><router-link to="/customize/optimize">Optimize</router-link> - Build optimization</li>
      </ul>
    </div>

    <div class="docs-next-prev">
      <router-link to="/contribute" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Contribute</span>
      </router-link>
      <router-link to="/customize/sass" class="docs-next">
        <span>Sass</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizeOverview'
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

.docs-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.docs-list li {
  padding: 8px 0;
  color: var(--docs-text-secondary);
  line-height: 1.75;
  position: relative;
  padding-left: 24px;
}

.docs-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--docs-primary-color);
  font-weight: bold;
}

.docs-list strong {
  color: var(--docs-text-primary);
  font-weight: 600;
}

.docs-list a {
  color: var(--docs-primary-color);
  text-decoration: none;
}

.docs-list a:hover {
  text-decoration: underline;
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
