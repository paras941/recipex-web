// Comprehensive recipe data with full details
export const recipes = [
    {
        id: 1,
        title: "Chicken Pan Pizza",
        slug: "chicken-pan-pizza",
        image: "/img/gallery/img_1.jpg",
        authorImg: "/img/top-chiefs/img_1.jpg",
        author: "Gordon Ramsay",
        category: "Italian",
        difficulty: "Medium",
        prepTime: 30,
        cookTime: 25,
        servings: 4,
        rating: 4.8,
        reviews: 234,
        calories: 450,
        description: "A delicious homemade pizza with crispy crust, tender chicken, and a perfect blend of cheeses. This recipe brings authentic Italian flavors to your kitchen.",
        ingredients: [
            { name: "Pizza dough", amount: "1", unit: "lb" },
            { name: "Chicken breast", amount: "2", unit: "cups, diced" },
            { name: "Mozzarella cheese", amount: "2", unit: "cups, shredded" },
            { name: "Pizza sauce", amount: "1", unit: "cup" },
            { name: "Bell peppers", amount: "1", unit: "cup, sliced" },
            { name: "Red onion", amount: "1/2", unit: "cup, sliced" },
            { name: "Italian seasoning", amount: "2", unit: "tsp" },
            { name: "Olive oil", amount: "2", unit: "tbsp" },
            { name: "Garlic", amount: "3", unit: "cloves, minced" },
            { name: "Salt and pepper", amount: "", unit: "to taste" }
        ],
        instructions: [
            "Preheat your oven to 475°F (245°C). If you have a pizza stone, place it in the oven to heat.",
            "Season the diced chicken with Italian seasoning, salt, and pepper. Sauté in olive oil until golden brown and cooked through. Set aside.",
            "Roll out the pizza dough on a floured surface to your desired thickness.",
            "Transfer the dough to a pizza pan or parchment-lined baking sheet.",
            "Spread the pizza sauce evenly over the dough, leaving a small border for the crust.",
            "Sprinkle half of the mozzarella cheese over the sauce.",
            "Add the cooked chicken, bell peppers, red onion, and minced garlic.",
            "Top with the remaining mozzarella cheese.",
            "Bake for 12-15 minutes until the crust is golden and the cheese is bubbly.",
            "Let cool for 2 minutes, slice, and serve immediately."
        ],
        nutrition: {
            calories: 450,
            protein: 28,
            carbs: 42,
            fat: 18,
            fiber: 3,
            sodium: 820
        },
        tags: ["pizza", "chicken", "italian", "dinner", "comfort food"]
    },
    {
        id: 2,
        title: "Spaghetti and Meatballs",
        slug: "spaghetti-and-meatballs",
        image: "/img/gallery/img_4.jpg",
        authorImg: "/img/top-chiefs/img_2.jpg",
        author: "Jamie Oliver",
        category: "Italian",
        difficulty: "Easy",
        prepTime: 20,
        cookTime: 40,
        servings: 6,
        rating: 4.9,
        reviews: 456,
        calories: 520,
        description: "Classic Italian-American comfort food with tender, juicy meatballs in a rich homemade marinara sauce, served over perfectly cooked spaghetti.",
        ingredients: [
            { name: "Spaghetti", amount: "1", unit: "lb" },
            { name: "Ground beef", amount: "1", unit: "lb" },
            { name: "Ground pork", amount: "1/2", unit: "lb" },
            { name: "Breadcrumbs", amount: "1/2", unit: "cup" },
            { name: "Parmesan cheese", amount: "1/2", unit: "cup, grated" },
            { name: "Egg", amount: "1", unit: "large" },
            { name: "Crushed tomatoes", amount: "28", unit: "oz can" },
            { name: "Fresh basil", amount: "1/4", unit: "cup, chopped" },
            { name: "Garlic", amount: "4", unit: "cloves, minced" },
            { name: "Olive oil", amount: "3", unit: "tbsp" }
        ],
        instructions: [
            "Combine ground beef, ground pork, breadcrumbs, egg, half the Parmesan, salt, and pepper in a large bowl.",
            "Mix gently until just combined - don't overmix or meatballs will be tough.",
            "Form mixture into 2-inch meatballs (about 18-20 meatballs).",
            "Heat olive oil in a large skillet over medium-high heat.",
            "Brown meatballs on all sides, about 8 minutes. Remove and set aside.",
            "In the same pan, add garlic and cook for 30 seconds until fragrant.",
            "Add crushed tomatoes and bring to a simmer.",
            "Return meatballs to the sauce, cover, and simmer for 20 minutes.",
            "Meanwhile, cook spaghetti according to package directions.",
            "Serve meatballs and sauce over spaghetti, topped with fresh basil and remaining Parmesan."
        ],
        nutrition: {
            calories: 520,
            protein: 32,
            carbs: 48,
            fat: 22,
            fiber: 4,
            sodium: 680
        },
        tags: ["pasta", "meatballs", "italian", "dinner", "classic"]
    },
    {
        id: 3,
        title: "American Cheese Burger",
        slug: "american-cheese-burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/top-chiefs/img_3.jpg",
        author: "Bobby Flay",
        category: "American",
        difficulty: "Easy",
        prepTime: 15,
        cookTime: 10,
        servings: 4,
        rating: 4.7,
        reviews: 892,
        calories: 650,
        description: "The ultimate American cheeseburger with a juicy beef patty, melted cheese, crispy lettuce, and all the classic toppings on a toasted brioche bun.",
        ingredients: [
            { name: "Ground beef (80/20)", amount: "1.5", unit: "lbs" },
            { name: "American cheese slices", amount: "4", unit: "slices" },
            { name: "Brioche buns", amount: "4", unit: "buns" },
            { name: "Lettuce", amount: "4", unit: "leaves" },
            { name: "Tomato", amount: "1", unit: "large, sliced" },
            { name: "Red onion", amount: "1/2", unit: "sliced" },
            { name: "Pickles", amount: "8", unit: "slices" },
            { name: "Ketchup", amount: "4", unit: "tbsp" },
            { name: "Mustard", amount: "2", unit: "tbsp" },
            { name: "Mayonnaise", amount: "4", unit: "tbsp" }
        ],
        instructions: [
            "Divide ground beef into 4 equal portions (about 6 oz each).",
            "Form into patties slightly larger than your buns (they'll shrink when cooking).",
            "Season generously with salt and pepper on both sides.",
            "Heat a cast iron skillet or grill over high heat.",
            "Cook patties for 3-4 minutes per side for medium doneness.",
            "Add cheese slice to each patty during the last minute of cooking.",
            "Toast the brioche buns on the grill or in a pan.",
            "Spread mayo on the bottom bun, add lettuce and tomato.",
            "Place the cheesy patty on top, add pickles, onion, ketchup, and mustard.",
            "Cap with the top bun and serve immediately with fries."
        ],
        nutrition: {
            calories: 650,
            protein: 42,
            carbs: 35,
            fat: 38,
            fiber: 2,
            sodium: 980
        },
        tags: ["burger", "american", "beef", "lunch", "grilled"]
    },
    {
        id: 4,
        title: "Mutton Biriyani",
        slug: "mutton-biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/top-chiefs/img_5.jpg",
        author: "Sanjeev Kapoor",
        category: "Indian",
        difficulty: "Hard",
        prepTime: 45,
        cookTime: 90,
        servings: 8,
        rating: 4.9,
        reviews: 1203,
        calories: 580,
        description: "Aromatic Hyderabadi-style mutton biriyani with tender meat, fragrant basmati rice, and a blend of exotic spices. A royal dish fit for celebrations.",
        ingredients: [
            { name: "Mutton", amount: "2", unit: "lbs, cut into pieces" },
            { name: "Basmati rice", amount: "3", unit: "cups" },
            { name: "Yogurt", amount: "1", unit: "cup" },
            { name: "Onions", amount: "4", unit: "large, sliced" },
            { name: "Ginger-garlic paste", amount: "3", unit: "tbsp" },
            { name: "Biriyani masala", amount: "2", unit: "tbsp" },
            { name: "Saffron", amount: "1/2", unit: "tsp in warm milk" },
            { name: "Ghee", amount: "4", unit: "tbsp" },
            { name: "Fresh mint", amount: "1/2", unit: "cup" },
            { name: "Fresh cilantro", amount: "1/2", unit: "cup" }
        ],
        instructions: [
            "Marinate mutton with yogurt, ginger-garlic paste, biriyani masala, and salt for at least 2 hours.",
            "Soak basmati rice for 30 minutes, then parboil until 70% cooked. Drain and set aside.",
            "Fry sliced onions in ghee until deep golden brown. Remove half for garnish.",
            "In the same pot, add marinated mutton and cook on medium heat for 30 minutes.",
            "Layer the parboiled rice over the cooked mutton.",
            "Drizzle saffron milk, add mint and cilantro.",
            "Seal the pot with dough or tight-fitting lid for dum cooking.",
            "Cook on low heat for 40 minutes.",
            "Gently mix layers before serving.",
            "Garnish with fried onions and serve with raita."
        ],
        nutrition: {
            calories: 580,
            protein: 35,
            carbs: 52,
            fat: 24,
            fiber: 3,
            sodium: 720
        },
        tags: ["biriyani", "indian", "mutton", "rice", "spicy"]
    },
    {
        id: 5,
        title: "Japanese Sushi Roll",
        slug: "japanese-sushi-roll",
        image: "/img/gallery/img_10.jpg",
        authorImg: "/img/top-chiefs/img_6.jpg",
        author: "Masaharu Morimoto",
        category: "Japanese",
        difficulty: "Hard",
        prepTime: 60,
        cookTime: 30,
        servings: 4,
        rating: 4.6,
        reviews: 567,
        calories: 320,
        description: "Authentic Japanese sushi rolls with fresh fish, perfectly seasoned rice, and crispy nori. Master the art of sushi making at home.",
        ingredients: [
            { name: "Sushi rice", amount: "2", unit: "cups" },
            { name: "Rice vinegar", amount: "1/4", unit: "cup" },
            { name: "Nori sheets", amount: "8", unit: "sheets" },
            { name: "Fresh salmon", amount: "8", unit: "oz, sashimi grade" },
            { name: "Fresh tuna", amount: "8", unit: "oz, sashimi grade" },
            { name: "Cucumber", amount: "1", unit: "julienned" },
            { name: "Avocado", amount: "2", unit: "sliced" },
            { name: "Soy sauce", amount: "4", unit: "tbsp" },
            { name: "Wasabi", amount: "2", unit: "tsp" },
            { name: "Pickled ginger", amount: "4", unit: "tbsp" }
        ],
        instructions: [
            "Rinse sushi rice until water runs clear. Cook according to package directions.",
            "Season cooked rice with rice vinegar, sugar, and salt while still warm.",
            "Fan the rice while mixing to achieve glossy texture.",
            "Place a nori sheet on bamboo mat, shiny side down.",
            "Spread rice evenly, leaving 1-inch border at the top.",
            "Lay fish and vegetables in a line across the center.",
            "Roll tightly using the bamboo mat, sealing the edge with water.",
            "Let the roll rest seam-side down for 1 minute.",
            "Cut into 6-8 pieces with a wet, sharp knife.",
            "Serve with soy sauce, wasabi, and pickled ginger."
        ],
        nutrition: {
            calories: 320,
            protein: 22,
            carbs: 38,
            fat: 8,
            fiber: 2,
            sodium: 450
        },
        tags: ["sushi", "japanese", "seafood", "healthy", "fresh"]
    },
    {
        id: 6,
        title: "Thai Green Curry",
        slug: "thai-green-curry",
        image: "/img/gallery/img_2.jpg",
        authorImg: "/img/top-chiefs/img_4.jpg",
        author: "Jet Tila",
        category: "Thai",
        difficulty: "Medium",
        prepTime: 20,
        cookTime: 25,
        servings: 4,
        rating: 4.8,
        reviews: 342,
        calories: 420,
        description: "Creamy and aromatic Thai green curry with tender chicken, fresh vegetables, and authentic Thai flavors. Perfect balance of spicy and savory.",
        ingredients: [
            { name: "Chicken thighs", amount: "1.5", unit: "lbs, cubed" },
            { name: "Coconut milk", amount: "2", unit: "cans (14 oz each)" },
            { name: "Green curry paste", amount: "3", unit: "tbsp" },
            { name: "Thai basil", amount: "1", unit: "cup" },
            { name: "Bamboo shoots", amount: "1", unit: "cup" },
            { name: "Thai eggplant", amount: "1", unit: "cup, quartered" },
            { name: "Fish sauce", amount: "2", unit: "tbsp" },
            { name: "Palm sugar", amount: "1", unit: "tbsp" },
            { name: "Kaffir lime leaves", amount: "4", unit: "leaves" },
            { name: "Vegetable oil", amount: "2", unit: "tbsp" }
        ],
        instructions: [
            "Heat oil in a wok or large pan over medium-high heat.",
            "Add curry paste and fry for 1 minute until fragrant.",
            "Pour in half the coconut milk and stir until oil separates.",
            "Add chicken pieces and cook for 5 minutes.",
            "Add remaining coconut milk, bamboo shoots, and eggplant.",
            "Simmer for 15 minutes until chicken is cooked through.",
            "Season with fish sauce and palm sugar.",
            "Add kaffir lime leaves and Thai basil.",
            "Stir and remove from heat immediately.",
            "Serve hot with jasmine rice."
        ],
        nutrition: {
            calories: 420,
            protein: 28,
            carbs: 12,
            fat: 32,
            fiber: 3,
            sodium: 680
        },
        tags: ["curry", "thai", "chicken", "spicy", "coconut"]
    },
    {
        id: 7,
        title: "Classic Tiramisu",
        slug: "classic-tiramisu",
        image: "/img/gallery/img_3.jpg",
        authorImg: "/img/top-chiefs/img_1.jpg",
        author: "Gordon Ramsay",
        category: "Dessert",
        difficulty: "Medium",
        prepTime: 30,
        cookTime: 0,
        servings: 8,
        rating: 4.9,
        reviews: 789,
        calories: 380,
        description: "Authentic Italian tiramisu with layers of coffee-soaked ladyfingers and silky mascarpone cream. No baking required!",
        ingredients: [
            { name: "Mascarpone cheese", amount: "16", unit: "oz" },
            { name: "Ladyfinger cookies", amount: "24", unit: "cookies" },
            { name: "Espresso", amount: "1.5", unit: "cups, cooled" },
            { name: "Egg yolks", amount: "4", unit: "large" },
            { name: "Sugar", amount: "3/4", unit: "cup" },
            { name: "Heavy cream", amount: "1", unit: "cup" },
            { name: "Kahlua", amount: "2", unit: "tbsp" },
            { name: "Cocoa powder", amount: "2", unit: "tbsp" },
            { name: "Dark chocolate", amount: "2", unit: "oz, shaved" },
            { name: "Vanilla extract", amount: "1", unit: "tsp" }
        ],
        instructions: [
            "Whisk egg yolks and sugar until thick and pale yellow.",
            "Add mascarpone and mix until smooth.",
            "In a separate bowl, whip heavy cream to stiff peaks.",
            "Fold whipped cream into mascarpone mixture.",
            "Mix espresso with Kahlua in a shallow dish.",
            "Quickly dip ladyfingers in coffee mixture (don't soak).",
            "Layer dipped ladyfingers in a 9x13 dish.",
            "Spread half the mascarpone cream over ladyfingers.",
            "Repeat layers and refrigerate for at least 4 hours.",
            "Dust with cocoa powder and chocolate shavings before serving."
        ],
        nutrition: {
            calories: 380,
            protein: 8,
            carbs: 32,
            fat: 24,
            fiber: 1,
            sodium: 120
        },
        tags: ["dessert", "italian", "tiramisu", "coffee", "no-bake"]
    },
    {
        id: 8,
        title: "Mexican Tacos Al Pastor",
        slug: "mexican-tacos-al-pastor",
        image: "/img/gallery/img_7.jpg",
        authorImg: "/img/top-chiefs/img_2.jpg",
        author: "Jamie Oliver",
        category: "Mexican",
        difficulty: "Medium",
        prepTime: 120,
        cookTime: 20,
        servings: 6,
        rating: 4.7,
        reviews: 423,
        calories: 340,
        description: "Authentic Mexican street tacos with marinated pork, fresh pineapple, cilantro, and onion. A taste of Mexico City at home.",
        ingredients: [
            { name: "Pork shoulder", amount: "2", unit: "lbs, thinly sliced" },
            { name: "Dried guajillo chiles", amount: "4", unit: "chiles" },
            { name: "Pineapple", amount: "1", unit: "cup, diced" },
            { name: "Corn tortillas", amount: "12", unit: "small" },
            { name: "White onion", amount: "1", unit: "cup, diced" },
            { name: "Fresh cilantro", amount: "1", unit: "cup, chopped" },
            { name: "Achiote paste", amount: "2", unit: "tbsp" },
            { name: "White vinegar", amount: "2", unit: "tbsp" },
            { name: "Lime", amount: "4", unit: "cut into wedges" },
            { name: "Salsa verde", amount: "1", unit: "cup" }
        ],
        instructions: [
            "Rehydrate dried chiles in hot water for 20 minutes.",
            "Blend chiles with achiote paste, vinegar, and spices.",
            "Marinate pork in chile mixture for at least 2 hours.",
            "Grill or pan-fry pork until charred and cooked through.",
            "Grill pineapple until caramelized.",
            "Chop pork and pineapple into small pieces.",
            "Warm corn tortillas on a dry skillet.",
            "Fill tortillas with pork and pineapple.",
            "Top with onion, cilantro, and salsa verde.",
            "Serve with lime wedges."
        ],
        nutrition: {
            calories: 340,
            protein: 24,
            carbs: 28,
            fat: 14,
            fiber: 4,
            sodium: 520
        },
        tags: ["tacos", "mexican", "pork", "street food", "authentic"]
    },
    {
        id: 9,
        title: "Mediterranean Falafel Bowl",
        slug: "mediterranean-falafel-bowl",
        image: "/img/gallery/img_8.jpg",
        authorImg: "/img/top-chiefs/img_3.jpg",
        author: "Bobby Flay",
        category: "Mediterranean",
        difficulty: "Easy",
        prepTime: 25,
        cookTime: 15,
        servings: 4,
        rating: 4.6,
        reviews: 298,
        calories: 480,
        description: "Crispy homemade falafel served in a vibrant bowl with hummus, fresh vegetables, and creamy tahini sauce.",
        ingredients: [
            { name: "Chickpeas (dried)", amount: "1", unit: "cup, soaked overnight" },
            { name: "Fresh parsley", amount: "1", unit: "cup" },
            { name: "Fresh cilantro", amount: "1/2", unit: "cup" },
            { name: "Garlic", amount: "4", unit: "cloves" },
            { name: "Cumin", amount: "1", unit: "tsp" },
            { name: "Quinoa", amount: "1", unit: "cup, cooked" },
            { name: "Hummus", amount: "1", unit: "cup" },
            { name: "Cherry tomatoes", amount: "1", unit: "cup, halved" },
            { name: "Cucumber", amount: "1", unit: "diced" },
            { name: "Tahini sauce", amount: "1/2", unit: "cup" }
        ],
        instructions: [
            "Drain soaked chickpeas and pat dry.",
            "Blend chickpeas, herbs, garlic, and spices until coarse.",
            "Form mixture into small patties or balls.",
            "Refrigerate falafel for 30 minutes to firm up.",
            "Fry in oil at 350°F until golden brown, about 3-4 minutes.",
            "Prepare quinoa according to package directions.",
            "Assemble bowls with quinoa as the base.",
            "Add falafel, hummus, tomatoes, and cucumber.",
            "Drizzle with tahini sauce.",
            "Garnish with fresh herbs and serve."
        ],
        nutrition: {
            calories: 480,
            protein: 18,
            carbs: 52,
            fat: 22,
            fiber: 12,
            sodium: 380
        },
        tags: ["falafel", "mediterranean", "vegetarian", "healthy", "bowl"]
    },
    {
        id: 10,
        title: "French Croissants",
        slug: "french-croissants",
        image: "/img/gallery/img_9.jpg",
        authorImg: "/img/top-chiefs/img_4.jpg",
        author: "Dominique Ansel",
        category: "French",
        difficulty: "Hard",
        prepTime: 180,
        cookTime: 20,
        servings: 12,
        rating: 4.8,
        reviews: 567,
        calories: 280,
        description: "Buttery, flaky French croissants with perfect lamination. A labor of love that results in bakery-quality pastries.",
        ingredients: [
            { name: "All-purpose flour", amount: "4", unit: "cups" },
            { name: "European butter", amount: "1.5", unit: "cups, cold" },
            { name: "Whole milk", amount: "1", unit: "cup, warm" },
            { name: "Active dry yeast", amount: "2.25", unit: "tsp" },
            { name: "Sugar", amount: "1/4", unit: "cup" },
            { name: "Salt", amount: "1.5", unit: "tsp" },
            { name: "Egg", amount: "2", unit: "large" },
            { name: "Butter (for dough)", amount: "2", unit: "tbsp, softened" },
            { name: "Egg wash", amount: "1", unit: "egg + 1 tbsp milk" },
            { name: "Vanilla extract", amount: "1", unit: "tsp" }
        ],
        instructions: [
            "Activate yeast in warm milk with a pinch of sugar for 10 minutes.",
            "Mix flour, sugar, salt, and softened butter. Add yeast mixture and 1 egg.",
            "Knead until smooth, wrap, and refrigerate for 1 hour.",
            "Pound cold butter into a flat rectangle.",
            "Roll dough, place butter in center, and fold like a letter.",
            "Refrigerate 30 minutes, then roll and fold again. Repeat 3 times.",
            "Roll final dough to 1/4-inch thickness.",
            "Cut triangles and roll from base to tip.",
            "Proof for 2 hours until doubled in size.",
            "Brush with egg wash and bake at 400°F for 15-18 minutes until golden."
        ],
        nutrition: {
            calories: 280,
            protein: 5,
            carbs: 28,
            fat: 16,
            fiber: 1,
            sodium: 320
        },
        tags: ["croissant", "french", "pastry", "breakfast", "baking"]
    },
    {
        id: 11,
        title: "Korean Bibimbap",
        slug: "korean-bibimbap",
        image: "/img/gallery/img_9.jpg",
        authorImg: "/img/top-chiefs/img_5.jpg",
        author: "Judy Joo",
        category: "Korean",
        difficulty: "Medium",
        prepTime: 40,
        cookTime: 20,
        servings: 4,
        rating: 4.7,
        reviews: 389,
        calories: 520,
        description: "Colorful Korean rice bowl with assorted vegetables, beef, and a perfectly fried egg, all topped with spicy gochujang sauce.",
        ingredients: [
            { name: "Short grain rice", amount: "2", unit: "cups" },
            { name: "Ground beef", amount: "8", unit: "oz" },
            { name: "Spinach", amount: "2", unit: "cups" },
            { name: "Bean sprouts", amount: "1", unit: "cup" },
            { name: "Carrots", amount: "1", unit: "cup, julienned" },
            { name: "Zucchini", amount: "1", unit: "cup, julienned" },
            { name: "Shiitake mushrooms", amount: "1", unit: "cup, sliced" },
            { name: "Eggs", amount: "4", unit: "large" },
            { name: "Gochujang", amount: "4", unit: "tbsp" },
            { name: "Sesame oil", amount: "3", unit: "tbsp" }
        ],
        instructions: [
            "Cook rice according to package directions.",
            "Blanch spinach and bean sprouts separately, season with sesame oil and salt.",
            "Sauté carrots, zucchini, and mushrooms separately until tender.",
            "Cook ground beef with soy sauce, garlic, and sesame oil.",
            "Fry eggs sunny-side up.",
            "Arrange rice in bowls.",
            "Arrange vegetables and beef in sections on top of rice.",
            "Place fried egg in the center.",
            "Drizzle with gochujang and sesame oil.",
            "Mix everything together before eating."
        ],
        nutrition: {
            calories: 520,
            protein: 28,
            carbs: 58,
            fat: 18,
            fiber: 5,
            sodium: 680
        },
        tags: ["bibimbap", "korean", "rice bowl", "healthy", "colorful"]
    },
    {
        id: 12,
        title: "New York Cheesecake",
        slug: "new-york-cheesecake",
        image: "/img/gallery/img_10.jpg",
        authorImg: "/img/top-chiefs/img_6.jpg",
        author: "Christina Tosi",
        category: "Dessert",
        difficulty: "Medium",
        prepTime: 30,
        cookTime: 75,
        servings: 12,
        rating: 4.9,
        reviews: 1045,
        calories: 450,
        description: "Dense, creamy New York-style cheesecake with a graham cracker crust. The ultimate indulgent dessert.",
        ingredients: [
            { name: "Cream cheese", amount: "32", unit: "oz, room temp" },
            { name: "Graham crackers", amount: "2", unit: "cups, crushed" },
            { name: "Butter", amount: "6", unit: "tbsp, melted" },
            { name: "Sugar", amount: "1", unit: "cup" },
            { name: "Sour cream", amount: "1", unit: "cup" },
            { name: "Heavy cream", amount: "1/2", unit: "cup" },
            { name: "Eggs", amount: "4", unit: "large" },
            { name: "Vanilla extract", amount: "2", unit: "tsp" },
            { name: "Lemon zest", amount: "1", unit: "tsp" },
            { name: "All-purpose flour", amount: "2", unit: "tbsp" }
        ],
        instructions: [
            "Preheat oven to 325°F. Wrap springform pan bottom with foil.",
            "Mix graham crackers with melted butter and press into pan.",
            "Bake crust for 10 minutes, then cool.",
            "Beat cream cheese until smooth, scraping sides often.",
            "Add sugar and beat until incorporated.",
            "Add sour cream, heavy cream, and vanilla.",
            "Add eggs one at a time, mixing on low speed.",
            "Fold in flour and lemon zest.",
            "Pour over crust and bake in water bath for 1 hour 15 minutes.",
            "Turn off oven, crack door, and let cool for 1 hour. Refrigerate overnight."
        ],
        nutrition: {
            calories: 450,
            protein: 8,
            carbs: 35,
            fat: 32,
            fiber: 0,
            sodium: 380
        },
        tags: ["cheesecake", "dessert", "new york", "cream cheese", "baking"]
    }
];

