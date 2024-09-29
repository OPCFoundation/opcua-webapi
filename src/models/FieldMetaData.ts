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
import type { KeyValuePair } from './KeyValuePair';
import {
    KeyValuePairFromJSON,
    KeyValuePairFromJSONTyped,
    KeyValuePairToJSON,
} from './KeyValuePair';
import type { LocalizedText } from './LocalizedText';
import {
    LocalizedTextFromJSON,
    LocalizedTextFromJSONTyped,
    LocalizedTextToJSON,
} from './LocalizedText';

/**
 * 
 * @export
 * @interface FieldMetaData
 */
export interface FieldMetaData {
    /**
     * 
     * @type {string}
     * @memberof FieldMetaData
     */
    Name?: string;
    /**
     * 
     * @type {LocalizedText}
     * @memberof FieldMetaData
     */
    Description?: LocalizedText;
    /**
     * 
     * @type {number}
     * @memberof FieldMetaData
     */
    FieldFlags?: number;
    /**
     * 
     * @type {number}
     * @memberof FieldMetaData
     */
    BuiltInType?: number;
    /**
     * 
     * @type {string}
     * @memberof FieldMetaData
     */
    DataType?: string;
    /**
     * 
     * @type {number}
     * @memberof FieldMetaData
     */
    ValueRank?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof FieldMetaData
     */
    ArrayDimensions?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof FieldMetaData
     */
    MaxStringLength?: number;
    /**
     * 
     * @type {string}
     * @memberof FieldMetaData
     */
    DataSetFieldId?: string;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof FieldMetaData
     */
    Properties?: Array<KeyValuePair>;
}

/**
 * Check if a given object implements the FieldMetaData interface.
 */
export function instanceOfFieldMetaData(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FieldMetaDataFromJSON(json: any): FieldMetaData {
    return FieldMetaDataFromJSONTyped(json, false);
}

export function FieldMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldMetaData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Name': !exists(json, 'Name') ? undefined : json['Name'],
        'Description': !exists(json, 'Description') ? undefined : LocalizedTextFromJSON(json['Description']),
        'FieldFlags': !exists(json, 'FieldFlags') ? undefined : json['FieldFlags'],
        'BuiltInType': !exists(json, 'BuiltInType') ? undefined : json['BuiltInType'],
        'DataType': !exists(json, 'DataType') ? undefined : json['DataType'],
        'ValueRank': !exists(json, 'ValueRank') ? undefined : json['ValueRank'],
        'ArrayDimensions': !exists(json, 'ArrayDimensions') ? undefined : json['ArrayDimensions'],
        'MaxStringLength': !exists(json, 'MaxStringLength') ? undefined : json['MaxStringLength'],
        'DataSetFieldId': !exists(json, 'DataSetFieldId') ? undefined : json['DataSetFieldId'],
        'Properties': !exists(json, 'Properties') ? undefined : ((json['Properties'] as Array<any>).map(KeyValuePairFromJSON)),
    };
}

export function FieldMetaDataToJSON(value?: FieldMetaData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.Name,
        'Description': LocalizedTextToJSON(value.Description),
        'FieldFlags': value.FieldFlags,
        'BuiltInType': value.BuiltInType,
        'DataType': value.DataType,
        'ValueRank': value.ValueRank,
        'ArrayDimensions': value.ArrayDimensions,
        'MaxStringLength': value.MaxStringLength,
        'DataSetFieldId': value.DataSetFieldId,
        'Properties': value.Properties === undefined ? undefined : ((value.Properties as Array<any>).map(KeyValuePairToJSON)),
    };
}

