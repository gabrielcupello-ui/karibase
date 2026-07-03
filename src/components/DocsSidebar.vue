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
              @click="$emit('navigate', item.path)"
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
export default {
  name: 'DocsSidebar',
  props: {
    currentRoute: {
      type: String,
      default: '/'
    }
  },
  emits: ['navigate'],
  data() {
    return {
      sections: [
        {
          title: 'Getting Started',
          items: [
            { name: 'Getting Started', path: '/getting-started' },
            { name: 'Download', path: '/download' },
            { name: 'Contents', path: '/contents' },
            { name: 'Browsers & devices', path: '/browsers-devices' },
            { name: 'JavaScript', path: '/javascript' },
            { name: 'Webpack', path: '/webpack' },
            { name: 'Parcel', path: '/parcel' },
            { name: 'Vite', path: '/vite' },
            { name: 'Accessibility', path: '/accessibility' },
            { name: 'RFS', path: '/rfs' },
            { name: 'RTL', path: '/rtl' },
            { name: 'Contribute', path: '/contribute' }
          ]
        },
        {
          title: 'Customize',
          items: [
            { name: 'Overview', path: '/customize' },
            { name: 'Sass', path: '/customize/sass' },
            { name: 'Options', path: '/customize/options' },
            { name: 'Color', path: '/customize/color' },
            { name: 'Color modes', path: '/customize/color-modes' },
            { name: 'Components', path: '/customize/components' },
            { name: 'CSS variables', path: '/customize/css-variables' },
            { name: 'Optimize', path: '/customize/optimize' }
          ]
        },
        {
          title: 'Layout',
          items: [
            { name: 'Breakpoints', path: '/layout/breakpoints' },
            { name: 'Containers', path: '/layout/containers' },
            { name: 'Grid', path: '/layout/grid' },
            { name: 'Columns', path: '/layout/columns' },
            { name: 'Gutters', path: '/layout/gutters' },
            { name: 'Utilities', path: '/layout/utilities' },
            { name: 'Z-index', path: '/layout/z-index' },
            { name: 'CSS Grid', path: '/layout/css-grid' }
          ]
        },
        {
          title: 'Content',
          items: [
            { name: 'Reboot', path: '/content/reboot' },
            { name: 'Typography', path: '/content/typography' },
            { name: 'Images', path: '/content/images' },
            { name: 'Tables', path: '/content/tables' },
            { name: 'Figures', path: '/content/figures' }
          ]
        },
        {
          title: 'Forms',
          items: [
            { name: 'Overview', path: '/forms' },
            { name: 'Form control', path: '/forms/form-control' },
            { name: 'Select', path: '/forms/select' },
            { name: 'Checks & radios', path: '/forms/checks-radios' },
            { name: 'Range', path: '/forms/range' },
            { name: 'Input group', path: '/forms/input-group' },
            { name: 'Floating labels', path: '/forms/floating-labels' },
            { name: 'Layout', path: '/forms/layout' },
            { name: 'Validation', path: '/forms/validation' }
          ]
        },
        {
          title: 'Components',
          items: [
            { name: 'Overview', path: '/components' },
            { name: 'Buttons', path: '/components/buttons' },
            { name: 'Cards', path: '/components/cards' },
            { name: 'Forms', path: '/components/forms' },
            { name: 'Tables', path: '/components/tables' },
            { name: 'Navigation', path: '/components/navigation' },
            { name: 'Modals', path: '/components/modals' },
            { name: 'Alerts', path: '/components/alerts' },
            { name: 'Charts', path: '/components/charts' },
            { name: 'Badges', path: '/components/badges' },
            { name: 'Avatars', path: '/components/avatars' },
            { name: 'Dropdowns', path: '/components/dropdowns' },
            { name: 'Tooltips', path: '/components/tooltips' },
            { name: 'Floating Bots ⭐', path: '/components/floating-bots' }
          ]
        },
        {
          title: 'Examples',
          items: [
            { name: 'Login Examples', path: '/login-examples' }
          ]
        },
        {
          title: 'Layout (Legacy)',
          items: [
            { name: 'Grid System', path: '/layout' }
          ]
        },
        {
          title: 'Utilities (Legacy)',
          items: [
            { name: 'Overview', path: '/utilities' }
          ]
        },
        {
          title: 'Advanced (Legacy)',
          items: [
            { name: 'Theming', path: '/theming' }
          ]
        },
        {
          title: 'Tools (Legacy)',
          items: [
            { name: 'Tools', path: '/tools' }
          ]
        }
      ]
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
