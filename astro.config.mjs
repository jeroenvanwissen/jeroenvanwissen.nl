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
  markdown: {
    syntaxHighlight: 'prism',
  },
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
    '/post/website-layout-updates': '/post/website-devlog',
    '/post/new-year-new-website': '/post/website-devlog',
    '/post/implemented-tinacms': '/post/website-devlog',
    '/post/moved-back-to-simple-static-self-hosting-in-a-docker-container-from-netlify':
      '/post/website-devlog',
    '/post/category-pages-added': '/post/website-devlog',
    '/post/building-and-deploying-docker-images-with-github-actions':
      '/post/github-actions/building-and-deploying-docker-images',
    '/post/built-with-astro-build':
      '/post/astro-build/building-a-static-website',
    '/post/generate-a-simple-sitemapxml-on-your-astrobuild-website':
      '/post/astro-build/generate-a-simple-sitemapxml',
  },
});
