<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/components" class="docs-breadcrumb-link">Components</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Charts</span>
    </div>

    <h1 class="docs-heading">Charts</h1>
    <p class="docs-lead">Data visualization components</p>

    <h2 class="docs-heading docs-heading-2" id="progress-bars">Progress Bars</h2>
    <p class="docs-text">Progress indicators for loading states:</p>
    
    <div class="docs-preview">
      <div class="kb-progress">
        <div class="kb-progress-bar kb-progress-bar-primary" style="width: 25%"></div>
      </div>
      <div class="kb-progress">
        <div class="kb-progress-bar kb-progress-bar-success" style="width: 50%"></div>
      </div>
      <div class="kb-progress">
        <div class="kb-progress-bar kb-progress-bar-warning" style="width: 75%"></div>
      </div>
      <div class="kb-progress">
        <div class="kb-progress-bar kb-progress-bar-danger" style="width: 90%"></div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-progress"&gt;
  &lt;div class="kb-progress-bar kb-progress-bar-primary" style="width: 25%"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="progress-sizes">Progress Sizes</h2>
    <p class="docs-text">Progress bars in different sizes:</p>
    
    <div class="docs-preview">
      <div class="kb-progress kb-progress-sm">
        <div class="kb-progress-bar kb-progress-bar-primary" style="width: 50%"></div>
      </div>
      <div class="kb-progress">
        <div class="kb-progress-bar kb-progress-bar-primary" style="width: 50%"></div>
      </div>
      <div class="kb-progress kb-progress-lg">
        <div class="kb-progress-bar kb-progress-bar-primary" style="width: 50%"></div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-progress kb-progress-sm"&gt;...&lt;/div&gt;
&lt;div class="kb-progress"&gt;...&lt;/div&gt;
&lt;div class="kb-progress kb-progress-lg"&gt;...&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="striped-progress">Striped Progress</h2>
    <p class="docs-text">Progress bars with striped animation:</p>
    
    <div class="docs-preview">
      <div class="kb-progress">
        <div class="kb-progress-bar kb-progress-bar-primary kb-progress-bar-striped" style="width: 50%"></div>
      </div>
      <div class="kb-progress">
        <div class="kb-progress-bar kb-progress-bar-success kb-progress-bar-striped kb-progress-bar-animated" style="width: 75%"></div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-progress"&gt;
  &lt;div class="kb-progress-bar kb-progress-bar-primary kb-progress-bar-striped" style="width: 50%"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="circular-progress">Circular Progress</h2>
    <p class="docs-text">Circular progress indicators:</p>
    
    <div class="docs-preview">
      <div class="kb-circular-progress kb-circular-progress-sm">
        <svg viewBox="0 0 36 36">
          <path class="kb-circular-progress-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path class="kb-circular-progress-bar" stroke-dasharray="25, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
        <span class="kb-circular-progress-text">25%</span>
      </div>
      <div class="kb-circular-progress">
        <svg viewBox="0 0 36 36">
          <path class="kb-circular-progress-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path class="kb-circular-progress-bar" stroke-dasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
        <span class="kb-circular-progress-text">50%</span>
      </div>
      <div class="kb-circular-progress kb-circular-progress-lg">
        <svg viewBox="0 0 36 36">
          <path class="kb-circular-progress-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          <path class="kb-circular-progress-bar" stroke-dasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
        <span class="kb-circular-progress-text">75%</span>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-circular-progress"&gt;
  &lt;svg viewBox="0 0 36 36"&gt;
    &lt;path class="kb-circular-progress-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /&gt;
    &lt;path class="kb-circular-progress-bar" stroke-dasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /&gt;
  &lt;/svg&gt;
  &lt;span class="kb-circular-progress-text"&gt;50%&lt;/span&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="stat-cards">Stat Cards</h2>
    <p class="docs-text">Cards for displaying statistics:</p>
    
    <div class="docs-preview">
      <div class="kb-stat-card">
        <div class="kb-stat-icon kb-stat-icon-primary">
          <i class="fas fa-users"></i>
        </div>
        <div class="kb-stat-content">
          <div class="kb-stat-value">12,345</div>
          <div class="kb-stat-label">Total Users</div>
        </div>
        <div class="kb-stat-change kb-stat-change-positive">
          <i class="fas fa-arrow-up"></i>
          <span>12%</span>
        </div>
      </div>

      <div class="kb-stat-card">
        <div class="kb-stat-icon kb-stat-icon-success">
          <i class="fas fa-dollar-sign"></i>
        </div>
        <div class="kb-stat-content">
          <div class="kb-stat-value">$45,678</div>
          <div class="kb-stat-label">Revenue</div>
        </div>
        <div class="kb-stat-change kb-stat-change-positive">
          <i class="fas fa-arrow-up"></i>
          <span>8%</span>
        </div>
      </div>

      <div class="kb-stat-card">
        <div class="kb-stat-icon kb-stat-icon-warning">
          <i class="fas fa-shopping-cart"></i>
        </div>
        <div class="kb-stat-content">
          <div class="kb-stat-value">1,234</div>
          <div class="kb-stat-label">Orders</div>
        </div>
        <div class="kb-stat-change kb-stat-change-negative">
          <i class="fas fa-arrow-down"></i>
          <span>3%</span>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-stat-card"&gt;
  &lt;div class="kb-stat-icon kb-stat-icon-primary"&gt;
    &lt;i class="fas fa-users"&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div class="kb-stat-content"&gt;
    &lt;div class="kb-stat-value"&gt;12,345&lt;/div&gt;
    &lt;div class="kb-stat-label"&gt;Total Users&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="kb-stat-change kb-stat-change-positive"&gt;
    &lt;i class="fas fa-arrow-up"&gt;&lt;/i&gt;
    &lt;span&gt;12%&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="docs-next-prev">
      <router-link to="/components/alerts" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Alerts</span>
      </router-link>
      <router-link to="/components/badges" class="docs-next">
        <span>Badges</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Charts'
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

