<template>
  <header class="docs-header">
    <nav class="docs-nav">
      <div class="docs-nav-brand">
        <router-link to="/" class="docs-logo">
          <img :src="baseUrl + 'logo.svg'" alt="Karibase Logo" class="docs-logo-image">
          <span class="docs-logo-text">Karibase</span>
        </router-link>
      </div>
      <div class="docs-nav-links">
        <router-link to="/introduction" class="docs-nav-link">Docs</router-link>
        <router-link to="/components" class="docs-nav-link">Components</router-link>
        <a href="https://github.com" target="_blank" class="docs-nav-link">GitHub</a>
      </div>
      <div class="docs-nav-actions">
        <button class="docs-theme-toggle" @click="$emit('toggle-theme')" aria-label="Toggle theme">
          <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
        </button>
        <router-link to="/installation" class="docs-btn docs-btn-primary">Get Started</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'DocsHeader',
  data() {
    return {
      baseUrl: import.meta.env.BASE_URL
    }
  },
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-theme']
}
</script>

<style scoped>
.docs-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: var(--docs-bg-primary);
  border-bottom: 1px solid var(--docs-border-color);
  z-index: 1000;
  transition: background-color var(--docs-transition), border-color var(--docs-transition);
}

.docs-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.docs-nav-brand {
  display: flex;
  align-items: center;
}

.docs-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 700;
  color: var(--docs-text-primary);
  text-decoration: none;
}

.docs-logo-image {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}

.docs-nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.docs-nav-link {
  color: var(--docs-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  transition: var(--docs-transition);
}

.docs-nav-link:hover,
.docs-nav-link.router-link-active {
  color: var(--docs-primary-color);
}

.docs-nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.docs-theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--docs-border-color);
  background: var(--docs-bg-secondary);
  color: var(--docs-text-primary);
  border-radius: 8px;
  cursor: pointer;
  transition: var(--docs-transition);
}

.docs-theme-toggle:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}

.docs-btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: var(--docs-transition);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.docs-btn-primary {
  background: linear-gradient(135deg, var(--docs-primary-color), var(--docs-primary-accent));
  color: white;
  border: none;
}

.docs-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--docs-shadow-md);
}

@media (max-width: 768px) {
  .docs-nav-links {
    display: none;
  }
}
</style>
