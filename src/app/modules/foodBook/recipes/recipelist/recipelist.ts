import { Component, OnInit } from '@angular/core';
import { RecipeDetailDTO } from '../dto/recipe-detail.dto';
import { MockRecipesService } from '../../mock-recipes.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-recipelist',
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  standalone: true,
  templateUrl: './recipelist.html',
  styleUrl: './recipelist.scss'
})
export class Recipelist implements OnInit {
  displayedColumns: string[] = ['AvgRating', 'name', 'country', 'cookTime', "course",'alreadyMade'];

  recipes: RecipeDetailDTO[] = [];
  dataSource = new MatTableDataSource<RecipeDetailDTO>([]);

  constructor(private recipesService: MockRecipesService) {}

  ngOnInit(): void {

   //TODO split the options in to smaller functions
    this.dataSource.filterPredicate = (data: RecipeDetailDTO, filter: string): boolean => {
      const text = filter.trim().toLowerCase();
      return (
        (data.Recipe?.Title ?? '').toLowerCase().includes(text) ||
        (data.Cuisine?.CountryCode ?? '').toLowerCase().includes(text) ||
        String(data.AvgRating ?? '').toLowerCase().includes(text) ||
        String(data.UserMeta?.IsMadeBefore ?? '').toLowerCase().includes(text) ||
        (data.Tags ?? []).some(t => (t.Name ?? '').toLowerCase().includes(text))
      );
    };

    this.recipesService.getAllRecipes().subscribe({
      next: (data) => {
        this.recipes = data;
        this.dataSource.data = data;
        console.log('Recipes loaded:', this.recipes);
      },
      error: (err) => {
        console.error('Failed to load recipes', err);
      }
    });
  }
    applyFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = (input?.value ?? '').trim().toLowerCase();
    this.dataSource.filter = value;
    console.log('Filtering recipes with:', value);
  }
}

