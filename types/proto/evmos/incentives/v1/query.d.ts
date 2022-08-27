import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, GasMeter } from "./incentives";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryIncentivesResponse {
    incentives: Incentive[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryIncentiveRequest is the request type for the Query/Incentive RPC method. */
export interface QueryIncentiveRequest {
    /** contract identifier is the hex contract address of a contract */
    contract: string;
}
/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryIncentiveResponse {
    incentive: Incentive;
}
/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersRequest {
    /** contract is the hex contract address of a incentivized smart contract */
    contract: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 */
export interface QueryGasMetersResponse {
    gasMeters: GasMeter[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryGasMeterRequest is the request type for the Query/Incentive RPC method. */
export interface QueryGasMeterRequest {
    /** contract identifier is the hex contract address of a contract */
    contract: string;
    /** participant identifier is the hex address of a user */
    participant: string;
}
/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 */
export interface QueryGasMeterResponse {
    /**
     * QueryGasMeterResponse is the response type for the Query/Incentive RPC
     * method.
     */
    gasMeter: Long;
}
/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 */
export interface QueryAllocationMetersResponse {
    allocationMeters: DecCoin[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 */
export interface QueryAllocationMeterRequest {
    /** denom is the coin denom to query an allocation meter for. */
    denom: string;
}
/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 */
export interface QueryAllocationMeterResponse {
    allocationMeter: DecCoin;
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
export declare const QueryIncentivesRequest: {
    encode(message: QueryIncentivesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivesRequest;
    fromJSON(object: any): QueryIncentivesRequest;
    toJSON(message: QueryIncentivesRequest): unknown;
    fromPartial(object: DeepPartial<QueryIncentivesRequest>): QueryIncentivesRequest;
};
export declare const QueryIncentivesResponse: {
    encode(message: QueryIncentivesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentivesResponse;
    fromJSON(object: any): QueryIncentivesResponse;
    toJSON(message: QueryIncentivesResponse): unknown;
    fromPartial(object: DeepPartial<QueryIncentivesResponse>): QueryIncentivesResponse;
};
export declare const QueryIncentiveRequest: {
    encode(message: QueryIncentiveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentiveRequest;
    fromJSON(object: any): QueryIncentiveRequest;
    toJSON(message: QueryIncentiveRequest): unknown;
    fromPartial(object: DeepPartial<QueryIncentiveRequest>): QueryIncentiveRequest;
};
export declare const QueryIncentiveResponse: {
    encode(message: QueryIncentiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIncentiveResponse;
    fromJSON(object: any): QueryIncentiveResponse;
    toJSON(message: QueryIncentiveResponse): unknown;
    fromPartial(object: DeepPartial<QueryIncentiveResponse>): QueryIncentiveResponse;
};
export declare const QueryGasMetersRequest: {
    encode(message: QueryGasMetersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGasMetersRequest;
    fromJSON(object: any): QueryGasMetersRequest;
    toJSON(message: QueryGasMetersRequest): unknown;
    fromPartial(object: DeepPartial<QueryGasMetersRequest>): QueryGasMetersRequest;
};
export declare const QueryGasMetersResponse: {
    encode(message: QueryGasMetersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGasMetersResponse;
    fromJSON(object: any): QueryGasMetersResponse;
    toJSON(message: QueryGasMetersResponse): unknown;
    fromPartial(object: DeepPartial<QueryGasMetersResponse>): QueryGasMetersResponse;
};
export declare const QueryGasMeterRequest: {
    encode(message: QueryGasMeterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGasMeterRequest;
    fromJSON(object: any): QueryGasMeterRequest;
    toJSON(message: QueryGasMeterRequest): unknown;
    fromPartial(object: DeepPartial<QueryGasMeterRequest>): QueryGasMeterRequest;
};
export declare const QueryGasMeterResponse: {
    encode(message: QueryGasMeterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGasMeterResponse;
    fromJSON(object: any): QueryGasMeterResponse;
    toJSON(message: QueryGasMeterResponse): unknown;
    fromPartial(object: DeepPartial<QueryGasMeterResponse>): QueryGasMeterResponse;
};
export declare const QueryAllocationMetersRequest: {
    encode(message: QueryAllocationMetersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationMetersRequest;
    fromJSON(object: any): QueryAllocationMetersRequest;
    toJSON(message: QueryAllocationMetersRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllocationMetersRequest>): QueryAllocationMetersRequest;
};
export declare const QueryAllocationMetersResponse: {
    encode(message: QueryAllocationMetersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationMetersResponse;
    fromJSON(object: any): QueryAllocationMetersResponse;
    toJSON(message: QueryAllocationMetersResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllocationMetersResponse>): QueryAllocationMetersResponse;
};
export declare const QueryAllocationMeterRequest: {
    encode(message: QueryAllocationMeterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationMeterRequest;
    fromJSON(object: any): QueryAllocationMeterRequest;
    toJSON(message: QueryAllocationMeterRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllocationMeterRequest>): QueryAllocationMeterRequest;
};
export declare const QueryAllocationMeterResponse: {
    encode(message: QueryAllocationMeterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocationMeterResponse;
    fromJSON(object: any): QueryAllocationMeterResponse;
    toJSON(message: QueryAllocationMeterResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllocationMeterResponse>): QueryAllocationMeterResponse;
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
