<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/components" class="docs-breadcrumb-link">Components</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Modals</span>
    </div>

    <h1 class="docs-heading">Modals</h1>
    <p class="docs-lead">Dialog boxes for user interactions</p>

    <h2 class="docs-heading docs-heading-2" id="basic-modal">Basic Modal</h2>
    <p class="docs-text">A simple modal dialog:</p>
    
    <div class="docs-preview">
      <button class="kb-btn kb-btn-primary" @click="showModal = true">Open Modal</button>
      
      <div class="kb-modal-overlay" v-if="showModal" @click="showModal = false">
        <div class="kb-modal" @click.stop>
          <div class="kb-modal-header">
            <h3 class="kb-modal-title">Modal Title</h3>
            <button class="kb-modal-close" @click="showModal = false">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="kb-modal-body">
            <p>This is the modal content. You can put any content here.</p>
          </div>
          <div class="kb-modal-footer">
            <button class="kb-btn kb-btn-secondary" @click="showModal = false">Cancel</button>
            <button class="kb-btn kb-btn-primary" @click="showModal = false">Confirm</button>
          </div>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-modal-overlay"&gt;
  &lt;div class="kb-modal"&gt;
    &lt;div class="kb-modal-header"&gt;
      &lt;h3 class="kb-modal-title"&gt;Modal Title&lt;/h3&gt;
      &lt;button class="kb-modal-close"&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="kb-modal-body"&gt;
      &lt;p&gt;Modal content&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="kb-modal-footer"&gt;
      &lt;button class="kb-btn kb-btn-secondary"&gt;Cancel&lt;/button&gt;
      &lt;button class="kb-btn kb-btn-primary"&gt;Confirm&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="modal-sizes">Modal Sizes</h2>
    <p class="docs-text">Modals in different sizes:</p>
    
    <div class="docs-preview">
      <button class="kb-btn kb-btn-primary" @click="showSmallModal = true">Small</button>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-modal kb-modal-sm"&gt;...&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="modal-with-form">Modal with Form</h2>
    <p class="docs-text">Modal containing a form with validation:</p>
    
    <div class="docs-preview">
      <button class="kb-btn kb-btn-primary" @click="showFormModal = true">Open Form Modal</button>
      
      <div class="kb-modal-overlay" v-if="showFormModal" @click="showFormModal = false">
        <div class="kb-modal kb-modal-lg" @click.stop>
          <div class="kb-modal-header">
            <h3 class="kb-modal-title">Create User</h3>
            <button class="kb-modal-close" @click="showFormModal = false">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="kb-modal-body">
            <form @submit.prevent="submitModalForm">
              <div class="kb-form-group">
                <label for="modalName" class="kb-label">Name</label>
                <input 
                  type="text" 
                  class="kb-input" 
                  id="modalName" 
                  v-model="modalForm.name"
                  :class="{ 'kb-is-valid': modalValidation.name.valid, 'kb-is-invalid': modalValidation.name.invalid }"
                  @blur="validateModalField('name')"
                  required
                >
                <div class="kb-valid-feedback" v-if="modalValidation.name.valid">Looks good!</div>
                <div class="kb-invalid-feedback" v-if="modalValidation.name.invalid">{{ modalValidation.name.message }}</div>
              </div>
              <div class="kb-form-group">
                <label for="modalEmail" class="kb-label">Email</label>
                <input 
                  type="email" 
                  class="kb-input" 
                  id="modalEmail" 
                  v-model="modalForm.email"
                  :class="{ 'kb-is-valid': modalValidation.email.valid, 'kb-is-invalid': modalValidation.email.invalid }"
                  @blur="validateModalField('email')"
                  required
                >
                <div class="kb-valid-feedback" v-if="modalValidation.email.valid">Valid email!</div>
                <div class="kb-invalid-feedback" v-if="modalValidation.email.invalid">{{ modalValidation.email.message }}</div>
              </div>
            </form>
          </div>
          <div class="kb-modal-footer">
            <button class="kb-btn kb-btn-secondary" @click="showFormModal = false">Cancel</button>
            <button class="kb-btn kb-btn-primary" @click="submitModalForm">Save</button>
          </div>
        </div>
      </div>
    </div>

    <CodeViewer title="HTML">
&lt;div class="kb-modal-overlay" v-if="showFormModal"&gt;
  &lt;div class="kb-modal kb-modal-lg" @click.stop&gt;
    &lt;div class="kb-modal-header&quot;&gt;
      &lt;h3 class="kb-modal-title&quot;&gt;Create User&lt;/h3&gt;
      &lt;button class="kb-modal-close&quot; @click="showFormModal = false"&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class="kb-modal-body&quot;&gt;
      &lt;form @submit.prevent="submitModalForm"&gt;
        &lt;!-- Form fields --&gt;
      &lt;/form&gt;
    &lt;/div&gt;
    &lt;div class="kb-modal-footer&quot;&gt;
      &lt;button class="kb-btn kb-btn-secondary" @click="showFormModal = false"&gt;Cancel&lt;/button&gt;
      &lt;button class="kb-btn kb-btn-primary" @click="submitModalForm"&gt;Save&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
    </CodeViewer>
    <CodeViewer title="JavaScript">
import { ref, reactive } from 'vue'

