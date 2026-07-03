<template>
  <div class="dropdown" :class="{ show: isOpen }">
    <button 
      class="btn dropdown-toggle" 
      :class="buttonClasses"
      type="button" 
      :id="dropdownId"
      data-bs-toggle="dropdown" 
      aria-expanded="false"
      @click="toggleDropdown"
    >
      <slot name="button">{{ buttonText }}</slot>
    </button>
    
    <ul class="dropdown-menu" :class="{ show: isOpen }" :aria-labelledby="dropdownId">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'BootstrapDropdown',
  props: {
    dropdownId: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: 'Dropdown'
    },
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'].includes(value)
    },
    split: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const isOpen = ref(false)

    const buttonClasses = computed(() => {
      return `btn-${props.variant}`
    })

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value
    }

    const closeDropdown = () => {
      isOpen.value = false
    }

    return {
      isOpen,
      buttonClasses,
      toggleDropdown,
      closeDropdown
    }
  }
}
</script>

<style scoped>
</style>
