import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // 輸出目錄
    outDir: 'dist',
    // 生成 sourcemap
    sourcemap: false,
    // 分塊策略
    rollupOptions: {
      output: {
        // 分離 vendor chunk
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router']
        },
        // 資源檔案命名
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // 圖片檔案
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name)) {
            return 'images/[name]-[hash][extname]'
          }
          // CSS 檔案
          if (/\.css$/i.test(assetInfo.name)) {
            return 'css/[name]-[hash][extname]'
          }
          // 其他檔案
          return 'assets/[name]-[hash][extname]'
        }
      }
    },
    // 壓縮選項
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // 移除 console
        drop_debugger: true // 移除 debugger
      }
    },
    // chunk 大小警告限制
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  preview: {
    port: 4173,
    open: true
  }
})
