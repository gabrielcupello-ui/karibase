<template>
  <footer class="docs-footer">
    <div class="docs-footer-content">
      <div class="docs-footer-section">
        <h4 class="docs-footer-title">Karibase</h4>
        <p class="docs-footer-text">A progressive CSS framework for modern dashboards.</p>
      </div>
      <div class="docs-footer-section">
        <h4 class="docs-footer-title">Resources</h4>
        <ul class="docs-footer-links">
          <li><router-link to="/introduction">Documentation</router-link></li>
          <li><router-link to="/components">Components</router-link></li>
          <li><a href="https://github.com" target="_blank">GitHub</a></li>
        </ul>
      </div>
      <div class="docs-footer-section">
        <h4 class="docs-footer-title">Community</h4>
        <ul class="docs-footer-links">
          <li><a href="#" target="_blank">Discord</a></li>
          <li><a href="#" target="_blank">Twitter</a></li>
          <li><a href="#" target="_blank">Stack Overflow</a></li>
        </ul>
      </div>
      <div class="docs-footer-section">
        <h4 class="docs-footer-title">Legal</h4>
        <ul class="docs-footer-links">
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">License</a></li>
        </ul>
      </div>
    </div>
    <div class="docs-footer-bottom">
      <p>&copy; 2024 Karibase. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'DocsFooter'
}
</script>

<style scoped>
.docs-footer {
  background-color: var(--docs-bg-secondary);
  border-top: 1px solid var(--docs-border-color);
  padding: 48px 24px 24px;
  margin-top: auto;
  transition: background-color var(--docs-transition), border-color var(--docs-transition);
}

.docs-footer-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 32px;
  margin-bottom: 32px;
}

.docs-footer-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.docs-footer-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--docs-text-primary);
  margin: 0;
}

.docs-footer-text {
  font-size: 14px;
  color: var(--docs-text-secondary);
  margin: 0;
  line-height: 1.5;
}

.docs-footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.docs-footer-links a {
  color: var(--docs-text-secondary);
  text-decoration: none;
  font-size: 14px;
  transition: var(--docs-transition);
}

.docs-footer-links a:hover {
  color: var(--docs-primary-color);
}

.docs-footer-bottom {
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid var(--docs-border-color);
  text-align: center;
}

.docs-footer-bottom p {
  font-size: 14px;
  color: var(--docs-text-muted);
  margin: 0;
}
</style>
