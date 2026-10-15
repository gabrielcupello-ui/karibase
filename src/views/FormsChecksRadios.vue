<template>
  <DocsArticle
    title="Checks & radios"
    lead="Checkboxes and radio buttons in Karibase"
    :breadcrumb="[{ name: 'Forms', path: '/forms' }, { name: 'Checks & radios' }]"
    :prev="{ name: 'Select', path: '/forms/select' }"
    :next="{ name: 'Range', path: '/forms/range' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="checkboxes">Checkboxes</h2>
      <p class="docs-text">Checkbox components:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="check1"&gt;
  &lt;label class="kb-form-check-label" for="check1"&gt;
    Default checkbox
  &lt;/label&gt;
&lt;/div&gt;

&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="check2" checked&gt;
  &lt;label class="kb-form-check-label" for="check2"&gt;
    Checked checkbox
  &lt;/label&gt;
&lt;/div&gt;

&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="check3" disabled&gt;
  &lt;label class="kb-form-check-label" for="check3"&gt;
    Disabled checkbox
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="radios">Radios</h2>
      <p class="docs-text">Radio button components:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="radio" name="radio1" id="radio1"&gt;
  &lt;label class="kb-form-check-label" for="radio1"&gt;
    Default radio
  &lt;/label&gt;
&lt;/div&gt;

&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="radio" name="radio1" id="radio2" checked&gt;
  &lt;label class="kb-form-check-label" for="radio2"&gt;
    Default checked radio
  &lt;/label&gt;
&lt;/div&gt;

&lt;div class="kb-form-check"&gt;
  &lt;input class="kb-form-check-input" type="radio" name="radio1" id="radio3" disabled&gt;
  &lt;label class="kb-form-check-label" for="radio3"&gt;
    Disabled radio
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="inline">Inline</h2>
      <p class="docs-text">Inline checkboxes and radios:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-check kb-form-check-inline"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="inline1"&gt;
  &lt;label class="kb-form-check-label" for="inline1"&gt;1&lt;/label&gt;
&lt;/div&gt;

&lt;div class="kb-form-check kb-form-check-inline"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="inline2"&gt;
  &lt;label class="kb-form-check-label" for="inline2"&gt;2&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="switches">Switches</h2>
      <p class="docs-text">Toggle switches:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-check kb-form-switch"&gt;
  &lt;input class="kb-form-check-input" type="checkbox" id="switch1"&gt;
  &lt;label class="kb-form-check-label" for="switch1"&gt;
    Toggle switch
  &lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'FormsChecksRadios'
}
</script>