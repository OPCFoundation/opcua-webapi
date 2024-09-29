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
 * @interface SetPublishingModeResponse
 */
export interface SetPublishingModeResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof SetPublishingModeResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {Array<number>}
     * @memberof SetPublishingModeResponse
     */
    Results?: Array<number>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof SetPublishingModeResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the SetPublishingModeResponse interface.
 */
export function instanceOfSetPublishingModeResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SetPublishingModeResponseFromJSON(json: any): SetPublishingModeResponse {
    return SetPublishingModeResponseFromJSONTyped(json, false);
}

export function SetPublishingModeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetPublishingModeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ResponseHeader': !exists(json, 'ResponseHeader') ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'Results': !exists(json, 'Results') ? undefined : json['Results'],
        'DiagnosticInfos': !exists(json, 'DiagnosticInfos') ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

export function SetPublishingModeResponseToJSON(value?: SetPublishingModeResponse | null): any {
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

