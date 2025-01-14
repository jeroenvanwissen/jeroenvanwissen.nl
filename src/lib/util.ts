import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

interface ICategory {
    name: string;
    slug: string;
}

interface ISite {
    url: string;
}

type BlogEntry = CollectionEntry<'post'> & {
    data: {
        draft: boolean;
        date: Date;
        title: string;
        categories: string[];
        description: string;
        type: string;
    }
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

export function generateCategories(categories: string[] = []): ICategory[] {
    const categoriesData: ICategory[] = [];
    categories && categories.forEach((category) => {
        categoriesData.push({
            name: category,
            slug: `${generateSlug(category)}`,
        });
    });
    return categoriesData;
}

export async function getEntriesFromCollection(collection: 'post', type: string): Promise<BlogEntry[]> {
    const entries = await getCollection(collection);
    return entries.filter(entry => !entry.data.draft && entry.data.type === type) as BlogEntry[];
}

export async function getSortedEntriesFromCollection(collection: 'post', type: string): Promise<BlogEntry[]> {
    return (await getEntriesFromCollection(collection, type))
        .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
}

export async function getAllSortedEntries(): Promise<BlogEntry[]> {
    return [...(await getEntriesFromCollection('post', 'blog'))]
        .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
}

export async function getAllCategories(): Promise<ICategory[]> {
    return generateCategories([
        ...new Set((await getAllSortedEntries())
            .map(entry => entry.data.categories)
            .flat())
    ]);
}

export async function getEntriesByCategorySlug(slug: string): Promise<{
    category: ICategory;
    entries: BlogEntry[];
}> {
    const category = (await getAllCategories()).filter(category => category.slug === slug)[0];
    const entries = (await getAllSortedEntries()).filter(entry => entry.data.categories.includes(category.name));
    return {
        category,
        entries
    };
}

export async function generateSitemapXml(entries: BlogEntry[] = [], site: ISite): Promise<string> {
    const lastMod = new Date().toISOString();
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
    ${/**(await getAllCategories()).map(category => {
        return `
            <url>
                <loc>${site.url}/category/${category.slug}</loc>
                <lastmod>${lastMod}</lastmod>
                <priority>0.64</priority>
            </url>
        `.trim();
    }).join("")**/''}
    </urlset>
    `.trim();
}
