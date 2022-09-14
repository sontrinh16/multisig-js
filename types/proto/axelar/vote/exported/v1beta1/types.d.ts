import { Any } from "../../../../google/protobuf/any";
import { Threshold } from "../../../utils/v1beta1/threshold";
import { Snapshot } from "../../../snapshot/exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
export declare enum PollState {
    POLL_STATE_UNSPECIFIED = 0,
    POLL_STATE_PENDING = 1,
    POLL_STATE_COMPLETED = 2,
    POLL_STATE_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare function pollStateFromJSON(object: any): PollState;
export declare function pollStateToJSON(object: PollState): string;
/**
 * PollMetadata represents a poll with write-in voting, i.e. the result of the
 * vote can have any data type
 */
export interface PollMetadata {
    expiresAt: Long;
    result: Any;
    votingThreshold: Threshold;
    state: PollState;
    minVoterCount: Long;
    rewardPoolName: string;
    gracePeriod: Long;
    completedAt: Long;
    id: Long;
    snapshot: Snapshot;
    module: string;
    moduleMetadata: Any;
}
/** PollKey represents the key data for a poll */
/** @deprecated */
export interface PollKey {
    module: string;
    id: string;
}
/** PollParticipants should be embedded in poll events in other modules */
export interface PollParticipants {
    pollId: Long;
    participants: Uint8Array[];
}
export declare const PollMetadata: {
    encode(message: PollMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollMetadata;
    fromJSON(object: any): PollMetadata;
    toJSON(message: PollMetadata): unknown;
    fromPartial(object: DeepPartial<PollMetadata>): PollMetadata;
};
export declare const PollKey: {
    encode(message: PollKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollKey;
    fromJSON(object: any): PollKey;
    toJSON(message: PollKey): unknown;
    fromPartial(object: DeepPartial<PollKey>): PollKey;
};
export declare const PollParticipants: {
    encode(message: PollParticipants, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PollParticipants;
    fromJSON(object: any): PollParticipants;
    toJSON(message: PollParticipants): unknown;
    fromPartial(object: DeepPartial<PollParticipants>): PollParticipants;
};
