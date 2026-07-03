<template>
  <div 
    class="alert" 
    :class="alertClasses" 
    role="alert"
    v-if="visible"
  >
    <button 
      type="button" 
      class="btn-close" 
      data-bs-dismiss="alert" 
      aria-label="Close"
      v-if="dismissible"
      @click="dismiss"
    ></button>
    <slot></slot>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'BootstrapAlert',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].includes(value)
    },
    dismissible: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const visible = ref(true)

    const alertClasses = computed(() => {
      return `alert-${props.type} ${props.dismissible ? 'alert-dismissible' : ''}`
    })

    const dismiss = () => {
      visible.value = false
    }

    return {
      visible,
      alertClasses,
      dismiss
    }
  }
}
</script>

<style scoped>
</style>
