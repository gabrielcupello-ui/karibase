// vite.config.js
import { defineConfig } from "file:///C:/Users/gabri/OneDrive/Documentos/karibase/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/gabri/OneDrive/Documentos/karibase/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\gabri\\OneDrive\\Documentos\\karibase";
var vite_config_default = defineConfig({
  // Base path for deployment. Set VITE_BASE_PATH=/karibase/ for GitHub Pages.
  base: process.env.VITE_BASE_PATH || "/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@css": path.resolve(__vite_injected_original_dirname, "./src/styles"),
      "@js": path.resolve(__vite_injected_original_dirname, "./src/js"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@views": path.resolve(__vite_injected_original_dirname, "./src/views"),
      "@router": path.resolve(__vite_injected_original_dirname, "./src/router")
    }
  },
  css: {
    postcss: "./postcss.config.js",
    devSourcemap: true,
    modules: {
      localsConvention: "camelCase"
    }
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "karibase-css": ["./src/styles/karibase-modern.css"],
          "karibase-admin": ["./src/styles/karibase-admin-utilities.css"],
          "vendor": ["vue", "vue-router"]
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
      }
    },
    chunkSizeWarningLimit: 1e3
  },
  server: {
    port: 3e3,
    open: true,
    host: true,
    watch: {
      usePolling: true,
      interval: 1e3
    },
    hmr: {
      overlay: true
    }
  },
  optimizeDeps: {
    include: ["vue", "vue-router"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxnYWJyaVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudG9zXFxcXGthcmliYXNlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxnYWJyaVxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudG9zXFxcXGthcmliYXNlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9nYWJyaS9PbmVEcml2ZS9Eb2N1bWVudG9zL2thcmliYXNlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIC8vIEJhc2UgcGF0aCBmb3IgZGVwbG95bWVudC4gU2V0IFZJVEVfQkFTRV9QQVRIPS9rYXJpYmFzZS8gZm9yIEdpdEh1YiBQYWdlcy5cclxuICBiYXNlOiBwcm9jZXNzLmVudi5WSVRFX0JBU0VfUEFUSCB8fCAnLycsXHJcbiAgcGx1Z2luczogW3Z1ZSgpXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAnQGNzcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zdHlsZXMnKSxcclxuICAgICAgJ0Bqcyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9qcycpLFxyXG4gICAgICAnQGNvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29tcG9uZW50cycpLFxyXG4gICAgICAnQHZpZXdzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3ZpZXdzJyksXHJcbiAgICAgICdAcm91dGVyJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3JvdXRlcicpXHJcbiAgICB9XHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHBvc3Rjc3M6ICcuL3Bvc3Rjc3MuY29uZmlnLmpzJyxcclxuICAgIGRldlNvdXJjZW1hcDogdHJ1ZSxcclxuICAgIG1vZHVsZXM6IHtcclxuICAgICAgbG9jYWxzQ29udmVudGlvbjogJ2NhbWVsQ2FzZSdcclxuICAgIH1cclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXHJcbiAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgJ2thcmliYXNlLWNzcyc6IFsnLi9zcmMvc3R5bGVzL2thcmliYXNlLW1vZGVybi5jc3MnXSxcclxuICAgICAgICAgICdrYXJpYmFzZS1hZG1pbic6IFsnLi9zcmMvc3R5bGVzL2thcmliYXNlLWFkbWluLXV0aWxpdGllcy5jc3MnXSxcclxuICAgICAgICAgICd2ZW5kb3InOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanMnLFxyXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanMnLFxyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF0nXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDEwMDBcclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMzAwMCxcclxuICAgIG9wZW46IHRydWUsXHJcbiAgICBob3N0OiB0cnVlLFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgdXNlUG9sbGluZzogdHJ1ZSxcclxuICAgICAgaW50ZXJ2YWw6IDEwMDBcclxuICAgIH0sXHJcbiAgICBobXI6IHtcclxuICAgICAgb3ZlcmxheTogdHJ1ZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICBpbmNsdWRlOiBbJ3Z1ZScsICd2dWUtcm91dGVyJ11cclxuICB9XHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1QsU0FBUyxvQkFBb0I7QUFDNVYsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUZqQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQTtBQUFBLEVBRTFCLE1BQU0sUUFBUSxJQUFJLGtCQUFrQjtBQUFBLEVBQ3BDLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxFQUNmLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNwQyxRQUFRLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDOUMsT0FBTyxLQUFLLFFBQVEsa0NBQVcsVUFBVTtBQUFBLE1BQ3pDLGVBQWUsS0FBSyxRQUFRLGtDQUFXLGtCQUFrQjtBQUFBLE1BQ3pELFVBQVUsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUMvQyxXQUFXLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsSUFDbkQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsSUFDVCxjQUFjO0FBQUEsSUFDZCxTQUFTO0FBQUEsTUFDUCxrQkFBa0I7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLGdCQUFnQixDQUFDLGtDQUFrQztBQUFBLFVBQ25ELGtCQUFrQixDQUFDLDJDQUEyQztBQUFBLFVBQzlELFVBQVUsQ0FBQyxPQUFPLFlBQVk7QUFBQSxRQUNoQztBQUFBLFFBQ0EsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsSUFDQSx1QkFBdUI7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLE9BQU8sWUFBWTtBQUFBLEVBQy9CO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
