<template>
  <DocsArticle
    title="Floating labels"
    lead="Floating label components in Karibase"
    :breadcrumb="[{ name: 'Forms', path: '/forms' }, { name: 'Floating labels' }]"
    :prev="{ name: 'Input group', path: '/forms/input-group' }"
    :next="{ name: 'Layout', path: '/forms/layout' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Floating labels are labels that float above the input when the input has value or is focused. 
        They provide a clean and modern form experience.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-floating">Basic Floating Label</h2>
      <p class="docs-text">Basic floating label:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;input type="text" class="kb-input" id="floatingInput" placeholder="Name"&gt;
  &lt;label for="floatingInput"&gt;Name&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="value-set">Value Set</h2>
      <p class="docs-text">Floating label with value set:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;input type="text" class="kb-input" id="floatingInput" placeholder="Name" value="John"&gt;
  &lt;label for="floatingInput"&gt;Name&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="text-input">Text Input</h2>
      <p class="docs-text">Floating label with text input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;input type="text" class="kb-input" id="floatingText" placeholder="Text"&gt;
  &lt;label for="floatingText"&gt;Text&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="password">Password</h2>
      <p class="docs-text">Floating label with password input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;input type="password" class="kb-input" id="floatingPassword" placeholder="Password"&gt;
  &lt;label for="floatingPassword"&gt;Password&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="textarea">Textarea</h2>
      <p class="docs-text">Floating label with textarea:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;textarea class="kb-input" id="floatingTextarea" placeholder="Comments"&gt;&lt;/textarea&gt;
  &lt;label for="floatingTextarea"&gt;Comments&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="select">Select</h2>
      <p class="docs-text">Floating label with select:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-form-floating"&gt;
  &lt;select class="kb-select" id="floatingSelect"&gt;
    &lt;option selected&gt;Open this select menu&lt;/option&gt;
    &lt;option value="1"&gt;One&lt;/option&gt;
    &lt;option value="2"&gt;Two&lt;/option&gt;
  &lt;/select&gt;
  &lt;label for="floatingSelect"&gt;Works with selects&lt;/label&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'FormsFloatingLabels'
}
</script>