import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function addBatch3Recipes() {
  try {
    // Get category IDs first - including many relevant categories for cross-linking
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('id, name, slug')
      .in('slug', [
        'easy-crab-recipes', 'easy-duck-recipes', 'easy-eggplant-recipes', 'easy-grape-recipes', 'easy-kale-recipes',
        'easy-lamb-recipes', 'easy-mango-recipes', 'easy-mushroom-recipes', 'easy-peach-recipes', 'easy-scallop-recipes',
        'easy-vegetarian-recipes', 'easy-healthy-recipes', 'easy-dessert-recipes', 'easy-breakfast-recipes',
        'easy-salad-recipes', 'easy-soup-recipes', 'easy-side-dish-recipes', 'easy-main-course-recipes',
        'easy-15-minute-recipes', 'easy-30-minute-recipes', 'easy-no-cook-recipes', 'easy-roasted-recipes',
        'easy-stir-fry-recipes', 'easy-one-pot-recipes', 'easy-smoothie-recipes', 'easy-mediterranean-recipes',
        'easy-protein-recipes', 'easy-low-carb-recipes', 'easy-seafood-recipes'
      ]);

    if (catError) {
      console.error('Error fetching categories:', catError);
      return;
    }

    const categoryMap = categories.reduce((acc, cat) => {
      acc[cat.slug] = cat.id;
      return acc;
    }, {});

    console.log('Found categories:', Object.keys(categoryMap).length);

    // Crab Recipes
    const crabRecipes = [
      {
        title: "Crab Cakes",
        slug: "easy-crab-cakes",
        description: "Delicious pan-fried crab cakes with minimal filler and maximum crab flavor. Crispy outside, tender inside.",
        ingredients: ["1 lb lump crab meat, picked over", "1/2 cup panko breadcrumbs", "1 egg, beaten", "2 tbsp mayonnaise", "1 tsp Dijon mustard", "1 green onion, finely chopped", "1 tbsp fresh lemon juice", "1/2 tsp Old Bay seasoning", "2 tbsp olive oil", "Salt and pepper to taste"],
        instructions: ["Gently mix crab meat with half the breadcrumbs, egg, mayo, mustard, green onion, lemon juice, and Old Bay.", "Form into 6 patties and coat with remaining breadcrumbs.", "Chill for 30 minutes to help hold shape.", "Heat olive oil in large skillet over medium heat.", "Cook crab cakes 4-5 minutes per side until golden brown.", "Serve immediately with lemon wedges."],
        prep_time: 20, cook_time: 10, total_time: 30, servings: 6, difficulty: "easy", calories_per_serving: 165,
        seo_title: "Easy Crab Cakes Recipe - Restaurant Quality at Home", seo_description: "Make perfect crab cakes in 30 minutes! Crispy outside, tender inside with maximum crab flavor.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Golden crab cakes on a plate", tips: "Don't overmix to keep crab chunks intact. Chilling helps cakes hold together during cooking.",
        featured: false, status: "published", categories: ['easy-crab-recipes', 'easy-seafood-recipes', 'easy-main-course-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Crab Salad",
        slug: "fresh-crab-salad",
        description: "Light and refreshing crab salad perfect for sandwiches, crackers, or served over greens.",
        ingredients: ["1 lb fresh crab meat, picked over", "1/4 cup mayonnaise", "2 tbsp fresh lemon juice", "1 celery stalk, finely diced", "2 green onions, chopped", "1 tbsp fresh dill, chopped", "1/2 tsp lemon zest", "Salt and pepper to taste", "Mixed greens for serving"],
        instructions: ["Gently combine crab meat, mayonnaise, and lemon juice in bowl.", "Add celery, green onions, dill, and lemon zest.", "Season with salt and pepper to taste.", "Chill for at least 30 minutes.", "Serve over mixed greens or use for sandwiches."],
        prep_time: 15, cook_time: 0, total_time: 15, servings: 4, difficulty: "easy", calories_per_serving: 145,
        seo_title: "Fresh Crab Salad Recipe - Light & Delicious", seo_description: "Make refreshing crab salad in 15 minutes! Perfect for sandwiches or served over greens.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Fresh crab salad over mixed greens", tips: "Use the freshest crab meat available. Don't overmix to keep crab chunks intact.",
        featured: false, status: "published", categories: ['easy-crab-recipes', 'easy-seafood-recipes', 'easy-salad-recipes', 'easy-no-cook-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Crab and Avocado Toast",
        slug: "crab-avocado-toast",
        description: "Elegant crab and avocado toast with citrus and herbs. Perfect for breakfast, lunch, or light dinner.",
        ingredients: ["8 oz lump crab meat", "2 ripe avocados", "4 slices sourdough bread", "2 tbsp lemon juice", "1 tbsp olive oil", "1 tbsp fresh chives, chopped", "1/4 tsp red pepper flakes", "Salt and pepper to taste", "Microgreens for garnish"],
        instructions: ["Toast bread until golden brown.", "Mash avocados with 1 tbsp lemon juice and salt.", "Spread avocado mixture on toast.", "Gently toss crab with remaining lemon juice, olive oil, and chives.", "Top toast with crab mixture.", "Sprinkle with red pepper flakes and microgreens.", "Serve immediately."],
        prep_time: 15, cook_time: 5, total_time: 20, servings: 4, difficulty: "easy", calories_per_serving: 285,
        seo_title: "Crab and Avocado Toast Recipe - Elegant & Easy", seo_description: "Make elegant crab and avocado toast in 20 minutes! Perfect for any meal with fresh herbs and citrus.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Crab and avocado toast with microgreens", tips: "Use ripe but firm avocados. Serve immediately to prevent avocado from browning.",
        featured: false, status: "published", categories: ['easy-crab-recipes', 'easy-seafood-recipes', 'easy-breakfast-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Crab Bisque",
        slug: "easy-crab-bisque",
        description: "Rich and creamy crab bisque that tastes restaurant-quality but is surprisingly easy to make at home.",
        ingredients: ["8 oz crab meat", "4 cups seafood stock", "1 cup heavy cream", "1/4 cup butter", "1/4 cup flour", "1 onion, diced", "2 celery stalks, diced", "2 cloves garlic, minced", "2 tbsp tomato paste", "1/4 cup sherry", "1 bay leaf", "Salt and pepper to taste", "Fresh chives for garnish"],
        instructions: ["Melt butter in large pot, sauté onion and celery until soft.", "Add garlic and cook 1 minute.", "Stir in flour and cook 2 minutes.", "Add tomato paste and cook 1 minute.", "Gradually whisk in stock and add bay leaf.", "Simmer 20 minutes, then strain soup.", "Return to pot, add cream, sherry, and crab meat.", "Heat through and season with salt and pepper.", "Garnish with chives."],
        prep_time: 15, cook_time: 35, total_time: 50, servings: 6, difficulty: "easy", calories_per_serving: 245,
        seo_title: "Easy Crab Bisque Recipe - Restaurant Quality at Home", seo_description: "Make rich, creamy crab bisque in 50 minutes! Restaurant-quality soup that's surprisingly easy.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Rich crab bisque in a bowl", tips: "Don't boil after adding cream to prevent curdling. Straining creates the smoothest texture.",
        featured: false, status: "published", categories: ['easy-crab-recipes', 'easy-seafood-recipes', 'easy-soup-recipes']
      },
      {
        title: "Crab Stuffed Mushrooms",
        slug: "crab-stuffed-mushrooms",
        description: "Elegant appetizer with baby bella mushrooms stuffed with seasoned crab mixture and baked until golden.",
        ingredients: ["12 large baby bella mushrooms, stemmed", "8 oz crab meat", "1/4 cup cream cheese, softened", "1/4 cup panko breadcrumbs", "2 tbsp parmesan cheese, grated", "1 green onion, chopped", "1 clove garlic, minced", "1 tbsp lemon juice", "1 tbsp olive oil", "Salt and pepper to taste"],
        instructions: ["Preheat oven to 375°F (190°C).", "Remove mushroom stems and scrape out gills.", "Brush caps with olive oil and season with salt and pepper.", "Mix crab, cream cheese, half the breadcrumbs, parmesan, green onion, garlic, and lemon juice.", "Fill mushroom caps with crab mixture.", "Top with remaining breadcrumbs.", "Bake 20-25 minutes until golden."],
        prep_time: 20, cook_time: 25, total_time: 45, servings: 12, difficulty: "easy", calories_per_serving: 65,
        seo_title: "Crab Stuffed Mushrooms Recipe - Elegant Appetizer", seo_description: "Make impressive crab stuffed mushrooms in 45 minutes! Perfect elegant appetizer for parties.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Crab stuffed mushrooms on a baking tray", tips: "Choose mushrooms of similar size for even cooking. Can be assembled ahead and baked when ready.",
        featured: false, status: "published", categories: ['easy-crab-recipes', 'easy-seafood-recipes', 'easy-mushroom-recipes']
      }
    ];

    // Duck Recipes
    const duckRecipes = [
      {
        title: "Pan-Seared Duck Breast",
        slug: "pan-seared-duck-breast",
        description: "Restaurant-quality pan-seared duck breast with crispy skin and perfectly pink interior. Easier than you think!",
        ingredients: ["2 duck breasts (6-8 oz each)", "1 tbsp olive oil", "2 cloves garlic, minced", "2 tbsp fresh thyme", "2 tbsp orange juice", "1 tbsp balsamic vinegar", "Salt and pepper to taste"],
        instructions: ["Score duck skin in crosshatch pattern, season with salt and pepper.", "Heat skillet over medium heat, place duck skin-side down.", "Cook 6-8 minutes until skin is crispy and golden.", "Flip and cook 4-6 minutes for medium-rare.", "Remove duck and rest 5 minutes.", "Add garlic, thyme, orange juice, and vinegar to pan.", "Cook 1 minute, then slice duck and serve with pan sauce."],
        prep_time: 10, cook_time: 15, total_time: 25, servings: 2, difficulty: "easy", calories_per_serving: 385,
        seo_title: "Pan-Seared Duck Breast Recipe - Restaurant Quality", seo_description: "Make perfect pan-seared duck breast in 25 minutes! Crispy skin and tender meat with orange glaze.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Sliced pan-seared duck breast with crispy skin", tips: "Start skin-side down and don't move until crispy. Duck is best served medium-rare.",
        featured: false, status: "published", categories: ['easy-duck-recipes', 'easy-main-course-recipes', 'easy-protein-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Duck Confit Legs",
        slug: "easy-duck-confit",
        description: "Simplified duck confit that delivers amazing flavor without the traditional hours of cooking. Crispy and tender.",
        ingredients: ["4 duck legs", "2 tbsp coarse salt", "2 tsp black pepper", "4 cloves garlic, crushed", "4 sprigs fresh thyme", "2 bay leaves", "2 cups duck fat or olive oil"],
        instructions: ["Season duck legs with salt, pepper, garlic, thyme, and bay leaves.", "Marinate in refrigerator for 2-4 hours.", "Preheat oven to 225°F (110°C).", "Place duck legs in baking dish and cover with fat.", "Cook 2.5-3 hours until meat is tender.", "For crispy skin, broil 2-3 minutes before serving."],
        prep_time: 15, cook_time: 180, total_time: 195, servings: 4, difficulty: "easy", calories_per_serving: 465,
        seo_title: "Easy Duck Confit Recipe - Crispy & Tender", seo_description: "Make restaurant-style duck confit at home! Simplified method for incredibly tender and flavorful duck legs.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Duck confit legs with crispy skin", tips: "Don't skip the marinating time. Save the duck fat for roasting vegetables.",
        featured: false, status: "published", categories: ['easy-duck-recipes', 'easy-main-course-recipes', 'easy-protein-recipes', 'easy-roasted-recipes']
      },
      {
        title: "Duck and Orange Salad",
        slug: "duck-orange-salad",
        description: "Fresh salad with sliced duck breast, orange segments, and mixed greens with a citrus vinaigrette.",
        ingredients: ["1 cooked duck breast, sliced", "6 cups mixed greens", "2 oranges, peeled and segmented", "1/4 cup dried cranberries", "1/4 cup toasted walnuts", "2 tbsp orange juice", "3 tbsp olive oil", "1 tbsp honey", "1 tsp Dijon mustard", "Salt and pepper to taste"],
        instructions: ["Arrange mixed greens on serving plates.", "Top with sliced duck, orange segments, cranberries, and walnuts.", "Whisk orange juice, olive oil, honey, and mustard for dressing.", "Season dressing with salt and pepper.", "Drizzle over salad and serve immediately."],
        prep_time: 15, cook_time: 0, total_time: 15, servings: 4, difficulty: "easy", calories_per_serving: 285,
        seo_title: "Duck and Orange Salad Recipe - Elegant & Fresh", seo_description: "Make elegant duck and orange salad in 15 minutes! Perfect combination of flavors with citrus vinaigrette.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Duck and orange salad with mixed greens", tips: "Use leftover duck breast or buy pre-cooked duck from deli. Serve immediately for best presentation.",
        featured: false, status: "published", categories: ['easy-duck-recipes', 'easy-salad-recipes', 'easy-healthy-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Duck Ragu Pasta",
        slug: "duck-ragu-pasta",
        description: "Rich and flavorful duck ragu served over pasta. A comforting dish that's perfect for special occasions.",
        ingredients: ["1 lb duck legs, meat removed and shredded", "1 lb pappardelle pasta", "1 can (14 oz) crushed tomatoes", "1 onion, diced", "2 carrots, diced", "2 celery stalks, diced", "3 cloves garlic, minced", "1/2 cup red wine", "2 tbsp olive oil", "2 bay leaves", "1 tsp dried oregano", "Salt and pepper to taste", "Parmesan cheese for serving"],
        instructions: ["Heat olive oil in large pot, sauté onion, carrots, and celery until soft.", "Add garlic and cook 1 minute.", "Add shredded duck, wine, tomatoes, bay leaves, and oregano.", "Simmer 30-40 minutes until sauce thickens.", "Cook pasta according to package directions.", "Serve ragu over pasta with Parmesan cheese."],
        prep_time: 20, cook_time: 45, total_time: 65, servings: 6, difficulty: "easy", calories_per_serving: 445,
        seo_title: "Duck Ragu Pasta Recipe - Rich & Comforting", seo_description: "Make rich duck ragu pasta in 65 minutes! Perfect comfort food with tender duck and flavorful sauce.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Duck ragu over pappardelle pasta", tips: "Can use leftover duck confit or roasted duck. Sauce freezes well for future meals.",
        featured: false, status: "published", categories: ['easy-duck-recipes', 'easy-main-course-recipes', 'easy-one-pot-recipes']
      },
      {
        title: "Duck Spring Rolls",
        slug: "duck-spring-rolls",
        description: "Fresh spring rolls filled with shredded duck, vegetables, and herbs. Light and refreshing appetizer.",
        ingredients: ["8 rice paper wrappers", "2 cups cooked duck, shredded", "1 cucumber, julienned", "2 carrots, julienned", "1 cup lettuce leaves", "1/4 cup fresh mint", "1/4 cup fresh cilantro", "2 tbsp rice vinegar", "1 tbsp soy sauce", "1 tsp sesame oil", "1 tsp honey"],
        instructions: ["Soak rice paper in warm water until soft, about 30 seconds.", "Place lettuce, duck, cucumber, carrots, mint, and cilantro on wrapper.", "Roll tightly, folding in sides as you go.", "Repeat with remaining wrappers.", "Mix vinegar, soy sauce, sesame oil, and honey for dipping sauce.", "Serve immediately with dipping sauce."],
        prep_time: 30, cook_time: 0, total_time: 30, servings: 8, difficulty: "easy", calories_per_serving: 125,
        seo_title: "Duck Spring Rolls Recipe - Fresh & Light", seo_description: "Make fresh duck spring rolls in 30 minutes! Perfect light appetizer with vegetables and herbs.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Duck spring rolls with dipping sauce", tips: "Work with one wrapper at a time to prevent drying. Cover finished rolls with damp towel.",
        featured: false, status: "published", categories: ['easy-duck-recipes', 'easy-no-cook-recipes', 'easy-healthy-recipes', 'easy-30-minute-recipes']
      }
    ];

    console.log('Adding batch 3 recipes...');

    // Combine all recipes
    const allRecipes = [...crabRecipes, ...duckRecipes];

    for (const recipe of allRecipes) {
      const { categories: recipeCategories, ...recipeData } = recipe;

      // Insert recipe
      const { data: insertedRecipe, error: recipeError } = await supabase
        .from('recipes')
        .insert([recipeData])
        .select()
        .single();

      if (recipeError) {
        console.error(`Error inserting recipe ${recipe.title}:`, recipeError);
        continue;
      }

      console.log(`✓ Added recipe: ${recipe.title}`);

      // Link to categories
      for (const categorySlug of recipeCategories) {
        if (categoryMap[categorySlug]) {
          const { error: linkError } = await supabase
            .from('recipe_categories')
            .insert([{
              recipe_id: insertedRecipe.id,
              category_id: categoryMap[categorySlug]
            }]);

          if (linkError) {
            console.error(`Error linking ${recipe.title} to ${categorySlug}:`, linkError);
          } else {
            console.log(`  ✓ Linked to ${categorySlug}`);
          }
        }
      }
    }

    console.log('\n✅ Successfully added batch 3 recipes!');
    console.log(`Added ${allRecipes.length} recipes total.`);

  } catch (error) {
    console.error('Error:', error);
  }
}

addBatch3Recipes();