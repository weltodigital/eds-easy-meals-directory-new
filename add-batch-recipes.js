import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function addBatchRecipes() {
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
        title: "Baked Cod with Lemon Herbs",
        slug: "baked-cod-with-lemon-herbs",
        description: "Tender, flaky baked cod with fresh lemon, herbs, and a crispy breadcrumb topping. Light and healthy weeknight dinner.",
        ingredients: ["4 cod fillets (6 oz each)", "2 lemons, sliced", "1/2 cup panko breadcrumbs", "2 tbsp olive oil", "2 cloves garlic, minced", "2 tbsp fresh parsley, chopped", "1 tsp dried thyme", "Salt and pepper to taste"],
        instructions: ["Preheat oven to 400°F (200°C).", "Place cod fillets on baking sheet lined with parchment.", "Season with salt and pepper.", "Mix breadcrumbs, olive oil, garlic, parsley, and thyme.", "Top each fillet with breadcrumb mixture.", "Arrange lemon slices around fish.", "Bake 15-20 minutes until fish flakes easily."],
        prep_time: 10, cook_time: 20, total_time: 30, servings: 4, difficulty: "easy", calories_per_serving: 225,
        seo_title: "Baked Cod with Lemon Herbs Recipe - Healthy Fish Dinner", seo_description: "Make perfect baked cod in 30 minutes! Flaky, tender fish with lemon herbs and crispy breadcrumbs.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Baked cod with lemon and herbs", tips: "Don't overcook cod - it should flake easily when done. Serve with roasted vegetables or rice.",
        featured: false, status: "published", categories: ['easy-cod-recipes', 'easy-seafood-recipes', 'easy-healthy-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Cod Fish Cakes",
        slug: "cod-fish-cakes",
        description: "Crispy pan-fried cod fish cakes with potatoes and herbs. Perfect way to use leftover cod or create a comforting meal.",
        ingredients: ["1 lb cooked cod, flaked", "2 large potatoes, boiled and mashed", "1 egg, beaten", "2 tbsp fresh dill, chopped", "1 green onion, chopped", "1 tsp lemon zest", "1/2 cup flour", "2 tbsp olive oil", "Salt and pepper to taste"],
        instructions: ["Mix flaked cod with mashed potatoes.", "Add egg, dill, green onion, and lemon zest.", "Season with salt and pepper.", "Form into 8 patties and coat lightly with flour.", "Heat olive oil in large skillet over medium heat.", "Cook patties 4-5 minutes per side until golden.", "Serve hot with lemon wedges."],
        prep_time: 20, cook_time: 15, total_time: 35, servings: 4, difficulty: "easy", calories_per_serving: 245,
        seo_title: "Easy Cod Fish Cakes Recipe - Crispy & Delicious", seo_description: "Make crispy cod fish cakes in 35 minutes! Perfect comfort food with potatoes and fresh herbs.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Golden cod fish cakes on a plate", tips: "Chill formed patties for 30 minutes before cooking for easier handling. Great with tartar sauce or aioli.",
        featured: false, status: "published", categories: ['easy-cod-recipes', 'easy-seafood-recipes', 'easy-main-course-recipes']
      },
      {
        title: "Cod and Vegetable Soup",
        slug: "cod-vegetable-soup",
        description: "Hearty and nutritious cod and vegetable soup with carrots, celery, and potatoes. Perfect comfort food for cold days.",
        ingredients: ["1 lb cod fillet, cut into chunks", "4 cups fish or vegetable broth", "2 carrots, diced", "2 celery stalks, diced", "2 potatoes, cubed", "1 onion, diced", "2 cloves garlic, minced", "2 tbsp olive oil", "1 bay leaf", "Salt and pepper to taste", "Fresh parsley for garnish"],
        instructions: ["Heat olive oil in large pot, sauté onion until softened.", "Add garlic, carrots, and celery, cook 5 minutes.", "Add potatoes, broth, and bay leaf, bring to boil.", "Simmer 15 minutes until vegetables are tender.", "Add cod chunks and simmer 5-7 minutes until fish is cooked.", "Season with salt and pepper.", "Remove bay leaf and garnish with parsley."],
        prep_time: 15, cook_time: 30, total_time: 45, servings: 4, difficulty: "easy", calories_per_serving: 195,
        seo_title: "Cod and Vegetable Soup Recipe - Hearty Fish Soup", seo_description: "Make warming cod and vegetable soup in 45 minutes! Healthy, hearty, and perfect for cold weather.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Cod and vegetable soup in a bowl", tips: "Add cod at the end to prevent overcooking. Serve with crusty bread for a complete meal.",
        featured: false, status: "published", categories: ['easy-cod-recipes', 'easy-seafood-recipes', 'easy-soup-recipes', 'easy-healthy-recipes', 'easy-one-pot-recipes']
      },
      {
        title: "Pan-Seared Cod with Garlic Butter",
        slug: "pan-seared-cod-garlic-butter",
        description: "Restaurant-quality pan-seared cod with aromatic garlic butter sauce. Ready in just 15 minutes for a quick dinner.",
        ingredients: ["4 cod fillets (6 oz each)", "3 tbsp butter", "3 cloves garlic, minced", "2 tbsp lemon juice", "1 tbsp fresh thyme", "2 tbsp olive oil", "Salt and pepper to taste", "Lemon wedges for serving"],
        instructions: ["Season cod fillets with salt and pepper.", "Heat olive oil in large skillet over medium-high heat.", "Cook cod 4-5 minutes per side until golden and flakes easily.", "Remove cod and keep warm.", "Add butter and garlic to same pan, cook 1 minute.", "Add lemon juice and thyme, stir.", "Return cod to pan and spoon sauce over.", "Serve immediately with lemon wedges."],
        prep_time: 5, cook_time: 12, total_time: 17, servings: 4, difficulty: "easy", calories_per_serving: 255,
        seo_title: "Pan-Seared Cod with Garlic Butter Recipe - Restaurant Quality", seo_description: "Make restaurant-quality pan-seared cod in 17 minutes! Perfectly crispy with rich garlic butter sauce.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Pan-seared cod with garlic butter sauce", tips: "Don't move the fish while cooking the first side to get a good sear. Cod is done when it flakes easily.",
        featured: false, status: "published", categories: ['easy-cod-recipes', 'easy-seafood-recipes', 'easy-15-minute-recipes', 'easy-main-course-recipes']
      },
      {
        title: "Mediterranean Cod Stew",
        slug: "mediterranean-cod-stew",
        description: "Flavorful Mediterranean-style cod stew with tomatoes, olives, and herbs. A one-pot meal full of fresh flavors.",
        ingredients: ["1.5 lbs cod, cut into chunks", "1 can (14 oz) diced tomatoes", "1/2 cup Kalamata olives, pitted", "1 onion, diced", "3 cloves garlic, minced", "1/4 cup olive oil", "1 tsp dried oregano", "1/2 cup white wine", "2 tbsp fresh basil", "Salt and pepper to taste"],
        instructions: ["Heat olive oil in large pot, sauté onion until softened.", "Add garlic and oregano, cook 1 minute.", "Add tomatoes, wine, and olives, simmer 10 minutes.", "Season cod with salt and pepper.", "Add cod to pot and simmer 8-10 minutes until cooked through.", "Stir in fresh basil.", "Serve with crusty bread or over rice."],
        prep_time: 15, cook_time: 25, total_time: 40, servings: 4, difficulty: "easy", calories_per_serving: 285,
        seo_title: "Mediterranean Cod Stew Recipe - One-Pot Fish Dinner", seo_description: "Make flavorful Mediterranean cod stew in 40 minutes! One-pot meal with tomatoes, olives, and herbs.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Mediterranean cod stew with olives and tomatoes", tips: "Use good quality olives for best flavor. Don't overcook the cod to keep it tender.",
        featured: false, status: "published", categories: ['easy-cod-recipes', 'easy-seafood-recipes', 'easy-mediterranean-recipes', 'easy-one-pot-recipes']
      }
    ];

    console.log('Adding batch recipes...');

    // Cranberry Recipes
    const cranberryRecipes = [
      {
        title: "Cranberry Orange Bread",
        slug: "cranberry-orange-bread",
        description: "Moist and flavorful cranberry orange bread with tart cranberries and bright citrus flavor. Perfect for breakfast or afternoon tea.",
        ingredients: ["2 cups all-purpose flour", "3/4 cup sugar", "1 1/2 tsp baking powder", "1/2 tsp salt", "1/4 cup orange juice", "2 tbsp orange zest", "1/3 cup melted butter", "1 egg, beaten", "3/4 cup milk", "1 cup fresh cranberries"],
        instructions: ["Preheat oven to 350°F (175°C). Grease 9x5 loaf pan.", "Mix flour, sugar, baking powder, and salt in large bowl.", "In separate bowl, combine orange juice, zest, melted butter, egg, and milk.", "Pour wet ingredients into dry ingredients and stir until just combined.", "Fold in cranberries gently.", "Pour into prepared pan and bake 55-60 minutes.", "Cool in pan 10 minutes before removing."],
        prep_time: 15, cook_time: 60, total_time: 75, servings: 12, difficulty: "easy", calories_per_serving: 165,
        seo_title: "Cranberry Orange Bread Recipe - Moist & Flavorful", seo_description: "Bake delicious cranberry orange bread in 75 minutes! Moist, tart, and perfect for breakfast or snacks.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Sliced cranberry orange bread", tips: "Don't overmix the batter. Toss cranberries in flour before folding in to prevent sinking.",
        featured: false, status: "published", categories: ['easy-cranberry-recipes', 'easy-breakfast-recipes', 'easy-dessert-recipes']
      },
      {
        title: "Cranberry Walnut Salad",
        slug: "cranberry-walnut-salad",
        description: "Fresh mixed greens with dried cranberries, toasted walnuts, and a light vinaigrette. Perfect side salad for any meal.",
        ingredients: ["6 cups mixed greens", "1/2 cup dried cranberries", "1/2 cup walnuts, chopped and toasted", "1/4 cup goat cheese, crumbled", "3 tbsp olive oil", "2 tbsp balsamic vinegar", "1 tsp Dijon mustard", "1 tsp honey", "Salt and pepper to taste"],
        instructions: ["Toast walnuts in dry skillet for 3-4 minutes until fragrant.", "Arrange mixed greens in serving bowl.", "Top with cranberries, toasted walnuts, and goat cheese.", "Whisk olive oil, balsamic vinegar, mustard, and honey.", "Season dressing with salt and pepper.", "Drizzle over salad and serve immediately."],
        prep_time: 10, cook_time: 5, total_time: 15, servings: 4, difficulty: "easy", calories_per_serving: 185,
        seo_title: "Cranberry Walnut Salad Recipe - Fresh & Healthy", seo_description: "Make this delicious cranberry walnut salad in 15 minutes! Perfect healthy side dish with goat cheese.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Cranberry walnut salad with goat cheese", tips: "Toast walnuts for the best flavor. Add dressing just before serving to keep greens crisp.",
        featured: false, status: "published", categories: ['easy-cranberry-recipes', 'easy-salad-recipes', 'easy-healthy-recipes', 'easy-15-minute-recipes']
      },
      {
        title: "Cranberry Sauce",
        slug: "homemade-cranberry-sauce",
        description: "Classic homemade cranberry sauce that's so much better than store-bought. Perfect for holidays or any meal.",
        ingredients: ["1 bag (12 oz) fresh cranberries", "1 cup sugar", "1 cup water", "1 strip orange peel", "1/4 tsp ground cinnamon"],
        instructions: ["Rinse cranberries and remove any stems.", "Combine sugar, water, and orange peel in saucepan.", "Bring to boil, stirring until sugar dissolves.", "Add cranberries and return to boil.", "Reduce heat and simmer 10-15 minutes until cranberries pop.", "Stir in cinnamon and remove orange peel.", "Cool completely before serving."],
        prep_time: 5, cook_time: 20, total_time: 25, servings: 8, difficulty: "easy", calories_per_serving: 105,
        seo_title: "Homemade Cranberry Sauce Recipe - Better Than Store-Bought", seo_description: "Make the best homemade cranberry sauce in 25 minutes! Perfect for holidays and so much better than store-bought.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Homemade cranberry sauce in a bowl", tips: "Sauce will thicken as it cools. Can be made up to 3 days ahead and stored in refrigerator.",
        featured: false, status: "published", categories: ['easy-cranberry-recipes', 'easy-side-dish-recipes', 'easy-30-minute-recipes']
      },
      {
        title: "Cranberry Smoothie Bowl",
        slug: "cranberry-smoothie-bowl",
        description: "Antioxidant-rich cranberry smoothie bowl with banana and yogurt. Topped with granola and fresh fruit for a healthy breakfast.",
        ingredients: ["1/2 cup frozen cranberries", "1 frozen banana", "1/2 cup Greek yogurt", "1/4 cup almond milk", "1 tbsp honey", "1/4 cup granola", "2 tbsp fresh cranberries", "1 tbsp chia seeds"],
        instructions: ["Blend frozen cranberries, banana, yogurt, almond milk, and honey until thick.", "Pour into bowl and smooth the top.", "Top with granola, fresh cranberries, and chia seeds.", "Serve immediately with a spoon."],
        prep_time: 8, cook_time: 0, total_time: 8, servings: 1, difficulty: "easy", calories_per_serving: 285,
        seo_title: "Cranberry Smoothie Bowl Recipe - Antioxidant-Rich Breakfast", seo_description: "Make this healthy cranberry smoothie bowl in 8 minutes! Packed with antioxidants and perfect for breakfast.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Cranberry smoothie bowl with toppings", tips: "Use frozen fruit for the thickest consistency. Add more milk if you prefer it thinner.",
        featured: false, status: "published", categories: ['easy-cranberry-recipes', 'easy-smoothie-recipes', 'easy-healthy-recipes', 'easy-breakfast-recipes']
      },
      {
        title: "Cranberry Oat Cookies",
        slug: "cranberry-oat-cookies",
        description: "Chewy oatmeal cookies with tart dried cranberries. Perfect sweet treat that's not too heavy and great for snacking.",
        ingredients: ["1 cup old-fashioned oats", "1 cup all-purpose flour", "1/2 cup brown sugar", "1/4 cup melted coconut oil", "1 egg", "1/2 tsp vanilla extract", "1/2 tsp baking soda", "1/4 tsp salt", "1/2 cup dried cranberries"],
        instructions: ["Preheat oven to 350°F (175°C). Line baking sheet with parchment.", "Mix oats, flour, brown sugar, baking soda, and salt in bowl.", "In separate bowl, whisk melted coconut oil, egg, and vanilla.", "Combine wet and dry ingredients, then fold in cranberries.", "Drop spoonfuls of dough onto baking sheet.", "Bake 12-15 minutes until lightly golden.", "Cool on baking sheet 5 minutes before transferring."],
        prep_time: 15, cook_time: 15, total_time: 30, servings: 18, difficulty: "easy", calories_per_serving: 95,
        seo_title: "Cranberry Oat Cookies Recipe - Chewy & Delicious", seo_description: "Bake chewy cranberry oat cookies in 30 minutes! Perfect sweet treat with tart cranberries and oats.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Cranberry oat cookies on a cooling rack", tips: "Don't overbake - cookies will continue to cook on the hot pan. Store in airtight container for up to a week.",
        featured: false, status: "published", categories: ['easy-cranberry-recipes', 'easy-dessert-recipes', 'easy-30-minute-recipes']
      }
    ];

    // Ham Recipes
    const hamRecipes = [
      {
        title: "Ham and Cheese Quesadillas",
        slug: "ham-cheese-quesadillas",
        description: "Quick and easy ham and cheese quesadillas perfect for lunch or a light dinner. Crispy outside, melty inside.",
        ingredients: ["4 large flour tortillas", "2 cups cooked ham, diced", "1 1/2 cups shredded cheese (cheddar or Mexican blend)", "1/4 cup green onions, chopped", "2 tbsp butter", "Sour cream and salsa for serving"],
        instructions: ["Place ham, cheese, and green onions on half of each tortilla.", "Fold tortillas in half.", "Heat butter in large skillet over medium heat.", "Cook quesadillas 2-3 minutes per side until golden and cheese melts.", "Cut into wedges and serve with sour cream and salsa."],
        prep_time: 10, cook_time: 10, total_time: 20, servings: 4, difficulty: "easy", calories_per_serving: 385,
        seo_title: "Ham and Cheese Quesadillas Recipe - Quick & Easy", seo_description: "Make delicious ham and cheese quesadillas in 20 minutes! Perfect for quick lunch or dinner.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Ham and cheese quesadillas cut into wedges", tips: "Don't overfill quesadillas or they'll be hard to flip. Serve immediately while cheese is melted.",
        featured: false, status: "published", categories: ['easy-ham-recipes', 'easy-15-minute-recipes', 'easy-main-course-recipes']
      },
      {
        title: "Ham and Bean Soup",
        slug: "ham-bean-soup",
        description: "Hearty and comforting ham and bean soup that's perfect for using leftover ham. Rich, filling, and full of flavor.",
        ingredients: ["2 cups cooked ham, diced", "2 cans (15 oz each) white beans, drained", "4 cups chicken broth", "1 onion, diced", "2 carrots, diced", "2 celery stalks, diced", "3 cloves garlic, minced", "2 tbsp olive oil", "1 bay leaf", "1 tsp dried thyme", "Salt and pepper to taste", "Fresh parsley for garnish"],
        instructions: ["Heat olive oil in large pot, sauté onion, carrots, and celery until softened.", "Add garlic and cook 1 minute more.", "Add ham, beans, broth, bay leaf, and thyme.", "Bring to boil, then simmer 20 minutes.", "Season with salt and pepper.", "Remove bay leaf and garnish with parsley."],
        prep_time: 15, cook_time: 30, total_time: 45, servings: 6, difficulty: "easy", calories_per_serving: 245,
        seo_title: "Ham and Bean Soup Recipe - Hearty Comfort Food", seo_description: "Make comforting ham and bean soup in 45 minutes! Perfect way to use leftover ham and very filling.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Ham and bean soup in a bowl", tips: "Great way to use leftover holiday ham. Soup tastes even better the next day as flavors develop.",
        featured: false, status: "published", categories: ['easy-ham-recipes', 'easy-soup-recipes', 'easy-one-pot-recipes', 'easy-protein-recipes']
      },
      {
        title: "Ham Fried Rice",
        slug: "ham-fried-rice",
        description: "Quick and easy ham fried rice using leftover rice and ham. A complete meal that's ready in just 15 minutes.",
        ingredients: ["3 cups cooked rice, preferably day-old", "2 cups cooked ham, diced", "3 eggs, beaten", "1 cup frozen peas and carrots", "3 green onions, sliced", "3 cloves garlic, minced", "3 tbsp soy sauce", "2 tbsp vegetable oil", "1 tsp sesame oil", "Salt and pepper to taste"],
        instructions: ["Heat 1 tbsp oil in large skillet or wok over high heat.", "Add beaten eggs and scramble, then remove and set aside.", "Add remaining oil, then add garlic and cook 30 seconds.", "Add ham and frozen vegetables, stir-fry 2 minutes.", "Add rice, breaking up any clumps, stir-fry 3 minutes.", "Return eggs to pan, add soy sauce and sesame oil.", "Garnish with green onions and serve hot."],
        prep_time: 10, cook_time: 8, total_time: 18, servings: 4, difficulty: "easy", calories_per_serving: 345,
        seo_title: "Ham Fried Rice Recipe - Quick 15-Minute Meal", seo_description: "Make delicious ham fried rice in 18 minutes! Perfect way to use leftover rice and ham for a complete meal.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Ham fried rice in a wok", tips: "Day-old rice works best as it's less sticky. Cook over high heat for the best texture.",
        featured: false, status: "published", categories: ['easy-ham-recipes', 'easy-15-minute-recipes', 'easy-main-course-recipes', 'easy-stir-fry-recipes']
      },
      {
        title: "Ham and Swiss Sliders",
        slug: "ham-swiss-sliders",
        description: "Delicious baked ham and Swiss sliders with a buttery poppy seed glaze. Perfect for parties or easy family dinner.",
        ingredients: ["12 slider buns", "1 lb sliced ham", "6 slices Swiss cheese, halved", "1/4 cup butter, melted", "1 tbsp Dijon mustard", "1 tbsp poppy seeds", "1 tsp onion powder", "1/2 tsp garlic powder"],
        instructions: ["Preheat oven to 350°F (175°C).", "Slice slider buns in half and arrange bottom halves in baking dish.", "Layer ham and cheese on bottom halves, then top with other halves.", "Mix melted butter, mustard, poppy seeds, onion powder, and garlic powder.", "Brush mixture over tops of sliders.", "Cover with foil and bake 15 minutes.", "Remove foil and bake 5 more minutes until golden."],
        prep_time: 15, cook_time: 20, total_time: 35, servings: 12, difficulty: "easy", calories_per_serving: 265,
        seo_title: "Ham and Swiss Sliders Recipe - Perfect Party Food", seo_description: "Make irresistible ham and Swiss sliders in 35 minutes! Perfect for parties with buttery poppy seed glaze.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Ham and Swiss sliders on a baking tray", tips: "Don't skip the foil cover - it keeps sliders moist. Great make-ahead option for parties.",
        featured: false, status: "published", categories: ['easy-ham-recipes', 'easy-30-minute-recipes', 'easy-main-course-recipes']
      },
      {
        title: "Ham and Pineapple Pizza",
        slug: "ham-pineapple-pizza",
        description: "Classic Hawaiian-style pizza with ham and pineapple. Sweet and savory combination that's always a crowd pleaser.",
        ingredients: ["1 pizza dough (store-bought or homemade)", "1/2 cup pizza sauce", "2 cups mozzarella cheese, shredded", "1 1/2 cups cooked ham, diced", "1 cup pineapple chunks, drained", "1/4 cup red onion, thinly sliced", "2 tbsp olive oil"],
        instructions: ["Preheat oven to 475°F (245°C).", "Roll out pizza dough on floured surface.", "Transfer to pizza pan and brush edges with olive oil.", "Spread pizza sauce evenly, leaving border for crust.", "Sprinkle with half the cheese, then add ham, pineapple, and onion.", "Top with remaining cheese.", "Bake 12-15 minutes until crust is golden and cheese bubbles."],
        prep_time: 15, cook_time: 15, total_time: 30, servings: 8, difficulty: "easy", calories_per_serving: 285,
        seo_title: "Ham and Pineapple Pizza Recipe - Hawaiian Style", seo_description: "Make delicious Hawaiian ham and pineapple pizza in 30 minutes! Sweet and savory combination everyone loves.",
        featured_image_url: "/images/ai-generated-recipe.png", featured_image_alt: "Ham and pineapple pizza slice", tips: "Pat pineapple dry to prevent soggy pizza. Pre-bake crust for 5 minutes for extra crispiness.",
        featured: false, status: "published", categories: ['easy-ham-recipes', 'easy-30-minute-recipes', 'easy-main-course-recipes']
      }
    ];

    // Combine all recipes
    const allRecipes = [...cherryRecipes, ...codRecipes, ...cranberryRecipes, ...hamRecipes];

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

    console.log('\n✅ Successfully added all batch recipes!');
    console.log(`Added ${allRecipes.length} recipes total.`);

  } catch (error) {
    console.error('Error:', error);
  }
}

addBatchRecipes();