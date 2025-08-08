export type ID = string;
type ISODate = string;

export class BaseDTO {
    id: ID;
    CreatedAt: ISODate;
    UpdatedAt: ISODate;
    Slug?: string;
}

