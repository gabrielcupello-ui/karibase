<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/content" class="docs-breadcrumb-link">Content</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Typography</span>
    </div>

    <h1 class="docs-heading">Typography</h1>
    <p class="docs-lead">Typography and text styles in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="headings">Headings</h2>
      <p class="docs-text">All HTML headings are available:</p>
      <div class="docs-preview">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="display-headings">Display Headings</h2>
      <p class="docs-text">Larger display-style headings:</p>
      <div class="docs-preview">
        <div class="kb-display-1">Display 1</div>
        <div class="kb-display-2">Display 2</div>
        <div class="kb-display-3">Display 3</div>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="lead">Lead</h2>
      <p class="docs-text">Make a paragraph stand out:</p>
      <div class="docs-preview">
        <p class="kb-lead">This is a lead paragraph. It's used to make important text stand out from the rest of the content.</p>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="inline-text">Inline Text Elements</h2>
      <p class="docs-text">Styling for inline text:</p>
      <div class="docs-preview">
        <p>You can use <mark>highlighted text</mark>, <del>deleted text</del>, <s>strikethrough text</s>, <u>underlined text</u>, <small>small text</small>, <strong>bold text</strong>, and <em>italic text</em>.</p>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="text-utilities">Text Utilities</h2>
      <p class="docs-text">Text alignment and transformation utilities:</p>
      <div class="docs-preview">
        <p class="kb-text-start">Left aligned text</p>
        <p class="kb-text-center">Center aligned text</p>
        <p class="kb-text-end">Right aligned text</p>
        <p class="kb-text-uppercase">uppercase text</p>
        <p class="kb-text-lowercase">LOWERCASE TEXT</p>
        <p class="kb-text-capitalize">Capitalized Text</p>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/content/reboot" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Reboot</span>
      </router-link>
      <router-link to="/content/images" class="docs-next">
        <span>Images</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentTypography'
}
</script>

<style scoped>
.docs-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  font-size: 14px;
}

.docs-breadcrumb-link {
  color: var(--docs-text-secondary);
  text-decoration: none;
  transition: var(--docs-transition);
}

.docs-breadcrumb-link:hover {
  color: var(--docs-primary-color);
}

.docs-breadcrumb-separator {
  color: var(--docs-text-muted);
}

.docs-breadcrumb-current {
  color: var(--docs-text-primary);
  font-weight: 600;
}

.docs-heading {
  font-size: 48px;
  font-weight: 800;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}

.docs-heading-2 {
  font-size: 32px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 16px;
  color: var(--docs-text-primary);
  letter-spacing: -0.01em;
}

.docs-lead {
  font-size: 20px;
  color: var(--docs-text-secondary);
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 65ch;
}

.docs-text {
  font-size: 16px;
  color: var(--docs-text-secondary);
  line-height: 1.75;
  margin: 0 0 16px;
  max-width: 65ch;
}

.docs-section {
  margin-bottom: 48px;
}

.docs-preview {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  padding: 24px;
  margin: 16px 0;
}

.docs-preview h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.docs-preview h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.docs-preview h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.docs-preview h4 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.docs-preview h5 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.docs-preview h6 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.kb-display-1 {
  font-size: 6rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.kb-display-2 {
  font-size: 5.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.kb-display-3 {
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.kb-lead {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
}

.kb-text-start {
  text-align: left;
}

.kb-text-center {
  text-align: center;
}

.kb-text-end {
  text-align: right;
}

.kb-text-uppercase {
  text-transform: uppercase;
}

.kb-text-lowercase {
  text-transform: lowercase;
}

.kb-text-capitalize {
  text-transform: capitalize;
}

.docs-next-prev {
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  padding-top: 32px;
  border-top: 1px solid var(--docs-border-color);
}

.docs-prev,
.docs-next {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  color: var(--docs-text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: var(--docs-transition);
  font-size: 14px;
}

.docs-prev:hover,
.docs-next:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}
</style>
