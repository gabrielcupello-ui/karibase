# Karibase CSS Framework

Framework CSS enfocado a paneles de administración y dashboards SaaS. Extraído de los mejores patrones de: Argon Dashboard, Black Dashboard, Tailwind Admin, Sakai React, Bulma y Bootstrap.

## 🚀 Características

- **Sistema de diseño completo**: Variables CSS para fácil personalización
- **Componentes de dashboard**: Sidebar, header, stats cards, tablas, etc.
- **Modo oscuro nativo**: Soporte automático y manual
- **Responsive design**: Optimizado para todos los dispositivos
- **Utilidades CSS**: Clases de utilidad para desarrollo rápido
- **Sin dependencias**: CSS puro, sin JavaScript requerido
- **Accesibilidad**: Focus visible, soporte para screen readers

## 📦 Instalación

### Opción 1: Descargar los archivos

Descarga la carpeta `css` y vincula el archivo principal en tu HTML:

```html
<link rel="stylesheet" href="css/karibase.css">
```

### Opción 2: Importar módulos individuales

```html
<link rel="stylesheet" href="css/karibase-variables.css">
<link rel="stylesheet" href="css/karibase-reset.css">
<link rel="stylesheet" href="css/karibase-base.css">
<link rel="stylesheet" href="css/karibase-components.css">
<link rel="stylesheet" href="css/karibase-components-extended.css">
<link rel="stylesheet" href="css/karibase-components-react.css">
<link rel="stylesheet" href="css/karibase-utilities.css">
<link rel="stylesheet" href="css/karibase-utilities-extended.css">
<link rel="stylesheet" href="css/karibase-dark-mode.css">
```

## 🎨 Personalización

Karibase usa variables CSS que puedes sobrescribir fácilmente:

```css
:root {
  --kb-primary: #3C50E0;
  --kb-sidebar-width: 280px;
  --kb-header-height: 70px;
  --kb-font-family: 'Inter', sans-serif;
}
```

## 📚 Componentes

### Componentes Básicos

#### Botones

```html
<button class="kb-btn kb-btn-primary">Primary</button>
<button class="kb-btn kb-btn-secondary">Secondary</button>
<button class="kb-btn kb-btn-success">Success</button>
<button class="kb-btn kb-btn-danger">Danger</button>
<button class="kb-btn kb-btn-warning">Warning</button>
<button class="kb-btn kb-btn-ghost">Ghost</button>
```

**Tamaños:**

```html
<button class="kb-btn kb-btn-primary kb-btn-sm">Small</button>
<button class="kb-btn kb-btn-primary">Default</button>
<button class="kb-btn kb-btn-primary kb-btn-lg">Large</button>
```

### Cards

```html
<div class="kb-card">
  <div class="kb-card-header">
    <h3 class="kb-card-title">Card Title</h3>
  </div>
  <div class="kb-card-body">
    <p>Card content goes here...</p>
  </div>
  <div class="kb-card-footer">
    <button class="kb-btn kb-btn-primary">Action</button>
  </div>
</div>
```

### Stats Cards

```html
<div class="kb-stats-card">
  <div class="kb-stats-card-icon primary">
    <svg>...</svg>
  </div>
  <div class="kb-stats-card-value">$12,345</div>
  <div class="kb-stats-card-label">Total Revenue</div>
  <div class="kb-stats-card-trend up">
    <span>↑ 12%</span>
    <span>vs last month</span>
  </div>
</div>
```

### Badges

```html
<span class="kb-badge kb-badge-primary">Primary</span>
<span class="kb-badge kb-badge-success">Success</span>
<span class="kb-badge kb-badge-danger">Danger</span>
<span class="kb-badge kb-badge-warning">Warning</span>
<span class="kb-badge kb-badge-info">Info</span>
```

### Alerts

```html
<div class="kb-alert kb-alert-primary">
  <span>This is a primary alert</span>
</div>
<div class="kb-alert kb-alert-success">
  <span>This is a success alert</span>
</div>
<div class="kb-alert kb-alert-danger">
  <span>This is a danger alert</span>
</div>
```

### Tablas

```html
<table class="kb-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td><span class="kb-badge kb-badge-success">Active</span></td>
    </tr>
  </tbody>
</table>
```

### Forms

