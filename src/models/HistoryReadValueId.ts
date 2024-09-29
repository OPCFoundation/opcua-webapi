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
 * @interface HistoryReadValueId
 */
export interface HistoryReadValueId {
    /**
     * 
     * @type {string}
     * @memberof HistoryReadValueId
     */
    NodeId?: string;
    /**
     * 
     * @type {string}
     * @memberof HistoryReadValueId
     */
    IndexRange?: string;
    /**
     * 
     * @type {string}
     * @memberof HistoryReadValueId
     */
    DataEncoding?: string;
    /**
     * 
     * @type {string}
     * @memberof HistoryReadValueId
     */
    ContinuationPoint?: string;
}

/**
 * Check if a given object implements the HistoryReadValueId interface.
 */
export function instanceOfHistoryReadValueId(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HistoryReadValueIdFromJSON(json: any): HistoryReadValueId {
    return HistoryReadValueIdFromJSONTyped(json, false);
}

export function HistoryReadValueIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryReadValueId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'NodeId': !exists(json, 'NodeId') ? undefined : json['NodeId'],
        'IndexRange': !exists(json, 'IndexRange') ? undefined : json['IndexRange'],
        'DataEncoding': !exists(json, 'DataEncoding') ? undefined : json['DataEncoding'],
        'ContinuationPoint': !exists(json, 'ContinuationPoint') ? undefined : json['ContinuationPoint'],
    };
}

export function HistoryReadValueIdToJSON(value?: HistoryReadValueId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NodeId': value.NodeId,
        'IndexRange': value.IndexRange,
        'DataEncoding': value.DataEncoding,
        'ContinuationPoint': value.ContinuationPoint,
    };
}

