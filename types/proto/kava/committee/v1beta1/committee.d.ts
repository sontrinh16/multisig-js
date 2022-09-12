import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** TallyOption enumerates the valid types of a tally. */
export declare enum TallyOption {
    /** TALLY_OPTION_UNSPECIFIED - TALLY_OPTION_UNSPECIFIED defines a null tally option. */
    TALLY_OPTION_UNSPECIFIED = 0,
    /** TALLY_OPTION_FIRST_PAST_THE_POST - Votes are tallied each block and the proposal passes as soon as the vote threshold is reached */
    TALLY_OPTION_FIRST_PAST_THE_POST = 1,
    /** TALLY_OPTION_DEADLINE - Votes are tallied exactly once, when the deadline time is reached */
    TALLY_OPTION_DEADLINE = 2,
    UNRECOGNIZED = -1
}
export declare function tallyOptionFromJSON(object: any): TallyOption;
export declare function tallyOptionToJSON(object: TallyOption): string;
/** BaseCommittee is a common type shared by all Committees */
export interface BaseCommittee {
    id: Long;
    description: string;
    members: Uint8Array[];
    permissions: Any[];
    /** Smallest percentage that must vote for a proposal to pass */
    voteThreshold: string;
    /** The length of time a proposal remains active for. Proposals will close earlier if they get enough votes. */
    proposalDuration: Duration;
    tallyOption: TallyOption;
}
/** MemberCommittee is an alias of BaseCommittee */
export interface MemberCommittee {
    baseCommittee: BaseCommittee;
}
/** TokenCommittee supports voting on proposals by token holders */
export interface TokenCommittee {
    baseCommittee: BaseCommittee;
    quorum: string;
    tallyDenom: string;
}
export declare const BaseCommittee: {
    encode(message: BaseCommittee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BaseCommittee;
    fromJSON(object: any): BaseCommittee;
    toJSON(message: BaseCommittee): unknown;
    fromPartial(object: DeepPartial<BaseCommittee>): BaseCommittee;
};
export declare const MemberCommittee: {
    encode(message: MemberCommittee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MemberCommittee;
    fromJSON(object: any): MemberCommittee;
    toJSON(message: MemberCommittee): unknown;
    fromPartial(object: DeepPartial<MemberCommittee>): MemberCommittee;
};
export declare const TokenCommittee: {
    encode(message: TokenCommittee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenCommittee;
    fromJSON(object: any): TokenCommittee;
    toJSON(message: TokenCommittee): unknown;
    fromPartial(object: DeepPartial<TokenCommittee>): TokenCommittee;
};
