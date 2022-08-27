import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface RoyaltyConfigByClass {
    classId: string;
    royaltyConfig: RoyaltyConfig;
}
export interface RoyaltyConfig {
    rateBasisPoints: Long;
    stakeholders: RoyaltyStakeholder[];
}
export interface RoyaltyStakeholder {
    account: Uint8Array;
    weight: Long;
}
export interface RoyaltyConfigInput {
    rateBasisPoints: Long;
    stakeholders: RoyaltyStakeholderInput[];
}
export interface RoyaltyStakeholderInput {
    account: string;
    weight: Long;
}
export declare const RoyaltyConfigByClass: {
    encode(message: RoyaltyConfigByClass, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyConfigByClass;
    fromJSON(object: any): RoyaltyConfigByClass;
    toJSON(message: RoyaltyConfigByClass): unknown;
    fromPartial(object: DeepPartial<RoyaltyConfigByClass>): RoyaltyConfigByClass;
};
export declare const RoyaltyConfig: {
    encode(message: RoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyConfig;
    fromJSON(object: any): RoyaltyConfig;
    toJSON(message: RoyaltyConfig): unknown;
    fromPartial(object: DeepPartial<RoyaltyConfig>): RoyaltyConfig;
};
export declare const RoyaltyStakeholder: {
    encode(message: RoyaltyStakeholder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyStakeholder;
    fromJSON(object: any): RoyaltyStakeholder;
    toJSON(message: RoyaltyStakeholder): unknown;
    fromPartial(object: DeepPartial<RoyaltyStakeholder>): RoyaltyStakeholder;
};
export declare const RoyaltyConfigInput: {
    encode(message: RoyaltyConfigInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyConfigInput;
    fromJSON(object: any): RoyaltyConfigInput;
    toJSON(message: RoyaltyConfigInput): unknown;
    fromPartial(object: DeepPartial<RoyaltyConfigInput>): RoyaltyConfigInput;
};
export declare const RoyaltyStakeholderInput: {
    encode(message: RoyaltyStakeholderInput, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RoyaltyStakeholderInput;
    fromJSON(object: any): RoyaltyStakeholderInput;
    toJSON(message: RoyaltyStakeholderInput): unknown;
    fromPartial(object: DeepPartial<RoyaltyStakeholderInput>): RoyaltyStakeholderInput;
};