```html
<div class="kb-form-group">
  <label class="kb-label">Email</label>
  <input type="email" class="kb-input" placeholder="Enter your email">
  <small class="kb-form-help">We'll never share your email.</small>
</div>

<div class="kb-form-group">
  <label class="kb-label">Message</label>
  <textarea class="kb-textarea" placeholder="Enter your message"></textarea>
</div>
```

### Avatar

```html
<div class="kb-avatar">JD</div>
<div class="kb-avatar kb-avatar-sm">SM</div>
<div class="kb-avatar kb-avatar-lg">LG</div>
<div class="kb-avatar kb-avatar-xl">XL</div>
```

### Progress Bar

```html
<div class="kb-progress">
  <div class="kb-progress-bar" style="width: 75%"></div>
</div>
```

## 🏗️ Layout de Dashboard

### Estructura básica

```html
<body>
  <!-- Sidebar -->
  <aside class="kb-sidebar">
    <div class="kb-sidebar-header">
      <a href="#" class="kb-sidebar-brand">Karibase</a>
    </div>
    <nav class="kb-sidebar-nav">
      <a href="#" class="kb-sidebar-item active">
        <span class="kb-sidebar-item-icon">🏠</span>
        <span>Dashboard</span>
      </a>
      <a href="#" class="kb-sidebar-item">
        <span class="kb-sidebar-item-icon">📊</span>
        <span>Analytics</span>
      </a>
      <a href="#" class="kb-sidebar-item">
        <span class="kb-sidebar-item-icon">👥</span>
        <span>Users</span>
      </a>
    </nav>
  </aside>

  <!-- Header -->
  <header class="kb-header">
    <h1 class="kb-header-title">Dashboard</h1>
    <div class="kb-header-actions">
      <button class="kb-btn kb-btn-ghost">Notifications</button>
      <div class="kb-avatar">JD</div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="kb-main">
    <div class="kb-grid kb-grid-cols-3 kb-grid-gap-lg">
      <div class="kb-stats-card">
        <!-- Stats content -->
      </div>
      <div class="kb-stats-card">
        <!-- Stats content -->
      </div>
      <div class="kb-stats-card">
        <!-- Stats content -->
      </div>
    </div>
  </main>
</body>
```

## 🌙 Modo Oscuro

### Automático (basado en sistema)

El framework detecta automáticamente la preferencia del sistema:

```css
@media (prefers-color-scheme: dark) {
  /* Se activa automáticamente */
}
```

### Manual

Agrega la clase `dark` al elemento `html` o `body`:

```html
<html class="dark">
```

O usa JavaScript para alternar:

```javascript
document.documentElement.classList.toggle('dark');
```

### Toggle Button

```html
<button class="kb-dark-mode-toggle" aria-label="Toggle dark mode"></button>
```

## 🎯 Utilidades

### Espaciado

```html
<div class="kb-m-md kb-p-lg">Margin and padding</div>
<div class="kb-mt-sm kb-mb-lg">Vertical margins</div>
<div class="kb-ml-auto kb-mr-md">Horizontal margins</div>
```

### Display

```html
<div class="kb-d-flex kb-flex-row kb-justify-between">
  <span>Left</span>
  <span>Right</span>
</div>
```

### Texto

```html
<p class="kb-text-center kb-text-lg">Centered large text</p>
<p class="kb-text-muted">Muted text</p>
<p class="kb-text-primary">Primary color text</p>
```

### Grid

```html
<div class="kb-d-grid kb-grid-cols-3 kb-grid-gap-lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## 📱 Responsive

```html
<div class="kb-grid-cols-1 kb-grid-cols-2-md kb-grid-cols-3-lg">
  <!-- 1 columna en móvil, 2 en tablet, 3 en desktop -->
