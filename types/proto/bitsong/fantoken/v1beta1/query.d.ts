import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { FanToken } from "./fantoken";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryFanTokenRequest is request type for the Query/FanToken RPC method */
export interface QueryFanTokenRequest {
    /** QueryFanTokenRequest is request type for the Query/FanToken RPC method */
    denom: string;
}
/** QueryFanTokenResponse is response type for the Query/FanToken RPC method */
export interface QueryFanTokenResponse {
    /** QueryFanTokenResponse is response type for the Query/FanToken RPC method */
    fantoken: FanToken;
}
/** QueryFanTokensRequest is request type for the Query/FanTokens RPC method */
export interface QueryFanTokensRequest {
    authority: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryFanTokensResponse is response type for the Query/FanTokens RPC method */
export interface QueryFanTokensResponse {
    fantokens: FanToken[];
    pagination: PageResponse;
}
/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {
}
/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
    params: Params;
}
export declare const QueryFanTokenRequest: {
    encode(message: QueryFanTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokenRequest;
    fromJSON(object: any): QueryFanTokenRequest;
    toJSON(message: QueryFanTokenRequest): unknown;
    fromPartial(object: DeepPartial<QueryFanTokenRequest>): QueryFanTokenRequest;
};
export declare const QueryFanTokenResponse: {
    encode(message: QueryFanTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokenResponse;
    fromJSON(object: any): QueryFanTokenResponse;
    toJSON(message: QueryFanTokenResponse): unknown;
    fromPartial(object: DeepPartial<QueryFanTokenResponse>): QueryFanTokenResponse;
};
export declare const QueryFanTokensRequest: {
    encode(message: QueryFanTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokensRequest;
    fromJSON(object: any): QueryFanTokensRequest;
    toJSON(message: QueryFanTokensRequest): unknown;
    fromPartial(object: DeepPartial<QueryFanTokensRequest>): QueryFanTokensRequest;
};
export declare const QueryFanTokensResponse: {
    encode(message: QueryFanTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFanTokensResponse;
    fromJSON(object: any): QueryFanTokensResponse;
    toJSON(message: QueryFanTokensResponse): unknown;
    fromPartial(object: DeepPartial<QueryFanTokensResponse>): QueryFanTokensResponse;
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
