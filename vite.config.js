import { defineConfig } from 'vite'

export default defineConfig({
  base: '/diapo/',
  build: {
    cssMinify: 'esbuild',
  },
})