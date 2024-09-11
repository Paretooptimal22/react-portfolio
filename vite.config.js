import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true // Automatically opens the browser when you run the dev server
  },
  build: {
    outDir: 'build' // Use 'build' to keep consistency with Create React App
  }
});
