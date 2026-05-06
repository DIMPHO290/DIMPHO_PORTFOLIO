import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Workaround: lucide-react publishes `"use client"` module directives.
    // Vite/Rollup warns that these directives are ignored when bundling.
    // Disabling mixed-module transformation avoids the noisy warning.
    commonjsOptions: {
      transformMixedEsModules: false,
    },
  },
})
