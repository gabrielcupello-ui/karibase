<template>
  <div v-if="$slots.default" class="docs-preview" :class="previewClass">
    <slot />
  </div>
  <div v-if="$slots.code" class="docs-code-block">
    <pre><code><slot name="code" /></code></pre>
  </div>
</template>

<script>
export default {
  name: 'DocsExample',
  props: {
    previewClass: {
      type: [String, Array, Object],
      default: ''
    }
  }
}
</script>
