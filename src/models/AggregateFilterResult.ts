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
 * @interface AggregateFilterResult
 */
export interface AggregateFilterResult {
    /**
     * 
     * @type {Date}
     * @memberof AggregateFilterResult
     */
    RevisedStartTime?: Date;
    /**
     * 
     * @type {number}
     * @memberof AggregateFilterResult
     */
    RevisedProcessingInterval?: number;
    /**
     * 
     * @type {AggregateConfiguration}
     * @memberof AggregateFilterResult
     */
    RevisedAggregateConfiguration?: AggregateConfiguration;
}

/**
 * Check if a given object implements the AggregateFilterResult interface.
 */
export function instanceOfAggregateFilterResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AggregateFilterResultFromJSON(json: any): AggregateFilterResult {
    return AggregateFilterResultFromJSONTyped(json, false);
}

export function AggregateFilterResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): AggregateFilterResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'RevisedStartTime': !exists(json, 'RevisedStartTime') ? undefined : (new Date(json['RevisedStartTime'])),
        'RevisedProcessingInterval': !exists(json, 'RevisedProcessingInterval') ? undefined : json['RevisedProcessingInterval'],
        'RevisedAggregateConfiguration': !exists(json, 'RevisedAggregateConfiguration') ? undefined : AggregateConfigurationFromJSON(json['RevisedAggregateConfiguration']),
    };
}

export function AggregateFilterResultToJSON(value?: AggregateFilterResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'RevisedStartTime': value.RevisedStartTime === undefined ? undefined : (value.RevisedStartTime.toISOString()),
        'RevisedProcessingInterval': value.RevisedProcessingInterval,
        'RevisedAggregateConfiguration': AggregateConfigurationToJSON(value.RevisedAggregateConfiguration),
    };
}

