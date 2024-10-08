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

/**
 * 
 * @export
 * @interface TransferSubscriptionsRequest
 */
export interface TransferSubscriptionsRequest {
    /**
     * 
     * @type {RequestHeader}
     * @memberof TransferSubscriptionsRequest
     */
    RequestHeader?: RequestHeader;
    /**
     * 
     * @type {Array<number>}
     * @memberof TransferSubscriptionsRequest
     */
    SubscriptionIds?: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof TransferSubscriptionsRequest
     */
    SendInitialValues?: boolean;
}

/**
 * Check if a given object implements the TransferSubscriptionsRequest interface.
 */
export function instanceOfTransferSubscriptionsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransferSubscriptionsRequestFromJSON(json: any): TransferSubscriptionsRequest {
    return TransferSubscriptionsRequestFromJSONTyped(json, false);
}

export function TransferSubscriptionsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferSubscriptionsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'RequestHeader': !exists(json, 'RequestHeader') ? undefined : RequestHeaderFromJSON(json['RequestHeader']),
        'SubscriptionIds': !exists(json, 'SubscriptionIds') ? undefined : json['SubscriptionIds'],
        'SendInitialValues': !exists(json, 'SendInitialValues') ? undefined : json['SendInitialValues'],
    };
}

export function TransferSubscriptionsRequestToJSON(value?: TransferSubscriptionsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'RequestHeader': RequestHeaderToJSON(value.RequestHeader),
        'SubscriptionIds': value.SubscriptionIds,
        'SendInitialValues': value.SendInitialValues,
    };
}

