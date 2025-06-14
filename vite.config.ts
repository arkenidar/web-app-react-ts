import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ln -s docs web-app-react-ts
  // npm run build
  build: {
    outDir: 'docs',
  },
  base: '/web-app-react-ts/',
})
