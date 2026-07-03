# Karibase Vue Documentation App

Documentación interactiva de Karibase construida con Vue.js, inspirada en el diseño de NestJS.

## Características

- 🎨 **Diseño estilo NestJS**: Interfaz de documentación moderna y profesional
- 🌓 **Modo oscuro**: Soporte completo para tema claro y oscuro
- 📱 **Responsive**: Diseño adaptativo para todos los dispositivos
- ⚡ **Vue 3**: Construido con la última versión de Vue.js y Composition API
- 🚀 **Vite**: Build tool rápido para desarrollo y producción
- 🎯 **Vue Router**: Navegación SPA fluida
- 📖 **Componentes reutilizables**: Header, Sidebar, Table of Contents, Footer

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
