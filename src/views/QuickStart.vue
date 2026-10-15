<template>
  <DocsArticle
    title="Quick Start"
    lead="Get up and running with Karibase in minutes"
    :breadcrumb="[{ name: 'Getting Started', path: '/introduction' }, { name: 'Quick Start' }]"
    :prev="{ name: 'Installation', path: '/installation' }"
    :next="{ name: 'Components', path: '/components' }"
  >

    <h2 class="docs-heading docs-heading-2" id="basic-setup">Basic Setup</h2>
    <p class="docs-text">Create a new HTML file and add the Karibase CSS:</p>

    <div class="docs-code-block">
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My Karibase App&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/karibase.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class="kb-container"&gt;
    &lt;h1&gt;Hello, Karibase!&lt;/h1&gt;
    &lt;button class="kb-btn kb-btn-primary"&gt;Click me&lt;/button&gt;
  &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="vue-setup">Vue.js Setup</h2>
    <p class="docs-text">Using Karibase with Vue.js:</p>

    <div class="docs-code-block">
      <pre><code>// main.js
import { createApp } from 'vue'
import App from './App.vue'
import 'karibase/css/karibase.css'

createApp(App).mount('#app')</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="react-setup">React Setup</h2>
    <p class="docs-text">Using Karibase with React:</p>

    <div class="docs-code-block">
      <pre><code>// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'karibase/css/karibase.css'

ReactDOM.render(&lt;App /&gt;, document.getElementById('root'))</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="first-component">First Component</h2>
    <p class="docs-text">Create your first component using Karibase classes:</p>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-card"&gt;
  &lt;div class="kb-card-header"&gt;
    &lt;h3 class="kb-card-title"&gt;My Card&lt;/h3&gt;
  &lt;/div&gt;
  &lt;div class="kb-card-body"&gt;
    &lt;p class="kb-text"&gt;This is a card component.&lt;/p&gt;
    &lt;button class="kb-btn kb-btn-primary"&gt;Action&lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="docs-preview">
      <div class="kb-card">
        <div class="kb-card-header">
          <h3 class="kb-card-title">My Card</h3>
        </div>
        <div class="kb-card-body">
          <p class="kb-text">This is a card component.</p>
          <button class="kb-btn kb-btn-primary">Action</button>
        </div>
      </div>
    </div>

    <h2 class="docs-heading docs-heading-2" id="customization">Customization</h2>
    <p class="docs-text">Customize Karibase using CSS variables:</p>

    <div class="docs-code-block">
      <pre><code>:root {
  --kb-primary-color: #ea2845;
  --kb-secondary-color: #6366f1;
  --kb-border-radius: 8px;
  --kb-font-family: 'Your Font', sans-serif;
}</code></pre>
    </div>

    <div class="docs-callout docs-callout-success">
      <div class="docs-callout-icon">
        <i class="fas fa-check-circle"></i>
      </div>
      <div class="docs-callout-content">
        <h4 class="docs-callout-title">You're ready!</h4>
        <p class="docs-callout-text">You now have Karibase set up and ready to use. Check out the Components section to learn more about available components.</p>
      </div>
    </div>

  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
export default {
  components: { DocsArticle },
  name: 'QuickStart'
}
</script>