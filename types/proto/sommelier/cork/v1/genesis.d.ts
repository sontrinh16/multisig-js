import { CellarIDSet, ValidatorCork, ScheduledCork } from "./cork";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** GenesisState - all cork state that must be provided at genesis */
export interface GenesisState {
    params: Params;
    cellarIds: CellarIDSet;
    invalidationNonce: Long;
    corks: ValidatorCork[];
    scheduledCorks: ScheduledCork[];
}
/** Params cork parameters */
export interface Params {
    /** VotePeriod defines the number of blocks to wait for votes before attempting to tally */
    votePeriod: Long;
    /** VoteThreshold defines the percentage of bonded stake required to vote each period */
    voteThreshold: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
