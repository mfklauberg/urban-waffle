import { defineConfig } from 'vite'

import path from 'path';

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.tsx'),
      name: 'YS',
      fileName: (format) => `ys.${format}.js`
    },
  }
});
