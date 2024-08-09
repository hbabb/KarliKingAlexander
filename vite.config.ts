// karliKingAlexander/frontend/vite.config.ts

/** @type {import('vite').UserConfig} */
import path from 'node:path'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'
// import EnvironmentPlugin from 'vite-plugin-environment'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // EnvironmentPlugin([
    //   all: true
    // ]),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables"; @import "./src/styles/mixins";',
      },
    },
    postcss: {
      plugins: [
        autoprefixer
      ],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/app/main.tsx'),
      },
    },
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0',
    hmr: {
      host: 'localhost',
      port: 8080,
    },
    watch: {
      usePolling: true,
    },
  },
})
