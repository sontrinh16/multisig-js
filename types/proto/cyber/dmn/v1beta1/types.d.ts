import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Params {
    maxSlots: number;
    maxGas: number;
    feeTtl: number;
}
export interface Thought {
    program: string;
    trigger: Trigger;
    load: Load;
    name: string;
    particle: string;
}
export interface Trigger {
    period: Long;
    block: Long;
}
export interface Load {
    input: string;
    gasPrice: Coin;
}
export interface ThoughtStats {
    program: string;
    name: string;
    calls: Long;
    fees: Long;
    gas: Long;
    lastBlock: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const Thought: {
    encode(message: Thought, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Thought;
    fromJSON(object: any): Thought;
    toJSON(message: Thought): unknown;
    fromPartial(object: DeepPartial<Thought>): Thought;
};
export declare const Trigger: {
    encode(message: Trigger, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Trigger;
    fromJSON(object: any): Trigger;
    toJSON(message: Trigger): unknown;
    fromPartial(object: DeepPartial<Trigger>): Trigger;
};
export declare const Load: {
    encode(message: Load, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Load;
    fromJSON(object: any): Load;
    toJSON(message: Load): unknown;
    fromPartial(object: DeepPartial<Load>): Load;
};
export declare const ThoughtStats: {
    encode(message: ThoughtStats, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ThoughtStats;
    fromJSON(object: any): ThoughtStats;
    toJSON(message: ThoughtStats): unknown;
    fromPartial(object: DeepPartial<ThoughtStats>): ThoughtStats;
};
