// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://www.nlccs.nl',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
    }),
  ],
});
