<template>
  <div class="landing-page">
    <header class="landing-header">
      <div class="landing-container">
        <div class="landing-nav">
          <div class="landing-logo">
            <span class="landing-logo-text">Karibase</span>
          </div>
          <nav class="landing-nav-links">
            <router-link to="/docs" class="landing-nav-link">Docs</router-link>
            <router-link to="/blog" class="landing-nav-link">Blog</router-link>
            <router-link to="/showcase" class="landing-nav-link">Showcase</router-link>
            <router-link to="/partners" class="landing-nav-link">Partners</router-link>
            <router-link to="/plus" class="landing-nav-link">Plus</router-link>
          </nav>
          <div class="landing-nav-actions">
            <button class="landing-icon-btn">
              <i class="fas fa-search"></i>
            </button>
            <a href="https://github.com" target="_blank" class="landing-icon-btn">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </header>

    <main class="landing-main">
      <div class="landing-container">
        <div class="landing-hero">
          <h1 class="landing-hero-title">Rapidly build modern websites without ever leaving your HTML</h1>
          <p class="landing-hero-subtitle">
            A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
          </p>
          <div class="landing-hero-actions">
            <router-link to="/docs" class="landing-btn landing-btn-primary">
              Get started
            </router-link>
            <button class="landing-btn landing-btn-secondary">
              Quick search
            </button>
          </div>
        </div>

        <div class="landing-code-section">
          <div class="landing-code-block">
            <pre><code class="language-html"><span class="code-tag">&lt;div</span> <span class="code-attr">class</span>=<span class="code-string">"kb-flex kb-items-center kb-justify-center kb-h-screen kb-bg-gray-100"</span><span class="code-tag">&gt;</span>
  <span class="code-tag">&lt;div</span> <span class="code-attr">class</span>=<span class="code-string">"kb-p-6 kb-bg-white kb-rounded-lg kb-shadow-lg"</span><span class="code-tag">&gt;</span>
    <span class="code-tag">&lt;h1</span> <span class="code-attr">class</span>=<span class="code-string">"kb-text-2xl kb-font-bold kb-text-gray-800"</span><span class="code-tag">&gt;</span>
      Hello, Karibase!
    <span class="code-tag">&lt;/h1&gt;</span>
  <span class="code-tag">&lt;/div&gt;</span>
<span class="code-tag">&lt;/div&gt;</span></code></pre>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background-color: #ffffff;
  color: #1a1a1a;
}

.landing-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e5e5;
}

.landing-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.landing-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.landing-logo {
  display: flex;
  align-items: center;
}

.landing-logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
}

.landing-nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.landing-nav-link {
  font-size: 14px;
  font-weight: 500;
  color: #4a4a4a;
  text-decoration: none;
  transition: color 0.2s ease;
}

.landing-nav-link:hover {
  color: #1a1a1a;
}

.landing-nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.landing-icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: #4a4a4a;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
}

.landing-icon-btn:hover {
  background-color: #f5f5f5;
  color: #1a1a1a;
}

.landing-main {
  padding: 80px  0;
}

.landing-hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 80px;
}

.landing-hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  color: #1a1a1a;
  margin: 0 0 24px;
  letter-spacing: -0.02em;
}

.landing-hero-title span {
  color: #ea2845;
}

.landing-hero-subtitle {
  font-size: 20px;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0 0 40px;
}

.landing-hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.landing-btn {
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  border: none;
}

.landing-btn-primary {
  background-color: #ea2845;
  color: white;
}

.landing-btn-primary:hover {
  background-color: #d11e38;
  transform: translateY(-2px);
}

.landing-btn-secondary {
  background-color: #f5f5f5;
  color: #1a1a1a;
}

.landing-btn-secondary:hover {
  background-color: #e5e5e5;
  transform: translateY(-2px);
}

.landing-code-section {
  margin-top: 80px;
}

.landing-code-block {
  background-color: #1e1e1e;
  border-radius: 12px;
  padding: 32px;
  overflow-x: auto;
}

.landing-code-block pre {
  margin: 0;
  padding: 0;
}

.landing-code-block code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
  font-size: 14px;
  line-height: 1.6;
  color: #e5e7eb;
}

.code-tag {
  color: #569cd6;
}

.code-attr {
  color: #9cdcfe;
}

.code-string {
  color: #ce9178;
}

@media (max-width: 768px) {
  .landing-nav-links {
    display: none;
  }
  
  .landing-hero-title {
    font-size: 40px;
  }
  
  .landing-hero-subtitle {
    font-size: 18px;
  }
  
  .landing-hero-actions {
    flex-direction: column;
    align-items: stretch;
  }
  
  .landing-btn {
    width: 100%;
  }
}
</style>
