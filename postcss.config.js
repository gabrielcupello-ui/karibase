export default {
  plugins: {
    // Resolve and inline @import rules before processing
    'postcss-import': {},

    // Autoprefixer para compatibilidad cross-browser
    autoprefixer: {
      overrideBrowserslist: ['last 2 versions', 'not dead'],
    },

    // Cascade layers support
    '@csstools/postcss-cascade-layers': true,

    // CSS Nano para minificación
    cssnano: {
      preset: 'default',
    },
  },
}
