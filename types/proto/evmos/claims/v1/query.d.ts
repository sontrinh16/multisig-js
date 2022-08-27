import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { ClaimsRecordAddress, Claim } from "./claims";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * QueryTotalUnclaimedRequest is the request type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedRequest {
}
/**
 * QueryTotalUnclaimedResponse is the response type for the Query/TotalUnclaimed
 * RPC method.
 */
export interface QueryTotalUnclaimedResponse {
    /** coins defines the unclaimed coins */
    coins: Coin[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
/**
 * QueryClaimsRecordsRequest is the request type for the Query/ClaimsRecords RPC
 * method.
 */
export interface QueryClaimsRecordsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryClaimsRecordsResponse is the response type for the Query/ClaimsRecords
 * RPC method.
 */
export interface QueryClaimsRecordsResponse {
    /** claims defines all claims records */
    claims: ClaimsRecordAddress[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/**
 * QueryClaimsRecordRequest is the request type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordRequest {
    /** address defines the user to query claims record for */
    address: string;
}
/**
 * QueryClaimsRecordResponse is the response type for the Query/ClaimsRecord RPC
 * method.
 */
export interface QueryClaimsRecordResponse {
    /** total initial claimable amount for the user */
    initialClaimableAmount: string;
    /** the claims of the user */
    claims: Claim[];
}
export declare const QueryTotalUnclaimedRequest: {
    encode(_: QueryTotalUnclaimedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalUnclaimedRequest;
    fromJSON(_: any): QueryTotalUnclaimedRequest;
    toJSON(_: QueryTotalUnclaimedRequest): unknown;
    fromPartial(_: DeepPartial<QueryTotalUnclaimedRequest>): QueryTotalUnclaimedRequest;
};
export declare const QueryTotalUnclaimedResponse: {
    encode(message: QueryTotalUnclaimedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalUnclaimedResponse;
    fromJSON(object: any): QueryTotalUnclaimedResponse;
    toJSON(message: QueryTotalUnclaimedResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalUnclaimedResponse>): QueryTotalUnclaimedResponse;
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
export declare const QueryClaimsRecordsRequest: {
    encode(message: QueryClaimsRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsRecordsRequest;
    fromJSON(object: any): QueryClaimsRecordsRequest;
    toJSON(message: QueryClaimsRecordsRequest): unknown;
    fromPartial(object: DeepPartial<QueryClaimsRecordsRequest>): QueryClaimsRecordsRequest;
};
export declare const QueryClaimsRecordsResponse: {
    encode(message: QueryClaimsRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsRecordsResponse;
    fromJSON(object: any): QueryClaimsRecordsResponse;
    toJSON(message: QueryClaimsRecordsResponse): unknown;
    fromPartial(object: DeepPartial<QueryClaimsRecordsResponse>): QueryClaimsRecordsResponse;
};
export declare const QueryClaimsRecordRequest: {
    encode(message: QueryClaimsRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsRecordRequest;
    fromJSON(object: any): QueryClaimsRecordRequest;
    toJSON(message: QueryClaimsRecordRequest): unknown;
    fromPartial(object: DeepPartial<QueryClaimsRecordRequest>): QueryClaimsRecordRequest;
};
export declare const QueryClaimsRecordResponse: {
    encode(message: QueryClaimsRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsRecordResponse;
    fromJSON(object: any): QueryClaimsRecordResponse;
    toJSON(message: QueryClaimsRecordResponse): unknown;
    fromPartial(object: DeepPartial<QueryClaimsRecordResponse>): QueryClaimsRecordResponse;
};
