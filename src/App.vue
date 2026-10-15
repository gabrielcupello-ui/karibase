<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <router-view v-if="isHomePage" />
    <DocsLayout
      v-else
      :is-dark-mode="isDarkMode"
      @toggle-theme="toggleTheme"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import DocsLayout from '@/layouts/DocsLayout.vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
const { isDarkMode, toggleTheme } = useTheme()
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
