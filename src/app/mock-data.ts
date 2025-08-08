// src/app/mock-data.ts
// import type { RecipeDetailDto } from './recipes/dto/recipe-detail.dto';
// import type { AuthorDto } from './authors/dto/author.dto';
// import type { CuisineDto } from './cuisines/dto/cuisine.dto';
// import type { TagDto } from './common/dto/tag.dto';
// import type { MediaDto } from './common/media/media.dto';
// import type { RecipeIngredientDto } from './ingredients/dto/recipe-ingredient.dto';
// import type { InstructionStepDto } from './recipes/dto/instruction-step.dto';
// import type { NutritionDto } from './recipes/dto/nutrition.dto';
// import type { UserRecipeMetaDto } from './user-meta/dto/user-recipe-meta.dto';

import { RecipeDetailDTO } from "./modules/recipes/dto/recipe-detail.dto";


export interface UserMock {
  id: string;
  displayName: string;
  countryCode: string;
  email: string;
}

export const users: UserMock[] = [
  {
    id: 'u1',
    displayName: 'Alice Johnson',
    countryCode: 'US',
    email: 'alice@example.com'
  },
  {
    id: 'u2',
    displayName: 'Liam Vermeer',
    countryCode: 'NL',
    email: 'liam@example.com'
  }
];

export const recipes: RecipeDetailDTO[] = [
  {
    Recipe: {
      id: 'r1',
      Title: 'Classic Spaghetti Bolognese',
      Description: 'Rich Italian meat sauce served over al dente spaghetti.',
      Servings: "4",
      TotalTimeMinutes: 90,
      PrepTimeMinutes: 20,
      CookTimeMinutes: 70,
      Status: 'published',
      Language: 'en',
      CreatedAt: '2025-08-01T10:00:00Z',
      UpdatedAt: '2025-08-06T15:30:00Z'
    },
    Author: {
      id: 'a1',
      DisplayName: 'Chef Mario Rossi',
      CountryCode: 'IT'
    },
    Cuisine: {
      id: 'c1',
      Name: 'Italian',
      CountryCode: 'IT'
    },
    Tags: [
      { id: 't1', Name: 'pasta' },
      { id: 't2', Name: 'comfort food' }
    ],
    Media: [
      {
        id: 'm1',
        Type: 'image',
        Url: '/assets/images/spaghetti.jpg',
        Alt: 'Spaghetti Bolognese'
      }
    ],
    Ingredients: [
      {
        FoodItemId: 'f1',
        Amount: 500,
        Unit: 'g',
        TextOverride: '500g ground beef',
        Order: 1
      },
      {
        FoodItemId: 'f2',
        Amount: 1,
        Unit: 'piece',
        TextOverride: 'Large onion, diced',
        Order: 2
      },
      {
        FoodItemId: 'f3',
        Amount: 400,
        Unit: 'g',
        TextOverride: 'Canned chopped tomatoes',
        Order: 3
      }
    ],
    Steps: [
      {
        Order: 1,
        Text: 'Heat oil in a large pan, sauté onions until translucent.'
      },
      {
        Order: 2,
        Text: 'Add ground beef and cook until browned.'
      },
      {
        Order: 3,
        Text: 'Stir in tomatoes, simmer for 60 minutes.'
      }
    ],
    Nutrition: {
      Per: 'serving',
      Calories: 550,
      Protein_g: 25,
      Fat_g: 18,
      Carbs_g: 70
    },
    UserMeta: {
      UserId: 'u1',
      RecipeId: 'r1',
      IsFavorite: true,
      Rating: 5,
      Notes: 'Family loves this. Add extra garlic.'
    },
    AvgRating: 4.8
  },
  {
    Recipe: {
      id: 'r2',
      Title: 'Vegan Chickpea Curry',
      Description: 'A creamy coconut-based curry packed with chickpeas and veggies.',
      Servings: "4",
      TotalTimeMinutes: 40,
      PrepTimeMinutes: 10,
      CookTimeMinutes: 30,
      Status: 'published',
      Language: 'en',
      CreatedAt: '2025-07-15T09:00:00Z',
      UpdatedAt: '2025-07-20T12:45:00Z'
    },
    Author: {
      id: 'a2',
      DisplayName: 'Priya Sharma',
      CountryCode: 'IN'
    },
    Cuisine: {
      id: 'c2',
      Name: 'Indian',
      CountryCode: 'IN'
    },
    Tags: [
      { id: 't3', Name: 'vegan' },
      { id: 't4', Name: 'gluten-free' }
    ],
    Media: [
      {
        id: 'm2',
        Type: 'image',
        Url: '/assets/images/chickpea-curry.jpg',
        Alt: 'Chickpea Curry'
      }
    ],
    Ingredients: [
      {
        FoodItemId: 'f4',
        Amount: 2,
        Unit: 'cup',
        TextOverride: 'Cooked chickpeas',
        Order: 1
      },
      {
        FoodItemId: 'f5',
        Amount: 1,
        Unit: 'piece',
        TextOverride: 'Onion, chopped',
        Order: 2
      },
      {
        FoodItemId: 'f6',
        Amount: 400,
        Unit: 'ml',
        TextOverride: 'Coconut milk',
        Order: 3
      }
    ],
    Steps: [
      {
        Order: 1,
        Text: 'Sauté onion and spices until fragrant.'
      },
      {
        Order: 2,
        Text: 'Add chickpeas and coconut milk; bring to a boil.'
      },
      {
        Order: 3,
        Text: 'Simmer for 20 minutes and serve with rice.'
      }
    ],
    Nutrition: {
      Per: 'serving',
      Calories: 420,
      Protein_g: 12,
      Fat_g: 20,
      Carbs_g: 48
    },
    UserMeta: {
        
      UserId: 'u2',
      RecipeId: 'r2',
      IsFavorite: false,
      Rating: 4
    },
    AvgRating: 4.4
  }
];