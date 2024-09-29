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
import type { RequestHeader } from './RequestHeader';
import {
    RequestHeaderFromJSON,
    RequestHeaderFromJSONTyped,
    RequestHeaderToJSON,
} from './RequestHeader';
import type { SubscriptionAcknowledgement } from './SubscriptionAcknowledgement';
import {
    SubscriptionAcknowledgementFromJSON,
    SubscriptionAcknowledgementFromJSONTyped,
    SubscriptionAcknowledgementToJSON,
} from './SubscriptionAcknowledgement';

/**
 * 
 * @export
 * @interface PublishRequest
 */
export interface PublishRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof PublishRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {Array<SubscriptionAcknowledgement>}
     * @memberof PublishRequest
     */
    SubscriptionAcknowledgements?: Array<SubscriptionAcknowledgement>;
}

/**
 * Check if a given object implements the PublishRequest interface.
 */
export function instanceOfPublishRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PublishRequestFromJSON(json: any): PublishRequest {
    return PublishRequestFromJSONTyped(json, false);
}

export function PublishRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'RequestHeader': !exists(json, 'RequestHeader') ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'SubscriptionAcknowledgements': !exists(json, 'SubscriptionAcknowledgements') ? undefined : ((json['SubscriptionAcknowledgements'] as Array<any>).map(SubscriptionAcknowledgementFromJSON)),
    };
}

export function PublishRequestToJSON(value?: PublishRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'RequestHeader': RequestHeaderToJSON(value.RequestHeader),
        'SubscriptionAcknowledgements': value.SubscriptionAcknowledgements === undefined ? undefined : ((value.SubscriptionAcknowledgements as Array<any>).map(SubscriptionAcknowledgementToJSON)),
    };
}

