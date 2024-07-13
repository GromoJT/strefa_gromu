/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagModel } from './TagModel';
import type { ZoneUser } from './ZoneUser';
export type ArticleModel = {
    id?: string;
    author?: ZoneUser;
    tags?: Array<TagModel>;
    content?: string;
    relatedContent?: Array<string>;
};

