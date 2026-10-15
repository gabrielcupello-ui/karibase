<template>
  <DocsArticle
    title="Getting Started"
    lead="Get up and running with Karibase CSS Framework"
    :prev="{ name: 'Home', path: '/' }"
    :next="{ name: 'Download', path: '/download' }"
  >





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


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'GettingStarted'
}
</script>