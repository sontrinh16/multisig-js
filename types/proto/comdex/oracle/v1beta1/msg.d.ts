import { Height } from "../../../ibc/core/client/v1/client";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface MsgAddMarketRequest {
    from: string;
    symbol: string;
    scriptId: Long;
    id: Long;
}
export interface MsgAddMarketResponse {
}
export interface MsgUpdateMarketRequest {
    from: string;
    symbol: string;
    scriptId: Long;
}
export interface MsgUpdateMarketResponse {
}
export interface MsgRemoveMarketForAssetRequest {
    from: string;
    id: Long;
    symbol: string;
}
export interface MsgRemoveMarketForAssetResponse {
}
export interface MsgFetchPriceRequest {
    from: string;
    sourcePort: string;
    sourceChannel: string;
    timeoutHeight: Height;
    timeoutTimestamp: Long;
    symbols: string[];
    scriptId: Long;
    feeLimit: Coin[];
    prepareGas: Long;
    executeGas: Long;
}
export interface MsgFetchPriceResponse {
}
export declare const MsgAddMarketRequest: {
    encode(message: MsgAddMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarketRequest;
    fromJSON(object: any): MsgAddMarketRequest;
    toJSON(message: MsgAddMarketRequest): unknown;
    fromPartial(object: DeepPartial<MsgAddMarketRequest>): MsgAddMarketRequest;
};
export declare const MsgAddMarketResponse: {
    encode(_: MsgAddMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarketResponse;
    fromJSON(_: any): MsgAddMarketResponse;
    toJSON(_: MsgAddMarketResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddMarketResponse>): MsgAddMarketResponse;
};
export declare const MsgUpdateMarketRequest: {
    encode(message: MsgUpdateMarketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarketRequest;
    fromJSON(object: any): MsgUpdateMarketRequest;
    toJSON(message: MsgUpdateMarketRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdateMarketRequest>): MsgUpdateMarketRequest;
};
export declare const MsgUpdateMarketResponse: {
    encode(_: MsgUpdateMarketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarketResponse;
    fromJSON(_: any): MsgUpdateMarketResponse;
    toJSON(_: MsgUpdateMarketResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateMarketResponse>): MsgUpdateMarketResponse;
};
export declare const MsgRemoveMarketForAssetRequest: {
    encode(message: MsgRemoveMarketForAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMarketForAssetRequest;
    fromJSON(object: any): MsgRemoveMarketForAssetRequest;
    toJSON(message: MsgRemoveMarketForAssetRequest): unknown;
    fromPartial(object: DeepPartial<MsgRemoveMarketForAssetRequest>): MsgRemoveMarketForAssetRequest;
};
export declare const MsgRemoveMarketForAssetResponse: {
    encode(_: MsgRemoveMarketForAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMarketForAssetResponse;
    fromJSON(_: any): MsgRemoveMarketForAssetResponse;
    toJSON(_: MsgRemoveMarketForAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgRemoveMarketForAssetResponse>): MsgRemoveMarketForAssetResponse;
};
export declare const MsgFetchPriceRequest: {
    encode(message: MsgFetchPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFetchPriceRequest;
    fromJSON(object: any): MsgFetchPriceRequest;
    toJSON(message: MsgFetchPriceRequest): unknown;
    fromPartial(object: DeepPartial<MsgFetchPriceRequest>): MsgFetchPriceRequest;
};
export declare const MsgFetchPriceResponse: {
    encode(_: MsgFetchPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFetchPriceResponse;
    fromJSON(_: any): MsgFetchPriceResponse;
    toJSON(_: MsgFetchPriceResponse): unknown;
    fromPartial(_: DeepPartial<MsgFetchPriceResponse>): MsgFetchPriceResponse;
};
