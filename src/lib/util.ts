import { getCollection } from 'astro:content';

interface ICategory {
    name: string;
    slug: string;
}

interface IEntry {
    id: string;
    slug: string;
    body: string;
    collection: string;
    data: {
        draft: boolean;
        date: Date;
        title: string;
        categories: Array<[]>;
        description: string;
    }
    render: Function;
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

export async function getAllCategories(): Promise<Array<ICategory>> {
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

export async function generateSitemapXml(entries: Array<IEntry> = [], site: {url: string}) {
    const lastMod = entries[0]?.data?.date?.toISOString() || new Date().toISOString();
    return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <url>
        <loc>${site.url}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>1.00</priority>
    </url>
    ${entries.map(entry => {
        return `
            <url>
                <loc>${site.url}/${entry.collection}/${entry.slug}</loc>
                <lastmod>${entry.data.date.toISOString()}</lastmod>
                <priority>0.80</priority>
            </url>
        `.trim();
    }).join("")}
    ${(await getAllCategories()).map(category => {
        return `
            <url>
                <loc>${site.url}/category/${category.slug}</loc>
                <lastmod>${lastMod}</lastmod>
                <priority>0.64</priority>
            </url>
        `.trim();
    }).join("")}
    </urlset>
    `.trim();
}
