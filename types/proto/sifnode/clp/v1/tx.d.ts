import { Asset } from "./types";
import { RewardPeriod, ProviderDistributionPeriod } from "./params";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgUpdateStakingRewardParams {
    signer: string;
    minter: string;
    params: string;
}
export interface MsgUpdateStakingRewardParamsResponse {
}
export interface MsgRemoveLiquidity {
    signer: string;
    externalAsset: Asset;
    wBasisPoints: string;
    asymmetry: string;
}
export interface MsgRemoveLiquidityResponse {
}
export interface MsgRemoveLiquidityUnits {
    signer: string;
    externalAsset: Asset;
    withdrawUnits: string;
}
export interface MsgRemoveLiquidityUnitsResponse {
}
export interface MsgCreatePool {
    signer: string;
    externalAsset: Asset;
    nativeAssetAmount: string;
    externalAssetAmount: string;
}
export interface MsgCreatePoolResponse {
}
export interface MsgAddLiquidity {
    signer: string;
    externalAsset: Asset;
    nativeAssetAmount: string;
    externalAssetAmount: string;
}
export interface MsgAddLiquidityResponse {
}
export interface MsgModifyPmtpRates {
    signer: string;
    blockRate: string;
    runningRate: string;
    endPolicy: boolean;
}
export interface MsgModifyPmtpRatesResponse {
}
export interface MsgUpdatePmtpParams {
    signer: string;
    pmtpPeriodGovernanceRate: string;
    pmtpPeriodEpochLength: Long;
    pmtpPeriodStartBlock: Long;
    pmtpPeriodEndBlock: Long;
}
export interface MsgUpdatePmtpParamsResponse {
}
export interface MsgSwap {
    signer: string;
    sentAsset: Asset;
    receivedAsset: Asset;
    sentAmount: string;
    minReceivingAmount: string;
}
export interface MsgSwapResponse {
}
export interface MsgDecommissionPool {
    signer: string;
    symbol: string;
}
export interface MsgDecommissionPoolResponse {
}
export interface MsgUnlockLiquidityRequest {
    signer: string;
    externalAsset: Asset;
    units: string;
}
export interface MsgUnlockLiquidityResponse {
}
export interface MsgUpdateRewardsParamsRequest {
    signer: string;
    /** in blocks */
    liquidityRemovalLockPeriod: Long;
    /** in blocks */
    liquidityRemovalCancelPeriod: Long;
}
export interface MsgUpdateRewardsParamsResponse {
}
export interface MsgAddRewardPeriodRequest {
    signer: string;
    rewardPeriods: RewardPeriod[];
}
export interface MsgAddRewardPeriodResponse {
}
export interface MsgSetSymmetryThreshold {
    signer: string;
    threshold: string;
    ratio: string;
}
export interface MsgSetSymmetryThresholdResponse {
}
export interface MsgCancelUnlock {
    signer: string;
    externalAsset: Asset;
    units: string;
}
export interface MsgCancelUnlockResponse {
}
export interface RemovalRequest {
    id: Long;
    value: string;
    msg: MsgRemoveLiquidity;
}
export interface MsgModifyLiquidityProtectionRates {
    signer: string;
    currentRowanLiquidityThreshold: string;
}
export interface MsgModifyLiquidityProtectionRatesResponse {
}
export interface MsgUpdateLiquidityProtectionParams {
    signer: string;
    maxRowanLiquidityThreshold: string;
    maxRowanLiquidityThresholdAsset: string;
    epochLength: Long;
    isActive: boolean;
}
export interface MsgUpdateLiquidityProtectionParamsResponse {
}
export interface MsgAddProviderDistributionPeriodRequest {
    signer: string;
    distributionPeriods: ProviderDistributionPeriod[];
}
export interface MsgAddProviderDistributionPeriodResponse {
}
export declare const MsgUpdateStakingRewardParams: {
    encode(message: MsgUpdateStakingRewardParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStakingRewardParams;
    fromJSON(object: any): MsgUpdateStakingRewardParams;
    toJSON(message: MsgUpdateStakingRewardParams): unknown;
    fromPartial(object: DeepPartial<MsgUpdateStakingRewardParams>): MsgUpdateStakingRewardParams;
};
export declare const MsgUpdateStakingRewardParamsResponse: {
    encode(_: MsgUpdateStakingRewardParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStakingRewardParamsResponse;
    fromJSON(_: any): MsgUpdateStakingRewardParamsResponse;
    toJSON(_: MsgUpdateStakingRewardParamsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateStakingRewardParamsResponse>): MsgUpdateStakingRewardParamsResponse;
};
export declare const MsgRemoveLiquidity: {
    encode(message: MsgRemoveLiquidity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidity;
    fromJSON(object: any): MsgRemoveLiquidity;
    toJSON(message: MsgRemoveLiquidity): unknown;
    fromPartial(object: DeepPartial<MsgRemoveLiquidity>): MsgRemoveLiquidity;
};
export declare const MsgRemoveLiquidityResponse: {
    encode(_: MsgRemoveLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidityResponse;
    fromJSON(_: any): MsgRemoveLiquidityResponse;
    toJSON(_: MsgRemoveLiquidityResponse): unknown;
    fromPartial(_: DeepPartial<MsgRemoveLiquidityResponse>): MsgRemoveLiquidityResponse;
};
export declare const MsgRemoveLiquidityUnits: {
    encode(message: MsgRemoveLiquidityUnits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidityUnits;
    fromJSON(object: any): MsgRemoveLiquidityUnits;
    toJSON(message: MsgRemoveLiquidityUnits): unknown;
    fromPartial(object: DeepPartial<MsgRemoveLiquidityUnits>): MsgRemoveLiquidityUnits;
};
export declare const MsgRemoveLiquidityUnitsResponse: {
    encode(_: MsgRemoveLiquidityUnitsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidityUnitsResponse;
    fromJSON(_: any): MsgRemoveLiquidityUnitsResponse;
    toJSON(_: MsgRemoveLiquidityUnitsResponse): unknown;
    fromPartial(_: DeepPartial<MsgRemoveLiquidityUnitsResponse>): MsgRemoveLiquidityUnitsResponse;
};
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool;
    fromJSON(object: any): MsgCreatePool;
    toJSON(message: MsgCreatePool): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
    encode(_: MsgCreatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse;
    fromJSON(_: any): MsgCreatePoolResponse;
    toJSON(_: MsgCreatePoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
};
export declare const MsgAddLiquidity: {
    encode(message: MsgAddLiquidity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidity;
    fromJSON(object: any): MsgAddLiquidity;
    toJSON(message: MsgAddLiquidity): unknown;
    fromPartial(object: DeepPartial<MsgAddLiquidity>): MsgAddLiquidity;
};
export declare const MsgAddLiquidityResponse: {
    encode(_: MsgAddLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidityResponse;
    fromJSON(_: any): MsgAddLiquidityResponse;
    toJSON(_: MsgAddLiquidityResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddLiquidityResponse>): MsgAddLiquidityResponse;
};
export declare const MsgModifyPmtpRates: {
    encode(message: MsgModifyPmtpRates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyPmtpRates;
    fromJSON(object: any): MsgModifyPmtpRates;
    toJSON(message: MsgModifyPmtpRates): unknown;
    fromPartial(object: DeepPartial<MsgModifyPmtpRates>): MsgModifyPmtpRates;
};
export declare const MsgModifyPmtpRatesResponse: {
    encode(_: MsgModifyPmtpRatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyPmtpRatesResponse;
    fromJSON(_: any): MsgModifyPmtpRatesResponse;
    toJSON(_: MsgModifyPmtpRatesResponse): unknown;
    fromPartial(_: DeepPartial<MsgModifyPmtpRatesResponse>): MsgModifyPmtpRatesResponse;
};
export declare const MsgUpdatePmtpParams: {
    encode(message: MsgUpdatePmtpParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePmtpParams;
    fromJSON(object: any): MsgUpdatePmtpParams;
    toJSON(message: MsgUpdatePmtpParams): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePmtpParams>): MsgUpdatePmtpParams;
};
export declare const MsgUpdatePmtpParamsResponse: {
    encode(_: MsgUpdatePmtpParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePmtpParamsResponse;
    fromJSON(_: any): MsgUpdatePmtpParamsResponse;
    toJSON(_: MsgUpdatePmtpParamsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePmtpParamsResponse>): MsgUpdatePmtpParamsResponse;
};
export declare const MsgSwap: {
    encode(message: MsgSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap;
    fromJSON(object: any): MsgSwap;
    toJSON(message: MsgSwap): unknown;
    fromPartial(object: DeepPartial<MsgSwap>): MsgSwap;
};
export declare const MsgSwapResponse: {
    encode(_: MsgSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse;
    fromJSON(_: any): MsgSwapResponse;
    toJSON(_: MsgSwapResponse): unknown;
    fromPartial(_: DeepPartial<MsgSwapResponse>): MsgSwapResponse;
};
export declare const MsgDecommissionPool: {
    encode(message: MsgDecommissionPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDecommissionPool;
    fromJSON(object: any): MsgDecommissionPool;
    toJSON(message: MsgDecommissionPool): unknown;
    fromPartial(object: DeepPartial<MsgDecommissionPool>): MsgDecommissionPool;
};
export declare const MsgDecommissionPoolResponse: {
    encode(_: MsgDecommissionPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDecommissionPoolResponse;
    fromJSON(_: any): MsgDecommissionPoolResponse;
    toJSON(_: MsgDecommissionPoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgDecommissionPoolResponse>): MsgDecommissionPoolResponse;
};
export declare const MsgUnlockLiquidityRequest: {
    encode(message: MsgUnlockLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlockLiquidityRequest;
    fromJSON(object: any): MsgUnlockLiquidityRequest;
    toJSON(message: MsgUnlockLiquidityRequest): unknown;
    fromPartial(object: DeepPartial<MsgUnlockLiquidityRequest>): MsgUnlockLiquidityRequest;
};
export declare const MsgUnlockLiquidityResponse: {
    encode(_: MsgUnlockLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlockLiquidityResponse;
    fromJSON(_: any): MsgUnlockLiquidityResponse;
    toJSON(_: MsgUnlockLiquidityResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnlockLiquidityResponse>): MsgUnlockLiquidityResponse;
};
export declare const MsgUpdateRewardsParamsRequest: {
    encode(message: MsgUpdateRewardsParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRewardsParamsRequest;
    fromJSON(object: any): MsgUpdateRewardsParamsRequest;
    toJSON(message: MsgUpdateRewardsParamsRequest): unknown;
    fromPartial(object: DeepPartial<MsgUpdateRewardsParamsRequest>): MsgUpdateRewardsParamsRequest;
};
export declare const MsgUpdateRewardsParamsResponse: {
    encode(_: MsgUpdateRewardsParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRewardsParamsResponse;
    fromJSON(_: any): MsgUpdateRewardsParamsResponse;
    toJSON(_: MsgUpdateRewardsParamsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateRewardsParamsResponse>): MsgUpdateRewardsParamsResponse;
};
export declare const MsgAddRewardPeriodRequest: {
    encode(message: MsgAddRewardPeriodRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRewardPeriodRequest;
    fromJSON(object: any): MsgAddRewardPeriodRequest;
    toJSON(message: MsgAddRewardPeriodRequest): unknown;
    fromPartial(object: DeepPartial<MsgAddRewardPeriodRequest>): MsgAddRewardPeriodRequest;
};
export declare const MsgAddRewardPeriodResponse: {
    encode(_: MsgAddRewardPeriodResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRewardPeriodResponse;
    fromJSON(_: any): MsgAddRewardPeriodResponse;
    toJSON(_: MsgAddRewardPeriodResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddRewardPeriodResponse>): MsgAddRewardPeriodResponse;
};
export declare const MsgSetSymmetryThreshold: {
    encode(message: MsgSetSymmetryThreshold, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSymmetryThreshold;
    fromJSON(object: any): MsgSetSymmetryThreshold;
    toJSON(message: MsgSetSymmetryThreshold): unknown;
    fromPartial(object: DeepPartial<MsgSetSymmetryThreshold>): MsgSetSymmetryThreshold;
};
export declare const MsgSetSymmetryThresholdResponse: {
    encode(_: MsgSetSymmetryThresholdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSymmetryThresholdResponse;
    fromJSON(_: any): MsgSetSymmetryThresholdResponse;
    toJSON(_: MsgSetSymmetryThresholdResponse): unknown;
    fromPartial(_: DeepPartial<MsgSetSymmetryThresholdResponse>): MsgSetSymmetryThresholdResponse;
};
export declare const MsgCancelUnlock: {
    encode(message: MsgCancelUnlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUnlock;
    fromJSON(object: any): MsgCancelUnlock;
    toJSON(message: MsgCancelUnlock): unknown;
    fromPartial(object: DeepPartial<MsgCancelUnlock>): MsgCancelUnlock;
};
export declare const MsgCancelUnlockResponse: {
    encode(_: MsgCancelUnlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUnlockResponse;
    fromJSON(_: any): MsgCancelUnlockResponse;
    toJSON(_: MsgCancelUnlockResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelUnlockResponse>): MsgCancelUnlockResponse;
};
export declare const RemovalRequest: {
    encode(message: RemovalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RemovalRequest;
    fromJSON(object: any): RemovalRequest;
    toJSON(message: RemovalRequest): unknown;
    fromPartial(object: DeepPartial<RemovalRequest>): RemovalRequest;
};
export declare const MsgModifyLiquidityProtectionRates: {
    encode(message: MsgModifyLiquidityProtectionRates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyLiquidityProtectionRates;
    fromJSON(object: any): MsgModifyLiquidityProtectionRates;
    toJSON(message: MsgModifyLiquidityProtectionRates): unknown;
    fromPartial(object: DeepPartial<MsgModifyLiquidityProtectionRates>): MsgModifyLiquidityProtectionRates;
};
export declare const MsgModifyLiquidityProtectionRatesResponse: {
    encode(_: MsgModifyLiquidityProtectionRatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyLiquidityProtectionRatesResponse;
    fromJSON(_: any): MsgModifyLiquidityProtectionRatesResponse;
    toJSON(_: MsgModifyLiquidityProtectionRatesResponse): unknown;
    fromPartial(_: DeepPartial<MsgModifyLiquidityProtectionRatesResponse>): MsgModifyLiquidityProtectionRatesResponse;
};
export declare const MsgUpdateLiquidityProtectionParams: {
    encode(message: MsgUpdateLiquidityProtectionParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateLiquidityProtectionParams;
    fromJSON(object: any): MsgUpdateLiquidityProtectionParams;
    toJSON(message: MsgUpdateLiquidityProtectionParams): unknown;
    fromPartial(object: DeepPartial<MsgUpdateLiquidityProtectionParams>): MsgUpdateLiquidityProtectionParams;
};
export declare const MsgUpdateLiquidityProtectionParamsResponse: {
    encode(_: MsgUpdateLiquidityProtectionParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateLiquidityProtectionParamsResponse;
    fromJSON(_: any): MsgUpdateLiquidityProtectionParamsResponse;
    toJSON(_: MsgUpdateLiquidityProtectionParamsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateLiquidityProtectionParamsResponse>): MsgUpdateLiquidityProtectionParamsResponse;
};
export declare const MsgAddProviderDistributionPeriodRequest: {
    encode(message: MsgAddProviderDistributionPeriodRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProviderDistributionPeriodRequest;
    fromJSON(object: any): MsgAddProviderDistributionPeriodRequest;
    toJSON(message: MsgAddProviderDistributionPeriodRequest): unknown;
    fromPartial(object: DeepPartial<MsgAddProviderDistributionPeriodRequest>): MsgAddProviderDistributionPeriodRequest;
};
export declare const MsgAddProviderDistributionPeriodResponse: {
    encode(_: MsgAddProviderDistributionPeriodResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProviderDistributionPeriodResponse;
    fromJSON(_: any): MsgAddProviderDistributionPeriodResponse;
    toJSON(_: MsgAddProviderDistributionPeriodResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddProviderDistributionPeriodResponse>): MsgAddProviderDistributionPeriodResponse;
};
