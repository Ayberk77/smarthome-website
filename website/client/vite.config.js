import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (CNAME: yoursmarthome.app) -> served from "/".
// If you ever deploy without a custom domain at https://<user>.github.io/smarthome-website/
// switch this to: base: '/smarthome-website/'
export default defineConfig({
  base: '/',
  plugins: [react()],
})
