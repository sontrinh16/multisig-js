import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair } from "./erc20";
import { Params } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * QueryTokenPairsRequest is the request type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryTokenPairsResponse is the response type for the Query/TokenPairs RPC
 * method.
 */
export interface QueryTokenPairsResponse {
    tokenPairs: TokenPair[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryTokenPairRequest is the request type for the Query/TokenPair RPC method. */
export interface QueryTokenPairRequest {
    /**
     * token identifier can be either the hex contract address of the ERC20 or the
     * Cosmos base denomination
     */
    token: string;
}
/**
 * QueryTokenPairResponse is the response type for the Query/TokenPair RPC
 * method.
 */
export interface QueryTokenPairResponse {
    tokenPair: TokenPair;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
    params: Params;
}
export declare const QueryTokenPairsRequest: {
    encode(message: QueryTokenPairsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairsRequest;
    fromJSON(object: any): QueryTokenPairsRequest;
    toJSON(message: QueryTokenPairsRequest): unknown;
    fromPartial(object: DeepPartial<QueryTokenPairsRequest>): QueryTokenPairsRequest;
};
export declare const QueryTokenPairsResponse: {
    encode(message: QueryTokenPairsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairsResponse;
    fromJSON(object: any): QueryTokenPairsResponse;
    toJSON(message: QueryTokenPairsResponse): unknown;
    fromPartial(object: DeepPartial<QueryTokenPairsResponse>): QueryTokenPairsResponse;
};
export declare const QueryTokenPairRequest: {
    encode(message: QueryTokenPairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairRequest;
    fromJSON(object: any): QueryTokenPairRequest;
    toJSON(message: QueryTokenPairRequest): unknown;
    fromPartial(object: DeepPartial<QueryTokenPairRequest>): QueryTokenPairRequest;
};
export declare const QueryTokenPairResponse: {
    encode(message: QueryTokenPairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenPairResponse;
    fromJSON(object: any): QueryTokenPairResponse;
    toJSON(message: QueryTokenPairResponse): unknown;
    fromPartial(object: DeepPartial<QueryTokenPairResponse>): QueryTokenPairResponse;
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
