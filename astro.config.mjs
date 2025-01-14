import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
//  site: 'https://jeroenvanwissen.nl',
//  output: 'static',
  site: 'https://jeroenvanwissen.github.io',
  base: 'jeroenvanwissen.nl',
  integrations: [tailwind()]
});
