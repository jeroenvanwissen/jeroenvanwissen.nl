---
categories:
  - Test
date: '2025-02-02T00:00:00.000Z'
description: Just testing things
draft: false
title: Test
type: photo
image:
  url: ../../../assets/photos/_DSC2407.jpg
  alt: All the leaves are brown
---

# Test

1. Create separate collections for each content type
2. Allow you to organize content in different folders (blog, recipe, photo, project)
3. URLs will automatically reflect the collection name
4. Each collection enforces its specific type
You would then need to:

1. Move your content files into corresponding folders:
   - /src/content/blog/
   - /src/content/recipe/
   - /src/content/photo/
   - /src/content/project/
2. Update your content queries to use the specific collections instead of filtering by type

<blockquote>
import { defineCollection, z } from 'astro:content';

const baseSchema = ({ image }) =>
  z.object({
    draft: z.boolean().default(false),
    date: z.string().transform((str) => new Date(str)),
    title: z.string(),
    categories: z.array(z.string()).default([]),
    description: z.string(),
    image: z
      .object({
        url: image(),
        alt: z.string(),
      })
      .optional(),
    socials: z
      .object({
        twitter: z.string().optional(),
        mastodon: z.string().optional(),
        instagram: z.string().optional(),
      })
      .optional(),
  });

const blogCollection = defineCollection({
  schema: ({ image }) => baseSchema({ image }).extend({
    type: z.literal('blog'),
  }),
});

const recipeCollection = defineCollection({
  schema: ({ image }) => baseSchema({ image }).extend({
    type: z.literal('recipe'),
  }),
});

const photoCollection = defineCollection({
  schema: ({ image }) => baseSchema({ image }).extend({
    type: z.literal('photo'),
  }),
});

const projectCollection = defineCollection({
  schema: ({ image }) => baseSchema({ image }).extend({
    type: z.literal('project'),
  }),
});

export const collections = {
  blog: blogCollection,
  recipe: recipeCollection,
  photo: photoCollection,
  project: projectCollection,
};
</blockquote>