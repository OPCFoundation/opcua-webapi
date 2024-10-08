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
/**
 * 
 * @export
 * @interface ReadValueId
 */
export interface ReadValueId {
    /**
     * 
     * @type {string}
     * @memberof ReadValueId
     */
    NodeId?: string;
    /**
     * 
     * @type {number}
     * @memberof ReadValueId
     */
    AttributeId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReadValueId
     */
    IndexRange?: string;
    /**
     * 
     * @type {string}
     * @memberof ReadValueId
     */
    DataEncoding?: string;
}

/**
 * Check if a given object implements the ReadValueId interface.
 */
export function instanceOfReadValueId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReadValueIdFromJSON(json: any): ReadValueId {
    return ReadValueIdFromJSONTyped(json, false);
}

export function ReadValueIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadValueId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'NodeId': !exists(json, 'NodeId') ? undefined : json['NodeId'],
        'AttributeId': !exists(json, 'AttributeId') ? undefined : json['AttributeId'],
        'IndexRange': !exists(json, 'IndexRange') ? undefined : json['IndexRange'],
        'DataEncoding': !exists(json, 'DataEncoding') ? undefined : json['DataEncoding'],
    };
}

export function ReadValueIdToJSON(value?: ReadValueId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NodeId': value.NodeId,
        'AttributeId': value.AttributeId,
        'IndexRange': value.IndexRange,
        'DataEncoding': value.DataEncoding,
    };
}

