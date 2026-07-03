/**
 * Karibase Configuration
 * Centralized configuration for modular and scalable architecture
 * @version 2.0.0
 */

export const config = {
  app: {
    name: 'Karibase',
    version: '2.0.0',
    description: 'CSS Framework specialized in Admin Dashboards and Floating Bots'
  },
  
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
    timeout: 10000
  },
  
  features: {
    adminDashboard: true,
    floatingBots: true,
    cssExtractor: true,
    darkMode: true,
    hotReload: true
  },
  
  ui: {
    theme: {
      primary: '#465fff',
      secondary: '#6c757d',
      success: '#12b76a',
      danger: '#f04438',
      warning: '#f79009',
      info: '#0ba5ec'
    },
    sidebar: {
      width: 260,
      collapsedWidth: 64
    },
    header: {
      height: 64
    }
  },
  
  floatingBot: {
    defaultPosition: 'bottom-right',
    positions: ['bottom-right', 'bottom-left', 'top-right', 'top-left'],
    animationDuration: 300,
    typingIndicator: true
  },
  
  performance: {
    lazyLoad: true,
    codeSplitting: true,
    caching: true
  }
}

export default config
