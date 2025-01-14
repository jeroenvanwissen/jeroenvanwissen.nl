import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jeroenvanwissen.nl',
  integrations: [tailwind()],
  redirects: {
    '/blog/[...slug]': '/post/[...slug]',
    '/blog/categories-pages-added': '/post/category-pages-added',
    '/blog/adding-mdx-and-image-integration': '/',
    '/contact': '/',
    '/donated': '/',
    '/images.json': '/',
    '/index.xml': '/',
    '/lastfm-blocks-module': '/',
    '/lead-story/2008/10/08/howto-iphone-application-development-environment.html': '/',
    '/over-mij': '/',
    '/partners': '/',
    '/portfolio': '/',
    '/webcam': '/',
    '/weblog/wordpress/custom-sections': '/',
    '/weblog/php/howto-generate-animated-gif-with-php': '/',
    '/weblog/wordpress/add-custom-fields-to-a-taxonomy': '/',
    '/weblog': '/posts',
  }
});
