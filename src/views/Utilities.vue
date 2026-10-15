<template>
  <DocsArticle
    title="Utilities"
    lead="Helper classes for common styling needs"
    :prev="{ name: 'Layout', path: '/layout' }"
    :next="{ name: 'Theming', path: '/theming' }"
  >





    <h2 class="docs-heading docs-heading-2" id="spacing">Spacing</h2>
    <p class="docs-text">Margin and padding utilities:</p>

    <div class="docs-preview">
      <div class="kb-mb-4">
        <div class="kb-p-4 kb-bg-tertiary">
          Margin bottom 4, Padding 4
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-mb-4"&gt;
  &lt;div class="kb-p-4 kb-bg-tertiary"&gt;
    Content
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="text-utilities">Text Utilities</h2>
    <p class="docs-text">Text alignment, color, and size:</p>

    <DocsExample>
      <p class="kb-text-center">Centered text</p>
      <p class="kb-text-primary">Primary color text</p>
      <p class="kb-text-lg">Large text</p>
      <p class="kb-text-muted">Muted text</p>
    <template #code>&lt;p class="kb-text-center"&gt;Centered text&lt;/p&gt;
&lt;p class="kb-text-primary"&gt;Primary color text&lt;/p&gt;
&lt;p class="kb-text-lg"&gt;Large text&lt;/p&gt;
&lt;p class="kb-text-muted"&gt;Muted text&lt;/p&gt;</template></DocsExample>

    <h2 class="docs-heading docs-heading-2" id="display">Display</h2>
    <p class="docs-text">Display utilities:</p>

    <div class="docs-preview">
      <div class="kb-d-flex kb-justify-between kb-align-center">
        <span>Flex item 1</span>
        <span>Flex item 2</span>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-d-flex kb-justify-between kb-align-center"&gt;
  &lt;span&gt;Flex item 1&lt;/span&gt;
  &lt;span&gt;Flex item 2&lt;/span&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="borders">Borders</h2>
    <p class="docs-text">Border utilities:</p>

    <div class="docs-preview">
      <div class="kb-border kb-border-primary kb-rounded kb-p-4">
        Bordered box
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-border kb-border-primary kb-rounded kb-p-4"&gt;
  Bordered box
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="backgrounds">Backgrounds</h2>
    <p class="docs-text">Background color utilities:</p>

    <div class="docs-preview">
      <div class="kb-bg-primary kb-text-white kb-p-4 kb-rounded mb-2">Primary background</div>
      <div class="kb-bg-secondary kb-p-4 kb-rounded mb-2">Secondary background</div>
      <div class="kb-bg-tertiary kb-p-4 kb-rounded">Tertiary background</div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-bg-primary kb-text-white kb-p-4 kb-rounded"&gt;
  Primary background
&lt;/div&gt;</code></pre>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsExample, DocsArticle } from '@/components/docs'
export default {
  components: { DocsExample, DocsArticle },
  name: 'Utilities'
}
</script>

 scoped>


.kb-mb-4 {
  margin-bottom: 16px;
}


.kb-p-4 {
  padding: 16px;
}


.kb-bg-tertiary {
  background-color: var(--docs-bg-tertiary);
  color: var(--docs-text-primary);
}


.kb-text-center {
  text-align: center;
}


.kb-text-primary {
  color: var(--docs-primary-color);
}


.kb-text-lg {
  font-size: 18px;
}


.kb-text-muted {
  color: var(--docs-text-muted);
}


.kb-d-flex {
  display: flex;
}


.kb-justify-between {
  justify-content: space-between;
}


.kb-align-center {
  align-items: center;
}


.kb-border {
  border: 1px solid var(--docs-border-color);
}


.kb-border-primary {
  border-color: var(--docs-primary-color);
}


.kb-rounded {
  border-radius: 8px;
}


.kb-bg-primary {
  background-color: var(--docs-primary-color);
  color: white;
}


.kb-text-white {
  color: white;
}


.kb-bg-secondary {
  background-color: var(--docs-bg-tertiary);
}


.mb-2 {
  margin-bottom: 8px;
}
</style>
