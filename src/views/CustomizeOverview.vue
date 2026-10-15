<template>
  <DocsArticle
    title="Customize"
    lead="Overview of customization options in Karibase"
    :breadcrumb="[{ name: 'Customize', path: '/customize' }, { name: 'Overview' }]"
    :prev="{ name: 'Contribute', path: '/contribute' }"
    :next="{ name: 'Sass', path: '/customize/sass' }"
  >





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


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'CustomizeOverview'
}
</script>