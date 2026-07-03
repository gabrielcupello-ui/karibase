<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/forms" class="docs-breadcrumb-link">Forms</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Range</span>
    </div>

    <h1 class="docs-heading">Range</h1>
    <p class="docs-lead">Range input components in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Range inputs are used for selecting a value from a range. They are styled with the .kb-range class 
        and can be customized with min, max, and step attributes.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-range">Basic Range</h2>
      <p class="docs-text">Basic range input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;label for="formRange" class="kb-label"&gt;Example range&lt;/label&gt;
&lt;input type="range" class="kb-range" id="formRange"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="disabled-range">Disabled Range</h2>
      <p class="docs-text">Disabled range input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;label for="disabledRange" class="kb-label"&gt;Disabled range&lt;/label&gt;
&lt;input type="range" class="kb-range" id="disabledRange" disabled&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="min-max">Min and Max</h2>
      <p class="docs-text">Set min and max values:</p>
      <div class="docs-code-block">
        <pre><code>&lt;label for="minMaxRange" class="kb-label"&gt;Min and max&lt;/label&gt;
&lt;input type="range" class="kb-range" id="minMaxRange" min="0" max="10"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="steps">Steps</h2>
      <p class="docs-text">Set step increments:</p>
      <div class="docs-code-block">
        <pre><code>&lt;label for="stepRange" class="kb-label"&gt;Steps&lt;/label&gt;
&lt;input type="range" class="kb-range" id="stepRange" min="0" max="100" step="10"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/forms/checks-radios" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Checks & radios</span>
      </router-link>
      <router-link to="/forms/input-group" class="docs-next">
        <span>Input group</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormsRange'
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
