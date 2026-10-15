<template>
  <DocsArticle
    title="Alerts"
    lead="Feedback messages for user notifications"
    :breadcrumb="[{ name: 'Components', path: '/components' }, { name: 'Alerts' }]"
    :prev="{ name: 'Modals', path: '/components/modals' }"
    :next="{ name: 'Charts', path: '/components/charts' }"
  >





    <h2 class="docs-heading docs-heading-2" id="basic-alerts">Basic Alerts</h2>
    <p class="docs-text">Alert messages in different variants:</p>

    <div class="docs-preview">
      <div class="kb-alert kb-alert-info">
        <div class="kb-alert-icon">
          <i class="fas fa-info-circle"></i>
        </div>
        <div class="kb-alert-content">
          <h4 class="kb-alert-title">Info</h4>
          <p class="kb-alert-message">This is an informational message.</p>
        </div>
        <button class="kb-alert-close">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-alert kb-alert-info"&gt;
  &lt;div class="kb-alert-icon"&gt;
    &lt;i class="fas fa-info-circle"&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div class="kb-alert-content"&gt;
    &lt;h4 class="kb-alert-title"&gt;Info&lt;/h4&gt;
    &lt;p class="kb-alert-message"&gt;Message&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="simple-alerts">Simple Alerts</h2>
    <p class="docs-text">Compact alert messages without title:</p>

    <div class="docs-preview">
      <div class="kb-alert kb-alert-info kb-alert-simple">
        <i class="fas fa-info-circle"></i>
        <span>This is a simple info message.</span>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-alert kb-alert-info kb-alert-simple"&gt;
  &lt;i class="fas fa-info-circle"&gt;&lt;/i&gt;
  &lt;span&gt;Simple message&lt;/span&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="dismissible-alerts">Dismissible Alerts</h2>
    <p class="docs-text">Alerts that can be closed:</p>

    <div class="docs-preview">
      <div class="kb-alert kb-alert-info" v-if="showAlert">
        <div class="kb-alert-icon">
          <i class="fas fa-info-circle"></i>
        </div>
        <div class="kb-alert-content">
          <p class="kb-alert-message">This alert can be dismissed.</p>
        </div>
        <button class="kb-alert-close" @click="showAlert = false">
          <i class="fas fa-times"></i>
        </button>
      </div>

      <button class="kb-btn kb-btn-primary kb-btn-sm" @click="showAlert = true" v-if="!showAlert">
        Show Alert
      </button>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-alert kb-alert-info"&gt;
  &lt;div class="kb-alert-icon"&gt;
    &lt;i class="fas fa-info-circle"&gt;&lt;/i&gt;
  &lt;/div&gt;
  &lt;div class="kb-alert-content"&gt;
    &lt;p class="kb-alert-message"&gt;Message&lt;/p&gt;
  &lt;/div&gt;
  &lt;button class="kb-alert-close"&gt;
    &lt;i class="fas fa-times"&gt;&lt;/i&gt;
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
import { ref } from 'vue'

export default {
  components: { DocsArticle },
  name: 'Alerts',
  setup() {
    const showAlert = ref(true)

    return {
      showAlert
    }
  }
}
</script>

 scoped>


.kb-alert {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid;
}


.kb-alert-info {
  background-color: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.2);
  color: #1e40af;
}


.kb-alert-success {
  background-color: rgba(16, 185, 129, 0.1);
  border-color: rgba(16, 185, 129, 0.2);
  color: #065f46;
}


.kb-alert-warning {
  background-color: rgba(245, 158, 11, 0.1);
  border-color: rgba(245, 158, 11, 0.2);
  color: #92400e;
}


.kb-alert-danger {
  background-color: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
  color: #991b1b;
}


.kb-alert-icon {
  flex-shrink: 0;
  font-size: 20px;
}


.kb-alert-content {
  flex: 1;
}


.kb-alert-title {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 4px;
  color: inherit;
}


.kb-alert-message {
  font-size: 14px;
  margin: 0;
  color: inherit;
  opacity: 0.9;
}


.kb-alert-close {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  border-radius: 4px;
  transition: var(--docs-transition);
  opacity: 0.7;
}


.kb-alert-close:hover {
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 1;
}


.kb-alert-simple {
  align-items: center;
  gap: 8px;
}


.kb-alert-simple span {
  font-size: 14px;
  color: inherit;
}
</style>
