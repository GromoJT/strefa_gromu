/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Entry } from './Entry';
import type { ZoneUser } from './ZoneUser';
export type SubEntry = {
    id?: string;
    author?: ZoneUser;
    name?: string;
    entry?: Entry;
    secondaryTags?: Array<'APPEARANCE' | 'ADDITIONAL_INFORMATION' | 'EFFECTS' | 'PERSONAL_EXPERIENCE'>;
    content?: string;
    createdAt?: string;
    lastModifiedAt?: string;
    redacted?: boolean;
};

