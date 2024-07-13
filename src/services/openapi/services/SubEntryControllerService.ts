/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddSubEntryDto } from '../models/AddSubEntryDto';
import type { SubEntryDto } from '../models/SubEntryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SubEntryControllerService {
    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static addSubEntry(
        requestBody: AddSubEntryDto,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/subentry',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns SubEntryDto OK
     * @throws ApiError
     */
    public static getSubEntryById(
        id: string,
    ): CancelablePromise<SubEntryDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/subentry/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @returns SubEntryDto OK
     * @throws ApiError
     */
    public static getAllEntries(): CancelablePromise<Array<SubEntryDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/subentry/all',
        });
    }
}
