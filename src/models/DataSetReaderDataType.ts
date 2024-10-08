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
import type { DataSetMetaDataType } from './DataSetMetaDataType';
import {
    DataSetMetaDataTypeFromJSON,
    DataSetMetaDataTypeFromJSONTyped,
    DataSetMetaDataTypeToJSON,
} from './DataSetMetaDataType';
import type { EndpointDescription } from './EndpointDescription';
import {
    EndpointDescriptionFromJSON,
    EndpointDescriptionFromJSONTyped,
    EndpointDescriptionToJSON,
} from './EndpointDescription';
import type { ExtensionObject } from './ExtensionObject';
import {
    ExtensionObjectFromJSON,
    ExtensionObjectFromJSONTyped,
    ExtensionObjectToJSON,
} from './ExtensionObject';
import type { KeyValuePair } from './KeyValuePair';
import {
    KeyValuePairFromJSON,
    KeyValuePairFromJSONTyped,
    KeyValuePairToJSON,
} from './KeyValuePair';
import type { Variant } from './Variant';
import {
    VariantFromJSON,
    VariantFromJSONTyped,
    VariantToJSON,
} from './Variant';

/**
 * 
 * @export
 * @interface DataSetReaderDataType
 */
export interface DataSetReaderDataType {
    /**
     * 
     * @type {string}
     * @memberof DataSetReaderDataType
     */
    Name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DataSetReaderDataType
     */
    Enabled?: boolean;
    /**
     * 
     * @type {Variant}
     * @memberof DataSetReaderDataType
     */
    PublisherId?: Variant;
    /**
     * 
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    WriterGroupId?: number;
    /**
     * 
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    DataSetWriterId?: number;
    /**
     * 
     * @type {DataSetMetaDataType}
     * @memberof DataSetReaderDataType
     */
    DataSetMetaData?: DataSetMetaDataType;
    /**
     * 
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    DataSetFieldContentMask?: number;
    /**
     * 
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    MessageReceiveTimeout?: number;
    /**
     * 
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    KeyFrameCount?: number;
    /**
     * 
     * @type {string}
     * @memberof DataSetReaderDataType
     */
    HeaderLayoutUri?: string;
    /**
     * 
     * @type {number}
     * @memberof DataSetReaderDataType
     */
    SecurityMode?: number;
    /**
     * 
     * @type {string}
     * @memberof DataSetReaderDataType
     */
    SecurityGroupId?: string;
    /**
     * 
     * @type {Array<EndpointDescription>}
     * @memberof DataSetReaderDataType
     */
    SecurityKeyServices?: Array<EndpointDescription>;
    /**
     * 
     * @type {Array<KeyValuePair>}
     * @memberof DataSetReaderDataType
     */
    DataSetReaderProperties?: Array<KeyValuePair>;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof DataSetReaderDataType
     */
    TransportSettings?: ExtensionObject;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof DataSetReaderDataType
     */
    MessageSettings?: ExtensionObject;
    /**
     * 
     * @type {ExtensionObject}
     * @memberof DataSetReaderDataType
     */
    SubscribedDataSet?: ExtensionObject;
}

/**
 * Check if a given object implements the DataSetReaderDataType interface.
 */
export function instanceOfDataSetReaderDataType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DataSetReaderDataTypeFromJSON(json: any): DataSetReaderDataType {
    return DataSetReaderDataTypeFromJSONTyped(json, false);
}

export function DataSetReaderDataTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataSetReaderDataType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'Name': !exists(json, 'Name') ? undefined : json['Name'],
        'Enabled': !exists(json, 'Enabled') ? undefined : json['Enabled'],
        'PublisherId': !exists(json, 'PublisherId') ? undefined : VariantFromJSON(json['PublisherId']),
        'WriterGroupId': !exists(json, 'WriterGroupId') ? undefined : json['WriterGroupId'],
        'DataSetWriterId': !exists(json, 'DataSetWriterId') ? undefined : json['DataSetWriterId'],
        'DataSetMetaData': !exists(json, 'DataSetMetaData') ? undefined : DataSetMetaDataTypeFromJSON(json['DataSetMetaData']),
        'DataSetFieldContentMask': !exists(json, 'DataSetFieldContentMask') ? undefined : json['DataSetFieldContentMask'],
        'MessageReceiveTimeout': !exists(json, 'MessageReceiveTimeout') ? undefined : json['MessageReceiveTimeout'],
        'KeyFrameCount': !exists(json, 'KeyFrameCount') ? undefined : json['KeyFrameCount'],
        'HeaderLayoutUri': !exists(json, 'HeaderLayoutUri') ? undefined : json['HeaderLayoutUri'],
        'SecurityMode': !exists(json, 'SecurityMode') ? undefined : json['SecurityMode'],
        'SecurityGroupId': !exists(json, 'SecurityGroupId') ? undefined : json['SecurityGroupId'],
        'SecurityKeyServices': !exists(json, 'SecurityKeyServices') ? undefined : ((json['SecurityKeyServices'] as Array<any>).map(EndpointDescriptionFromJSON)),
        'DataSetReaderProperties': !exists(json, 'DataSetReaderProperties') ? undefined : ((json['DataSetReaderProperties'] as Array<any>).map(KeyValuePairFromJSON)),
        'TransportSettings': !exists(json, 'TransportSettings') ? undefined : ExtensionObjectFromJSON(json['TransportSettings']),
        'MessageSettings': !exists(json, 'MessageSettings') ? undefined : ExtensionObjectFromJSON(json['MessageSettings']),
        'SubscribedDataSet': !exists(json, 'SubscribedDataSet') ? undefined : ExtensionObjectFromJSON(json['SubscribedDataSet']),
    };
}

export function DataSetReaderDataTypeToJSON(value?: DataSetReaderDataType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Name': value.Name,
        'Enabled': value.Enabled,
        'PublisherId': VariantToJSON(value.PublisherId),
        'WriterGroupId': value.WriterGroupId,
        'DataSetWriterId': value.DataSetWriterId,
        'DataSetMetaData': DataSetMetaDataTypeToJSON(value.DataSetMetaData),
        'DataSetFieldContentMask': value.DataSetFieldContentMask,
        'MessageReceiveTimeout': value.MessageReceiveTimeout,
        'KeyFrameCount': value.KeyFrameCount,
        'HeaderLayoutUri': value.HeaderLayoutUri,
        'SecurityMode': value.SecurityMode,
        'SecurityGroupId': value.SecurityGroupId,
        'SecurityKeyServices': value.SecurityKeyServices === undefined ? undefined : ((value.SecurityKeyServices as Array<any>).map(EndpointDescriptionToJSON)),
        'DataSetReaderProperties': value.DataSetReaderProperties === undefined ? undefined : ((value.DataSetReaderProperties as Array<any>).map(KeyValuePairToJSON)),
        'TransportSettings': ExtensionObjectToJSON(value.TransportSettings),
        'MessageSettings': ExtensionObjectToJSON(value.MessageSettings),
        'SubscribedDataSet': ExtensionObjectToJSON(value.SubscribedDataSet),
    };
}

