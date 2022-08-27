import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { FeeSplit } from "./feesplit";
import { Params } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryFeeSplitsRequest is the request type for the Query/FeeSplits RPC method. */
export interface QueryFeeSplitsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryFeeSplitsResponse is the response type for the Query/FeeSplits RPC method. */
export interface QueryFeeSplitsResponse {
    feeSplits: FeeSplit[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryFeeSplitRequest is the request type for the Query/FeeSplit RPC method. */
export interface QueryFeeSplitRequest {
    /** contract identifier is the hex contract address of a contract */
    contractAddress: string;
}
/** QueryFeeSplitResponse is the response type for the Query/FeeSplit RPC method. */
export interface QueryFeeSplitResponse {
    feeSplit: FeeSplit;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params: Params;
}
/**
 * QueryDeployerFeeSplitsRequest is the request type for the
 * Query/DeployerFeeSplits RPC method.
 */
export interface QueryDeployerFeeSplitsRequest {
    /** deployer bech32 address */
    deployerAddress: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryDeployerFeeSplitsResponse is the response type for the
 * Query/DeployerFeeSplits RPC method.
 */
export interface QueryDeployerFeeSplitsResponse {
    contractAddresses: string[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryWithdrawerFeeSplitsRequest is the request type for the
 * Query/WithdrawerFeeSplits RPC method.
 */
export interface QueryWithdrawerFeeSplitsRequest {
    /** withdrawer bech32 address */
    withdrawerAddress: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryWithdrawerFeeSplitsResponse is the response type for the
 * Query/WithdrawerFeeSplits RPC method.
 */
export interface QueryWithdrawerFeeSplitsResponse {
    contractAddresses: string[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
export declare const QueryFeeSplitsRequest: {
    encode(message: QueryFeeSplitsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSplitsRequest;
    fromJSON(object: any): QueryFeeSplitsRequest;
    toJSON(message: QueryFeeSplitsRequest): unknown;
    fromPartial(object: DeepPartial<QueryFeeSplitsRequest>): QueryFeeSplitsRequest;
};
export declare const QueryFeeSplitsResponse: {
    encode(message: QueryFeeSplitsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSplitsResponse;
    fromJSON(object: any): QueryFeeSplitsResponse;
    toJSON(message: QueryFeeSplitsResponse): unknown;
    fromPartial(object: DeepPartial<QueryFeeSplitsResponse>): QueryFeeSplitsResponse;
};
export declare const QueryFeeSplitRequest: {
    encode(message: QueryFeeSplitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSplitRequest;
    fromJSON(object: any): QueryFeeSplitRequest;
    toJSON(message: QueryFeeSplitRequest): unknown;
    fromPartial(object: DeepPartial<QueryFeeSplitRequest>): QueryFeeSplitRequest;
};
export declare const QueryFeeSplitResponse: {
    encode(message: QueryFeeSplitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeSplitResponse;
    fromJSON(object: any): QueryFeeSplitResponse;
    toJSON(message: QueryFeeSplitResponse): unknown;
    fromPartial(object: DeepPartial<QueryFeeSplitResponse>): QueryFeeSplitResponse;
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
export declare const QueryDeployerFeeSplitsRequest: {
    encode(message: QueryDeployerFeeSplitsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployerFeeSplitsRequest;
    fromJSON(object: any): QueryDeployerFeeSplitsRequest;
    toJSON(message: QueryDeployerFeeSplitsRequest): unknown;
    fromPartial(object: DeepPartial<QueryDeployerFeeSplitsRequest>): QueryDeployerFeeSplitsRequest;
};
export declare const QueryDeployerFeeSplitsResponse: {
    encode(message: QueryDeployerFeeSplitsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDeployerFeeSplitsResponse;
    fromJSON(object: any): QueryDeployerFeeSplitsResponse;
    toJSON(message: QueryDeployerFeeSplitsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDeployerFeeSplitsResponse>): QueryDeployerFeeSplitsResponse;
};
export declare const QueryWithdrawerFeeSplitsRequest: {
    encode(message: QueryWithdrawerFeeSplitsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawerFeeSplitsRequest;
    fromJSON(object: any): QueryWithdrawerFeeSplitsRequest;
    toJSON(message: QueryWithdrawerFeeSplitsRequest): unknown;
    fromPartial(object: DeepPartial<QueryWithdrawerFeeSplitsRequest>): QueryWithdrawerFeeSplitsRequest;
};
export declare const QueryWithdrawerFeeSplitsResponse: {
    encode(message: QueryWithdrawerFeeSplitsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawerFeeSplitsResponse;
    fromJSON(object: any): QueryWithdrawerFeeSplitsResponse;
    toJSON(message: QueryWithdrawerFeeSplitsResponse): unknown;
    fromPartial(object: DeepPartial<QueryWithdrawerFeeSplitsResponse>): QueryWithdrawerFeeSplitsResponse;
};
