import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface EventSwap {
    txHash: Uint8Array;
    receiver: string;
}
export declare const EventSwap: {
    encode(message: EventSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSwap;
    fromJSON(object: any): EventSwap;
    toJSON(message: EventSwap): unknown;
    fromPartial(object: DeepPartial<EventSwap>): EventSwap;
};
