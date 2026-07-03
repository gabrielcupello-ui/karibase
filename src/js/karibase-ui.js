/**
 * Karibase UI - Modular JavaScript Components
 * CDN: https://cdn.jsdelivr.net/npm/karibase@2.0.0/dist/karibase-ui.js
 */

class KaribaseUI {
  constructor() {
    this.modals = new Map();
    this.dropdowns = new Map();
    this.tooltips = new Map();
    this.init();
  }

  init() {
    this.initModals();
    this.initDropdowns();
    this.initTooltips();
    this.initFloatingBots();
    this.initThemeToggle();
  }

  // Modal System
  initModals() {
    document.querySelectorAll('[data-kb-modal]').forEach(trigger => {
      const modalId = trigger.getAttribute('data-kb-modal');
      const modal = document.getElementById(modalId);
      
      if (modal) {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          this.openModal(modalId);
        });

        const closeButtons = modal.querySelectorAll('[data-kb-close], .kb-modal-close');
        closeButtons.forEach(btn => {
          btn.addEventListener('click', () => this.closeModal(modalId));
        });

        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            this.closeModal(modalId);
          }
        });

        this.modals.set(modalId, modal);
      }
    });
  }

  openModal(modalId) {
    const modal = this.modals.get(modalId);
    if (modal) {
      modal.classList.add('kb-modal-show');
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      
      // Emit event
      this.emit('modal:open', { modalId });
    }
  }

  closeModal(modalId) {
    const modal = this.modals.get(modalId);
    if (modal) {
      modal.classList.remove('kb-modal-show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 300);
      document.body.style.overflow = '';
      
      // Emit event
      this.emit('modal:close', { modalId });
    }
  }

  // Dropdown System
  initDropdowns() {
    document.querySelectorAll('[data-kb-dropdown]').forEach(trigger => {
      const dropdownId = trigger.getAttribute('data-kb-dropdown');
      const dropdown = document.getElementById(dropdownId);
      
      if (dropdown) {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          this.toggleDropdown(dropdownId);
        });

        document.addEventListener('click', () => {
          this.closeDropdown(dropdownId);
        });

        this.dropdowns.set(dropdownId, dropdown);
      }
    });
  }

  toggleDropdown(dropdownId) {
    const dropdown = this.dropdowns.get(dropdownId);
    if (dropdown) {
      dropdown.classList.toggle('kb-dropdown-show');
    }
  }

  closeDropdown(dropdownId) {
    const dropdown = this.dropdowns.get(dropdownId);
    if (dropdown) {
      dropdown.classList.remove('kb-dropdown-show');
    }
  }

  // Tooltip System
  initTooltips() {
    document.querySelectorAll('[data-kb-tooltip]').forEach(trigger => {
      const tooltipText = trigger.getAttribute('data-kb-tooltip');
      const tooltip = document.createElement('div');
      tooltip.className = 'kb-tooltip';
      tooltip.textContent = tooltipText;
      document.body.appendChild(tooltip);

      trigger.addEventListener('mouseenter', (e) => {
        this.showTooltip(tooltip, trigger);
      });

      trigger.addEventListener('mouseleave', () => {
        this.hideTooltip(tooltip);
      });

      this.tooltips.set(trigger, tooltip);
    });
  }

  showTooltip(tooltip, trigger) {
    const rect = trigger.getBoundingClientRect();
    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 8}px`;
    tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
    tooltip.classList.add('kb-tooltip-show');
  }

  hideTooltip(tooltip) {
    tooltip.classList.remove('kb-tooltip-show');
  }

  // Floating Bots System
  initFloatingBots() {
    document.querySelectorAll('[data-kb-bot]').forEach(bot => {
      const botId = bot.getAttribute('data-kb-bot');
      const botConfig = this.getBotConfig(botId);
      
      if (botConfig) {
        bot.addEventListener('click', () => {
          this.openFloatingBot(botId, botConfig);
        });
      }
    });
  }

  getBotConfig(botId) {
    const configs = {
      'chat': {
        title: 'Chat Assistant',
        position: 'bottom-right',
        theme: 'light'
      },
      'support': {
        title: 'Support Bot',
        position: 'bottom-left',
        theme: 'dark'
      }
    };
    return configs[botId] || null;
  }

  openFloatingBot(botId, config) {
    const existingBot = document.getElementById(`kb-bot-${botId}`);
    if (existingBot) {
      existingBot.remove();
    }

    const bot = document.createElement('div');
    bot.id = `kb-bot-${botId}`;
    bot.className = `kb-floating-bot kb-floating-bot-${config.position}`;
    bot.innerHTML = `
      <div class="kb-bot-header">
        <h3>${config.title}</h3>
        <button class="kb-bot-close" data-kb-close-bot="${botId}">×</button>
      </div>
      <div class="kb-bot-content">
        <div class="kb-bot-message">
          Hello! How can I help you today?
        </div>
      </div>
      <div class="kb-bot-input">
        <input type="text" placeholder="Type a message..." class="kb-bot-input-field">
        <button class="kb-bot-send">Send</button>
      </div>
    `;

    document.body.appendChild(bot);

    bot.querySelector('[data-kb-close-bot]').addEventListener('click', () => {
      bot.remove();
    });
  }

  // Theme Toggle
  initThemeToggle() {
    const themeToggle = document.querySelector('[data-kb-theme-toggle]');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('karibase-theme');
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('mode', 'dark');
    }
  }

  toggleTheme() {
    const currentMode = document.documentElement.getAttribute('mode');
    const newMode = currentMode === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('mode', newMode);
    localStorage.setItem('karibase-theme', newMode);
    this.emit('theme:change', { mode: newMode });
  }

  // Event System
  on(event, callback) {
    if (!this.events) this.events = new Map();
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(callback);
  }

  emit(event, data) {
    if (this.events && this.events.has(event)) {
      this.events.get(event).forEach(callback => callback(data));
    }
  }

  // Utility Methods
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.karibaseUI = new KaribaseUI();
  });
} else {
  window.karibaseUI = new KaribaseUI();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KaribaseUI;
}
