<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Browsers & devices</span>
    </div>

    <h1 class="docs-heading">Browsers & devices</h1>
    <p class="docs-lead">Supported browsers and devices for Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="supported-browsers">Supported Browsers</h2>
      <p class="docs-text">Karibase supports the latest versions of all major browsers:</p>
      
      <div class="docs-browser-grid">
        <div class="docs-browser-item">
          <div class="docs-browser-icon">🌐</div>
          <div class="docs-browser-name">Chrome</div>
          <div class="docs-browser-status">Latest</div>
        </div>
        <div class="docs-browser-item">
          <div class="docs-browser-icon">🦊</div>
          <div class="docs-browser-name">Firefox</div>
          <div class="docs-browser-status">Latest</div>
        </div>
        <div class="docs-browser-item">
          <div class="docs-browser-icon">🧭</div>
          <div class="docs-browser-name">Safari</div>
          <div class="docs-browser-status">Latest</div>
        </div>
        <div class="docs-browser-item">
          <div class="docs-browser-icon">📱</div>
          <div class="docs-browser-name">Edge</div>
          <div class="docs-browser-status">Latest</div>
        </div>
        <div class="docs-browser-item">
          <div class="docs-browser-icon">🎭</div>
          <div class="docs-browser-name">Opera</div>
          <div class="docs-browser-status">Latest</div>
        </div>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="mobile-browsers">Mobile Browsers</h2>
      <p class="docs-text">Karibase is optimized for mobile browsers:</p>
      <ul class="docs-list">
        <li>Safari on iOS (latest)</li>
        <li>Chrome on Android (latest)</li>
        <li>Samsung Internet (latest)</li>
        <li>Firefox Mobile (latest)</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="deprecated-browsers">Deprecated Browsers</h2>
      <p class="docs-text">The following browsers are not supported:</p>
      <ul class="docs-list">
        <li>Internet Explorer 11 and below</li>
        <li>Microsoft Edge Legacy</li>
        <li>Firefox < 60</li>
        <li>Chrome < 60</li>
        <li>Safari < 12</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="required-features">Required Features</h2>
      <p class="docs-text">Karibase requires the following browser features:</p>
      <ul class="docs-list">
        <li>CSS Grid Layout</li>
        <li>CSS Custom Properties (CSS Variables)</li>
        <li>Flexbox</li>
        <li>ES6 JavaScript features</li>
        <li>Resize Observer API</li>
        <li>Intersection Observer API</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="polyfills">Polyfills</h2>
      <p class="docs-text">For older browsers, you may need polyfills:</p>
      <div class="docs-code-block">
        <pre><code>npm install @babel/polyfill
npm install whatwg-fetch</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/contents" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Contents</span>
      </router-link>
      <router-link to="/javascript" class="docs-next">
        <span>JavaScript</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrowsersDevices'
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

.docs-browser-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 16px;
  margin: 24px 0;
}

.docs-browser-item {
  padding: 20px;
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  text-align: center;
  transition: var(--docs-transition);
}

.docs-browser-item:hover {
  border-color: var(--docs-primary-color);
  transform: translateY(-2px);
}

.docs-browser-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.docs-browser-name {
  font-weight: 600;
  color: var(--docs-text-primary);
  margin-bottom: 4px;
}

.docs-browser-status {
  font-size: 12px;
  color: var(--docs-text-muted);
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
