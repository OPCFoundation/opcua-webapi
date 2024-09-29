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
 * @interface DiagnosticInfo
 */
export interface DiagnosticInfo {
    /**
     * 
     * @type {number}
     * @memberof DiagnosticInfo
     */
    SymbolicId?: number;
    /**
     * 
     * @type {number}
     * @memberof DiagnosticInfo
     */
    NamespaceUri?: number;
    /**
     * 
     * @type {number}
     * @memberof DiagnosticInfo
     */
    Locale?: number;
    /**
     * 
     * @type {number}
     * @memberof DiagnosticInfo
     */
    LocalizedText?: number;
    /**
     * 
     * @type {string}
     * @memberof DiagnosticInfo
     */
    AdditionalInfo?: string;
    /**
     * 
     * @type {number}
     * @memberof DiagnosticInfo
     */
    InnerStatusCode?: number;
    /**
     * 
     * @type {DiagnosticInfo}
     * @memberof DiagnosticInfo
     */
    InnerDiagnosticInfo?: DiagnosticInfo;
}

/**
 * Check if a given object implements the DiagnosticInfo interface.
 */
export function instanceOfDiagnosticInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiagnosticInfoFromJSON(json: any): DiagnosticInfo {
    return DiagnosticInfoFromJSONTyped(json, false);
}

export function DiagnosticInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosticInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'SymbolicId': !exists(json, 'SymbolicId') ? undefined : json['SymbolicId'],
        'NamespaceUri': !exists(json, 'NamespaceUri') ? undefined : json['NamespaceUri'],
        'Locale': !exists(json, 'Locale') ? undefined : json['Locale'],
        'LocalizedText': !exists(json, 'LocalizedText') ? undefined : json['LocalizedText'],
        'AdditionalInfo': !exists(json, 'AdditionalInfo') ? undefined : json['AdditionalInfo'],
        'InnerStatusCode': !exists(json, 'InnerStatusCode') ? undefined : json['InnerStatusCode'],
        'InnerDiagnosticInfo': !exists(json, 'InnerDiagnosticInfo') ? undefined : DiagnosticInfoFromJSON(json['InnerDiagnosticInfo']),
    };
}

export function DiagnosticInfoToJSON(value?: DiagnosticInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'SymbolicId': value.SymbolicId,
        'NamespaceUri': value.NamespaceUri,
        'Locale': value.Locale,
        'LocalizedText': value.LocalizedText,
        'AdditionalInfo': value.AdditionalInfo,
        'InnerStatusCode': value.InnerStatusCode,
        'InnerDiagnosticInfo': DiagnosticInfoToJSON(value.InnerDiagnosticInfo),
    };
}

