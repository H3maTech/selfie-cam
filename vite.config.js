import { defineConfig } from 'vite';

export default defineConfig({
  base: 'https://my.site.com/project/',
  server: {
    port: 1234,
  },
  build: {
    target: ['firefox78', 'safari14'],
  },
});
