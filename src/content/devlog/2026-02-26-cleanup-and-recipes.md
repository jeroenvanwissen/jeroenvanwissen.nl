---
categories:
  - Website
  - Content
date: 2026-02-26
description: 'Big cleanup of the codebase and added recipe pages.'
draft: false
title: Cleanup and recipes
type: devlog
---

Did a big cleanup of the codebase. Removed unused components (PhotoBlock, Socials) and leftover pages (typography, vector). Removed the old TinaCMS admin directory and eslint config. Rewrote the sitemap to a proper Astro API route that now includes posts, projects, and photos. Added a `robots.txt` with a sitemap reference. Also added recipe pages and a recipe content collection for future use.
