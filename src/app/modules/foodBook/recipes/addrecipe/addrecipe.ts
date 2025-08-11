import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, NonNullableFormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// DTOs
import { RecipeCreateDTO } from '../dto/recipe-create.dto';
import { RecipeIngredientDTO } from '../dto/recipe.dto';

// Enums & options
import { courseOptions, CourseType } from '../../../../common/enums/course-type.enum';
import { Unit, UnitOptions } from '../../../../common/enums/unit.enum';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule }     from '@angular/material/select';
import { MatInputModule }      from '@angular/material/input';
import { MatButtonModule }     from '@angular/material/button';
import { CommonModule }        from '@angular/common';

@Component({
  selector: 'app-addrecipe',
  standalone: true,
  templateUrl: './addrecipe.html',
  styleUrls: ['./addrecipe.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule
  ]
})
export class Addrecipe implements OnInit {
  recipeForm!: FormGroup;

  unitOptions: Unit[] = UnitOptions;
  courseOptions: CourseType[] = courseOptions;

  constructor(private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      Title: ['', Validators.required],
      Description: [''],
      Servings: [''],
      TotalTimeMinutes: [{ value: 0, disabled: true }],
      PrepTimeMinutes: [0, [Validators.min(0)]],
      CookTimeMinutes: [0, [Validators.min(0)]],
      CuisineId: [''],
      Course: [''],
      Ingredients: this.fb.array([this.buildIngredientRow()]),
      Instructions: ['', Validators.required],
      Language: ['en']
    });
  }

  ngOnInit(): void {
    const prepCtrl = this.recipeForm.get('PrepTimeMinutes');
    const cookCtrl = this.recipeForm.get('CookTimeMinutes');
    prepCtrl?.valueChanges.subscribe(() => this.updateTotalTime());
    cookCtrl?.valueChanges.subscribe(() => this.updateTotalTime());
  }

  private updateTotalTime(): void {
    const prep = Number(this.recipeForm.get('PrepTimeMinutes')?.value) || 0;
    const cook = Number(this.recipeForm.get('CookTimeMinutes')?.value) || 0;
    this.recipeForm.patchValue({ TotalTimeMinutes: prep + cook }, { emitEvent: false });
  }

  // ----- INGREDIENTS -----
  get Ingredients(): FormArray<FormGroup> {
    return this.recipeForm.get('Ingredients') as FormArray<FormGroup>;
  }

  private buildIngredientRow(): FormGroup {
    return this.fb.group({
      Name: ['', Validators.required],
      Amount: [null, [Validators.required, Validators.min(0)]],
      Unit: [null as Unit | null, Validators.required]
      // Add FoodItemId/Notes/etc. here if your DTO includes them
    });
  }

  addIngredient(): void {
    this.Ingredients.push(this.buildIngredientRow());
  }

  removeIngredient(index: number): void {
    this.Ingredients.removeAt(index);
  }
  // -----------------------

  onSubmit(): void {
    if (this.recipeForm.invalid) {
      this.recipeForm.markAllAsTouched();
      return;
    }

    // assemble DTO; include disabled TotalTimeMinutes with getRawValue()
    const raw = this.recipeForm.getRawValue();

    const dto: RecipeCreateDTO = {
      ...raw,
      // ensure Ingredients is typed as RecipeIngredientDTO[]
      Ingredients: (raw.Ingredients as any[]) as RecipeIngredientDTO[]
    };

    console.log('Recipe Create DTO:', dto);
    // TODO: send dto to API or mock service
  }
}