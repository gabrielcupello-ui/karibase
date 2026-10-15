<template>
  <DocsArticle
    title="JavaScript"
    lead="JavaScript plugins and components for Karibase"
    :prev="{ name: 'Browsers & devices', path: '/browsers-devices' }"
    :next="{ name: 'Webpack', path: '/webpack' }"
  >





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


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'JavaScript'
}
</script>