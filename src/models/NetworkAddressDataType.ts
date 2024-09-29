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
 * @interface NetworkAddressDataType
 */
export interface NetworkAddressDataType {
    /**
     * 
     * @type {string}
     * @memberof NetworkAddressDataType
     */
    NetworkInterface?: string;
}

/**
 * Check if a given object implements the NetworkAddressDataType interface.
 */
export function instanceOfNetworkAddressDataType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NetworkAddressDataTypeFromJSON(json: any): NetworkAddressDataType {
    return NetworkAddressDataTypeFromJSONTyped(json, false);
}

export function NetworkAddressDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkAddressDataType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'NetworkInterface': !exists(json, 'NetworkInterface') ? undefined : json['NetworkInterface'],
    };
}

export function NetworkAddressDataTypeToJSON(value?: NetworkAddressDataType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'NetworkInterface': value.NetworkInterface,
    };
}

