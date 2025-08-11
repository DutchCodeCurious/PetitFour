import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RecipeDetailDTO } from './recipes/dto/recipe-detail.dto';
import { Recipes } from '../../mock-data';


@Injectable({
  providedIn: 'root'
})
export class MockRecipesService {
  getAllRecipes(): Observable<RecipeDetailDTO[]> {
    return of(Recipes); // instantly emits mock data
  }

  getAllRecipeLength(): Observable<number> {
    return of(Recipes.length);
  }

  getRecipeById(id: string): Observable<RecipeDetailDTO | undefined> {
    return of(Recipes.find(r => r.Recipe.id === id));
  }
}