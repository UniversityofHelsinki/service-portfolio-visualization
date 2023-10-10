import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  base:"https://universityofhelsinki.github.io/service-portfolio-visualization/dist/",
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
