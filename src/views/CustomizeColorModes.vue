<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/customize" class="docs-breadcrumb-link">Customize</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Color modes</span>
    </div>

    <h1 class="docs-heading">Color modes</h1>
    <p class="docs-lead">Light and dark mode support in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Karibase includes built-in support for light and dark color modes. Users can switch between modes, 
        and the system can automatically detect the user's preference.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="enabling-dark-mode">Enabling Dark Mode</h2>
      <p class="docs-text">Add the dark mode CSS file:</p>
      <div class="docs-code-block">
        <pre><code>&lt;link rel="stylesheet" href="karibase/css/karibase-dark-mode.css"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="manual-toggle">Manual Toggle</h2>
      <p class="docs-text">Toggle dark mode manually:</p>
      <div class="docs-code-block">
        <pre><code>// Toggle dark mode
document.documentElement.setAttribute('mode', 'dark')

// Toggle light mode
document.documentElement.setAttribute('mode', 'light')</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="system-preference">System Preference</h2>
      <p class="docs-text">Detect system preference:</p>
      <div class="docs-code-block">
        <pre><code>// Detect system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.setAttribute('mode', 'dark')
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="customizing-dark-mode">Customizing Dark Mode</h2>
      <p class="docs-text">Override dark mode colors:</p>
      <div class="docs-code-block">
        <pre><code>[mode="dark"] {
  --kb-bg-primary: #1a1a1a;
  --kb-bg-secondary: #2a2a2a;
  --kb-bg-tertiary: #3a3a3a;
  --kb-text-primary: #ffffff;
  --kb-text-secondary: #cccccc;
  --kb-border-color: #444444;
}</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/customize/color" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Color</span>
      </router-link>
      <router-link to="/customize/components" class="docs-next">
        <span>Components</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizeColorModes'
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
