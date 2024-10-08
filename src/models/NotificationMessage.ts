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

/**
 * 
 * @export
 * @interface NotificationMessage
 */
export interface NotificationMessage {
    /**
     * 
     * @type {number}
     * @memberof NotificationMessage
     */
    SequenceNumber?: number;
    /**
     * 
     * @type {Date}
     * @memberof NotificationMessage
     */
    PublishTime?: Date;
    /**
     * 
     * @type {Array<ExtensionObject>}
     * @memberof NotificationMessage
     */
    NotificationData?: Array<ExtensionObject>;
}

/**
 * Check if a given object implements the NotificationMessage interface.
 */
export function instanceOfNotificationMessage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NotificationMessageFromJSON(json: any): NotificationMessage {
    return NotificationMessageFromJSONTyped(json, false);
}

export function NotificationMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'SequenceNumber': !exists(json, 'SequenceNumber') ? undefined : json['SequenceNumber'],
        'PublishTime': !exists(json, 'PublishTime') ? undefined : (new Date(json['PublishTime'])),
        'NotificationData': !exists(json, 'NotificationData') ? undefined : ((json['NotificationData'] as Array<any>).map(ExtensionObjectFromJSON)),
    };
}

export function NotificationMessageToJSON(value?: NotificationMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'SequenceNumber': value.SequenceNumber,
        'PublishTime': value.PublishTime === undefined ? undefined : (value.PublishTime.toISOString()),
        'NotificationData': value.NotificationData === undefined ? undefined : ((value.NotificationData as Array<any>).map(ExtensionObjectToJSON)),
    };
}

