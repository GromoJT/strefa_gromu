/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class GreetingsControllerService {
    /**
     * @returns string OK
     * @throws ApiError
     */
    public static sayHello(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/greetings',
        });
    }
    /**
     * @returns string OK
     * @throws ApiError
     */
    public static sayGoodBye(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/greetings/say-good-bye',
        });
    }
}
