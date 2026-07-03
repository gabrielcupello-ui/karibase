<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/components" class="docs-breadcrumb-link">Components</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Dropdowns</span>
    </div>

    <h1 class="docs-heading">Dropdowns</h1>
    <p class="docs-lead">Toggleable content overlays</p>

    <h2 class="docs-heading docs-heading-2" id="basic-dropdown">Basic Dropdown</h2>
    <p class="docs-text">A simple dropdown menu:</p>
    
    <div class="docs-preview">
      <div class="kb-dropdown" :class="{ 'kb-dropdown-open': dropdownOpen }">
        <button class="kb-btn kb-btn-primary" @click="dropdownOpen = !dropdownOpen">
          Dropdown
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="kb-dropdown-menu" v-if="dropdownOpen">
          <a href="#" class="kb-dropdown-item">Action</a>
          <a href="#" class="kb-dropdown-item">Another action</a>
          <a href="#" class="kb-dropdown-item">Something else</a>
          <div class="kb-dropdown-divider"></div>
          <a href="#" class="kb-dropdown-item">Separated link</a>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-dropdown"&gt;
  &lt;button class="kb-btn kb-btn-primary"&gt;
    Dropdown
    &lt;i class="fas fa-chevron-down"&gt;&lt;/i&gt;
  &lt;/button&gt;
  &lt;div class="kb-dropdown-menu"&gt;
    &lt;a href="#" class="kb-dropdown-item"&gt;Action&lt;/a&gt;
    &lt;a href="#" class="kb-dropdown-item"&gt;Another action&lt;/a&gt;
    &lt;div class="kb-dropdown-divider"&gt;&lt;/div&gt;
    &lt;a href="#" class="kb-dropdown-item"&gt;Separated link&lt;/a&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="dropdown-variants">Dropdown Variants</h2>
    <p class="docs-text">Dropdowns with different button styles:</p>
    
    <div class="docs-preview">
      <div class="kb-dropdown" :class="{ 'kb-dropdown-open': dropdownOpen2 }">
        <button class="kb-btn kb-btn-secondary" @click="dropdownOpen2 = !dropdownOpen2">
          Secondary
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="kb-dropdown-menu" v-if="dropdownOpen2">
          <a href="#" class="kb-dropdown-item">Action</a>
          <a href="#" class="kb-dropdown-item">Another action</a>
        </div>
      </div>

      <div class="kb-dropdown" :class="{ 'kb-dropdown-open': dropdownOpen3 }">
        <button class="kb-btn kb-btn-success" @click="dropdownOpen3 = !dropdownOpen3">
          Success
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="kb-dropdown-menu" v-if="dropdownOpen3">
          <a href="#" class="kb-dropdown-item">Action</a>
          <a href="#" class="kb-dropdown-item">Another action</a>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;button class="kb-btn kb-btn-secondary"&gt;...&lt;/button&gt;
&lt;button class="kb-btn kb-btn-success"&gt;...&lt;/button&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="dropdown-directions">Dropdown Directions</h2>
    <p class="docs-text">Dropdowns that open in different directions:</p>
    
    <div class="docs-preview">
      <div class="kb-dropdown" :class="{ 'kb-dropdown-open': dropdownUp }">
        <button class="kb-btn kb-btn-primary" @click="dropdownUp = !dropdownUp">
          Drop Up
          <i class="fas fa-chevron-up"></i>
        </button>
        <div class="kb-dropdown-menu kb-dropdown-menu-up" v-if="dropdownUp">
          <a href="#" class="kb-dropdown-item">Action</a>
          <a href="#" class="kb-dropdown-item">Another action</a>
        </div>
      </div>

      <div class="kb-dropdown" :class="{ 'kb-dropdown-open': dropdownRight }">
        <button class="kb-btn kb-btn-primary" @click="dropdownRight = !dropdownRight">
          Drop Right
          <i class="fas fa-chevron-right"></i>
        </button>
        <div class="kb-dropdown-menu kb-dropdown-menu-right" v-if="dropdownRight">
          <a href="#" class="kb-dropdown-item">Action</a>
          <a href="#" class="kb-dropdown-item">Another action</a>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-dropdown-menu kb-dropdown-menu-up"&gt;...&lt;/div&gt;
