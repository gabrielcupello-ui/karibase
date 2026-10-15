<template>
  <DocsArticle
    title="Images"
    lead="Image styles and responsive images in Karibase"
    :breadcrumb="[{ name: 'Content', path: '/content' }, { name: 'Images' }]"
    :prev="{ name: 'Typography', path: '/content/typography' }"
    :next="{ name: 'Tables', path: '/content/tables' }"
  >





    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="responsive-images">Responsive Images</h2>
      <p class="docs-text">Images are responsive by default:</p>
      <div class="docs-code-block">
        <pre><code>&lt;img src="image.jpg" class="kb-img-fluid" alt="Responsive image"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="image-thumbnails">Image Thumbnails</h2>
      <p class="docs-text">Create thumbnail images:</p>
      <div class="docs-code-block">
        <pre><code>&lt;img src="image.jpg" class="kb-img-thumbnail" alt="Thumbnail"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="rounded-images">Rounded Images</h2>
      <p class="docs-text">Add rounded corners to images:</p>
      <div class="docs-code-block">
        <pre><code>&lt;img src="image.jpg" class="kb-img-rounded" alt="Rounded image"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="circle-images">Circle Images</h2>
      <p class="docs-text">Create circular images:</p>
      <div class="docs-code-block">
        <pre><code>&lt;img src="image.jpg" class="kb-img-circle" alt="Circle image"&gt;</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="figure-captions">Figure Captions</h2>
      <p class="docs-text">Add captions to images:</p>
      <div class="docs-code-block">
        <pre><code>&lt;figure class="kb-figure"&gt;
  &lt;img src="image.jpg" class="kb-img-fluid" alt="Image"&gt;
  &lt;figcaption class="kb-figure-caption"&gt;Image caption&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
      </div>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'ContentImages'
}
</script>