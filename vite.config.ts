import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['cannon-es-debugger', '@angular/router'],
  },
});
