export default {
  plugins: {
    // Autoprefixer para compatibilidad cross-browser
    autoprefixer: {
      overrideBrowserslist: ['last 2 versions', 'not dead'],
    },
    
    // PostCSS Import para resolver @import y permitir tree-shaking
    '@csstools/postcss-cascade-layers': true,
  },
}
