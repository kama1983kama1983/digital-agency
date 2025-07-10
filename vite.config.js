import { fileURLToPath, URL } from 'node:url'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'
import process from 'node:process'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

dotenv.config()
// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  define:{
      'import.meta.env.Title' : JSON.stringify(process.env.Title),
      'import.meta.env.BASE_URL' : JSON.stringify(process.env.BASE_URL),
      'import.meta.env.Email_Service_ID' : JSON.stringify(process.env.Email_Service_ID),
      'import.meta.env.EMAILJS_USER_ID' : JSON.stringify(process.env.EMAILJS_USER_ID)
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
