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
 * @interface UserTokenPolicy
 */
export interface UserTokenPolicy {
    /**
     * 
     * @type {string}
     * @memberof UserTokenPolicy
     */
    PolicyId?: string;
    /**
     * 
     * @type {number}
     * @memberof UserTokenPolicy
     */
    TokenType?: number;
    /**
     * 
     * @type {string}
     * @memberof UserTokenPolicy
     */
    IssuedTokenType?: string;
    /**
     * 
     * @type {string}
     * @memberof UserTokenPolicy
     */
    IssuerEndpointUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof UserTokenPolicy
     */
    SecurityPolicyUri?: string;
}

/**
 * Check if a given object implements the UserTokenPolicy interface.
 */
export function instanceOfUserTokenPolicy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserTokenPolicyFromJSON(json: any): UserTokenPolicy {
    return UserTokenPolicyFromJSONTyped(json, false);
}

export function UserTokenPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserTokenPolicy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'PolicyId': !exists(json, 'PolicyId') ? undefined : json['PolicyId'],
        'TokenType': !exists(json, 'TokenType') ? undefined : json['TokenType'],
        'IssuedTokenType': !exists(json, 'IssuedTokenType') ? undefined : json['IssuedTokenType'],
        'IssuerEndpointUrl': !exists(json, 'IssuerEndpointUrl') ? undefined : json['IssuerEndpointUrl'],
        'SecurityPolicyUri': !exists(json, 'SecurityPolicyUri') ? undefined : json['SecurityPolicyUri'],
    };
}

export function UserTokenPolicyToJSON(value?: UserTokenPolicy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'PolicyId': value.PolicyId,
        'TokenType': value.TokenType,
        'IssuedTokenType': value.IssuedTokenType,
        'IssuerEndpointUrl': value.IssuerEndpointUrl,
        'SecurityPolicyUri': value.SecurityPolicyUri,
    };
}

