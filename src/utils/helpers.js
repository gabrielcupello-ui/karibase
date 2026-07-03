/**
 * Karibase Utility Helpers
 * Reusable utility functions for the application
 * @version 2.0.0
 */

/**
 * Debounce function to limit how often a function can fire
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, wait = 300) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Throttle function to limit execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, limit = 300) {
  let inThrottle
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Deep clone an object
 * @param {Object} obj - Object to clone
 * @returns {Object} Cloned object
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj.getTime())
  if (obj instanceof Array) return obj.map(item => deepClone(item))
  if (obj instanceof Object) {
    const clonedObj = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key])
      }
    }
    return clonedObj
  }
}

/**
 * Format date to locale string
 * @param {Date|string} date - Date to format
 * @param {string} locale - Locale string
 * @returns {string} Formatted date
 */
export function formatDate(date, locale = 'en-US') {
  const d = new Date(date)
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

/**
 * Generate unique ID
 * @param {string} prefix - ID prefix
 * @returns {string} Unique ID
 */
export function generateId(prefix = 'kb') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy:', err)
    return false
  }
}

/**
 * Download file from URL
 * @param {string} url - File URL
 * @param {string} filename - Download filename
 */
export function downloadFile(url, filename) {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * Download blob as file
 * @param {Blob} blob - File blob
 * @param {string} filename - Download filename
 */
export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  downloadFile(url, filename)
  URL.revokeObjectURL(url)
}

/**
 * Check if device is mobile
 * @returns {boolean} Is mobile device
 */
export function isMobile() {
  return window.innerWidth < 768
}

/**
 * Check if device is tablet
 * @returns {boolean} Is tablet device
 */
export function isTablet() {
  return window.innerWidth >= 768 && window.innerWidth < 1024
}

/**
 * Check if device is desktop
 * @returns {boolean} Is desktop device
 */
export function isDesktop() {
  return window.innerWidth >= 1024
}

/**
 * Get current viewport size
 * @returns {Object} Viewport dimensions
 */
export function getViewport() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}

/**
 * Local storage wrapper with error handling
 */
export const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error('Storage get error:', error)
      return defaultValue
    }
  },
  
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.error('Storage set error:', error)
      return false
    }
  },
  
  remove(key) {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error('Storage remove error:', error)
      return false
    }
  },
  
  clear() {
    try {
      localStorage.clear()
      return true
    } catch (error) {
      console.error('Storage clear error:', error)
      return false
    }
  }
}

/**
 * Parse query parameters from URL
 * @param {string} url - URL to parse
 * @returns {Object} Query parameters
 */
export function parseQueryParams(url = window.location.href) {
  const params = {}
  const queryString = url.split('?')[1]
  
  if (queryString) {
    queryString.split('&').forEach(param => {
      const [key, value] = param.split('=')
      params[decodeURIComponent(key)] = decodeURIComponent(value || '')
    })
  }
  
  return params
}

/**
 * Build query string from object
 * @param {Object} params - Query parameters
 * @returns {string} Query string
 */
export function buildQueryString(params) {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&')
}
