import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import the Tailwind CSS Vite plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),          // React plugin
    tailwindcss(),    // Tailwind CSS plugin
  ],
  server: {
    port: 5173,
  },
});