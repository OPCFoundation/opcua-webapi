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
 * @interface LiteralOperand
 */
export interface LiteralOperand {
    /**
     * 
     * @type {Variant}
     * @memberof LiteralOperand
     */
    Value?: Variant;
}

/**
 * Check if a given object implements the LiteralOperand interface.
 */
export function instanceOfLiteralOperand(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LiteralOperandFromJSON(json: any): LiteralOperand {
    return LiteralOperandFromJSONTyped(json, false);
}

export function LiteralOperandFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiteralOperand {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Value': !exists(json, 'Value') ? undefined : VariantFromJSON(json['Value']),
    };
}

export function LiteralOperandToJSON(value?: LiteralOperand | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Value': VariantToJSON(value.Value),
    };
}

