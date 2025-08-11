import { ProteinType } from "../../../../common/enums/protein-type.enum";
import { CuisineDTO } from "./recipe.dto";
import { ID } from "../../../../common/dto/base.dto";

export class RecipeSummaryDTO {
    id!: ID;
    Title!: string;
    Slug?: string;
    Cuisine?: CuisineDTO;
    AvgRatting?: number;
    TotalTimeMinutes?: number;
    ProteinType?: ProteinType;
    isFavorite?: boolean;
}