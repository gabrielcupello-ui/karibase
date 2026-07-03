# Karibase CSS Framework

CSS Framework specialized in Admin Dashboards and Floating Bots. Complete solution for building modern admin panels with intelligent floating assistants.

## Overview

Karibase is a specialized CSS framework focused on building admin dashboards and SaaS applications with integrated floating bot assistants:

- **Admin Dashboard Components**: Complete set of UI components for admin panels
- **Floating Bots System**: JavaScript framework for intelligent floating assistants and chatbots
- **Dashboard Layout System**: Grid, sidebar, header, and content layouts
- **Interactive Components**: Charts, tables, forms, modals, and more
- **Developer Tools**: CSS extractor, theme customizer, and bot builder
- **Documentation**: Interactive documentation with live examples

## Features

- 🎨 **Admin Dashboard Components**: 50+ components specifically designed for admin panels
- 🤖 **Floating Bots System**: Intelligent floating assistants and chatbot framework
- 🌓 **Dark Mode Support**: Built-in dark mode with smooth transitions
- 📱 **Responsive Design**: Mobile-first approach with breakpoint system
- ⚡ **Vue 3**: Built with the latest Vue.js and Composition API
- 🚀 **Vite**: Lightning-fast build tool for development and production
- 🎯 **Vue Router**: SPA navigation with 40+ documentation pages
- 🛠️ **Developer Tools**: CSS extractor, theme customizer, and bot builder
- 📖 **Interactive Documentation**: Live examples and code snippets
- 🎭 **12+ Theme Presets**: RetailRidge, CommerceCraft, Blogify, Flexiweb, Edinburgh, and more
- 🔧 **CSS Variables**: Full customization via CSS custom properties
- 🌍 **RTL Support**: Right-to-left language support
- ♿ **Accessibility**: WCAG 2.1 compliant components
- 📊 **Dashboard Layouts**: Sidebar, header, grid, and content layouts
- 💬 **Chat Components**: Message bubbles, input fields, and typing indicators

## Estructura del Proyecto

```
vue-app/
├── src/
│   ├── components/          # Componentes de la UI
│   │   ├── DocsHeader.vue
│   │   ├── DocsSidebar.vue
│   │   ├── DocsTableOfContents.vue
│   │   └── DocsFooter.vue
│   ├── views/               # Páginas de documentación
│   │   ├── Home.vue
│   │   ├── Introduction.vue
│   │   ├── Installation.vue
│   │   ├── QuickStart.vue
│   │   ├── Components.vue
│   │   ├── Buttons.vue
│   │   ├── Cards.vue
│   │   ├── Forms.vue
│   │   ├── Tables.vue
│   │   ├── Layout.vue
│   │   ├── Utilities.vue
│   │   └── Theming.vue
│   ├── router/              # Configuración de rutas
│   │   └── index.js
│   ├── styles/              # Estilos CSS
│   │   └── nestjs-docs.css
│   ├── App.vue              # Componente principal
│   └── main.js              # Punto de entrada
├── index.html               # HTML template
├── vite.config.js           # Configuración de Vite
└── package.json             # Dependencias
```

## Instalación

1. Navega al directorio del proyecto:
```bash
cd vue-app
```

2. Instala las dependencias:
```bash
npm install
```

## Desarrollo

Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## Build para Producción

Construye la aplicación para producción:
```bash
npm run build
```

Los archivos optimizados se generarán en el directorio `dist/`.

## Preview de Producción

Previsualiza el build de producción:
```bash
npm run preview
```

## Estilos NestJS

Los estilos están inspirados en la documentación de NestJS y se encuentran en `src/styles/nestjs-docs.css`. Incluyen:

- Variables CSS para theming
- Soporte para modo oscuro
- Paleta de colores de NestJS (rojo/carmesí)
- Tipografía Source Sans Pro e Inconsolata
- Animaciones suaves
- Diseño responsive

## Personalización

### Colores

Modifica las variables CSS en `src/styles/nestjs-docs.css`:

```css
:root {
    --docs-primary-color: #ea2845;
    --docs-primary-accent: #ea2868;
    /* ... más variables */
}
```

### Tema Oscuro

El tema oscuro se activa automáticamente mediante el atributo `mode` en el elemento HTML:

```html
<html mode="dark">
```

## Componentes

### DocsHeader
Header de navegación con logo, enlaces y toggle de tema.

### DocsSidebar
Barra lateral de navegación con secciones organizadas y buscador.

### DocsTableOfContents
Tabla de contenidos que se actualiza al hacer scroll.

### DocsFooter
Footer con enlaces a recursos y comunidad.

## Rutas

- `/` - Página principal
- `/introduction` - Introducción a Karibase
- `/installation` - Guía de instalación
- `/quick-start` - Inicio rápido
- `/components` - Vista general de componentes
- `/components/buttons` - Documentación de botones
- `/components/cards` - Documentación de cards
- `/components/forms` - Documentación de formularios
- `/components/tables` - Documentación de tablas
- `/layout` - Sistema de layout
- `/utilities` - Utilidades CSS
- `/theming` - Guía de theming

## Tecnologías

- Vue 3.3.4
- Vue Router 4.2.4
- Vite 4.4.9
- PrismJS 1.29.0 (para resaltado de código)

## Licencia

MIT

## Soporte

Para issues y preguntas, visita el repositorio principal de Karibase.
