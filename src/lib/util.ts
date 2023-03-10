import { getCollection } from 'astro:content';

interface ICategory {
    name: string;
    slug: string;
}

export function generateSlug(category: string): string {
    return category
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export function generateCategories(categories: Array<string> = []): Array<ICategory> {
    const categoriesData: ICategory[] = [];
    categories && categories.forEach((category) => {
        categoriesData.push({
            name: category,
            slug: `${generateSlug(category)}`,
        });
    });
    return categoriesData;
}

export async function getEntriesFromCollection(collection: string) {
    return await getCollection(collection as any).then(entries => entries.filter(entry => !entry.data.draft));
}

export async function getSortedEntriesFromCollection(collection: string) {
    return (await getEntriesFromCollection(collection)).sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
}

export async function getAllSortedEntries() {
    return [...(await getEntriesFromCollection('blog')), ...(await getEntriesFromCollection('recipes'))].sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
}

export async function getAllCategories() {
    return generateCategories([...new Set((await getAllSortedEntries()).map(entry => entry.data.categories).flat())]);
}

export async function getEntriesByCategorySlug(slug: string) {
    const category = (await getAllCategories()).filter(category => category.slug === slug)[0];
    const entries = (await getAllSortedEntries()).filter(entry => entry.data.categories.includes(category.name));
    return {
        category,
        entries
    }    
}

// export async function getSorted


// export async function getSortedCollectionPosts({ collection }) {
//     return await getCollection(collection)
//         .then(entries => entries
//             .filter(entry => !entry.data.draft)
//             .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()));
// }

// export async function generateSitemapXml({ posts, site}) {
//     return `
//     <?xml version="1.0" encoding="UTF-8"?>
//     <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
//     <url>
//         <loc>${site.url}</loc>
//         <lastmod>${posts[0].data.date.toISOString()}</lastmod>
//         <priority>1.00</priority>
//     </url>
//     ${posts.map(post => {
//         const loc = new URL(`/${post.collection}/${post.slug}`, site.url).href;
//         return `
//             <url>
//                 <loc>${loc}</loc>
//                 <lastmod>${post.data.date.toISOString()}</lastmod>
//                 <priority>0.80</priority>
//             </url>
//         `.trim();
//     }).join("")}
//     </urlset>
// `.trim();
// }

export { }