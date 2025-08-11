import { Component, ChangeDetectionStrategy,inject, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router'

// Angular Material Imports
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MockRecipesService } from '../mock-recipes.service';

@Component({
  selector: 'app-recipemain',
  imports: [RouterModule, MatIconModule, MatCardModule, MatButtonModule],
  templateUrl: './recipemain.html',
  styleUrls: ['./recipemain.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Recipemain {
  private cdr = inject(ChangeDetectorRef);
  onActivate()   { this.cdr.markForCheck(); }
  onDeactivate() { this.cdr.markForCheck(); }
  recipeNumber: number = 0;

  

  constructor( private recipeservice : MockRecipesService) {

    this.recipeservice.getAllRecipeLength().subscribe(res => {
      this.recipeNumber = res;
    });
  }

}
