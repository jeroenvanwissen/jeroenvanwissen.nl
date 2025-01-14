import { defineCollection, z } from 'astro:content';

const entityCollection = defineCollection({
    schema: z.object({
        draft: z.boolean().default(false),
        date: z.string().transform((str) => new Date(str)),
        title: z.string(),
        categories: z.array(z.string()).default([]),
        type: z.enum(['blog', 'recipe']),
        description: z.string(),
    })
});

export const collections = {
  'post': entityCollection,
};
