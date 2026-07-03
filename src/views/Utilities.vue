<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Utilities</span>
    </div>

    <h1 class="docs-heading">Utilities</h1>
    <p class="docs-lead">Helper classes for common styling needs</p>

    <h2 class="docs-heading docs-heading-2" id="spacing">Spacing</h2>
    <p class="docs-text">Margin and padding utilities:</p>
    
    <div class="docs-preview">
      <div class="kb-mb-4">
        <div class="kb-p-4 kb-bg-tertiary">
          Margin bottom 4, Padding 4
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-mb-4"&gt;
  &lt;div class="kb-p-4 kb-bg-tertiary"&gt;
    Content
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="text-utilities">Text Utilities</h2>
    <p class="docs-text">Text alignment, color, and size:</p>
    
    <div class="docs-preview">
      <p class="kb-text-center">Centered text</p>
      <p class="kb-text-primary">Primary color text</p>
      <p class="kb-text-lg">Large text</p>
      <p class="kb-text-muted">Muted text</p>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;p class="kb-text-center"&gt;Centered text&lt;/p&gt;
&lt;p class="kb-text-primary"&gt;Primary color text&lt;/p&gt;
&lt;p class="kb-text-lg"&gt;Large text&lt;/p&gt;
&lt;p class="kb-text-muted"&gt;Muted text&lt;/p&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="display">Display</h2>
    <p class="docs-text">Display utilities:</p>
    
    <div class="docs-preview">
      <div class="kb-d-flex kb-justify-between kb-align-center">
        <span>Flex item 1</span>
        <span>Flex item 2</span>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-d-flex kb-justify-between kb-align-center"&gt;
  &lt;span&gt;Flex item 1&lt;/span&gt;
  &lt;span&gt;Flex item 2&lt;/span&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="borders">Borders</h2>
    <p class="docs-text">Border utilities:</p>
    
    <div class="docs-preview">
      <div class="kb-border kb-border-primary kb-rounded kb-p-4">
        Bordered box
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-border kb-border-primary kb-rounded kb-p-4"&gt;
  Bordered box
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="backgrounds">Backgrounds</h2>
    <p class="docs-text">Background color utilities:</p>
    
    <div class="docs-preview">
      <div class="kb-bg-primary kb-text-white kb-p-4 kb-rounded mb-2">Primary background</div>
      <div class="kb-bg-secondary kb-p-4 kb-rounded mb-2">Secondary background</div>
      <div class="kb-bg-tertiary kb-p-4 kb-rounded">Tertiary background</div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-bg-primary kb-text-white kb-p-4 kb-rounded"&gt;
  Primary background
&lt;/div&gt;</code></pre>
    </div>

    <div class="docs-next-prev">
      <router-link to="/layout" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Layout</span>
      </router-link>
      <router-link to="/theming" class="docs-next">
        <span>Theming</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Utilities'
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

.docs-preview {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
  padding: 32px;
  margin: 24px 0;
}

.kb-mb-4 {
  margin-bottom: 16px;
}

.kb-p-4 {
  padding: 16px;
}

.kb-bg-tertiary {
  background-color: var(--docs-bg-tertiary);
  color: var(--docs-text-primary);
}

.kb-text-center {
  text-align: center;
}

.kb-text-primary {
  color: var(--docs-primary-color);
}

.kb-text-lg {
  font-size: 18px;
}

.kb-text-muted {
  color: var(--docs-text-muted);
}

.kb-d-flex {
  display: flex;
}

.kb-justify-between {
  justify-content: space-between;
}

.kb-align-center {
  align-items: center;
}

.kb-border {
  border: 1px solid var(--docs-border-color);
}

.kb-border-primary {
  border-color: var(--docs-primary-color);
}

.kb-rounded {
  border-radius: 8px;
}

.kb-bg-primary {
  background-color: var(--docs-primary-color);
  color: white;
}

.kb-text-white {
  color: white;
}

.kb-bg-secondary {
  background-color: var(--docs-bg-tertiary);
}

.mb-2 {
  margin-bottom: 8px;
}

.docs-code-block {
  background-color: var(--docs-bg-tertiary);
  border: 1px solid var(--docs-border-color);
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
  font-family: 'Inconsolata', monospace;
  font-size: 14px;
  color: var(--docs-text-primary);
  line-height: 1.6;
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
