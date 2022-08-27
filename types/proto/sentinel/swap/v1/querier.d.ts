import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Swap } from "./swap";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QuerySwapsRequest {
    pagination: PageRequest;
}
export interface QuerySwapRequest {
    txHash: Uint8Array;
}
export interface QueryParamsRequest {
}
export interface QuerySwapsResponse {
    swaps: Swap[];
    pagination: PageResponse;
}
export interface QuerySwapResponse {
    swap: Swap;
}
export interface QueryParamsResponse {
    params: Params;
}
export declare const QuerySwapsRequest: {
    encode(message: QuerySwapsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapsRequest;
    fromJSON(object: any): QuerySwapsRequest;
    toJSON(message: QuerySwapsRequest): unknown;
    fromPartial(object: DeepPartial<QuerySwapsRequest>): QuerySwapsRequest;
};
export declare const QuerySwapRequest: {
    encode(message: QuerySwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapRequest;
    fromJSON(object: any): QuerySwapRequest;
    toJSON(message: QuerySwapRequest): unknown;
    fromPartial(object: DeepPartial<QuerySwapRequest>): QuerySwapRequest;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QuerySwapsResponse: {
    encode(message: QuerySwapsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapsResponse;
    fromJSON(object: any): QuerySwapsResponse;
    toJSON(message: QuerySwapsResponse): unknown;
    fromPartial(object: DeepPartial<QuerySwapsResponse>): QuerySwapsResponse;
};
export declare const QuerySwapResponse: {
    encode(message: QuerySwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapResponse;
    fromJSON(object: any): QuerySwapResponse;
    toJSON(message: QuerySwapResponse): unknown;
    fromPartial(object: DeepPartial<QuerySwapResponse>): QuerySwapResponse;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
