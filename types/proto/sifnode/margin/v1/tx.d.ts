import { Position, Params } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgOpen {
    signer: string;
    collateralAsset: string;
    collateralAmount: string;
    borrowAsset: string;
    position: Position;
    leverage: string;
}
export interface MsgOpenResponse {
}
export interface MsgClose {
    signer: string;
    id: Long;
}
export interface MsgCloseResponse {
}
export interface MsgForceClose {
    signer: string;
    mtpAddress: string;
    id: Long;
}
export interface MsgForceCloseResponse {
}
export interface MsgUpdateParams {
    signer: string;
    params: Params;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdatePools {
    signer: string;
    pools: string[];
    closedPools: string[];
}
export interface MsgUpdatePoolsResponse {
}
export interface MsgWhitelist {
    signer: string;
    whitelistedAddress: string;
}
export interface MsgWhitelistResponse {
}
export interface MsgDewhitelist {
    signer: string;
    whitelistedAddress: string;
}
export interface MsgDewhitelistResponse {
}
export declare const MsgOpen: {
    encode(message: MsgOpen, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpen;
    fromJSON(object: any): MsgOpen;
    toJSON(message: MsgOpen): unknown;
    fromPartial(object: DeepPartial<MsgOpen>): MsgOpen;
};
export declare const MsgOpenResponse: {
    encode(_: MsgOpenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgOpenResponse;
    fromJSON(_: any): MsgOpenResponse;
    toJSON(_: MsgOpenResponse): unknown;
    fromPartial(_: DeepPartial<MsgOpenResponse>): MsgOpenResponse;
};
export declare const MsgClose: {
    encode(message: MsgClose, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClose;
    fromJSON(object: any): MsgClose;
    toJSON(message: MsgClose): unknown;
    fromPartial(object: DeepPartial<MsgClose>): MsgClose;
};
export declare const MsgCloseResponse: {
    encode(_: MsgCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseResponse;
    fromJSON(_: any): MsgCloseResponse;
    toJSON(_: MsgCloseResponse): unknown;
    fromPartial(_: DeepPartial<MsgCloseResponse>): MsgCloseResponse;
};
export declare const MsgForceClose: {
    encode(message: MsgForceClose, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceClose;
    fromJSON(object: any): MsgForceClose;
    toJSON(message: MsgForceClose): unknown;
    fromPartial(object: DeepPartial<MsgForceClose>): MsgForceClose;
};
export declare const MsgForceCloseResponse: {
    encode(_: MsgForceCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgForceCloseResponse;
    fromJSON(_: any): MsgForceCloseResponse;
    toJSON(_: MsgForceCloseResponse): unknown;
    fromPartial(_: DeepPartial<MsgForceCloseResponse>): MsgForceCloseResponse;
};
export declare const MsgUpdateParams: {
    encode(message: MsgUpdateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParams;
    fromJSON(object: any): MsgUpdateParams;
    toJSON(message: MsgUpdateParams): unknown;
    fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams;
};
export declare const MsgUpdateParamsResponse: {
    encode(_: MsgUpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateParamsResponse;
    fromJSON(_: any): MsgUpdateParamsResponse;
    toJSON(_: MsgUpdateParamsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
};
export declare const MsgUpdatePools: {
    encode(message: MsgUpdatePools, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePools;
    fromJSON(object: any): MsgUpdatePools;
    toJSON(message: MsgUpdatePools): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePools>): MsgUpdatePools;
};
export declare const MsgUpdatePoolsResponse: {
    encode(_: MsgUpdatePoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolsResponse;
    fromJSON(_: any): MsgUpdatePoolsResponse;
    toJSON(_: MsgUpdatePoolsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePoolsResponse>): MsgUpdatePoolsResponse;
};
export declare const MsgWhitelist: {
    encode(message: MsgWhitelist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelist;
    fromJSON(object: any): MsgWhitelist;
    toJSON(message: MsgWhitelist): unknown;
    fromPartial(object: DeepPartial<MsgWhitelist>): MsgWhitelist;
};
export declare const MsgWhitelistResponse: {
    encode(_: MsgWhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWhitelistResponse;
    fromJSON(_: any): MsgWhitelistResponse;
    toJSON(_: MsgWhitelistResponse): unknown;
    fromPartial(_: DeepPartial<MsgWhitelistResponse>): MsgWhitelistResponse;
};
export declare const MsgDewhitelist: {
    encode(message: MsgDewhitelist, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDewhitelist;
    fromJSON(object: any): MsgDewhitelist;
    toJSON(message: MsgDewhitelist): unknown;
    fromPartial(object: DeepPartial<MsgDewhitelist>): MsgDewhitelist;
};
export declare const MsgDewhitelistResponse: {
    encode(_: MsgDewhitelistResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDewhitelistResponse;
    fromJSON(_: any): MsgDewhitelistResponse;
    toJSON(_: MsgDewhitelistResponse): unknown;
    fromPartial(_: DeepPartial<MsgDewhitelistResponse>): MsgDewhitelistResponse;
};
