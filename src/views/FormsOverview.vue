<template>
  <DocsArticle
    title="Forms"
    lead="Form components and styles in Karibase"
    :breadcrumb="[{ name: 'Forms', path: '/forms' }, { name: 'Overview' }]"
    :prev="{ name: 'Figures', path: '/content/figures' }"
    :next="{ name: 'Form control', path: '/forms/form-control' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="form-control">Form Control</h2>
      <p class="docs-text">Textual form controls:</p>
      <div class="docs-example">
        <div class="kb-form-group">
          <label for="exampleInputEmail1" class="kb-label">Email address</label>
          <input type="email" class="kb-input" id="exampleInputEmail1" placeholder="name@example.com">
          <small class="kb-form-text">We'll never share your email with anyone else.</small>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-form-group"&gt;
  &lt;label for="exampleInputEmail1" class="kb-label"&gt;Email address&lt;/label&gt;
  &lt;input type="email" class="kb-input" id="exampleInputEmail1" placeholder="name@example.com"&gt;
  &lt;small class="kb-form-text"&gt;We'll never share your email with anyone else.&lt;/small&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="form-select">Form Select</h2>
      <p class="docs-text">Select dropdowns:</p>
      <div class="docs-example">
        <div class="kb-form-group">
          <label for="exampleSelect" class="kb-label">Example select</label>
          <select class="kb-select" id="exampleSelect">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-form-group"&gt;
  &lt;label for="exampleSelect" class="kb-label"&gt;Example select&lt;/label&gt;
  &lt;select class="kb-select" id="exampleSelect"&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value="1"&gt;One&lt;/option&gt;
    &lt;option value="2"&gt;Two&lt;/option&gt;
    &lt;option value="3"&gt;Three&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="checks-radios">Checks & Radios</h2>
      <p class="docs-text">Checkboxes and radio buttons:</p>
      <div class="docs-example">
        <div class="kb-form-check">
          <input class="kb-form-check-input" type="checkbox" id="check1">
          <label class="kb-form-check-label" for="check1">
            Default checkbox
          </label>
        </div>
        <div class="kb-form-check">
          <input class="kb-form-check-input" type="radio" name="radio1" id="radio1">
          <label class="kb-form-check-label" for="radio1">
            Default radio
          </label>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="check1"&gt;
  &lt;label class="kb-form-check-label" for="check1"&gt;
    Default checkbox
  &lt;/label&gt;
&lt;/div&gt;

&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="radio" name="radio1" id="radio1"&gt;
  &lt;label class="kb-form-check-label" for="radio1"&gt;
    Default radio
  &lt;/label&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="range">Range</h2>
      <p class="docs-text">Range input:</p>
      <div class="docs-example">
        <label for="formRange" class="kb-label">Example range</label>
        <input type="range" class="kb-range" id="formRange">
      </div>
      <CodeViewer title="HTML">
