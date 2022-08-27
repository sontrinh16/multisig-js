import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface IBCParams {
    port: string;
    version: string;
}
export interface OracleParams {
    askCount: Long;
    minCount: Long;
    multiplier: Long;
}
export interface Params {
    ibc: IBCParams;
    oracle: OracleParams;
}
export declare const IBCParams: {
    encode(message: IBCParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IBCParams;
    fromJSON(object: any): IBCParams;
    toJSON(message: IBCParams): unknown;
    fromPartial(object: DeepPartial<IBCParams>): IBCParams;
};
export declare const OracleParams: {
    encode(message: OracleParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OracleParams;
    fromJSON(object: any): OracleParams;
    toJSON(message: OracleParams): unknown;
    fromPartial(object: DeepPartial<OracleParams>): OracleParams;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
