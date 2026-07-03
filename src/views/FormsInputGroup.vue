<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/forms" class="docs-breadcrumb-link">Forms</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Input group</span>
    </div>

    <h1 class="docs-heading">Input group</h1>
    <p class="docs-lead">Input group components in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Input groups allow you to prepend and append text or buttons to text-based inputs. They are useful 
        for adding context to form inputs.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-input-group">Basic Input Group</h2>
      <p class="docs-text">Basic input group with text:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-input-group"&gt;
  &lt;span class="kb-input-group-text"&gt;@&lt;/span&gt;
  &lt;input type="text" class="kb-input" placeholder="Username"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="append">Append</h2>
      <p class="docs-text">Input group with appended text:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-input-group"&gt;
  &lt;input type="text" class="kb-input" placeholder="Recipient's username"&gt;
  &lt;span class="kb-input-group-text"&gt;@example.com&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="buttons">Buttons</h2>
      <p class="docs-text">Input group with buttons:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-input-group"&gt;
  &lt;button class="kb-btn kb-btn-outline-secondary" type="button"&gt;Button&lt;/button&gt;
  &lt;input type="text" class="kb-input" placeholder=""&gt;
  &lt;button class="kb-btn kb-btn-outline-secondary" type="button"&gt;Button&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="dropdowns">Dropdowns</h2>
      <p class="docs-text">Input group with dropdown:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-input-group"&gt;
  &lt;button class="kb-btn kb-btn-outline-secondary dropdown-toggle" type="button"&gt;
    Dropdown
  &lt;/button&gt;
  &lt;input type="text" class="kb-input" placeholder=""&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="sizing">Sizing</h2>
      <p class="docs-text">Input group sizing:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-input-group kb-input-group-sm"&gt;
  &lt;!-- Small input group --&gt;
&lt;/div&gt;

&lt;div class="kb-input-group"&gt;
  &lt;!-- Default input group --&gt;
&lt;/div&gt;

&lt;div class="kb-input-group kb-input-group-lg"&gt;
  &lt;!-- Large input group --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/forms/range" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Range</span>
      </router-link>
      <router-link to="/forms/floating-labels" class="docs-next">
        <span>Floating labels</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormsInputGroup'
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
