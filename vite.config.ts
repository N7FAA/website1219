import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  // 如果部署到 GitHub Pages 子目录，取消下面的注释并设置正确的 base
  // base: '/your-repo-name/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild', // 使用 esbuild（Vite 默认，更快且无需额外依赖）
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
  },
})

