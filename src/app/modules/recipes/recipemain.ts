import { Component } from '@angular/core';
import { RecipeDTO } from './dto/recipe.dto';

@Component({
  selector: 'app-recipemain',
  imports: [],
  templateUrl: './recipemain.html',
  styleUrl: './recipemain.scss'
})
export class Recipemain {

  constructor() {
    const recipe: RecipeDTO = new RecipeDTO();
  }
}
