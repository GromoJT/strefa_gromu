/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ZoneUser } from './ZoneUser';
export type EmailConfirmationToken = {
    id?: number;
    token: string;
    timeStamp?: string;
    expireAt?: string;
    zoneUser?: ZoneUser;
    expired?: boolean;
};

