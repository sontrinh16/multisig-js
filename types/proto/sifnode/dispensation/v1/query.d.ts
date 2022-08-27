import { DistributionStatus, DistributionType, Distribution, DistributionRecords, UserClaim } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface QueryAllDistributionsRequest {
}
export interface QueryAllDistributionsResponse {
    distributions: Distribution[];
    height: Long;
}
export interface QueryRecordsByDistributionNameRequest {
    distributionName: string;
    status: DistributionStatus;
}
export interface QueryRecordsByDistributionNameResponse {
    distributionRecords: DistributionRecords;
    height: Long;
}
export interface QueryRecordsByRecipientAddrRequest {
    address: string;
}
export interface QueryRecordsByRecipientAddrResponse {
    distributionRecords: DistributionRecords;
    height: Long;
}
export interface QueryClaimsByTypeRequest {
    userClaimType: DistributionType;
}
export interface QueryClaimsResponse {
    claims: UserClaim[];
    height: Long;
}
export declare const QueryAllDistributionsRequest: {
    encode(_: QueryAllDistributionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDistributionsRequest;
    fromJSON(_: any): QueryAllDistributionsRequest;
    toJSON(_: QueryAllDistributionsRequest): unknown;
    fromPartial(_: DeepPartial<QueryAllDistributionsRequest>): QueryAllDistributionsRequest;
};
export declare const QueryAllDistributionsResponse: {
    encode(message: QueryAllDistributionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDistributionsResponse;
    fromJSON(object: any): QueryAllDistributionsResponse;
    toJSON(message: QueryAllDistributionsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllDistributionsResponse>): QueryAllDistributionsResponse;
};
export declare const QueryRecordsByDistributionNameRequest: {
    encode(message: QueryRecordsByDistributionNameRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByDistributionNameRequest;
    fromJSON(object: any): QueryRecordsByDistributionNameRequest;
    toJSON(message: QueryRecordsByDistributionNameRequest): unknown;
    fromPartial(object: DeepPartial<QueryRecordsByDistributionNameRequest>): QueryRecordsByDistributionNameRequest;
};
export declare const QueryRecordsByDistributionNameResponse: {
    encode(message: QueryRecordsByDistributionNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByDistributionNameResponse;
    fromJSON(object: any): QueryRecordsByDistributionNameResponse;
    toJSON(message: QueryRecordsByDistributionNameResponse): unknown;
    fromPartial(object: DeepPartial<QueryRecordsByDistributionNameResponse>): QueryRecordsByDistributionNameResponse;
};
export declare const QueryRecordsByRecipientAddrRequest: {
    encode(message: QueryRecordsByRecipientAddrRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByRecipientAddrRequest;
    fromJSON(object: any): QueryRecordsByRecipientAddrRequest;
    toJSON(message: QueryRecordsByRecipientAddrRequest): unknown;
    fromPartial(object: DeepPartial<QueryRecordsByRecipientAddrRequest>): QueryRecordsByRecipientAddrRequest;
};
export declare const QueryRecordsByRecipientAddrResponse: {
    encode(message: QueryRecordsByRecipientAddrResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsByRecipientAddrResponse;
    fromJSON(object: any): QueryRecordsByRecipientAddrResponse;
    toJSON(message: QueryRecordsByRecipientAddrResponse): unknown;
    fromPartial(object: DeepPartial<QueryRecordsByRecipientAddrResponse>): QueryRecordsByRecipientAddrResponse;
};
export declare const QueryClaimsByTypeRequest: {
    encode(message: QueryClaimsByTypeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsByTypeRequest;
    fromJSON(object: any): QueryClaimsByTypeRequest;
    toJSON(message: QueryClaimsByTypeRequest): unknown;
    fromPartial(object: DeepPartial<QueryClaimsByTypeRequest>): QueryClaimsByTypeRequest;
};
export declare const QueryClaimsResponse: {
    encode(message: QueryClaimsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimsResponse;
    fromJSON(object: any): QueryClaimsResponse;
    toJSON(message: QueryClaimsResponse): unknown;
    fromPartial(object: DeepPartial<QueryClaimsResponse>): QueryClaimsResponse;
};
