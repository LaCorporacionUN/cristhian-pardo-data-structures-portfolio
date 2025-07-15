import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  base: '/cristhian-pardo-data-structures-portfolio/',
  plugins: [
    mdx({ include: /\.mdx?$/ }),
    react(),
  ],
  assetsInclude: ['**/*.png', '**/*.svg'],
})
