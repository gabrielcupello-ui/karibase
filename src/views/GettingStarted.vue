<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Getting Started</span>
    </div>

    <h1 class="docs-heading">Getting Started</h1>
    <p class="docs-lead">Get up and running with Karibase CSS Framework</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="introduction">Introduction</h2>
      <p class="docs-text">
        Karibase is a progressive CSS framework for building efficient, scalable dashboards and admin panels. 
        It provides a comprehensive set of pre-built components, utilities, and design tokens to help you create 
        beautiful interfaces quickly.
      </p>
      <p class="docs-text">
        Whether you're building a simple admin panel or a complex SaaS dashboard, Karibase has everything you need 
        to get started quickly and scale your project efficiently.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="quick-start">Quick Start</h2>
      <p class="docs-text">Get started with Karibase in just a few simple steps:</p>

      <h3 class="docs-heading docs-heading-3">1. Include Karibase CSS</h3>
      <p class="docs-text">Add the Karibase CSS file to your HTML:</p>
      <div class="docs-code-block">
        <pre><code>&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/karibase@2.0.0/css/karibase.css"&gt;</code></pre>
      </div>

      <h3 class="docs-heading docs-heading-3">2. Create Your First Component</h3>
      <p class="docs-text">Start using Karibase components:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-card"&gt;
  &lt;div class="kb-card-header"&gt;
    &lt;h3 class="kb-card-title"&gt;Welcome to Karibase&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="kb-card-body"&gt;
    &lt;p class="kb-text"&gt;This is your first Karibase component!&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>

      <h3 class="docs-heading docs-heading-3">3. Customize with CSS Variables</h3>
      <p class="docs-text">Personalize your design with CSS variables:</p>
      <div class="docs-code-block">
        <pre><code>:root {
  --kb-primary: #ea2845;
  --kb-secondary: #6366f1;
  --kb-radius: 12px;
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="installation">Installation</h2>
      <p class="docs-text">Install Karibase using your preferred package manager:</p>

      <h3 class="docs-heading docs-heading-3">npm</h3>
      <div class="docs-code-block">
        <pre><code>npm install karibase</code></pre>
      </div>

      <h3 class="docs-heading docs-heading-3">yarn</h3>
      <div class="docs-code-block">
        <pre><code>yarn add karibase</code></pre>
      </div>

      <h3 class="docs-heading docs-heading-3">pnpm</h3>
      <div class="docs-code-block">
        <pre><code>pnpm add karibase</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="cdn">CDN</h2>
      <p class="docs-text">Use Karibase directly from CDN without any build tools:</p>
      <div class="docs-code-block">
        <pre><code>&lt;!-- CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/karibase@2.0.0/css/karibase.css"&gt;

&lt;!-- JavaScript (optional) --&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/karibase@2.0.0/js/karibase.js"&gt;&lt;/script&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="structure">Project Structure</h2>
      <p class="docs-text">Karibase follows a modular structure:</p>
      <div class="docs-code-block">
        <pre><code>karibase/
├── css/
│   ├── karibase.css          # Main entry point
│   ├── karibase-variables.css    # Design tokens
│   ├── karibase-reset.css        # CSS reset
│   ├── karibase-base.css         # Base styles
│   ├── karibase-components.css   # UI components
│   ├── karibase-utilities.css    # Utility classes
│   └── karibase-dark-mode.css    # Dark theme
├── js/
│   └── karibase.js          # Optional JavaScript
└── scss/
    ├── karibase.scss        # Source files
    └── components/          # Component SCSS</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="build-tools">Build Tools</h2>
      <p class="docs-text">Karibase works with popular build tools:</p>

      <h3 class="docs-heading docs-heading-3">Vite</h3>
      <div class="docs-code-block">
        <pre><code>import 'karibase/css/karibase.css'</code></pre>
      </div>

      <h3 class="docs-heading docs-heading-3">Webpack</h3>
      <div class="docs-code-block">
        <pre><code>import 'karibase/css/karibase.css'</code></pre>
      </div>

      <h3 class="docs-heading docs-heading-3">Parcel</h3>
      <div class="docs-code-block">
        <pre><code>@import 'karibase/css/karibase.css';</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="whats-included">What's Included</h2>
      <p class="docs-text">Karibase comes with everything you need:</p>
      <ul class="docs-list">
        <li><strong>Design System:</strong> Complete set of CSS variables for colors, spacing, typography, and more</li>
        <li><strong>Components:</strong> Pre-built UI components including buttons, cards, forms, tables, and more</li>
        <li><strong>Layout:</strong> Grid system, containers, and layout utilities</li>
        <li><strong>Utilities:</strong> Extensive utility classes for rapid development</li>
        <li><strong>Dark Mode:</strong> Built-in dark theme support</li>
        <li><strong>Responsive:</strong> Mobile-first responsive design</li>
        <li><strong>Accessibility:</strong> WCAG AA compliant components</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="browser-support">Browser Support</h2>
      <p class="docs-text">Karibase supports all modern browsers:</p>
      <ul class="docs-list">
        <li>Chrome (latest)</li>
        <li>Firefox (latest)</li>
        <li>Safari (latest)</li>
        <li>Edge (latest)</li>
        <li>Opera (latest)</li>
      </ul>
      <p class="docs-text">For older browsers, you may need to add appropriate polyfills.</p>
    </div>

    <div class="docs-next-prev">
      <router-link to="/" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/download" class="docs-next">
        <span>Download</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GettingStarted'
}
</script>

<script setup>
import { usePageInfo } from '../composables/usePageInfo'

usePageInfo({
  title: 'Getting Started - Karibase CSS Framework',
  description: 'Get started with Karibase CSS Framework. Installation guide, quick start, and basic usage for admin dashboards and floating bots.',
  keywords: 'Karibase, getting started, installation, setup, CSS framework, admin dashboard',
  author: 'Karibase - UCLA Graduate'
})
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

.docs-heading-3 {
  font-size: 20px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 12px;
  color: var(--docs-text-primary);
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

.docs-section {
  margin-bottom: 48px;
}

.docs-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.docs-list li {
  padding: 12px 0;
  color: var(--docs-text-secondary);
  border-bottom: 1px solid var(--docs-border-light);
}

.docs-list li:last-child {
  border-bottom: none;
}

.docs-list strong {
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
