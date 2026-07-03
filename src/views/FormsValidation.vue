<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/forms" class="docs-breadcrumb-link">Forms</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Validation</span>
    </div>

    <h1 class="docs-heading">Validation</h1>
    <p class="docs-lead">Form validation styles in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Karibase provides validation styles for form controls. Use these styles to provide feedback to users 
        about the validity of their input.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="valid-inputs">Valid Inputs</h2>
      <p class="docs-text">Valid input styles with real-time validation:</p>
      <div class="docs-example">
        <div class="kb-form-group">
          <label for="validationValid" class="kb-label">Username</label>
          <input 
            type="text" 
            class="kb-input" 
            id="validationValid" 
            v-model="validationForm.username"
            :class="{ 'kb-is-valid': validationForm.username.length >= 3 }"
            placeholder="Enter username"
          >
          <div class="kb-valid-feedback" v-if="validationForm.username.length >= 3">Looks good!</div>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-form-group"&gt;
  &lt;label for="validationValid" class="kb-label"&gt;Username&lt;/label&gt;
  &lt;input 
    type="text" 
    class="kb-input" 
    id="validationValid" 
    v-model="validationForm.username"
    :class="{ 'kb-is-valid': validationForm.username.length &gt;= 3 }"
    placeholder="Enter username"
  &gt;
  &lt;div class="kb-valid-feedback"&gt;Looks good!&lt;/div&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="invalid-inputs">Invalid Inputs</h2>
      <p class="docs-text">Invalid input styles with error messages:</p>
      <div class="docs-example">
        <div class="kb-form-group">
          <label for="validationInvalid" class="kb-label">Password</label>
          <input 
            type="password" 
            class="kb-input" 
            id="validationInvalid" 
            v-model="validationForm.password"
            :class="{ 'kb-is-invalid': validationForm.password.length > 0 && validationForm.password.length < 8 }"
            placeholder="Enter password"
          >
          <div class="kb-invalid-feedback" v-if="validationForm.password.length > 0 && validationForm.password.length < 8">Password must be at least 8 characters</div>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-form-group"&gt;
  &lt;label for="validationInvalid" class="kb-label"&gt;Password&lt;/label&gt;
  &lt;input 
    type="password" 
    class="kb-input" 
    id="validationInvalid" 
    v-model="validationForm.password"
    :class="{ 'kb-is-invalid': validationForm.password.length &gt; 0 && validationForm.password.length &lt; 8 }"
    placeholder="Enter password"
  &gt;
  &lt;div class="kb-invalid-feedback"&gt;Password must be at least 8 characters&lt;/div&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="tooltips">Tooltips</h2>
      <p class="docs-text">Validation with tooltips:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-group position-relative"&gt;
  &lt;label for="validationTooltip01" class="kb-label"&gt;Username&lt;/label&gt;
  &lt;input type="text" class="kb-input kb-is-invalid" id="validationTooltip01"&gt;
  &lt;div class="kb-invalid-tooltip"&gt;
    Please choose a unique and valid username.
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="custom-validation">Custom Validation</h2>
      <p class="docs-text">Complete form with custom validation:</p>
      <div class="docs-example">
        <form @submit.prevent="submitCustomForm" class="kb-was-validated">
          <div class="kb-form-group">
            <label for="validationCustom01" class="kb-label">First name</label>
            <input 
              type="text" 
              class="kb-input" 
              id="validationCustom01" 
              v-model="customForm.firstName"
              :class="{ 'kb-is-valid': customValidation.firstName.valid, 'kb-is-invalid': customValidation.firstName.invalid }"
              @blur="validateCustomField('firstName')"
              required
              minlength="2"
            >
            <div class="kb-valid-feedback" v-if="customValidation.firstName.valid">Looks good!</div>
            <div class="kb-invalid-feedback" v-if="customValidation.firstName.invalid">{{ customValidation.firstName.message }}</div>
          </div>
          <div class="kb-form-group">
            <label for="validationCustom02" class="kb-label">Last name</label>
            <input 
              type="text" 
              class="kb-input" 
              id="validationCustom02" 
              v-model="customForm.lastName"
              :class="{ 'kb-is-valid': customValidation.lastName.valid, 'kb-is-invalid': customValidation.lastName.invalid }"
              @blur="validateCustomField('lastName')"
              required
              minlength="2"
            >
            <div class="kb-valid-feedback" v-if="customValidation.lastName.valid">Looks good!</div>
            <div class="kb-invalid-feedback" v-if="customValidation.lastName.invalid">{{ customValidation.lastName.message }}</div>
          </div>
          <div class="kb-form-group">
            <label for="validationCustom03" class="kb-label">Email</label>
            <input 
              type="email" 
              class="kb-input" 
              id="validationCustom03" 
              v-model="customForm.email"
              :class="{ 'kb-is-valid': customValidation.email.valid, 'kb-is-invalid': customValidation.email.invalid }"
              @blur="validateCustomField('email')"
              required
            >
            <div class="kb-valid-feedback" v-if="customValidation.email.valid">Valid email!</div>
            <div class="kb-invalid-feedback" v-if="customValidation.email.invalid">{{ customValidation.email.message }}</div>
          </div>
          <button class="kb-btn kb-btn-primary" type="submit">Submit form</button>
        </form>
      </div>
      <CodeViewer title="HTML">
