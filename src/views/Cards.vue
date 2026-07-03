<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/components" class="docs-breadcrumb-link">Components</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Cards</span>
    </div>

    <h1 class="docs-heading">Cards</h1>
    <p class="docs-lead">Container components for content organization</p>

    <h2 class="docs-heading docs-heading-2" id="basic-card">Basic Card</h2>
    <p class="docs-text">A simple card with header, body, and footer:</p>
    
    <div class="docs-preview">
      <div class="kb-card">
        <div class="kb-card-header">
          <h3 class="kb-card-title">Card Title</h3>
        </div>
        <div class="kb-card-body">
          <p class="kb-text">This is the card body content. You can put any content here.</p>
        </div>
        <div class="kb-card-footer">
          <button class="kb-btn kb-btn-primary">Action</button>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-card"&gt;
  &lt;div class="kb-card-header"&gt;
    &lt;h3 class="kb-card-title"&gt;Card Title&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="kb-card-body"&gt;
    &lt;p class="kb-text"&gt;Card content&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="kb-card-footer"&gt;
    &lt;button class="kb-btn kb-btn-primary"&gt;Action&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="card-variants">Card Variants</h2>
    <p class="docs-text">Cards with different styles:</p>
    
    <div class="docs-preview">
      <div class="kb-card kb-card-primary">
        <div class="kb-card-header">
          <h3 class="kb-card-title">Primary Card</h3>
        </div>
        <div class="kb-card-body">
          <p class="kb-text">Primary styled card</p>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-card kb-card-primary"&gt;
  &lt;div class="kb-card-header"&gt;
    &lt;h3 class="kb-card-title"&gt;Primary Card&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="kb-card-body"&gt;
    &lt;p class="kb-text"&gt;Primary styled card&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="card-with-image">Card with Image</h2>
    <p class="docs-text">Card with an image section:</p>
    
    <div class="docs-preview">
      <div class="kb-card">
        <div class="kb-card-image">
          <div class="kb-card-image-placeholder">Image</div>
        </div>
        <div class="kb-card-body">
          <h3 class="kb-card-title">Card with Image</h3>
          <p class="kb-text">This card includes an image section at the top.</p>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-card"&gt;
  &lt;div class="kb-card-image"&gt;
    &lt;img src="image.jpg" alt="Card image"&gt;
  &lt;/div&gt;
  &lt;div class="kb-card-body"&gt;
    &lt;h3 class="kb-card-title"&gt;Title&lt;/h3&gt;
    &lt;p class="kb-text"&gt;Content&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="docs-next-prev">
      <router-link to="/components/buttons" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Buttons</span>
      </router-link>
      <router-link to="/components/forms" class="docs-next">
        <span>Forms</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards'
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.kb-card {
  background-color: var(--docs-bg-primary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
  overflow: hidden;
  max-width: 300px;
}

.kb-card-header {
  padding: 16px;
  border-bottom: 1px solid var(--docs-border-color);
}

.kb-card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--docs-text-primary);
  margin: 0;
}

.kb-card-body {
  padding: 16px;
}

.kb-text {
  font-size: 14px;
  color: var(--docs-text-secondary);
  margin: 0;
  line-height: 1.6;
}

.kb-card-footer {
  padding: 16px;
  border-top: 1px solid var(--docs-border-color);
  display: flex;
  gap: 8px;
}

.kb-card-image-placeholder {
  width: 100%;
  height: 150px;
  background-color: var(--docs-bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--docs-text-muted);
  font-size: 14px;
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
