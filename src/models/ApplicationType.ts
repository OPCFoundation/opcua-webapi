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
export const ApplicationType = {
    Server: 0,
    Client: 1,
    ClientAndServer: 2,
    DiscoveryServer: 3
} as const;
export type ApplicationType = typeof ApplicationType[keyof typeof ApplicationType];


export function ApplicationTypeFromJSON(json: any): ApplicationType {
    return ApplicationTypeFromJSONTyped(json, false);
}

export function ApplicationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationType {
    return json as ApplicationType;
}

export function ApplicationTypeToJSON(value?: ApplicationType | null): any {
    return value as any;
}