&lt;label for="formRange" class="kb-label"&gt;Example range&lt;/label&gt;
&lt;input type="range" class="kb-range" id="formRange"&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="input-group">Input Group</h2>
      <p class="docs-text">Group inputs with text or buttons:</p>
      <div class="docs-example">
        <div class="kb-input-group">
          <span class="kb-input-group-text">@</span>
          <input type="text" class="kb-input" placeholder="Username">
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-input-group"&gt;
  &lt;span class="kb-input-group-text"&gt;@&lt;/span&gt;
  &lt;input type="text" class="kb-input" placeholder="Username"&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="floating-labels">Floating Labels</h2>
      <p class="docs-text">Floating labels for inputs:</p>
      <div class="docs-example">
        <div class="kb-form-floating">
          <input type="text" class="kb-input" id="floatingInput" placeholder="Name">
          <label for="floatingInput">Name</label>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-form-floating"&gt;
  &lt;input type="text" class="kb-input" id="floatingInput" placeholder="Name"&gt;
  &lt;label for="floatingInput"&gt;Name&lt;/label&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="validation">Validation</h2>
      <p class="docs-text">Form validation with JavaScript:</p>
      <div class="docs-example">
        <form @submit.prevent="validateForm" class="kb-was-validated">
          <div class="kb-form-group">
            <label for="validationUsername" class="kb-label">Username</label>
            <input 
              type="text" 
              class="kb-input" 
              id="validationUsername" 
              v-model="form.username"
              :class="{ 'kb-is-valid': validation.username.valid, 'kb-is-invalid': validation.username.invalid }"
              @blur="validateField('username')"
              required
              minlength="3"
            >
            <div class="kb-valid-feedback" v-if="validation.username.valid">Looks good!</div>
            <div class="kb-invalid-feedback" v-if="validation.username.invalid">{{ validation.username.message }}</div>
          </div>
          <div class="kb-form-group">
            <label for="validationEmail" class="kb-label">Email</label>
            <input 
              type="email" 
              class="kb-input" 
              id="validationEmail" 
              v-model="form.email"
              :class="{ 'kb-is-valid': validation.email.valid, 'kb-is-invalid': validation.email.invalid }"
              @blur="validateField('email')"
              required
            >
            <div class="kb-valid-feedback" v-if="validation.email.valid">Valid email!</div>
            <div class="kb-invalid-feedback" v-if="validation.email.invalid">{{ validation.email.message }}</div>
          </div>
          <div class="kb-form-group">
            <label for="validationPassword" class="kb-label">Password</label>
            <input 
              type="password" 
              class="kb-input" 
              id="validationPassword" 
              v-model="form.password"
              :class="{ 'kb-is-valid': validation.password.valid, 'kb-is-invalid': validation.password.invalid }"
              @blur="validateField('password')"
              required
              minlength="8"
            >
            <div class="kb-valid-feedback" v-if="validation.password.valid">Strong password!</div>
            <div class="kb-invalid-feedback" v-if="validation.password.invalid">{{ validation.password.message }}</div>
          </div>
          <div class="kb-form-group">
            <label for="validationConfirm" class="kb-label">Confirm Password</label>
            <input 
              type="password" 
              class="kb-input" 
              id="validationConfirm" 
              v-model="form.confirmPassword"
              :class="{ 'kb-is-valid': validation.confirmPassword.valid, 'kb-is-invalid': validation.confirmPassword.invalid }"
              @blur="validateField('confirmPassword')"
              required
            >
            <div class="kb-valid-feedback" v-if="validation.confirmPassword.valid">Passwords match!</div>
            <div class="kb-invalid-feedback" v-if="validation.confirmPassword.invalid">{{ validation.confirmPassword.message }}</div>
          </div>
          <div class="kb-form-check">
            <input class="kb-form-check-input" type="checkbox" id="validationTerms" v-model="form.terms" required>
            <label class="kb-form-check-label" for="validationTerms">
              Agree to terms and conditions
            </label>
            <div class="kb-invalid-feedback" v-if="!form.terms">You must agree before submitting.</div>
          </div>
          <button class="kb-btn kb-btn-primary" type="submit">Submit form</button>
        </form>
      </div>
      <CodeViewer title="HTML">
&lt;form @submit.prevent="validateForm" class="kb-was-validated"&gt;
  &lt;div class="kb-form-group"&gt;
    &lt;label for="validationUsername" class="kb-label"&gt;Username&lt;/label&gt;
    &lt;input 
      type="text" 
      class="kb-input" 
      id="validationUsername" 
      v-model="form.username"
      :class="{ 'kb-is-valid': validation.username.valid, 'kb-is-invalid': validation.username.invalid }"
      @blur="validateField('username')"
      required
      minlength="3"
    &gt;
    &lt;div class="kb-valid-feedback"&gt;Looks good!&lt;/div&gt;
    &lt;div class="kb-invalid-feedback"&gt;{{ validation.username.message }}&lt;/div&gt;
  &lt;/div&gt;
  &lt;button class="kb-btn kb-btn-primary" type="submit"&gt;Submit form&lt;/button&gt;
&lt;/form&gt;
      </CodeViewer>
      <CodeViewer title="JavaScript">
import { ref, reactive } from 'vue'

