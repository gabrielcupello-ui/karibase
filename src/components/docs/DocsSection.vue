<template>
  <section class="docs-section">
    <h2 v-if="title" :id="id" class="docs-heading docs-heading-2">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'DocsSection',
  props: {
    id: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
