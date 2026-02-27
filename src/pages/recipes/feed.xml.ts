import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getSortedCollection } from '@lib/util';

export async function GET(context: APIContext) {
  const recipes = await getSortedCollection('recipe');

  return rss({
    title: 'Recipes by Jeroen van Wissen',
    description: 'Recipes by Jeroen van Wissen',
    site: context.site!,
    items: recipes.map((recipe) => ({
      title: recipe.data.title,
      pubDate: recipe.data.date,
      description: recipe.data.description,
      link: `/recipe/${recipe.slug}/`,
    })),
  });
}
