import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@css': path.resolve(__dirname, './src/styles'),
      '@js': path.resolve(__dirname, './src/js')
    }
  },
  css: {
    postcss: './postcss.config.js',
    devSourcemap: true,
    modules: {
      localsConvention: 'camelCase'
    }
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'karibase-css': ['./src/styles/karibase-modern.css']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
