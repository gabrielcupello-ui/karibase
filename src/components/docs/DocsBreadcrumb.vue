<template>
  <nav class="docs-breadcrumb" aria-label="Breadcrumb">
    <template v-for="(item, index) in allItems" :key="index">
      <span v-if="index > 0" class="docs-breadcrumb-separator">/</span>
      <router-link v-if="item.path" :to="item.path" class="docs-breadcrumb-link">
        {{ item.name }}
      </router-link>
      <span v-else class="docs-breadcrumb-current">{{ item.name }}</span>
    </template>
  </nav>
</template>

<script>
export default {
  name: 'DocsBreadcrumb',
  props: {
    // Items after the root "Home" link: [{ name, path? }] — last item typically has no path
    items: {
      type: Array,
      default: () => []
    },
    home: {
      type: Object,
      default: () => ({ name: 'Home', path: '/' })
    }
  },
  computed: {
    allItems() {
      return this.home ? [this.home, ...this.items] : this.items
    }
  }
}
</script>
