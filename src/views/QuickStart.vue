<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/introduction" class="docs-breadcrumb-link">Getting Started</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Quick Start</span>
    </div>

    <h1 class="docs-heading">Quick Start</h1>
    <p class="docs-lead">Get up and running with Karibase in minutes</p>

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

    <div class="docs-next-prev">
      <router-link to="/installation" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Installation</span>
      </router-link>
      <router-link to="/components" class="docs-next">
        <span>Components</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickStart'
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
  font-size: 40px;
  font-weight: 800;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
  scroll-margin-top: 100px;
}

.docs-heading-2 {
  font-size: 28px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 16px;
}

.docs-lead {
  font-size: 20px;
  color: var(--docs-text-secondary);
  line-height: 1.6;
  margin: 0 0 24px;
}

.docs-text {
  font-size: 16px;
  color: var(--docs-text-secondary);
  line-height: 1.8;
  margin: 0 0 16px;
}

.docs-code-block {
  background-color: var(--docs-bg-tertiary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  padding: 20px;
  margin: 16px 0 24px;
  overflow-x: auto;
}

.docs-code-block pre {
  margin: 0;
  padding: 0;
}

.docs-code-block code {
  font-family: 'Inconsolata', monospace;
  font-size: 14px;
  color: var(--docs-text-primary);
  line-height: 1.6;
}

.docs-preview {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
  padding: 32px;
  margin: 24px 0;
}

.docs-callout {
  display: flex;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  margin: 32px 0;
}

.docs-callout-success {
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.docs-callout-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  color: #10b981;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.docs-callout-content {
  flex: 1;
}

.docs-callout-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--docs-text-primary);
  margin: 0 0 8px;
}

.docs-callout-text {
  font-size: 14px;
  color: var(--docs-text-secondary);
  margin: 0;
  line-height: 1.6;
}

.docs-next-prev {
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  padding-top: 24px;
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
  font-weight: 600;
  transition: var(--docs-transition);
}

.docs-prev:hover,
.docs-next:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}
</style>
