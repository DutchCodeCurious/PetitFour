import { AllergenType } from "../../../common/enums/allergen-Type.enums";
import { ProteinType } from "../../../common/enums/protein-type.enum";

export class FoodItemDTO extends BaseDTO {
    Name: string;
    ProteinType?: ProteinType;
    Allergens?: AllergenType[];
}
