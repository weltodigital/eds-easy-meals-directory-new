import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function addBatch3bRecipes() {
  try {
    // Get category IDs first - including many relevant categories for cross-linking
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .select('id, name, slug')
      .in('slug', [
        'easy-eggplant-recipes', 'easy-grape-recipes', 'easy-kale-recipes', 'easy-lamb-recipes', 'easy-mango-recipes',
        'easy-vegetarian-recipes', 'easy-healthy-recipes', 'easy-dessert-recipes', 'easy-breakfast-recipes',
        'easy-salad-recipes', 'easy-soup-recipes', 'easy-side-dish-recipes', 'easy-main-course-recipes',
        'easy-15-minute-recipes', 'easy-30-minute-recipes', 'easy-no-cook-recipes', 'easy-roasted-recipes',
        'easy-stir-fry-recipes', 'easy-one-pot-recipes', 'easy-smoothie-recipes', 'easy-mediterranean-recipes',
        'easy-protein-recipes', 'easy-low-carb-recipes'
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

    // Eggplant Recipes
    const eggplantRecipes = [
      {
        title: "Roasted Eggplant Parmesan",
        slug: "roasted-eggplant-parmesan",
        description: "Healthier version of classic eggplant Parmesan using roasted eggplant instead of fried. Just as delicious!",
        ingredients: ["2 large eggplants, sliced 1/2 inch thick", "2 cups marinara sauce", "2 cups mozzarella cheese, shredded", "1/2 cup parmesan cheese, grated", "1/4 cup olive oil", "2 tsp Italian seasoning", "Salt and pepper to taste", "Fresh basil for garnish"],
        instructions: ["Preheat oven to 400°F (200°C).", "Salt eggplant slices and let sit 30 minutes, then pat dry.", "Brush both sides with olive oil, season with Italian seasoning, salt, and pepper.", "Roast 20 minutes, flipping halfway.", "Layer in baking dish: sauce, eggplant, mozzarella, repeat.", "Top with parmesan and bake 25 minutes until bubbly.", "Garnish with fresh basil."],
        prep_time: 45, cook_time: 45, total_time: 90, servings: 6, difficulty: "easy", calories_per_serving: 285,
        seo_title: "Roasted Eggplant Parmesan Recipe - Healthier Classic", seo_description: "Make delicious roasted eggplant Parmesan! Healthier than fried version but just as satisfying.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Roasted eggplant Parmesan with melted cheese", tips: "Salting eggplant removes bitterness. Can be assembled ahead and baked when ready.",
        featured: false, status: "published", categories: ['easy-eggplant-recipes', 'easy-vegetarian-recipes', 'easy-main-course-recipes', 'easy-roasted-recipes']
      },
      {
        title: "Mediterranean Eggplant Dip",
        slug: "mediterranean-eggplant-dip",
        description: "Smoky and creamy eggplant dip similar to baba ganoush. Perfect with pita bread or vegetables.",
        ingredients: ["2 large eggplants", "3 cloves garlic, minced", "3 tbsp tahini", "2 tbsp lemon juice", "2 tbsp olive oil", "1 tsp ground cumin", "Salt and pepper to taste", "Pomegranate seeds for garnish", "Pita bread for serving"],
        instructions: ["Roast whole eggplants at 450°F (230°C) for 45 minutes until very soft.", "Cool, peel, and roughly chop flesh.", "Combine eggplant, garlic, tahini, lemon juice, olive oil, and cumin in food processor.", "Pulse until chunky-smooth consistency.", "Season with salt and pepper.", "Garnish with pomegranate seeds and serve with pita."],
        prep_time: 15, cook_time: 45, total_time: 60, servings: 8, difficulty: "easy", calories_per_serving: 85,
        seo_title: "Mediterranean Eggplant Dip Recipe - Smoky & Delicious", seo_description: "Make authentic Mediterranean eggplant dip in 60 minutes! Smoky, creamy, and perfect for entertaining.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Mediterranean eggplant dip with pita bread", tips: "Roast eggplant until very soft for the smoothest texture. Dip improves in flavor after a few hours.",
        featured: false, status: "published", categories: ['easy-eggplant-recipes', 'easy-vegetarian-recipes', 'easy-mediterranean-recipes', 'easy-roasted-recipes']
      },
      {
        title: "Eggplant Stir-Fry",
        slug: "eggplant-stir-fry",
        description: "Quick and flavorful Asian-style eggplant stir-fry with garlic, ginger, and soy sauce.",
        ingredients: ["2 Asian eggplants, cubed", "3 cloves garlic, minced", "1 tbsp fresh ginger, minced", "3 tbsp soy sauce", "1 tbsp rice vinegar", "1 tsp sesame oil", "1 tbsp brown sugar", "2 tbsp vegetable oil", "2 green onions, sliced", "1 tbsp sesame seeds"],
        instructions: ["Heat vegetable oil in large wok or skillet over high heat.", "Add eggplant and stir-fry 5-6 minutes until tender.", "Add garlic and ginger, stir-fry 1 minute.", "Mix soy sauce, vinegar, sesame oil, and brown sugar.", "Add sauce to pan and toss 2 minutes.", "Garnish with green onions and sesame seeds."],
        prep_time: 10, cook_time: 10, total_time: 20, servings: 4, difficulty: "easy", calories_per_serving: 125,
        seo_title: "Eggplant Stir-Fry Recipe - Quick Asian-Style", seo_description: "Make delicious eggplant stir-fry in 20 minutes! Asian flavors with garlic, ginger, and soy sauce.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Asian eggplant stir-fry with sesame seeds", tips: "Use Asian eggplants for best texture. Cook over high heat for proper stir-fry technique.",
        featured: false, status: "published", categories: ['easy-eggplant-recipes', 'easy-vegetarian-recipes', 'easy-stir-fry-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Grilled Eggplant with Herbs",
        slug: "grilled-eggplant-herbs",
        description: "Simple grilled eggplant with fresh herbs and olive oil. Perfect side dish for summer barbecues.",
        ingredients: ["2 large eggplants, sliced lengthwise", "1/4 cup olive oil", "2 cloves garlic, minced", "2 tbsp fresh oregano", "2 tbsp fresh basil, chopped", "1 tbsp balsamic vinegar", "Salt and pepper to taste", "Crumbled feta cheese (optional)"],
        instructions: ["Preheat grill to medium-high heat.", "Salt eggplant slices and let sit 20 minutes, then pat dry.", "Mix olive oil, garlic, oregano, and basil.", "Brush eggplant with herb oil mixture.", "Grill 4-5 minutes per side until tender with grill marks.", "Drizzle with balsamic vinegar and top with feta if using."],
        prep_time: 25, cook_time: 10, total_time: 35, servings: 6, difficulty: "easy", calories_per_serving: 95,
        seo_title: "Grilled Eggplant with Herbs Recipe - Perfect Side Dish", seo_description: "Make delicious grilled eggplant in 35 minutes! Perfect summer side dish with fresh herbs.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Grilled eggplant slices with fresh herbs", tips: "Don't skip salting step - it removes bitterness. Can also be made on grill pan indoors.",
        featured: false, status: "published", categories: ['easy-eggplant-recipes', 'easy-vegetarian-recipes', 'easy-side-dish-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Eggplant and Chickpea Curry",
        slug: "eggplant-chickpea-curry",
        description: "Hearty vegetarian curry with eggplant and chickpeas in a flavorful tomato-based sauce.",
        ingredients: ["1 large eggplant, cubed", "1 can (15 oz) chickpeas, drained", "1 can (14 oz) diced tomatoes", "1 onion, diced", "3 cloves garlic, minced", "1 tbsp fresh ginger, minced", "2 tsp curry powder", "1 tsp ground cumin", "1/2 cup coconut milk", "2 tbsp olive oil", "Salt and pepper to taste", "Fresh cilantro for garnish"],
        instructions: ["Heat olive oil in large pot, sauté onion until softened.", "Add garlic, ginger, curry powder, and cumin, cook 1 minute.", "Add eggplant and cook 5 minutes.", "Add tomatoes, chickpeas, and coconut milk.", "Simmer 20 minutes until eggplant is tender.", "Season with salt and pepper.", "Garnish with cilantro and serve over rice."],
        prep_time: 15, cook_time: 30, total_time: 45, servings: 4, difficulty: "easy", calories_per_serving: 245,
        seo_title: "Eggplant and Chickpea Curry Recipe - Hearty Vegetarian", seo_description: "Make flavorful eggplant and chickpea curry in 45 minutes! Hearty vegetarian meal with aromatic spices.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Eggplant and chickpea curry with rice", tips: "Cut eggplant into even pieces for uniform cooking. Taste and adjust spices to preference.",
        featured: false, status: "published", categories: ['easy-eggplant-recipes', 'easy-vegetarian-recipes', 'easy-one-pot-recipes']
      }
    ];

    // Grape Recipes
    const grapeRecipes = [
      {
        title: "Roasted Grape and Goat Cheese Crostini",
        slug: "roasted-grape-goat-cheese-crostini",
        description: "Elegant appetizer with roasted grapes, creamy goat cheese, and honey on toasted baguette slices.",
        ingredients: ["2 cups red grapes, halved", "8 oz goat cheese, softened", "1 baguette, sliced", "2 tbsp olive oil", "2 tbsp fresh thyme", "2 tbsp honey", "1/4 cup walnuts, chopped", "Salt and pepper to taste"],
        instructions: ["Preheat oven to 425°F (220°C).", "Toss grapes with 1 tbsp olive oil, thyme, salt, and pepper.", "Roast grapes 20 minutes until caramelized.", "Toast baguette slices until golden.", "Spread goat cheese on toast.", "Top with roasted grapes, drizzle with honey.", "Sprinkle with walnuts and serve."],
        prep_time: 15, cook_time: 25, total_time: 40, servings: 8, difficulty: "easy", calories_per_serving: 165,
        seo_title: "Roasted Grape and Goat Cheese Crostini Recipe - Elegant Appetizer", seo_description: "Make impressive roasted grape crostini in 40 minutes! Perfect elegant appetizer with goat cheese and honey.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Roasted grape and goat cheese crostini", tips: "Roasting concentrates grape flavors. Can be assembled just before serving for best texture.",
        featured: false, status: "published", categories: ['easy-grape-recipes', 'easy-roasted-recipes', 'easy-vegetarian-recipes']
      },
      {
        title: "Grape and Chicken Salad",
        slug: "grape-chicken-salad",
        description: "Fresh and satisfying chicken salad with grapes, celery, and a light mayonnaise dressing.",
        ingredients: ["3 cups cooked chicken, diced", "2 cups red grapes, halved", "2 celery stalks, diced", "1/2 cup mayonnaise", "2 tbsp lemon juice", "1/4 cup sliced almonds", "2 tbsp fresh tarragon, chopped", "Salt and pepper to taste", "Mixed greens for serving"],
        instructions: ["Combine chicken, grapes, and celery in large bowl.", "Mix mayonnaise, lemon juice, and tarragon.", "Add dressing to chicken mixture and toss.", "Season with salt and pepper.", "Stir in almonds just before serving.", "Serve over mixed greens or use for sandwiches."],
        prep_time: 15, cook_time: 0, total_time: 15, servings: 4, difficulty: "easy", calories_per_serving: 285,
        seo_title: "Grape and Chicken Salad Recipe - Fresh & Satisfying", seo_description: "Make delicious grape and chicken salad in 15 minutes! Perfect for lunch with sweet grapes and crunchy almonds.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Grape and chicken salad with almonds", tips: "Use rotisserie chicken for convenience. Add almonds just before serving to maintain crunch.",
        featured: false, status: "published", categories: ['easy-grape-recipes', 'easy-salad-recipes', 'easy-protein-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Grape Smoothie Bowl",
        slug: "grape-smoothie-bowl",
        description: "Refreshing purple smoothie bowl with frozen grapes, banana, and topped with fresh fruit and granola.",
        ingredients: ["2 cups frozen grapes", "1 frozen banana", "1/2 cup Greek yogurt", "1/4 cup almond milk", "1 tbsp honey", "1/4 cup granola", "2 tbsp fresh grapes", "1 tbsp chia seeds", "Fresh mint for garnish"],
        instructions: ["Blend frozen grapes, banana, yogurt, almond milk, and honey until thick.", "Pour into bowl and smooth the top.", "Top with granola, fresh grapes, and chia seeds.", "Garnish with mint and serve immediately."],
        prep_time: 8, cook_time: 0, total_time: 8, servings: 1, difficulty: "easy", calories_per_serving: 295,
        seo_title: "Grape Smoothie Bowl Recipe - Antioxidant-Rich Breakfast", seo_description: "Make beautiful grape smoothie bowl in 8 minutes! Packed with antioxidants and perfect for healthy breakfast.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Purple grape smoothie bowl with toppings", tips: "Use frozen grapes for the thickest consistency. Add more liquid if you prefer it thinner.",
        featured: false, status: "published", categories: ['easy-grape-recipes', 'easy-smoothie-recipes', 'easy-healthy-recipes', 'easy-breakfast-recipes']
      },
      {
        title: "Grape and Walnut Salad",
        slug: "grape-walnut-salad",
        description: "Light and refreshing salad with grapes, walnuts, blue cheese, and mixed greens with balsamic dressing.",
        ingredients: ["6 cups mixed greens", "2 cups red grapes, halved", "1/2 cup walnuts, toasted", "1/4 cup blue cheese, crumbled", "3 tbsp balsamic vinegar", "1/4 cup olive oil", "1 tsp Dijon mustard", "Salt and pepper to taste"],
        instructions: ["Toast walnuts in dry skillet 3-4 minutes until fragrant.", "Arrange mixed greens in serving bowl.", "Top with grapes, toasted walnuts, and blue cheese.", "Whisk balsamic vinegar, olive oil, and mustard.", "Season dressing with salt and pepper.", "Drizzle over salad just before serving."],
        prep_time: 15, cook_time: 5, total_time: 20, servings: 4, difficulty: "easy", calories_per_serving: 215,
        seo_title: "Grape and Walnut Salad Recipe - Light & Refreshing", seo_description: "Make delicious grape and walnut salad in 20 minutes! Perfect combination of sweet, nutty, and tangy flavors.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Grape and walnut salad with blue cheese", tips: "Toast walnuts for the best flavor. Add dressing just before serving to keep greens crisp.",
        featured: false, status: "published", categories: ['easy-grape-recipes', 'easy-salad-recipes', 'easy-healthy-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Frozen Grape Popsicles",
        slug: "frozen-grape-popsicles",
        description: "Simple and healthy frozen treat made with just grapes. Perfect natural popsicle for hot summer days.",
        ingredients: ["3 cups red or green grapes", "2 tbsp honey (optional)", "1 tbsp lemon juice", "Popsicle molds"],
        instructions: ["Wash and stem grapes.", "Blend grapes with honey and lemon juice until smooth.", "Strain mixture if you prefer smoother texture.", "Pour into popsicle molds.", "Freeze 4-6 hours until solid.", "Run warm water over molds to remove popsicles."],
        prep_time: 10, cook_time: 0, total_time: 10, servings: 6, difficulty: "easy", calories_per_serving: 45,
        seo_title: "Frozen Grape Popsicles Recipe - Healthy Summer Treat", seo_description: "Make healthy frozen grape popsicles in 10 minutes! Natural summer treat that kids and adults love.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Frozen grape popsicles on a tray", tips: "Honey is optional - grapes are naturally sweet. Can use any color grapes or mix varieties.",
        featured: false, status: "published", categories: ['easy-grape-recipes', 'easy-dessert-recipes', 'easy-healthy-recipes', 'easy-no-cook-recipes']
      }
    ];

    // Kale Recipes
    const kaleRecipes = [
      {
        title: "Massaged Kale Salad",
        slug: "massaged-kale-salad",
        description: "Tender and flavorful kale salad made by massaging the leaves with lemon and olive oil. Perfect healthy base.",
        ingredients: ["1 large bunch kale, stems removed and chopped", "3 tbsp olive oil", "2 tbsp lemon juice", "1/2 tsp salt", "1/4 cup dried cranberries", "1/4 cup sunflower seeds", "1/4 cup parmesan cheese, grated"],
        instructions: ["Place chopped kale in large bowl.", "Add olive oil, lemon juice, and salt.", "Massage kale with your hands for 2-3 minutes until softened.", "Add cranberries, sunflower seeds, and parmesan.", "Toss and let sit 10 minutes before serving.", "Taste and adjust seasoning if needed."],
        prep_time: 15, cook_time: 0, total_time: 15, servings: 4, difficulty: "easy", calories_per_serving: 145,
        seo_title: "Massaged Kale Salad Recipe - Tender & Delicious", seo_description: "Make perfect massaged kale salad in 15 minutes! Tender kale with cranberries and sunflower seeds.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Massaged kale salad with cranberries", tips: "Massaging breaks down tough fibers in kale. Salad keeps well in refrigerator for 2-3 days.",
        featured: false, status: "published", categories: ['easy-kale-recipes', 'easy-salad-recipes', 'easy-healthy-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Kale Chips",
        slug: "crispy-kale-chips",
        description: "Crispy baked kale chips seasoned with olive oil and sea salt. Healthy alternative to potato chips.",
        ingredients: ["1 large bunch kale, stems removed", "2 tbsp olive oil", "1 tsp sea salt", "1/2 tsp garlic powder (optional)", "1/4 tsp smoked paprika (optional)"],
        instructions: ["Preheat oven to 300°F (150°C).", "Wash and thoroughly dry kale leaves.", "Tear into bite-sized pieces.", "Toss with olive oil and seasonings.", "Spread in single layer on baking sheets.", "Bake 20-25 minutes until crispy.", "Cool completely before storing."],
        prep_time: 10, cook_time: 25, total_time: 35, servings: 4, difficulty: "easy", calories_per_serving: 75,
        seo_title: "Crispy Kale Chips Recipe - Healthy Snack Alternative", seo_description: "Make crispy kale chips in 35 minutes! Healthy, crunchy snack that's better than potato chips.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Crispy kale chips on a baking sheet", tips: "Make sure kale is completely dry for crispiest chips. Don't overcrowd baking sheets.",
        featured: false, status: "published", categories: ['easy-kale-recipes', 'easy-healthy-recipes', 'easy-roasted-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Kale and White Bean Soup",
        slug: "kale-white-bean-soup",
        description: "Hearty and nutritious soup with kale, white beans, and vegetables. Perfect comfort food for cold days.",
        ingredients: ["1 bunch kale, chopped", "2 cans (15 oz each) white beans, drained", "4 cups vegetable broth", "1 onion, diced", "2 carrots, diced", "2 celery stalks, diced", "3 cloves garlic, minced", "2 tbsp olive oil", "1 bay leaf", "1 tsp dried thyme", "Salt and pepper to taste"],
        instructions: ["Heat olive oil in large pot, sauté onion, carrots, and celery until soft.", "Add garlic and cook 1 minute.", "Add broth, beans, bay leaf, and thyme.", "Bring to boil, then simmer 15 minutes.", "Add kale and cook 5 minutes until wilted.", "Season with salt and pepper.", "Remove bay leaf before serving."],
        prep_time: 15, cook_time: 25, total_time: 40, servings: 6, difficulty: "easy", calories_per_serving: 185,
        seo_title: "Kale and White Bean Soup Recipe - Hearty & Healthy", seo_description: "Make nourishing kale and white bean soup in 40 minutes! Perfect healthy comfort food.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Kale and white bean soup in a bowl", tips: "Add kale at the end to prevent overcooking. Soup tastes even better the next day.",
        featured: false, status: "published", categories: ['easy-kale-recipes', 'easy-soup-recipes', 'easy-healthy-recipes', 'easy-one-pot-recipes']
      },
      {
        title: "Kale and Quinoa Bowl",
        slug: "kale-quinoa-bowl",
        description: "Nutritious power bowl with massaged kale, quinoa, and a variety of healthy toppings and tahini dressing.",
        ingredients: ["1 cup quinoa, cooked", "4 cups kale, massaged with lemon and olive oil", "1 avocado, sliced", "1/2 cup chickpeas, roasted", "1/4 cup pumpkin seeds", "2 tbsp tahini", "2 tbsp lemon juice", "1 tbsp olive oil", "1 tsp honey", "Salt and pepper to taste"],
        instructions: ["Cook quinoa according to package directions and cool.", "Massage kale with a little lemon juice and olive oil.", "Arrange quinoa and kale in bowls.", "Top with avocado, chickpeas, and pumpkin seeds.", "Whisk tahini, lemon juice, olive oil, honey, salt, and pepper.", "Drizzle dressing over bowls and serve."],
        prep_time: 20, cook_time: 15, total_time: 35, servings: 2, difficulty: "easy", calories_per_serving: 485,
        seo_title: "Kale and Quinoa Bowl Recipe - Nutritious Power Bowl", seo_description: "Make healthy kale and quinoa bowl in 35 minutes! Packed with nutrients and topped with tahini dressing.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Kale and quinoa bowl with avocado and chickpeas", tips: "Can prep components ahead and assemble when ready. Add avocado just before serving.",
        featured: false, status: "published", categories: ['easy-kale-recipes', 'easy-healthy-recipes', 'easy-vegetarian-recipes']
      },
      {
        title: "Sautéed Kale with Garlic",
        slug: "sauteed-kale-garlic",
        description: "Simple and delicious sautéed kale with garlic and red pepper flakes. Perfect healthy side dish.",
        ingredients: ["2 bunches kale, stems removed and chopped", "4 cloves garlic, sliced", "3 tbsp olive oil", "1/4 tsp red pepper flakes", "1/4 cup vegetable broth", "2 tbsp lemon juice", "Salt and pepper to taste"],
        instructions: ["Heat olive oil in large skillet over medium heat.", "Add garlic and red pepper flakes, cook 1 minute.", "Add kale and toss with tongs.", "Add broth and cook 5-7 minutes until kale is tender.", "Season with lemon juice, salt, and pepper.", "Serve immediately as a side dish."],
        prep_time: 10, cook_time: 10, total_time: 20, servings: 4, difficulty: "easy", calories_per_serving: 125,
        seo_title: "Sautéed Kale with Garlic Recipe - Perfect Side Dish", seo_description: "Make delicious sautéed kale in 20 minutes! Simple, healthy side dish with garlic and lemon.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Sautéed kale with garlic in a skillet", tips: "Don't overcook kale - it should be tender but still bright green. Add lemon juice at the end.",
        featured: false, status: "published", categories: ['easy-kale-recipes', 'easy-side-dish-recipes', 'easy-healthy-recipes', 'easy-15-minute-recipes']
      }
    ];

    console.log('Adding batch 3b recipes...');

    // Combine all recipes
    const allRecipes = [...eggplantRecipes, ...grapeRecipes, ...kaleRecipes];

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

    console.log('\n✅ Successfully added batch 3b recipes!');
    console.log(`Added ${allRecipes.length} recipes total.`);

  } catch (error) {
    console.error('Error:', error);
  }
}

addBatch3bRecipes();