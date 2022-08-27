import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export interface EventAddPair {
    id: Long;
}
export declare const EventAddPair: {
    encode(message: EventAddPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventAddPair;
    fromJSON(object: any): EventAddPair;
    toJSON(message: EventAddPair): unknown;
    fromPartial(object: DeepPartial<EventAddPair>): EventAddPair;
};
