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
import type { Variant } from './Variant';
import {
    VariantFromJSON,
    VariantFromJSONTyped,
    VariantToJSON,
} from './Variant';

/**
 * 
 * @export
 * @interface DataValue
 */
export interface DataValue {
    /**
     * 
     * @type {Variant}
     * @memberof DataValue
     */
    Value?: Variant;
    /**
     * 
     * @type {number}
     * @memberof DataValue
     */
    StatusCode?: number;
    /**
     * 
     * @type {Date}
     * @memberof DataValue
     */
    SourceTimestamp?: Date;
    /**
     * 
     * @type {number}
     * @memberof DataValue
     */
    SourcePicoSeconds?: number;
    /**
     * 
     * @type {Date}
     * @memberof DataValue
     */
    ServerTimestamp?: Date;
    /**
     * 
     * @type {number}
     * @memberof DataValue
     */
    ServerPicoSeconds?: number;
}

/**
 * Check if a given object implements the DataValue interface.
 */
export function instanceOfDataValue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DataValueFromJSON(json: any): DataValue {
    return DataValueFromJSONTyped(json, false);
}

export function DataValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Value': !exists(json, 'Value') ? undefined : VariantFromJSON(json['Value']),
        'StatusCode': !exists(json, 'StatusCode') ? undefined : json['StatusCode'],
        'SourceTimestamp': !exists(json, 'SourceTimestamp') ? undefined : (new Date(json['SourceTimestamp'])),
        'SourcePicoSeconds': !exists(json, 'SourcePicoSeconds') ? undefined : json['SourcePicoSeconds'],
        'ServerTimestamp': !exists(json, 'ServerTimestamp') ? undefined : (new Date(json['ServerTimestamp'])),
        'ServerPicoSeconds': !exists(json, 'ServerPicoSeconds') ? undefined : json['ServerPicoSeconds'],
    };
}

export function DataValueToJSON(value?: DataValue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Value': VariantToJSON(value.Value),
        'StatusCode': value.StatusCode,
        'SourceTimestamp': value.SourceTimestamp === undefined ? undefined : (value.SourceTimestamp.toISOString()),
        'SourcePicoSeconds': value.SourcePicoSeconds,
        'ServerTimestamp': value.ServerTimestamp === undefined ? undefined : (value.ServerTimestamp.toISOString()),
        'ServerPicoSeconds': value.ServerPicoSeconds,
    };
}

