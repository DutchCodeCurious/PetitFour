import { BaseDTO, ID  } from "../../../common/dto/base.dto";

export class RecipeDTO extends BaseDTO {
    Title: string;
    Description?: string;
    Servings?: string;
    TotalTimeMinutes?: number;
    PrepTimeMinutes?: number;
    CookTimeMinutes?: number;
    CuisineId?: ID; 
    Course?: CourseType;
    SourceId: ID;
    Ingredients: string[];
    Instructions: string;
    Language?: string;
}