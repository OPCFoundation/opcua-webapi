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

/**
 * 
 * @export
 * @interface ContentFilterElementResult
 */
export interface ContentFilterElementResult {
    /**
     * 
     * @type {number}
     * @memberof ContentFilterElementResult
     */
    StatusCode?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof ContentFilterElementResult
     */
    OperandStatusCodes?: Array<number>;
    /**
     * 
     * @type {Array<DiagnosticInfo>}
     * @memberof ContentFilterElementResult
     */
    OperandDiagnosticInfos?: Array<DiagnosticInfo>;
}

/**
 * Check if a given object implements the ContentFilterElementResult interface.
 */
export function instanceOfContentFilterElementResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContentFilterElementResultFromJSON(json: any): ContentFilterElementResult {
    return ContentFilterElementResultFromJSONTyped(json, false);
}

export function ContentFilterElementResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContentFilterElementResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'StatusCode': !exists(json, 'StatusCode') ? undefined : json['StatusCode'],
        'OperandStatusCodes': !exists(json, 'OperandStatusCodes') ? undefined : json['OperandStatusCodes'],
        'OperandDiagnosticInfos': !exists(json, 'OperandDiagnosticInfos') ? undefined : ((json['OperandDiagnosticInfos'] as Array<any>).map(DiagnosticInfoFromJSON)),
    };
}

export function ContentFilterElementResultToJSON(value?: ContentFilterElementResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'StatusCode': value.StatusCode,
        'OperandStatusCodes': value.OperandStatusCodes,
        'OperandDiagnosticInfos': value.OperandDiagnosticInfos === undefined ? undefined : ((value.OperandDiagnosticInfos as Array<any>).map(DiagnosticInfoToJSON)),
    };
}

