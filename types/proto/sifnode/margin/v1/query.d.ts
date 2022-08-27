import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { MTP, Params } from "./types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface MTPRequest {
    address: string;
    id: Long;
}
export interface MTPResponse {
    mtp: MTP;
}
export interface PositionsForAddressRequest {
    address: string;
    pagination: PageRequest;
}
export interface PositionsForAddressResponse {
    mtps: MTP[];
    pagination: PageResponse;
}
export interface PositionsByPoolRequest {
    asset: string;
    pagination: PageRequest;
}
export interface PositionsByPoolResponse {
    mtps: MTP[];
    pagination: PageResponse;
}
export interface PositionsRequest {
    pagination: PageRequest;
}
export interface PositionsResponse {
    mtps: MTP[];
    pagination: PageResponse;
}
export interface ParamsRequest {
}
export interface ParamsResponse {
    params: Params;
}
export interface StatusRequest {
}
export interface StatusResponse {
    openMtpCount: Long;
    lifetimeMtpCount: Long;
}
export interface WhitelistRequest {
    pagination: PageRequest;
}
export interface WhitelistResponse {
    whitelist: string[];
    pagination: PageResponse;
}
export interface GetSQParamsRequest {
    pool: string;
}
export interface GetSQParamsResponse {
    beginBlock: Long;
}
export interface IsWhitelistedRequest {
    address: string;
}
export interface IsWhitelistedResponse {
    address: string;
    isWhitelisted: boolean;
}
export declare const MTPRequest: {
    encode(message: MTPRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MTPRequest;
    fromJSON(object: any): MTPRequest;
    toJSON(message: MTPRequest): unknown;
    fromPartial(object: DeepPartial<MTPRequest>): MTPRequest;
};
export declare const MTPResponse: {
    encode(message: MTPResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MTPResponse;
    fromJSON(object: any): MTPResponse;
    toJSON(message: MTPResponse): unknown;
    fromPartial(object: DeepPartial<MTPResponse>): MTPResponse;
};
export declare const PositionsForAddressRequest: {
    encode(message: PositionsForAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionsForAddressRequest;
    fromJSON(object: any): PositionsForAddressRequest;
    toJSON(message: PositionsForAddressRequest): unknown;
    fromPartial(object: DeepPartial<PositionsForAddressRequest>): PositionsForAddressRequest;
};
export declare const PositionsForAddressResponse: {
    encode(message: PositionsForAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionsForAddressResponse;
    fromJSON(object: any): PositionsForAddressResponse;
    toJSON(message: PositionsForAddressResponse): unknown;
    fromPartial(object: DeepPartial<PositionsForAddressResponse>): PositionsForAddressResponse;
};
export declare const PositionsByPoolRequest: {
    encode(message: PositionsByPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionsByPoolRequest;
    fromJSON(object: any): PositionsByPoolRequest;
    toJSON(message: PositionsByPoolRequest): unknown;
    fromPartial(object: DeepPartial<PositionsByPoolRequest>): PositionsByPoolRequest;
};
export declare const PositionsByPoolResponse: {
    encode(message: PositionsByPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionsByPoolResponse;
    fromJSON(object: any): PositionsByPoolResponse;
    toJSON(message: PositionsByPoolResponse): unknown;
    fromPartial(object: DeepPartial<PositionsByPoolResponse>): PositionsByPoolResponse;
};
export declare const PositionsRequest: {
    encode(message: PositionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionsRequest;
    fromJSON(object: any): PositionsRequest;
    toJSON(message: PositionsRequest): unknown;
    fromPartial(object: DeepPartial<PositionsRequest>): PositionsRequest;
};
export declare const PositionsResponse: {
    encode(message: PositionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PositionsResponse;
    fromJSON(object: any): PositionsResponse;
    toJSON(message: PositionsResponse): unknown;
    fromPartial(object: DeepPartial<PositionsResponse>): PositionsResponse;
};
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    fromPartial(_: DeepPartial<ParamsRequest>): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    fromPartial(object: DeepPartial<ParamsResponse>): ParamsResponse;
};
export declare const StatusRequest: {
    encode(_: StatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusRequest;
    fromJSON(_: any): StatusRequest;
    toJSON(_: StatusRequest): unknown;
    fromPartial(_: DeepPartial<StatusRequest>): StatusRequest;
};
export declare const StatusResponse: {
    encode(message: StatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusResponse;
    fromJSON(object: any): StatusResponse;
    toJSON(message: StatusResponse): unknown;
    fromPartial(object: DeepPartial<StatusResponse>): StatusResponse;
};
export declare const WhitelistRequest: {
    encode(message: WhitelistRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistRequest;
    fromJSON(object: any): WhitelistRequest;
    toJSON(message: WhitelistRequest): unknown;
    fromPartial(object: DeepPartial<WhitelistRequest>): WhitelistRequest;
};
export declare const WhitelistResponse: {
    encode(message: WhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): WhitelistResponse;
    fromJSON(object: any): WhitelistResponse;
    toJSON(message: WhitelistResponse): unknown;
    fromPartial(object: DeepPartial<WhitelistResponse>): WhitelistResponse;
};
export declare const GetSQParamsRequest: {
    encode(message: GetSQParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSQParamsRequest;
    fromJSON(object: any): GetSQParamsRequest;
    toJSON(message: GetSQParamsRequest): unknown;
    fromPartial(object: DeepPartial<GetSQParamsRequest>): GetSQParamsRequest;
};
export declare const GetSQParamsResponse: {
    encode(message: GetSQParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSQParamsResponse;
    fromJSON(object: any): GetSQParamsResponse;
    toJSON(message: GetSQParamsResponse): unknown;
    fromPartial(object: DeepPartial<GetSQParamsResponse>): GetSQParamsResponse;
};
export declare const IsWhitelistedRequest: {
    encode(message: IsWhitelistedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsWhitelistedRequest;
    fromJSON(object: any): IsWhitelistedRequest;
    toJSON(message: IsWhitelistedRequest): unknown;
    fromPartial(object: DeepPartial<IsWhitelistedRequest>): IsWhitelistedRequest;
};
export declare const IsWhitelistedResponse: {
    encode(message: IsWhitelistedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsWhitelistedResponse;
    fromJSON(object: any): IsWhitelistedResponse;
    toJSON(message: IsWhitelistedResponse): unknown;
    fromPartial(object: DeepPartial<IsWhitelistedResponse>): IsWhitelistedResponse;
};
