<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/components" class="docs-breadcrumb-link">Components</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Avatars</span>
    </div>

    <h1 class="docs-heading">Avatars</h1>
    <p class="docs-lead">User profile images and initials</p>

    <h2 class="docs-heading docs-heading-2" id="basic-avatars">Basic Avatars</h2>
    <p class="docs-text">Avatar images in different sizes:</p>
    
    <div class="docs-preview">
      <div class="kb-avatar kb-avatar-sm">
        <img src="https://i.pravatar.cc/150?img=1" alt="User">
      </div>
      <div class="kb-avatar">
        <img src="https://i.pravatar.cc/150?img=1" alt="User">
      </div>
      <div class="kb-avatar kb-avatar-lg">
        <img src="https://i.pravatar.cc/150?img=1" alt="User">
      </div>
      <div class="kb-avatar kb-avatar-xl">
        <img src="https://i.pravatar.cc/150?img=1" alt="User">
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-avatar kb-avatar-sm"&gt;
  &lt;img src="avatar.jpg" alt="User"&gt;
&lt;/div&gt;
&lt;div class="kb-avatar"&gt;
  &lt;img src="avatar.jpg" alt="User"&gt;
&lt;/div&gt;
&lt;div class="kb-avatar kb-avatar-lg"&gt;
  &lt;img src="avatar.jpg" alt="User"&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="avatar-shapes">Avatar Shapes</h2>
    <p class="docs-text">Avatars with different shapes:</p>
    
    <div class="docs-preview">
      <div class="kb-avatar kb-avatar-circle">
        <img src="https://i.pravatar.cc/150?img=2" alt="User">
      </div>
      <div class="kb-avatar kb-avatar-rounded">
        <img src="https://i.pravatar.cc/150?img=2" alt="User">
      </div>
      <div class="kb-avatar kb-avatar-square">
        <img src="https://i.pravatar.cc/150?img=2" alt="User">
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-avatar kb-avatar-circle"&gt;...&lt;/div&gt;
&lt;div class="kb-avatar kb-avatar-rounded"&gt;...&lt;/div&gt;
&lt;div class="kb-avatar kb-avatar-square"&gt;...&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="avatar-initials">Avatar with Initials</h2>
    <p class="docs-text">Avatars showing initials when no image is available:</p>
    
    <div class="docs-preview">
      <div class="kb-avatar kb-avatar-circle">
        <span class="kb-avatar-initials kb-avatar-initials-primary">JD</span>
      </div>
      <div class="kb-avatar kb-avatar-circle">
        <span class="kb-avatar-initials kb-avatar-initials-success">AB</span>
      </div>
      <div class="kb-avatar kb-avatar-circle">
        <span class="kb-avatar-initials kb-avatar-initials-warning">XY</span>
      </div>
      <div class="kb-avatar kb-avatar-circle">
        <span class="kb-avatar-initials kb-avatar-initials-danger">MZ</span>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-avatar kb-avatar-circle"&gt;
  &lt;span class="kb-avatar-initials kb-avatar-initials-primary"&gt;JD&lt;/span&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="avatar-with-status">Avatar with Status</h2>
    <p class="docs-text">Avatars with online status indicators:</p>
    
    <div class="docs-preview">
      <div class="kb-avatar kb-avatar-circle kb-avatar-with-status">
        <img src="https://i.pravatar.cc/150?img=3" alt="User">
        <span class="kb-avatar-status kb-avatar-status-online"></span>
      </div>
      <div class="kb-avatar kb-avatar-circle kb-avatar-with-status">
        <img src="https://i.pravatar.cc/150?img=4" alt="User">
        <span class="kb-avatar-status kb-avatar-status-busy"></span>
      </div>
      <div class="kb-avatar kb-avatar-circle kb-avatar-with-status">
        <img src="https://i.pravatar.cc/150?img=5" alt="User">
        <span class="kb-avatar-status kb-avatar-status-away"></span>
      </div>
      <div class="kb-avatar kb-avatar-circle kb-avatar-with-status">
        <img src="https://i.pravatar.cc/150?img=6" alt="User">
        <span class="kb-avatar-status kb-avatar-status-offline"></span>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-avatar kb-avatar-circle kb-avatar-with-status"&gt;
  &lt;img src="avatar.jpg" alt="User"&gt;
  &lt;span class="kb-avatar-status kb-avatar-status-online"&gt;&lt;/span&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="avatar-group">Avatar Group</h2>
    <p class="docs-text">Stacked avatar groups:</p>
    
    <div class="docs-preview">
      <div class="kb-avatar-group">
        <div class="kb-avatar kb-avatar-circle kb-avatar-sm">
          <img src="https://i.pravatar.cc/150?img=7" alt="User">
        </div>
        <div class="kb-avatar kb-avatar-circle kb-avatar-sm">
          <img src="https://i.pravatar.cc/150?img=8" alt="User">
        </div>
        <div class="kb-avatar kb-avatar-circle kb-avatar-sm">
          <img src="https://i.pravatar.cc/150?img=9" alt="User">
        </div>
        <div class="kb-avatar kb-avatar-circle kb-avatar-sm">
          <img src="https://i.pravatar.cc/150?img=10" alt="User">
        </div>
        <div class="kb-avatar kb-avatar-circle kb-avatar-sm">
          <span class="kb-avatar-initials kb-avatar-initials-secondary">+5</span>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-avatar-group"&gt;
  &lt;div class="kb-avatar kb-avatar-circle kb-avatar-sm"&gt;
    &lt;img src="avatar1.jpg" alt="User"&gt;
  &lt;/div&gt;
  &lt;div class="kb-avatar kb-avatar-circle kb-avatar-sm"&gt;
    &lt;img src="avatar2.jpg" alt="User"&gt;
  &lt;/div&gt;
  &lt;div class="kb-avatar kb-avatar-circle kb-avatar-sm"&gt;
    &lt;span class="kb-avatar-initials"&gt;+5&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="docs-next-prev">
      <router-link to="/components/badges" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Badges</span>
      </router-link>
      <router-link to="/components/dropdowns" class="docs-next">
        <span>Dropdowns</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Avatars'
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
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
}

