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
import type { StructureField } from './StructureField';
import {
    StructureFieldFromJSON,
    StructureFieldFromJSONTyped,
    StructureFieldToJSON,
} from './StructureField';

/**
 * 
 * @export
 * @interface StructureDefinition
 */
export interface StructureDefinition {
    /**
     * 
     * @type {string}
     * @memberof StructureDefinition
     */
    DefaultEncodingId?: string;
    /**
     * 
     * @type {string}
     * @memberof StructureDefinition
     */
    BaseDataType?: string;
    /**
     * 
     * @type {number}
     * @memberof StructureDefinition
     */
    StructureType?: number;
    /**
     * 
     * @type {Array<StructureField>}
     * @memberof StructureDefinition
     */
    Fields?: Array<StructureField>;
}

/**
 * Check if a given object implements the StructureDefinition interface.
 */
export function instanceOfStructureDefinition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StructureDefinitionFromJSON(json: any): StructureDefinition {
    return StructureDefinitionFromJSONTyped(json, false);
}

export function StructureDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): StructureDefinition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'DefaultEncodingId': !exists(json, 'DefaultEncodingId') ? undefined : json['DefaultEncodingId'],
        'BaseDataType': !exists(json, 'BaseDataType') ? undefined : json['BaseDataType'],
        'StructureType': !exists(json, 'StructureType') ? undefined : json['StructureType'],
        'Fields': !exists(json, 'Fields') ? undefined : ((json['Fields'] as Array<any>).map(StructureFieldFromJSON)),
    };
}

export function StructureDefinitionToJSON(value?: StructureDefinition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'DefaultEncodingId': value.DefaultEncodingId,
        'BaseDataType': value.BaseDataType,
        'StructureType': value.StructureType,
        'Fields': value.Fields === undefined ? undefined : ((value.Fields as Array<any>).map(StructureFieldToJSON)),
    };
}

