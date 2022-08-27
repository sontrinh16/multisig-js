import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryResponseRecord {
    ipld: string;
    data: Uint8Array;
}
export interface QueryRecordsByIdRequest {
    /**
     * The ISCN ID of the record(s) to be queried.
     * Format: iscn://REGISTRY_NAME/CONTENT_ID[/VERSION]
     * If version part omitted, version is default to 0.
     * if non-zero version exists, then from_version and to_version are ignored.
     */
    iscnId: string;
    /**
     * The initial version in the resulting records.
     * If omitted or is 0, then it will be interpreted as the latest version.
     */
    fromVersion: Long;
    /**
     * The final version in the resulting records.
     * If omitted or is 0, then it will be interpreted as the latest version.
     */
    toVersion: Long;
}
export interface QueryRecordsByIdResponse {
    owner: string;
    latestVersion: Long;
    records: QueryResponseRecord[];
}
export interface QueryRecordsByFingerprintRequest {
    /**
     * The fingerprint of the record(s) to be queried.
     * All fingerprints in records should be URIs.
     */
    fingerprint: string;
    /**
     * For pagination.
     * For the first query, fill in 0 or just omit this field.
     * For continuous queries, fill in the `next_sequence` field in the previous response.
     */
    fromSequence: Long;
}
export interface QueryRecordsByFingerprintResponse {
    records: QueryResponseRecord[];
    /** For pagination. */
    nextSequence: Long;
}
export interface QueryRecordsByOwnerRequest {
    /** Owner address of the record(s) to be queried. */
    owner: string;
    /**
     * For pagination.
     * For the first query, fill in 0 or just omit this field.
     * For continuous queries, fill in the `next_sequence` field in the previous response.
     */
    fromSequence: Long;
}
export interface QueryRecordsByOwnerResponse {
    records: QueryResponseRecord[];
    nextSequence: Long;
}
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryGetCidRequest {
    cid: string;
}
export interface QueryGetCidResponse {
    data: Uint8Array;
}
export interface QueryGetCidSizeRequest {
    cid: string;
}
export interface QueryGetCidSizeResponse {
    size: Long;
}
export interface QueryHasCidRequest {
    cid: string;
}
export interface QueryHasCidResponse {
    exist: boolean;
}
export declare const QueryResponseRecord: {
    encode(message: QueryResponseRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResponseRecord;
    fromJSON(object: any): QueryResponseRecord;
    toJSON(message: QueryResponseRecord): unknown;
    fromPartial(object: DeepPartial<QueryResponseRecord>): QueryResponseRecord;
};
export declare const QueryRecordsByIdRequest: {
    encode(message: QueryRecordsByIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByIdRequest;
    fromJSON(object: any): QueryRecordsByIdRequest;
    toJSON(message: QueryRecordsByIdRequest): unknown;
    fromPartial(object: DeepPartial<QueryRecordsByIdRequest>): QueryRecordsByIdRequest;
};
export declare const QueryRecordsByIdResponse: {
    encode(message: QueryRecordsByIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByIdResponse;
    fromJSON(object: any): QueryRecordsByIdResponse;
    toJSON(message: QueryRecordsByIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryRecordsByIdResponse>): QueryRecordsByIdResponse;
};
export declare const QueryRecordsByFingerprintRequest: {
    encode(message: QueryRecordsByFingerprintRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByFingerprintRequest;
    fromJSON(object: any): QueryRecordsByFingerprintRequest;
    toJSON(message: QueryRecordsByFingerprintRequest): unknown;
    fromPartial(object: DeepPartial<QueryRecordsByFingerprintRequest>): QueryRecordsByFingerprintRequest;
};
export declare const QueryRecordsByFingerprintResponse: {
    encode(message: QueryRecordsByFingerprintResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByFingerprintResponse;
    fromJSON(object: any): QueryRecordsByFingerprintResponse;
    toJSON(message: QueryRecordsByFingerprintResponse): unknown;
    fromPartial(object: DeepPartial<QueryRecordsByFingerprintResponse>): QueryRecordsByFingerprintResponse;
};
export declare const QueryRecordsByOwnerRequest: {
    encode(message: QueryRecordsByOwnerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByOwnerRequest;
    fromJSON(object: any): QueryRecordsByOwnerRequest;
    toJSON(message: QueryRecordsByOwnerRequest): unknown;
    fromPartial(object: DeepPartial<QueryRecordsByOwnerRequest>): QueryRecordsByOwnerRequest;
};
export declare const QueryRecordsByOwnerResponse: {
    encode(message: QueryRecordsByOwnerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByOwnerResponse;
    fromJSON(object: any): QueryRecordsByOwnerResponse;
    toJSON(message: QueryRecordsByOwnerResponse): unknown;
    fromPartial(object: DeepPartial<QueryRecordsByOwnerResponse>): QueryRecordsByOwnerResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetCidRequest: {
    encode(message: QueryGetCidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCidRequest;
    fromJSON(object: any): QueryGetCidRequest;
    toJSON(message: QueryGetCidRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCidRequest>): QueryGetCidRequest;
};
export declare const QueryGetCidResponse: {
    encode(message: QueryGetCidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCidResponse;
    fromJSON(object: any): QueryGetCidResponse;
    toJSON(message: QueryGetCidResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCidResponse>): QueryGetCidResponse;
};
export declare const QueryGetCidSizeRequest: {
    encode(message: QueryGetCidSizeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCidSizeRequest;
    fromJSON(object: any): QueryGetCidSizeRequest;
    toJSON(message: QueryGetCidSizeRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCidSizeRequest>): QueryGetCidSizeRequest;
};
export declare const QueryGetCidSizeResponse: {
    encode(message: QueryGetCidSizeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCidSizeResponse;
    fromJSON(object: any): QueryGetCidSizeResponse;
    toJSON(message: QueryGetCidSizeResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCidSizeResponse>): QueryGetCidSizeResponse;
};
export declare const QueryHasCidRequest: {
    encode(message: QueryHasCidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHasCidRequest;
    fromJSON(object: any): QueryHasCidRequest;
    toJSON(message: QueryHasCidRequest): unknown;
    fromPartial(object: DeepPartial<QueryHasCidRequest>): QueryHasCidRequest;
};
export declare const QueryHasCidResponse: {
    encode(message: QueryHasCidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryHasCidResponse;
    fromJSON(object: any): QueryHasCidResponse;
    toJSON(message: QueryHasCidResponse): unknown;
    fromPartial(object: DeepPartial<QueryHasCidResponse>): QueryHasCidResponse;
};
