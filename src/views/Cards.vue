<template>
  <DocsArticle
    title="Cards"
    lead="Container components for content organization"
    :breadcrumb="[{ name: 'Components', path: '/components' }, { name: 'Cards' }]"
    :prev="{ name: 'Buttons', path: '/components/buttons' }"
    :next="{ name: 'Forms', path: '/components/forms' }"
  >

    <h2 class="docs-heading docs-heading-2" id="basic-card">Basic Card</h2>
    <p class="docs-text">A simple card with header, body, and footer:</p>

    <div class="docs-preview">
      <div class="kb-card">
        <div class="kb-card-header">
          <h3 class="kb-card-title">Card Title</h3>
        </div>
        <div class="kb-card-body">
          <p class="kb-text">This is the card body content. You can put any content here.</p>
        </div>
        <div class="kb-card-footer">
          <button class="kb-btn kb-btn-primary">Action</button>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-card"&gt;
  &lt;div class="kb-card-header"&gt;
    &lt;h3 class="kb-card-title"&gt;Card Title&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="kb-card-body"&gt;
    &lt;p class="kb-text"&gt;Card content&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class="kb-card-footer"&gt;
    &lt;button class="kb-btn kb-btn-primary"&gt;Action&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="card-variants">Card Variants</h2>
    <p class="docs-text">Cards with different styles:</p>

    <div class="docs-preview">
      <div class="kb-card kb-card-primary">
        <div class="kb-card-header">
          <h3 class="kb-card-title">Primary Card</h3>
        </div>
        <div class="kb-card-body">
          <p class="kb-text">Primary styled card</p>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-card kb-card-primary"&gt;
  &lt;div class="kb-card-header"&gt;
    &lt;h3 class="kb-card-title"&gt;Primary Card&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="kb-card-body"&gt;
    &lt;p class="kb-text"&gt;Primary styled card&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="card-with-image">Card with Image</h2>
    <p class="docs-text">Card with an image section:</p>

    <div class="docs-preview">
      <div class="kb-card">
        <div class="kb-card-image">
          <div class="kb-card-image-placeholder">Image</div>
        </div>
        <div class="kb-card-body">
          <h3 class="kb-card-title">Card with Image</h3>
          <p class="kb-text">This card includes an image section at the top.</p>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-card"&gt;
  &lt;div class="kb-card-image"&gt;
    &lt;img src="image.jpg" alt="Card image"&gt;
  &lt;/div&gt;
  &lt;div class="kb-card-body"&gt;
    &lt;h3 class="kb-card-title"&gt;Title&lt;/h3&gt;
    &lt;p class="kb-text"&gt;Content&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'Cards'
}
</script>

<style scoped>

.kb-card {
  background-color: var(--docs-bg-primary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
  overflow: hidden;
  max-width: 300px;
}

.kb-card-header {
  padding: 16px;
  border-bottom: 1px solid var(--docs-border-color);
}

.kb-card-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--docs-text-primary);
  margin: 0;
}

.kb-card-body {
  padding: 16px;
}

.kb-text {
  font-size: 14px;
  color: var(--docs-text-secondary);
  margin: 0;
  line-height: 1.6;
}

.kb-card-footer {
  padding: 16px;
  border-top: 1px solid var(--docs-border-color);
  display: flex;
  gap: 8px;
}

.kb-card-image-placeholder {
  width: 100%;
  height: 150px;
  background-color: var(--docs-bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--docs-text-muted);
  font-size: 14px;
}
</style>
