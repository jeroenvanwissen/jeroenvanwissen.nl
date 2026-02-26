import type { APIRoute } from 'astro';
import { getSortedCollection } from '@lib/util';

const staticPages = [
  '',
  '/posts',
  '/projects',
  '/photography',
  '/resume',
];

export const GET: APIRoute = async ({ site }) => {
  const siteUrl = site?.toString().replace(/\/$/, '') ?? '';

  const posts = await getSortedCollection('post');
  const projects = await getSortedCollection('project');
  const photos = await getSortedCollection('photo');

  const lastMod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${lastMod}</lastmod>
    <priority>${page === '' ? '1.00' : '0.80'}</priority>
  </url>`
  )
  .join('\n')}
${[...posts, ...projects, ...photos]
  .map(
    (entry) => `  <url>
    <loc>${siteUrl}/${entry.collection}/${entry.slug}</loc>
    <lastmod>${entry.data.date.toISOString()}</lastmod>
    <priority>0.80</priority>
  </url>`
  )
  .join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
