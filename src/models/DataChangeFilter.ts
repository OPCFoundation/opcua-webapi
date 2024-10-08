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
 * @interface DataChangeFilter
 */
export interface DataChangeFilter {
    /**
     * 
     * @type {number}
     * @memberof DataChangeFilter
     */
    Trigger?: number;
    /**
     * 
     * @type {number}
     * @memberof DataChangeFilter
     */
    DeadbandType?: number;
    /**
     * 
     * @type {number}
     * @memberof DataChangeFilter
     */
    DeadbandValue?: number;
}

/**
 * Check if a given object implements the DataChangeFilter interface.
 */
export function instanceOfDataChangeFilter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DataChangeFilterFromJSON(json: any): DataChangeFilter {
    return DataChangeFilterFromJSONTyped(json, false);
}

export function DataChangeFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataChangeFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Trigger': !exists(json, 'Trigger') ? undefined : json['Trigger'],
        'DeadbandType': !exists(json, 'DeadbandType') ? undefined : json['DeadbandType'],
        'DeadbandValue': !exists(json, 'DeadbandValue') ? undefined : json['DeadbandValue'],
    };
}

export function DataChangeFilterToJSON(value?: DataChangeFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Trigger': value.Trigger,
        'DeadbandType': value.DeadbandType,
        'DeadbandValue': value.DeadbandValue,
    };
}

