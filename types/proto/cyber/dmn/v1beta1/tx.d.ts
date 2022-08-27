import { Trigger, Load } from "./types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgCreateThought {
    program: string;
    trigger: Trigger;
    load: Load;
    name: string;
    particle: string;
}
export interface MsgForgetThought {
    program: string;
    name: string;
}
export interface MsgChangeThoughtParticle {
    program: string;
    name: string;
    particle: string;
}
export interface MsgChangeThoughtName {
    program: string;
    name: string;
    newName: string;
}
export interface MsgChangeThoughtInput {
    program: string;
    name: string;
    input: string;
}
export interface MsgChangeThoughtGasPrice {
    program: string;
    name: string;
    gasPrice: Coin;
}
export interface MsgChangeThoughtPeriod {
    program: string;
    name: string;
    period: Long;
}
export interface MsgChangeThoughtBlock {
    program: string;
    name: string;
    block: Long;
}
export interface MsgCreateThoughtResponse {
}
export interface MsgForgetThoughtResponse {
}
export interface MsgChangeThoughtParticleResponse {
}
export interface MsgChangeThoughtNameResponse {
}
export interface MsgChangeThoughtInputResponse {
}
export interface MsgChangeThoughtGasPriceResponse {
}
export interface MsgChangeThoughtPeriodResponse {
}
export interface MsgChangeThoughtBlockResponse {
}
export declare const MsgCreateThought: {
    encode(message: MsgCreateThought, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateThought;
    fromJSON(object: any): MsgCreateThought;
    toJSON(message: MsgCreateThought): unknown;
    fromPartial(object: DeepPartial<MsgCreateThought>): MsgCreateThought;
};
export declare const MsgForgetThought: {
    encode(message: MsgForgetThought, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgForgetThought;
    fromJSON(object: any): MsgForgetThought;
    toJSON(message: MsgForgetThought): unknown;
    fromPartial(object: DeepPartial<MsgForgetThought>): MsgForgetThought;
};
export declare const MsgChangeThoughtParticle: {
    encode(message: MsgChangeThoughtParticle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtParticle;
    fromJSON(object: any): MsgChangeThoughtParticle;
    toJSON(message: MsgChangeThoughtParticle): unknown;
    fromPartial(object: DeepPartial<MsgChangeThoughtParticle>): MsgChangeThoughtParticle;
};
export declare const MsgChangeThoughtName: {
    encode(message: MsgChangeThoughtName, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtName;
    fromJSON(object: any): MsgChangeThoughtName;
    toJSON(message: MsgChangeThoughtName): unknown;
    fromPartial(object: DeepPartial<MsgChangeThoughtName>): MsgChangeThoughtName;
};
export declare const MsgChangeThoughtInput: {
    encode(message: MsgChangeThoughtInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtInput;
    fromJSON(object: any): MsgChangeThoughtInput;
    toJSON(message: MsgChangeThoughtInput): unknown;
    fromPartial(object: DeepPartial<MsgChangeThoughtInput>): MsgChangeThoughtInput;
};
export declare const MsgChangeThoughtGasPrice: {
    encode(message: MsgChangeThoughtGasPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtGasPrice;
    fromJSON(object: any): MsgChangeThoughtGasPrice;
    toJSON(message: MsgChangeThoughtGasPrice): unknown;
    fromPartial(object: DeepPartial<MsgChangeThoughtGasPrice>): MsgChangeThoughtGasPrice;
};
export declare const MsgChangeThoughtPeriod: {
    encode(message: MsgChangeThoughtPeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtPeriod;
    fromJSON(object: any): MsgChangeThoughtPeriod;
    toJSON(message: MsgChangeThoughtPeriod): unknown;
    fromPartial(object: DeepPartial<MsgChangeThoughtPeriod>): MsgChangeThoughtPeriod;
};
export declare const MsgChangeThoughtBlock: {
    encode(message: MsgChangeThoughtBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtBlock;
    fromJSON(object: any): MsgChangeThoughtBlock;
    toJSON(message: MsgChangeThoughtBlock): unknown;
    fromPartial(object: DeepPartial<MsgChangeThoughtBlock>): MsgChangeThoughtBlock;
};
export declare const MsgCreateThoughtResponse: {
    encode(_: MsgCreateThoughtResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateThoughtResponse;
    fromJSON(_: any): MsgCreateThoughtResponse;
    toJSON(_: MsgCreateThoughtResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateThoughtResponse>): MsgCreateThoughtResponse;
};
export declare const MsgForgetThoughtResponse: {
    encode(_: MsgForgetThoughtResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgForgetThoughtResponse;
    fromJSON(_: any): MsgForgetThoughtResponse;
    toJSON(_: MsgForgetThoughtResponse): unknown;
    fromPartial(_: DeepPartial<MsgForgetThoughtResponse>): MsgForgetThoughtResponse;
};
export declare const MsgChangeThoughtParticleResponse: {
    encode(_: MsgChangeThoughtParticleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtParticleResponse;
    fromJSON(_: any): MsgChangeThoughtParticleResponse;
    toJSON(_: MsgChangeThoughtParticleResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeThoughtParticleResponse>): MsgChangeThoughtParticleResponse;
};
export declare const MsgChangeThoughtNameResponse: {
    encode(_: MsgChangeThoughtNameResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtNameResponse;
    fromJSON(_: any): MsgChangeThoughtNameResponse;
    toJSON(_: MsgChangeThoughtNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeThoughtNameResponse>): MsgChangeThoughtNameResponse;
};
export declare const MsgChangeThoughtInputResponse: {
    encode(_: MsgChangeThoughtInputResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtInputResponse;
    fromJSON(_: any): MsgChangeThoughtInputResponse;
    toJSON(_: MsgChangeThoughtInputResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeThoughtInputResponse>): MsgChangeThoughtInputResponse;
};
export declare const MsgChangeThoughtGasPriceResponse: {
    encode(_: MsgChangeThoughtGasPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtGasPriceResponse;
    fromJSON(_: any): MsgChangeThoughtGasPriceResponse;
    toJSON(_: MsgChangeThoughtGasPriceResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeThoughtGasPriceResponse>): MsgChangeThoughtGasPriceResponse;
};
export declare const MsgChangeThoughtPeriodResponse: {
    encode(_: MsgChangeThoughtPeriodResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtPeriodResponse;
    fromJSON(_: any): MsgChangeThoughtPeriodResponse;
    toJSON(_: MsgChangeThoughtPeriodResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeThoughtPeriodResponse>): MsgChangeThoughtPeriodResponse;
};
export declare const MsgChangeThoughtBlockResponse: {
    encode(_: MsgChangeThoughtBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgChangeThoughtBlockResponse;
    fromJSON(_: any): MsgChangeThoughtBlockResponse;
    toJSON(_: MsgChangeThoughtBlockResponse): unknown;
    fromPartial(_: DeepPartial<MsgChangeThoughtBlockResponse>): MsgChangeThoughtBlockResponse;
};
