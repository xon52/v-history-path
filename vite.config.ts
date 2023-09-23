import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts(), cssInjectedByJsPlugin()],
  build: {
    emptyOutDir: true,
    cssCodeSplit: false,
    lib: {
      entry: resolve('./src/index.ts'),
      name: 'v-history-path'
    },
    rollupOptions: {
      external: ['vue']
    }
  }
})
