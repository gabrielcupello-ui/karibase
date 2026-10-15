<template>
  <DocsArticle
    title="Tooltips"
    lead="Hoverable information overlays"
    :breadcrumb="[{ name: 'Components', path: '/components' }, { name: 'Tooltips' }]"
    :prev="{ name: 'Dropdowns', path: '/components/dropdowns' }"
    :next="{ name: 'Components', path: '/components' }"
  >





    <h2 class="docs-heading docs-heading-2" id="basic-tooltip">Basic Tooltip</h2>
    <p class="docs-text">A simple tooltip on hover:</p>

    <div class="docs-preview">
      <div class="kb-tooltip" :class="{ 'kb-tooltip-visible': tooltipVisible }">
        <button class="kb-btn kb-btn-primary" @mouseenter="tooltipVisible = true" @mouseleave="tooltipVisible = false">
          Hover me
        </button>
        <div class="kb-tooltip-content" v-if="tooltipVisible">
          This is a tooltip
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-tooltip"&gt;
  &lt;button class="kb-btn kb-btn-primary"&gt;Hover me&lt;/button&gt;
  &lt;div class="kb-tooltip-content"&gt;
    This is a tooltip
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="tooltip-positions">Tooltip Positions</h2>
    <p class="docs-text">Tooltips in different positions:</p>

    <div class="docs-preview">
      <div class="kb-tooltip" :class="{ 'kb-tooltip-visible': tooltipTop }">
        <button class="kb-btn kb-btn-primary" @mouseenter="tooltipTop = true" @mouseleave="tooltipTop = false">
          Top
        </button>
        <div class="kb-tooltip-content kb-tooltip-top" v-if="tooltipTop">
          Tooltip on top
        </div>
      </div>

      <div class="kb-tooltip" :class="{ 'kb-tooltip-visible': tooltipBottom }">
        <button class="kb-btn kb-btn-primary" @mouseenter="tooltipBottom = true" @mouseleave="tooltipBottom = false">
          Bottom
        </button>
        <div class="kb-tooltip-content kb-tooltip-bottom" v-if="tooltipBottom">
          Tooltip on bottom
        </div>
      </div>

      <div class="kb-tooltip" :class="{ 'kb-tooltip-visible': tooltipLeft }">
        <button class="kb-btn kb-btn-primary" @mouseenter="tooltipLeft = true" @mouseleave="tooltipLeft = false">
          Left
        </button>
        <div class="kb-tooltip-content kb-tooltip-left" v-if="tooltipLeft">
          Tooltip on left
        </div>
      </div>

      <div class="kb-tooltip" :class="{ 'kb-tooltip-visible': tooltipRight }">
        <button class="kb-btn kb-btn-primary" @mouseenter="tooltipRight = true" @mouseleave="tooltipRight = false">
          Right
        </button>
        <div class="kb-tooltip-content kb-tooltip-right" v-if="tooltipRight">
          Tooltip on right
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-tooltip-content kb-tooltip-top"&gt;...&lt;/div&gt;
&lt;div class="kb-tooltip-content kb-tooltip-bottom"&gt;...&lt;/div&gt;
&lt;div class="kb-tooltip-content kb-tooltip-left"&gt;...&lt;/div&gt;
&lt;div class="kb-tooltip-content kb-tooltip-right"&gt;...&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="tooltip-variants">Tooltip Variants</h2>
    <p class="docs-text">Tooltips with different styles:</p>

    <div class="docs-preview">
      <div class="kb-tooltip" :class="{ 'kb-tooltip-visible': tooltipPrimary }">
        <button class="kb-btn kb-btn-primary" @mouseenter="tooltipPrimary = true" @mouseleave="tooltipPrimary = false">
          Primary
        </button>
        <div class="kb-tooltip-content kb-tooltip-primary" v-if="tooltipPrimary">
          Primary tooltip
        </div>
      </div>

      <div class="kb-tooltip" :class="{ 'kb-tooltip-visible': tooltipSuccess }">
        <button class="kb-btn kb-btn-success" @mouseenter="tooltipSuccess = true" @mouseleave="tooltipSuccess = false">
          Success
        </button>
        <div class="kb-tooltip-content kb-tooltip-success" v-if="tooltipSuccess">
          Success tooltip
        </div>
      </div>

      <div class="kb-tooltip" :class="{ 'kb-tooltip-visible': tooltipWarning }">
        <button class="kb-btn kb-btn-warning" @mouseenter="tooltipWarning = true" @mouseleave="tooltipWarning = false">
          Warning
        </button>
        <div class="kb-tooltip-content kb-tooltip-warning" v-if="tooltipWarning">
          Warning tooltip
        </div>
      </div>

      <div class="kb-tooltip" :class="{ 'kb-tooltip-visible': tooltipDanger }">
        <button class="kb-btn kb-btn-danger" @mouseenter="tooltipDanger = true" @mouseleave="tooltipDanger = false">
          Danger
        </button>
        <div class="kb-tooltip-content kb-tooltip-danger" v-if="tooltipDanger">
          Danger tooltip
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-tooltip-content kb-tooltip-primary"&gt;...&lt;/div&gt;
&lt;div class="kb-tooltip-content kb-tooltip-success"&gt;...&lt;/div&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="tooltip-with-html">Tooltip with HTML</h2>
    <p class="docs-text">Tooltips with rich content:</p>

    <div class="docs-preview">
      <div class="kb-tooltip" :class="{ 'kb-tooltip-visible': tooltipHtml }">
        <button class="kb-btn kb-btn-primary" @mouseenter="tooltipHtml = true" @mouseleave="tooltipHtml = false">
          Rich Tooltip
        </button>
        <div class="kb-tooltip-content" v-if="tooltipHtml">
          <strong>Bold text</strong> and <em>italic text</em>
        </div>
      </div>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;div class="kb-tooltip-content"&gt;
  &lt;strong&gt;Bold text&lt;/strong&gt; and &lt;em&gt;italic text&lt;/em&gt;
