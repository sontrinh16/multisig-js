import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Market {
    symbol: string;
    scriptId: Long;
}
export interface Calldata {
    symbols: string[];
    multiplier: Long;
}
export interface Result {
    rates: Long[];
}
export declare const Market: {
    encode(message: Market, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Market;
    fromJSON(object: any): Market;
    toJSON(message: Market): unknown;
    fromPartial(object: DeepPartial<Market>): Market;
};
export declare const Calldata: {
    encode(message: Calldata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Calldata;
    fromJSON(object: any): Calldata;
    toJSON(message: Calldata): unknown;
    fromPartial(object: DeepPartial<Calldata>): Calldata;
};
export declare const Result: {
    encode(message: Result, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Result;
    fromJSON(object: any): Result;
    toJSON(message: Result): unknown;
    fromPartial(object: DeepPartial<Result>): Result;
};
