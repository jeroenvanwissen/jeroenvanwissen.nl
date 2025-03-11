---
categories:
  - Astro.build
  - JavaScript / TypeScript
date: 2023-01-02
description: Explaining how I've setup my current website with Astro.build
draft: false
title: 'Astro.build: Building a static website'
type: blog
---

# Astro.build: Building a static website

> This post was written in 2023, when I just started out with Astro.build. Astro.build has changed a lot since then, and so has my website. This post should be updated to reflect the current state of my website and the Astro.build setup.

In a search of a simple static html page generator framework I stumbled up on [Astro.build](https://astro.build 'Link to Astro.build website')

Immediately I liked the simplicity and ease of use. And mostly to be able to extend it with other JavaScript frameworks like React and Svelte (and more..)

And being able to use Markdown files as content base was exactly what I was looking for. No need for a CMS when GIT can take over that role.

## My setup

For now, I'm only using Astro.build with Tailwind integration. I haven't had the need yet to integrate any other UI Framework ( like React, Svelte etc..) yet, but that might come at some point.

My basic setup:

Install & Create and Astro.build project:

```shell
npm create astro@latest
```

Add the Tailwind CSS integration:

```shell
npx astro add tailwind
```

Start the local dev server..

```shell
npm run dev
```

Load the link [localhost:3000](http://localhost:3000/ 'Link to localhost port 3000') in your browser and start creating :)

<sub>last updated: 2025-03-11</sub>

I hope this post was helpful to you.

If you have any questions or feedback, feel free to contact me on
[Twitter/X](https://x.com/jvwissen),
[Bluesky](https://bsky.app/profile/jeroenvanwissen.nl), or
[Mastodon](https://mastodon.social/@jeroenvanwissen). I'd love to hear
from you! 🚀