</div>
```

## 🎨 Variables CSS Disponibles

### Colores
- `--kb-primary`, `--kb-secondary`, `--kb-success`, `--kb-danger`, `--kb-warning`, `--kb-info`
- `--kb-text-primary`, `--kb-text-secondary`, `--kb-text-muted`
- `--kb-surface-ground`, `--kb-surface-card`, `--kb-surface-hover`, `--kb-surface-border`

### Tipografía
- `--kb-font-family`, `--kb-font-family-mono`
- `--kb-font-size-xs` a `--kb-font-size-5xl`
- `--kb-font-weight-light` a `--kb-font-weight-extrabold`

### Espaciado
- `--kb-spacing-xs` a `--kb-spacing-3xl`

### Border Radius
- `--kb-radius-sm` a `--kb-radius-full`

### Sombras
- `--kb-shadow-xs` a `--kb-shadow-2xl`
- `--kb-shadow-card`, `--kb-shadow-card-hover`

### Layout
- `--kb-sidebar-width`, `--kb-sidebar-collapsed-width`
- `--kb-header-height`, `--kb-content-max-width`
- `--kb-container-max-width`, `--kb-footer-height`

### Breakpoints
- `--kb-breakpoint-xs`, `--kb-breakpoint-sm`, `--kb-breakpoint-md`
- `--kb-breakpoint-lg`, `--kb-breakpoint-xl`, `--kb-breakpoint-2xl`, `--kb-breakpoint-3xl`

### Animaciones
- `--kb-animation-duration-fast`, `--kb-animation-duration-base`
- `--kb-animation-duration-slow`, `--kb-animation-duration-slower`
- `--kb-easing-default`, `--kb-easing-in`, `--kb-easing-out`, `--kb-easing-in-out`

### Componentes Avanzados

#### Modal
```html
<div class="kb-modal" id="myModal">
  <div class="kb-modal-dialog">
    <div class="kb-modal-header">
      <h3 class="kb-modal-title">Modal Title</h3>
      <button class="kb-modal-close" onclick="closeModal()">&times;</button>
    </div>
    <div class="kb-modal-body">
      <p>Modal content...</p>
    </div>
    <div class="kb-modal-footer">
      <button class="kb-btn kb-btn-secondary">Cancel</button>
      <button class="kb-btn kb-btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

#### Pagination
```html
<ul class="kb-pagination">
  <li class="kb-pagination-item">
    <a href="#" class="kb-pagination-link kb-pagination-prev">&laquo;</a>
  </li>
  <li class="kb-pagination-item">
    <a href="#" class="kb-pagination-link">1</a>
  </li>
  <li class="kb-pagination-item">
    <a href="#" class="kb-pagination-link active">2</a>
  </li>
  <li class="kb-pagination-item">
    <a href="#" class="kb-pagination-link kb-pagination-next">&raquo;</a>
  </li>
</ul>
```

#### Custom Checkbox & Radio
```html
<!-- Standard -->
<label class="kb-form-check">
  <input type="checkbox" class="kb-form-check-input">
  <span class="kb-form-check-label">Option</span>
</label>

<!-- Custom Styled -->
<label class="kb-checkbox-custom">
  <input type="checkbox">
  <span class="checkmark"></span>
  Custom Option
</label>

<!-- Custom Radio -->
<label class="kb-radio-custom">
  <input type="radio" name="group">
  <span class="radiomark"></span>
  Custom Radio
</label>
```

#### Toggle Switch
```html
<label class="kb-toggle">
  <input type="checkbox">
  <span class="kb-toggle-slider"></span>
</label>
```

#### Tooltip
```html
<span class="kb-tooltip" data-tooltip="Tooltip text">Hover me</span>
<span class="kb-tooltip bottom" data-tooltip="Bottom tooltip">Hover me</span>
<span class="kb-tooltip left" data-tooltip="Left tooltip">Hover me</span>
<span class="kb-tooltip right" data-tooltip="Right tooltip">Hover me</span>
```

#### Tabs
```html
<div class="kb-tabs">
  <a href="#" class="kb-tab active">Tab 1</a>
  <a href="#" class="kb-tab">Tab 2</a>
  <a href="#" class="kb-tab">Tab 3</a>
</div>
<div class="kb-tab-content active">Content 1</div>
<div class="kb-tab-content">Content 2</div>
<div class="kb-tab-content">Content 3</div>
```

#### Breadcrumb
```html
<nav aria-label="breadcrumb">
  <ol class="kb-breadcrumb">
    <li class="kb-breadcrumb-item"><a href="#">Home</a></li>
    <li class="kb-breadcrumb-item"><a href="#">Dashboard</a></li>
    <li class="kb-breadcrumb-item active">Users</li>
  </ol>
</nav>
```

#### Divider
```html
<hr class="kb-divider">
<hr class="kb-divider kb-divider-dashed">
<div class="kb-divider-text">OR</div>
```

#### Skeleton Loading
```html
<div class="kb-skeleton kb-skeleton-avatar"></div>
<div class="kb-skeleton kb-skeleton-text"></div>
<div class="kb-skeleton kb-skeleton-card"></div>
```

