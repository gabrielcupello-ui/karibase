<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/layout" class="docs-breadcrumb-link">Layout</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Columns</span>
    </div>

    <h1 class="docs-heading">Columns</h1>
    <p class="docs-lead">Column utilities in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-columns">Basic Columns</h2>
      <p class="docs-text">Create basic column layouts:</p>
      <div class="docs-example">
        <div class="kb-columns">
          <div class="kb-column">Column 1</div>
          <div class="kb-column">Column 2</div>
          <div class="kb-column">Column 3</div>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-columns"&gt;
  &lt;div class="kb-column"&gt;Column 1&lt;/div&gt;
  &lt;div class="kb-column"&gt;Column 2&lt;/div&gt;
  &lt;div class="kb-column"&gt;Column 3&lt;/div&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="column-sizes">Column Sizes</h2>
      <p class="docs-text">Control column sizes:</p>
      <div class="docs-example">
        <div class="kb-columns">
          <div class="kb-column kb-column-25">25%</div>
          <div class="kb-column kb-column-50">50%</div>
          <div class="kb-column kb-column-25">25%</div>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-columns"&gt;
  &lt;div class="kb-column kb-column-25"&gt;25%&lt;/div&gt;
  &lt;div class="kb-column kb-column-50"&gt;50%&lt;/div&gt;
  &lt;div class="kb-column kb-column-25"&gt;25%&lt;/div&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="responsive-columns">Responsive Columns</h2>
      <p class="docs-text">Responsive column layouts:</p>
      <div class="docs-example">
        <div class="kb-columns">
          <div class="kb-column kb-column-100 kb-column-md-50 kb-column-lg-33">
            Responsive column
          </div>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-columns"&gt;
  &lt;div class="kb-column kb-column-100 kb-column-md-50 kb-column-lg-33"&gt;
    Responsive column
  &lt;/div&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-next-prev">
      <router-link to="/layout/grid" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Grid</span>
      </router-link>
      <router-link to="/layout/gutters" class="docs-next">
        <span>Gutters</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import CodeViewer from '../components/CodeViewer.vue'

export default {
  name: 'LayoutColumns',
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

.docs-example {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  padding: 24px;
  margin: 16px 0 24px;
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
