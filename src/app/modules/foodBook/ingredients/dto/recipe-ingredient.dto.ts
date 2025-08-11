import { ID } from "../../../../common/dto/base.dto";
import { Unit } from "../../../../common/enums/unit.enum";

export class RecipeIngredientDTO {
    FoodItemId!: ID;
    Amount?: number;
    Unit?: Unit;
    TextOverride?: string;
    Preparation?: string;
    Optional?: boolean;
    Notes?: string;
    Order?: number;
}
