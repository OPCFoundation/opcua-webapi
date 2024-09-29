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
 * @interface IssuedIdentityToken
 */
export interface IssuedIdentityToken {
    /**
     * 
     * @type {string}
     * @memberof IssuedIdentityToken
     */
    TokenData?: string;
    /**
     * 
     * @type {string}
     * @memberof IssuedIdentityToken
     */
    EncryptionAlgorithm?: string;
    /**
     * 
     * @type {string}
     * @memberof IssuedIdentityToken
     */
    PolicyId?: string;
}

/**
 * Check if a given object implements the IssuedIdentityToken interface.
 */
export function instanceOfIssuedIdentityToken(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IssuedIdentityTokenFromJSON(json: any): IssuedIdentityToken {
    return IssuedIdentityTokenFromJSONTyped(json, false);
}

export function IssuedIdentityTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): IssuedIdentityToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'TokenData': !exists(json, 'TokenData') ? undefined : json['TokenData'],
        'EncryptionAlgorithm': !exists(json, 'EncryptionAlgorithm') ? undefined : json['EncryptionAlgorithm'],
        'PolicyId': !exists(json, 'PolicyId') ? undefined : json['PolicyId'],
    };
}

export function IssuedIdentityTokenToJSON(value?: IssuedIdentityToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'TokenData': value.TokenData,
        'EncryptionAlgorithm': value.EncryptionAlgorithm,
        'PolicyId': value.PolicyId,
    };
}

