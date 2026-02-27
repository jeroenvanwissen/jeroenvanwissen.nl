---
categories:
  - Updates
date: 2026-02-27
description: A devlog of the website, changes, updates, and new features.
draft: true
title: Website Devlog
type: blog
---

# Website Devlog

> This is a devlog of the website, changes, updates, and new features. I'll try to keep this updated as much as possible.

In previous versions of this website, I created a blog post for each and every small change I made on the website. But as changes go fast, and I often remove features again after a while I decided to create this devlog page to keep track of the changes I make to the website. Instead of having outdated blog posts with technical information that is no longer relevant.

### - 2026-02-27 - RSS feeds

Added RSS feeds to the website. There's now a separate feed for posts at `/feed.xml` and one for recipes at `/recipes/feed.xml`. Feed auto-discovery links are included in the page head so feed readers can find them automatically. The old `/index.xml` URL now redirects to the new posts feed.

### - 2026-02-26 - Cleanup and recipes

Did a big cleanup of the codebase. Removed unused components (PhotoBlock, Socials) and leftover pages (typography, vector). Removed the old TinaCMS admin directory and eslint config. Rewrote the sitemap to a proper Astro API route that now includes posts, projects, and photos. Added a `robots.txt` with a sitemap reference. Also added recipe pages and a recipe content collection for future use.

### - 2026-01-26 - pnpm migration and housekeeping

Migrated the package manager from npm to pnpm. Updated Node.js to the latest LTS version and bumped all dependencies. Removed the analytics tracking link from the layout.

### - 2025-10-09 - Resume update

Updated the resume with new employment information and updated dependencies.

### - 2025-03-11 - New look and feel

I've updated the look and feel of the website. I've been working on a new design for a while now and finally got around to implementing it. I'm quite happy with the result, but I'm sure I'll be tweaking it a bit more in the coming weeks. There is a big change of things to be completely broken now, as I just wanted to get it out there. So if you find something that doesn't work, please let me know.

### - 2025-01-14 - Moved to GitHub Pages

To make things easy: I've moved my website to GitHub Pages. I was already using GitHub to host the source code of my website, so it made sense to move the website itself to GitHub Pages as well. Also, one VPS less to maintain. \o/

### - 2023-03-22 - Moved website back to self-hosting

Moved my site away from Netlify and back to self-hosting in a Docker container on my VPS.

### - 2023-02-23 - Implemented TinaCMS

Implemented [TinaCMS](https://tina.io 'Link to TinaCMS website'), a simple CMS system that can publish Markdown (.md) files to GitHub. I've been using it for a while, but felt like overkill so it has been removed since.

### - 2023-02-19 - Website layout updates

First design updates and implemented the Astro.build Content Collection feature.

### - 2023-01-29 - Category pages added

As part of learning more about Astro.build, I've added category pages to the website. This way I can group my blog posts by category. But since then this has been removed again as it didn't really add much value to my small website.

### - 2023-01-01 - New Year, New Website

Launched my new website, built with Astro.build. It was about time I started doing something with my personal website again.

<sub>last updated: 2026-02-27</sub>
