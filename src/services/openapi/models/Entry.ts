/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubEntry } from './SubEntry';
import type { ZoneUser } from './ZoneUser';
export type Entry = {
    id?: string;
    author?: ZoneUser;
    type?: Entry.type;
    name?: string;
    shortDescription?: string;
    imagesList?: Array<string>;
    subEntries?: Array<SubEntry>;
    createdAt?: string;
    lastModifiedAt?: string;
    redacted?: boolean;
};
export namespace Entry {
    export enum type {
        ANOMALY = 'ANOMALY',
        ARTIFACT = 'ARTIFACT',
        BIOTA = 'BIOTA',
        WILDLIFE = 'WILDLIFE',
    }
}

