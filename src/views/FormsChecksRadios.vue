<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/forms" class="docs-breadcrumb-link">Forms</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Checks & radios</span>
    </div>

    <h1 class="docs-heading">Checks & radios</h1>
    <p class="docs-lead">Checkboxes and radio buttons in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="checkboxes">Checkboxes</h2>
      <p class="docs-text">Checkbox components:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="check1"&gt;
  &lt;label class="kb-form-check-label" for="check1"&gt;
    Default checkbox
  &lt;/label&gt;
&lt;/div&gt;

&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="check2" checked&gt;
  &lt;label class="kb-form-check-label" for="check2"&gt;
    Checked checkbox
  &lt;/label&gt;
&lt;/div&gt;

&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="check3" disabled&gt;
  &lt;label class="kb-form-check-label" for="check3"&gt;
    Disabled checkbox
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="radios">Radios</h2>
      <p class="docs-text">Radio button components:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="radio" name="radio1" id="radio1"&gt;
  &lt;label class="kb-form-check-label" for="radio1"&gt;
    Default radio
  &lt;/label&gt;
&lt;/div&gt;

&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="radio" name="radio1" id="radio2" checked&gt;
  &lt;label class="kb-form-check-label" for="radio2"&gt;
    Default checked radio
  &lt;/label&gt;
&lt;/div&gt;

&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="radio" name="radio1" id="radio3" disabled&gt;
  &lt;label class="kb-form-check-label" for="radio3"&gt;
    Disabled radio
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="inline">Inline</h2>
      <p class="docs-text">Inline checkboxes and radios:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-check kb-form-check-inline"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="inline1"&gt;
  &lt;label class="kb-form-check-label" for="inline1"&gt;1&lt;/label&gt;
&lt;/div&gt;

&lt;div class="kb-form-check kb-form-check-inline"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="inline2"&gt;
  &lt;label class="kb-form-check-label" for="inline2"&gt;2&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="switches">Switches</h2>
      <p class="docs-text">Toggle switches:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-check kb-form-switch"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="switch1"&gt;
  &lt;label class="kb-form-check-label" for="switch1"&gt;
    Toggle switch
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/forms/select" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Select</span>
      </router-link>
      <router-link to="/forms/range" class="docs-next">
        <span>Range</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormsChecksRadios'
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
