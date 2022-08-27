import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgCreateBitcannaid {
    creator: string;
    bcnaid: string;
    address: string;
}
export interface MsgCreateBitcannaidResponse {
    id: Long;
}
export interface MsgUpdateBitcannaid {
    creator: string;
    id: Long;
    bcnaid: string;
    address: string;
}
export interface MsgUpdateBitcannaidResponse {
}
export interface MsgDeleteBitcannaid {
    creator: string;
    id: Long;
}
export interface MsgDeleteBitcannaidResponse {
}
export interface MsgCreateSupplychain {
    creator: string;
    product: string;
    info: string;
    supplyinfo: string;
}
export interface MsgCreateSupplychainResponse {
    id: Long;
}
export interface MsgUpdateSupplychain {
    creator: string;
    id: Long;
    product: string;
    info: string;
    supplyinfo: string;
}
export interface MsgUpdateSupplychainResponse {
}
export interface MsgDeleteSupplychain {
    creator: string;
    id: Long;
}
export interface MsgDeleteSupplychainResponse {
}
export declare const MsgCreateBitcannaid: {
    encode(message: MsgCreateBitcannaid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBitcannaid;
    fromJSON(object: any): MsgCreateBitcannaid;
    toJSON(message: MsgCreateBitcannaid): unknown;
    fromPartial(object: DeepPartial<MsgCreateBitcannaid>): MsgCreateBitcannaid;
};
export declare const MsgCreateBitcannaidResponse: {
    encode(message: MsgCreateBitcannaidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBitcannaidResponse;
    fromJSON(object: any): MsgCreateBitcannaidResponse;
    toJSON(message: MsgCreateBitcannaidResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateBitcannaidResponse>): MsgCreateBitcannaidResponse;
};
export declare const MsgUpdateBitcannaid: {
    encode(message: MsgUpdateBitcannaid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBitcannaid;
    fromJSON(object: any): MsgUpdateBitcannaid;
    toJSON(message: MsgUpdateBitcannaid): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBitcannaid>): MsgUpdateBitcannaid;
};
export declare const MsgUpdateBitcannaidResponse: {
    encode(_: MsgUpdateBitcannaidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBitcannaidResponse;
    fromJSON(_: any): MsgUpdateBitcannaidResponse;
    toJSON(_: MsgUpdateBitcannaidResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateBitcannaidResponse>): MsgUpdateBitcannaidResponse;
};
export declare const MsgDeleteBitcannaid: {
    encode(message: MsgDeleteBitcannaid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBitcannaid;
    fromJSON(object: any): MsgDeleteBitcannaid;
    toJSON(message: MsgDeleteBitcannaid): unknown;
    fromPartial(object: DeepPartial<MsgDeleteBitcannaid>): MsgDeleteBitcannaid;
};
export declare const MsgDeleteBitcannaidResponse: {
    encode(_: MsgDeleteBitcannaidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteBitcannaidResponse;
    fromJSON(_: any): MsgDeleteBitcannaidResponse;
    toJSON(_: MsgDeleteBitcannaidResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteBitcannaidResponse>): MsgDeleteBitcannaidResponse;
};
export declare const MsgCreateSupplychain: {
    encode(message: MsgCreateSupplychain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSupplychain;
    fromJSON(object: any): MsgCreateSupplychain;
    toJSON(message: MsgCreateSupplychain): unknown;
    fromPartial(object: DeepPartial<MsgCreateSupplychain>): MsgCreateSupplychain;
};
export declare const MsgCreateSupplychainResponse: {
    encode(message: MsgCreateSupplychainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateSupplychainResponse;
    fromJSON(object: any): MsgCreateSupplychainResponse;
    toJSON(message: MsgCreateSupplychainResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSupplychainResponse>): MsgCreateSupplychainResponse;
};
export declare const MsgUpdateSupplychain: {
    encode(message: MsgUpdateSupplychain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSupplychain;
    fromJSON(object: any): MsgUpdateSupplychain;
    toJSON(message: MsgUpdateSupplychain): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSupplychain>): MsgUpdateSupplychain;
};
export declare const MsgUpdateSupplychainResponse: {
    encode(_: MsgUpdateSupplychainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSupplychainResponse;
    fromJSON(_: any): MsgUpdateSupplychainResponse;
    toJSON(_: MsgUpdateSupplychainResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSupplychainResponse>): MsgUpdateSupplychainResponse;
};
export declare const MsgDeleteSupplychain: {
    encode(message: MsgDeleteSupplychain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSupplychain;
    fromJSON(object: any): MsgDeleteSupplychain;
    toJSON(message: MsgDeleteSupplychain): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSupplychain>): MsgDeleteSupplychain;
};
export declare const MsgDeleteSupplychainResponse: {
    encode(_: MsgDeleteSupplychainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSupplychainResponse;
    fromJSON(_: any): MsgDeleteSupplychainResponse;
    toJSON(_: MsgDeleteSupplychainResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSupplychainResponse>): MsgDeleteSupplychainResponse;
};
