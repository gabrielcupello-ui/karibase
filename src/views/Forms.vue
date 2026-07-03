<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/components" class="docs-breadcrumb-link">Components</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Forms</span>
    </div>

    <h1 class="docs-heading">Forms</h1>
    <p class="docs-lead">Input fields and form controls</p>

    <h2 class="docs-heading docs-heading-2" id="text-inputs">Text Inputs</h2>
    <p class="docs-text">Basic text input fields:</p>
    
    <div class="docs-preview">
      <div class="kb-form-group">
        <label class="kb-label">Name</label>
        <input type="text" class="kb-input" placeholder="Enter your name">
      </div>
      <div class="kb-form-group">
        <label class="kb-label">Email</label>
        <input type="email" class="kb-input" placeholder="Enter your email">
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-form-group"&gt;
  &lt;label class="kb-label"&gt;Name&lt;/label&gt;
  &lt;input type="text" class="kb-input" placeholder="Enter your name"&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="input-states">Input States</h2>
    <p class="docs-text">Different input states:</p>
    
    <div class="docs-preview">
      <div class="kb-form-group">
        <label class="kb-label">Default</label>
        <input type="text" class="kb-input" placeholder="Default input">
      </div>
      <div class="kb-form-group">
        <label class="kb-label">Success</label>
        <input type="text" class="kb-input kb-input-success" value="Valid input">
      </div>
      <div class="kb-form-group">
        <label class="kb-label">Error</label>
        <input type="text" class="kb-input kb-input-error" value="Invalid input">
      </div>
      <div class="kb-form-group">
        <label class="kb-label">Disabled</label>
        <input type="text" class="kb-input" disabled value="Disabled input">
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;input type="text" class="kb-input"&gt;
&lt;input type="text" class="kb-input kb-input-success"&gt;
&lt;input type="text" class="kb-input kb-input-error"&gt;
&lt;input type="text" class="kb-input" disabled&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="textarea">Textarea</h2>
    <p class="docs-text">Multi-line text input:</p>
    
    <div class="docs-preview">
      <div class="kb-form-group">
        <label class="kb-label">Message</label>
        <textarea class="kb-textarea" rows="4" placeholder="Enter your message"></textarea>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-form-group"&gt;
  &lt;label class="kb-label"&gt;Message&lt;/label&gt;
  &lt;textarea class="kb-textarea" rows="4"&gt;&lt;/textarea&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="select">Select Dropdown</h2>
    <p class="docs-text">Select dropdown:</p>
    
    <div class="docs-preview">
      <div class="kb-form-group">
        <label class="kb-label">Country</label>
        <select class="kb-select">
          <option>Select a country</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-form-group"&gt;
  &lt;label class="kb-label"&gt;Country&lt;/label&gt;
  &lt;select class="kb-select"&gt;
    &lt;option&gt;Select a country&lt;/option&gt;
    &lt;option&gt;United States&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="checkboxes">Checkboxes</h2>
    <p class="docs-text">Checkbox inputs:</p>
    
    <div class="docs-preview">
      <label class="kb-checkbox">
        <input type="checkbox">
        <span>Option 1</span>
      </label>
      <label class="kb-checkbox">
        <input type="checkbox" checked>
        <span>Option 2</span>
      </label>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;label class="kb-checkbox"&gt;
  &lt;input type="checkbox"&gt;
  &lt;span&gt;Option 1&lt;/span&gt;
&lt;/label&gt;</code></pre>
    </div>

    <div class="docs-next-prev">
      <router-link to="/components/cards" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Cards</span>
      </router-link>
      <router-link to="/components/tables" class="docs-next">
        <span>Tables</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Forms'
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
  flex-direction: column;
  gap: 16px;
}

.kb-form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.kb-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--docs-text-primary);
}

.kb-input,
.kb-textarea,
.kb-select {
  padding: 10px 12px;
  border: 1px solid var(--docs-border-color);
  border-radius: 6px;
  font-size: 14px;
  background-color: var(--docs-bg-primary);
  color: var(--docs-text-primary);
  transition: var(--docs-transition);
}

.kb-input:focus,
.kb-textarea:focus,
.kb-select:focus {
  outline: none;
  border-color: var(--docs-primary-color);
  box-shadow: 0 0 0 3px rgba(234, 40, 69, 0.1);
}

.kb-input-success {
  border-color: #10b981;
}

.kb-input-error {
  border-color: #ef4444;
}

.kb-textarea {
  resize: vertical;
  min-height: 100px;
}

.kb-select {
  cursor: pointer;
}

.kb-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: var(--docs-text-primary);
}

.kb-checkbox input {
  width: 16px;
  height: 16px;
  accent-color: var(--docs-primary-color);
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
