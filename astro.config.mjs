import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    vite: {
        server: {
            allowedHosts: ['5d80-2a02-a462-bf6b-0-38d4-9610-eaf7-ee48.ngrok-free.app']
        }
    },
    site: 'https://jeroenvanwissen.nl',
    integrations: [tailwind()],
    redirects: {
        '/blog/[slug]': '/post/[slug]',
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
        '/weblog': '/posts'
    }
});
