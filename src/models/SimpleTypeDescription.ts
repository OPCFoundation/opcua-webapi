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
 * @interface SimpleTypeDescription
 */
export interface SimpleTypeDescription {
    /**
     * 
     * @type {string}
     * @memberof SimpleTypeDescription
     */
    BaseDataType?: string;
    /**
     * 
     * @type {number}
     * @memberof SimpleTypeDescription
     */
    BuiltInType?: number;
    /**
     * 
     * @type {string}
     * @memberof SimpleTypeDescription
     */
    DataTypeId?: string;
    /**
     * 
     * @type {string}
     * @memberof SimpleTypeDescription
     */
    Name?: string;
}

/**
 * Check if a given object implements the SimpleTypeDescription interface.
 */
export function instanceOfSimpleTypeDescription(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SimpleTypeDescriptionFromJSON(json: any): SimpleTypeDescription {
    return SimpleTypeDescriptionFromJSONTyped(json, false);
}

export function SimpleTypeDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SimpleTypeDescription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'BaseDataType': !exists(json, 'BaseDataType') ? undefined : json['BaseDataType'],
        'BuiltInType': !exists(json, 'BuiltInType') ? undefined : json['BuiltInType'],
        'DataTypeId': !exists(json, 'DataTypeId') ? undefined : json['DataTypeId'],
        'Name': !exists(json, 'Name') ? undefined : json['Name'],
    };
}

export function SimpleTypeDescriptionToJSON(value?: SimpleTypeDescription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'BaseDataType': value.BaseDataType,
        'BuiltInType': value.BuiltInType,
        'DataTypeId': value.DataTypeId,
        'Name': value.Name,
    };
}

