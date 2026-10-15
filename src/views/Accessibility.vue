<template>
  <DocsArticle
    title="Accessibility"
    lead="Building accessible components with Karibase"
    :prev="{ name: 'Vite', path: '/vite' }"
    :next="{ name: 'RFS', path: '/rfs' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Karibase is committed to making web accessibility achievable for all. Our components follow WCAG 2.1 AA standards 
        and include proper ARIA attributes, keyboard navigation, and screen reader support.
      </p>
      <p class="docs-text">
        Accessibility is built into the framework from the ground up, ensuring that your applications are usable by 
        everyone, regardless of their abilities or disabilities.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="wcag-compliance">WCAG Compliance</h2>
      <p class="docs-text">Karibase components meet WCAG 2.1 AA requirements:</p>
      <ul class="docs-list">
        <li><strong>Perceivable:</strong> Information and UI components must be presentable to users in ways they can perceive</li>
        <li><strong>Operable:</strong> UI components and navigation must be operable</li>
        <li><strong>Understandable:</strong> Information and the operation of the UI must be understandable</li>
        <li><strong>Robust:</strong> Content must be robust enough to be interpreted reliably by a wide variety of user agents</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="keyboard-navigation">Keyboard Navigation</h2>
      <p class="docs-text">All interactive components are keyboard accessible:</p>
      <div class="docs-code-block">
        <pre><code>&lt;!-- Keyboard accessible button --&gt;
&lt;button class="kb-btn kb-btn-primary" tabindex="0"&gt;
  Click me
&lt;/button&gt;

&lt;!-- Keyboard accessible link --&gt;
&lt;a href="#" class="kb-link" tabindex="0"&gt;
  Navigate here
&lt;/a&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="aria-attributes">ARIA Attributes</h2>
      <p class="docs-text">Components include appropriate ARIA attributes:</p>
      <div class="docs-code-block">
        <pre><code>&lt;!-- Modal with ARIA attributes --&gt;
&lt;div class="kb-modal-overlay" 
     role="dialog" 
     aria-modal="true" 
     aria-labelledby="modal-title"&gt;
  &lt;h2 id="modal-title"&gt;Modal Title&lt;/h2&gt;
  &lt;button aria-label="Close modal"&gt;×&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Progress bar with ARIA --&gt;
&lt;div class="kb-progress" role="progressbar" 
     aria-valuenow="75" 
     aria-valuemin="0" 
     aria-valuemax="100"&gt;
  &lt;div class="kb-progress-bar" style="width: 75%"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="screen-readers">Screen Readers</h2>
      <p class="docs-text">Optimized for screen reader compatibility:</p>
      <ul class="docs-list">
        <li>Semantic HTML elements</li>
        <li>Proper heading hierarchy</li>
        <li>Descriptive link text</li>
        <li>Form labels and descriptions</li>
        <li>Error messages with proper associations</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="color-contrast">Color Contrast</h2>
      <p class="docs-text">All color combinations meet WCAG AA contrast ratios:</p>
      <ul class="docs-list">
        <li>Normal text: 4.5:1 contrast ratio</li>
        <li>Large text: 3:1 contrast ratio</li>
        <li>UI components: 3:1 contrast ratio</li>
        <li>Focus indicators: 3:1 contrast ratio</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="focus-indicators">Focus Indicators</h2>
      <p class="docs-text">Clear focus states for keyboard navigation:</p>
      <div class="docs-code-block">
        <pre><code>/* Focus styles */
.kb-btn:focus-visible {
  outline: 3px solid var(--kb-primary);
  outline-offset: 2px;
}

.kb-input:focus {
  border-color: var(--kb-primary);
  box-shadow: 0 0 0 3px rgba(234, 40, 69, 0.2);
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="best-practices">Best Practices</h2>
      <p class="docs-text">Follow these accessibility best practices:</p>
      <ul class="docs-list">
        <li>Use semantic HTML elements</li>
        <li>Provide alternative text for images</li>
        <li>Ensure form inputs have associated labels</li>
        <li>Test with keyboard navigation</li>
        <li>Validate with screen readers</li>
        <li>Use color as an enhancement, not the only indicator</li>
        <li>Provide sufficient time for users to read and interact</li>
        <li>Avoid content that flashes more than 3 times per second</li>
        <li>Make sure all functionality is available from a keyboard</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="testing">Testing Accessibility</h2>
      <p class="docs-text">Test your application with these tools:</p>
      <ul class="docs-list">
        <li><strong>WAVE:</strong> Web Accessibility Evaluation Tool</li>
        <li><strong>axe DevTools:</strong> Browser extension for accessibility testing</li>
        <li><strong>Lighthouse:</strong> Built-in Chrome accessibility audit</li>
        <li><strong>NVDA / JAWS:</strong> Screen reader testing</li>
        <li><strong>Keyboard-only navigation:</strong> Test without mouse</li>
      </ul>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'Accessibility'
}
</script>