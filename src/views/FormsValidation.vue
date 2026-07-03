<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/forms" class="docs-breadcrumb-link">Forms</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Validation</span>
    </div>

    <h1 class="docs-heading">Validation</h1>
    <p class="docs-lead">Form validation styles in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Karibase provides validation styles for form controls. Use these styles to provide feedback to users 
        about the validity of their input.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="valid-inputs">Valid Inputs</h2>
      <p class="docs-text">Valid input styles:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-group"&gt;
  &lt;label for="validationServer01" class="kb-label"&gt;Username&lt;/label&gt;
  &lt;input type="text" class="kb-input kb-is-valid" id="validationServer01" value="Mark"&gt;
  &lt;div class="kb-valid-feedback"&gt;Looks good!&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="invalid-inputs">Invalid Inputs</h2>
      <p class="docs-text">Invalid input styles:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-group"&gt;
  &lt;label for="validationServer02" class="kb-label"&gt;Password&lt;/label&gt;
  &lt;input type="password" class="kb-input kb-is-invalid" id="validationServer02"&gt;
  &lt;div class="kb-invalid-feedback"&gt;Please choose a username.&lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="tooltips">Tooltips</h2>
      <p class="docs-text">Validation with tooltips:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-group position-relative"&gt;
  &lt;label for="validationTooltip01" class="kb-label"&gt;Username&lt;/label&gt;
  &lt;input type="text" class="kb-input kb-is-invalid" id="validationTooltip01"&gt;
  &lt;div class="kb-invalid-tooltip"&gt;
    Please choose a unique and valid username.
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="custom-validation">Custom Validation</h2>
      <p class="docs-text">Custom validation styles:</p>
      <div class="docs-code-block">
        <pre><code>&lt;form class="kb-was-validated"&gt;
  &lt;div class="kb-form-group"&gt;
    &lt;label for="validationCustom01" class="kb-label"&gt;First name&lt;/label&gt;
    &lt;input type="text" class="kb-input" id="validationCustom01" required&gt;
    &lt;div class="kb-valid-feedback"&gt;Looks good!&lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="kb-btn kb-btn-primary" type="submit"&gt;Submit form&lt;/button&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/forms/layout" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Layout</span>
      </router-link>
      <router-link to="/components/accordion" class="docs-next">
        <span>Components</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormsValidation'
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
