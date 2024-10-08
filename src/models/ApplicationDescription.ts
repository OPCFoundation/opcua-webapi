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
 * @interface ApplicationDescription
 */
export interface ApplicationDescription {
    /**
     * 
     * @type {string}
     * @memberof ApplicationDescription
     */
    ApplicationUri?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationDescription
     */
    ProductUri?: string;
    /**
     * 
     * @type {LocalizedText}
     * @memberof ApplicationDescription
     */
    ApplicationName?: LocalizedText;
    /**
     * 
     * @type {number}
     * @memberof ApplicationDescription
     */
    ApplicationType?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplicationDescription
     */
    GatewayServerUri?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplicationDescription
     */
    DiscoveryProfileUri?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApplicationDescription
     */
    DiscoveryUrls?: Array<string>;
}

/**
 * Check if a given object implements the ApplicationDescription interface.
 */
export function instanceOfApplicationDescription(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ApplicationDescriptionFromJSON(json: any): ApplicationDescription {
    return ApplicationDescriptionFromJSONTyped(json, false);
}

export function ApplicationDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationDescription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ApplicationUri': !exists(json, 'ApplicationUri') ? undefined : json['ApplicationUri'],
        'ProductUri': !exists(json, 'ProductUri') ? undefined : json['ProductUri'],
        'ApplicationName': !exists(json, 'ApplicationName') ? undefined : LocalizedTextFromJSON(json['ApplicationName']),
        'ApplicationType': !exists(json, 'ApplicationType') ? undefined : json['ApplicationType'],
        'GatewayServerUri': !exists(json, 'GatewayServerUri') ? undefined : json['GatewayServerUri'],
        'DiscoveryProfileUri': !exists(json, 'DiscoveryProfileUri') ? undefined : json['DiscoveryProfileUri'],
        'DiscoveryUrls': !exists(json, 'DiscoveryUrls') ? undefined : json['DiscoveryUrls'],
    };
}

export function ApplicationDescriptionToJSON(value?: ApplicationDescription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ApplicationUri': value.ApplicationUri,
        'ProductUri': value.ProductUri,
        'ApplicationName': LocalizedTextToJSON(value.ApplicationName),
        'ApplicationType': value.ApplicationType,
        'GatewayServerUri': value.GatewayServerUri,
        'DiscoveryProfileUri': value.DiscoveryProfileUri,
        'DiscoveryUrls': value.DiscoveryUrls,
    };
}

