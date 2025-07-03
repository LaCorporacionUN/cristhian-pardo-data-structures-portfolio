// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cristhian-pardo-data-structures-portfolio/',  // 👈 reemplaza esto con tu repo
  plugins: [react()],
})
