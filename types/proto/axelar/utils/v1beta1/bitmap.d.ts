import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Bitmap {
    trueCountCache: CircularBuffer;
}
export interface CircularBuffer {
    cumulativeValue: Long[];
    index: number;
    maxSize: number;
}
export declare const Bitmap: {
    encode(message: Bitmap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Bitmap;
    fromJSON(object: any): Bitmap;
    toJSON(message: Bitmap): unknown;
    fromPartial(object: DeepPartial<Bitmap>): Bitmap;
};
export declare const CircularBuffer: {
    encode(message: CircularBuffer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CircularBuffer;
    fromJSON(object: any): CircularBuffer;
    toJSON(message: CircularBuffer): unknown;
    fromPartial(object: DeepPartial<CircularBuffer>): CircularBuffer;
};
