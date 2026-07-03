# Karibase JavaScript Framework

Complete JavaScript library for Karibase CSS Framework.

## Files Overview

### karibase.bundle.js (207KB)
Complete bundled version with all plugins included.
- Includes: Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, Scrollspy, Tab, Toast, Tooltip
- **Usage**: `<script src="js/karibase.bundle.js"></script>`

### karibase.bundle.min.js (80KB)
Minified version of the complete bundle.
- **Usage**: `<script src="js/karibase.bundle.min.js"></script>`

### karibase.esm.js (135KB)
ES Module version for modern JavaScript applications.
- **Usage**: `import { Modal, Dropdown } from './js/karibase.esm.js'`

### karibase.esm.min.js (73KB)
Minified ES Module version.
- **Usage**: `import { Modal, Dropdown } from './js/karibase.esm.min.js'`

### karibase.js (145KB)
UMD version for direct browser usage.
- **Usage**: `<script src="js/karibase.js"></script>`

### karibase.min.js (60KB)
Minified UMD version.
- **Usage**: `<script src="js/karibase.min.js"></script>`

### karibase-ui.js (7KB)
Custom Karibase UI components.
- Features: Modals, Dropdowns, Tooltips, Floating Bots, Theme Toggle
- **Usage**: `<script src="js/karibase-ui.js"></script>`

## Quick Start

### Option 1: Complete Bundle (Recommended)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="karibase.css">
</head>
<body>
  <!-- Your content -->
  
  <script src="js/karibase.bundle.min.js"></script>
  <script src="js/karibase-ui.js"></script>
</body>
</html>
```

### Option 2: ES Modules
```html
<script type="module">
  import { Modal, Dropdown } from './js/karibase.esm.min.js';
  
  // Use components
  const myModal = new Modal('#myModal');
</script>
```

### Option 3: Individual Plugins
```html
<script src="js/karibase.min.js"></script>
<script src="js/karibase-ui.js"></script>
```

## Components

### Bootstrap-based Components (karibase.*.js)
- **Alert**: Dismissible alert messages
- **Button**: Button state management and loading states
- **Carousel**: Image sliders with controls
- **Collapse**: Accordion and collapsible content
- **Dropdown**: Dropdown menus
- **Modal**: Dialog boxes and overlays
- **Offcanvas**: Side panels and drawers
- **Popover**: Content popovers
- **Scrollspy**: Scroll position tracking
- **Tab**: Tab navigation
- **Toast**: Notification toasts
- **Tooltip**: Hover tooltips

### Custom Karibase Components (karibase-ui.js)
- **Modals**: Enhanced modal system with data attributes
- **Dropdowns**: Enhanced dropdown system
- **Tooltips**: Custom tooltip implementation
- **Floating Bots**: Chat and support bots
- **Theme Toggle**: Dark/light mode switching

## Usage Examples

### Modal (Bootstrap)
```html
<!-- Trigger -->
<button type="button" data-bs-toggle="modal" data-bs-target="#myModal">
  Launch modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
    </div>
  </div>
</div>
```

### Modal (Karibase UI)
```html
<!-- Trigger -->
<button data-kb-modal="myKaribaseModal">Open Modal</button>

<!-- Modal -->
<div id="myKaribaseModal" class="kb-modal-overlay">
  <div class="kb-modal">
    <div class="kb-modal-header">
      <h3 class="kb-modal-title">Modal Title</h3>
      <button class="kb-modal-close" data-kb-close>×</button>
    </div>
    <div class="kb-modal-body">
      <p>Modal content</p>
    </div>
  </div>
</div>
```

### Dropdown (Bootstrap)
```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
  </ul>
</div>
```

### Dropdown (Karibase UI)
```html
<button data-kb-dropdown="myDropdown">Toggle Dropdown</button>

<div id="myDropdown" class="kb-dropdown">
  <a href="#">Action</a>
  <a href="#">Another action</a>
</div>
```

### Theme Toggle (Karibase UI)
```html
<button data-kb-theme-toggle>
  Toggle Theme
</button>
```

## API Reference

### Karibase UI Instance
```javascript
// Access the global instance
window.karibaseUI

// Listen to events
karibaseUI.on('modal:open', (data) => {
  console.log('Modal opened:', data.modalId);
});

// Open modal programmatically
karibaseUI.openModal('myModal');

// Close modal programmatically
karibaseUI.closeModal('myModal');

// Toggle theme
karibaseUI.toggleTheme();
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11 (with polyfills)

## License

MIT License - See LICENSE file for details.

## Support

- GitHub: https://github.com/gabrielcupello-ui/karibase
- Documentation: https://karibase.dev/docs