export default {
  setup() {
    const form = reactive({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false
    })

    const validation = reactive({
      username: { valid: false, invalid: false, message: '' },
      email: { valid: false, invalid: false, message: '' },
      password: { valid: false, invalid: false, message: '' },
      confirmPassword: { valid: false, invalid: false, message: '' }
    })

    const validateField = (field) => {
      switch(field) {
        case 'username':
          if (form.username.length < 3) {
            validation.username.valid = false
            validation.username.invalid = true
            validation.username.message = 'Username must be at least 3 characters'
          } else {
            validation.username.valid = true
            validation.username.invalid = false
            validation.username.message = ''
          }
          break
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(form.email)) {
            validation.email.valid = false
            validation.email.invalid = true
            validation.email.message = 'Please enter a valid email address'
          } else {
            validation.email.valid = true
            validation.email.invalid = false
            validation.email.message = ''
          }
          break
        case 'password':
          if (form.password.length < 8) {
            validation.password.valid = false
            validation.password.invalid = true
            validation.password.message = 'Password must be at least 8 characters'
          } else if (!/[A-Z]/.test(form.password)) {
            validation.password.valid = false
            validation.password.invalid = true
            validation.password.message = 'Password must contain at least one uppercase letter'
          } else if (!/[0-9]/.test(form.password)) {
            validation.password.valid = false
            validation.password.invalid = true
            validation.password.message = 'Password must contain at least one number'
          } else if (!/[!@#$%^&*]/.test(form.password)) {
            validation.password.valid = false
            validation.password.invalid = true
            validation.password.message = 'Password must contain at least one special character'
          } else {
            validation.password.valid = true
            validation.password.invalid = false
            validation.password.message = ''
          }
          break
        case 'confirmPassword':
          if (form.confirmPassword !== form.password) {
            validation.confirmPassword.valid = false
            validation.confirmPassword.invalid = true
            validation.confirmPassword.message = 'Passwords do not match'
          } else {
            validation.confirmPassword.valid = true
            validation.confirmPassword.invalid = false
            validation.confirmPassword.message = ''
          }
          break
      }
    }

    const validateForm = () => {
      validateField('username')
      validateField('email')
      validateField('password')
      validateField('confirmPassword')

      const isValid = Object.values(validation).every(v => v.valid)

      if (isValid && form.terms) {
        alert('Form submitted successfully!')
        // Submit form data
      } else {
        alert('Please fix the errors before submitting')
      }
    }

    return {
      form,
      validation,
      validateField,
      validateForm
    }
  }
}
      </CodeViewer>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
import { ref, reactive } from 'vue'
import CodeViewer from '../components/CodeViewer.vue'

export default {
  name: 'FormsOverview',
  components: { CodeViewer, DocsArticle },
  setup() {
    const form = reactive({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false
    })

    const validation = reactive({
      username: { valid: false, invalid: false, message: '' },
      email: { valid: false, invalid: false, message: '' },
      password: { valid: false, invalid: false, message: '' },
      confirmPassword: { valid: false, invalid: false, message: '' }
    })

    const validateField = (field) => {
      switch(field) {
        case 'username':
          if (form.username.length < 3) {
            validation.username.valid = false
            validation.username.invalid = true
            validation.username.message = 'Username must be at least 3 characters'
          } else {
            validation.username.valid = true
            validation.username.invalid = false
            validation.username.message = ''
          }
          break
        case 'email':
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(form.email)) {
            validation.email.valid = false
            validation.email.invalid = true
            validation.email.message = 'Please enter a valid email address'
          } else {
            validation.email.valid = true
            validation.email.invalid = false
            validation.email.message = ''
          }
          break
        case 'password':
          if (form.password.length < 8) {
            validation.password.valid = false
            validation.password.invalid = true
            validation.password.message = 'Password must be at least 8 characters'
          } else if (!/[A-Z]/.test(form.password)) {
            validation.password.valid = false
            validation.password.invalid = true
            validation.password.message = 'Password must contain at least one uppercase letter'
          } else if (!/[0-9]/.test(form.password)) {
            validation.password.valid = false
            validation.password.invalid = true
            validation.password.message = 'Password must contain at least one number'
          } else if (!/[!@#$%^&*]/.test(form.password)) {
            validation.password.valid = false
            validation.password.invalid = true
            validation.password.message = 'Password must contain at least one special character'
          } else {
            validation.password.valid = true
            validation.password.invalid = false
            validation.password.message = ''
          }
          break
        case 'confirmPassword':
          if (form.confirmPassword !== form.password) {
            validation.confirmPassword.valid = false
            validation.confirmPassword.invalid = true
            validation.confirmPassword.message = 'Passwords do not match'
          } else {
            validation.confirmPassword.valid = true
            validation.confirmPassword.invalid = false
            validation.confirmPassword.message = ''
          }
          break
      }
    }

    const validateForm = () => {
      validateField('username')
      validateField('email')
      validateField('password')
      validateField('confirmPassword')

      const isValid = Object.values(validation).every(v => v.valid)

      if (isValid && form.terms) {
        alert('Form submitted successfully!')
      } else {
        alert('Please fix the errors before submitting')
      }
    }

    return {
      form,
      validation,
      validateField,
      validateForm
    }
  }
}
</script>