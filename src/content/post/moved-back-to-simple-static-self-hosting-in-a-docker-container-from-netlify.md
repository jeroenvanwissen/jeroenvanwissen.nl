---
draft: false
date: '2023-03-22T10:38:00.000Z'
title:
  'Moved back to simple static self hosting in a Docker container from having
  this site hosted at Netlify '
categories:
  - Tech
description:
  After switching to static builds from SSR and having some other issues
  with Netlify, I decided to go back to self hosting in a Docker container.
type: blog
---

**_This needs to be rewritten and updated_**

### We have moved to GitHub Pages since...

Also, my website doesn't really generates that much traffic ... if there's one visitor a day I'm already lucky \:D

So, back to self hosting in a Docker container on my fiber connection at home. Keeping the source in Github, with a webhook to my private GitLab instance for building the site, building the docker container and deploying.

I had some issues with non-working redirects and trailing slashes that I couldn't get rid of, which is super easy with just some lines in my nginx config. Netlify was nice to play around a bit, but overkill for my personal websites.

Will be moving my [photography website](https://31f-fotografie.nl '31F Fotografie') next..
