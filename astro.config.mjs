import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jeroenvanwissen.nl',
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind()]
});