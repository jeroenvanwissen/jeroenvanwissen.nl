import { defineCollection, z } from 'astro:content';

const entityCollection = defineCollection({
    schema: ({ image }) => z.object({
        draft: z.boolean().default(false),
        date: z.string().transform((str) => new Date(str)),
        title: z.string(),
        categories: z.array(z.string()).default([]),
        type: z.enum(['blog', 'recipe', 'photo']),
        description: z.string(),
        image: z.object({
            url: image(),
            alt: z.string(),
        }).optional(),
        socials: z.object({
            twitter: z.string().optional(),
            mastodon: z.string().optional(),
            instagram: z.string().optional(),
        }).optional(),
    }),
});

export const collections = {
  'post': entityCollection,
};
