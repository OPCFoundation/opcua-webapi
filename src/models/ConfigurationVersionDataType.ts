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
 * @interface ConfigurationVersionDataType
 */
export interface ConfigurationVersionDataType {
    /**
     * 
     * @type {number}
     * @memberof ConfigurationVersionDataType
     */
    MajorVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigurationVersionDataType
     */
    MinorVersion?: number;
}

/**
 * Check if a given object implements the ConfigurationVersionDataType interface.
 */
export function instanceOfConfigurationVersionDataType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigurationVersionDataTypeFromJSON(json: any): ConfigurationVersionDataType {
    return ConfigurationVersionDataTypeFromJSONTyped(json, false);
}

export function ConfigurationVersionDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigurationVersionDataType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'MajorVersion': !exists(json, 'MajorVersion') ? undefined : json['MajorVersion'],
        'MinorVersion': !exists(json, 'MinorVersion') ? undefined : json['MinorVersion'],
    };
}

export function ConfigurationVersionDataTypeToJSON(value?: ConfigurationVersionDataType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'MajorVersion': value.MajorVersion,
        'MinorVersion': value.MinorVersion,
    };
}

