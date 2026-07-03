<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <template v-if="isHomePage">
      <router-view />
    </template>
    <template v-else>
      <DocsHeader 
        :is-dark-mode="isDarkMode"
        @toggle-theme="toggleTheme"
      />
      <div class="docs-container">
        <DocsSidebar 
          :current-route="currentRoute"
          @navigate="navigate"
        />
        <main class="docs-content">
          <router-view />
        </main>
        <DocsTableOfContents />
      </div>
      <DocsFooter />
    </template>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DocsHeader from './components/DocsHeader.vue'
import DocsSidebar from './components/DocsSidebar.vue'
import DocsTableOfContents from './components/DocsTableOfContents.vue'
import DocsFooter from './components/DocsFooter.vue'

export default {
  name: 'App',
  components: {
    DocsHeader,
    DocsSidebar,
    DocsTableOfContents,
    DocsFooter
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const isDarkMode = ref(false)

    const currentRoute = computed(() => route.path)
    const isHomePage = computed(() => route.path === '/')

    const toggleTheme = () => {
      isDarkMode.value = !isDarkMode.value
      document.documentElement.setAttribute('mode', isDarkMode.value ? 'dark' : 'light')
      localStorage.setItem('karibase-theme', isDarkMode.value ? 'dark' : 'light')
    }

    const navigate = (path) => {
      router.push(path)
    }

    onMounted(() => {
      const savedTheme = localStorage.getItem('karibase-theme')
      if (savedTheme === 'dark') {
        isDarkMode.value = true
        document.documentElement.setAttribute('mode', 'dark')
      }
    })

    return {
      isDarkMode,
      currentRoute,
      isHomePage,
      toggleTheme,
      navigate
    }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.docs-container {
  display: flex;
  margin-top: 64px;
  min-height: calc(100vh - 64px);
}

.docs-content {
  flex: 1;
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  overflow-y: auto;
}

@media (max-width: 1024px) {
  .docs-content {
    padding: 24px;
  }
}
</style>
