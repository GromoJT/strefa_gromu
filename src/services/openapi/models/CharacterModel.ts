/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ZoneUser } from './ZoneUser';
export type CharacterModel = {
    id?: string;
    author?: ZoneUser;
    fractionName: string;
    shortFractionDescription: string;
    characterImagesList?: Array<string>;
    createdAt?: string;
    modifiedAt?: string;
    redacted?: boolean;
};

