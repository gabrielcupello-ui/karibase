<template>
  <DocsArticle
    title="Navigation"
    lead="Navigation components for menus and breadcrumbs"
    :breadcrumb="[{ name: 'Components', path: '/components' }, { name: 'Navigation' }]"
    :prev="{ name: 'Components', path: '/components' }"
    :next="{ name: 'Modals', path: '/components/modals' }"
  >

    <h2 class="docs-heading docs-heading-2" id="navbar">Navbar</h2>
    <p class="docs-text">A responsive navigation bar:</p>

    <div class="docs-preview">
      <nav class="kb-navbar">
        <div class="kb-navbar-brand">
          <span class="kb-navbar-logo">K</span>
          <span class="kb-navbar-text">Karibase</span>
        </div>
        <div class="kb-navbar-menu">
          <a href="#" class="kb-navbar-link kb-navbar-link-active">Home</a>
          <a href="#" class="kb-navbar-link">Features</a>
          <a href="#" class="kb-navbar-link">Pricing</a>
          <a href="#" class="kb-navbar-link">About</a>
        </div>
        <div class="kb-navbar-actions">
          <button class="kb-btn kb-btn-primary kb-btn-sm">Sign Up</button>
        </div>
      </nav>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;nav class="kb-navbar"&gt;
  &lt;div class="kb-navbar-brand"&gt;
    &lt;span class="kb-navbar-logo"&gt;K&lt;/span&gt;
    &lt;span class="kb-navbar-text"&gt;Karibase&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="kb-navbar-menu"&gt;
    &lt;a href="#" class="kb-navbar-link kb-navbar-link-active"&gt;Home&lt;/a&gt;
    &lt;a href="#" class="kb-navbar-link"&gt;Features&lt;/a&gt;
  &lt;/div&gt;
  &lt;div class="kb-navbar-actions"&gt;
    &lt;button class="kb-btn kb-btn-primary kb-btn-sm"&gt;Sign Up&lt;/button&gt;
  &lt;/div&gt;
&lt;/nav&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="sidebar">Sidebar</h2>
    <p class="docs-text">Vertical sidebar navigation:</p>

    <div class="docs-preview">
      <div class="kb-sidebar">
        <div class="kb-sidebar-header">
          <span class="kb-sidebar-logo">K</span>
          <span class="kb-sidebar-title">Dashboard</span>
        </div>
        <div class="kb-sidebar-menu">
          <a href="#" class="kb-sidebar-link kb-sidebar-link-active">
            <i class="fas fa-home"></i>
            <span>Overview</span>
          </a>
          <a href="#" class="kb-sidebar-link">
            <i class="fas fa-chart-bar"></i>
            <span>Analytics</span>
          </a>
          <a href="#" class="kb-sidebar-link">
            <i class="fas fa-users"></i>
            <span>Users</span>
          </a>
          <a href="#" class="kb-sidebar-link">
            <i class="fas fa-cog"></i>
            <span>Settings</span>
          </a>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-sidebar"&gt;
  &lt;div class="kb-sidebar-header"&gt;
    &lt;span class="kb-sidebar-logo"&gt;K&lt;/span&gt;
    &lt;span class="kb-sidebar-title"&gt;Dashboard&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="kb-sidebar-menu"&gt;
    &lt;a href="#" class="kb-sidebar-link kb-sidebar-link-active"&gt;
      &lt;i class="fas fa-home"&gt;&lt;/i&gt;
      &lt;span&gt;Overview&lt;/span&gt;
    &lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="breadcrumbs">Breadcrumbs</h2>
    <p class="docs-text">Breadcrumb navigation:</p>

    <div class="docs-preview">
      <div class="kb-breadcrumb">
        <a href="#" class="kb-breadcrumb-link">Home</a>
        <span class="kb-breadcrumb-separator">/</span>
        <a href="#" class="kb-breadcrumb-link">Components</a>
        <span class="kb-breadcrumb-separator">/</span>
        <span class="kb-breadcrumb-current">Navigation</span>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-breadcrumb"&gt;
  &lt;a href="#" class="kb-breadcrumb-link"&gt;Home&lt;/a&gt;
  &lt;span class="kb-breadcrumb-separator"&gt;/&lt;/span&gt;
  &lt;a href="#" class="kb-breadcrumb-link"&gt;Components&lt;/a&gt;
  &lt;span class="kb-breadcrumb-separator"&gt;/&lt;/span&gt;
  &lt;span class="kb-breadcrumb-current"&gt;Navigation&lt;/span&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="tabs">Tabs</h2>
    <p class="docs-text">Tab navigation:</p>

    <div class="docs-preview">
      <div class="kb-tabs">
        <button class="kb-tab kb-tab-active">Overview</button>
        <button class="kb-tab">Details</button>
        <button class="kb-tab">Settings</button>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-tabs"&gt;
  &lt;button class="kb-tab kb-tab-active"&gt;Overview&lt;/button&gt;
  &lt;button class="kb-tab"&gt;Details&lt;/button&gt;
  &lt;button class="kb-tab"&gt;Settings&lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'Navigation'
}
</script>

<style scoped>

.kb-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: var(--docs-bg-primary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
}

.kb-navbar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.kb-navbar-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--docs-primary-color), var(--docs-primary-accent));
  color: white;
  border-radius: 6px;
  font-weight: 700;
}

.kb-navbar-text {
  font-weight: 700;
  color: var(--docs-text-primary);
}

.kb-navbar-menu {
  display: flex;
  gap: 24px;
}

.kb-navbar-link {
  color: var(--docs-text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--docs-transition);
}

.kb-navbar-link:hover,
.kb-navbar-link-active {
  color: var(--docs-primary-color);
}

.kb-navbar-actions {
  display: flex;
  gap: 12px;
}

.kb-sidebar {
  width: 250px;
  background-color: var(--docs-bg-primary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  overflow: hidden;
}

.kb-sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid var(--docs-border-color);
}

.kb-sidebar-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--docs-primary-color), var(--docs-primary-accent));
  color: white;
  border-radius: 6px;
  font-weight: 700;
}

.kb-sidebar-title {
  font-weight: 700;
  color: var(--docs-text-primary);
}

.kb-sidebar-menu {
  display: flex;
  flex-direction: column;
  padding: 8px;
}

.kb-sidebar-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  color: var(--docs-text-secondary);
  text-decoration: none;
  border-radius: 6px;
  transition: var(--docs-transition);
}

.kb-sidebar-link:hover,
.kb-sidebar-link-active {
  background-color: var(--docs-bg-tertiary);
  color: var(--docs-primary-color);
}

.kb-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
}

.kb-breadcrumb-link {
  color: var(--docs-text-secondary);
  text-decoration: none;
  transition: var(--docs-transition);
}

.kb-breadcrumb-link:hover {
  color: var(--docs-primary-color);
}

.kb-breadcrumb-separator {
  color: var(--docs-text-muted);
}

.kb-breadcrumb-current {
  color: var(--docs-text-primary);
  font-weight: 600;
}

.kb-tabs {
  display: flex;
  gap: 4px;
  border-bottom: 1px solid var(--docs-border-color);
}

.kb-tab {
  padding: 10px 20px;
  background: transparent;
  border: none;
  color: var(--docs-text-secondary);
  font-weight: 500;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: var(--docs-transition);
}

.kb-tab:hover {
  color: var(--docs-primary-color);
}

.kb-tab-active {
  color: var(--docs-primary-color);
  border-bottom-color: var(--docs-primary-color);
}
</style>
