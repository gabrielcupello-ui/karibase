<template>
  <aside class="docs-sidebar">
    <div class="docs-search">
      <div class="docs-search-box">
        <i class="fas fa-search docs-search-icon"></i>
        <input type="text" placeholder="Search documentation..." class="docs-search-input">
      </div>
    </div>
    <nav class="docs-sidebar-nav">
      <div class="docs-sidebar-section" v-for="section in sections" :key="section.title">
        <h3 class="docs-sidebar-title">{{ section.title }}</h3>
        <ul class="docs-sidebar-list">
          <li v-for="item in section.items" :key="item.path">
            <router-link
              :to="item.path"
              class="docs-sidebar-link"
              :class="{ active: currentRoute === item.path }"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { navSections } from '@/config/navigation'

export default {
  name: 'DocsSidebar',
  setup() {
    const route = useRoute()
    const currentRoute = computed(() => route.path)

    return {
      sections: navSections,
      currentRoute
    }
  }
}
</script>

<style scoped>
.docs-sidebar {
  width: 280px;
  height: calc(100vh - 64px);
  position: fixed;
  left: 0;
  top: 64px;
  background-color: var(--docs-bg-secondary);
  border-right: 1px solid var(--docs-border-color);
  overflow-y: auto;
  padding: 24px 0;
  transition: background-color var(--docs-transition), border-color var(--docs-transition);
}

.docs-search {
  padding: 0 24px 24px;
}

.docs-search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.docs-search-icon {
  position: absolute;
  left: 12px;
  color: var(--docs-text-muted);
}

.docs-search-input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid var(--docs-border-color);
  background-color: var(--docs-bg-primary);
  color: var(--docs-text-primary);
  border-radius: 8px;
  font-size: 14px;
  transition: var(--docs-transition);
}

.docs-search-input:focus {
  outline: none;
  border-color: var(--docs-primary-color);
  box-shadow: 0 0 0 3px rgba(234, 40, 69, 0.1);
}

.docs-sidebar-nav {
  padding: 0 16px;
}

.docs-sidebar-section {
  margin-bottom: 24px;
}

.docs-sidebar-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--docs-text-muted);
  margin: 0 0 12px;
  padding: 0 8px;
}

.docs-sidebar-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.docs-sidebar-link {
  display: block;
  padding: 8px 12px;
  color: var(--docs-text-secondary);
  text-decoration: none;
  font-size: 14px;
  border-radius: 6px;
  transition: var(--docs-transition);
  margin-bottom: 2px;
}

.docs-sidebar-link:hover {
  color: var(--docs-primary-color);
  background-color: var(--docs-bg-tertiary);
}

.docs-sidebar-link.active {
  color: var(--docs-primary-color);
  background-color: var(--docs-bg-tertiary);
  font-weight: 600;
}

@media (max-width: 1024px) {
  .docs-sidebar {
    transform: translateX(-100%);
    z-index: 999;
  }

  .docs-sidebar.open {
    transform: translateX(0);
  }
}
</style>
