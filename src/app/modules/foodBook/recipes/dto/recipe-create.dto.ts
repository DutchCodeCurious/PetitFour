import { ID } from "../../../../common/dto/base.dto";
import { CourseType } from "../../../../common/enums/course-type.enum";
import { RecipeIngredientDTO } from "../../ingredients/dto/recipe-ingredient.dto";
import { InstructionStepDTO, NutritionDTO } from "./recipe.dto";

export class RecipeCreateDTO {
    Title!: string;
    Description?: string;

    Servings?: string;
    TotalTimeMinutes?: number;
    PrepTimeMinutes?: number;
    CookTimeMinutes?: number;

    CuisineId?: ID;
    Course?: CourseType;
    SourceId?: ID;

    Language?: string;

    Ingredients?: RecipeIngredientDTO[];
    Steps?: InstructionStepDTO[];

    Tags?: string[]; // tag DTOs
    Media?: string[]; // media DTOs
    Nutrition?: NutritionDTO;
}

// Optional: handy factory for form defaults
// export const createEmptyRecipe = (): RecipeCreateDto => ({
//   title: '',
//   ingredients: [],
//   steps: []
// });