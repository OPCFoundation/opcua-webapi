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
export const FilterOperator = {
    Equals: 0,
    IsNull: 1,
    GreaterThan: 2,
    LessThan: 3,
    GreaterThanOrEqual: 4,
    LessThanOrEqual: 5,
    Like: 6,
    Not: 7,
    Between: 8,
    InList: 9,
    And: 10,
    Or: 11,
    Cast: 12,
    InView: 13,
    OfType: 14,
    RelatedTo: 15,
    BitwiseAnd: 16,
    BitwiseOr: 17
} as const;
export type FilterOperator = typeof FilterOperator[keyof typeof FilterOperator];


export function FilterOperatorFromJSON(json: any): FilterOperator {
    return FilterOperatorFromJSONTyped(json, false);
}

export function FilterOperatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): FilterOperator {
    return json as FilterOperator;
}

export function FilterOperatorToJSON(value?: FilterOperator | null): any {
    return value as any;
}

