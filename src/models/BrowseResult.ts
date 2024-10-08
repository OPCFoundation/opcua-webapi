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
import type { ReferenceDescription } from './ReferenceDescription';
import {
    ReferenceDescriptionFromJSON,
    ReferenceDescriptionFromJSONTyped,
    ReferenceDescriptionToJSON,
} from './ReferenceDescription';

/**
 * 
 * @export
 * @interface BrowseResult
 */
export interface BrowseResult {
    /**
     * 
     * @type {number}
     * @memberof BrowseResult
     */
    StatusCode?: number;
    /**
     * 
     * @type {string}
     * @memberof BrowseResult
     */
    ContinuationPoint?: string;
    /**
     * 
     * @type {Array<ReferenceDescription>}
     * @memberof BrowseResult
     */
    References?: Array<ReferenceDescription>;
}

/**
 * Check if a given object implements the BrowseResult interface.
 */
export function instanceOfBrowseResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BrowseResultFromJSON(json: any): BrowseResult {
    return BrowseResultFromJSONTyped(json, false);
}

export function BrowseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowseResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'StatusCode': !exists(json, 'StatusCode') ? undefined : json['StatusCode'],
        'ContinuationPoint': !exists(json, 'ContinuationPoint') ? undefined : json['ContinuationPoint'],
        'References': !exists(json, 'References') ? undefined : ((json['References'] as Array<any>).map(ReferenceDescriptionFromJSON)),
    };
}

export function BrowseResultToJSON(value?: BrowseResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'StatusCode': value.StatusCode,
        'ContinuationPoint': value.ContinuationPoint,
        'References': value.References === undefined ? undefined : ((value.References as Array<any>).map(ReferenceDescriptionToJSON)),
    };
}

