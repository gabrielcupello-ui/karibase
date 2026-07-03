<template>
  <div class="code-viewer">
    <button 
      class="code-viewer-button kb-btn kb-btn-sm kb-btn-outline"
      @click="toggleCode"
    >
      <i class="fas" :class="showCode ? 'fa-eye-slash' : 'fa-code'"></i>
      {{ showCode ? 'Hide code' : 'Show code' }}
    </button>
    <div v-if="showCode" class="code-viewer-content">
      <div class="code-viewer-header">
        <span class="code-viewer-title">{{ title }}</span>
        <button class="code-viewer-copy" @click="copyCode" title="Copy code">
          <i class="fas fa-copy"></i>
        </button>
      </div>
      <pre><code><slot></slot></code></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeViewer',
  props: {
    title: {
      type: String,
      default: 'Code'
    }
  },
  data() {
    return {
      showCode: false
    }
  },
  methods: {
    toggleCode() {
      this.showCode = !this.showCode
    },
    copyCode() {
      const code = this.$slots.default()[0].children
      navigator.clipboard.writeText(code)
    }
  }
}
</script>

<style scoped>
.code-viewer {
  margin: 16px 0 24px;
}

.code-viewer-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: transparent;
  border: 1px solid var(--docs-border-color);
  color: var(--docs-text-primary);
}

.code-viewer-button:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
  background-color: rgba(var(--docs-primary-color), 0.05);
}

.code-viewer-content {
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 12px;
  margin-top: 12px;
  overflow: hidden;
}

.code-viewer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #2d2d2d;
  border-bottom: 1px solid #404040;
}

.code-viewer-title {
  font-size: 13px;
  font-weight: 500;
  color: #b0b0b0;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
}

.code-viewer-copy {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: #b0b0b0;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 12px;
}

.code-viewer-copy:hover {
  background-color: #404040;
  color: #e5e7eb;
}

.code-viewer-content pre {
  margin: 0;
  padding: 16px;
  background: transparent;
  border: none;
  overflow-x: auto;
}

.code-viewer-content code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
  font-size: 14px;
  color: #e5e7eb;
  line-height: 1.6;
  background: transparent;
  white-space: pre;
}

/* Dark mode support */
:global([mode="dark"]) .code-viewer-content {
  background-color: #0d0d0d;
  border-color: #222;
}

:global([mode="dark"]) .code-viewer-header {
  background-color: #1a1a1a;
  border-bottom-color: #333;
}

:global([mode="dark"]) .code-viewer-title {
  color: #e5e7eb;
}

:global([mode="dark"]) .code-viewer-copy {
  color: #e5e7eb;
}

:global([mode="dark"]) .code-viewer-copy:hover {
  background-color: #333;
}

:global([mode="dark"]) .code-viewer-content code {
  color: #e5e7eb;
}
</style>
