<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/forms" class="docs-breadcrumb-link">Forms</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Form control</span>
    </div>

    <h1 class="docs-heading">Form control</h1>
    <p class="docs-lead">Textual form controls in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Form controls are textual input types like text, password, email, number, url, tel, search, and more. 
        They are styled with the .kb-input class.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-input">Basic Input</h2>
      <p class="docs-text">Basic form control:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-group"&gt;
  &lt;label for="exampleInputEmail1" class="kb-label"&gt;Email address&lt;/label&gt;
  &lt;input type="email" class="kb-input" id="exampleInputEmail1" placeholder="name@example.com"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="input-types">Input Types</h2>
      <p class="docs-text">Supported input types:</p>
      <div class="docs-code-block">
        <pre><code>&lt;input type="text" class="kb-input" placeholder="Text"&gt;
&lt;input type="password" class="kb-input" placeholder="Password"&gt;
&lt;input type="email" class="kb-input" placeholder="Email"&gt;
&lt;input type="number" class="kb-input" placeholder="Number"&gt;
&lt;input type="url" class="kb-input" placeholder="URL"&gt;
&lt;input type="tel" class="kb-input" placeholder="Phone"&gt;
&lt;input type="search" class="kb-input" placeholder="Search"&gt;
&lt;input type="date" class="kb-input"&gt;
&lt;input type="time" class="kb-input"&gt;
&lt;input type="color" class="kb-input"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="input-sizes">Input Sizes</h2>
      <p class="docs-text">Control input sizes:</p>
      <div class="docs-code-block">
        <pre><code>&lt;input class="kb-input kb-input-sm" placeholder="Small"&gt;
&lt;input class="kb-input" placeholder="Default"&gt;
&lt;input class="kb-input kb-input-lg" placeholder="Large"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="readonly">Readonly</h2>
      <p class="docs-text">Readonly input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;input class="kb-input" type="text" placeholder="Readonly input" readonly&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="disabled">Disabled</h2>
      <p class="docs-text">Disabled input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;input class="kb-input" type="text" placeholder="Disabled input" disabled&gt;</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/forms/overview" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Overview</span>
      </router-link>
      <router-link to="/forms/select" class="docs-next">
        <span>Select</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormsFormControl'
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
