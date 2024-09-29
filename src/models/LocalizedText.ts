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
 * @interface LocalizedText
 */
export interface LocalizedText {
    /**
     * 
     * @type {string}
     * @memberof LocalizedText
     */
    Locale?: string;
    /**
     * 
     * @type {string}
     * @memberof LocalizedText
     */
    Text?: string;
}

/**
 * Check if a given object implements the LocalizedText interface.
 */
export function instanceOfLocalizedText(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LocalizedTextFromJSON(json: any): LocalizedText {
    return LocalizedTextFromJSONTyped(json, false);
}

export function LocalizedTextFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocalizedText {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Locale': !exists(json, 'Locale') ? undefined : json['Locale'],
        'Text': !exists(json, 'Text') ? undefined : json['Text'],
    };
}

export function LocalizedTextToJSON(value?: LocalizedText | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Locale': value.Locale,
        'Text': value.Text,
    };
}