#### Input Group
```html
<div class="kb-input-group">
  <span class="kb-input-group-prepend">@</span>
  <input type="text" class="kb-input" placeholder="Username">
</div>
```

#### Steps
```html
<div class="kb-steps">
  <div class="kb-step completed">
    <div class="kb-step-number">✓</div>
    <div class="kb-step-label">Step 1</div>
  </div>
  <div class="kb-step active">
    <div class="kb-step-number">2</div>
    <div class="kb-step-label">Step 2</div>
  </div>
  <div class="kb-step">
    <div class="kb-step-number">3</div>
    <div class="kb-step-label">Step 3</div>
  </div>
</div>
```

#### Timeline
```html
<div class="kb-timeline">
  <div class="kb-timeline-item completed">
    <div class="kb-timeline-time">10:30 AM</div>
    <div class="kb-timeline-content">
      <div class="kb-timeline-title">Event Title</div>
      <div class="kb-timeline-description">Event description...</div>
    </div>
  </div>
</div>
```

## 🎨 Utilidades Avanzadas

### Animaciones
```html
<div class="kb-animate-spin">Spinning element</div>
<div class="kb-animate-pulse">Pulsing element</div>
<div class="kb-animate-bounce">Bouncing element</div>
<div class="kb-animate-fade-in">Fade in</div>
<div class="kb-animate-scale-in">Scale in</div>
```

### Gradientes
```html
<div class="kb-gradient-primary">Primary gradient</div>
<div class="kb-gradient-success">Success gradient</div>
<div class="kb-gradient-danger">Danger gradient</div>
```

### Efectos Hover
```html
<div class="kb-hover-lift">Lifts on hover</div>
<div class="kb-hover-scale">Scales on hover</div>
<div class="kb-hover-glow">Glows on hover</div>
```

### Glass Effect
```html
<div class="kb-glass">Glassmorphism card</div>
```

### Center Utilities
```html
<div class="kb-center">Centered element</div>
<div class="kb-center-x">Centered horizontally</div>
<div class="kb-center-y">Centered vertically</div>
```

### Transform
```html
<div class="kb-scale-105">Scale 1.05x</div>
<div class="kb-rotate-45">Rotate 45deg</div>
<div class="kb-flip-horizontal">Flip horizontal</div>
```

### Filters
```html
<div class="kb-filter-grayscale">Grayscale</div>
<div class="kb-filter-blur">Blur</div>
<div class="kb-filter-sepia">Sepia</div>
```

### Backdrop Blur
```html
<div class="kb-backdrop-blur">Backdrop blur</div>
```

## 📄 Estructura de Archivos

```
karibase/
├── css/
│   ├── karibase.css                    # Archivo principal (importa todos)
│   ├── karibase-variables.css           # Variables CSS
│   ├── karibase-reset.css               # Reset normalizado
│   ├── karibase-base.css                # Estilos base
│   ├── karibase-components.css          # Componentes básicos
│   ├── karibase-components-extended.css # Componentes avanzados
│   ├── karibase-components-react.css    # Componentes inspirados en React
│   ├── karibase-utilities.css           # Clases de utilidad básicas
│   ├── karibase-utilities-extended.css  # Clases de utilidad avanzadas
│   └── karibase-dark-mode.css          # Soporte modo oscuro
├── examples/
│   ├── dashboard.html                  # Dashboard completo
│   ├── components.html                 # Componentes básicos
│   └── components-extended.html        # Componentes avanzados
├── README.md                            # Documentación
└── package.json                         # Configuración del proyecto
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📝 Licencia

MIT License - Siéntete libre de usar este framework en tus proyectos personales y comerciales.

## 🙏 Agradecimientos

Este framework fue inspirado y extraído de los siguientes proyectos excelentes:
- [Argon Dashboard](https://www.creative-tim.com/product/argon-dashboard)
- [Black Dashboard](https://www.creative-tim.com/product/black-dashboard)
- [Tailwind Admin](https://tailwindadmin.com/)
- [Sakai React](https://www.primefaces.org/sakai-react/)
- [Bulma](https://bulma.io/)
- [Bootstrap](https://getbootstrap.com/)

## 📞 Soporte

Para reportar bugs o solicitar features, por favor abre un issue en el repositorio.
