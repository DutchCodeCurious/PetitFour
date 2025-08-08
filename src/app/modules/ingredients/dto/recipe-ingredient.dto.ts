import { ID } from "../../../common/dto/base.dto";

export class RecipeIngredientDTO{
    FoodItemId: ID;
    Amount?: number;
    Unit?: Unit;
    TextOverride?: string;
    Preparation?: string;
    Optional?: boolean;
    Notes?: string;
    Order?: number;
}