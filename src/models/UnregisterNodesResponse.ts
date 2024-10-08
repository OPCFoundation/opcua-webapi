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
import type { ResponseHeader } from './ResponseHeader';
import {
    ResponseHeaderFromJSON,
    ResponseHeaderFromJSONTyped,
    ResponseHeaderToJSON,
} from './ResponseHeader';

/**
 * 
 * @export
 * @interface UnregisterNodesResponse
 */
export interface UnregisterNodesResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof UnregisterNodesResponse
     */
    ResponseHeader?: ResponseHeader;
}

/**
 * Check if a given object implements the UnregisterNodesResponse interface.
 */
export function instanceOfUnregisterNodesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UnregisterNodesResponseFromJSON(json: any): UnregisterNodesResponse {
    return UnregisterNodesResponseFromJSONTyped(json, false);
}

export function UnregisterNodesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnregisterNodesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ResponseHeader': !exists(json, 'ResponseHeader') ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
    };
}

export function UnregisterNodesResponseToJSON(value?: UnregisterNodesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value.ResponseHeader),
    };
}

