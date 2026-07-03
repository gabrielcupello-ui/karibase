<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Download</span>
    </div>

    <h1 class="docs-heading">Download</h1>
    <p class="docs-lead">Download Karibase CSS Framework</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="cdn-links">CDN Links</h2>
      <p class="docs-text">Use Karibase directly from CDN:</p>
      <CodeViewer title="HTML">
&lt;!-- CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/karibase@2.0.0/css/karibase.css"&gt;

&lt;!-- Minified CSS --&gt;
&lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/karibase@2.0.0/css/karibase.min.css"&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="package-managers">Package Managers</h2>
      <p class="docs-text">Install via package manager:</p>
      <CodeViewer title="Terminal">
# npm
npm install karibase

# yarn
yarn add karibase

# pnpm
pnpm add karibase
      </CodeViewer>
    </div>

    <div class="docs-next-prev">
      <router-link to="/getting-started" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Getting Started</span>
      </router-link>
      <router-link to="/contents" class="docs-next">
        <span>Contents</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import CodeViewer from '../components/CodeViewer.vue'

export default {
  name: 'Download',
  components: {
    CodeViewer
  }
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
  font-size: 40px;
  font-weight: 800;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
}

.docs-heading-2 {
  font-size: 28px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 16px;
}

.docs-lead {
  font-size: 20px;
  color: var(--docs-text-secondary);
  line-height: 1.6;
  margin: 0 0 24px;
}

.docs-text {
  font-size: 16px;
  color: var(--docs-text-secondary);
  line-height: 1.8;
  margin: 0 0 16px;
}

.docs-section {
  margin-bottom: 48px;
}


.docs-next-prev {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  padding-top: 24px;
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
  font-weight: 600;
  transition: var(--docs-transition);
}

.docs-prev:hover,
.docs-next:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}
</style>
