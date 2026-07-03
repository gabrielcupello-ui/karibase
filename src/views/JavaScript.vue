<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">JavaScript</span>
    </div>

    <h1 class="docs-heading">JavaScript</h1>
    <p class="docs-lead">JavaScript plugins and components for Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Karibase includes optional JavaScript plugins that add interactive functionality to components. 
        These plugins are lightweight, dependency-free, and can be used individually or all together.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="installation">Installation</h2>
      <p class="docs-text">Install the JavaScript package:</p>
      <div class="docs-code-block">
        <pre><code>npm install karibase-js</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="usage">Usage</h2>
      <p class="docs-text">Import and initialize the plugins:</p>
      <div class="docs-code-block">
        <pre><code>import { Modal, Dropdown, Tooltip } from 'karibase-js'

// Initialize specific plugin
const modal = new Modal('#myModal')
modal.show()

// Initialize all plugins
import Karibase from 'karibase-js'
Karibase.init()</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="available-plugins">Available Plugins</h2>
      <p class="docs-text">Karibase includes the following JavaScript plugins:</p>
      <ul class="docs-list">
        <li><strong>Modal:</strong> Dialog windows and overlays</li>
        <li><strong>Dropdown:</strong> Dropdown menus</li>
        <li><strong>Tooltip:</strong> Hover tooltips</li>
        <li><strong>Collapse:</strong> Collapsible content</li>
        <li><strong>Carousel:</strong> Image sliders</li>
        <li><strong>Offcanvas:</strong> Side panels</li>
        <li><strong>Scrollspy:</strong> Scroll-based navigation</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="data-attributes">Data Attributes</h2>
      <p class="docs-text">Use data attributes for quick initialization:</p>
      <div class="docs-code-block">
        <pre><code>&lt;button data-kb-toggle="modal" data-kb-target="#myModal"&gt;
  Open Modal
&lt;/button&gt;

&lt;div class="kb-modal" id="myModal"&gt;
  &lt;!-- Modal content --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="programmatic-api">Programmatic API</h2>
      <p class="docs-text">Control components programmatically:</p>
      <div class="docs-code-block">
        <pre><code>const modal = new Modal('#myModal')

// Show modal
modal.show()

// Hide modal
modal.hide()

// Toggle modal
modal.toggle()

// Dispose
modal.dispose()</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="events">Events</h2>
      <p class="docs-text">Listen to component events:</p>
      <div class="docs-code-block">
        <pre><code>const modal = new Modal('#myModal')

modal.addEventListener('show.kb.modal', () => {
  console.log('Modal is showing')
})

modal.addEventListener('shown.kb.modal', () => {
  console.log('Modal is shown')
})

modal.addEventListener('hide.kb.modal', () => {
  console.log('Modal is hiding')
})

modal.addEventListener('hidden.kb.modal', () => {
  console.log('Modal is hidden')
})</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/browsers-devices" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Browsers & devices</span>
      </router-link>
      <router-link to="/webpack" class="docs-next">
        <span>Webpack</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JavaScript'
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
