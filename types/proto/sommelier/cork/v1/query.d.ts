import { Params } from "./genesis";
import { Cork, ScheduledCork } from "./cork";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponse {
    /** allocation parameters */
    params: Params;
}
/** QuerySubmittedCorksRequest is the request type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksRequest {
}
/** QuerySubmittedCorksResponse is the response type for the Query/QuerySubmittedCorks gRPC query method. */
export interface QuerySubmittedCorksResponse {
    /** corks in keeper awaiting vote */
    corks: Cork[];
}
/** QueryCommitPeriodRequest is the request type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodRequest {
}
/** QueryCommitPeriodResponse is the response type for the Query/QueryCommitPeriod gRPC method. */
export interface QueryCommitPeriodResponse {
    /** block height at which the query was processed */
    currentHeight: Long;
    /** latest vote period start block height */
    votePeriodStart: Long;
    /** block height at which the current voting period ends */
    votePeriodEnd: Long;
}
/** QueryCellarIDsRequest is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequest {
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellars gRPC method. */
export interface QueryCellarIDsResponse {
    cellarIds: string[];
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequest {
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponse {
    corks: ScheduledCork[];
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequest {
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponse {
    blockHeights: Long[];
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequest {
    blockHeight: Long;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponse {
    corks: ScheduledCork[];
}
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
export declare const QuerySubmittedCorksRequest: {
    encode(_: QuerySubmittedCorksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubmittedCorksRequest;
    fromJSON(_: any): QuerySubmittedCorksRequest;
    toJSON(_: QuerySubmittedCorksRequest): unknown;
    fromPartial(_: DeepPartial<QuerySubmittedCorksRequest>): QuerySubmittedCorksRequest;
};
export declare const QuerySubmittedCorksResponse: {
    encode(message: QuerySubmittedCorksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubmittedCorksResponse;
    fromJSON(object: any): QuerySubmittedCorksResponse;
    toJSON(message: QuerySubmittedCorksResponse): unknown;
    fromPartial(object: DeepPartial<QuerySubmittedCorksResponse>): QuerySubmittedCorksResponse;
};
export declare const QueryCommitPeriodRequest: {
    encode(_: QueryCommitPeriodRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitPeriodRequest;
    fromJSON(_: any): QueryCommitPeriodRequest;
    toJSON(_: QueryCommitPeriodRequest): unknown;
    fromPartial(_: DeepPartial<QueryCommitPeriodRequest>): QueryCommitPeriodRequest;
};
export declare const QueryCommitPeriodResponse: {
    encode(message: QueryCommitPeriodResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommitPeriodResponse;
    fromJSON(object: any): QueryCommitPeriodResponse;
    toJSON(message: QueryCommitPeriodResponse): unknown;
    fromPartial(object: DeepPartial<QueryCommitPeriodResponse>): QueryCommitPeriodResponse;
};
export declare const QueryCellarIDsRequest: {
    encode(_: QueryCellarIDsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCellarIDsRequest;
    fromJSON(_: any): QueryCellarIDsRequest;
    toJSON(_: QueryCellarIDsRequest): unknown;
    fromPartial(_: DeepPartial<QueryCellarIDsRequest>): QueryCellarIDsRequest;
};
export declare const QueryCellarIDsResponse: {
    encode(message: QueryCellarIDsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCellarIDsResponse;
    fromJSON(object: any): QueryCellarIDsResponse;
    toJSON(message: QueryCellarIDsResponse): unknown;
    fromPartial(object: DeepPartial<QueryCellarIDsResponse>): QueryCellarIDsResponse;
};
export declare const QueryScheduledCorksRequest: {
    encode(_: QueryScheduledCorksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledCorksRequest;
    fromJSON(_: any): QueryScheduledCorksRequest;
    toJSON(_: QueryScheduledCorksRequest): unknown;
    fromPartial(_: DeepPartial<QueryScheduledCorksRequest>): QueryScheduledCorksRequest;
};
export declare const QueryScheduledCorksResponse: {
    encode(message: QueryScheduledCorksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledCorksResponse;
    fromJSON(object: any): QueryScheduledCorksResponse;
    toJSON(message: QueryScheduledCorksResponse): unknown;
    fromPartial(object: DeepPartial<QueryScheduledCorksResponse>): QueryScheduledCorksResponse;
};
export declare const QueryScheduledBlockHeightsRequest: {
    encode(_: QueryScheduledBlockHeightsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledBlockHeightsRequest;
    fromJSON(_: any): QueryScheduledBlockHeightsRequest;
    toJSON(_: QueryScheduledBlockHeightsRequest): unknown;
    fromPartial(_: DeepPartial<QueryScheduledBlockHeightsRequest>): QueryScheduledBlockHeightsRequest;
};
export declare const QueryScheduledBlockHeightsResponse: {
    encode(message: QueryScheduledBlockHeightsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledBlockHeightsResponse;
    fromJSON(object: any): QueryScheduledBlockHeightsResponse;
    toJSON(message: QueryScheduledBlockHeightsResponse): unknown;
    fromPartial(object: DeepPartial<QueryScheduledBlockHeightsResponse>): QueryScheduledBlockHeightsResponse;
};
export declare const QueryScheduledCorksByBlockHeightRequest: {
    encode(message: QueryScheduledCorksByBlockHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledCorksByBlockHeightRequest;
    fromJSON(object: any): QueryScheduledCorksByBlockHeightRequest;
    toJSON(message: QueryScheduledCorksByBlockHeightRequest): unknown;
    fromPartial(object: DeepPartial<QueryScheduledCorksByBlockHeightRequest>): QueryScheduledCorksByBlockHeightRequest;
};
export declare const QueryScheduledCorksByBlockHeightResponse: {
    encode(message: QueryScheduledCorksByBlockHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryScheduledCorksByBlockHeightResponse;
    fromJSON(object: any): QueryScheduledCorksByBlockHeightResponse;
    toJSON(message: QueryScheduledCorksByBlockHeightResponse): unknown;
    fromPartial(object: DeepPartial<QueryScheduledCorksByBlockHeightResponse>): QueryScheduledCorksByBlockHeightResponse;
};