&lt;form @submit.prevent="submitCustomForm" class="kb-was-validated"&gt;
  &lt;div class="kb-form-group"&gt;
    &lt;label for="validationCustom01" class="kb-label"&gt;First name&lt;/label&gt;
    &lt;input 
      type="text" 
      class="kb-input" 
      id="validationCustom01" 
      v-model="customForm.firstName"
      :class="{ 'kb-is-valid': customValidation.firstName.valid, 'kb-is-invalid': customValidation.firstName.invalid }"
      @blur="validateCustomField('firstName')"
      required
      minlength="2"
    &gt;
    &lt;div class="kb-valid-feedback"&gt;Looks good!&lt;/div&gt;
    &lt;div class="kb-invalid-feedback"&gt;{{ customValidation.firstName.message }}&lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="kb-btn kb-btn-primary" type="submit"&gt;Submit form&lt;/button&gt;
&lt;/form&gt;
      </CodeViewer>
      <CodeViewer title="JavaScript">
import { ref, reactive } from 'vue'

export default {
  setup() {
    const customForm = reactive({
      firstName: '',
      lastName: '',
      email: ''
    })

    const customValidation = reactive({
      firstName: { valid: false, invalid: false, message: '' },
      lastName: { valid: false, invalid: false, message: '' },
      email: { valid: false, invalid: false, message: '' }
    })

    const validateCustomField = (field) => {
      switch(field) {
        case 'firstName':
        case 'lastName':
          const value = field === 'firstName' ? customForm.firstName : customForm.lastName
          if (value.length < 2) {
            customValidation[field].valid = false
            customValidation[field].invalid = true
            customValidation[field].message = `${field === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters`
          } else {
            customValidation[field].valid = true
            customValidation[field].invalid = false
            customValidation[field].message = ''
          }
          break
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(customForm.email)) {
            customValidation.email.valid = false
            customValidation.email.invalid = true
            customValidation.email.message = 'Please enter a valid email address'
          } else {
            customValidation.email.valid = true
            customValidation.email.invalid = false
            customValidation.email.message = ''
          }
          break
      }
    }

    const submitCustomForm = () => {
      validateCustomField('firstName')
      validateCustomField('lastName')
      validateCustomField('email')
      
      const isValid = Object.values(customValidation).every(v => v.valid)
      
      if (isValid) {
        alert('Form submitted successfully!')
      } else {
        alert('Please fix the errors before submitting')
      }
    }

    return {
      customForm,
      customValidation,
      validateCustomField,
      submitCustomForm
    }
  }
}
      </CodeViewer>
    </div>

    <div class="docs-next-prev">
      <router-link to="/forms/layout" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Layout</span>
      </router-link>
      <router-link to="/components/accordion" class="docs-next">
        <span>Components</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import CodeViewer from '../components/CodeViewer.vue'

export default {
  name: 'FormsValidation',
  components: {
    CodeViewer
  },
  setup() {
    const validationForm = reactive({
      username: '',
      password: ''
    })

    const customForm = reactive({
      firstName: '',
      lastName: '',
      email: ''
    })

    const customValidation = reactive({
      firstName: { valid: false, invalid: false, message: '' },
      lastName: { valid: false, invalid: false, message: '' },
      email: { valid: false, invalid: false, message: '' }
    })

    const validateCustomField = (field) => {
      switch(field) {
        case 'firstName':
        case 'lastName':
          const value = field === 'firstName' ? customForm.firstName : customForm.lastName
          if (value.length < 2) {
            customValidation[field].valid = false
            customValidation[field].invalid = true
            customValidation[field].message = `${field === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters`
          } else {
            customValidation[field].valid = true
            customValidation[field].invalid = false
            customValidation[field].message = ''
          }
          break
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(customForm.email)) {
            customValidation.email.valid = false
            customValidation.email.invalid = true
            customValidation.email.message = 'Please enter a valid email address'
          } else {
            customValidation.email.valid = true
            customValidation.email.invalid = false
            customValidation.email.message = ''
          }
          break
      }
    }

    const submitCustomForm = () => {
      validateCustomField('firstName')
      validateCustomField('lastName')
      validateCustomField('email')
      
      const isValid = Object.values(customValidation).every(v => v.valid)
      
      if (isValid) {
        alert('Form submitted successfully!')
      } else {
        alert('Please fix the errors before submitting')
      }
    }

    return {
      validationForm,
      customForm,
      customValidation,
      validateCustomField,
      submitCustomForm
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
  font-size: 48px;
  font-weight: 800;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}

.docs-heading-2 {
  font-size: 32px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 16px;
  color: var(--docs-text-primary);
  letter-spacing: -0.01em;
}

.docs-lead {
  font-size: 20px;
  color: var(--docs-text-secondary);
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 65ch;
}

.docs-text {
  font-size: 16px;
  color: var(--docs-text-secondary);
  line-height: 1.75;
  margin: 0 0 16px;
  max-width: 65ch;
}

.docs-section {
  margin-bottom: 48px;
}

.docs-example {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  padding: 24px;
  margin: 16px 0 24px;
}

.docs-code-block {
  background-color: #1e1e1e;
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
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
  font-size: 14px;
  color: #e5e7eb;
  line-height: 1.6;
}

.docs-next-prev {
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  padding-top: 32px;
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
  font-weight: 500;
  transition: var(--docs-transition);
  font-size: 14px;
}

.docs-prev:hover,
.docs-next:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}
</style>
