import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function copyPublicSafe(): import('vite').Plugin {
  return {
    name: 'copy-public-safe',
    apply: 'build',
    closeBundle() {
      const publicDir = path.resolve(__dirname, 'public');
      const outDir = path.resolve(__dirname, 'dist');
      const files = fs.readdirSync(publicDir);
      for (const file of files) {
        const src = path.join(publicDir, file);
        const dest = path.join(outDir, file);
        try {
          fs.accessSync(src, fs.constants.R_OK);
          fs.copyFileSync(src, dest);
        } catch {
          // skip inaccessible files
        }
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyPublicSafe()],
  publicDir: false,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
