<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/content" class="docs-breadcrumb-link">Content</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Figures</span>
    </div>

    <h1 class="docs-heading">Figures</h1>
    <p class="docs-lead">Figure and caption components in Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="basic-figure">Basic Figure</h2>
      <p class="docs-text">Create a basic figure with caption:</p>
      <div class="docs-example">
        <figure class="kb-figure">
          <img src="https://via.placeholder.com/400x200" class="kb-img-fluid" alt="Placeholder image">
          <figcaption class="kb-figure-caption">
            Caption text here
          </figcaption>
        </figure>
      </div>
      <CodeViewer title="HTML">
&lt;figure class="kb-figure"&gt;
  &lt;img src="image.jpg" class="kb-img-fluid" alt="Description"&gt;
  &lt;figcaption class="kb-figure-caption"&gt;
    Caption text here
  &lt;/figcaption&gt;
&lt;/figure&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="figure-alignment">Figure Alignment</h2>
      <p class="docs-text">Align figures using text utilities:</p>
      <div class="docs-example">
        <figure class="kb-figure kb-text-center">
          <img src="https://via.placeholder.com/400x200" class="kb-img-fluid" alt="Placeholder image">
          <figcaption class="kb-figure-caption">
            Centered caption
          </figcaption>
        </figure>
      </div>
      <CodeViewer title="HTML">
&lt;figure class="kb-figure kb-text-center"&gt;
  &lt;img src="image.jpg" class="kb-img-fluid" alt="Description"&gt;
  &lt;figcaption class="kb-figure-caption"&gt;
    Centered caption
  &lt;/figcaption&gt;
&lt;/figure&gt;
      </CodeViewer>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="figure-caption">Figure Caption</h2>
      <p class="docs-text">Style the caption text:</p>
      <div class="docs-example">
        <figure class="kb-figure">
          <figcaption class="kb-figure-caption">
            This is a caption that describes the image above.
          </figcaption>
        </figure>
      </div>
      <CodeViewer title="HTML">
&lt;figure class="kb-figure"&gt;
  &lt;figcaption class="kb-figure-caption"&gt;
    This is a caption that describes the image above.
  &lt;/figcaption&gt;
&lt;/figure&gt;
      </CodeViewer>
    </div>

    <div class="docs-next-prev">
      <router-link to="/content/tables" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Tables</span>
      </router-link>
      <router-link to="/forms/overview" class="docs-next">
        <span>Forms</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import CodeViewer from '../components/CodeViewer.vue'

export default {
  name: 'ContentFigures',
  components: {
    CodeViewer
  }
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

.docs-example {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  padding: 24px;
  margin: 16px 0 24px;
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
