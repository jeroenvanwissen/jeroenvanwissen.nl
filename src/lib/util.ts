import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

interface ISite {
  url: string;
}

type Post = CollectionEntry<'post'> & {
  data: {
    draft: boolean;
    date: Date;
    title: string;
    categories: string[];
    description: string;
    type: string;
    image?: {
      url: string;
      alt: string;
    };
  };
};

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

export async function getPostsByType(
  collection: 'post' | 'photo' | 'project' | 'recipe',
  type: string
): Promise<Post[]> {
  return (await getCollection(collection)).filter(
    (entry) => !entry.data.draft && (type === 'all' || entry.data.type === type)
  ) as Post[];
}

export async function getSortedPostsByType(
  collection: 'post' | 'photo' | 'project' | 'recipe',
  type: string
): Promise<Post[]> {
  return (await getPostsByType(collection, type)).sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
}

/**
 * getSortedCollection
 *
 * @param collection
 * @returns
 */
export async function getSortedCollection<
  T extends 'post' | 'photo' | 'project' | 'recipe',
>(collection: T): Promise<CollectionEntry<T>[]> {
  return (await getCollection(collection, ({ data }) => !data.draft)).sort(
    (a: CollectionEntry<T>, b: CollectionEntry<T>) => {
      return b.data.date.getTime() - a.data.date.getTime();
    }
  );
}

// export async function getAllSortedEntries(): Promise<Post[]> {
//     return [...(await getEntriesFromCollection('post', 'all'))].sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
// }

// export async function getLatestPhotoEntries(): Promise<Post[]> {
//     return [...(await getEntriesFromCollection('post', 'photo'))]
//         .filter((entry) => entry.data.image?.url)
//         .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())
//         .slice(0, 10);
// }

export async function generateSitemapXml(
  entries: Post[] = [],
  site: ISite
): Promise<string> {
  const lastMod = new Date().toISOString();
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <url>
        <loc>${site.url}</loc>
        <lastmod>${lastMod}</lastmod>
        <priority>1.00</priority>
    </url>
    ${entries
      .map((entry) => {
        return `
            <url>
                <loc>${site.url}/${entry.collection}/${entry.slug}</loc>
                <lastmod>${entry.data.date.toISOString()}</lastmod>
                <priority>0.80</priority>
            </url>
        `.trim();
      })
      .join('')}
    </urlset>
    `.trim();
}
