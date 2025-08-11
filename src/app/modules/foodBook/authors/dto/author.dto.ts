import { BaseDTO, ID } from "../../../../common/dto/base.dto";

export class MediaDTO extends BaseDTO {
    Type?: "image" | "video";
    Url?: string;
    Alt?: string;
}

export class SourceDTO extends BaseDTO {
    Type!: "book" | "website" | "personal" | "magazine";
    Title?: string;
    Url?: string;
    AuthorId?: ID;
}

export class AuthorDTO extends BaseDTO {
    DisplayName!: string;
    CountryCode?: string;
    Website?: string;
}