<template>
  <DocsArticle
    title="Form control"
    lead="Textual form controls in Karibase"
    :breadcrumb="[{ name: 'Forms', path: '/forms' }, { name: 'Form control' }]"
    :prev="{ name: 'Overview', path: '/forms/overview' }"
    :next="{ name: 'Select', path: '/forms/select' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Form controls are textual input types like text, password, email, number, url, tel, search, and more. 
        They are styled with the .kb-input class.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-input">Basic Input</h2>
      <p class="docs-text">Basic form control with validation:</p>
      <div class="docs-example">
        <div class="kb-form-group">
          <label for="basicInput" class="kb-label">Email address</label>
          <input 
            type="email" 
            class="kb-input" 
            id="basicInput" 
            v-model="basicForm.email"
            :class="{ 'kb-is-valid': basicValidation.email.valid, 'kb-is-invalid': basicValidation.email.invalid }"
            @blur="validateBasicField('email')"
            placeholder="name@example.com"
            required
          >
          <div class="kb-valid-feedback" v-if="basicValidation.email.valid">Valid email!</div>
          <div class="kb-invalid-feedback" v-if="basicValidation.email.invalid">{{ basicValidation.email.message }}</div>
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-form-group"&gt;
  &lt;label for="basicInput" class="kb-label"&gt;Email address&lt;/label&gt;
  &lt;input 
    type="email" 
    class="kb-input" 
    id="basicInput" 
    v-model="basicForm.email"
    :class="{ 'kb-is-valid': basicValidation.email.valid, 'kb-is-invalid': basicValidation.email.invalid }"
    @blur="validateBasicField('email')"
    placeholder="name@example.com"
    required
  &gt;
  &lt;div class="kb-valid-feedback"&gt;Valid email!&lt;/div&gt;
  &lt;div class="kb-invalid-feedback"&gt;{{ basicValidation.email.message }}&lt;/div&gt;
&lt;/div&gt;
      </CodeViewer>
      <CodeViewer title="JavaScript">
import { ref, reactive } from 'vue'

export default {
  setup() {
    const basicForm = reactive({
      email: ''
    })

    const basicValidation = reactive({
      email: { valid: false, invalid: false, message: '' }
    })

    const validateBasicField = (field) => {
      if (field === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(basicForm.email)) {
          basicValidation.email.valid = false
          basicValidation.email.invalid = true
          basicValidation.email.message = 'Please enter a valid email address'
        } else {
          basicValidation.email.valid = true
          basicValidation.email.invalid = false
          basicValidation.email.message = ''
        }
      }
    }

    return {
      basicForm,
      basicValidation,
      validateBasicField
    }
  }
}
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="input-types">Input Types</h2>
      <p class="docs-text">Supported input types with validation:</p>
      <div class="docs-example">
        <div class="kb-form-group">
          <label for="textInput" class="kb-label">Text</label>
          <input type="text" class="kb-input" id="textInput" v-model="inputTypes.text" placeholder="Text">
        </div>
        <div class="kb-form-group">
          <label for="passwordInput" class="kb-label">Password</label>
          <input type="password" class="kb-input" id="passwordInput" v-model="inputTypes.password" placeholder="Password">
        </div>
        <div class="kb-form-group">
          <label for="numberInput" class="kb-label">Number</label>
          <input type="number" class="kb-input" id="numberInput" v-model="inputTypes.number" placeholder="Number" min="0" max="100">
        </div>
        <div class="kb-form-group">
          <label for="dateInput" class="kb-label">Date</label>
          <input type="date" class="kb-input" id="dateInput" v-model="inputTypes.date">
        </div>
      </div>
      <CodeViewer title="HTML">
&lt;div class="kb-form-group"&gt;
  &lt;label for="textInput" class="kb-label"&gt;Text&lt;/label&gt;
  &lt;input type="text" class="kb-input" id="textInput" v-model="inputTypes.text" placeholder="Text"&gt;
&lt;/div&gt;
&lt;div class="kb-form-group"&gt;
  &lt;label for="passwordInput" class="kb-label"&gt;Password&lt;/label&gt;
  &lt;input type="password" class="kb-input" id="passwordInput" v-model="inputTypes.password" placeholder="Password"&gt;
&lt;/div&gt;
&lt;div class="kb-form-group"&gt;
  &lt;label for="numberInput" class="kb-label"&gt;Number&lt;/label&gt;
  &lt;input type="number" class="kb-input" id="numberInput" v-model="inputTypes.number" placeholder="Number" min="0" max="100"&gt;
&lt;/div&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="input-sizes">Input Sizes</h2>
      <p class="docs-text">Control input sizes:</p>
      <div class="docs-code-block">
        <pre><code>&lt;input class="kb-input kb-input-sm" placeholder="Small"&gt;
&lt;input class="kb-input" placeholder="Default"&gt;
&lt;input class="kb-input kb-input-lg" placeholder="Large"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="readonly">Readonly</h2>
      <p class="docs-text">Readonly input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;input class="kb-input" type="text" placeholder="Readonly input" readonly&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="disabled">Disabled</h2>
      <p class="docs-text">Disabled input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;input class="kb-input" type="text" placeholder="Disabled input" disabled&gt;</code></pre>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
import { ref, reactive } from 'vue'
import CodeViewer from '../components/CodeViewer.vue'

export default {
  name: 'FormsFormControl',
  components: { CodeViewer, DocsArticle },
  setup() {
    const basicForm = reactive({
      email: ''
    })

    const basicValidation = reactive({
      email: { valid: false, invalid: false, message: '' }
    })

    const inputTypes = reactive({
      text: '',
      password: '',
      number: '',
      date: ''
    })

    const validateBasicField = (field) => {
      if (field === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(basicForm.email)) {
          basicValidation.email.valid = false
          basicValidation.email.invalid = true
          basicValidation.email.message = 'Please enter a valid email address'
        } else {
          basicValidation.email.valid = true
          basicValidation.email.invalid = false
          basicValidation.email.message = ''
        }
      }
    }

    return {
      basicForm,
      basicValidation,
      inputTypes,
      validateBasicField
    }
  }
}
</script>