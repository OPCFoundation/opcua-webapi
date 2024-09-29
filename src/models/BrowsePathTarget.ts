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
 * @interface BrowsePathTarget
 */
export interface BrowsePathTarget {
    /**
     * 
     * @type {string}
     * @memberof BrowsePathTarget
     */
    TargetId?: string;
    /**
     * 
     * @type {number}
     * @memberof BrowsePathTarget
     */
    RemainingPathIndex?: number;
}

/**
 * Check if a given object implements the BrowsePathTarget interface.
 */
export function instanceOfBrowsePathTarget(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BrowsePathTargetFromJSON(json: any): BrowsePathTarget {
    return BrowsePathTargetFromJSONTyped(json, false);
}

export function BrowsePathTargetFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowsePathTarget {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'TargetId': !exists(json, 'TargetId') ? undefined : json['TargetId'],
        'RemainingPathIndex': !exists(json, 'RemainingPathIndex') ? undefined : json['RemainingPathIndex'],
    };
}

export function BrowsePathTargetToJSON(value?: BrowsePathTarget | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'TargetId': value.TargetId,
        'RemainingPathIndex': value.RemainingPathIndex,
    };
}

