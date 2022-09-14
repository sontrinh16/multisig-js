import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface TalliedVote_IsVoterLateEntry {
    key: string;
    value: boolean;
}
/**
 * TalliedVote represents a vote for a poll with the accumulated stake of all
 * validators voting for the same data
 */
export interface TalliedVote {
    tally: Uint8Array;
    data: Any;
    pollId: Long;
    isVoterLate: {
        [key: string]: boolean;
    };
}
export declare const TalliedVote_IsVoterLateEntry: {
    encode(message: TalliedVote_IsVoterLateEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TalliedVote_IsVoterLateEntry;
    fromJSON(object: any): TalliedVote_IsVoterLateEntry;
    toJSON(message: TalliedVote_IsVoterLateEntry): unknown;
    fromPartial(object: DeepPartial<TalliedVote_IsVoterLateEntry>): TalliedVote_IsVoterLateEntry;
};
export declare const TalliedVote: {
    encode(message: TalliedVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TalliedVote;
    fromJSON(object: any): TalliedVote;
    toJSON(message: TalliedVote): unknown;
    fromPartial(object: DeepPartial<TalliedVote>): TalliedVote;
};
