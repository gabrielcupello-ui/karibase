<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/introduction" class="docs-breadcrumb-link">Getting Started</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Installation</span>
    </div>

    <h1 class="docs-heading">Installation</h1>
    <p class="docs-lead">Get started with Karibase in your project</p>

    <h2 class="docs-heading docs-heading-2" id="npm">NPM</h2>
    <p class="docs-text">Install Karibase via npm:</p>
    
    <div class="docs-code-block">
      <pre><code>npm install karibase</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="yarn">Yarn</h2>
    <p class="docs-text">Install Karibase via yarn:</p>
    
    <div class="docs-code-block">
      <pre><code>yarn add karibase</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="cdn">CDN</h2>
    <p class="docs-text">You can also use Karibase via CDN:</p>
    
    <div class="docs-code-block">
      <pre><code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/karibase/css/karibase.css"&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="import-css">Import CSS</h2>
    <p class="docs-text">After installation, import the CSS file in your main application file:</p>
    
    <div class="docs-code-block">
      <pre><code>// In your main.js or index.js
import 'karibase/css/karibase.css'</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="import-individual">Import Individual Components</h2>
    <p class="docs-text">For better performance, you can import only the components you need:</p>
    
    <div class="docs-code-block">
      <pre><code>// Import individual components
import 'karibase/css/karibase-reset.css'
import 'karibase/css/karibase-variables.css'
import 'karibase/css/karibase-components.css'</code></pre>
    </div>

    <div class="docs-callout docs-callout-info">
      <div class="docs-callout-icon">
        <i class="fas fa-info-circle"></i>
      </div>
      <div class="docs-callout-content">
        <h4 class="docs-callout-title">Pro Tip</h4>
        <p class="docs-callout-text">For production builds, consider using a bundler with CSS optimization to remove unused styles.</p>
      </div>
    </div>

    <h2 class="docs-heading docs-heading-2" id="download">Download</h2>
    <p class="docs-text">Download the latest release from GitHub:</p>
    
    <div class="docs-code-block">
      <pre><code>git clone https://github.com/yourusername/karibase.git</code></pre>
    </div>

    <div class="docs-next-prev">
      <router-link to="/introduction" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Introduction</span>
      </router-link>
      <router-link to="/quick-start" class="docs-next">
        <span>Quick Start</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Installation'
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
  scroll-margin-top: 100px;
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
