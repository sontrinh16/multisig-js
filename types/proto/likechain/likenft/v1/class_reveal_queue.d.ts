import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface ClassRevealQueueEntry {
    revealTime: Timestamp;
    classId: string;
}
export declare const ClassRevealQueueEntry: {
    encode(message: ClassRevealQueueEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassRevealQueueEntry;
    fromJSON(object: any): ClassRevealQueueEntry;
    toJSON(message: ClassRevealQueueEntry): unknown;
    fromPartial(object: DeepPartial<ClassRevealQueueEntry>): ClassRevealQueueEntry;
};
