import { PoEContractType } from "./poe";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Duration } from "../../../../google/protobuf/duration";
import { Coin, DecCoin } from "../../../../cosmos/base/v1beta1/coin";
import { UnbondingDelegationEntry } from "../../../../cosmos/staking/v1beta1/staking";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * QueryContractAddressRequest is the request type for the Query/ContractAddress
 * RPC method.
 */
export interface QueryContractAddressRequest {
    /** ContractType is the type of contract */
    contractType: PoEContractType;
}
/**
 * QueryContractAddressRequest is the response type for the
 * Query/ContractAddress RPC method.
 */
export interface QueryContractAddressResponse {
    /**
     * QueryContractAddressRequest is the response type for the
     * Query/ContractAddress RPC method.
     */
    address: string;
}
/**
 * QueryUnbondingPeriodRequest is request type for the Query/UnbondingPeriod RPC
 * method
 */
export interface QueryUnbondingPeriodRequest {
}
/**
 * QueryUnbondingPeriodResponse is response type for the Query/UnbondingPeriod
 * RPC method
 */
export interface QueryUnbondingPeriodResponse {
    /** Time is the time that must pass */
    time: Duration;
}
/**
 * QueryValidatorDelegationRequest is request type for the
 * Query/ValidatorDelegation RPC method
 */
export interface QueryValidatorDelegationRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
/**
 * QueryValidatorDelegationResponse is response type for the
 * Query/ValidatorDelegation RPC method
 */
export interface QueryValidatorDelegationResponse {
    balance: Coin;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
    entries: UnbondingDelegationEntry[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryValidatorOutstandingRewardRequest is the request type for the
 * Query/ValidatorOutstandingReward RPC method.
 */
export interface QueryValidatorOutstandingRewardRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/**
 * QueryValidatorOutstandingRewardResponse is the response type for the
 * Query/ValidatorOutstandingReward RPC method.
 */
export interface QueryValidatorOutstandingRewardResponse {
    reward: DecCoin;
}
/**
 * QueryValidatorEngagementRewardRequest is the request type for the
 * Query/ValidatorEngagementReward RPC method.
 */
export interface QueryValidatorEngagementRewardRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
/**
 * QueryValidatorEngagementRewardResponse is the response type for the
 * Query/ValidatorEngagementReward RPC method.
 */
export interface QueryValidatorEngagementRewardResponse {
    reward: DecCoin;
}
export declare const QueryContractAddressRequest: {
    encode(message: QueryContractAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressRequest;
    fromJSON(object: any): QueryContractAddressRequest;
    toJSON(message: QueryContractAddressRequest): unknown;
    fromPartial(object: DeepPartial<QueryContractAddressRequest>): QueryContractAddressRequest;
};
export declare const QueryContractAddressResponse: {
    encode(message: QueryContractAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryContractAddressResponse;
    fromJSON(object: any): QueryContractAddressResponse;
    toJSON(message: QueryContractAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryContractAddressResponse>): QueryContractAddressResponse;
};
export declare const QueryUnbondingPeriodRequest: {
    encode(_: QueryUnbondingPeriodRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingPeriodRequest;
    fromJSON(_: any): QueryUnbondingPeriodRequest;
    toJSON(_: QueryUnbondingPeriodRequest): unknown;
    fromPartial(_: DeepPartial<QueryUnbondingPeriodRequest>): QueryUnbondingPeriodRequest;
};
export declare const QueryUnbondingPeriodResponse: {
    encode(message: QueryUnbondingPeriodResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingPeriodResponse;
    fromJSON(object: any): QueryUnbondingPeriodResponse;
    toJSON(message: QueryUnbondingPeriodResponse): unknown;
    fromPartial(object: DeepPartial<QueryUnbondingPeriodResponse>): QueryUnbondingPeriodResponse;
};
export declare const QueryValidatorDelegationRequest: {
    encode(message: QueryValidatorDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationRequest;
    fromJSON(object: any): QueryValidatorDelegationRequest;
    toJSON(message: QueryValidatorDelegationRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidatorDelegationRequest>): QueryValidatorDelegationRequest;
};
export declare const QueryValidatorDelegationResponse: {
    encode(message: QueryValidatorDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorDelegationResponse;
    fromJSON(object: any): QueryValidatorDelegationResponse;
    toJSON(message: QueryValidatorDelegationResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorDelegationResponse>): QueryValidatorDelegationResponse;
};
export declare const QueryValidatorUnbondingDelegationsRequest: {
    encode(message: QueryValidatorUnbondingDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest;
    fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest;
    toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest;
};
export declare const QueryValidatorUnbondingDelegationsResponse: {
    encode(message: QueryValidatorUnbondingDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse;
    fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse;
    toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse;
};
export declare const QueryValidatorOutstandingRewardRequest: {
    encode(message: QueryValidatorOutstandingRewardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardRequest;
    fromJSON(object: any): QueryValidatorOutstandingRewardRequest;
    toJSON(message: QueryValidatorOutstandingRewardRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardRequest>): QueryValidatorOutstandingRewardRequest;
};
export declare const QueryValidatorOutstandingRewardResponse: {
    encode(message: QueryValidatorOutstandingRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorOutstandingRewardResponse;
    fromJSON(object: any): QueryValidatorOutstandingRewardResponse;
    toJSON(message: QueryValidatorOutstandingRewardResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardResponse>): QueryValidatorOutstandingRewardResponse;
};
export declare const QueryValidatorEngagementRewardRequest: {
    encode(message: QueryValidatorEngagementRewardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorEngagementRewardRequest;
    fromJSON(object: any): QueryValidatorEngagementRewardRequest;
    toJSON(message: QueryValidatorEngagementRewardRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidatorEngagementRewardRequest>): QueryValidatorEngagementRewardRequest;
};
export declare const QueryValidatorEngagementRewardResponse: {
    encode(message: QueryValidatorEngagementRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryValidatorEngagementRewardResponse;
    fromJSON(object: any): QueryValidatorEngagementRewardResponse;
    toJSON(message: QueryValidatorEngagementRewardResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorEngagementRewardResponse>): QueryValidatorEngagementRewardResponse;
};
