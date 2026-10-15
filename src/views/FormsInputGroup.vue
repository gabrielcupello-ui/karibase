<template>
  <DocsArticle
    title="Input group"
    lead="Input group components in Karibase"
    :breadcrumb="[{ name: 'Forms', path: '/forms' }, { name: 'Input group' }]"
    :prev="{ name: 'Range', path: '/forms/range' }"
    :next="{ name: 'Floating labels', path: '/forms/floating-labels' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        Input groups allow you to prepend and append text or buttons to text-based inputs. They are useful 
        for adding context to form inputs.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-input-group">Basic Input Group</h2>
      <p class="docs-text">Basic input group with text:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-input-group"&gt;
  &lt;span class="kb-input-group-text"&gt;@&lt;/span&gt;
  &lt;input type="text" class="kb-input" placeholder="Username"&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="append">Append</h2>
      <p class="docs-text">Input group with appended text:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-input-group"&gt;
  &lt;input type="text" class="kb-input" placeholder="Recipient's username"&gt;
  &lt;span class="kb-input-group-text"&gt;@example.com&lt;/span&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="buttons">Buttons</h2>
      <p class="docs-text">Input group with buttons:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-input-group"&gt;
  &lt;button class="kb-btn kb-btn-outline-secondary" type="button"&gt;Button&lt;/button&gt;
  &lt;input type="text" class="kb-input" placeholder=""&gt;
  &lt;button class="kb-btn kb-btn-outline-secondary" type="button"&gt;Button&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="dropdowns">Dropdowns</h2>
      <p class="docs-text">Input group with dropdown:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-input-group"&gt;
  &lt;button class="kb-btn kb-btn-outline-secondary dropdown-toggle" type="button"&gt;
    Dropdown
  &lt;/button&gt;
  &lt;input type="text" class="kb-input" placeholder=""&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="sizing">Sizing</h2>
      <p class="docs-text">Input group sizing:</p>
      <div class="docs-code-block">
        <pre><code>&lt;div class="kb-input-group kb-input-group-sm"&gt;
  &lt;!-- Small input group --&gt;
&lt;/div&gt;

&lt;div class="kb-input-group"&gt;
  &lt;!-- Default input group --&gt;
&lt;/div&gt;

&lt;div class="kb-input-group kb-input-group-lg"&gt;
  &lt;!-- Large input group --&gt;
&lt;/div&gt;</code></pre>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'FormsInputGroup'
}
</script>