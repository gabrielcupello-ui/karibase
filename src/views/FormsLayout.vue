<template>
  <DocsArticle
    title="Layout"
    lead="Form layout utilities in Karibase"
    :breadcrumb="[{ name: 'Forms', path: '/forms' }, { name: 'Layout' }]"
    :prev="{ name: 'Floating labels', path: '/forms/floating-labels' }"
    :next="{ name: 'Validation', path: '/forms/validation' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Form layout utilities help you organize form elements in a structured way. Use grid and spacing 
        utilities to create complex form layouts.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="form-grid">Form Grid</h2>
      <p class="docs-text">Use grid for form layout:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-grid"&gt;
  &lt;div class="kb-col-6"&gt;
    &lt;div class="kb-form-group"&gt;
      &lt;label class="kb-label"&gt;First name&lt;/label&gt;
      &lt;input type="text" class="kb-input"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="kb-col-6"&gt;
    &lt;div class="kb-form-group"&gt;
      &lt;label class="kb-label"&gt;Last name&lt;/label&gt;
      &lt;input type="text" class="kb-input"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="form-row">Form Row</h2>
      <p class="docs-text">Use form row for horizontal forms:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-row"&gt;
  &lt;div class="kb-col-7"&gt;
    &lt;input type="text" class="kb-input" placeholder="City"&gt;
  &lt;/div&gt;
  &lt;div class="kb-col-3"&gt;
    &lt;input type="text" class="kb-input" placeholder="State"&gt;
  &lt;/div&gt;
  &lt;div class="kb-col-2"&gt;
    &lt;input type="text" class="kb-input" placeholder="Zip"&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="horizontal-form">Horizontal Form</h2>
      <p class="docs-text">Horizontal form layout:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-group kb-row"&gt;
  &lt;label for="inputEmail" class="kb-col-sm-2 kb-label"&gt;Email&lt;/label&gt;
  &lt;div class="kb-col-sm-10"&gt;
    &lt;input type="email" class="kb-input" id="inputEmail"&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="inline-form">Inline Form</h2>
      <p class="docs-text">Inline form layout:</p>
      <div class="docs-code-block">
        <pre><code>&lt;form class="kb-form-inline"&gt;
  &lt;div class="kb-form-group"&gt;
    &lt;label for="inlineFormInputName" class="kb-visually-hidden"&gt;Name&lt;/label&gt;
    &lt;input type="text" class="kb-input kb-input-sm" id="inlineFormInputName" placeholder="Jane Doe"&gt;
  &lt;/div&gt;
  &lt;div class="kb-form-group"&gt;
    &lt;label for="inlineFormInputGroupUsername" class="kb-visually-hidden"&gt;Username&lt;/label&gt;
    &lt;div class="kb-input-group kb-input-group-sm"&gt;
      &lt;div class="kb-input-group-prepend"&gt;
        &lt;div class="kb-input-group-text"&gt;@&lt;/div&gt;
      &lt;/div&gt;
      &lt;input type="text" class="kb-input" id="inlineFormInputGroupUsername" placeholder="Username"&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;button type="submit" class="kb-btn kb-btn-primary kb-btn-sm"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'FormsLayout'
}
</script>