.kb-progress {
  width: 100%;
  height: 8px;
  background-color: var(--docs-bg-tertiary);
  border-radius: 4px;
  overflow: hidden;
}

.kb-progress-sm {
  height: 4px;
}

.kb-progress-lg {
  height: 12px;
}

.kb-progress-bar {
  height: 100%;
  border-radius: 4px;
  transition: width 0.3s ease;
}

.kb-progress-bar-primary {
  background: linear-gradient(135deg, var(--docs-primary-color), var(--docs-primary-accent));
}

.kb-progress-bar-success {
  background-color: #10b981;
}

.kb-progress-bar-warning {
  background-color: #f59e0b;
}

.kb-progress-bar-danger {
  background-color: #ef4444;
}

.kb-progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: 1rem 1rem;
}

.kb-progress-bar-animated {
  animation: progress-stripes 1s linear infinite;
}

@keyframes progress-stripes {
  from {
    background-position: 1rem 0;
  }
  to {
    background-position: 0 0;
  }
}

.kb-circular-progress {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
}

.kb-circular-progress-sm {
  width: 50px;
  height: 50px;
}

.kb-circular-progress-lg {
  width: 120px;
  height: 120px;
}

.kb-circular-progress svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.kb-circular-progress-bg {
  fill: none;
  stroke: var(--docs-bg-tertiary);
  stroke-width: 3;
}

.kb-circular-progress-bar {
  fill: none;
  stroke: var(--docs-primary-color);
  stroke-width: 3;
  stroke-linecap: round;
  transition: stroke-dasharray 0.3s ease;
}

.kb-circular-progress-text {
  position: absolute;
  font-size: 14px;
  font-weight: 700;
  color: var(--docs-text-primary);
}

.kb-circular-progress-sm .kb-circular-progress-text {
  font-size: 10px;
}

.kb-circular-progress-lg .kb-circular-progress-text {
  font-size: 18px;
}

.kb-stat-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background-color: var(--docs-bg-primary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
}

.kb-stat-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  font-size: 20px;
  color: white;
}

.kb-stat-icon-primary {
  background: linear-gradient(135deg, var(--docs-primary-color), var(--docs-primary-accent));
}

.kb-stat-icon-success {
  background-color: #10b981;
}

.kb-stat-icon-warning {
  background-color: #f59e0b;
}

.kb-stat-content {
  flex: 1;
}

.kb-stat-value {
  font-size: 24px;
  font-weight: 700;
  color: var(--docs-text-primary);
  margin-bottom: 4px;
}

.kb-stat-label {
  font-size: 14px;
  color: var(--docs-text-secondary);
}

.kb-stat-change {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
}

.kb-stat-change-positive {
  color: #10b981;
}

.kb-stat-change-negative {
  color: #ef4444;
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
