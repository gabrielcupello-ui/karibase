<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/forms" class="docs-breadcrumb-link">Forms</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Layout</span>
    </div>

    <h1 class="docs-heading">Layout</h1>
    <p class="docs-lead">Form layout utilities in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Form layout utilities help you organize form elements in a structured way. Use grid and spacing 
        utilities to create complex form layouts.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="form-grid">Form Grid</h2>
      <p class="docs-text">Use grid for form layout:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-grid"&gt;
  &lt;div class="kb-col-6"&gt;
    &lt;div class="kb-form-group"&gt;
      &lt;label class="kb-label"&gt;First name&lt;/label&gt;
      &lt;input type="text" class="kb-input"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="kb-col-6"&gt;
    &lt;div class="kb-form-group"&gt;
      &lt;label class="kb-label"&gt;Last name&lt;/label&gt;
      &lt;input type="text" class="kb-input"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="form-row">Form Row</h2>
      <p class="docs-text">Use form row for horizontal forms:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-row"&gt;
  &lt;div class="kb-col-7"&gt;
    &lt;input type="text" class="kb-input" placeholder="City"&gt;
  &lt;/div&gt;
  &lt;div class="kb-col-3"&gt;
    &lt;input type="text" class="kb-input" placeholder="State"&gt;
  &lt;/div&gt;
  &lt;div class="kb-col-2"&gt;
    &lt;input type="text" class="kb-input" placeholder="Zip"&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="horizontal-form">Horizontal Form</h2>
      <p class="docs-text">Horizontal form layout:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-group kb-row"&gt;
  &lt;label for="inputEmail" class="kb-col-sm-2 kb-label"&gt;Email&lt;/label&gt;
  &lt;div class="kb-col-sm-10"&gt;
    &lt;input type="email" class="kb-input" id="inputEmail"&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="inline-form">Inline Form</h2>
      <p class="docs-text">Inline form layout:</p>
      <div class="docs-code-block">
        <pre><code>&lt;form class="kb-form-inline"&gt;
  &lt;div class="kb-form-group"&gt;
    &lt;label for="inlineFormInputName" class="kb-visually-hidden"&gt;Name&lt;/label&gt;
    &lt;input type="text" class="kb-input kb-input-sm" id="inlineFormInputName" placeholder="Jane Doe"&gt;
  &lt;/div&gt;
  &lt;div class="kb-form-group"&gt;
    &lt;label for="inlineFormInputGroupUsername" class="kb-visually-hidden"&gt;Username&lt;/label&gt;
    &lt;div class="kb-input-group kb-input-group-sm"&gt;
      &lt;div class="kb-input-group-prepend"&gt;
        &lt;div class="kb-input-group-text"&gt;@&lt;/div&gt;
      &lt;/div&gt;
      &lt;input type="text" class="kb-input" id="inlineFormInputGroupUsername" placeholder="Username"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;button type="submit" class="kb-btn kb-btn-primary kb-btn-sm"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/forms/floating-labels" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Floating labels</span>
      </router-link>
      <router-link to="/forms/validation" class="docs-next">
        <span>Validation</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormsLayout'
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
