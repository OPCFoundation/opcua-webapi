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
 * @interface ActivateSessionResponse
 */
export interface ActivateSessionResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof ActivateSessionResponse
     */
    ResponseHeader?: ResponseHeader;
    /**
     * 
     * @type {string}
     * @memberof ActivateSessionResponse
     */
    ServerNonce?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof ActivateSessionResponse
     */
    Results?: Array<number>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof ActivateSessionResponse
     */
    DiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the ActivateSessionResponse interface.
 */
export function instanceOfActivateSessionResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivateSessionResponseFromJSON(json: any): ActivateSessionResponse {
    return ActivateSessionResponseFromJSONTyped(json, false);
}

export function ActivateSessionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivateSessionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ResponseHeader': !exists(json, 'ResponseHeader') ? undefined : ResponseHeaderFromJSON(json['ResponseHeader']),
        'ServerNonce': !exists(json, 'ServerNonce') ? undefined : json['ServerNonce'],
        'Results': !exists(json, 'Results') ? undefined : json['Results'],
        'DiagnosticInfos': !exists(json, 'DiagnosticInfos') ? undefined : ((json['DiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

export function ActivateSessionResponseToJSON(value?: ActivateSessionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ResponseHeader': ResponseHeaderToJSON(value.ResponseHeader),
        'ServerNonce': value.ServerNonce,
        'Results': value.Results,
        'DiagnosticInfos': value.DiagnosticInfos === undefined ? undefined : ((value.DiagnosticInfos as Array<any>).map(DiagnosticInfoToJSON)),
    };
}

