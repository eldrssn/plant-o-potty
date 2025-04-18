import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
    svgr(),
    legacy({
      targets: ['defaults', 'IE >= 10', 'Chrome >= 40', 'Firefox >= 44', 'Safari >= 0', 'iOS >= 9'],
    }),
  ],
})
