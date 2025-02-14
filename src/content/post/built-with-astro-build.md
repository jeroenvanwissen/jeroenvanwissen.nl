---
date: '2023-01-02T00:00:00.000Z'
title: Built with Astro.build
categories:
  - Tech
  - JavaScript
  - Astro.build
description: >
  I started to build simple websites like this one with Astro.build, a static
  html generator framework.
type: blog
---

In a search of a simple static html page generator framework I stumbled up on [Astro.build](https://astro.build "Link to Astro.build website")

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

Load the link [localhost:3000](http://localhost:3000/ "Link to localhost port 3000") in your browser and start creating :)
