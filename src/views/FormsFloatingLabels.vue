<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/forms" class="docs-breadcrumb-link">Forms</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Floating labels</span>
    </div>

    <h1 class="docs-heading">Floating labels</h1>
    <p class="docs-lead">Floating label components in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Floating labels are labels that float above the input when the input has value or is focused. 
        They provide a clean and modern form experience.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-floating">Basic Floating Label</h2>
      <p class="docs-text">Basic floating label:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;input type="text" class="kb-input" id="floatingInput" placeholder="Name"&gt;
  &lt;label for="floatingInput"&gt;Name&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="value-set">Value Set</h2>
      <p class="docs-text">Floating label with value set:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;input type="text" class="kb-input" id="floatingInput" placeholder="Name" value="John"&gt;
  &lt;label for="floatingInput"&gt;Name&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="text-input">Text Input</h2>
      <p class="docs-text">Floating label with text input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;input type="text" class="kb-input" id="floatingText" placeholder="Text"&gt;
  &lt;label for="floatingText"&gt;Text&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="password">Password</h2>
      <p class="docs-text">Floating label with password input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;input type="password" class="kb-input" id="floatingPassword" placeholder="Password"&gt;
  &lt;label for="floatingPassword"&gt;Password&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="textarea">Textarea</h2>
      <p class="docs-text">Floating label with textarea:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;textarea class="kb-input" id="floatingTextarea" placeholder="Comments"&gt;&lt;/textarea&gt;
  &lt;label for="floatingTextarea"&gt;Comments&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="select">Select</h2>
      <p class="docs-text">Floating label with select:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;select class="kb-select" id="floatingSelect"&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value="1"&gt;One&lt;/option&gt;
    &lt;option value="2"&gt;Two&lt;/option&gt;
  &lt;/select&gt;
  &lt;label for="floatingSelect"&gt;Works with selects&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/forms/input-group" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Input group</span>
      </router-link>
      <router-link to="/forms/layout" class="docs-next">
        <span>Layout</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormsFloatingLabels'
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
