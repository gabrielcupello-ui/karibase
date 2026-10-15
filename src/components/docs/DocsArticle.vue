<template>
  <div class="docs-article">
    <DocsBreadcrumb v-if="breadcrumbItems.length" :items="breadcrumbItems" />
    <h1 v-if="title" class="docs-heading">{{ title }}</h1>
    <p v-if="lead" class="docs-lead">{{ lead }}</p>
    <slot />
    <DocsPrevNext :prev="prev" :next="next" />
  </div>
</template>

<script>
import DocsBreadcrumb from './DocsBreadcrumb.vue'
import DocsPrevNext from './DocsPrevNext.vue'

export default {
  name: 'DocsArticle',
  components: {
    DocsBreadcrumb,
    DocsPrevNext
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    lead: {
      type: String,
      default: ''
    },
    // Breadcrumb items after "Home": [{ name, path? }]
    breadcrumb: {
      type: [Array, Boolean],
      default: () => []
    },
    prev: {
      type: Object, // { name, path }
      default: null
    },
    next: {
      type: Object, // { name, path }
      default: null
    }
  },
  computed: {
    breadcrumbItems() {
      if (this.breadcrumb === false) return []
      if (Array.isArray(this.breadcrumb) && this.breadcrumb.length) return this.breadcrumb
      // Default: Home > current page title
      return this.title ? [{ name: this.title }] : []
    }
  }
}
</script>