&lt;div class="kb-dropdown-menu kb-dropdown-menu-right"&gt;...&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="dropdown-with-icons">Dropdown with Icons</h2>
    <p class="docs-text">Dropdown items with icons:</p>
    
    <div class="docs-preview">
      <div class="kb-dropdown" :class="{ 'kb-dropdown-open': dropdownIcons }">
        <button class="kb-btn kb-btn-primary" @click="dropdownIcons = !dropdownIcons">
          Menu
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="kb-dropdown-menu" v-if="dropdownIcons">
          <a href="#" class="kb-dropdown-item">
            <i class="fas fa-user"></i>
            Profile
          </a>
          <a href="#" class="kb-dropdown-item">
            <i class="fas fa-cog"></i>
            Settings
          </a>
          <a href="#" class="kb-dropdown-item">
            <i class="fas fa-bell"></i>
            Notifications
          </a>
          <div class="kb-dropdown-divider"></div>
          <a href="#" class="kb-dropdown-item">
            <i class="fas fa-sign-out-alt"></i>
            Logout
          </a>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;a href="#" class="kb-dropdown-item"&gt;
  &lt;i class="fas fa-user"&gt;&lt;/i&gt;
  Profile
&lt;/a&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="split-dropdown">Split Button Dropdown</h2>
    <p class="docs-text">Dropdown with split button:</p>
    
    <div class="docs-preview">
      <div class="kb-dropdown kb-dropdown-split" :class="{ 'kb-dropdown-open': splitDropdown }">
        <button class="kb-btn kb-btn-primary">Action</button>
        <button class="kb-btn kb-btn-primary kb-dropdown-toggle" @click="splitDropdown = !splitDropdown">
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="kb-dropdown-menu" v-if="splitDropdown">
          <a href="#" class="kb-dropdown-item">Action</a>
          <a href="#" class="kb-dropdown-item">Another action</a>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-dropdown kb-dropdown-split"&gt;
  &lt;button class="kb-btn kb-btn-primary"&gt;Action&lt;/button&gt;
  &lt;button class="kb-btn kb-btn-primary kb-dropdown-toggle"&gt;
    &lt;i class="fas fa-chevron-down"&gt;&lt;/i&gt;
  &lt;/button&gt;
  &lt;div class="kb-dropdown-menu"&gt;...&lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <div class="docs-next-prev">
      <router-link to="/components/avatars" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Avatars</span>
      </router-link>
      <router-link to="/components/tooltips" class="docs-next">
        <span>Tooltips</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Dropdowns',
  setup() {
    const dropdownOpen = ref(false)
    const dropdownOpen2 = ref(false)
    const dropdownOpen3 = ref(false)
    const dropdownUp = ref(false)
    const dropdownRight = ref(false)
    const dropdownIcons = ref(false)
    const splitDropdown = ref(false)

    return {
      dropdownOpen,
      dropdownOpen2,
      dropdownOpen3,
      dropdownUp,
      dropdownRight,
      dropdownIcons,
      splitDropdown
    }
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
  font-size: 40px;
  font-weight: 800;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
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

.docs-preview {
  background-color: var(--docs-bg-secondary);
  border: 1px solid var(--docs-border-color);
  border-radius: 12px;
  padding: 32px;
  margin: 24px 0;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: flex-start;
}

.kb-dropdown {
  position: relative;
  display: inline-block;
}

.kb-dropdown-split {
  display: inline-flex;
}

.kb-dropdown-split .kb-btn:first-child {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.kb-dropdown-split .kb-btn:last-child {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding-left: 12px;
  padding-right: 12px;
}

.kb-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 180px;
  background-color: var(--docs-bg-primary);
  border: 1px solid var(--docs-border-color);
  border-radius: 8px;
  box-shadow: var(--docs-shadow-lg);
  padding: 8px 0;
  margin-top: 8px;
  z-index: 100;
}

.kb-dropdown-menu-up {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 8px;
}

.kb-dropdown-menu-right {
  left: auto;
  right: 0;
}

.kb-dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  color: var(--docs-text-primary);
  text-decoration: none;
  font-size: 14px;
  transition: var(--docs-transition);
}

.kb-dropdown-item:hover {
  background-color: var(--docs-bg-tertiary);
  color: var(--docs-primary-color);
}

.kb-dropdown-item i {
  width: 16px;
  text-align: center;
}

.kb-dropdown-divider {
  height: 1px;
  background-color: var(--docs-border-color);
  margin: 8px 0;
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
