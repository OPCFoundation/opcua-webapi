/* tslint:disable */
/* eslint-disable */
/**
 * OPC UA Web API
 * This API provides simple HTTPS based access to an OPC UA server.
 *
 * The version of the OpenAPI document: 1.05.4
 * Contact: office@opcfoundation.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DiagnosticInfo } from './DiagnosticInfo';
import {
    DiagnosticInfoFromJSON,
    DiagnosticInfoFromJSONTyped,
    DiagnosticInfoToJSON,
} from './DiagnosticInfo';
import type { ResponseHeader } from './ResponseHeader';
import {
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
} from './ResponseHeader';

/**
 * 
 * @export
 * @interface DeleteSubscriptionsResponse
 */
export interface DeleteSubscriptionsResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof DeleteSubscriptionsResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {Array<number>}
     * @memberof DeleteSubscriptionsResponse
     */
    Results?: Array<number>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof DeleteSubscriptionsResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the DeleteSubscriptionsResponse interface.
 */
export function instanceOfDeleteSubscriptionsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteSubscriptionsResponseFromJSON(json: any): DeleteSubscriptionsResponse {
    return DeleteSubscriptionsResponseFromJSONTyped(json, false);
}

export function DeleteSubscriptionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteSubscriptionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ResponseHeader': !exists(json, 'ResponseHeader') ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'Results': !exists(json, 'Results') ? undefined : json['Results'],
        'DiagnosticInfos': !exists(json, 'DiagnosticInfos') ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

export function DeleteSubscriptionsResponseToJSON(value?: DeleteSubscriptionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value.ResponseHeader),
        'Results': value.Results,
        'DiagnosticInfos': value.DiagnosticInfos === undefined ? undefined : ((value.DiagnosticInfos as Array<any>).map(DiagnosticInfoToJSON)),
    };
}

