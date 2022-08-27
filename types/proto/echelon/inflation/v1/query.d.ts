import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** QueryPeriodRequest is the request type for the Query/Period RPC method. */
export interface QueryPeriodRequest {
}
/** QueryPeriodResponse is the response type for the Query/Period RPC method. */
export interface QueryPeriodResponse {
    /** period is the current minting per epoch provision value. */
    period: Long;
}
/**
 * QueryEpochMintProvisionRequest is the request type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionRequest {
}
/**
 * QueryEpochMintProvisionResponse is the response type for the
 * Query/EpochMintProvision RPC method.
 */
export interface QueryEpochMintProvisionResponse {
    /** epoch_mint_provision is the current minting per epoch provision value. */
    epochMintProvision: DecCoin;
}
/**
 * QuerySkippedEpochsRequest is the request type for the Query/SkippedEpochs RPC
 * method.
 */
export interface QuerySkippedEpochsRequest {
}
/**
 * QuerySkippedEpochsResponse is the response type for the Query/SkippedEpochs
 * RPC method.
 */
export interface QuerySkippedEpochsResponse {
    /** number of epochs that the inflation module has been disabled. */
    skippedEpochs: Long;
}
/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
}
/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyResponse {
    /** total amount of coins in circulation */
    totalSupply: DecCoin;
}
/**
 * QueryInflationRateRequest is the request type for the Query/InflationRate RPC
 * method.
 */
export interface QueryInflationRateRequest {
}
/**
 * QueryInflationRateResponse is the response type for the Query/InflationRate
 * RPC method.
 */
export interface QueryInflationRateResponse {
    /** rate by which the total supply increases within one period */
    inflationRate: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export declare const QueryPeriodRequest: {
    encode(_: QueryPeriodRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPeriodRequest;
    fromJSON(_: any): QueryPeriodRequest;
    toJSON(_: QueryPeriodRequest): unknown;
    fromPartial(_: DeepPartial<QueryPeriodRequest>): QueryPeriodRequest;
};
export declare const QueryPeriodResponse: {
    encode(message: QueryPeriodResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPeriodResponse;
    fromJSON(object: any): QueryPeriodResponse;
    toJSON(message: QueryPeriodResponse): unknown;
    fromPartial(object: DeepPartial<QueryPeriodResponse>): QueryPeriodResponse;
};
export declare const QueryEpochMintProvisionRequest: {
    encode(_: QueryEpochMintProvisionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochMintProvisionRequest;
    fromJSON(_: any): QueryEpochMintProvisionRequest;
    toJSON(_: QueryEpochMintProvisionRequest): unknown;
    fromPartial(_: DeepPartial<QueryEpochMintProvisionRequest>): QueryEpochMintProvisionRequest;
};
export declare const QueryEpochMintProvisionResponse: {
    encode(message: QueryEpochMintProvisionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochMintProvisionResponse;
    fromJSON(object: any): QueryEpochMintProvisionResponse;
    toJSON(message: QueryEpochMintProvisionResponse): unknown;
    fromPartial(object: DeepPartial<QueryEpochMintProvisionResponse>): QueryEpochMintProvisionResponse;
};
export declare const QuerySkippedEpochsRequest: {
    encode(_: QuerySkippedEpochsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySkippedEpochsRequest;
    fromJSON(_: any): QuerySkippedEpochsRequest;
    toJSON(_: QuerySkippedEpochsRequest): unknown;
    fromPartial(_: DeepPartial<QuerySkippedEpochsRequest>): QuerySkippedEpochsRequest;
};
export declare const QuerySkippedEpochsResponse: {
    encode(message: QuerySkippedEpochsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySkippedEpochsResponse;
    fromJSON(object: any): QuerySkippedEpochsResponse;
    toJSON(message: QuerySkippedEpochsResponse): unknown;
    fromPartial(object: DeepPartial<QuerySkippedEpochsResponse>): QuerySkippedEpochsResponse;
};
export declare const QueryTotalSupplyRequest: {
    encode(_: QueryTotalSupplyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyRequest;
    fromJSON(_: any): QueryTotalSupplyRequest;
    toJSON(_: QueryTotalSupplyRequest): unknown;
    fromPartial(_: DeepPartial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest;
};
export declare const QueryTotalSupplyResponse: {
    encode(message: QueryTotalSupplyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSupplyResponse;
    fromJSON(object: any): QueryTotalSupplyResponse;
    toJSON(message: QueryTotalSupplyResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse;
};
export declare const QueryInflationRateRequest: {
    encode(_: QueryInflationRateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationRateRequest;
    fromJSON(_: any): QueryInflationRateRequest;
    toJSON(_: QueryInflationRateRequest): unknown;
    fromPartial(_: DeepPartial<QueryInflationRateRequest>): QueryInflationRateRequest;
};
export declare const QueryInflationRateResponse: {
    encode(message: QueryInflationRateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryInflationRateResponse;
    fromJSON(object: any): QueryInflationRateResponse;
    toJSON(message: QueryInflationRateResponse): unknown;
    fromPartial(object: DeepPartial<QueryInflationRateResponse>): QueryInflationRateResponse;
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
