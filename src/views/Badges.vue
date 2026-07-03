<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/components" class="docs-breadcrumb-link">Components</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Badges</span>
    </div>

    <h1 class="docs-heading">Badges</h1>
    <p class="docs-lead">Small labels and status indicators</p>

    <h2 class="docs-heading docs-heading-2" id="basic-badges">Basic Badges</h2>
    <p class="docs-text">Badges in different colors:</p>
    
    <div class="docs-preview">
      <span class="kb-badge kb-badge-primary">Primary</span>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;span class="kb-badge kb-badge-primary"&gt;Primary&lt;/span&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="badge-sizes">Badge Sizes</h2>
    <p class="docs-text">Badges in different sizes:</p>
    
    <div class="docs-preview">
      <span class="kb-badge kb-badge-primary kb-badge-lg">Large</span>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;span class="kb-badge kb-badge-primary kb-badge-lg"&gt;Large&lt;/span&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="pill-badges">Pill Badges</h2>
    <p class="docs-text">Rounded badge style:</p>
    
    <div class="docs-preview">
      <span class="kb-badge kb-badge-primary kb-badge-pill">Primary</span>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;span class="kb-badge kb-badge-primary kb-badge-pill"&gt;Primary&lt;/span&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="outline-badges">Outline Badges</h2>
    <p class="docs-text">Badges with outline style:</p>
    
    <div class="docs-preview">
      <span class="kb-badge kb-badge-outline kb-badge-outline-primary">Primary</span>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;span class="kb-badge kb-badge-outline kb-badge-outline-primary"&gt;Primary&lt;/span&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="badge-with-icon">Badges with Icons</h2>
    <p class="docs-text">Badges with icon content:</p>
    
    <div class="docs-preview">
      <span class="kb-badge kb-badge-primary">
        <i class="fas fa-check"></i>
        Verified
      </span>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;span class="kb-badge kb-badge-primary"&gt;
  &lt;i class="fas fa-check"&gt;&lt;/i&gt;
  Verified
&lt;/span&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="notification-badges">Notification Badges</h2>
    <p class="docs-text">Badges for notifications and counts:</p>
    
    <div class="docs-preview">
      <button class="kb-btn kb-btn-primary">
        <i class="fas fa-bell"></i>
        <span class="kb-badge kb-badge-danger kb-badge-notification">3</span>
      </button>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;button class="kb-btn kb-btn-primary"&gt;
  &lt;i class="fas fa-bell"&gt;&lt;/i&gt;
  &lt;span class="kb-badge kb-badge-danger kb-badge-notification"&gt;3&lt;/span&gt;
&lt;/button&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="status-badges">Status Badges</h2>
    <p class="docs-text">Status indicators with dots:</p>
    
    <div class="docs-preview">
      <span class="kb-badge kb-badge-status kb-badge-status-online">
        <span class="kb-badge-dot"></span>
        Online
      </span>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;span class="kb-badge kb-badge-status kb-badge-status-online"&gt;
  &lt;span class="kb-badge-dot"&gt;&lt;/span&gt;
  Online
&lt;/span&gt;</code></pre>
    </div>

    <div class="docs-next-prev">
      <router-link to="/components/charts" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Charts</span>
      </router-link>
      <router-link to="/components/avatars" class="docs-next">
        <span>Avatars</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Badges'
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

.kb-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 4px;
  color: white;
}

.kb-badge-sm {
  padding: 2px 8px;
  font-size: 11px;
}

.kb-badge-lg {
  padding: 6px 14px;
  font-size: 14px;
}

.kb-badge-primary {
  background: linear-gradient(135deg, var(--docs-primary-color), var(--docs-primary-accent));
}

.kb-badge-secondary {
  background-color: #6366f1;
}

.kb-badge-success {
  background-color: #10b981;
}

.kb-badge-danger {
  background-color: #ef4444;
}

.kb-badge-warning {
  background-color: #f59e0b;
}

.kb-badge-info {
  background-color: #3b82f6;
}

.kb-badge-pill {
  border-radius: 999px;
}

.kb-badge-outline {
  background-color: transparent;
  border: 1px solid;
}

.kb-badge-outline-primary {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}

.kb-badge-outline-success {
  border-color: #10b981;
  color: #10b981;
}

.kb-badge-outline-danger {
  border-color: #ef4444;
  color: #ef4444;
}

.kb-btn {
  position: relative;
}

.kb-badge-notification {
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  font-size: 11px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kb-badge-status {
  padding: 6px 12px;
  border-radius: 6px;
  background-color: var(--docs-bg-tertiary);
  color: var(--docs-text-primary);
}

.kb-badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.kb-badge-status-online .kb-badge-dot {
  background-color: #10b981;
}

.kb-badge-status-offline .kb-badge-dot {
  background-color: #6b7280;
}

.kb-badge-status-busy .kb-badge-dot {
  background-color: #ef4444;
}

.kb-badge-status-away .kb-badge-dot {
  background-color: #f59e0b;
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
