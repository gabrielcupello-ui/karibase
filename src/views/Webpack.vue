<template>
  <DocsArticle
    title="Webpack"
    lead="Using Karibase with Webpack"
    :prev="{ name: 'JavaScript', path: '/javascript' }"
    :next="{ name: 'Parcel', path: '/parcel' }"
  >

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="installation">Installation</h2>
      <p class="docs-text">Install Karibase and required loaders:</p>
      <div class="docs-code-block">
        <pre><code>npm install karibase
npm install --save-dev css-loader style-loader sass-loader sass</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="configuration">Configuration</h2>
      <p class="docs-text">Configure webpack to handle Karibase styles:</p>
      <div class="docs-code-block">
        <pre><code>// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="importing">Importing</h2>
      <p class="docs-text">Import Karibase in your JavaScript:</p>
      <div class="docs-code-block">
        <pre><code>// Import compiled CSS
import 'karibase/css/karibase.css'

// Or import SCSS for customization
import 'karibase/scss/karibase.scss'</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="customization">Customization</h2>
      <p class="docs-text">Customize Karibase with SCSS variables:</p>
      <div class="docs-code-block">
        <pre><code>// styles.scss
@import 'karibase/scss/variables';

// Override variables
$kb-primary: #ea2845;
$kb-secondary: #6366f1;

@import 'karibase/scss/karibase';</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="optimization">Optimization</h2>
      <p class="docs-text">Optimize your build with these plugins:</p>
      <div class="docs-code-block">
        <pre><code>npm install --save-dev mini-css-extract-plugin css-minimizer-webpack-plugin</code></pre>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'Webpack'
}
</script>