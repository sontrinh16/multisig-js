import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Threshold {
    /**
     * split threshold into Numerator and denominator to avoid floating point
     * errors down the line
     */
    numerator: Long;
    denominator: Long;
}
export declare const Threshold: {
    encode(message: Threshold, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Threshold;
    fromJSON(object: any): Threshold;
    toJSON(message: Threshold): unknown;
    fromPartial(object: DeepPartial<Threshold>): Threshold;
};
