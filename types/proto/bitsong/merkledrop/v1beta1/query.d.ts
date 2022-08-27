import { Merkledrop } from "./merkledrop";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface QueryMerkledropRequest {
    id: Long;
}
export interface QueryMerkledropResponse {
    merkledrop: Merkledrop;
}
export interface QueryIndexClaimedRequest {
    id: Long;
    index: Long;
}
export interface QueryIndexClaimedResponse {
    isClaimed: boolean;
}
/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
    params: Params;
}
export declare const QueryMerkledropRequest: {
    encode(message: QueryMerkledropRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMerkledropRequest;
    fromJSON(object: any): QueryMerkledropRequest;
    toJSON(message: QueryMerkledropRequest): unknown;
    fromPartial(object: DeepPartial<QueryMerkledropRequest>): QueryMerkledropRequest;
};
export declare const QueryMerkledropResponse: {
    encode(message: QueryMerkledropResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMerkledropResponse;
    fromJSON(object: any): QueryMerkledropResponse;
    toJSON(message: QueryMerkledropResponse): unknown;
    fromPartial(object: DeepPartial<QueryMerkledropResponse>): QueryMerkledropResponse;
};
export declare const QueryIndexClaimedRequest: {
    encode(message: QueryIndexClaimedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndexClaimedRequest;
    fromJSON(object: any): QueryIndexClaimedRequest;
    toJSON(message: QueryIndexClaimedRequest): unknown;
    fromPartial(object: DeepPartial<QueryIndexClaimedRequest>): QueryIndexClaimedRequest;
};
export declare const QueryIndexClaimedResponse: {
    encode(message: QueryIndexClaimedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndexClaimedResponse;
    fromJSON(object: any): QueryIndexClaimedResponse;
    toJSON(message: QueryIndexClaimedResponse): unknown;
    fromPartial(object: DeepPartial<QueryIndexClaimedResponse>): QueryIndexClaimedResponse;
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
