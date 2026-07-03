<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/customize" class="docs-breadcrumb-link">Customize</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Options</span>
    </div>

    <h1 class="docs-heading">Options</h1>
    <p class="docs-lead">Build and configuration options for Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="build-options">Build Options</h2>
      <p class="docs-text">Configure your build to include only what you need:</p>
      <div class="docs-code-block">
        <pre><code>// vite.config.js
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $kb-enable-dark-mode: true;
          $kb-enable-rtl: false;
          $kb-enable-animations: true;
        `
      }
    }
  }
})</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="feature-flags">Feature Flags</h2>
      <p class="docs-text">Enable or disable features:</p>
      <ul class="docs-list">
        <li><code>$kb-enable-dark-mode</code> - Enable dark mode support</li>
        <li><code>$kb-enable-rtl</code> - Enable RTL support</li>
        <li><code>$kb-enable-animations</code> - Enable animations</li>
        <li><code>$kb-enable-transitions</code> - Enable transitions</li>
        <li><code>$kb-enable-shadows</code> - Enable shadows</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="component-inclusion">Component Inclusion</h2>
      <p class="docs-text">Include only the components you use:</p>
      <div class="docs-code-block">
        <pre><code>// Import only what you need
@import 'karibase/scss/variables';
@import 'karibase/scss/reboot';
@import 'karibase/scss/base';
@import 'karibase/scss/components/buttons';
@import 'karibase/scss/components/cards';
@import 'karibase/scss/components/forms';</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="optimization">Optimization</h2>
      <p class="docs-text">Optimize your build for production:</p>
      <div class="docs-code-block">
        <pre><code>// Disable source maps in production
export default defineConfig({
  build: {
    sourcemap: false,
    minify: 'terser',
    cssMinify: true
  }
})</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/customize/sass" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Sass</span>
      </router-link>
      <router-link to="/customize/color" class="docs-next">
        <span>Color</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizeOptions'
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

.docs-list code {
  background-color: var(--docs-bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
  font-size: 13px;
  color: var(--docs-primary-color);
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
