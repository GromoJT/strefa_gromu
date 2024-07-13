/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubEntry } from './SubEntry';
export type EntryDto = {
    id?: string;
    authorId?: string;
    name?: string;
    type?: EntryDto.type;
    shortDescription?: string;
    imageList?: Array<string>;
    subEntrySet?: Array<SubEntry>;
    created_at?: string;
    lastModifiedAt?: string;
    redacted?: boolean;
};
export namespace EntryDto {
    export enum type {
        ANOMALY = 'ANOMALY',
        ARTIFACT = 'ARTIFACT',
        BIOTA = 'BIOTA',
        WILDLIFE = 'WILDLIFE',
    }
}

