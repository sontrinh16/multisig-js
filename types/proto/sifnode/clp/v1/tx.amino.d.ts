import { AminoMsg } from "@cosmjs/amino";
import { MsgRemoveLiquidity, MsgRemoveLiquidityUnits, MsgCreatePool, MsgAddLiquidity, MsgSwap, MsgDecommissionPool, MsgUnlockLiquidityRequest, MsgUpdateRewardsParamsRequest, MsgAddRewardPeriodRequest, MsgModifyPmtpRates, MsgUpdatePmtpParams, MsgUpdateStakingRewardParams, MsgSetSymmetryThreshold, MsgCancelUnlock, MsgUpdateLiquidityProtectionParams, MsgModifyLiquidityProtectionRates, MsgAddProviderDistributionPeriodRequest } from "./tx";
export interface AminoMsgRemoveLiquidity extends AminoMsg {
    type: "/sifnode.clp.v1.MsgRemoveLiquidity";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        w_basis_points: string;
        asymmetry: string;
    };
}
export interface AminoMsgRemoveLiquidityUnits extends AminoMsg {
    type: "/sifnode.clp.v1.MsgRemoveLiquidityUnits";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        withdraw_units: string;
    };
}
export interface AminoMsgCreatePool extends AminoMsg {
    type: "/sifnode.clp.v1.MsgCreatePool";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        native_asset_amount: string;
        external_asset_amount: string;
    };
}
export interface AminoMsgAddLiquidity extends AminoMsg {
    type: "/sifnode.clp.v1.MsgAddLiquidity";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        native_asset_amount: string;
        external_asset_amount: string;
    };
}
export interface AminoMsgSwap extends AminoMsg {
    type: "/sifnode.clp.v1.MsgSwap";
    value: {
        signer: string;
        sent_asset: {
            symbol: string;
        };
        received_asset: {
            symbol: string;
        };
        sent_amount: string;
        min_receiving_amount: string;
    };
}
export interface AminoMsgDecommissionPool extends AminoMsg {
    type: "/sifnode.clp.v1.MsgDecommissionPool";
    value: {
        signer: string;
        symbol: string;
    };
}
export interface AminoMsgUnlockLiquidityRequest extends AminoMsg {
    type: "/sifnode.clp.v1.MsgUnlockLiquidityRequest";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        units: string;
    };
}
export interface AminoMsgUpdateRewardsParamsRequest extends AminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest";
    value: {
        signer: string;
        liquidity_removal_lock_period: string;
        liquidity_removal_cancel_period: string;
    };
}
export interface AminoMsgAddRewardPeriodRequest extends AminoMsg {
    type: "/sifnode.clp.v1.MsgAddRewardPeriodRequest";
    value: {
        signer: string;
        reward_periods: {
            reward_period_id: string;
            reward_period_start_block: string;
            reward_period_end_block: string;
            reward_period_allocation: string;
            reward_period_pool_multipliers: {
                pool_multiplier_asset: string;
                multiplier: string;
            }[];
            reward_period_default_multiplier: string;
            reward_period_distribute: boolean;
            reward_period_mod: string;
        }[];
    };
}
export interface AminoMsgModifyPmtpRates extends AminoMsg {
    type: "/sifnode.clp.v1.MsgModifyPmtpRates";
    value: {
        signer: string;
        block_rate: string;
        running_rate: string;
        end_policy: boolean;
    };
}
export interface AminoMsgUpdatePmtpParams extends AminoMsg {
    type: "/sifnode.clp.v1.MsgUpdatePmtpParams";
    value: {
        signer: string;
        pmtp_period_governance_rate: string;
        pmtp_period_epoch_length: string;
        pmtp_period_start_block: string;
        pmtp_period_end_block: string;
    };
}
export interface AminoMsgUpdateStakingRewardParams extends AminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateStakingRewardParams";
    value: {
        signer: string;
        minter: string;
        params: string;
    };
}
export interface AminoMsgSetSymmetryThreshold extends AminoMsg {
    type: "/sifnode.clp.v1.MsgSetSymmetryThreshold";
    value: {
        signer: string;
        threshold: string;
        ratio: string;
    };
}
export interface AminoMsgCancelUnlock extends AminoMsg {
    type: "/sifnode.clp.v1.MsgCancelUnlock";
    value: {
        signer: string;
        external_asset: {
            symbol: string;
        };
        units: string;
    };
}
export interface AminoMsgUpdateLiquidityProtectionParams extends AminoMsg {
    type: "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams";
    value: {
        signer: string;
        max_rowan_liquidity_threshold: string;
        max_rowan_liquidity_threshold_asset: string;
        epoch_length: string;
        is_active: boolean;
    };
}
export interface AminoMsgModifyLiquidityProtectionRates extends AminoMsg {
    type: "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates";
    value: {
        signer: string;
        current_rowan_liquidity_threshold: string;
    };
}
export interface AminoMsgAddProviderDistributionPeriodRequest extends AminoMsg {
    type: "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest";
    value: {
        signer: string;
        distribution_periods: {
            distribution_period_block_rate: string;
            distribution_period_start_block: string;
            distribution_period_end_block: string;
            distribution_period_mod: string;
        }[];
    };
}
export declare const AminoConverter: {
    "/sifnode.clp.v1.MsgRemoveLiquidity": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, wBasisPoints, asymmetry }: MsgRemoveLiquidity) => AminoMsgRemoveLiquidity["value"];
        fromAmino: ({ signer, external_asset, w_basis_points, asymmetry }: AminoMsgRemoveLiquidity["value"]) => MsgRemoveLiquidity;
    };
    "/sifnode.clp.v1.MsgRemoveLiquidityUnits": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, withdrawUnits }: MsgRemoveLiquidityUnits) => AminoMsgRemoveLiquidityUnits["value"];
        fromAmino: ({ signer, external_asset, withdraw_units }: AminoMsgRemoveLiquidityUnits["value"]) => MsgRemoveLiquidityUnits;
    };
    "/sifnode.clp.v1.MsgCreatePool": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, nativeAssetAmount, externalAssetAmount }: MsgCreatePool) => AminoMsgCreatePool["value"];
        fromAmino: ({ signer, external_asset, native_asset_amount, external_asset_amount }: AminoMsgCreatePool["value"]) => MsgCreatePool;
    };
    "/sifnode.clp.v1.MsgAddLiquidity": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, nativeAssetAmount, externalAssetAmount }: MsgAddLiquidity) => AminoMsgAddLiquidity["value"];
        fromAmino: ({ signer, external_asset, native_asset_amount, external_asset_amount }: AminoMsgAddLiquidity["value"]) => MsgAddLiquidity;
    };
    "/sifnode.clp.v1.MsgSwap": {
        aminoType: string;
        toAmino: ({ signer, sentAsset, receivedAsset, sentAmount, minReceivingAmount }: MsgSwap) => AminoMsgSwap["value"];
        fromAmino: ({ signer, sent_asset, received_asset, sent_amount, min_receiving_amount }: AminoMsgSwap["value"]) => MsgSwap;
    };
    "/sifnode.clp.v1.MsgDecommissionPool": {
        aminoType: string;
        toAmino: ({ signer, symbol }: MsgDecommissionPool) => AminoMsgDecommissionPool["value"];
        fromAmino: ({ signer, symbol }: AminoMsgDecommissionPool["value"]) => MsgDecommissionPool;
    };
    "/sifnode.clp.v1.MsgUnlockLiquidityRequest": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, units }: MsgUnlockLiquidityRequest) => AminoMsgUnlockLiquidityRequest["value"];
        fromAmino: ({ signer, external_asset, units }: AminoMsgUnlockLiquidityRequest["value"]) => MsgUnlockLiquidityRequest;
    };
    "/sifnode.clp.v1.MsgUpdateRewardsParamsRequest": {
        aminoType: string;
        toAmino: ({ signer, liquidityRemovalLockPeriod, liquidityRemovalCancelPeriod }: MsgUpdateRewardsParamsRequest) => AminoMsgUpdateRewardsParamsRequest["value"];
        fromAmino: ({ signer, liquidity_removal_lock_period, liquidity_removal_cancel_period }: AminoMsgUpdateRewardsParamsRequest["value"]) => MsgUpdateRewardsParamsRequest;
    };
    "/sifnode.clp.v1.MsgAddRewardPeriodRequest": {
        aminoType: string;
        toAmino: ({ signer, rewardPeriods }: MsgAddRewardPeriodRequest) => AminoMsgAddRewardPeriodRequest["value"];
        fromAmino: ({ signer, reward_periods }: AminoMsgAddRewardPeriodRequest["value"]) => MsgAddRewardPeriodRequest;
    };
    "/sifnode.clp.v1.MsgModifyPmtpRates": {
        aminoType: string;
        toAmino: ({ signer, blockRate, runningRate, endPolicy }: MsgModifyPmtpRates) => AminoMsgModifyPmtpRates["value"];
        fromAmino: ({ signer, block_rate, running_rate, end_policy }: AminoMsgModifyPmtpRates["value"]) => MsgModifyPmtpRates;
    };
    "/sifnode.clp.v1.MsgUpdatePmtpParams": {
        aminoType: string;
        toAmino: ({ signer, pmtpPeriodGovernanceRate, pmtpPeriodEpochLength, pmtpPeriodStartBlock, pmtpPeriodEndBlock }: MsgUpdatePmtpParams) => AminoMsgUpdatePmtpParams["value"];
        fromAmino: ({ signer, pmtp_period_governance_rate, pmtp_period_epoch_length, pmtp_period_start_block, pmtp_period_end_block }: AminoMsgUpdatePmtpParams["value"]) => MsgUpdatePmtpParams;
    };
    "/sifnode.clp.v1.MsgUpdateStakingRewardParams": {
        aminoType: string;
        toAmino: ({ signer, minter, params }: MsgUpdateStakingRewardParams) => AminoMsgUpdateStakingRewardParams["value"];
        fromAmino: ({ signer, minter, params }: AminoMsgUpdateStakingRewardParams["value"]) => MsgUpdateStakingRewardParams;
    };
    "/sifnode.clp.v1.MsgSetSymmetryThreshold": {
        aminoType: string;
        toAmino: ({ signer, threshold, ratio }: MsgSetSymmetryThreshold) => AminoMsgSetSymmetryThreshold["value"];
        fromAmino: ({ signer, threshold, ratio }: AminoMsgSetSymmetryThreshold["value"]) => MsgSetSymmetryThreshold;
    };
    "/sifnode.clp.v1.MsgCancelUnlock": {
        aminoType: string;
        toAmino: ({ signer, externalAsset, units }: MsgCancelUnlock) => AminoMsgCancelUnlock["value"];
        fromAmino: ({ signer, external_asset, units }: AminoMsgCancelUnlock["value"]) => MsgCancelUnlock;
    };
    "/sifnode.clp.v1.MsgUpdateLiquidityProtectionParams": {
        aminoType: string;
        toAmino: ({ signer, maxRowanLiquidityThreshold, maxRowanLiquidityThresholdAsset, epochLength, isActive }: MsgUpdateLiquidityProtectionParams) => AminoMsgUpdateLiquidityProtectionParams["value"];
        fromAmino: ({ signer, max_rowan_liquidity_threshold, max_rowan_liquidity_threshold_asset, epoch_length, is_active }: AminoMsgUpdateLiquidityProtectionParams["value"]) => MsgUpdateLiquidityProtectionParams;
    };
    "/sifnode.clp.v1.MsgModifyLiquidityProtectionRates": {
        aminoType: string;
        toAmino: ({ signer, currentRowanLiquidityThreshold }: MsgModifyLiquidityProtectionRates) => AminoMsgModifyLiquidityProtectionRates["value"];
        fromAmino: ({ signer, current_rowan_liquidity_threshold }: AminoMsgModifyLiquidityProtectionRates["value"]) => MsgModifyLiquidityProtectionRates;
    };
    "/sifnode.clp.v1.MsgAddProviderDistributionPeriodRequest": {
        aminoType: string;
        toAmino: ({ signer, distributionPeriods }: MsgAddProviderDistributionPeriodRequest) => AminoMsgAddProviderDistributionPeriodRequest["value"];
        fromAmino: ({ signer, distribution_periods }: AminoMsgAddProviderDistributionPeriodRequest["value"]) => MsgAddProviderDistributionPeriodRequest;
    };
};
