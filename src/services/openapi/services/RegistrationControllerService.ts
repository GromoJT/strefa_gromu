/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegisterZoneUserDto } from '../models/RegisterZoneUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RegistrationControllerService {
    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static createZoneUser1(
        requestBody: RegisterZoneUserDto,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/register/zone-user',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param token
     * @returns string OK
     * @throws ApiError
     */
    public static verifyZoneUser(
        token: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/register/verify/{token}',
            path: {
                'token': token,
            },
        });
    }
}
