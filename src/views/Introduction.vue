<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Introduction</span>
    </div>

    <h1 class="docs-heading">Introduction</h1>
    <p class="docs-lead">Karibase is a modern CSS framework designed to build efficient, scalable dashboards and admin panels.</p>

    <p class="docs-text">
      Built with modern CSS and best practices, Karibase combines flexibility with a clean, modular architecture, 
      keeping projects organized and easy to maintain. Perfect for SaaS applications, admin panels, and data dashboards.
    </p>

    <h2 class="docs-heading docs-heading-2" id="what-is-karibase">What is Karibase?</h2>
    <p class="docs-text">
      Karibase is a comprehensive CSS framework specifically designed for building admin panels, dashboards, and SaaS applications. 
      It provides a complete set of components, utilities, and layout systems that help you create beautiful, functional interfaces quickly.
    </p>

    <h2 class="docs-heading docs-heading-2" id="philosophy">Philosophy</h2>
    <p class="docs-text">
      Karibase is built on the following principles:
    </p>
    <ul class="docs-list">
      <li><strong>Modularity:</strong> Use only what you need. Every component can be imported independently.</li>
      <li><strong>Performance:</strong> Lightweight and optimized for speed. No unnecessary bloat.</li>
      <li><strong>Flexibility:</strong> Highly customizable through CSS variables and theming system.</li>
      <li><strong>Accessibility:</strong> WCAG AA compliant components for inclusive design.</li>
      <li><strong>Developer Experience:</strong> Clean, well-documented code that's easy to understand and extend.</li>
    </ul>

    <h2 class="docs-heading docs-heading-2" id="browser-support">Browser Support</h2>
    <p class="docs-text">
      Karibase supports all modern browsers including Chrome, Firefox, Safari, and Edge. 
      For older browsers, you may need to add necessary polyfills for CSS custom properties.
    </p>

    <div class="docs-callout docs-callout-warning">
      <div class="docs-callout-icon">
        <i class="fas fa-exclamation-triangle"></i>
      </div>
      <div class="docs-callout-content">
        <h4 class="docs-callout-title">Note</h4>
        <p class="docs-callout-text">Internet Explorer is not supported. If you need to support IE, consider using a polyfill for CSS custom properties.</p>
      </div>
    </div>

    <h2 class="docs-heading docs-heading-2" id="license">License</h2>
    <p class="docs-text">
      Karibase is released under the MIT License. You are free to use it in personal and commercial projects.
    </p>

    <div class="docs-next-prev">
      <router-link to="/" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Previous</span>
      </router-link>
      <router-link to="/installation" class="docs-next">
        <span>Installation</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
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
  scroll-margin-top: 100px;
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

.docs-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
}

.docs-list li {
  padding: 12px 0;
  color: var(--docs-text-secondary);
  border-bottom: 1px solid var(--docs-border-light);
}

.docs-list li:last-child {
  border-bottom: none;
}

.docs-list strong {
  color: var(--docs-text-primary);
}

.docs-callout {
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  margin: 32px 0;
}

.docs-callout-warning {
  background-color: rgba(245, 158, 11, 0.1);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.docs-callout-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  color: #f59e0b;
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
