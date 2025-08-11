import { Routes } from "@angular/router";

export const FoodBookRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./recipes/recipemain').then(m => m.Recipemain),
    children: [
      {
        path: 'all',
        loadComponent: () => import('./recipes/recipelist/recipelist').then(m => m.Recipelist)
      },
      {
        path: 'add',
        loadComponent: () => import('./recipes/addrecipe/addrecipe').then(m => m.Addrecipe)
      },
      {
        path: 'my',
        loadComponent: () => import('./recipes/myrecipes/myrecipes').then(m => m.Myrecipes)
      },
      {
        path: 'favorite',
        loadComponent: () => import('./recipes/favorite-recipes/favorite-recipes').then(m => m.FavoriteRecipes)
      },
      {
        path: 'weekly',
        loadComponent: () => import('./recipes/weekly-recipes/weekly-recipes').then(m => m.WeeklyRecipes)
      }

    ]
  }
];
