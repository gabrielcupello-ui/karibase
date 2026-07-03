<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/customize" class="docs-breadcrumb-link">Customize</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Color</span>
    </div>

    <h1 class="docs-heading">Color</h1>
    <p class="docs-lead">Color system and customization in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="color-system">Color System</h2>
      <p class="docs-text">Karibase uses a comprehensive color system:</p>
      <ul class="docs-list">
        <li><strong>Primary:</strong> Main brand color</li>
        <li><strong>Secondary:</strong> Secondary brand color</li>
        <li><strong>Success:</strong> Positive feedback</li>
        <li><strong>Warning:</strong> Cautionary feedback</li>
        <li><strong>Danger:</strong> Negative feedback</li>
        <li><strong>Info:</strong> Informational feedback</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="customizing-colors">Customizing Colors</h2>
      <p class="docs-text">Override colors with CSS variables:</p>
      <div class="docs-code-block">
        <pre><code>:root {
  --kb-primary: #ea2845;
  --kb-primary-light: #f5a3b0;
  --kb-primary-dark: #b81c32;
  
  --kb-secondary: #6366f1;
  --kb-secondary-light: #a5a8ff;
  --kb-secondary-dark: #4f46e5;
  
  --kb-success: #10b981;
  --kb-warning: #f59e0b;
  --kb-danger: #ef4444;
  --kb-info: #3b82f6;
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="color-palette">Color Palette</h2>
      <p class="docs-text">Karibase includes a complete color palette:</p>
      <div class="docs-color-grid">
        <div class="docs-color-item">
          <div class="docs-color-swatch" style="background: #ea2845;"></div>
          <span>Primary</span>
        </div>
        <div class="docs-color-item">
          <div class="docs-color-swatch" style="background: #6366f1;"></div>
          <span>Secondary</span>
        </div>
        <div class="docs-color-item">
          <div class="docs-color-swatch" style="background: #10b981;"></div>
          <span>Success</span>
        </div>
        <div class="docs-color-item">
          <div class="docs-color-swatch" style="background: #f59e0b;"></div>
          <span>Warning</span>
        </div>
        <div class="docs-color-item">
          <div class="docs-color-swatch" style="background: #ef4444;"></div>
          <span>Danger</span>
        </div>
        <div class="docs-color-item">
          <div class="docs-color-swatch" style="background: #3b82f6;"></div>
          <span>Info</span>
        </div>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="semantic-colors">Semantic Colors</h2>
      <p class="docs-text">Use semantic colors for meaning:</p>
      <div class="docs-code-block">
        <pre><code>&lt;button class="kb-btn kb-btn-success"&gt;Success&lt;/button&gt;
&lt;button class="kb-btn kb-btn-warning"&gt;Warning&lt;/button&gt;
&lt;button class="kb-btn kb-btn-danger"&gt;Danger&lt;/button&gt;</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/customize/options" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Options</span>
      </router-link>
      <router-link to="/customize/color-modes" class="docs-next">
        <span>Color modes</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizeColor'
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

.docs-color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.docs-color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.docs-color-swatch {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  box-shadow: var(--docs-shadow-md);
}

.docs-color-item span {
  font-size: 14px;
  color: var(--docs-text-secondary);
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
