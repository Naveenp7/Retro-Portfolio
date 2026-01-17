import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures assets load correctly on GitHub Pages
  plugins: [react()],
  server: {
    allowedHosts: ['1c49d69e4c59.ngrok-free.app', 'localhost', '127.0.0.1'],
    host: true, // Listen on all local IPs
  },
})
