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
import type { ApplicationDescription } from './ApplicationDescription';
import {
    ApplicationDescriptionFromJSON,
    ApplicationDescriptionFromJSONTyped,
    ApplicationDescriptionToJSON,
} from './ApplicationDescription';
import type { RequestHeader } from './RequestHeader';
import {
    RequestHeaderFromJSON,
    RequestHeaderFromJSONTyped,
    RequestHeaderToJSON,
} from './RequestHeader';

/**
 * 
 * @export
 * @interface CreateSessionRequest
 */
export interface CreateSessionRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof CreateSessionRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {ApplicationDescription}
     * @memberof CreateSessionRequest
     */
    ClientDescription?: ApplicationDescription;
    /**
     * 
     * @type {string}
     * @memberof CreateSessionRequest
     */
    ServerUri?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSessionRequest
     */
    EndpointUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSessionRequest
     */
    SessionName?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSessionRequest
     */
    ClientNonce?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSessionRequest
     */
    ClientCertificate?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateSessionRequest
     */
    RequestedSessionTimeout?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateSessionRequest
     */
    MaxResponseMessageSize?: number;
}

/**
 * Check if a given object implements the CreateSessionRequest interface.
 */
export function instanceOfCreateSessionRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateSessionRequestFromJSON(json: any): CreateSessionRequest {
    return CreateSessionRequestFromJSONTyped(json, false);
}

export function CreateSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSessionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'RequestHeader': !exists(json, 'RequestHeader') ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'ClientDescription': !exists(json, 'ClientDescription') ? undefined : ApplicationDescriptionFromJSON(json['ClientDescription']),
        'ServerUri': !exists(json, 'ServerUri') ? undefined : json['ServerUri'],
        'EndpointUrl': !exists(json, 'EndpointUrl') ? undefined : json['EndpointUrl'],
        'SessionName': !exists(json, 'SessionName') ? undefined : json['SessionName'],
        'ClientNonce': !exists(json, 'ClientNonce') ? undefined : json['ClientNonce'],
        'ClientCertificate': !exists(json, 'ClientCertificate') ? undefined : json['ClientCertificate'],
        'RequestedSessionTimeout': !exists(json, 'RequestedSessionTimeout') ? undefined : json['RequestedSessionTimeout'],
        'MaxResponseMessageSize': !exists(json, 'MaxResponseMessageSize') ? undefined : json['MaxResponseMessageSize'],
    };
}

export function CreateSessionRequestToJSON(value?: CreateSessionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'RequestHeader': RequestHeaderToJSON(value.RequestHeader),
        'ClientDescription': ApplicationDescriptionToJSON(value.ClientDescription),
        'ServerUri': value.ServerUri,
        'EndpointUrl': value.EndpointUrl,
        'SessionName': value.SessionName,
        'ClientNonce': value.ClientNonce,
        'ClientCertificate': value.ClientCertificate,
        'RequestedSessionTimeout': value.RequestedSessionTimeout,
        'MaxResponseMessageSize': value.MaxResponseMessageSize,
    };
}