&lt;/div&gt;</code></pre>
    </div>


  </DocsArticle>
</template>

<script>
import { DocsArticle } from '@/components/docs'
import { ref } from 'vue'

export default {
  components: { DocsArticle },
  name: 'Tooltips',
  setup() {
    const tooltipVisible = ref(false)
    const tooltipTop = ref(false)
    const tooltipBottom = ref(false)
    const tooltipLeft = ref(false)
    const tooltipRight = ref(false)
    const tooltipPrimary = ref(false)
    const tooltipSuccess = ref(false)
    const tooltipWarning = ref(false)
    const tooltipDanger = ref(false)
    const tooltipHtml = ref(false)

    return {
      tooltipVisible,
      tooltipTop,
      tooltipBottom,
      tooltipLeft,
      tooltipRight,
      tooltipPrimary,
      tooltipSuccess,
      tooltipWarning,
      tooltipDanger,
      tooltipHtml
    }
  }
}
</script>

 scoped>


.kb-tooltip {
  position: relative;
  display: inline-block;
}


.kb-tooltip-content {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  background-color: var(--docs-text-primary);
  color: var(--docs-bg-primary);
  font-size: 14px;
  border-radius: 6px;
  white-space: nowrap;
  z-index: 100;
  margin-bottom: 8px;
}


.kb-tooltip-content::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: var(--docs-text-primary);
}


.kb-tooltip-top {
  bottom: 100%;
  top: auto;
}


.kb-tooltip-bottom {
  top: 100%;
  bottom: auto;
  margin-bottom: 0;
  margin-top: 8px;
}


.kb-tooltip-bottom::after {
  top: auto;
  bottom: 100%;
  border-top-color: transparent;
  border-bottom-color: var(--docs-text-primary);
}


.kb-tooltip-left {
  left: auto;
  right: 100%;
  top: 50%;
  bottom: auto;
  transform: translateY(-50%);
  margin-bottom: 0;
  margin-right: 8px;
}


.kb-tooltip-left::after {
  top: 50%;
  left: 100%;
  bottom: auto;
  transform: translateY(-50%);
  border-top-color: transparent;
  border-left-color: var(--docs-text-primary);
}


.kb-tooltip-right {
  left: 100%;
  right: auto;
  top: 50%;
  bottom: auto;
  transform: translateY(-50%);
  margin-bottom: 0;
  margin-left: 8px;
}


.kb-tooltip-right::after {
  top: 50%;
  left: auto;
  right: 100%;
  bottom: auto;
  transform: translateY(-50%);
  border-top-color: transparent;
  border-right-color: var(--docs-text-primary);
}


.kb-tooltip-primary {
  background: linear-gradient(135deg, var(--docs-primary-color), var(--docs-primary-accent));
}


.kb-tooltip-primary::after {
  border-top-color: var(--docs-primary-accent);
}


.kb-tooltip-success {
  background-color: #10b981;
}


.kb-tooltip-success::after {
  border-top-color: #10b981;
}


.kb-tooltip-warning {
  background-color: #f59e0b;
}


.kb-tooltip-warning::after {
  border-top-color: #f59e0b;
}


.kb-tooltip-danger {
  background-color: #ef4444;
}


.kb-tooltip-danger::after {
  border-top-color: #ef4444;
}
</style>
