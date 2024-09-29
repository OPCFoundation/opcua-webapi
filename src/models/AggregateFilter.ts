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
import type { AggregateConfiguration } from './AggregateConfiguration';
import {
    AggregateConfigurationFromJSON,
    AggregateConfigurationFromJSONTyped,
    AggregateConfigurationToJSON,
} from './AggregateConfiguration';

/**
 * 
 * @export
 * @interface AggregateFilter
 */
export interface AggregateFilter {
    /**
     * 
     * @type {Date}
     * @memberof AggregateFilter
     */
    StartTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof AggregateFilter
     */
    AggregateType?: string;
    /**
     * 
     * @type {number}
     * @memberof AggregateFilter
     */
    ProcessingInterval?: number;
    /**
     * 
     * @type {AggregateConfiguration}
     * @memberof AggregateFilter
     */
    AggregateConfiguration?: AggregateConfiguration;
}

/**
 * Check if a given object implements the AggregateFilter interface.
 */
export function instanceOfAggregateFilter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AggregateFilterFromJSON(json: any): AggregateFilter {
    return AggregateFilterFromJSONTyped(json, false);
}

export function AggregateFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'StartTime': !exists(json, 'StartTime') ? undefined : (new Date(json['StartTime'])),
        'AggregateType': !exists(json, 'AggregateType') ? undefined : json['AggregateType'],
        'ProcessingInterval': !exists(json, 'ProcessingInterval') ? undefined : json['ProcessingInterval'],
        'AggregateConfiguration': !exists(json, 'AggregateConfiguration') ? undefined : AggregateConfigurationFromJSON(json['AggregateConfiguration']),
    };
}

export function AggregateFilterToJSON(value?: AggregateFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'StartTime': value.StartTime === undefined ? undefined : (value.StartTime.toISOString()),
        'AggregateType': value.AggregateType,
        'ProcessingInterval': value.ProcessingInterval,
        'AggregateConfiguration': AggregateConfigurationToJSON(value.AggregateConfiguration),
    };
}

