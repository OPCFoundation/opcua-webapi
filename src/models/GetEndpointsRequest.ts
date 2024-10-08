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
 * @interface GetEndpointsRequest
 */
export interface GetEndpointsRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof GetEndpointsRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {string}
     * @memberof GetEndpointsRequest
     */
    EndpointUrl?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetEndpointsRequest
     */
    LocaleIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof GetEndpointsRequest
     */
    ProfileUris?: Array<string>;
}

/**
 * Check if a given object implements the GetEndpointsRequest interface.
 */
export function instanceOfGetEndpointsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetEndpointsRequestFromJSON(json: any): GetEndpointsRequest {
    return GetEndpointsRequestFromJSONTyped(json, false);
}

export function GetEndpointsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEndpointsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'RequestHeader': !exists(json, 'RequestHeader') ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'EndpointUrl': !exists(json, 'EndpointUrl') ? undefined : json['EndpointUrl'],
        'LocaleIds': !exists(json, 'LocaleIds') ? undefined : json['LocaleIds'],
        'ProfileUris': !exists(json, 'ProfileUris') ? undefined : json['ProfileUris'],
    };
}

export function GetEndpointsRequestToJSON(value?: GetEndpointsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'RequestHeader': RequestHeaderToJSON(value.RequestHeader),
        'EndpointUrl': value.EndpointUrl,
        'LocaleIds': value.LocaleIds,
        'ProfileUris': value.ProfileUris,
    };
}

