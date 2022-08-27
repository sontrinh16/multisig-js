import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export declare enum ClassParentType {
    UNKNOWN = 0,
    ISCN = 1,
    ACCOUNT = 2,
    UNRECOGNIZED = -1
}
export declare function classParentTypeFromJSON(object: any): ClassParentType;
export declare function classParentTypeToJSON(object: ClassParentType): string;
export interface ClassData {
    metadata: Uint8Array;
    parent: ClassParent;
    config: ClassConfig;
    blindBoxState: BlindBoxState;
}
export interface ClassParent {
    type: ClassParentType;
    iscnIdPrefix?: string;
    iscnVersionAtMint?: Long;
    account?: string;
}
export interface MintPeriod {
    startTime: Date;
    allowedAddresses: string[];
    mintPrice: Long;
}
export interface ClassConfig {
    burnable: boolean;
    maxSupply: Long;
    blindBoxConfig?: BlindBoxConfig;
}
export interface BlindBoxConfig {
    mintPeriods: MintPeriod[];
    revealTime: Date;
}
export interface BlindBoxState {
    contentCount: Long;
    toBeRevealed: boolean;
}
export declare const ClassData: {
    encode(message: ClassData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassData;
    fromJSON(object: any): ClassData;
    toJSON(message: ClassData): unknown;
    fromPartial(object: DeepPartial<ClassData>): ClassData;
};
export declare const ClassParent: {
    encode(message: ClassParent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassParent;
    fromJSON(object: any): ClassParent;
    toJSON(message: ClassParent): unknown;
    fromPartial(object: DeepPartial<ClassParent>): ClassParent;
};
export declare const MintPeriod: {
    encode(message: MintPeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MintPeriod;
    fromJSON(object: any): MintPeriod;
    toJSON(message: MintPeriod): unknown;
    fromPartial(object: DeepPartial<MintPeriod>): MintPeriod;
};
export declare const ClassConfig: {
    encode(message: ClassConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassConfig;
    fromJSON(object: any): ClassConfig;
    toJSON(message: ClassConfig): unknown;
    fromPartial(object: DeepPartial<ClassConfig>): ClassConfig;
};
export declare const BlindBoxConfig: {
    encode(message: BlindBoxConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlindBoxConfig;
    fromJSON(object: any): BlindBoxConfig;
    toJSON(message: BlindBoxConfig): unknown;
    fromPartial(object: DeepPartial<BlindBoxConfig>): BlindBoxConfig;
};
export declare const BlindBoxState: {
    encode(message: BlindBoxState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BlindBoxState;
    fromJSON(object: any): BlindBoxState;
    toJSON(message: BlindBoxState): unknown;
    fromPartial(object: DeepPartial<BlindBoxState>): BlindBoxState;
};
