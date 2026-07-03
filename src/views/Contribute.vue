<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Contribute</span>
    </div>

    <h1 class="docs-heading">Contribute</h1>
    <p class="docs-lead">How to contribute to Karibase</p>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="getting-started">Getting Started</h2>
      <p class="docs-text">
        We welcome contributions from the community! Whether you want to fix a bug, add a feature, or improve documentation, 
        we'd love your help.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="setup">Setup</h2>
      <p class="docs-text">Set up your development environment:</p>
      <div class="docs-code-block">
        <pre><code># Fork the repository
git clone https://github.com/yourusername/karibase.git
cd karibase

# Install dependencies
npm install

# Start development server
npm run dev</code></pre>
      </div>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="development">Development</h2>
      <p class="docs-text">Follow our development guidelines:</p>
      <ul class="docs-list">
        <li>Create a branch for your feature or fix</li>
        <li>Write clear, descriptive commit messages</li>
        <li>Add tests for new features</li>
        <li>Update documentation as needed</li>
        <li>Ensure all tests pass</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="pull-requests">Pull Requests</h2>
      <p class="docs-text">Submit a pull request:</p>
      <ul class="docs-list">
        <li>Describe your changes in the PR description</li>
        <li>Link to related issues</li>
        <li>Include screenshots for UI changes</li>
        <li>Wait for code review</li>
      </ul>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="code-of-conduct">Code of Conduct</h2>
      <p class="docs-text">
        Be respectful and inclusive. We expect all contributors to follow our code of conduct and treat everyone 
        with respect regardless of their background or experience level.
      </p>
    </div>

    <div class="docs-section">
      <h2 class="docs-heading docs-heading-2" id="reporting-issues">Reporting Issues</h2>
      <p class="docs-text">Report bugs and request features:</p>
      <div class="docs-code-block">
        <pre><code>https://github.com/yourusername/karibase/issues</code></pre>
      </div>
    </div>

    <div class="docs-next-prev">
      <router-link to="/rtl" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>RTL</span>
      </router-link>
      <router-link to="/customize/overview" class="docs-next">
        <span>Customize</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contribute'
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
  font-size: 48px;
  font-weight: 800;
  color: var(--docs-text-primary);
  margin: 0 0 16px;
  letter-spacing: -0.02em;
}

.docs-heading-2 {
  font-size: 32px;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 16px;
  color: var(--docs-text-primary);
  letter-spacing: -0.01em;
}

.docs-lead {
  font-size: 20px;
  color: var(--docs-text-secondary);
  line-height: 1.7;
  margin: 0 0 32px;
  max-width: 65ch;
}

.docs-text {
  font-size: 16px;
  color: var(--docs-text-secondary);
  line-height: 1.75;
  margin: 0 0 16px;
  max-width: 65ch;
}

.docs-section {
  margin-bottom: 48px;
}

.docs-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.docs-list li {
  padding: 8px 0;
  color: var(--docs-text-secondary);
  line-height: 1.75;
  position: relative;
  padding-left: 24px;
}

.docs-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--docs-primary-color);
  font-weight: bold;
}

.docs-code-block {
  background-color: #1e1e1e;
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
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
  font-size: 14px;
  color: #e5e7eb;
  line-height: 1.6;
}

.docs-next-prev {
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
  padding-top: 32px;
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
  font-weight: 500;
  transition: var(--docs-transition);
  font-size: 14px;
}

.docs-prev:hover,
.docs-next:hover {
  border-color: var(--docs-primary-color);
  color: var(--docs-primary-color);
}
</style>
