/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArticleModel } from './ArticleModel';
import type { CharacterModel } from './CharacterModel';
import type { EmailConfirmationToken } from './EmailConfirmationToken';
import type { Entry } from './Entry';
import type { SubEntry } from './SubEntry';
export type ZoneUserDto = {
    id?: string;
    userName?: string;
    loreName?: string;
    loreSurname?: string;
    password?: string;
    globalRole?: string;
    email?: string;
    createdAt?: string;
    createdCharacters?: Array<CharacterModel>;
    createdEntry?: Array<Entry>;
    createdSubEntry?: Array<SubEntry>;
    createdArticle?: Array<ArticleModel>;
    verified?: boolean;
    redacted?: boolean;
    vtokens?: Array<EmailConfirmationToken>;
};

