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
import type { BrowseResult } from './BrowseResult';
import {
    BrowseResultFromJSON,
    BrowseResultFromJSONTyped,
    BrowseResultToJSON,
} from './BrowseResult';
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
 * @interface BrowseResponse
 */
export interface BrowseResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof BrowseResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {Array<BrowseResult>}
     * @memberof BrowseResponse
     */
    Results?: Array<BrowseResult>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof BrowseResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the BrowseResponse interface.
 */
export function instanceOfBrowseResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BrowseResponseFromJSON(json: any): BrowseResponse {
    return BrowseResponseFromJSONTyped(json, false);
}

export function BrowseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ResponseHeader': !exists(json, 'ResponseHeader') ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'Results': !exists(json, 'Results') ? undefined : ((json['Results'] as Array<any>).map(BrowseResultFromJSON)),
        'DiagnosticInfos': !exists(json, 'DiagnosticInfos') ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

export function BrowseResponseToJSON(value?: BrowseResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value.ResponseHeader),
        'Results': value.Results === undefined ? undefined : ((value.Results as Array<any>).map(BrowseResultToJSON)),
        'DiagnosticInfos': value.DiagnosticInfos === undefined ? undefined : ((value.DiagnosticInfos as Array<any>).map(DiagnosticInfoToJSON)),
    };
}

