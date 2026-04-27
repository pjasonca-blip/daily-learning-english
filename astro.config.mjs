import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // v4 방식

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});