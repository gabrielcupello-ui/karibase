<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Components</span>
    </div>

    <h1 class="docs-heading">Components</h1>
    <p class="docs-lead">Explore the complete set of UI components</p>

    <p class="docs-text">
      Karibase provides a comprehensive set of pre-built components that you can use to build your dashboards and admin panels. 
      Each component is highly customizable and follows best practices for accessibility and performance.
    </p>

    <div class="docs-components-grid">
      <router-link to="/components/buttons" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-square"></i>
        </div>
        <h3 class="docs-component-title">Buttons</h3>
        <p class="docs-component-desc">Interactive buttons with multiple styles and states</p>
      </router-link>

      <router-link to="/components/cards" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-id-card"></i>
        </div>
        <h3 class="docs-component-title">Cards</h3>
        <p class="docs-component-desc">Container components for content organization</p>
      </router-link>

      <router-link to="/components/forms" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-edit"></i>
        </div>
        <h3 class="docs-component-title">Forms</h3>
        <p class="docs-component-desc">Input fields and form controls</p>
      </router-link>

      <router-link to="/components/tables" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-table"></i>
        </div>
        <h3 class="docs-component-title">Tables</h3>
        <p class="docs-component-desc">Data tables with sorting and pagination</p>
      </router-link>

      <router-link to="/components/navigation" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-bars"></i>
        </div>
        <h3 class="docs-component-title">Navigation</h3>
        <p class="docs-component-desc">Navigation components for menus and breadcrumbs</p>
      </router-link>

      <router-link to="/components/modals" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-window-maximize"></i>
        </div>
        <h3 class="docs-component-title">Modals</h3>
        <p class="docs-component-desc">Dialog boxes for user interactions</p>
      </router-link>

      <router-link to="/components/alerts" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-bell"></i>
        </div>
        <h3 class="docs-component-title">Alerts</h3>
        <p class="docs-component-desc">Feedback messages for user notifications</p>
      </router-link>

      <router-link to="/components/charts" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-chart-bar"></i>
        </div>
        <h3 class="docs-component-title">Charts</h3>
        <p class="docs-component-desc">Data visualization components and progress indicators</p>
      </router-link>

      <router-link to="/components/badges" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-tag"></i>
        </div>
        <h3 class="docs-component-title">Badges</h3>
        <p class="docs-component-desc">Small labels and status indicators</p>
      </router-link>

      <router-link to="/components/avatars" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-user-circle"></i>
        </div>
        <h3 class="docs-component-title">Avatars</h3>
        <p class="docs-component-desc">User profile images and initials</p>
      </router-link>

      <router-link to="/components/dropdowns" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-caret-down"></i>
        </div>
        <h3 class="docs-component-title">Dropdowns</h3>
        <p class="docs-component-desc">Toggleable content overlays</p>
      </router-link>

      <router-link to="/components/tooltips" class="docs-component-card">
        <div class="docs-component-icon">
          <i class="fas fa-info-circle"></i>
        </div>
        <h3 class="docs-component-title">Tooltips</h3>
        <p class="docs-component-desc">Hoverable information overlays</p>
      </router-link>

      <router-link to="/components/floating-bots" class="docs-component-card docs-component-card-featured">
        <div class="docs-component-icon">
          <i class="fas fa-robot"></i>
        </div>
        <h3 class="docs-component-title">Floating Bots</h3>
        <p class="docs-component-desc">20 chatbot examples from advanced to simple</p>
      </router-link>
    </div>

    <h2 class="docs-heading docs-heading-2" id="component-structure">Component Structure</h2>
    <p class="docs-text">
      All Karibase components follow a consistent naming convention using the <code class="docs-inline-code">kb-</code> prefix. 
      This prevents conflicts with other CSS frameworks and makes it easy to identify Karibase components in your code.
    </p>

    <div class="docs-code-block">
      <pre><code>&lt;!-- Component structure example --&gt;
&lt;div class="kb-card"&gt;
  &lt;div class="kb-card-header"&gt;
    &lt;h3 class="kb-card-title"&gt;Title&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="kb-card-body"&gt;
    Content goes here
  &lt;/div&gt;
  &lt;div class="kb-card-footer"&gt;
    &lt;button class="kb-btn kb-btn-primary"&gt;Action&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="customization">Customization</h2>
    <p class="docs-text">
      Components can be customized using CSS variables or by overriding specific classes. 
      See the Theming section for more details on customization options.
    </p>

    <div class="docs-callout docs-callout-info">
      <div class="docs-callout-icon">
        <i class="fas fa-info-circle"></i>
      </div>
      <div class="docs-callout-content">
        <h4 class="docs-callout-title">Need more components?</h4>
        <p class="docs-callout-text">Karibase is continuously evolving. Check back often for new components and features.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Components'
}
</script>

<script setup>
import { usePageInfo } from '../composables/usePageInfo'

usePageInfo({
  title: 'Components - Karibase CSS Framework',
  description: 'Explore the complete set of UI components in Karibase CSS Framework. Buttons, cards, modals, forms, and more for admin dashboards.',
  keywords: 'Karibase, components, UI, buttons, cards, modals, forms, CSS framework',
  author: 'Karibase - UCLA Graduate'
})
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

.docs-components-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin: 32px 0;
}

.docs-component-card {
  padding: 24px;
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
  text-decoration: none;
  transition: var(--docs-transition);
  cursor: pointer;
}

.docs-component-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--docs-shadow-md);
  border-color: var(--docs-primary-color);
}

.docs-component-card-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.docs-component-card-disabled:hover {
  transform: none;
  box-shadow: none;
  border-color: var(--docs-border-color);
}

.docs-component-card-featured {
  background: linear-gradient(135deg, rgba(234, 40, 69, 0.1), rgba(234, 40, 104, 0.1));
  border-color: var(--docs-primary-color);
}

.docs-component-card-featured:hover {
  transform: translateY(-4px);
  box-shadow: var(--docs-shadow-lg);
  border-color: var(--docs-primary-accent);
}

.docs-component-card-featured .docs-component-icon {
  background: linear-gradient(135deg, var(--docs-primary-color), var(--docs-primary-accent));
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.docs-component-icon {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, var(--docs-primary-color), var(--docs-primary-accent));
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 16px;
}

.docs-component-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--docs-text-primary);
  margin: 0 0 8px;
}

.docs-component-desc {
  font-size: 14px;
  color: var(--docs-text-secondary);
  margin: 0;
  line-height: 1.5;
}

.docs-inline-code {
  background-color: var(--docs-bg-tertiary);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Inconsolata', monospace;
  font-size: 14px;
  color: var(--docs-primary-color);
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

.docs-callout {
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  margin: 32px 0;
}

.docs-callout-info {
  background-color: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.docs-callout-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.docs-callout-content {
  flex: 1;
}

.docs-callout-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--docs-text-primary);
  margin: 0 0 8px;
}

.docs-callout-text {
  font-size: 14px;
  color: var(--docs-text-secondary);
  margin: 0;
  line-height: 1.6;
}
</style>
