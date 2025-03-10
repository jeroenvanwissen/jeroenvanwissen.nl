import { defineCollection, z } from 'astro:content';
import type { ImageFunction } from 'astro:content';
import type { ImageMetadata } from 'astro';

type BaseSchema = {
  draft: boolean;
  date: Date;
  title: string;
  categories: string[];
  description: string;
  image?: {
    img: ImageMetadata;
    alt: string;
  };
  socials?: {
    twitter?: string;
    mastodon?: string;
    instagram?: string;
    bsky?: string;
  };
};

export type PostType = BaseSchema & {
  type: 'blog' | 'update';
};

export type PhotoType = BaseSchema & {
  type: 'photo';
};

export type ProjectType = BaseSchema & {
  type: 'project';
};

export type RecipeType = BaseSchema & {
  type: 'recipe';
};

const baseSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    draft: z.boolean().default(true),
    date: z.date().transform((date: Date) => {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }),
    title: z.string(),
    categories: z.array(z.string()).default([]),
    description: z.string(),
    image: z
      .object({
        img: image(),
        alt: z.string(),
      })
      .optional(),
    socials: z
      .object({
        twitter: z.string().optional(),
        mastodon: z.string().optional(),
        instagram: z.string().optional(),
        bsky: z.string().optional(),
      })
      .optional(),
  });

const postCollection = defineCollection({
  type: 'content' as const,
  schema: ({ image }) =>
    baseSchema({ image }).extend({
      type: z.enum(['blog', 'update']),
    }),
});

const photoCollection = defineCollection({
  type: 'content' as const,
  schema: ({ image }) =>
    baseSchema({ image }).extend({
      type: z.literal('photo'),
    }),
});

const projectCollection = defineCollection({
  type: 'content' as const,
  schema: ({ image }) =>
    baseSchema({ image }).extend({
      type: z.literal('project'),
    }),
});

const recipeCollection = defineCollection({
  type: 'content' as const,
  schema: ({ image }) =>
    baseSchema({ image }).extend({
      type: z.literal('recipe'),
    }),
});

export const collections = {
  post: postCollection,
  photo: photoCollection,
  project: projectCollection,
  recipe: recipeCollection,
};
