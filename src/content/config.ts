// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Define your collection(s)
const blogCollection = defineCollection({
    schema: z.object({
        draft: z.boolean().default(false),
        date: z.string().transform((str) => new Date(str)),
        title: z.string(),
        categories: z.array(z.string().optional()),
        description: z.string(),
    })
});
const recipesCollection = defineCollection({
    schema: z.object({
        draft: z.boolean().default(false),
        date: z.date().transform((str) => new Date(str)),
        title: z.string(),
        categories: z.array(z.string().optional()),
        description: z.string(),
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'recipes': recipesCollection,
};