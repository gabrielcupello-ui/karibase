<template>
  <div>
    <button 
      class="btn" 
      :class="buttonClasses"
      type="button" 
      data-bs-toggle="collapse" 
      :data-bs-target="`#${collapseId}`"
      aria-expanded="false"
      :aria-controls="collapseId"
      @click="toggle"
    >
      <slot name="button">{{ buttonText }}</slot>
    </button>
    
    <div 
      class="collapse" 
      :class="{ show: isOpen }" 
      :id="collapseId"
      ref="collapseRef"
    >
      <div class="card card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'

export default {
  name: 'BootstrapCollapse',
  props: {
    collapseId: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: 'Toggle'
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'].includes(value)
    }
  },
  setup(props) {
    const isOpen = ref(false)
    const collapseRef = ref(null)
    let bootstrapCollapse = null

    const buttonClasses = computed(() => {
      return `btn-${props.variant}`
    })

    const toggle = () => {
      isOpen.value = !isOpen.value
    }

    onMounted(() => {
      if (typeof window !== 'undefined' && window.bootstrap && collapseRef.value) {
        bootstrapCollapse = new window.bootstrap.Collapse(collapseRef.value)
      }
    })

    onUnmounted(() => {
      if (bootstrapCollapse) {
        bootstrapCollapse.dispose()
      }
    })

    return {
      isOpen,
      collapseRef,
      buttonClasses,
      toggle
    }
  }
}
</script>

<style scoped>
</style>
