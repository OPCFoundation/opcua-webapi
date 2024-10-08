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
import type { ExtensionObject } from './ExtensionObject';
import {
    ExtensionObjectFromJSON,
    ExtensionObjectFromJSONTyped,
    ExtensionObjectToJSON,
} from './ExtensionObject';
import type { RequestHeader } from './RequestHeader';
import {
    RequestHeaderFromJSON,
    RequestHeaderFromJSONTyped,
    RequestHeaderToJSON,
} from './RequestHeader';
import type { SignatureData } from './SignatureData';
import {
    SignatureDataFromJSON,
    SignatureDataFromJSONTyped,
    SignatureDataToJSON,
} from './SignatureData';
import type { SignedSoftwareCertificate } from './SignedSoftwareCertificate';
import {
    SignedSoftwareCertificateFromJSON,
    SignedSoftwareCertificateFromJSONTyped,
    SignedSoftwareCertificateToJSON,
} from './SignedSoftwareCertificate';

/**
 * 
 * @export
 * @interface ActivateSessionRequest
 */
export interface ActivateSessionRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof ActivateSessionRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {SignatureData}
     * @memberof ActivateSessionRequest
     */
    ClientSignature?: SignatureData;
    /**
     * 
     * @type {Array<SignedSoftwareCertificate>}
     * @memberof ActivateSessionRequest
     */
    ClientSoftwareCertificates?: Array<SignedSoftwareCertificate>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ActivateSessionRequest
     */
    LocaleIds?: Array<string>;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof ActivateSessionRequest
     */
    UserIdentityToken?: ExtensionObject;
    /**
     * 
     * @type {SignatureData}
     * @memberof ActivateSessionRequest
     */
    UserTokenSignature?: SignatureData;
}

/**
 * Check if a given object implements the ActivateSessionRequest interface.
 */
export function instanceOfActivateSessionRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivateSessionRequestFromJSON(json: any): ActivateSessionRequest {
    return ActivateSessionRequestFromJSONTyped(json, false);
}

export function ActivateSessionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivateSessionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'RequestHeader': !exists(json, 'RequestHeader') ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'ClientSignature': !exists(json, 'ClientSignature') ? undefined : SignatureDataFromJSON(json['ClientSignature']),
        'ClientSoftwareCertificates': !exists(json, 'ClientSoftwareCertificates') ? undefined : ((json['ClientSoftwareCertificates'] as Array<any>).map(SignedSoftwareCertificateFromJSON)),
        'LocaleIds': !exists(json, 'LocaleIds') ? undefined : json['LocaleIds'],
        'UserIdentityToken': !exists(json, 'UserIdentityToken') ? undefined : ExtensionObjectFromJSON(json['UserIdentityToken']),
        'UserTokenSignature': !exists(json, 'UserTokenSignature') ? undefined : SignatureDataFromJSON(json['UserTokenSignature']),
    };
}

export function ActivateSessionRequestToJSON(value?: ActivateSessionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'RequestHeader': RequestHeaderToJSON(value.RequestHeader),
        'ClientSignature': SignatureDataToJSON(value.ClientSignature),
        'ClientSoftwareCertificates': value.ClientSoftwareCertificates === undefined ? undefined : ((value.ClientSoftwareCertificates as Array<any>).map(SignedSoftwareCertificateToJSON)),
        'LocaleIds': value.LocaleIds,
        'UserIdentityToken': ExtensionObjectToJSON(value.UserIdentityToken),
        'UserTokenSignature': SignatureDataToJSON(value.UserTokenSignature),
    };
}

