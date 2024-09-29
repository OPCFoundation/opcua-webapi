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
export const PubSubState = {
    Disabled: 0,
    Paused: 1,
    Operational: 2,
    Error: 3,
    PreOperational: 4
} as const;
export type PubSubState = typeof PubSubState[keyof typeof PubSubState];


export function PubSubStateFromJSON(json: any): PubSubState {
    return PubSubStateFromJSONTyped(json, false);
}

export function PubSubStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PubSubState {
    return json as PubSubState;
}

export function PubSubStateToJSON(value?: PubSubState | null): any {
    return value as any;
}

