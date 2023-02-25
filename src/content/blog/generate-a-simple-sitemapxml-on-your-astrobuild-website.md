---
draft: false
date: '2023-02-25T19:00:00.000Z'
title: Generate a simple sitemap.xml on your Astro.build website
description: >-
  Without adding an external dependency to your project, I worked out a simple
  solution to generate a sitemap.xml on your Server-Side-Rendered Astro.build
  website. I'm using this on my websites hosted on Netlify
categories:
  - Astro.build
  - Tech
  - JavaScript
---

It might not be perfect code, I'm well aware of that. And it might not work for your setup, but with some modifications it might :)

In this post I'll explain the solution I've implemented on my photography portfolio site [31f-fotografie.nl](https://31f-fotografie.nl "Link to 31f-fotografie.nl website")

First I've created a file `lib/util.ts` with 2 functions.

```javascript
import { getCollection } from 'astro:content';

export async function getSortedCollectionPosts({ collection }) {
  return await getCollection(collection)
    .then(entries => entries
      .filter(entry => !entry.data.draft)
      .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()));
}

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

The `getSortedCollectionPosts()` function is also used on the homepage to generate the lost of posts.

Then the `pages/sitemap.xml.ts` file that looks something like this:

```javascript
import { getSortedCollectionPosts, generateSitemapXml } from "../lib/util";

export async function get() {
  const posts = await getSortedCollectionPosts({ collection: 'post' });

  return {
    body: await generateSitemapXml({ posts, site: { url: import.meta.env.SITE } })
  }
}
```

Make sure you have defined your site in `astro.config.mjs`

```javascript
export default defineConfig({
  site: 'https://31f-fotografie.nl',
  ...
});
```

Now you should be able to load your websites' sitemap.xml

Contact me on [twitter](https://twitter.com/jvwissen "Link to twitter profile of @jvwissen") or [mastodon](https://mastodon.social/@jeroenvanwissen "Link to mastodon profile of @jeroenvanwissen") if you have any questions..
