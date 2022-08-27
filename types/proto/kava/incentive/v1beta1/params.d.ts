import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
/** RewardPeriod stores the state of an ongoing reward */
export interface RewardPeriod {
    active: boolean;
    collateralType: string;
    start: Date;
    end: Date;
    rewardsPerSecond: Coin;
}
/** MultiRewardPeriod supports multiple reward types */
export interface MultiRewardPeriod {
    active: boolean;
    collateralType: string;
    start: Date;
    end: Date;
    rewardsPerSecond: Coin[];
}
/** Multiplier amount the claim rewards get increased by, along with how long the claim rewards are locked */
export interface Multiplier {
    name: string;
    monthsLockup: Long;
    factor: Uint8Array;
}
/** MultipliersPerDenom is a map of denoms to a set of multipliers */
export interface MultipliersPerDenom {
    denom: string;
    multipliers: Multiplier[];
}
/** Params */
export interface Params {
    usdxMintingRewardPeriods: RewardPeriod[];
    hardSupplyRewardPeriods: MultiRewardPeriod[];
    hardBorrowRewardPeriods: MultiRewardPeriod[];
    delegatorRewardPeriods: MultiRewardPeriod[];
    swapRewardPeriods: MultiRewardPeriod[];
    claimMultipliers: MultipliersPerDenom[];
    claimEnd: Date;
    savingsRewardPeriods: MultiRewardPeriod[];
}
export declare const RewardPeriod: {
    encode(message: RewardPeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardPeriod;
    fromJSON(object: any): RewardPeriod;
    toJSON(message: RewardPeriod): unknown;
    fromPartial(object: DeepPartial<RewardPeriod>): RewardPeriod;
};
export declare const MultiRewardPeriod: {
    encode(message: MultiRewardPeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiRewardPeriod;
    fromJSON(object: any): MultiRewardPeriod;
    toJSON(message: MultiRewardPeriod): unknown;
    fromPartial(object: DeepPartial<MultiRewardPeriod>): MultiRewardPeriod;
};
export declare const Multiplier: {
    encode(message: Multiplier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Multiplier;
    fromJSON(object: any): Multiplier;
    toJSON(message: Multiplier): unknown;
    fromPartial(object: DeepPartial<Multiplier>): Multiplier;
};
export declare const MultipliersPerDenom: {
    encode(message: MultipliersPerDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultipliersPerDenom;
    fromJSON(object: any): MultipliersPerDenom;
    toJSON(message: MultipliersPerDenom): unknown;
    fromPartial(object: DeepPartial<MultipliersPerDenom>): MultipliersPerDenom;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
