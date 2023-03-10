import { defineCollection, z } from 'astro:content';

// decided to have blog and recipes using the same collection definition
const entityCollection = defineCollection({
    schema: z.object({
        draft: z.boolean().default(false),
        date: z.string().transform((str) => new Date(str)),
        title: z.string(),
        categories: z.array(z.string()).default([]),
        description: z.string(),
    })
});

export const collections = {
  'blog': entityCollection,
  'recipes': entityCollection,
};
