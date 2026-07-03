<template>
  <div class="docs-article">
    <div class="docs-breadcrumb">
      <router-link to="/" class="docs-breadcrumb-link">Home</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <router-link to="/components" class="docs-breadcrumb-link">Components</router-link>
      <span class="docs-breadcrumb-separator">/</span>
      <span class="docs-breadcrumb-current">Tables</span>
    </div>

    <h1 class="docs-heading">Tables</h1>
    <p class="docs-lead">Data tables with sorting and pagination styles</p>

    <h2 class="docs-heading docs-heading-2" id="basic-table">Basic Table</h2>
    <p class="docs-text">A simple data table:</p>
    
    <div class="docs-preview">
      <table class="kb-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
            <td><span class="kb-badge kb-badge-success">Active</span></td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>User</td>
            <td><span class="kb-badge kb-badge-warning">Pending</span></td>
          </tr>
          <tr>
            <td>Bob Johnson</td>
            <td>bob@example.com</td>
            <td>User</td>
            <td><span class="kb-badge kb-badge-error">Inactive</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;table class="kb-table"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;Email&lt;/th&gt;
      &lt;th&gt;Role&lt;/th&gt;
      &lt;th&gt;Status&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;John Doe&lt;/td&gt;
      &lt;td&gt;john@example.com&lt;/td&gt;
      &lt;td&gt;Admin&lt;/td&gt;
      &lt;td&gt;Active&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="striped-table">Striped Table</h2>
    <p class="docs-text">Table with striped rows:</p>
    
    <div class="docs-preview">
      <table class="kb-table kb-table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>User</td>
          </tr>
          <tr>
            <td>Bob Johnson</td>
            <td>bob@example.com</td>
            <td>User</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;table class="kb-table kb-table-striped"&gt;
  ...
&lt;/table&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="hover-table">Hover Table</h2>
    <p class="docs-text">Table with hover effect on rows:</p>
    
    <div class="docs-preview">
      <table class="kb-table kb-table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>jane@example.com</td>
            <td>User</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;table class="kb-table kb-table-hover"&gt;
  ...
&lt;/table&gt;</code></pre>
    </div>

    <h2 class="docs-heading docs-heading-2" id="badges">Badges</h2>
    <p class="docs-text">Status badges for table cells:</p>
    
    <div class="docs-preview">
      <span class="kb-badge kb-badge-success">Success</span>
      <span class="kb-badge kb-badge-warning">Warning</span>
      <span class="kb-badge kb-badge-error">Error</span>
      <span class="kb-badge kb-badge-info">Info</span>
    </div>

    <div class="docs-code-block">
      <pre><code>&lt;span class="kb-badge kb-badge-success"&gt;Success&lt;/span&gt;
&lt;span class="kb-badge kb-badge-warning"&gt;Warning&lt;/span&gt;
&lt;span class="kb-badge kb-badge-error"&gt;Error&lt;/span&gt;
&lt;span class="kb-badge kb-badge-info"&gt;Info&lt;/span&gt;</code></pre>
    </div>

    <div class="docs-next-prev">
      <router-link to="/components/forms" class="docs-prev">
        <i class="fas fa-arrow-left"></i>
        <span>Forms</span>
      </router-link>
      <router-link to="/layout" class="docs-next">
        <span>Layout</span>
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tables'
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
  overflow-x: auto;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.kb-table {
  width: 100%;
  border-collapse: collapse;
  background-color: var(--docs-bg-primary);
  border-radius: 8px;
  overflow: hidden;
}

.kb-table thead {
  background-color: var(--docs-bg-tertiary);
}

.kb-table th {
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  color: var(--docs-text-primary);
  border-bottom: 2px solid var(--docs-border-color);
}

.kb-table td {
  padding: 12px 16px;
  font-size: 14px;
  color: var(--docs-text-secondary);
  border-bottom: 1px solid var(--docs-border-light);
}

.kb-table tbody tr:last-child td {
  border-bottom: none;
}

.kb-table-striped tbody tr:nth-child(even) {
  background-color: var(--docs-bg-secondary);
}

.kb-table-hover tbody tr:hover {
  background-color: var(--docs-bg-tertiary);
}

.kb-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.kb-badge-success {
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.kb-badge-warning {
  background-color: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

.kb-badge-error {
  background-color: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

.kb-badge-info {
  background-color: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
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
