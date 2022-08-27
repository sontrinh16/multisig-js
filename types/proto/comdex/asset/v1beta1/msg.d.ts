import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface MsgAddAssetRequest {
    from: string;
    name: string;
    denom: string;
    decimals: Long;
}
export interface MsgAddAssetResponse {
}
export interface MsgUpdateAssetRequest {
    from: string;
    id: Long;
    name: string;
    denom: string;
    decimals: Long;
}
export interface MsgUpdateAssetResponse {
}
export interface MsgAddPairRequest {
    from: string;
    assetIn: Long;
    assetOut: Long;
    liquidationRatio: string;
}
export interface MsgAddPairResponse {
}
export interface MsgUpdatePairRequest {
    from: string;
    id: Long;
    liquidationRatio: string;
}
export interface MsgUpdatePairResponse {
}
export declare const MsgAddAssetRequest: {
    encode(message: MsgAddAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAssetRequest;
    fromJSON(object: any): MsgAddAssetRequest;
    toJSON(message: MsgAddAssetRequest): unknown;
    fromPartial(object: DeepPartial<MsgAddAssetRequest>): MsgAddAssetRequest;
};
export declare const MsgAddAssetResponse: {
    encode(_: MsgAddAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAssetResponse;
    fromJSON(_: any): MsgAddAssetResponse;
    toJSON(_: MsgAddAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddAssetResponse>): MsgAddAssetResponse;
};
export declare const MsgUpdateAssetRequest: {
    encode(message: MsgUpdateAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAssetRequest;
    fromJSON(object: any): MsgUpdateAssetRequest;
    toJSON(message: MsgUpdateAssetRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAssetRequest>): MsgUpdateAssetRequest;
};
export declare const MsgUpdateAssetResponse: {
    encode(_: MsgUpdateAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateAssetResponse;
    fromJSON(_: any): MsgUpdateAssetResponse;
    toJSON(_: MsgUpdateAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse;
};
export declare const MsgAddPairRequest: {
    encode(message: MsgAddPairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPairRequest;
    fromJSON(object: any): MsgAddPairRequest;
    toJSON(message: MsgAddPairRequest): unknown;
    fromPartial(object: DeepPartial<MsgAddPairRequest>): MsgAddPairRequest;
};
export declare const MsgAddPairResponse: {
    encode(_: MsgAddPairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPairResponse;
    fromJSON(_: any): MsgAddPairResponse;
    toJSON(_: MsgAddPairResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddPairResponse>): MsgAddPairResponse;
};
export declare const MsgUpdatePairRequest: {
    encode(message: MsgUpdatePairRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePairRequest;
    fromJSON(object: any): MsgUpdatePairRequest;
    toJSON(message: MsgUpdatePairRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePairRequest>): MsgUpdatePairRequest;
};
export declare const MsgUpdatePairResponse: {
    encode(_: MsgUpdatePairResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePairResponse;
    fromJSON(_: any): MsgUpdatePairResponse;
    toJSON(_: MsgUpdatePairResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePairResponse>): MsgUpdatePairResponse;
};
