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
import type { ExtensionObject } from './ExtensionObject';
import {
    ExtensionObjectFromJSON,
    ExtensionObjectFromJSONTyped,
    ExtensionObjectToJSON,
} from './ExtensionObject';

/**
 * 
 * @export
 * @interface RequestHeader
 */
export interface RequestHeader {
    /**
     * 
     * @type {string}
     * @memberof RequestHeader
     */
    AuthenticationToken?: string;
    /**
     * 
     * @type {Date}
     * @memberof RequestHeader
     */
    Timestamp?: Date;
    /**
     * 
     * @type {number}
     * @memberof RequestHeader
     */
    RequestHandle?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestHeader
     */
    ReturnDiagnostics?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestHeader
     */
    AuditEntryId?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestHeader
     */
    TimeoutHint?: number;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof RequestHeader
     */
    AdditionalHeader?: ExtensionObject;
}

/**
 * Check if a given object implements the RequestHeader interface.
 */
export function instanceOfRequestHeader(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RequestHeaderFromJSON(json: any): RequestHeader {
    return RequestHeaderFromJSONTyped(json, false);
}

export function RequestHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): RequestHeader {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'AuthenticationToken': !exists(json, 'AuthenticationToken') ? undefined : json['AuthenticationToken'],
        'Timestamp': !exists(json, 'Timestamp') ? undefined : (new Date(json['Timestamp'])),
        'RequestHandle': !exists(json, 'RequestHandle') ? undefined : json['RequestHandle'],
        'ReturnDiagnostics': !exists(json, 'ReturnDiagnostics') ? undefined : json['ReturnDiagnostics'],
        'AuditEntryId': !exists(json, 'AuditEntryId') ? undefined : json['AuditEntryId'],
        'TimeoutHint': !exists(json, 'TimeoutHint') ? undefined : json['TimeoutHint'],
        'AdditionalHeader': !exists(json, 'AdditionalHeader') ? undefined : ExtensionObjectFromJSON(json['AdditionalHeader']),
    };
}

export function RequestHeaderToJSON(value?: RequestHeader | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AuthenticationToken': value.AuthenticationToken,
        'Timestamp': value.Timestamp === undefined ? undefined : (value.Timestamp.toISOString()),
        'RequestHandle': value.RequestHandle,
        'ReturnDiagnostics': value.ReturnDiagnostics,
        'AuditEntryId': value.AuditEntryId,
        'TimeoutHint': value.TimeoutHint,
        'AdditionalHeader': ExtensionObjectToJSON(value.AdditionalHeader),
    };
}

