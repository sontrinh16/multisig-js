import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface Userval {
    index: string;
    useraddr: string;
    count: Long;
}
export declare const Userval: {
    encode(message: Userval, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Userval;
    fromJSON(object: any): Userval;
    toJSON(message: Userval): unknown;
    fromPartial(object: DeepPartial<Userval>): Userval;
};