export default {
  setup() {
    const showFormModal = ref(false)
    const modalForm = reactive({
      name: '',
      email: ''
    })

    const modalValidation = reactive({
      name: { valid: false, invalid: false, message: '' },
      email: { valid: false, invalid: false, message: '' }
    })

    const validateModalField = (field) => {
      switch(field) {
        case 'name':
          if (modalForm.name.length < 2) {
            modalValidation.name.valid = false
            modalValidation.name.invalid = true
            modalValidation.name.message = 'Name must be at least 2 characters'
          } else {
            modalValidation.name.valid = true
            modalValidation.name.invalid = false
            modalValidation.name.message = ''
          }
          break
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(modalForm.email)) {
            modalValidation.email.valid = false
            modalValidation.email.invalid = true
            modalValidation.email.message = 'Please enter a valid email'
          } else {
            modalValidation.email.valid = true
            modalValidation.email.invalid = false
            modalValidation.email.message = ''
          }
          break
      }
    }

    const submitModalForm = () => {
      validateModalField('name')
      validateModalField('email')
      
      const isValid = Object.values(modalValidation).every(v => v.valid)
      
      if (isValid) {
        alert('User created successfully!')
        showFormModal.value = false
        modalForm.name = ''
        modalForm.email = ''
        modalValidation.name = { valid: false, invalid: false, message: '' }
        modalValidation.email = { valid: false, invalid: false, message: '' }
      }
    }

    return {
      showFormModal,
      modalForm,
      modalValidation,
      validateModalField,
      submitModalForm
    }
  }
}
    </CodeViewer>

    <div class="docs-next-prev">
      <router-link to="/components/navigation" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Navigation</span>
      </router-link>
      <router-link to="/components/alerts" class="docs-next">
        <span>Alerts</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import CodeViewer from '../components/CodeViewer.vue'

export default {
  name: 'Modals',
  components: {
    CodeViewer
  },
  setup() {
    const showModal = ref(false)
    const showFormModal = ref(false)
    const modalForm = reactive({
      name: '',
      email: ''
    })

    const modalValidation = reactive({
      name: { valid: false, invalid: false, message: '' },
      email: { valid: false, invalid: false, message: '' }
    })

    const validateModalField = (field) => {
      switch(field) {
        case 'name':
          if (modalForm.name.length < 2) {
            modalValidation.name.valid = false
            modalValidation.name.invalid = true
            modalValidation.name.message = 'Name must be at least 2 characters'
          } else {
            modalValidation.name.valid = true
            modalValidation.name.invalid = false
            modalValidation.name.message = ''
          }
          break
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(modalForm.email)) {
            modalValidation.email.valid = false
            modalValidation.email.invalid = true
            modalValidation.email.message = 'Please enter a valid email'
          } else {
            modalValidation.email.valid = true
            modalValidation.email.invalid = false
            modalValidation.email.message = ''
          }
          break
      }
    }

    const submitModalForm = () => {
      validateModalField('name')
      validateModalField('email')
      
      const isValid = Object.values(modalValidation).every(v => v.valid)
      
      if (isValid) {
        alert('User created successfully!')
        showFormModal.value = false
        modalForm.name = ''
        modalForm.email = ''
        modalValidation.name = { valid: false, invalid: false, message: '' }
        modalValidation.email = { valid: false, invalid: false, message: '' }
      }
    }

    return {
      showModal,
      showFormModal,
      modalForm,
      modalValidation,
      validateModalField,
      submitModalForm
    }
  }
}
</script>

<style scoped>
.docs-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 14px;
}

.docs-breadcrumb-link {
  color: var(--docs-text-secondary);
  text-decoration: none;
  transition: var(--docs-transition);
}

.docs-breadcrumb-link:hover {
  color: var(--docs-primary-color);
}

.docs-breadcrumb-separator {
  color: var(--docs-text-muted);
}

.docs-breadcrumb-current {
  color: var(--docs-text-primary);
  font-weight: 600;
}

.docs-heading {
  font-size: 40px;
  font-weight: 800;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
}

.docs-heading-2 {
  font-size: 28px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 16px;
}

.docs-lead {
  font-size: 20px;
  color: var(--docs-text-secondary);
  line-height: 1.6;
  margin: 0 0 24px;
}

.docs-text {
  font-size: 16px;
  color: var(--docs-text-secondary);
  line-height: 1.8;
  margin: 0 0 16px;
}

.docs-preview {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
  padding: 32px;
  margin: 24px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.kb-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.kb-modal {
  background-color: var(--docs-bg-primary);
  border-radius: 12px;
  box-shadow: var(--docs-shadow-lg);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
}

.kb-modal-sm {
  max-width: 300px;
}

.kb-modal-md {
  max-width: 500px;
}

.kb-modal-lg {
  max-width: 800px;
}

.kb-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--docs-border-color);
}

.kb-modal-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--docs-text-primary);
  margin: 0;
}

.kb-modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: none;
  color: var(--docs-text-secondary);
  cursor: pointer;
  border-radius: 6px;
  transition: var(--docs-transition);
}

.kb-modal-close:hover {
  background-color: var(--docs-bg-tertiary);
  color: var(--docs-text-primary);
}

.kb-modal-body {
  padding: 20px;
}

.kb-modal-body p {
  color: var(--docs-text-secondary);
  margin: 0;
}

.kb-modal-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 16px 20px;
  border-top: 1px solid var(--docs-border-color);
}

.docs-code-block {
  background-color: var(--docs-bg-tertiary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  padding: 20px;
  margin: 16px 0 24px;
  overflow-x: auto;
}

.docs-code-block pre {
  margin: 0;
  padding: 0;
}

.docs-code-block code {
  font-family: 'Inconsolata', monospace;
  font-size: 14px;
  color: var(--docs-text-primary);
  line-height: 1.6;
}

.docs-next-prev {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--docs-border-color);
}

.docs-prev,
.docs-next {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  color: var(--docs-text-primary);
  text-decoration: none;
  font-weight: 600;
  transition: var(--docs-transition);
}

.docs-prev:hover,
.docs-next:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}
</style>
