import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** PoEContractType type of PoE contract */
export declare enum PoEContractType {
    UNDEFINED = 0,
    STAKING = 1,
    VALSET = 2,
    ENGAGEMENT = 3,
    MIXER = 4,
    DISTRIBUTION = 5,
    OVERSIGHT_COMMUNITY = 6,
    OVERSIGHT_COMMUNITY_PROPOSALS = 7,
    COMMUNITY_POOL = 8,
    VALIDATOR_VOTING = 9,
    ARBITER_POOL = 10,
    ARBITER_POOL_VOTING = 11,
    UNRECOGNIZED = -1
}
export declare function poEContractTypeFromJSON(object: any): PoEContractType;
export declare function poEContractTypeToJSON(object: PoEContractType): string;
/** Params defines the parameters for the PoE module. */
export interface Params {
    /** HistoricalEntries is the number of historical entries to persist. */
    historicalEntries: number;
    /**
     * InitialValEngagementPoints defines the number of engagement for any new
     * validator joining post genesis
     */
    initialValEngagementPoints: Long;
    /**
     * MinDelegationAmount defines the minimum amount a post genesis validator
     * needs to self delegate to receive any engagement points. One must be
     * exceeded. No minimum condition set when empty.
     */
    minDelegationAmounts: Coin[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
