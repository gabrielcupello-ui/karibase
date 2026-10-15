<template>
  <nav v-if="prev || next" class="docs-next-prev">
    <router-link v-if="prev" :to="prev.path" class="docs-prev">
      <i class="fas fa-arrow-left"></i>
      <span>{{ prev.name }}</span>
    </router-link>
    <span v-else></span>
    <router-link v-if="next" :to="next.path" class="docs-next">
      <span>{{ next.name }}</span>
      <i class="fas fa-arrow-right"></i>
    </router-link>
    <span v-else></span>
  </nav>
</template>

<script>
export default {
  name: 'DocsPrevNext',
  props: {
    prev: {
      type: Object, // { name, path }
      default: null
    },
    next: {
      type: Object, // { name, path }
      default: null
    }
  }
}
</script>
