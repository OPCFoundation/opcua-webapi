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


/**
 * 
 * @export
 */
export const DataChangeTrigger = {
    Status: 0,
    StatusValue: 1,
    StatusValueTimestamp: 2
} as const;
export type DataChangeTrigger = typeof DataChangeTrigger[keyof typeof DataChangeTrigger];


export function DataChangeTriggerFromJSON(json: any): DataChangeTrigger {
    return DataChangeTriggerFromJSONTyped(json, false);
}

export function DataChangeTriggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataChangeTrigger {
    return json as DataChangeTrigger;
}

export function DataChangeTriggerToJSON(value?: DataChangeTrigger | null): any {
    return value as any;
}

