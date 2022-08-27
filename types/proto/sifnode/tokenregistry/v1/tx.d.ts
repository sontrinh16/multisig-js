import { RegistryEntry, Registry } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface MsgRegister {
    from: string;
    entry: RegistryEntry;
}
export interface MsgRegisterResponse {
}
export interface MsgSetRegistry {
    from: string;
    registry: Registry;
}
export interface MsgSetRegistryResponse {
}
export interface MsgDeregister {
    from: string;
    denom: string;
}
export interface MsgDeregisterResponse {
}
export declare const MsgRegister: {
    encode(message: MsgRegister, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegister;
    fromJSON(object: any): MsgRegister;
    toJSON(message: MsgRegister): unknown;
    fromPartial(object: DeepPartial<MsgRegister>): MsgRegister;
};
export declare const MsgRegisterResponse: {
    encode(_: MsgRegisterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterResponse;
    fromJSON(_: any): MsgRegisterResponse;
    toJSON(_: MsgRegisterResponse): unknown;
    fromPartial(_: DeepPartial<MsgRegisterResponse>): MsgRegisterResponse;
};
export declare const MsgSetRegistry: {
    encode(message: MsgSetRegistry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRegistry;
    fromJSON(object: any): MsgSetRegistry;
    toJSON(message: MsgSetRegistry): unknown;
    fromPartial(object: DeepPartial<MsgSetRegistry>): MsgSetRegistry;
};
export declare const MsgSetRegistryResponse: {
    encode(_: MsgSetRegistryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetRegistryResponse;
    fromJSON(_: any): MsgSetRegistryResponse;
    toJSON(_: MsgSetRegistryResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetRegistryResponse>): MsgSetRegistryResponse;
};
export declare const MsgDeregister: {
    encode(message: MsgDeregister, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregister;
    fromJSON(object: any): MsgDeregister;
    toJSON(message: MsgDeregister): unknown;
    fromPartial(object: DeepPartial<MsgDeregister>): MsgDeregister;
};
export declare const MsgDeregisterResponse: {
    encode(_: MsgDeregisterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeregisterResponse;
    fromJSON(_: any): MsgDeregisterResponse;
    toJSON(_: MsgDeregisterResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeregisterResponse>): MsgDeregisterResponse;
};
