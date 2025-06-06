import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src-backup',
  plugins: [react()],
  build: {
    outDir: '../dist',  // output relative to root
  },
});