// Get all unique categories
export const getCategories = () => {
    const categories = [...new Set(recipes.map(r => r.category))];
    return ['All', ...categories.sort()];
};

// Get all unique tags
export const getAllTags = () => {
    const tags = recipes.flatMap(r => r.tags);
    return [...new Set(tags)].sort();
};

// Get recipe by id
export const getRecipeById = (id) => {
    return recipes.find(r => r.id === parseInt(id));
};

// Get recipe by slug
export const getRecipeBySlug = (slug) => {
    return recipes.find(r => r.slug === slug);
};

// Search recipes
export const searchRecipes = (query, filters = {}) => {
    let results = [...recipes];
    
    // Text search
    if (query) {
        const searchTerm = query.toLowerCase();
        results = results.filter(r => 
            r.title.toLowerCase().includes(searchTerm) ||
            r.description.toLowerCase().includes(searchTerm) ||
            r.tags.some(t => t.includes(searchTerm)) ||
            r.category.toLowerCase().includes(searchTerm) ||
            r.ingredients.some(i => i.name.toLowerCase().includes(searchTerm))
        );
    }
    
    // Category filter
    if (filters.category && filters.category !== 'All') {
        results = results.filter(r => r.category === filters.category);
    }
    
    // Difficulty filter
    if (filters.difficulty && filters.difficulty !== 'All') {
        results = results.filter(r => r.difficulty === filters.difficulty);
    }
    
    // Time filter (max total time)
    if (filters.maxTime) {
        results = results.filter(r => (r.prepTime + r.cookTime) <= filters.maxTime);
    }
    
    // Sorting
    if (filters.sortBy) {
        switch (filters.sortBy) {
            case 'rating':
                results.sort((a, b) => b.rating - a.rating);
                break;
            case 'time':
                results.sort((a, b) => (a.prepTime + a.cookTime) - (b.prepTime + b.cookTime));
                break;
            case 'difficulty':
                const diffOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
                results.sort((a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty]);
                break;
            case 'newest':
                results.sort((a, b) => b.id - a.id);
                break;
            default:
                break;
        }
    }
    
    return results;
};

// Get featured recipes
export const getFeaturedRecipes = () => {
    return recipes
        .filter(r => r.rating >= 4.8)
        .sort((a, b) => b.reviews - a.reviews)
        .slice(0, 4);
};

// Get recipes by category
export const getRecipesByCategory = (category) => {
    return recipes.filter(r => r.category === category);
};

// Get similar recipes
export const getSimilarRecipes = (recipeId, limit = 4) => {
    const recipe = getRecipeById(recipeId);
    if (!recipe) return [];
    
    return recipes
        .filter(r => r.id !== recipeId)
        .map(r => ({
            ...r,
            similarity: r.category === recipe.category ? 2 : 0 +
                r.tags.filter(t => recipe.tags.includes(t)).length
        }))
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, limit);
};
