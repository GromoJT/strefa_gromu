/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AddEntryDto = {
    authorId?: string;
    name?: string;
    type?: AddEntryDto.type;
    short_description?: string;
    image_list?: Array<string>;
};
export namespace AddEntryDto {
    export enum type {
        ANOMALY = 'ANOMALY',
        ARTIFACT = 'ARTIFACT',
        BIOTA = 'BIOTA',
        WILDLIFE = 'WILDLIFE',
    }
}

