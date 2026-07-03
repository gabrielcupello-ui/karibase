<template>
  <!-- Modal -->
  <div 
    class="modal fade" 
    :id="modalId" 
    tabindex="-1" 
    :aria-labelledby="`${modalId}Label`" 
    aria-hidden="true"
    ref="modalRef"
  >
    <div class="modal-dialog" :class="sizeClass">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header" v-if="$slots.header || title">
          <h5 class="modal-title" :id="`${modalId}Label`">
            <slot name="header">{{ title }}</slot>
          </h5>
          <button 
            type="button" 
            class="btn-close" 
            data-bs-dismiss="modal" 
            aria-label="Close"
          ></button>
        </div>
        
        <!-- Modal Body -->
        <div class="modal-body">
          <slot></slot>
        </div>
        
        <!-- Modal Footer -->
        <div class="modal-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'

export default {
  name: 'BootstrapModal',
  props: {
    modalId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '', // '', 'sm', 'lg', 'xl'
      validator: (value) => ['', 'sm', 'lg', 'xl'].includes(value)
    }
  },
  setup(props) {
    const modalRef = ref(null)
    let bootstrapModal = null

    const sizeClass = computed(() => {
      if (props.size) {
        return `modal-${props.size}`
      }
      return ''
    })

    const show = () => {
      if (bootstrapModal) {
        bootstrapModal.show()
      }
    }

    const hide = () => {
      if (bootstrapModal) {
        bootstrapModal.hide()
      }
    }

    onMounted(() => {
      if (typeof window !== 'undefined' && window.bootstrap) {
        bootstrapModal = new window.bootstrap.Modal(modalRef.value)
      }
    })

    onUnmounted(() => {
      if (bootstrapModal) {
        bootstrapModal.dispose()
      }
    })

    return {
      modalRef,
      sizeClass,
      show,
      hide
    }
  }
}
</script>

<style scoped>
/* Additional modal styles if needed */
</style>
