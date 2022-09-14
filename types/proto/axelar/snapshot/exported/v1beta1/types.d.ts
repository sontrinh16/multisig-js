import { Timestamp } from "../../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface Participant {
    address: Uint8Array;
    weight: Uint8Array;
}
export interface Snapshot_ParticipantsEntry {
    key: string;
    value: Participant;
}
export interface Snapshot {
    timestamp: Timestamp;
    height: Long;
    participants: {
        [key: string]: Participant;
    };
    bondedWeight: Uint8Array;
}
export declare const Participant: {
    encode(message: Participant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Participant;
    fromJSON(object: any): Participant;
    toJSON(message: Participant): unknown;
    fromPartial(object: DeepPartial<Participant>): Participant;
};
export declare const Snapshot_ParticipantsEntry: {
    encode(message: Snapshot_ParticipantsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot_ParticipantsEntry;
    fromJSON(object: any): Snapshot_ParticipantsEntry;
    toJSON(message: Snapshot_ParticipantsEntry): unknown;
    fromPartial(object: DeepPartial<Snapshot_ParticipantsEntry>): Snapshot_ParticipantsEntry;
};
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    fromPartial(object: DeepPartial<Snapshot>): Snapshot;
};
