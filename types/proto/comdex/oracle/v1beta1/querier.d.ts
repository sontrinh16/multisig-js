import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Market } from "./oracle";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface QueryMarketsRequest {
    pagination: PageRequest;
}
export interface QueryMarketsResponse {
    markets: Market[];
    pagination: PageResponse;
}
export interface QueryMarketRequest {
    symbol: string;
}
export interface QueryMarketResponse {
    market: Market;
}
export interface QueryParamsRequest {
}
export interface QueryParamsResponse {
    params: Params;
}
export declare const QueryMarketsRequest: {
    encode(message: QueryMarketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsRequest;
    fromJSON(object: any): QueryMarketsRequest;
    toJSON(message: QueryMarketsRequest): unknown;
    fromPartial(object: DeepPartial<QueryMarketsRequest>): QueryMarketsRequest;
};
export declare const QueryMarketsResponse: {
    encode(message: QueryMarketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketsResponse;
    fromJSON(object: any): QueryMarketsResponse;
    toJSON(message: QueryMarketsResponse): unknown;
    fromPartial(object: DeepPartial<QueryMarketsResponse>): QueryMarketsResponse;
};
export declare const QueryMarketRequest: {
    encode(message: QueryMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketRequest;
    fromJSON(object: any): QueryMarketRequest;
    toJSON(message: QueryMarketRequest): unknown;
    fromPartial(object: DeepPartial<QueryMarketRequest>): QueryMarketRequest;
};
export declare const QueryMarketResponse: {
    encode(message: QueryMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketResponse;
    fromJSON(object: any): QueryMarketResponse;
    toJSON(message: QueryMarketResponse): unknown;
    fromPartial(object: DeepPartial<QueryMarketResponse>): QueryMarketResponse;
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
