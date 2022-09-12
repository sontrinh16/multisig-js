import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./genesis";
import { ModuleAccount } from "../../../cosmos/auth/v1beta1/auth";
import { Deposit, TotalPrincipal, TotalCollateral } from "./cdp";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryParamsRequest defines the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse defines the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params: Params;
}
/** QueryAccountsRequest defines the request type for the Query/Accounts RPC method. */
export interface QueryAccountsRequest {
}
/** QueryAccountsResponse defines the response type for the Query/Accounts RPC method. */
export interface QueryAccountsResponse {
    accounts: ModuleAccount[];
}
/** QueryCdpRequest defines the request type for the Query/Cdp RPC method. */
export interface QueryCdpRequest {
    collateralType: string;
    owner: string;
}
/** QueryCdpResponse defines the response type for the Query/Cdp RPC method. */
export interface QueryCdpResponse {
    cdp: CDPResponse;
}
/** QueryCdpsRequest is the params for a filtered CDP query, the request type for the Query/Cdps RPC method. */
export interface QueryCdpsRequest {
    collateralType: string;
    owner: string;
    id: Long;
    /** sdk.Dec as a string */
    ratio: string;
    pagination: PageRequest;
}
/** QueryCdpsResponse defines the response type for the Query/Cdps RPC method. */
export interface QueryCdpsResponse {
    cdps: CDPResponse[];
    pagination: PageResponse;
}
/** QueryDepositsRequest defines the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    collateralType: string;
    owner: string;
}
/** QueryDepositsResponse defines the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    deposits: Deposit[];
}
/** QueryTotalPrincipalRequest defines the request type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalRequest {
    collateralType: string;
}
/** QueryTotalPrincipalResponse defines the response type for the Query/TotalPrincipal RPC method. */
export interface QueryTotalPrincipalResponse {
    totalPrincipal: TotalPrincipal[];
}
/** QueryTotalCollateralRequest defines the request type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralRequest {
    collateralType: string;
}
/** QueryTotalCollateralResponse defines the response type for the Query/TotalCollateral RPC method. */
export interface QueryTotalCollateralResponse {
    totalCollateral: TotalCollateral[];
}
/** CDPResponse defines the state of a single collateralized debt position. */
export interface CDPResponse {
    id: Long;
    owner: string;
    type: string;
    collateral: Coin;
    principal: Coin;
    accumulatedFees: Coin;
    feesUpdated: Timestamp;
    interestFactor: string;
    collateralValue: Coin;
    collateralizationRatio: string;
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
export declare const QueryAccountsRequest: {
    encode(_: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest;
    fromJSON(_: any): QueryAccountsRequest;
    toJSON(_: QueryAccountsRequest): unknown;
    fromPartial(_: DeepPartial<QueryAccountsRequest>): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse;
    fromJSON(object: any): QueryAccountsResponse;
    toJSON(message: QueryAccountsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAccountsResponse>): QueryAccountsResponse;
};
export declare const QueryCdpRequest: {
    encode(message: QueryCdpRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpRequest;
    fromJSON(object: any): QueryCdpRequest;
    toJSON(message: QueryCdpRequest): unknown;
    fromPartial(object: DeepPartial<QueryCdpRequest>): QueryCdpRequest;
};
export declare const QueryCdpResponse: {
    encode(message: QueryCdpResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpResponse;
    fromJSON(object: any): QueryCdpResponse;
    toJSON(message: QueryCdpResponse): unknown;
    fromPartial(object: DeepPartial<QueryCdpResponse>): QueryCdpResponse;
};
export declare const QueryCdpsRequest: {
    encode(message: QueryCdpsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpsRequest;
    fromJSON(object: any): QueryCdpsRequest;
    toJSON(message: QueryCdpsRequest): unknown;
    fromPartial(object: DeepPartial<QueryCdpsRequest>): QueryCdpsRequest;
};
export declare const QueryCdpsResponse: {
    encode(message: QueryCdpsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCdpsResponse;
    fromJSON(object: any): QueryCdpsResponse;
    toJSON(message: QueryCdpsResponse): unknown;
    fromPartial(object: DeepPartial<QueryCdpsResponse>): QueryCdpsResponse;
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
export declare const QueryTotalPrincipalRequest: {
    encode(message: QueryTotalPrincipalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPrincipalRequest;
    fromJSON(object: any): QueryTotalPrincipalRequest;
    toJSON(message: QueryTotalPrincipalRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalPrincipalRequest>): QueryTotalPrincipalRequest;
};
export declare const QueryTotalPrincipalResponse: {
    encode(message: QueryTotalPrincipalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPrincipalResponse;
    fromJSON(object: any): QueryTotalPrincipalResponse;
    toJSON(message: QueryTotalPrincipalResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalPrincipalResponse>): QueryTotalPrincipalResponse;
};
export declare const QueryTotalCollateralRequest: {
    encode(message: QueryTotalCollateralRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCollateralRequest;
    fromJSON(object: any): QueryTotalCollateralRequest;
    toJSON(message: QueryTotalCollateralRequest): unknown;
    fromPartial(object: DeepPartial<QueryTotalCollateralRequest>): QueryTotalCollateralRequest;
};
export declare const QueryTotalCollateralResponse: {
    encode(message: QueryTotalCollateralResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalCollateralResponse;
    fromJSON(object: any): QueryTotalCollateralResponse;
    toJSON(message: QueryTotalCollateralResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalCollateralResponse>): QueryTotalCollateralResponse;
};
export declare const CDPResponse: {
    encode(message: CDPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CDPResponse;
    fromJSON(object: any): CDPResponse;
    toJSON(message: CDPResponse): unknown;
    fromPartial(object: DeepPartial<CDPResponse>): CDPResponse;
};
