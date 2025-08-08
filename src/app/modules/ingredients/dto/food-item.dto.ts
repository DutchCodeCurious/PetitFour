export class FoodItemDTO extends BaseDTO {
    Name: string;
    ProteinType?: ProteinType;
    Allergens?: AllergenType[];
}
