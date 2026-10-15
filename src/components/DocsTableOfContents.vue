<template>
  <aside v-if="tocItems.length" class="docs-toc">
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
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'DocsTableOfContents',
  setup() {
    const route = useRoute()
    const tocItems = ref([])
    const activeItem = ref('')

    // Build the TOC from the h2 headings actually rendered on the page
    const collectHeadings = async () => {
      await nextTick()
      tocItems.value = Array.from(
        document.querySelectorAll('.docs-content h2[id]')
      ).map(el => ({
        id: el.id,
        text: el.textContent.trim(),
        href: `#${el.id}`
      }))
      activeItem.value = tocItems.value[0]?.id || ''
    }

    const scrollTo = (id) => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        activeItem.value = id
      }
    }

    const handleScroll = () => {
      for (const item of tocItems.value) {
        const element = document.getElementById(item.id)
        if (element && element.getBoundingClientRect().top <= 100) {
          activeItem.value = item.id
        }
      }
    }

    watch(() => route.path, collectHeadings, { immediate: true })

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
