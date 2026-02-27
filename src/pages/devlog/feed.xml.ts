import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getSortedCollection } from '@lib/util';

export async function GET(context: APIContext) {
  const devlogs = await getSortedCollection('devlog');

  return rss({
    title: 'Website Devlog - Jeroen van Wissen',
    description: 'Development log and updates for jeroenvanwissen.nl',
    site: context.site!,
    items: devlogs.map((devlog) => ({
      title: devlog.data.title,
      pubDate: devlog.data.date,
      description: devlog.data.description,
      link: `/devlog`,
      categories: devlog.data.categories,
    })),
  });
}
