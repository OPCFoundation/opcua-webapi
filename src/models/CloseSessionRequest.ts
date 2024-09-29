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
import type { RequestHeader } from './RequestHeader';
import {
    RequestHeaderFromJSON,
    RequestHeaderFromJSONTyped,
    RequestHeaderToJSON,
} from './RequestHeader';

/**
 * 
 * @export
 * @interface CloseSessionRequest
 */
export interface CloseSessionRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof CloseSessionRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {boolean}
     * @memberof CloseSessionRequest
     */
    DeleteSubscriptions?: boolean;
}

/**
 * Check if a given object implements the CloseSessionRequest interface.
 */
export function instanceOfCloseSessionRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CloseSessionRequestFromJSON(json: any): CloseSessionRequest {
    return CloseSessionRequestFromJSONTyped(json, false);
}

export function CloseSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CloseSessionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'RequestHeader': !exists(json, 'RequestHeader') ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'DeleteSubscriptions': !exists(json, 'DeleteSubscriptions') ? undefined : json['DeleteSubscriptions'],
    };
}

export function CloseSessionRequestToJSON(value?: CloseSessionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'RequestHeader': RequestHeaderToJSON(value.RequestHeader),
        'DeleteSubscriptions': value.DeleteSubscriptions,
    };
}

