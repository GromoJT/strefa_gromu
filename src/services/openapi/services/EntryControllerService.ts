/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddEntryDto } from '../models/AddEntryDto';
import type { EntryDto } from '../models/EntryDto';
import type { SubEntryDto } from '../models/SubEntryDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class EntryControllerService {
    /**
     * @param id
     * @returns EntryDto OK
     * @throws ApiError
     */
    public static getEntryById(
        id: string,
    ): CancelablePromise<EntryDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/entry/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns EntryDto OK
     * @throws ApiError
     */
    public static updateEntryById(
        id: string,
        requestBody: AddEntryDto,
    ): CancelablePromise<EntryDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/entry/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns string OK
     * @throws ApiError
     */
    public static redactEntryById(
        id: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/entry/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param requestBody
     * @returns string OK
     * @throws ApiError
     */
    public static addEntry(
        requestBody: AddEntryDto,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/entry',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param entryId
     * @returns SubEntryDto OK
     * @throws ApiError
     */
    public static getAllRelatedSubEntries(
        entryId: string,
    ): CancelablePromise<Array<SubEntryDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/entry/allsubentriesof/{entryId}',
            path: {
                'entryId': entryId,
            },
        });
    }
    /**
     * @returns EntryDto OK
     * @throws ApiError
     */
    public static getAllEntries1(): CancelablePromise<Array<EntryDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/entry/all',
        });
    }
}
