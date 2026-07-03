<template>
  <element 
    ref="elementRef"
    :data-bs-toggle="isTooltip ? 'tooltip' : 'popover'"
    :data-bs-placement="placement"
    :title="isTooltip ? title : ''"
    :data-bs-content="isTooltip ? '' : content"
  >
    <slot></slot>
  </element>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'

export default {
  name: 'BootstrapTooltip',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
    },
    type: {
      type: String,
      default: 'tooltip',
      validator: (value) => ['tooltip', 'popover'].includes(value)
    }
  },
  setup(props) {
    const elementRef = ref(null)
    let bootstrapInstance = null

    const isTooltip = computed(() => props.type === 'tooltip')

    onMounted(() => {
      if (typeof window !== 'undefined' && window.bootstrap && elementRef.value) {
        if (isTooltip.value) {
          bootstrapInstance = new window.bootstrap.Tooltip(elementRef.value)
        } else {
          bootstrapInstance = new window.bootstrap.Popover(elementRef.value)
        }
      }
    })

    onUnmounted(() => {
      if (bootstrapInstance) {
        bootstrapInstance.dispose()
      }
    })

    return {
      elementRef,
      isTooltip
    }
  }
}
</script>

<style scoped>
</style>
