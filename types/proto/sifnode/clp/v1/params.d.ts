import * as _m0 from "protobufjs/minimal";
import { Long, DeepPartial } from "@osmonauts/helpers";
/** Params - used for initializing default parameter for clp at genesis */
export interface Params {
    minCreatePoolThreshold: Long;
    enableRemovalQueue: boolean;
}
export interface RewardParams {
    /** in blocks */
    liquidityRemovalLockPeriod: Long;
    /** in blocks */
    liquidityRemovalCancelPeriod: Long;
    rewardPeriods: RewardPeriod[];
    /** start time of the current (or last) reward period */
    rewardPeriodStartTime: string;
}
/** These params are non-governable and are calculated on chain */
export interface PmtpRateParams {
    pmtpPeriodBlockRate: string;
    pmtpCurrentRunningRate: string;
    pmtpInterPolicyRate: string;
}
export interface PmtpParams {
    pmtpPeriodGovernanceRate: string;
    pmtpPeriodEpochLength: Long;
    pmtpPeriodStartBlock: Long;
    pmtpPeriodEndBlock: Long;
}
export interface RewardPeriod {
    rewardPeriodId: string;
    rewardPeriodStartBlock: Long;
    rewardPeriodEndBlock: Long;
    rewardPeriodAllocation: string;
    rewardPeriodPoolMultipliers: PoolMultiplier[];
    rewardPeriodDefaultMultiplier: string;
    rewardPeriodDistribute: boolean;
    rewardPeriodMod: Long;
}
export interface PoolMultiplier {
    poolMultiplierAsset: string;
    multiplier: string;
}
export interface LiquidityProtectionParams {
    maxRowanLiquidityThreshold: string;
    maxRowanLiquidityThresholdAsset: string;
    epochLength: Long;
    isActive: boolean;
}
export interface LiquidityProtectionRateParams {
    currentRowanLiquidityThreshold: string;
}
export interface ProviderDistributionPeriod {
    distributionPeriodBlockRate: string;
    distributionPeriodStartBlock: Long;
    distributionPeriodEndBlock: Long;
    distributionPeriodMod: Long;
}
export interface ProviderDistributionParams {
    distributionPeriods: ProviderDistributionPeriod[];
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
};
export declare const RewardParams: {
    encode(message: RewardParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardParams;
    fromJSON(object: any): RewardParams;
    toJSON(message: RewardParams): unknown;
    fromPartial(object: DeepPartial<RewardParams>): RewardParams;
};
export declare const PmtpRateParams: {
    encode(message: PmtpRateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PmtpRateParams;
    fromJSON(object: any): PmtpRateParams;
    toJSON(message: PmtpRateParams): unknown;
    fromPartial(object: DeepPartial<PmtpRateParams>): PmtpRateParams;
};
export declare const PmtpParams: {
    encode(message: PmtpParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PmtpParams;
    fromJSON(object: any): PmtpParams;
    toJSON(message: PmtpParams): unknown;
    fromPartial(object: DeepPartial<PmtpParams>): PmtpParams;
};
export declare const RewardPeriod: {
    encode(message: RewardPeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RewardPeriod;
    fromJSON(object: any): RewardPeriod;
    toJSON(message: RewardPeriod): unknown;
    fromPartial(object: DeepPartial<RewardPeriod>): RewardPeriod;
};
export declare const PoolMultiplier: {
    encode(message: PoolMultiplier, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PoolMultiplier;
    fromJSON(object: any): PoolMultiplier;
    toJSON(message: PoolMultiplier): unknown;
    fromPartial(object: DeepPartial<PoolMultiplier>): PoolMultiplier;
};
export declare const LiquidityProtectionParams: {
    encode(message: LiquidityProtectionParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProtectionParams;
    fromJSON(object: any): LiquidityProtectionParams;
    toJSON(message: LiquidityProtectionParams): unknown;
    fromPartial(object: DeepPartial<LiquidityProtectionParams>): LiquidityProtectionParams;
};
export declare const LiquidityProtectionRateParams: {
    encode(message: LiquidityProtectionRateParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProtectionRateParams;
    fromJSON(object: any): LiquidityProtectionRateParams;
    toJSON(message: LiquidityProtectionRateParams): unknown;
    fromPartial(object: DeepPartial<LiquidityProtectionRateParams>): LiquidityProtectionRateParams;
};
export declare const ProviderDistributionPeriod: {
    encode(message: ProviderDistributionPeriod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProviderDistributionPeriod;
    fromJSON(object: any): ProviderDistributionPeriod;
    toJSON(message: ProviderDistributionPeriod): unknown;
    fromPartial(object: DeepPartial<ProviderDistributionPeriod>): ProviderDistributionPeriod;
};
export declare const ProviderDistributionParams: {
    encode(message: ProviderDistributionParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProviderDistributionParams;
    fromJSON(object: any): ProviderDistributionParams;
    toJSON(message: ProviderDistributionParams): unknown;
    fromPartial(object: DeepPartial<ProviderDistributionParams>): ProviderDistributionParams;
};
