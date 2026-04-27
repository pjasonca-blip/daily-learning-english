import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // 이걸로 바꿔주세요!

export default defineConfig({
  // vite 설정 대신 integrations를 사용합니다.
  integrations: [tailwind()],
});