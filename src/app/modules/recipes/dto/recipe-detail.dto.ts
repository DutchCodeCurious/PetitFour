import { UserRecipeMetaDTO } from "../../../common/dto/userRecipeMeta.dto";
import { AuthorDTO, MediaDTO, SourceDTO } from "../../authors/dto/author.dto";
import { RecipeIngredientDTO } from "../../ingredients/dto/recipe-ingredient.dto";
import { CuisineDTO, InstructionStepDTO, NutritionDTO, RecipeDTO, TagDTO } from "./recipe.dto";

export class RecipeDetailDTO {
    Recipe: RecipeDTO;

    Author?: AuthorDTO;
    Cuisine?: CuisineDTO;
    Source?: SourceDTO;

    Tags?: TagDTO[];
    Media?: MediaDTO;
    HeroImage?: MediaDTO;

    Ingredients?: RecipeIngredientDTO[];
    Steps: InstructionStepDTO[];
    Nutrition?: NutritionDTO;

    UserMeta?: UserRecipeMetaDTO;

    AvgRating?: number;
    

}