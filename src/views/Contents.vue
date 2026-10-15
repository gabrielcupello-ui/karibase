<template>
  <DocsArticle
    title="Contents"
    lead="Complete documentation table of contents"
    :prev="{ name: 'Download', path: '/download' }"
    :next="{ name: 'Browsers & devices', path: '/browsers-devices' }"
  >





    <div class="docs-toc">
      <div class="docs-toc-section">
        <h2 class="docs-toc-title">Getting Started</h2>
        <ul class="docs-toc-list">
          <li><router-link to="/getting-started" class="docs-toc-link">Introduction</router-link></li>
          <li><router-link to="/download" class="docs-toc-link">Download</router-link></li>
          <li><router-link to="/contents" class="docs-toc-link">Contents</router-link></li>
          <li><router-link to="/browsers-devices" class="docs-toc-link">Browsers & devices</router-link></li>
          <li><router-link to="/javascript" class="docs-toc-link">JavaScript</router-link></li>
          <li><router-link to="/webpack" class="docs-toc-link">Webpack</router-link></li>
          <li><router-link to="/parcel" class="docs-toc-link">Parcel</router-link></li>
          <li><router-link to="/vite" class="docs-toc-link">Vite</router-link></li>
          <li><router-link to="/accessibility" class="docs-toc-link">Accessibility</router-link></li>
          <li><router-link to="/rfs" class="docs-toc-link">RFS</router-link></li>
          <li><router-link to="/rtl" class="docs-toc-link">RTL</router-link></li>
          <li><router-link to="/contribute" class="docs-toc-link">Contribute</router-link></li>
        </ul>
      </div>

      <div class="docs-toc-section">
        <h2 class="docs-toc-title">Customize</h2>
        <ul class="docs-toc-list">
          <li><router-link to="/customize/overview" class="docs-toc-link">Overview</router-link></li>
          <li><router-link to="/customize/sass" class="docs-toc-link">Sass</router-link></li>
          <li><router-link to="/customize/options" class="docs-toc-link">Options</router-link></li>
          <li><router-link to="/customize/color" class="docs-toc-link">Color</router-link></li>
          <li><router-link to="/customize/color-modes" class="docs-toc-link">Color modes</router-link></li>
          <li><router-link to="/customize/components" class="docs-toc-link">Components</router-link></li>
          <li><router-link to="/customize/css-variables" class="docs-toc-link">CSS variables</router-link></li>
          <li><router-link to="/customize/optimize" class="docs-toc-link">Optimize</router-link></li>
        </ul>
      </div>

      <div class="docs-toc-section">
        <h2 class="docs-toc-title">Layout</h2>
        <ul class="docs-toc-list">
          <li><router-link to="/layout/breakpoints" class="docs-toc-link">Breakpoints</router-link></li>
          <li><router-link to="/layout/containers" class="docs-toc-link">Containers</router-link></li>
          <li><router-link to="/layout/grid" class="docs-toc-link">Grid</router-link></li>
          <li><router-link to="/layout/columns" class="docs-toc-link">Columns</router-link></li>
          <li><router-link to="/layout/gutters" class="docs-toc-link">Gutters</router-link></li>
          <li><router-link to="/layout/utilities" class="docs-toc-link">Utilities</router-link></li>
          <li><router-link to="/layout/z-index" class="docs-toc-link">Z-index</router-link></li>
          <li><router-link to="/layout/css-grid" class="docs-toc-link">CSS Grid</router-link></li>
        </ul>
      </div>

      <div class="docs-toc-section">
        <h2 class="docs-toc-title">Content</h2>
        <ul class="docs-toc-list">
          <li><router-link to="/content/reboot" class="docs-toc-link">Reboot</router-link></li>
          <li><router-link to="/content/typography" class="docs-toc-link">Typography</router-link></li>
          <li><router-link to="/content/images" class="docs-toc-link">Images</router-link></li>
          <li><router-link to="/content/tables" class="docs-toc-link">Tables</router-link></li>
          <li><router-link to="/content/figures" class="docs-toc-link">Figures</router-link></li>
        </ul>
      </div>

      <div class="docs-toc-section">
        <h2 class="docs-toc-title">Forms</h2>
        <ul class="docs-toc-list">
          <li><router-link to="/forms/overview" class="docs-toc-link">Overview</router-link></li>
          <li><router-link to="/forms/form-control" class="docs-toc-link">Form control</router-link></li>
          <li><router-link to="/forms/select" class="docs-toc-link">Select</router-link></li>
          <li><router-link to="/forms/checks-radios" class="docs-toc-link">Checks & radios</router-link></li>
          <li><router-link to="/forms/range" class="docs-toc-link">Range</router-link></li>
          <li><router-link to="/forms/input-group" class="docs-toc-link">Input group</router-link></li>
          <li><router-link to="/forms/floating-labels" class="docs-toc-link">Floating labels</router-link></li>
          <li><router-link to="/forms/layout" class="docs-toc-link">Layout</router-link></li>
          <li><router-link to="/forms/validation" class="docs-toc-link">Validation</router-link></li>
        </ul>
      </div>

      <div class="docs-toc-section">
        <h2 class="docs-toc-title">Components</h2>
        <ul class="docs-toc-list">
          <li><router-link to="/components/accordion" class="docs-toc-link">Accordion</router-link></li>
          <li><router-link to="/components/alerts" class="docs-toc-link">Alerts</router-link></li>
          <li><router-link to="/components/badge" class="docs-toc-link">Badge</router-link></li>
          <li><router-link to="/components/breadcrumb" class="docs-toc-link">Breadcrumb</router-link></li>
          <li><router-link to="/components/buttons" class="docs-toc-link">Buttons</router-link></li>
          <li><router-link to="/components/button-group" class="docs-toc-link">Button group</router-link></li>
          <li><router-link to="/components/cards" class="docs-toc-link">Card</router-link></li>
          <li><router-link to="/components/carousel" class="docs-toc-link">Carousel</router-link></li>
          <li><router-link to="/components/close-button" class="docs-toc-link">Close button</router-link></li>
          <li><router-link to="/components/collapse" class="docs-toc-link">Collapse</router-link></li>
          <li><router-link to="/components/dropdowns" class="docs-toc-link">Dropdowns</router-link></li>
          <li><router-link to="/components/list-group" class="docs-toc-link">List group</router-link></li>
          <li><router-link to="/components/modals" class="docs-toc-link">Modal</router-link></li>
          <li><router-link to="/components/navbar" class="docs-toc-link">Navbar</router-link></li>
          <li><router-link to="/components/navs-tabs" class="docs-toc-link">Navs & tabs</router-link></li>
          <li><router-link to="/components/offcanvas" class="docs-toc-link">Offcanvas</router-link></li>
          <li><router-link to="/components/pagination" class="docs-toc-link">Pagination</router-link></li>
          <li><router-link to="/components/placeholders" class="docs-toc-link">Placeholders</router-link></li>
          <li><router-link to="/components/popovers" class="docs-toc-link">Popovers</router-link></li>
          <li><router-link to="/components/progress" class="docs-toc-link">Progress</router-link></li>
          <li><router-link to="/components/scrollspy" class="docs-toc-link">Scrollspy</router-link></li>
          <li><router-link to="/components/spinners" class="docs-toc-link">Spinners</router-link></li>
          <li><router-link to="/components/toasts" class="docs-toc-link">Toasts</router-link></li>
          <li><router-link to="/components/tooltips" class="docs-toc-link">Tooltips</router-link></li>
        </ul>
      </div>

      <div class="docs-toc-section">
        <h2 class="docs-toc-title">Helpers</h2>
        <ul class="docs-toc-list">
          <li><router-link to="/helpers/clearfix" class="docs-toc-link">Clearfix</router-link></li>
          <li><router-link to="/helpers/color-background" class="docs-toc-link">Color & background</router-link></li>
          <li><router-link to="/helpers/colored-links" class="docs-toc-link">Colored links</router-link></li>
          <li><router-link to="/helpers/focus-ring" class="docs-toc-link">Focus ring</router-link></li>
          <li><router-link to="/helpers/icon-link" class="docs-toc-link">Icon link</router-link></li>
          <li><router-link to="/helpers/position" class="docs-toc-link">Position</router-link></li>
          <li><router-link to="/helpers/ratio" class="docs-toc-link">Ratio</router-link></li>
          <li><router-link to="/helpers/stacks" class="docs-toc-link">Stacks</router-link></li>
          <li><router-link to="/helpers/stretched-link" class="docs-toc-link">Stretched link</router-link></li>
          <li><router-link to="/helpers/text-truncation" class="docs-toc-link">Text truncation</router-link></li>
          <li><router-link to="/helpers/vertical-rule" class="docs-toc-link">Vertical rule</router-link></li>
          <li><router-link to="/helpers/visually-hidden" class="docs-toc-link">Visually hidden</router-link></li>
        </ul>
      </div>

      <div class="docs-toc-section">
        <h2 class="docs-toc-title">Utilities</h2>
        <ul class="docs-toc-list">
          <li><router-link to="/utilities/api" class="docs-toc-link">API</router-link></li>
          <li><router-link to="/utilities/background" class="docs-toc-link">Background</router-link></li>
          <li><router-link to="/utilities/borders" class="docs-toc-link">Borders</router-link></li>
          <li><router-link to="/utilities/colors" class="docs-toc-link">Colors</router-link></li>
          <li><router-link to="/utilities/display" class="docs-toc-link">Display</router-link></li>
          <li><router-link to="/utilities/flex" class="docs-toc-link">Flex</router-link></li>
          <li><router-link to="/utilities/float" class="docs-toc-link">Float</router-link></li>
          <li><router-link to="/utilities/interactions" class="docs-toc-link">Interactions</router-link></li>
          <li><router-link to="/utilities/link" class="docs-toc-link">Link</router-link></li>
          <li><router-link to="/utilities/object-fit" class="docs-toc-link">Object fit</router-link></li>
          <li><router-link to="/utilities/opacity" class="docs-toc-link">Opacity</router-link></li>
          <li><router-link to="/utilities/overflow" class="docs-toc-link">Overflow</router-link></li>
          <li><router-link to="/utilities/position" class="docs-toc-link">Position</router-link></li>
          <li><router-link to="/utilities/shadows" class="docs-toc-link">Shadows</router-link></li>
          <li><router-link to="/utilities/sizing" class="docs-toc-link">Sizing</router-link></li>
          <li><router-link to="/utilities/spacing" class="docs-toc-link">Spacing</router-link></li>
          <li><router-link to="/utilities/text" class="docs-toc-link">Text</router-link></li>
          <li><router-link to="/utilities/vertical-align" class="docs-toc-link">Vertical align</router-link></li>
          <li><router-link to="/utilities/visibility" class="docs-toc-link">Visibility</router-link></li>
          <li><router-link to="/utilities/z-index" class="docs-toc-link">Z-index</router-link></li>
        </ul>
      </div>

      <div class="docs-toc-section">
        <h2 class="docs-toc-title">Extend</h2>
        <ul class="docs-toc-list">
          <li><router-link to="/extend/approach" class="docs-toc-link">Approach</router-link></li>
          <li><router-link to="/extend/icons" class="docs-toc-link">Icons</router-link></li>
        </ul>
      </div>

      <div class="docs-toc-section">
        <h2 class="docs-toc-title">About</h2>
        <ul class="docs-toc-list">
          <li><router-link to="/about/overview" class="docs-toc-link">Overview</router-link></li>
          <li><router-link to="/about/team" class="docs-toc-link">Team</router-link></li>
          <li><router-link to="/about/brand" class="docs-toc-link">Brand</router-link></li>
          <li><router-link to="/about/license" class="docs-toc-link">License</router-link></li>
          <li><router-link to="/about/translations" class="docs-toc-link">Translations</router-link></li>
          <li><router-link to="/about/migration" class="docs-toc-link">Migration</router-link></li>
        </ul>
      </div>

      <div class="docs-toc-section">
        <h2 class="docs-toc-title">Examples</h2>
        <ul class="docs-toc-list">
          <li><router-link to="/examples/login" class="docs-toc-link">Login Examples</router-link></li>
          <li><router-link to="/examples/register" class="docs-toc-link">Register Examples</router-link></li>
          <li><router-link to="/components/floating-bots" class="docs-toc-link">Floating Bots</router-link></li>
        </ul>
      </div>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'Contents'
}
</script>

 scoped>


.docs-toc {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}


.docs-toc-section {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
  padding: 24px;
}


.docs-toc-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--docs-primary-color);
}


.docs-toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}


.docs-toc-list li {
  margin-bottom: 8px;
}


.docs-toc-link {
  color: var(--docs-text-secondary);
  text-decoration: none;
  font-size: 14px;
  transition: var(--docs-transition);
  display: block;
  padding: 4px 0;
}


.docs-toc-link:hover {
  color: var(--docs-primary-color);
  transform: translateX(4px);
}
</style>
