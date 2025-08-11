import { RecipeDetailDTO } from "./modules/foodBook/recipes/dto/recipe-detail.dto";

export const Users = [
  {
    Id: 'u1',
    DisplayName: 'Alice Johnson',
    CountryCode: 'US',
    Email: 'alice@example.com'
  },
  {
    Id: 'u2',
    DisplayName: 'Liam Vermeer',
    CountryCode: 'NL',
    Email: 'liam@example.com'
  }
];

export const Recipes: RecipeDetailDTO[] = [
  {
    Recipe: {
      id: 'r1',
      Title: 'Classic Spaghetti Bolognese',
      Description: 'Rich Italian meat sauce served over al dente spaghetti.',
      Servings: '4',
      TotalTimeMinutes: 90,
      PrepTimeMinutes: 20,
      CookTimeMinutes: 70,
      CuisineId: 'c1',
      Course: 'dinner',
      Status: 'Published',
      SourceId: 's1',
      Ingredients: [
        '500g ground beef',
        '1 large onion, diced',
        '400g canned chopped tomatoes'
      ],
      Instructions:
        'Heat oil in a large pan, sauté onions until translucent. Add ground beef and cook until browned. Stir in tomatoes, simmer for 60 minutes.',
      Language: 'en'
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
      { id: 't1', Name: 'Pasta' },
      { id: 't2', Name: 'Comfort Food' }
    ],
    Media: 
      {
        id: 'm1',
        Type: 'image',
        Url: '/assets/images/spaghetti.jpg',
        Alt: 'Spaghetti Bolognese'
      }
    ,
    UserMeta: {
      id: 'um1',
      UserId: 'u1',
      RecipeId: 'r1',
      IsFavorite: true,
      IsMadeBefore: true,
      Rating: 5,
      Notes: 'Family loves this. Add extra garlic.'
    },
    AvgRating: 4.8
  },
  {
    Recipe: {
      id: 'r2',
      Title: 'Vegan Chickpea Curry',
      Description:
        'A creamy coconut-based curry packed with chickpeas and veggies.',
      Servings: '4',
      TotalTimeMinutes: 40,
      PrepTimeMinutes: 10,
      CookTimeMinutes: 30,
      CuisineId: 'c2',
      Course: 'dinner',
      Status: 'Published',
      SourceId: 's2',
      Ingredients: [
        '2 cups cooked chickpeas',
        '1 onion, chopped',
        '400ml coconut milk'
      ],
      Instructions:
        'Sauté onion and spices until fragrant. Add chickpeas and coconut milk; bring to a boil. Simmer for 20 minutes and serve with rice.',
      Language: 'en'
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
      { id: 't3', Name: 'Vegan' },
      { id: 't4', Name: 'Gluten-Free' }
    ],
    Media: 
      {
        id: 'm2',
        Type: 'image',
        Url: '/assets/images/chickpea-curry.jpg',
        Alt: 'Chickpea Curry'
      }
    ,
    UserMeta: {
      id: 'um2',
      UserId: 'u2',
      RecipeId: 'r2',
      IsFavorite: false,
      IsMadeBefore: true,
      Rating: 4
    },
    AvgRating: 4.4
  }
];