<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/layout" class="docs-breadcrumb-link">Layout</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Containers</span>
    </div>

    <h1 class="docs-heading">Containers</h1>
    <p class="docs-lead">Container components in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Containers are the most basic layout element in Karibase. They center content with a maximum width 
        and add horizontal padding.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="default-container">Default Container</h2>
      <p class="docs-text">Use the default container class:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-container"&gt;
  &lt;!-- Content --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="responsive-containers">Responsive Containers</h2>
      <p class="docs-text">Use responsive container classes:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-container kb-container-sm"&gt;
  &lt;!-- Small container --&gt;
&lt;/div&gt;

&lt;div class="kb-container kb-container-md"&gt;
  &lt;!-- Medium container --&gt;
&lt;/div&gt;

&lt;div class="kb-container kb-container-lg"&gt;
  &lt;!-- Large container --&gt;
&lt;/div&gt;

&lt;div class="kb-container kb-container-xl"&gt;
  &lt;!-- Extra large container --&gt;
&lt;/div&gt;

&lt;div class="kb-container kb-container-fluid"&gt;
  &lt;!-- Full width container --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="container-widths">Container Widths</h2>
      <p class="docs-text">Container maximum widths:</p>
      <div class="docs-breakpoint-table">
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>Max Width</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>kb-container</code></td>
              <td>100%</td>
            </tr>
            <tr>
              <td><code>kb-container-sm</code></td>
              <td>540px</td>
            </tr>
            <tr>
              <td><code>kb-container-md</code></td>
              <td>720px</td>
            </tr>
            <tr>
              <td><code>kb-container-lg</code></td>
              <td>960px</td>
            </tr>
            <tr>
              <td><code>kb-container-xl</code></td>
              <td>1140px</td>
            </tr>
            <tr>
              <td><code>kb-container-fluid</code></td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/layout/breakpoints" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Breakpoints</span>
      </router-link>
      <router-link to="/layout/grid" class="docs-next">
        <span>Grid</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutContainers'
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

.docs-breakpoint-table {
  overflow-x: auto;
  margin: 24px 0;
}

.docs-breakpoint-table table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--docs-bg-secondary);
  border-radius: 8px;
  overflow: hidden;
}

.docs-breakpoint-table th,
.docs-breakpoint-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--docs-border-color);
}

.docs-breakpoint-table th {
  background-color: var(--docs-bg-tertiary);
  font-weight: 600;
  color: var(--docs-text-primary);
}

.docs-breakpoint-table td {
  color: var(--docs-text-secondary);
}

.docs-breakpoint-table code {
  background-color: var(--docs-bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
  font-size: 13px;
  color: var(--docs-primary-color);
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
