import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// GitHub Pages serves the site from https://<user>.github.io/karibase/
const BASE = '/karibase/'

export default defineConfig(({ command }) => {
  const base = command === 'build' ? BASE : '/'

  return {
    base,
    plugins: [
      vue(),
      {
        // Expands %BASE_URL% inside index.html so public assets resolve
        // correctly under the GitHub Pages subpath
        name: 'html-base-url',
        transformIndexHtml: html => html.replace(/%BASE_URL%/g, base)
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@css': path.resolve(__dirname, './src/styles'),
        '@js': path.resolve(__dirname, './src/js'),
        '@components': path.resolve(__dirname, './src/components'),
        '@views': path.resolve(__dirname, './src/views'),
        '@router': path.resolve(__dirname, './src/router')
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
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'karibase-css': ['./src/styles/karibase-modern.css'],
            'karibase-admin': ['./src/styles/karibase-admin-utilities.css'],
            'vendor': ['vue', 'vue-router']
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      },
      chunkSizeWarningLimit: 1000
    },
    server: {
      port: 3000,
      open: true,
      host: true,
      watch: {
        usePolling: true,
        interval: 1000
      },
      hmr: {
        overlay: true
      }
    },
    optimizeDeps: {
      include: ['vue', 'vue-router']
    }
  }
})
