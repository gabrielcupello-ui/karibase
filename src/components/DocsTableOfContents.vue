<template>
  <aside class="docs-toc">
    <div class="docs-toc-title">On this page</div>
    <nav class="docs-toc-nav">
      <a 
        v-for="item in tocItems" 
        :key="item.id" 
        :href="item.href" 
        class="docs-toc-link"
        :class="{ active: activeItem === item.id }"
        @click.prevent="scrollTo(item.id)"
      >
        {{ item.text }}
      </a>
    </nav>
  </aside>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'DocsTableOfContents',
  setup() {
    const tocItems = ref([
      { id: 'introduction', text: 'Introduction', href: '#introduction' },
      { id: 'features', text: 'Key Features', href: '#features' },
      { id: 'why', text: 'Why Karibase?', href: '#why' }
    ])
    const activeItem = ref('introduction')

    const scrollTo = (id) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        activeItem.value = id
      }
    }

    const handleScroll = () => {
      const sections = tocItems.value.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }))

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          if (rect.top <= 100) {
            activeItem.value = section.id
          }
        }
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      tocItems,
      activeItem,
      scrollTo
    }
  }
}
</script>

<style scoped>
.docs-toc {
  width: 240px;
  position: fixed;
  right: 24px;
  top: 88px;
  padding: 20px;
  background-color: var(--docs-bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--docs-border-color);
  transition: background-color var(--docs-transition), border-color var(--docs-transition);
}

.docs-toc-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--docs-text-muted);
  margin-bottom: 12px;
}

.docs-toc-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.docs-toc-link {
  color: var(--docs-text-secondary);
  text-decoration: none;
  font-size: 13px;
  padding: 6px 0;
  transition: var(--docs-transition);
  border-left: 2px solid transparent;
  padding-left: 12px;
}

.docs-toc-link:hover {
  color: var(--docs-primary-color);
}

.docs-toc-link.active {
  color: var(--docs-primary-color);
  border-left-color: var(--docs-primary-color);
  font-weight: 600;
}

@media (max-width: 1400px) {
  .docs-toc {
    display: none;
  }
}
</style>
