import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getSortedCollection } from '@lib/util';

export async function GET(context: APIContext) {
  const projects = await getSortedCollection('project');

  return rss({
    title: 'Projects by Jeroen van Wissen',
    description: 'Projects by Jeroen van Wissen',
    site: context.site!,
    items: projects.map((project) => ({
      title: project.data.title,
      pubDate: project.data.date,
      description: project.data.description,
      link: `/project/${project.slug}`,
    })),
  });
}
