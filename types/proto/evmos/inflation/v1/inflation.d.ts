import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistribution {
    /**
     * staking_rewards defines the proportion of the minted minted_denom that is
     * to be allocated as staking rewards
     */
    stakingRewards: string;
    /**
     * usage_incentives defines the proportion of the minted minted_denom that is
     * to be allocated to the incentives module address
     */
    usageIncentives: string;
    /**
     * community_pool defines the proportion of the minted minted_denom that is to
     * be allocated to the community pool
     */
    communityPool: string;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculation {
    /** initial value */
    a: string;
    /** reduction factor */
    r: string;
    /** long term inflation */
    c: string;
    /** bonding target */
    bondingTarget: string;
    /** max variance */
    maxVariance: string;
}
export declare const InflationDistribution: {
    encode(message: InflationDistribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InflationDistribution;
    fromJSON(object: any): InflationDistribution;
    toJSON(message: InflationDistribution): unknown;
    fromPartial(object: DeepPartial<InflationDistribution>): InflationDistribution;
};
export declare const ExponentialCalculation: {
    encode(message: ExponentialCalculation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExponentialCalculation;
    fromJSON(object: any): ExponentialCalculation;
    toJSON(message: ExponentialCalculation): unknown;
    fromPartial(object: DeepPartial<ExponentialCalculation>): ExponentialCalculation;
};
