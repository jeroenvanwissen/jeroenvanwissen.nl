import { getCollection } from 'astro:content';
import { generateCategories } from '../utils/helpers';


async function getSortedPostsFromCollections(collections) {
    return new Promise(async (resolve) => {
        let posts = await Promise.all(collections.map(async (collection) => await getCollection(collection).then(entries => entries.filter(entry => !entry.data.draft))));
        posts = posts.flat(1).sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
        resolve(posts);
    });
}

const posts = await getSortedPostsFromCollections(['blog', 'recipes']);

const urlset = [];
const collections = [];
const categories = [];
urlset.push({lastmod: posts[0].data.date, priority: '1.00', loc: import.meta.env.SITE});
posts.forEach(post => {
    if (!collections.includes(post.collection)) {
        urlset.push({lastmod: posts[0].data.date, priority: '1.00', loc: `${import.meta.env.SITE}/${post.collection}`});
        collections.push(post.collection);
    }
    urlset.push({lastmod: post.data.date, priority: '0.80', loc: `${import.meta.env.SITE}/blog/${post.slug}`});
    generateCategories(post.data.categories).forEach(category => {
        if (!categories.includes(category.slug)) {
            urlset.push({lastmod: post.data.date, priority: '0.64', loc: `${import.meta.env.SITE}/category/${category.slug}`});
            categories.push(category.slug);
        }
    });
});

const sitemap = urlset.map(url => `<url><loc>${url.loc}</loc><lastmod>${url.lastmod}</lastmod><priority>${url.priority}</priority></url>`);

export async function get({ params, request }) {
    return {
        body: `<?xml version="1.0" encoding="UTF-8"?><urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">${sitemap}<urlset>`,
    };
}
