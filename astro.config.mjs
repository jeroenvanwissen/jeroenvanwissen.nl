import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      allowedHosts: [
        '5d80-2a02-a462-bf6b-0-38d4-9610-eaf7-ee48.ngrok-free.app',
      ],
    },

    plugins: [tailwindcss()],
  },
  site: 'https://jeroenvanwissen.nl',
  integrations: [],
  redirects: {
    '/blog/[slug]': '/post/[slug]',
    '/blog/categories-pages-added': '/post/category-pages-added',
    '/blog/adding-mdx-and-image-integration': '/',
    '/contact': '/',
    '/donated': '/',
    '/images.json': '/',
    '/index.xml': '/',
    '/lastfm-blocks-module': '/',
    '/lead-story/2008/10/08/howto-iphone-application-development-environment.html':
      '/',
    '/over-mij': '/',
    '/partners': '/',
    '/portfolio': '/',
    '/webcam': '/',
    '/weblog/wordpress/custom-sections': '/',
    '/weblog/php/howto-generate-animated-gif-with-php': '/',
    '/weblog/wordpress/add-custom-fields-to-a-taxonomy': '/',
    '/weblog': '/posts',
    '/post/gooseberry-an-open-source-twitch-livestream-companion-app':
      '/post/gooseberry-app',
    '/post/published-eslint-config-npm-package':
      '/post/fastone-eslint-config-npm-package',
    '/post/building-a-simple-blockchain-network-application-in-javascript':
      '/post/blockchain-ts',
  },
});
