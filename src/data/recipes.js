// This is our "database" of recipes
// In a real app with backend, this would come from MongoDB

export const recipesData = [
  {
    id: 1,
    title: 'Mediterranean Quinoa Bowl',
    category: 'Healthy',
    time: '20 min',
    timeValue: 20,
    difficulty: 'Easy',
    calories: '320',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
    ingredients: [
      '1 cup quinoa, rinsed',
      '2 cups vegetable broth',
      '1 cucumber, diced',
      '1 cup cherry tomatoes, halved',
      '1/2 red onion, finely chopped',
      '1/3 cup kalamata olives',
      '1/2 cup feta cheese, crumbled',
      '3 tbsp olive oil',
      '2 tbsp lemon juice',
      '1 tsp dried oregano',
      'Salt and pepper to taste'
    ],
    instructions: `1. Cook quinoa in vegetable broth according to package instructions. Let cool slightly.

2. In a large bowl, combine diced cucumber, cherry tomatoes, red onion, and olives.

3. In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.

4. Add cooked quinoa to the vegetable bowl and pour dressing over top.

5. Toss gently to combine and top with crumbled feta cheese.

6. Serve immediately or refrigerate for up to 3 days.

💡 Tips: For extra protein, add grilled chicken or chickpeas.`
  },
  {
    id: 2,
    title: 'Creamy Mushroom Pasta',
    category: 'Quick & Easy',
    time: '25 min',
    timeValue: 25,
    difficulty: 'Easy',
    calories: '450',
    servings: 3,
    image: 'https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=800',
    ingredients: [
      '300g pasta (fettuccine or penne)',
      '300g mushrooms, sliced',
      '3 cloves garlic, minced',
      '1 cup heavy cream',
      '1/2 cup parmesan cheese, grated',
      '2 tbsp butter',
      '2 tbsp olive oil',
      '1 tsp dried thyme',
      'Salt and black pepper to taste',
      'Fresh parsley for garnish'
    ],
    instructions: `1. Cook pasta in salted boiling water according to package directions. Reserve 1/2 cup pasta water, then drain.

2. In a large skillet, heat olive oil and butter over medium heat.

3. Add mushrooms and cook for 5-6 minutes until golden brown.

4. Add garlic and thyme, cook for 1 minute until fragrant.

5. Pour in heavy cream and simmer for 3-4 minutes until slightly thickened.

6. Stir in parmesan cheese until melted and smooth.

7. Add cooked pasta to the sauce, toss to coat. Add reserved pasta water if needed.

8. Season with salt and pepper, garnish with parsley.

💡 Tips: Use a mix of mushroom varieties for deeper flavor.`
  },
  {
    id: 3,
    title: 'Chocolate Lava Cake',
    category: 'Desserts',
    time: '30 min',
    timeValue: 30,
    difficulty: 'Medium',
    calories: '380',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800',
    ingredients: [
      '100g dark chocolate (70% cocoa)',
      '100g butter',
      '2 eggs',
      '2 egg yolks',
      '1/2 cup powdered sugar',
      '2 tbsp all-purpose flour',
      'Butter for greasing',
      'Cocoa powder for dusting',
      'Vanilla ice cream for serving'
    ],
    instructions: `1. Preheat oven to 425°F (220°C). Grease 4 ramekins with butter and dust with cocoa powder.

2. Melt chocolate and butter together in a heatproof bowl over simmering water. Stir until smooth.

3. In a separate bowl, whisk eggs, egg yolks, and sugar until pale and thick (about 3 minutes).

4. Fold chocolate mixture into egg mixture gently.

5. Sift in flour and fold until just combined.

6. Divide batter among prepared ramekins.

7. Bake for 12-14 minutes. The edges should be firm but center still soft.

8. Let cool for 1 minute, then invert onto plates.

9. Serve immediately with vanilla ice cream.

⚠️ Important: Do not overbake or the center won't be molten!`
  },
  {
    id: 4,
    title: 'Grilled Salmon with Asparagus',
    category: 'Healthy',
    time: '25 min',
    timeValue: 25,
    difficulty: 'Medium',
    calories: '280',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800',
    ingredients: [
      '2 salmon fillets (6 oz each)',
      '1 bunch asparagus',
      '2 tbsp olive oil',
      '1 lemon (half sliced, half juiced)',
      '3 cloves garlic, minced',
      '1 tsp dried dill',
      'Salt and black pepper to taste',
      'Fresh dill for garnish'
    ],
    instructions: `1. Preheat grill or grill pan to medium-high heat.

2. Pat salmon dry and season with salt, pepper, and dried dill.

3. Toss asparagus with 1 tbsp olive oil, salt, and pepper.

4. Brush salmon with remaining olive oil and lemon juice.

5. Place lemon slices on top of salmon fillets.

6. Grill salmon for 4-5 minutes per side until flaky.

7. Grill asparagus for 3-4 minutes, turning occasionally.

8. Serve salmon over asparagus, garnish with fresh dill.

💡 Tips: The salmon is done when it flakes easily with a fork.`
  },
  {
    id: 5,
    title: 'Vegetable Stir Fry',
    category: 'Quick & Easy',
    time: '15 min',
    timeValue: 15,
    difficulty: 'Easy',
    calories: '200',
    servings: 2,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800',
    ingredients: [
      '2 cups mixed vegetables (bell peppers, broccoli, carrots)',
      '1 block firm tofu, cubed (or 200g chicken)',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tbsp rice vinegar',
      '2 cloves garlic, minced',
      '1 tsp ginger, grated',
      '1 tbsp cornstarch',
      '2 tbsp water',
      '2 green onions, sliced',
      'Sesame seeds for garnish'
    ],
    instructions: `1. Mix soy sauce, sesame oil, rice vinegar, garlic, and ginger in a small bowl.

2. Dissolve cornstarch in water and add to the sauce mixture.

3. Heat a wok or large skillet over high heat.

4. Add tofu/chicken and cook until golden (3-4 minutes). Remove and set aside.

5. Add vegetables to the pan and stir-fry for 3-4 minutes until crisp-tender.

6. Return protein to pan and pour sauce over everything.

7. Cook for 1-2 minutes until sauce thickens and coats the ingredients.

8. Garnish with green onions and sesame seeds.

9. Serve over rice or noodles.

💡 Tips: Keep the heat high and work quickly for best texture!`
  },
  {
    id: 6,
    title: 'Classic Beef Wellington',
    category: 'Desserts',
    time: '90 min',
    timeValue: 90,
    difficulty: 'Hard',
    calories: '650',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800',
    ingredients: [
      '1 kg beef tenderloin',
      '500g puff pastry',
      '300g mushrooms, finely chopped',
      '100g prosciutto',
      '2 tbsp Dijon mustard',
      '1 egg, beaten (for egg wash)',
      '2 tbsp butter',
      '1 tbsp olive oil',
      'Salt and black pepper to taste',
      'Fresh thyme sprigs'
    ],
    instructions: `1. Season beef with salt and pepper. Sear in hot oil for 2-3 minutes per side. Brush with mustard while warm. Cool completely.

2. Sauté mushrooms in butter until all moisture evaporates (about 10 minutes). Season and cool.

3. Lay plastic wrap on counter. Arrange prosciutto slices overlapping to form a rectangle.

4. Spread mushroom mixture over prosciutto. Place beef at one end.

5. Using plastic wrap, roll beef tightly in prosciutto-mushroom layer. Twist ends and refrigerate 15 minutes.

6. Roll out puff pastry. Unwrap beef and place on pastry. Roll up, sealing edges with egg wash.

7. Place seam-side down on baking sheet. Brush with egg wash and score decorative patterns.

8. Bake at 400°F (200°C) for 35-40 minutes for medium-rare.

9. Rest for 10 minutes before slicing.

⚠️ Tip: Use a meat thermometer - 135°F for medium-rare.`
  },
  {
    id: 7,
    title: 'Fresh Garden Salad',
    category: 'Healthy',
    time: '15 min',
    timeValue: 15,
    difficulty: 'Easy',
    calories: '180',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    ingredients: [
      '6 cups mixed salad greens',
      '1 cucumber, sliced',
      '2 tomatoes, diced',
      '1/2 red onion, thinly sliced',
      '1/4 cup olives',
      '1/4 cup feta cheese',
      '1/4 cup olive oil',
      '2 tbsp balsamic vinegar',
      '1 tsp honey',
      '1 tsp Dijon mustard',
      'Salt and pepper to taste'
    ],
    instructions: `1. Wash and dry salad greens thoroughly.

2. In a large bowl, combine greens, cucumber, tomatoes, and red onion.

3. In a small jar, combine olive oil, balsamic vinegar, honey, mustard, salt, and pepper.

4. Shake dressing until well emulsified.

5. Drizzle dressing over salad just before serving.

6. Top with olives and crumbled feta cheese.

7. Toss gently and serve immediately.

💡 Tips: Add grilled chicken or chickpeas for a complete meal.`
  },
  {
    id: 8,
    title: 'Homemade Pizza',
    category: 'Quick & Easy',
    time: '45 min',
    timeValue: 45,
    difficulty: 'Medium',
    calories: '280',
    servings: 4,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
    ingredients: [
      '2 cups all-purpose flour',
      '1 packet instant yeast',
      '1 tsp sugar',
      '1 tsp salt',
      '3/4 cup warm water',
      '2 tbsp olive oil',
      '1/2 cup pizza sauce',
      '2 cups mozzarella cheese, shredded',
      'Your favorite toppings'
    ],
    instructions: `1. Mix flour, yeast, sugar, and salt in a large bowl.

2. Add warm water and olive oil. Mix until dough forms.

3. Knead on floured surface for 5-7 minutes until smooth.

4. Place in oiled bowl, cover, and let rise for 30 minutes.

5. Preheat oven to 475°F (245°C).

6. Roll out dough into a 12-inch circle.

7. Transfer to pizza pan, spread sauce, add cheese and toppings.

8. Bake for 12-15 minutes until crust is golden and cheese bubbly.

9. Let cool for 2 minutes before slicing.

💡 Tips: For crispy crust, preheat your pizza pan in the oven.`
  }
];

// Helper function to get recipe by ID
export const getRecipeById = (id) => {
  return recipesData.find(recipe => recipe.id === parseInt(id));
};

// Helper function to get recipes by category
export const getRecipesByCategory = (category) => {
  if (category === 'all') return recipesData;
  return recipesData.filter(recipe => 
    recipe.category.toLowerCase() === category.toLowerCase()
  );
};