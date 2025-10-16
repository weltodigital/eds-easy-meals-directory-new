import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function addBatch3cRecipes() {
  try {
    // Get category IDs first - including many relevant categories for cross-linking
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('id, name, slug')
      .in('slug', [
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

    // Lamb Recipes
    const lambRecipes = [
      {
        title: "Mediterranean Lamb Chops",
        slug: "mediterranean-lamb-chops",
        description: "Tender grilled lamb chops marinated in Mediterranean herbs and garlic. Perfect for special dinners.",
        ingredients: ["8 lamb chops", "1/4 cup olive oil", "3 cloves garlic, minced", "2 tbsp fresh rosemary, chopped", "2 tbsp fresh oregano", "2 tbsp lemon juice", "1 tsp salt", "1/2 tsp black pepper"],
        instructions: ["Mix olive oil, garlic, rosemary, oregano, lemon juice, salt, and pepper.", "Marinate lamb chops 2-4 hours or overnight.", "Preheat grill to medium-high heat.", "Grill chops 3-4 minutes per side for medium-rare.", "Let rest 5 minutes before serving.", "Serve with lemon wedges."],
        prep_time: 15, cook_time: 8, total_time: 23, servings: 4, difficulty: "easy", calories_per_serving: 285,
        seo_title: "Mediterranean Lamb Chops Recipe - Grilled to Perfection", seo_description: "Make juicy Mediterranean lamb chops in 23 minutes! Marinated with herbs and grilled to perfection.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Grilled Mediterranean lamb chops with herbs", tips: "Don't overcook lamb - it's best served medium-rare. Let rest after cooking for juiciest results.",
        featured: false, status: "published", categories: ['easy-lamb-recipes', 'easy-protein-recipes', 'easy-mediterranean-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Slow Cooked Lamb Stew",
        slug: "slow-cooked-lamb-stew",
        description: "Rich and hearty lamb stew with vegetables that's perfect for cold days. Tender meat and flavorful broth.",
        ingredients: ["2 lbs lamb shoulder, cubed", "3 potatoes, cubed", "2 carrots, sliced", "1 onion, diced", "3 cloves garlic, minced", "2 cups beef broth", "1 can (14 oz) diced tomatoes", "2 tbsp tomato paste", "2 tsp dried thyme", "1 bay leaf", "Salt and pepper to taste"],
        instructions: ["Season lamb with salt and pepper.", "Brown lamb in pot, then remove.", "Sauté onion until soft, add garlic.", "Add tomato paste, cook 1 minute.", "Return lamb, add broth, tomatoes, thyme, and bay leaf.", "Bring to boil, then simmer covered 1.5 hours.", "Add potatoes and carrots, cook 30 minutes more.", "Remove bay leaf before serving."],
        prep_time: 20, cook_time: 120, total_time: 140, servings: 6, difficulty: "easy", calories_per_serving: 385,
        seo_title: "Slow Cooked Lamb Stew Recipe - Hearty & Comforting", seo_description: "Make rich slow cooked lamb stew in 140 minutes! Perfect comfort food with tender meat and vegetables.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Rich lamb stew with vegetables", tips: "Brown the meat first for better flavor. Stew tastes even better the next day.",
        featured: false, status: "published", categories: ['easy-lamb-recipes', 'easy-protein-recipes', 'easy-one-pot-recipes']
      },
      {
        title: "Lamb and Feta Meatballs",
        slug: "lamb-feta-meatballs",
        description: "Flavorful Greek-style lamb meatballs with feta cheese and herbs. Perfect appetizer or main dish.",
        ingredients: ["1 lb ground lamb", "1/2 cup feta cheese, crumbled", "1/4 cup breadcrumbs", "1 egg, beaten", "2 cloves garlic, minced", "2 tbsp fresh mint, chopped", "1 tbsp fresh oregano", "1 tsp salt", "1/2 tsp pepper", "2 tbsp olive oil"],
        instructions: ["Mix lamb, feta, breadcrumbs, egg, garlic, mint, oregano, salt, and pepper.", "Form into 20 small meatballs.", "Heat olive oil in large skillet over medium heat.", "Cook meatballs 12-15 minutes, turning occasionally.", "Serve with tzatziki sauce and pita bread."],
        prep_time: 20, cook_time: 15, total_time: 35, servings: 4, difficulty: "easy", calories_per_serving: 295,
        seo_title: "Lamb and Feta Meatballs Recipe - Greek-Style Flavor", seo_description: "Make delicious lamb and feta meatballs in 35 minutes! Perfect Greek-style appetizer or main dish.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Lamb and feta meatballs with herbs", tips: "Don't overwork the meat mixture. Wet hands make rolling meatballs easier.",
        featured: false, status: "published", categories: ['easy-lamb-recipes', 'easy-protein-recipes', 'easy-mediterranean-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Lamb Kebabs",
        slug: "easy-lamb-kebabs",
        description: "Simple and delicious lamb kebabs with vegetables, perfect for grilling season.",
        ingredients: ["2 lbs lamb leg, cubed", "2 bell peppers, chunked", "1 red onion, chunked", "2 zucchini, sliced", "1/4 cup olive oil", "3 cloves garlic, minced", "2 tsp ground cumin", "1 tsp paprika", "1 tsp salt", "1/2 tsp pepper", "Wooden skewers, soaked"],
        instructions: ["Mix olive oil, garlic, cumin, paprika, salt, and pepper.", "Marinate lamb in mixture 1-2 hours.", "Thread lamb and vegetables onto skewers.", "Preheat grill to medium-high heat.", "Grill kebabs 10-12 minutes, turning occasionally.", "Serve with rice or flatbread."],
        prep_time: 30, cook_time: 12, total_time: 42, servings: 6, difficulty: "easy", calories_per_serving: 325,
        seo_title: "Easy Lamb Kebabs Recipe - Perfect for Grilling", seo_description: "Make delicious lamb kebabs in 42 minutes! Perfect for grilling with vegetables and Middle Eastern spices.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Grilled lamb kebabs with vegetables", tips: "Soak wooden skewers to prevent burning. Cut meat and vegetables similar sizes for even cooking.",
        featured: false, status: "published", categories: ['easy-lamb-recipes', 'easy-protein-recipes', 'easy-mediterranean-recipes']
      },
      {
        title: "Lamb and Mint Salad",
        slug: "lamb-mint-salad",
        description: "Fresh and light salad with sliced lamb, mint, and a lemon vinaigrette. Perfect for warm weather.",
        ingredients: ["1 lb cooked lamb, sliced", "6 cups mixed greens", "1/2 cucumber, sliced", "1/4 red onion, thinly sliced", "1/4 cup fresh mint, chopped", "1/4 cup feta cheese, crumbled", "3 tbsp lemon juice", "1/4 cup olive oil", "1 tsp honey", "Salt and pepper to taste"],
        instructions: ["Arrange mixed greens on serving plates.", "Top with sliced lamb, cucumber, onion, mint, and feta.", "Whisk lemon juice, olive oil, and honey for dressing.", "Season dressing with salt and pepper.", "Drizzle over salad and serve immediately."],
        prep_time: 15, cook_time: 0, total_time: 15, servings: 4, difficulty: "easy", calories_per_serving: 285,
        seo_title: "Lamb and Mint Salad Recipe - Fresh & Light", seo_description: "Make refreshing lamb and mint salad in 15 minutes! Perfect light meal with Mediterranean flavors.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Lamb and mint salad with feta cheese", tips: "Use leftover roasted lamb or grilled lamb. Add dressing just before serving.",
        featured: false, status: "published", categories: ['easy-lamb-recipes', 'easy-salad-recipes', 'easy-protein-recipes', 'easy-15-minute-recipes']
      }
    ];

    // Mango Recipes
    const mangoRecipes = [
      {
        title: "Mango Smoothie Bowl",
        slug: "mango-smoothie-bowl",
        description: "Tropical mango smoothie bowl topped with fresh fruit, coconut, and granola. Perfect healthy breakfast.",
        ingredients: ["2 ripe mangoes, cubed and frozen", "1/2 banana", "1/4 cup coconut milk", "1 tbsp honey", "1/4 cup granola", "2 tbsp coconut flakes", "1/4 cup fresh berries", "1 tbsp chia seeds"],
        instructions: ["Blend frozen mango, banana, coconut milk, and honey until thick.", "Pour into bowl and smooth the top.", "Top with granola, coconut flakes, berries, and chia seeds.", "Serve immediately."],
        prep_time: 10, cook_time: 0, total_time: 10, servings: 1, difficulty: "easy", calories_per_serving: 345,
        seo_title: "Mango Smoothie Bowl Recipe - Tropical Healthy Breakfast", seo_description: "Make beautiful mango smoothie bowl in 10 minutes! Tropical flavors with healthy toppings.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Tropical mango smoothie bowl with toppings", tips: "Use frozen mango for the thickest consistency. Arrange toppings in sections for best presentation.",
        featured: false, status: "published", categories: ['easy-mango-recipes', 'easy-smoothie-recipes', 'easy-healthy-recipes', 'easy-breakfast-recipes']
      },
      {
        title: "Mango Salsa",
        slug: "fresh-mango-salsa",
        description: "Fresh and vibrant mango salsa perfect for chips, tacos, or grilled fish. Sweet and spicy combination.",
        ingredients: ["2 ripe mangoes, diced", "1/2 red bell pepper, diced", "1/4 red onion, finely diced", "1 jalapeño, seeded and minced", "1/4 cup fresh cilantro, chopped", "2 tbsp lime juice", "1 tbsp lime zest", "Salt to taste"],
        instructions: ["Combine diced mango, bell pepper, onion, and jalapeño.", "Add cilantro, lime juice, and zest.", "Season with salt to taste.", "Let sit 30 minutes for flavors to meld.", "Serve with tortilla chips or as a topping."],
        prep_time: 15, cook_time: 0, total_time: 15, servings: 6, difficulty: "easy", calories_per_serving: 45,
        seo_title: "Fresh Mango Salsa Recipe - Sweet & Spicy", seo_description: "Make fresh mango salsa in 15 minutes! Perfect sweet and spicy combination for chips or tacos.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Fresh mango salsa with cilantro and lime", tips: "Choose ripe but firm mangoes. Adjust jalapeño to taste preference.",
        featured: false, status: "published", categories: ['easy-mango-recipes', 'easy-no-cook-recipes', 'easy-healthy-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Mango Chicken Stir-Fry",
        slug: "mango-chicken-stir-fry",
        description: "Sweet and savory stir-fry with chicken, mango, and vegetables in a tropical sauce.",
        ingredients: ["1 lb chicken breast, sliced", "1 ripe mango, cubed", "1 bell pepper, sliced", "1 onion, sliced", "2 cloves garlic, minced", "1 tbsp fresh ginger, minced", "3 tbsp soy sauce", "2 tbsp honey", "1 tbsp rice vinegar", "2 tbsp vegetable oil", "Green onions for garnish"],
        instructions: ["Heat oil in large wok over high heat.", "Stir-fry chicken until cooked through, remove.", "Stir-fry onion and bell pepper 3 minutes.", "Add garlic and ginger, cook 1 minute.", "Mix soy sauce, honey, and vinegar.", "Return chicken, add mango and sauce.", "Stir-fry 2 minutes, garnish with green onions."],
        prep_time: 15, cook_time: 12, total_time: 27, servings: 4, difficulty: "easy", calories_per_serving: 285,
        seo_title: "Mango Chicken Stir-Fry Recipe - Sweet & Savory", seo_description: "Make delicious mango chicken stir-fry in 27 minutes! Perfect tropical flavors with tender chicken.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Mango chicken stir-fry with vegetables", tips: "Add mango at the end to prevent overcooking. Serve over rice or noodles.",
        featured: false, status: "published", categories: ['easy-mango-recipes', 'easy-stir-fry-recipes', 'easy-protein-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Mango Sticky Rice",
        slug: "mango-sticky-rice",
        description: "Classic Thai dessert with sweet sticky rice and fresh mango slices in coconut sauce.",
        ingredients: ["1 cup glutinous rice, soaked overnight", "1 can (14 oz) coconut milk", "1/3 cup sugar", "1/2 tsp salt", "2 ripe mangoes, sliced", "2 tbsp cornstarch", "Toasted sesame seeds for garnish"],
        instructions: ["Steam soaked rice 30 minutes until tender.", "Heat 1 cup coconut milk with sugar and half the salt.", "Stir in cooked rice and let absorb.", "Mix remaining coconut milk with cornstarch and remaining salt.", "Cook until thickened for sauce.", "Serve rice with mango slices and coconut sauce.", "Garnish with sesame seeds."],
        prep_time: 20, cook_time: 40, total_time: 60, servings: 4, difficulty: "easy", calories_per_serving: 385,
        seo_title: "Mango Sticky Rice Recipe - Authentic Thai Dessert", seo_description: "Make authentic Thai mango sticky rice in 60 minutes! Sweet and creamy with fresh mango.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Mango sticky rice with coconut sauce", tips: "Soak rice overnight for best texture. Use ripe but firm mangoes for serving.",
        featured: false, status: "published", categories: ['easy-mango-recipes', 'easy-dessert-recipes']
      },
      {
        title: "Mango Lassi",
        slug: "mango-lassi",
        description: "Creamy and refreshing Indian mango yogurt drink. Perfect cool treat for hot days.",
        ingredients: ["2 ripe mangoes, cubed", "1 cup plain Greek yogurt", "1/2 cup milk", "3 tbsp honey", "1/4 tsp cardamom powder", "1 tbsp lime juice", "Ice cubes", "Mint for garnish"],
        instructions: ["Blend mango, yogurt, milk, honey, cardamom, and lime juice.", "Add ice and blend until smooth.", "Taste and adjust sweetness if needed.", "Pour into glasses.", "Garnish with mint and serve immediately."],
        prep_time: 8, cook_time: 0, total_time: 8, servings: 2, difficulty: "easy", calories_per_serving: 245,
        seo_title: "Mango Lassi Recipe - Refreshing Indian Drink", seo_description: "Make authentic mango lassi in 8 minutes! Creamy, refreshing Indian yogurt drink perfect for summer.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Creamy mango lassi with mint garnish", tips: "Use frozen mango for thicker consistency. Adjust cardamom to taste preference.",
        featured: false, status: "published", categories: ['easy-mango-recipes', 'easy-smoothie-recipes', 'easy-healthy-recipes', 'easy-no-cook-recipes']
      }
    ];

    console.log('Adding batch 3c recipes...');

    // Combine all recipes
    const allRecipes = [...lambRecipes, ...mangoRecipes];

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

    console.log('\n✅ Successfully added batch 3c recipes!');
    console.log(`Added ${allRecipes.length} recipes total.`);

  } catch (error) {
    console.error('Error:', error);
  }
}

addBatch3cRecipes();