import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface MsgCreateRandom {
    creator: string;
    multiplier: Long;
}
export interface MsgCreateRandomResponse {
    id: Long;
}
export declare const MsgCreateRandom: {
    encode(message: MsgCreateRandom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRandom;
    fromJSON(object: any): MsgCreateRandom;
    toJSON(message: MsgCreateRandom): unknown;
    fromPartial(object: DeepPartial<MsgCreateRandom>): MsgCreateRandom;
};
export declare const MsgCreateRandomResponse: {
    encode(message: MsgCreateRandomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRandomResponse;
    fromJSON(object: any): MsgCreateRandomResponse;
    toJSON(message: MsgCreateRandomResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateRandomResponse>): MsgCreateRandomResponse;
};
