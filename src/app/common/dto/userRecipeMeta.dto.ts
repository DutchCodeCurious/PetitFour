import { BaseDTO, ID } from "./base.dto";

export class UserRecipeMetaDTO extends BaseDTO {
    UserId!: ID;
    RecipeId!: ID;
    IsFavorite!: boolean;
    IsMadeBefore!: boolean;
    Rating?: number;
    Notes?: string;
    
}
