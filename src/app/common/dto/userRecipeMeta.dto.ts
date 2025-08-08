import { BaseDTO, ID } from "./base.dto";

export class UserRecipeMetaDTO extends BaseDTO {
    UserId: ID;
    RecipeId: ID;
    IsFavorite?: boolean;
    Rating?: number;
    Notes?: string;
    
}
