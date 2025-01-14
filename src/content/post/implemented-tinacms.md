---
date: '2023-02-23T23:00:00.000Z'
title: Implemented TinaCMS
categories:
  - JavaScript
  - Tech
  - Astro.build
  - TinaCMS
description: >-
  Since I started working with Astro.build I was looking for a really simple CMS
  system that could publish Markdown (.md) files to GitHub and found that
  TinaCMS could do the job...
type: blog
---

Implemented it to this website and going to give it a try to see if I'm going to keep it.

Adding it to an existing [Astro.build](https://astro.build "Link to Astro.build website") website was quite easy. I only had some troubles with getting it to build and deploy correctly in Netlify, but that was mainly because I was editing the build commands in the wrong location.

Basic information on how to implement it on your [Astro.build](https://astro.build "Link to Astro.build website") website can be found on the [Astro.build docs page about TinaCMS](https://docs.astro.build/en/guides/cms/tina-cms/ "Link to Astro.build docs website guide to implement TinaCMS")

Duplicated the blog post Content Collection in the TinaCMS schema.collections array and we were good to go.

For [Netlify](https://www.netlify.com "Link to Netlify website") deployment I only had to change the netlify.toml file, by replacing the build command "astro build" with "tinacms build && astro build"
