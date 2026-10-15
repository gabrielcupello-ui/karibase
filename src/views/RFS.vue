<template>
  <DocsArticle
    title="RFS"
    lead="Responsive Font Sizes for Karibase"
    :prev="{ name: 'Accessibility', path: '/accessibility' }"
    :next="{ name: 'RTL', path: '/rtl' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="overview">Overview</h2>
      <p class="docs-text">
        RFS (Responsive Font Sizes) is a unit engine that automatically generates responsive font sizes. 
        Karibase uses RFS to ensure that typography scales beautifully across all screen sizes.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="how-it-works">How it Works</h2>
      <p class="docs-text">RFS calculates the appropriate font size based on the viewport width:</p>
      <ul class="docs-list">
        <li>Small screens: Uses smaller font sizes</li>
        <li>Medium screens: Uses medium font sizes</li>
        <li>Large screens: Uses larger font sizes</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="usage">Usage</h2>
      <p class="docs-text">Use RFS in your CSS:</p>
      <div class="docs-code-block">
        <pre><code>/* Using RFS mixin */
.title {
  @include font-size(2rem);
}

/* Using RFS function */
.subtitle {
  font-size: rfs(1.5rem);
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="configuration">Configuration</h2>
      <p class="docs-text">Configure RFS variables:</p>
      <div class="docs-code-block">
        <pre><code>$rfs-base-font-size: 1rem;
$rfs-font-size-unit: rem;
$rfs-breakpoint: 1200px;
$rfs-factor: 10;</code></pre>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'RFS'
}
</script>