import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./swap";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryParamsRequest defines the request type for querying x/swap parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/swap parameters. */
export interface QueryParamsResponse {
    /** params represents the swap module parameters */
    params: Params;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
    /** pool_id filters pools by id */
    poolId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponse {
    /** pools represents returned pools */
    pools: PoolResponse[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** Pool represents the state of a single pool */
export interface PoolResponse {
    /** name represents the name of the pool */
    name: string;
    /** coins represents the total reserves of the pool */
    coins: Coin[];
    /** total_shares represents the total shares of the pool */
    totalShares: string;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** owner optionally filters deposits by owner */
    owner: string;
    /** pool_id optionally fitlers deposits by pool id */
    poolId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    /** deposits returns the deposits matching the requested parameters */
    deposits: DepositResponse[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** DepositResponse defines a single deposit query response type. */
export interface DepositResponse {
    /** depositor represents the owner of the deposit */
    depositor: string;
    /** pool_id represents the pool the deposit is for */
    poolId: string;
    /** shares_owned presents the shares owned by the depositor for the pool */
    sharesOwned: string;
    /** shares_value represents the coin value of the shares_owned */
    sharesValue: Coin[];
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
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromJSON(object: any): QueryPoolsRequest;
    toJSON(message: QueryPoolsRequest): unknown;
    fromPartial(object: DeepPartial<QueryPoolsRequest>): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromJSON(object: any): QueryPoolsResponse;
    toJSON(message: QueryPoolsResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolsResponse>): QueryPoolsResponse;
};
export declare const PoolResponse: {
    encode(message: PoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolResponse;
    fromJSON(object: any): PoolResponse;
    toJSON(message: PoolResponse): unknown;
    fromPartial(object: DeepPartial<PoolResponse>): PoolResponse;
};
export declare const QueryDepositsRequest: {
    encode(message: QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest;
    fromJSON(object: any): QueryDepositsRequest;
    toJSON(message: QueryDepositsRequest): unknown;
    fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest;
};
export declare const QueryDepositsResponse: {
    encode(message: QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse;
    fromJSON(object: any): QueryDepositsResponse;
    toJSON(message: QueryDepositsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse;
};
export declare const DepositResponse: {
    encode(message: DepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DepositResponse;
    fromJSON(object: any): DepositResponse;
    toJSON(message: DepositResponse): unknown;
    fromPartial(object: DeepPartial<DepositResponse>): DepositResponse;
};
