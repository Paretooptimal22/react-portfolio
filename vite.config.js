import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically opens the browser when you run the dev server
    historyApiFallback: true, // Fallback to index.html for SPA routes
  },
  base: '/',
  build: {
    outDir: 'dist', // Output directory for the build (default is "dist")
  },
});
