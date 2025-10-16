import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function addBatch3dRecipes() {
  try {
    // Get category IDs first - including many relevant categories for cross-linking
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('id, name, slug')
      .in('slug', [
        'easy-mushroom-recipes', 'easy-peach-recipes', 'easy-scallop-recipes',
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

    // Mushroom Recipes
    const mushroomRecipes = [
      {
        title: "Garlic Butter Mushrooms",
        slug: "garlic-butter-mushrooms",
        description: "Simple and delicious sautéed mushrooms with garlic and butter. Perfect side dish or appetizer.",
        ingredients: ["1 lb mixed mushrooms, sliced", "4 cloves garlic, minced", "4 tbsp butter", "2 tbsp olive oil", "2 tbsp fresh parsley, chopped", "1/4 cup white wine", "Salt and pepper to taste"],
        instructions: ["Heat olive oil and butter in large skillet over medium-high heat.", "Add mushrooms and cook 5-6 minutes until golden.", "Add garlic and cook 1 minute more.", "Add white wine and cook until evaporated.", "Season with salt, pepper, and parsley.", "Serve immediately as a side dish."],
        prep_time: 10, cook_time: 10, total_time: 20, servings: 4, difficulty: "easy", calories_per_serving: 125,
        seo_title: "Garlic Butter Mushrooms Recipe - Perfect Side Dish", seo_description: "Make delicious garlic butter mushrooms in 20 minutes! Perfect side dish with rich flavors.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Garlic butter mushrooms with herbs", tips: "Don't overcrowd the pan - cook in batches if needed. Use a mix of mushroom varieties for best flavor.",
        featured: false, status: "published", categories: ['easy-mushroom-recipes', 'easy-vegetarian-recipes', 'easy-side-dish-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Stuffed Portobello Mushrooms",
        slug: "stuffed-portobello-mushrooms",
        description: "Large portobello mushrooms stuffed with cheese, herbs, and breadcrumbs. Great vegetarian main dish.",
        ingredients: ["4 large portobello mushroom caps", "1 cup mozzarella cheese, shredded", "1/2 cup panko breadcrumbs", "1/4 cup parmesan cheese, grated", "2 cloves garlic, minced", "2 tbsp olive oil", "2 tbsp fresh basil, chopped", "1 tomato, diced", "Salt and pepper to taste"],
        instructions: ["Preheat oven to 400°F (200°C).", "Remove mushroom stems and scrape out gills.", "Brush caps with olive oil, season with salt and pepper.", "Mix mozzarella, breadcrumbs, parmesan, garlic, basil, and tomato.", "Fill mushroom caps with mixture.", "Bake 20 minutes until cheese melts.", "Serve hot as main dish."],
        prep_time: 15, cook_time: 20, total_time: 35, servings: 4, difficulty: "easy", calories_per_serving: 185,
        seo_title: "Stuffed Portobello Mushrooms Recipe - Vegetarian Main Dish", seo_description: "Make delicious stuffed portobello mushrooms in 35 minutes! Perfect vegetarian main course.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Stuffed portobello mushrooms with cheese", tips: "Choose firm, fresh portobellos. Remove gills to prevent dish from turning black.",
        featured: false, status: "published", categories: ['easy-mushroom-recipes', 'easy-vegetarian-recipes', 'easy-main-course-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Mushroom Risotto",
        slug: "mushroom-risotto",
        description: "Creamy and rich mushroom risotto made with arborio rice and mixed mushrooms. Comfort food at its best.",
        ingredients: ["1 cup arborio rice", "1 lb mixed mushrooms, sliced", "4 cups warm vegetable broth", "1/2 cup white wine", "1 onion, diced", "3 cloves garlic, minced", "1/2 cup parmesan cheese, grated", "3 tbsp butter", "2 tbsp olive oil", "Salt and pepper to taste"],
        instructions: ["Heat olive oil in large pan, sauté mushrooms until golden, set aside.", "In same pan, melt 1 tbsp butter, sauté onion until soft.", "Add garlic and rice, stir 2 minutes.", "Add wine and cook until absorbed.", "Add warm broth 1/2 cup at a time, stirring until absorbed.", "Stir in mushrooms, remaining butter, and parmesan.", "Season and serve immediately."],
        prep_time: 15, cook_time: 30, total_time: 45, servings: 4, difficulty: "easy", calories_per_serving: 345,
        seo_title: "Mushroom Risotto Recipe - Creamy & Rich", seo_description: "Make restaurant-quality mushroom risotto in 45 minutes! Creamy, rich, and full of mushroom flavor.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Creamy mushroom risotto with parmesan", tips: "Stir constantly for creamiest texture. Keep broth warm throughout cooking process.",
        featured: false, status: "published", categories: ['easy-mushroom-recipes', 'easy-vegetarian-recipes', 'easy-main-course-recipes']
      },
      {
        title: "Mushroom Soup",
        slug: "creamy-mushroom-soup",
        description: "Rich and creamy mushroom soup with herbs and cream. Perfect warming dish for cold days.",
        ingredients: ["1 lb mixed mushrooms, sliced", "4 cups vegetable broth", "1 cup heavy cream", "1 onion, diced", "3 cloves garlic, minced", "2 tbsp butter", "2 tbsp flour", "1/4 cup white wine", "2 tbsp fresh thyme", "Salt and pepper to taste"],
        instructions: ["Melt butter in large pot, sauté onion until soft.", "Add mushrooms and cook until golden, about 8 minutes.", "Add garlic and flour, cook 2 minutes.", "Add wine and cook until evaporated.", "Add broth and thyme, simmer 15 minutes.", "Stir in cream and heat through.", "Season with salt and pepper."],
        prep_time: 15, cook_time: 30, total_time: 45, servings: 6, difficulty: "easy", calories_per_serving: 185,
        seo_title: "Creamy Mushroom Soup Recipe - Rich & Warming", seo_description: "Make rich creamy mushroom soup in 45 minutes! Perfect comfort food with deep mushroom flavors.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Creamy mushroom soup with herbs", tips: "Use a variety of mushrooms for complex flavor. Don't boil after adding cream.",
        featured: false, status: "published", categories: ['easy-mushroom-recipes', 'easy-soup-recipes', 'easy-vegetarian-recipes']
      },
      {
        title: "Mushroom Stir-Fry",
        slug: "mushroom-stir-fry",
        description: "Quick and flavorful mushroom stir-fry with Asian seasonings. Great as a side or over rice.",
        ingredients: ["1 lb mixed mushrooms, sliced", "1 bell pepper, sliced", "2 green onions, sliced", "3 cloves garlic, minced", "1 tbsp fresh ginger, minced", "3 tbsp soy sauce", "1 tbsp oyster sauce", "1 tsp sesame oil", "2 tbsp vegetable oil", "1 tsp cornstarch"],
        instructions: ["Heat vegetable oil in large wok over high heat.", "Stir-fry mushrooms 4-5 minutes until golden.", "Add bell pepper, garlic, and ginger, stir-fry 2 minutes.", "Mix soy sauce, oyster sauce, sesame oil, and cornstarch.", "Add sauce to wok and toss 1 minute.", "Garnish with green onions and serve."],
        prep_time: 10, cook_time: 8, total_time: 18, servings: 4, difficulty: "easy", calories_per_serving: 95,
        seo_title: "Mushroom Stir-Fry Recipe - Quick Asian-Style", seo_description: "Make delicious mushroom stir-fry in 18 minutes! Quick and flavorful with Asian seasonings.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Mushroom stir-fry with bell peppers", tips: "Cook over high heat for best texture. Don't overcrowd the pan.",
        featured: false, status: "published", categories: ['easy-mushroom-recipes', 'easy-vegetarian-recipes', 'easy-stir-fry-recipes', 'easy-15-minute-recipes']
      }
    ];

    // Peach Recipes
    const peachRecipes = [
      {
        title: "Grilled Peaches with Honey",
        slug: "grilled-peaches-honey",
        description: "Sweet grilled peaches drizzled with honey and served with yogurt. Perfect summer dessert.",
        ingredients: ["4 ripe peaches, halved and pitted", "2 tbsp honey", "1 tbsp butter, melted", "1/2 tsp cinnamon", "1 cup Greek yogurt", "2 tbsp chopped pistachios", "Fresh mint for garnish"],
        instructions: ["Preheat grill to medium heat.", "Brush peach halves with melted butter.", "Grill cut-side down for 3-4 minutes until caramelized.", "Flip and grill 2 more minutes.", "Drizzle with honey and sprinkle with cinnamon.", "Serve with yogurt, pistachios, and mint."],
        prep_time: 10, cook_time: 6, total_time: 16, servings: 4, difficulty: "easy", calories_per_serving: 145,
        seo_title: "Grilled Peaches with Honey Recipe - Perfect Summer Dessert", seo_description: "Make delicious grilled peaches in 16 minutes! Sweet summer dessert with honey and yogurt.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Grilled peaches with honey and yogurt", tips: "Choose ripe but firm peaches. Can also be made on grill pan indoors.",
        featured: false, status: "published", categories: ['easy-peach-recipes', 'easy-dessert-recipes', 'easy-healthy-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Peach Smoothie",
        slug: "peachy-smoothie",
        description: "Refreshing peach smoothie with yogurt and a hint of vanilla. Perfect healthy breakfast or snack.",
        ingredients: ["3 ripe peaches, pitted and sliced", "1 cup vanilla Greek yogurt", "1/2 cup almond milk", "1 tbsp honey", "1/2 tsp vanilla extract", "1/2 cup ice", "Fresh mint for garnish"],
        instructions: ["Combine peaches, yogurt, almond milk, honey, and vanilla in blender.", "Add ice and blend until smooth.", "Taste and adjust sweetness if needed.", "Pour into glasses.", "Garnish with mint and serve immediately."],
        prep_time: 8, cook_time: 0, total_time: 8, servings: 2, difficulty: "easy", calories_per_serving: 185,
        seo_title: "Peach Smoothie Recipe - Refreshing & Healthy", seo_description: "Make refreshing peach smoothie in 8 minutes! Perfect healthy drink with yogurt and vanilla.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Peach smoothie with mint garnish", tips: "Use frozen peaches for thicker consistency. Add more honey if peaches aren't very sweet.",
        featured: false, status: "published", categories: ['easy-peach-recipes', 'easy-smoothie-recipes', 'easy-healthy-recipes', 'easy-breakfast-recipes']
      },
      {
        title: "Peach Caprese Salad",
        slug: "peach-caprese-salad",
        description: "Fresh twist on caprese salad using sweet peaches instead of tomatoes. Perfect summer appetizer.",
        ingredients: ["3 ripe peaches, sliced", "8 oz fresh mozzarella, sliced", "1/4 cup fresh basil leaves", "3 tbsp balsamic glaze", "2 tbsp olive oil", "Sea salt and pepper to taste", "Prosciutto slices (optional)"],
        instructions: ["Arrange peach and mozzarella slices on serving plate.", "Tuck basil leaves between slices.", "Add prosciutto if using.", "Drizzle with olive oil and balsamic glaze.", "Season with salt and pepper.", "Serve immediately at room temperature."],
        prep_time: 15, cook_time: 0, total_time: 15, servings: 4, difficulty: "easy", calories_per_serving: 195,
        seo_title: "Peach Caprese Salad Recipe - Fresh Summer Twist", seo_description: "Make beautiful peach caprese salad in 15 minutes! Fresh summer twist on the classic with sweet peaches.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Peach caprese salad with mozzarella and basil", tips: "Use the ripest peaches for best flavor. Serve immediately for best presentation.",
        featured: false, status: "published", categories: ['easy-peach-recipes', 'easy-salad-recipes', 'easy-no-cook-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Peach Salsa",
        slug: "fresh-peach-salsa",
        description: "Sweet and spicy peach salsa perfect for chips or grilled meats. Fresh summer flavors in every bite.",
        ingredients: ["4 ripe peaches, diced", "1/2 red bell pepper, diced", "1/4 red onion, finely diced", "1 jalapeño, seeded and minced", "1/4 cup fresh cilantro, chopped", "2 tbsp lime juice", "1 tbsp honey", "Salt to taste"],
        instructions: ["Combine diced peaches, bell pepper, onion, and jalapeño.", "Add cilantro, lime juice, and honey.", "Season with salt to taste.", "Let sit 30 minutes for flavors to meld.", "Serve with tortilla chips or grilled chicken."],
        prep_time: 15, cook_time: 0, total_time: 15, servings: 6, difficulty: "easy", calories_per_serving: 35,
        seo_title: "Fresh Peach Salsa Recipe - Sweet & Spicy", seo_description: "Make fresh peach salsa in 15 minutes! Perfect sweet and spicy combination for summer entertaining.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Fresh peach salsa with cilantro and lime", tips: "Choose ripe but firm peaches. Adjust jalapeño to taste preference.",
        featured: false, status: "published", categories: ['easy-peach-recipes', 'easy-no-cook-recipes', 'easy-healthy-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Peach Crisp",
        slug: "easy-peach-crisp",
        description: "Classic peach crisp with oat topping. Simple dessert that showcases summer peaches perfectly.",
        ingredients: ["6 ripe peaches, sliced", "1 cup old-fashioned oats", "1/2 cup flour", "1/2 cup brown sugar", "1/4 cup butter, cold and cubed", "1 tsp cinnamon", "1/4 tsp nutmeg", "2 tbsp lemon juice", "Vanilla ice cream for serving"],
        instructions: ["Preheat oven to 375°F (190°C).", "Toss sliced peaches with lemon juice and place in baking dish.", "Mix oats, flour, brown sugar, cinnamon, and nutmeg.", "Cut in cold butter until mixture resembles crumbs.", "Sprinkle topping over peaches.", "Bake 35-40 minutes until golden.", "Serve warm with ice cream."],
        prep_time: 15, cook_time: 40, total_time: 55, servings: 6, difficulty: "easy", calories_per_serving: 185,
        seo_title: "Easy Peach Crisp Recipe - Classic Summer Dessert", seo_description: "Make delicious peach crisp in 55 minutes! Classic summer dessert with oat topping and fresh peaches.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Golden peach crisp with oat topping", tips: "Don't peel peaches - skin adds flavor and texture. Serve warm for best taste.",
        featured: false, status: "published", categories: ['easy-peach-recipes', 'easy-dessert-recipes', 'easy-roasted-recipes']
      }
    ];

    // Scallop Recipes
    const scallopRecipes = [
      {
        title: "Pan-Seared Scallops",
        slug: "pan-seared-scallops",
        description: "Restaurant-quality pan-seared scallops with golden crust and tender interior. Elegant and surprisingly easy.",
        ingredients: ["1 lb large sea scallops", "2 tbsp olive oil", "2 tbsp butter", "2 cloves garlic, minced", "2 tbsp lemon juice", "Salt and pepper to taste", "Fresh chives for garnish"],
        instructions: ["Remove scallops from refrigerator 30 minutes before cooking.", "Pat scallops completely dry and season with salt and pepper.", "Heat olive oil in large skillet over high heat.", "Sear scallops 2-3 minutes per side until golden.", "Remove scallops, add butter and garlic to pan.", "Cook 30 seconds, add lemon juice.", "Return scallops briefly to warm.", "Garnish with chives."],
        prep_time: 10, cook_time: 8, total_time: 18, servings: 4, difficulty: "easy", calories_per_serving: 165,
        seo_title: "Pan-Seared Scallops Recipe - Restaurant Quality", seo_description: "Make perfect pan-seared scallops in 18 minutes! Restaurant-quality with golden crust and tender center.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Golden pan-seared scallops with herbs", tips: "Pat scallops completely dry for best sear. Don't move them while cooking first side.",
        featured: false, status: "published", categories: ['easy-scallop-recipes', 'easy-seafood-recipes', 'easy-main-course-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Scallop Pasta",
        slug: "scallop-pasta",
        description: "Elegant pasta dish with seared scallops in a light lemon butter sauce. Perfect for date night.",
        ingredients: ["1 lb large scallops", "12 oz linguine pasta", "1/4 cup white wine", "3 tbsp butter", "2 tbsp olive oil", "3 cloves garlic, minced", "1/4 cup lemon juice", "1/4 cup fresh parsley, chopped", "Red pepper flakes to taste", "Salt and pepper"],
        instructions: ["Cook pasta according to package directions, reserve 1/2 cup pasta water.", "Pat scallops dry and season with salt and pepper.", "Heat olive oil in large skillet, sear scallops 2 minutes per side.", "Remove scallops, add garlic to pan.", "Add wine and lemon juice, simmer 2 minutes.", "Add pasta, butter, and pasta water as needed.", "Return scallops, add parsley and red pepper flakes.", "Serve immediately."],
        prep_time: 15, cook_time: 15, total_time: 30, servings: 4, difficulty: "easy", calories_per_serving: 485,
        seo_title: "Scallop Pasta Recipe - Elegant & Easy", seo_description: "Make elegant scallop pasta in 30 minutes! Perfect date night dinner with lemon butter sauce.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Scallop pasta with lemon butter sauce", tips: "Don't overcook scallops - they become rubbery. Add pasta water gradually for silky sauce.",
        featured: false, status: "published", categories: ['easy-scallop-recipes', 'easy-seafood-recipes', 'easy-main-course-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Scallop Salad",
        slug: "seared-scallop-salad",
        description: "Fresh salad with seared scallops, mixed greens, and citrus vinaigrette. Light and elegant meal.",
        ingredients: ["12 large scallops", "6 cups mixed greens", "1 avocado, sliced", "1/2 cucumber, sliced", "1/4 cup dried cranberries", "2 tbsp olive oil for cooking", "3 tbsp lemon juice", "1/4 cup olive oil for dressing", "1 tsp Dijon mustard", "Salt and pepper to taste"],
        instructions: ["Pat scallops dry and season with salt and pepper.", "Heat 2 tbsp olive oil in skillet, sear scallops 2 minutes per side.", "Arrange mixed greens on plates.", "Top with avocado, cucumber, and cranberries.", "Whisk lemon juice, olive oil, and mustard for dressing.", "Place warm scallops on salad.", "Drizzle with dressing and serve."],
        prep_time: 15, cook_time: 5, total_time: 20, servings: 4, difficulty: "easy", calories_per_serving: 285,
        seo_title: "Seared Scallop Salad Recipe - Light & Elegant", seo_description: "Make elegant seared scallop salad in 20 minutes! Perfect light meal with fresh greens and citrus.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Seared scallop salad with mixed greens", tips: "Serve scallops warm over cold salad for best contrast. Don't overdress the greens.",
        featured: false, status: "published", categories: ['easy-scallop-recipes', 'easy-seafood-recipes', 'easy-salad-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Bacon-Wrapped Scallops",
        slug: "bacon-wrapped-scallops",
        description: "Elegant appetizer with scallops wrapped in bacon and baked until crispy. Perfect for entertaining.",
        ingredients: ["12 large sea scallops", "6 strips bacon, halved", "2 tbsp brown sugar", "1 tsp paprika", "1/2 tsp garlic powder", "Black pepper to taste", "Toothpicks"],
        instructions: ["Preheat oven to 425°F (220°C).", "Pat scallops dry and season with pepper.", "Mix brown sugar, paprika, and garlic powder.", "Sprinkle mixture over scallops.", "Wrap each scallop with half strip of bacon, secure with toothpick.", "Place on baking sheet.", "Bake 12-15 minutes until bacon is crispy.", "Serve immediately."],
        prep_time: 15, cook_time: 15, total_time: 30, servings: 12, difficulty: "easy", calories_per_serving: 85,
        seo_title: "Bacon-Wrapped Scallops Recipe - Perfect Appetizer", seo_description: "Make delicious bacon-wrapped scallops in 30 minutes! Perfect elegant appetizer for entertaining.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Bacon-wrapped scallops on a platter", tips: "Don't overcook - scallops should be just opaque. Soak toothpicks to prevent burning.",
        featured: false, status: "published", categories: ['easy-scallop-recipes', 'easy-seafood-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Scallop Risotto",
        slug: "scallop-risotto",
        description: "Creamy risotto topped with perfectly seared scallops. Elegant dish perfect for special occasions.",
        ingredients: ["12 large scallops", "1 cup arborio rice", "4 cups warm seafood stock", "1/2 cup white wine", "1 onion, diced", "2 cloves garlic, minced", "1/2 cup parmesan cheese", "3 tbsp butter", "2 tbsp olive oil", "2 tbsp fresh chives", "Salt and pepper"],
        instructions: ["Heat 1 tbsp olive oil in large pan, sauté onion until soft.", "Add garlic and rice, stir 2 minutes.", "Add wine and cook until absorbed.", "Add warm stock 1/2 cup at a time, stirring until absorbed.", "Stir in 1 tbsp butter and parmesan.", "Heat remaining oil in skillet, sear scallops 2 minutes per side.", "Serve risotto topped with scallops.", "Garnish with chives."],
        prep_time: 15, cook_time: 35, total_time: 50, servings: 4, difficulty: "easy", calories_per_serving: 445,
        seo_title: "Scallop Risotto Recipe - Elegant & Creamy", seo_description: "Make elegant scallop risotto in 50 minutes! Creamy rice topped with perfectly seared scallops.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Scallop risotto with fresh chives", tips: "Keep stock warm throughout cooking. Sear scallops just before serving for best texture.",
        featured: false, status: "published", categories: ['easy-scallop-recipes', 'easy-seafood-recipes', 'easy-main-course-recipes']
      }
    ];

    console.log('Adding batch 3d recipes...');

    // Combine all recipes
    const allRecipes = [...mushroomRecipes, ...peachRecipes, ...scallopRecipes];

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

    console.log('\n✅ Successfully added batch 3d recipes!');
    console.log(`Added ${allRecipes.length} recipes total.`);

  } catch (error) {
    console.error('Error:', error);
  }
}

addBatch3dRecipes();