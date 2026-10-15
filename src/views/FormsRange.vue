<template>
  <DocsArticle
    title="Range"
    lead="Range input components in Karibase"
    :breadcrumb="[{ name: 'Forms', path: '/forms' }, { name: 'Range' }]"
    :prev="{ name: 'Checks & radios', path: '/forms/checks-radios' }"
    :next="{ name: 'Input group', path: '/forms/input-group' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Range inputs are used for selecting a value from a range. They are styled with the .kb-range class 
        and can be customized with min, max, and step attributes.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-range">Basic Range</h2>
      <p class="docs-text">Basic range input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;label for="formRange" class="kb-label"&gt;Example range&lt;/label&gt;
&lt;input type="range" class="kb-range" id="formRange"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="disabled-range">Disabled Range</h2>
      <p class="docs-text">Disabled range input:</p>
      <div class="docs-code-block">
        <pre><code>&lt;label for="disabledRange" class="kb-label"&gt;Disabled range&lt;/label&gt;
&lt;input type="range" class="kb-range" id="disabledRange" disabled&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="min-max">Min and Max</h2>
      <p class="docs-text">Set min and max values:</p>
      <div class="docs-code-block">
        <pre><code>&lt;label for="minMaxRange" class="kb-label"&gt;Min and max&lt;/label&gt;
&lt;input type="range" class="kb-range" id="minMaxRange" min="0" max="10"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="steps">Steps</h2>
      <p class="docs-text">Set step increments:</p>
      <div class="docs-code-block">
        <pre><code>&lt;label for="stepRange" class="kb-label"&gt;Steps&lt;/label&gt;
&lt;input type="range" class="kb-range" id="stepRange" min="0" max="100" step="10"&gt;</code></pre>
      </div>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'FormsRange'
}
</script>