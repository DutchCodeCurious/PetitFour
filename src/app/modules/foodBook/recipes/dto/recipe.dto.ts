import { BaseDTO, ID  } from "../../../../common/dto/base.dto";
import { CourseType } from "../../../../common/enums/course-type.enum";

export class RecipeDTO extends BaseDTO {
    Title!: string;
    Description?: string;
    Servings?: string;
    TotalTimeMinutes?: number;
    PrepTimeMinutes?: number;
    CookTimeMinutes?: number;
    CuisineId?: ID; 
    Course?: CourseType;
    Status?: string;
    SourceId?: ID;
    Ingredients?: string[];
    Instructions?: string;
    Language?: string;
}

export class InstructionStepDTO {
    Order?: number;
    Text?: string;
    TimeSeconds?: number;
    TempCelsius?: number;
    MediaIds?: ID[];
}

export class NutritionDTO {
    Per?: "serving" | "100g";
    Calories?: number;
    Protein_g?: number;
    Carbs_g?: number;
    Fat_g?: number;
    Fiber_g?: number;
    Sugar_g?: number;
    Sodium_g?: number;
}

export class CuisineDTO extends BaseDTO {
    Name!: string;
    CountryCode?: string;
}

export class TagDTO extends BaseDTO {
    Name!: string;
}