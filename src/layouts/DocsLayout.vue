<template>
  <DocsHeader :is-dark-mode="isDarkMode" @toggle-theme="$emit('toggle-theme')" />
  <div class="docs-container">
    <DocsSidebar />
    <main class="docs-content">
      <router-view />
    </main>
    <DocsTableOfContents />
  </div>
  <DocsFooter />
</template>

<script>
import DocsHeader from '@/components/DocsHeader.vue'
import DocsSidebar from '@/components/DocsSidebar.vue'
import DocsTableOfContents from '@/components/DocsTableOfContents.vue'
import DocsFooter from '@/components/DocsFooter.vue'

export default {
  name: 'DocsLayout',
  components: {
    DocsHeader,
    DocsSidebar,
    DocsTableOfContents,
    DocsFooter
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

<style>
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
