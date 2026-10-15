<template>
  <DocsArticle
    title="Select"
    lead="Select dropdown components in Karibase"
    :breadcrumb="[{ name: 'Forms', path: '/forms' }, { name: 'Select' }]"
    :prev="{ name: 'Form control', path: '/forms/form-control' }"
    :next="{ name: 'Checks & radios', path: '/forms/checks-radios' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Select components are used for dropdown menus. They are styled with the .kb-select class and 
        can be customized with various options.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-select">Basic Select</h2>
      <p class="docs-text">Basic select dropdown:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-group"&gt;
  &lt;label for="exampleSelect" class="kb-label"&gt;Example select&lt;/label&gt;
  &lt;select class="kb-select" id="exampleSelect"&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value="1"&gt;One&lt;/option&gt;
    &lt;option value="2"&gt;Two&lt;/option&gt;
    &lt;option value="3"&gt;Three&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="sizing">Sizing</h2>
      <p class="docs-text">Control select size:</p>
      <div class="docs-code-block">
        <pre><code>&lt;select class="kb-select kb-select-sm"&gt;
  &lt;!-- Small select --&gt;
&lt;/select&gt;

&lt;select class="kb-select"&gt;
  &lt;!-- Default select --&gt;
&lt;/select&gt;

&lt;select class="kb-select kb-select-lg"&gt;
  &lt;!-- Large select --&gt;
&lt;/select&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="multiple">Multiple</h2>
      <p class="docs-text">Multiple select:</p>
      <div class="docs-code-block">
        <pre><code>&lt;select class="kb-select" multiple&gt;
  &lt;option value="1"&gt;One&lt;/option&gt;
  &lt;option value="2"&gt;Two&lt;/option&gt;
  &lt;option value="3"&gt;Three&lt;/option&gt;
&lt;/select&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="disabled">Disabled</h2>
      <p class="docs-text">Disabled select:</p>
      <div class="docs-code-block">
        <pre><code>&lt;select class="kb-select" disabled&gt;
  &lt;option selected&gt;Disabled select&lt;/option&gt;
&lt;/select&gt;</code></pre>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'FormsSelect'
}
</script>