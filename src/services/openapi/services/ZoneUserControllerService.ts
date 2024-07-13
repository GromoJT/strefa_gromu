/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegisterZoneUserDto } from '../models/RegisterZoneUserDto';
import type { ZoneUserDto } from '../models/ZoneUserDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ZoneUserControllerService {
    /**
     * @returns string OK
     * @throws ApiError
     */
    public static responseToEndpoint(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/zone-users',
        });
    }
    /**
     * @param requestBody
     * @returns ZoneUserDto OK
     * @throws ApiError
     */
    public static createZoneUser(
        requestBody: RegisterZoneUserDto,
    ): CancelablePromise<ZoneUserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/zone-users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
