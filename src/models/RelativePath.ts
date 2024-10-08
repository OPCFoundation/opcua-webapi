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
import type { RelativePathElement } from './RelativePathElement';
import {
    RelativePathElementFromJSON,
    RelativePathElementFromJSONTyped,
    RelativePathElementToJSON,
} from './RelativePathElement';

/**
 * 
 * @export
 * @interface RelativePath
 */
export interface RelativePath {
    /**
     * 
     * @type {Array<RelativePathElement>}
     * @memberof RelativePath
     */
    Elements?: Array<RelativePathElement>;
}

/**
 * Check if a given object implements the RelativePath interface.
 */
export function instanceOfRelativePath(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RelativePathFromJSON(json: any): RelativePath {
    return RelativePathFromJSONTyped(json, false);
}

export function RelativePathFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelativePath {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Elements': !exists(json, 'Elements') ? undefined : ((json['Elements'] as Array<any>).map(RelativePathElementFromJSON)),
    };
}

export function RelativePathToJSON(value?: RelativePath | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Elements': value.Elements === undefined ? undefined : ((value.Elements as Array<any>).map(RelativePathElementToJSON)),
    };
}

