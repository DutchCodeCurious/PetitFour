import { ProteinType } from "../../../common/enums/protein-type.enum";
import { CuisineDTO } from "./recipe.dto";

export class RecipeSummaryDTO {
    id: ID;
    Title: string;
    Slug?: string;
    Cuisine?: CuisineDTO;
    AvgRatting?: number;
    TotalTimeMinutes?: number;
    ProteinType?: ProteinType;
    isFavorite?: boolean;
}