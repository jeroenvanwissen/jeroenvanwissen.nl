import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getSortedCollection } from '@lib/util';

export async function GET(context: APIContext) {
  const posts = await getSortedCollection('post');

  return rss({
    title: 'Jeroen van Wissen',
    description: 'Posts by Jeroen van Wissen',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/post/${post.slug}/`,
    })),
  });
}
