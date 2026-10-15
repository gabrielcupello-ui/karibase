<template>
  <DocsArticle
    title="Buttons"
    lead="Interactive buttons with multiple styles and states"
    :breadcrumb="[{ name: 'Components', path: '/components' }, { name: 'Buttons' }]"
    :prev="{ name: 'Components', path: '/components' }"
    :next="{ name: 'Cards', path: '/components/cards' }"
  >





    <h2 class="docs-heading docs-heading-2" id="basic-buttons">Basic Buttons</h2>
    <p class="docs-text">Use the <code class="docs-inline-code">kb-btn</code> class for basic buttons:</p>

    <DocsExample>
      <button class="kb-btn kb-btn-primary">Primary</button>
    <template #code>&lt;button class="kb-btn kb-btn-primary"&gt;Primary&lt;/button&gt;</template></DocsExample>

    <h2 class="docs-heading docs-heading-2" id="button-sizes">Button Sizes</h2>
    <p class="docs-text">Buttons come in different sizes:</p>

    <DocsExample>
      <button class="kb-btn kb-btn-primary kb-btn-lg">Large</button>
    <template #code>&lt;button class="kb-btn kb-btn-primary kb-btn-lg"&gt;Large&lt;/button&gt;</template></DocsExample>

    <h2 class="docs-heading docs-heading-2" id="outline-buttons">Outline Buttons</h2>
    <p class="docs-text">Outline buttons with transparent background:</p>

    <DocsExample>
      <button class="kb-btn kb-btn-outline kb-btn-outline-primary">Primary</button>
    <template #code>&lt;button class="kb-btn kb-btn-outline kb-btn-outline-primary"&gt;Primary&lt;/button&gt;</template></DocsExample>

    <h2 class="docs-heading docs-heading-2" id="icon-buttons">Icon Buttons</h2>
    <p class="docs-text">Buttons with icons:</p>

    <DocsExample>
      <button class="kb-btn kb-btn-primary">
        <i class="fas fa-download"></i>
        Download
      </button>
    <template #code>&lt;button class="kb-btn kb-btn-primary"&gt;
  &lt;i class="fas fa-download"&gt;&lt;/i&gt;
  Download
&lt;/button&gt;</template></DocsExample>

    <h2 class="docs-heading docs-heading-2" id="button-states">Button States</h2>
    <p class="docs-text">Disabled and loading states:</p>

    <DocsExample>
      <button class="kb-btn kb-btn-primary" disabled>Disabled</button>
    <template #code>&lt;button class="kb-btn kb-btn-primary" disabled&gt;Disabled&lt;/button&gt;</template></DocsExample>


  </DocsArticle>
</template>

<script>
import { DocsExample, DocsArticle } from '@/components/docs'
export default {
  components: { DocsExample, DocsArticle },
  name: 'Buttons'
}
</script>