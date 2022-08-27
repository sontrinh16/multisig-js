import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { StrategyType } from "./strategy";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponse {
    /** params represents the earn module parameters */
    params: Params;
}
/** QueryVaultsRequest is the request type for the Query/Vault RPC method. */
export interface QueryVaultsRequest {
    /** vault filters vault by denom */
    denom: string;
}
/** QueryVaultsResponse is the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponse {
    /** vaults represents the earn module vaults */
    vaults: VaultResponse[];
}
/** VaultResponse is the response type for a vault. */
export interface VaultResponse {
    /** denom represents the denom of the vault */
    denom: string;
    /** VaultStrategy is the strategy used for this vault. */
    vaultStrategy: StrategyType;
    /** TotalSupplied is the total amount of denom coins supplied to the vault. */
    totalSupplied: string;
    /**
     * TotalValue is the total value of denom coins supplied to the vault if the
     * vault were to be liquidated.
     */
    totalValue: string;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** owner optionally filters deposits by owner */
    owner: string;
    /** denom optionally filters deposits by vault denom */
    denom: string;
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
/** DepositResponse defines a deposit query response type. */
export interface DepositResponse {
    /** depositor represents the owner of the deposit. */
    depositor: string;
    /** Amount represents the amount supplied to vaults. */
    amountSupplied: Coin[];
    /**
     * Value represents the total accumulated value of denom coins supplied to
     * vaults. This may be greater than or equal to amount_supplied depending on
     * the strategy.
     */
    value: Coin[];
}
/** QueryTotalDepositedRequest is the request type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedRequest {
    /** denom represents the vault denom to query total deposited amount for. */
    denom: string;
}
/** QueryTotalDepositedResponse is the response type for the Query/TotalDeposited RPC method. */
export interface QueryTotalDepositedResponse {
    suppliedCoins: Coin[];
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
export declare const QueryVaultsRequest: {
    encode(message: QueryVaultsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsRequest;
    fromJSON(object: any): QueryVaultsRequest;
    toJSON(message: QueryVaultsRequest): unknown;
    fromPartial(object: DeepPartial<QueryVaultsRequest>): QueryVaultsRequest;
};
export declare const QueryVaultsResponse: {
    encode(message: QueryVaultsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryVaultsResponse;
    fromJSON(object: any): QueryVaultsResponse;
    toJSON(message: QueryVaultsResponse): unknown;
    fromPartial(object: DeepPartial<QueryVaultsResponse>): QueryVaultsResponse;
};
export declare const VaultResponse: {
    encode(message: VaultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VaultResponse;
    fromJSON(object: any): VaultResponse;
    toJSON(message: VaultResponse): unknown;
    fromPartial(object: DeepPartial<VaultResponse>): VaultResponse;
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
export declare const QueryTotalDepositedRequest: {
    encode(message: QueryTotalDepositedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDepositedRequest;
    fromJSON(object: any): QueryTotalDepositedRequest;
    toJSON(message: QueryTotalDepositedRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalDepositedRequest>): QueryTotalDepositedRequest;
};
export declare const QueryTotalDepositedResponse: {
    encode(message: QueryTotalDepositedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalDepositedResponse;
    fromJSON(object: any): QueryTotalDepositedResponse;
    toJSON(message: QueryTotalDepositedResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalDepositedResponse>): QueryTotalDepositedResponse;
};
