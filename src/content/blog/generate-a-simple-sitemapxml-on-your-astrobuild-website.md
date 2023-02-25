---
draft: true
date: '2023-02-25T23:00:00.000Z'
title: Generate a simple sitemap.xml on your Astro.build website
description: >-
  Without adding an external dependency to your project, I worked out a simple
  solution to generate a sitemap.xml on your Server-Side-Rendered Astro.build
  website. I'm using this on my websites hosted on Netlify
---

I'm not saying this is perfect code, far from that. But for me it works...

```javascript
export async function generateSitemapXml({ posts, site }) {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <url>
        <loc>${site.url}</loc>
        <lastmod>${posts[0].data.date.toISOString()}</lastmod>
        <priority>1.00</priority>
    </url>
    ${posts.map(post => {
    const loc = new URL(`/${post.collection}/${post.slug}`, site.url).href;
    return `
            <url>
                <loc>${loc}</loc>
                <lastmod>${post.data.date.toISOString()}</lastmod>
                <priority>0.80</priority>
            </url>
        `.trim();
  }).join("")}
    </urlset>
`.trim();
}

```

Edit this post...
