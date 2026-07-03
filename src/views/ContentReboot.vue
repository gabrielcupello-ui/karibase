<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/content" class="docs-breadcrumb-link">Content</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Reboot</span>
    </div>

    <h1 class="docs-heading">Reboot</h1>
    <p class="docs-lead">CSS reset and normalization in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Karibase includes a reboot that normalizes CSS across browsers. It provides a consistent starting point 
        for building your application by resetting default browser styles.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="what-it-does">What It Does</h2>
      <p class="docs-text">The reboot handles:</p>
      <ul class="docs-list">
        <li>Box-sizing reset to border-box</li>
        <li>Removal of default margins</li>
        <li>Font family normalization</li>
        <li>Line-height normalization</li>
        <li>Heading font size normalization</li>
        <li>Link decoration removal</li>
        <li>List style removal</li>
        <li>Form element normalization</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="box-sizing">Box-sizing</h2>
      <p class="docs-text">All elements use border-box:</p>
      <div class="docs-code-block">
        <pre><code>*, *::before, *::after {
  box-sizing: border-box;
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="native-font-stack">Native Font Stack</h2>
      <p class="docs-text">Karibase uses a system font stack:</p>
      <div class="docs-code-block">
        <pre><code>font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="headings">Headings</h2>
      <p class="docs-text">All headings are reset to remove default margins:</p>
      <div class="docs-code-block">
        <pre><code>h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/layout/css-grid" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>CSS Grid</span>
      </router-link>
      <router-link to="/content/typography" class="docs-next">
        <span>Typography</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentReboot'
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
