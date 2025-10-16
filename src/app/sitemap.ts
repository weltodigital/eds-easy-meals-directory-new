import { MetadataRoute } from 'next'
import { supabase } from '@/lib/supabase'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://edseasymeals.com';
  const currentDate = new Date();

  try {
    // Get all published recipes
    const { data: recipes, error: recipesError } = await supabase
      .from('recipes')
      .select('slug, updated_at')
      .eq('status', 'published');

    // Get all categories that have recipes
    const { data: categories, error: categoriesError } = await supabase
      .from('categories')
      .select(`
        slug,
        updated_at,
        recipe_categories!inner(recipe_id)
      `);

    if (recipesError || categoriesError) {
      console.error('Error fetching sitemap data:', recipesError || categoriesError);
    }

    const sitemap: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/privacy-policy`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/terms-of-service`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.3,
      }
    ];

    // Add recipe pages
    if (recipes && recipes.length > 0) {
      recipes.forEach((recipe) => {
        sitemap.push({
          url: `${baseUrl}/recipe/${recipe.slug}`,
          lastModified: recipe.updated_at ? new Date(recipe.updated_at) : currentDate,
          changeFrequency: 'weekly',
          priority: 0.8,
        });
      });
    }

    // Add category pages
    if (categories && categories.length > 0) {
      categories.forEach((category) => {
        sitemap.push({
          url: `${baseUrl}/category/${category.slug}`,
          lastModified: category.updated_at ? new Date(category.updated_at) : currentDate,
          changeFrequency: 'weekly',
          priority: 0.6,
        });
      });
    }

    return sitemap;

  } catch (error) {
    console.error('Error generating sitemap:', error);

    // Return basic sitemap if database query fails
    return [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/privacy-policy`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.3,
      },
      {
        url: `${baseUrl}/terms-of-service`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.3,
      }
    ];
  }
}