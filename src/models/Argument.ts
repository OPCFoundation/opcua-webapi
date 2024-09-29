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
import type { LocalizedText } from './LocalizedText';
import {
    LocalizedTextFromJSON,
    LocalizedTextFromJSONTyped,
    LocalizedTextToJSON,
} from './LocalizedText';

/**
 * 
 * @export
 * @interface Argument
 */
export interface Argument {
    /**
     * 
     * @type {string}
     * @memberof Argument
     */
    Name?: string;
    /**
     * 
     * @type {string}
     * @memberof Argument
     */
    DataType?: string;
    /**
     * 
     * @type {number}
     * @memberof Argument
     */
    ValueRank?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof Argument
     */
    ArrayDimensions?: Array<number>;
    /**
     * 
     * @type {LocalizedText}
     * @memberof Argument
     */
    Description?: LocalizedText;
}

/**
 * Check if a given object implements the Argument interface.
 */
export function instanceOfArgument(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ArgumentFromJSON(json: any): Argument {
    return ArgumentFromJSONTyped(json, false);
}

export function ArgumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Argument {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Name': !exists(json, 'Name') ? undefined : json['Name'],
        'DataType': !exists(json, 'DataType') ? undefined : json['DataType'],
        'ValueRank': !exists(json, 'ValueRank') ? undefined : json['ValueRank'],
        'ArrayDimensions': !exists(json, 'ArrayDimensions') ? undefined : json['ArrayDimensions'],
        'Description': !exists(json, 'Description') ? undefined : LocalizedTextFromJSON(json['Description']),
    };
}

export function ArgumentToJSON(value?: Argument | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.Name,
        'DataType': value.DataType,
        'ValueRank': value.ValueRank,
        'ArrayDimensions': value.ArrayDimensions,
        'Description': LocalizedTextToJSON(value.Description),
    };
}