.kb-avatar {
  position: relative;
  overflow: hidden;
  background-color: var(--docs-bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.kb-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.kb-avatar-sm {
  width: 32px;
  height: 32px;
}

.kb-avatar {
  width: 40px;
  height: 40px;
}

.kb-avatar-lg {
  width: 48px;
  height: 48px;
}

.kb-avatar-xl {
  width: 64px;
  height: 64px;
}

.kb-avatar-circle {
  border-radius: 50%;
}

.kb-avatar-rounded {
  border-radius: 8px;
}

.kb-avatar-square {
  border-radius: 0;
}

.kb-avatar-initials {
  font-size: 14px;
  font-weight: 700;
  color: white;
}

.kb-avatar-initials-primary {
  background: linear-gradient(135deg, var(--docs-primary-color), var(--docs-primary-accent));
}

.kb-avatar-initials-success {
  background-color: #10b981;
}

.kb-avatar-initials-warning {
  background-color: #f59e0b;
}

.kb-avatar-initials-danger {
  background-color: #ef4444;
}

.kb-avatar-initials-secondary {
  background-color: #6366f1;
}

.kb-avatar-with-status {
  display: inline-block;
}

.kb-avatar-status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  border: 2px solid var(--docs-bg-secondary);
  border-radius: 50%;
}

.kb-avatar-status-online {
  background-color: #10b981;
}

.kb-avatar-status-busy {
  background-color: #ef4444;
}

.kb-avatar-status-away {
  background-color: #f59e0b;
}

.kb-avatar-status-offline {
  background-color: #6b7280;
}

.kb-avatar-group {
  display: flex;
  align-items: center;
}

.kb-avatar-group .kb-avatar {
  margin-left: -8px;
  border: 2px solid var(--docs-bg-secondary);
}

.kb-avatar-group .kb-avatar:first-child {
  margin-left: 0;
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
