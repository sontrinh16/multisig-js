import { Position, Params, positionFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgOpen, MsgClose, MsgForceClose, MsgUpdateParams, MsgUpdatePools, MsgWhitelist, MsgDewhitelist } from "./tx";
export interface AminoMsgOpen extends AminoMsg {
  type: "/sifnode.margin.v1.MsgOpen";
  value: {
    signer: string;
    collateral_asset: string;
    collateral_amount: string;
    borrow_asset: string;
    position: number;
    leverage: string;
  };
}
export interface AminoMsgClose extends AminoMsg {
  type: "/sifnode.margin.v1.MsgClose";
  value: {
    signer: string;
    id: string;
  };
}
export interface AminoMsgForceClose extends AminoMsg {
  type: "/sifnode.margin.v1.MsgForceClose";
  value: {
    signer: string;
    mtp_address: string;
    id: string;
  };
}
export interface AminoMsgUpdateParams extends AminoMsg {
  type: "/sifnode.margin.v1.MsgUpdateParams";
  value: {
    signer: string;
    params: {
      leverage_max: string;
      interest_rate_max: string;
      interest_rate_min: string;
      interest_rate_increase: string;
      interest_rate_decrease: string;
      health_gain_factor: string;
      epoch_length: string;
      pools: string[];
      force_close_threshold: string;
      removal_queue_threshold: string;
      max_open_positions: string;
      pool_open_threshold: string;
      force_close_fund_percentage: string;
      force_close_insurance_fund_address: string;
      incremental_interest_payment_fund_percentage: string;
      incremental_interest_payment_insurance_fund_address: string;
      sq_modifier: string;
      safety_factor: string;
      closed_pools: string[];
      incremental_interest_payment_enabled: boolean;
      whitelisting_enabled: boolean;
    };
  };
}
export interface AminoMsgUpdatePools extends AminoMsg {
  type: "/sifnode.margin.v1.MsgUpdatePools";
  value: {
    signer: string;
    pools: string[];
    closed_pools: string[];
  };
}
export interface AminoMsgWhitelist extends AminoMsg {
  type: "/sifnode.margin.v1.MsgWhitelist";
  value: {
    signer: string;
    whitelisted_address: string;
  };
}
export interface AminoMsgDewhitelist extends AminoMsg {
  type: "/sifnode.margin.v1.MsgDewhitelist";
  value: {
    signer: string;
    whitelisted_address: string;
  };
}
export const AminoConverter = {
  "/sifnode.margin.v1.MsgOpen": {
    aminoType: "/sifnode.margin.v1.MsgOpen",
    toAmino: ({
      signer,
      collateralAsset,
      collateralAmount,
      borrowAsset,
      position,
      leverage
    }: MsgOpen): AminoMsgOpen["value"] => {
      return {
        signer,
        collateral_asset: collateralAsset,
        collateral_amount: collateralAmount,
        borrow_asset: borrowAsset,
        position,
        leverage
      };
    },
    fromAmino: ({
      signer,
      collateral_asset,
      collateral_amount,
      borrow_asset,
      position,
      leverage
    }: AminoMsgOpen["value"]): MsgOpen => {
      return {
        signer,
        collateralAsset: collateral_asset,
        collateralAmount: collateral_amount,
        borrowAsset: borrow_asset,
        position: positionFromJSON(position),
        leverage
      };
    }
  },
  "/sifnode.margin.v1.MsgClose": {
    aminoType: "/sifnode.margin.v1.MsgClose",
    toAmino: ({
      signer,
      id
    }: MsgClose): AminoMsgClose["value"] => {
      return {
        signer,
        id: id.toString()
      };
    },
    fromAmino: ({
      signer,
      id
    }: AminoMsgClose["value"]): MsgClose => {
      return {
        signer,
        id: Long.fromString(id)
      };
    }
  },
  "/sifnode.margin.v1.MsgForceClose": {
    aminoType: "/sifnode.margin.v1.MsgForceClose",
    toAmino: ({
      signer,
      mtpAddress,
      id
    }: MsgForceClose): AminoMsgForceClose["value"] => {
      return {
        signer,
        mtp_address: mtpAddress,
        id: id.toString()
      };
    },
    fromAmino: ({
      signer,
      mtp_address,
      id
    }: AminoMsgForceClose["value"]): MsgForceClose => {
      return {
        signer,
        mtpAddress: mtp_address,
        id: Long.fromString(id)
      };
    }
  },
  "/sifnode.margin.v1.MsgUpdateParams": {
    aminoType: "/sifnode.margin.v1.MsgUpdateParams",
    toAmino: ({
      signer,
      params
    }: MsgUpdateParams): AminoMsgUpdateParams["value"] => {
      return {
        signer,
        params: {
          leverage_max: params.leverageMax,
          interest_rate_max: params.interestRateMax,
          interest_rate_min: params.interestRateMin,
          interest_rate_increase: params.interestRateIncrease,
          interest_rate_decrease: params.interestRateDecrease,
          health_gain_factor: params.healthGainFactor,
          epoch_length: params.epochLength.toString(),
          pools: params.pools,
          force_close_threshold: params.forceCloseThreshold,
          removal_queue_threshold: params.removalQueueThreshold,
          max_open_positions: params.maxOpenPositions.toString(),
          pool_open_threshold: params.poolOpenThreshold,
          force_close_fund_percentage: params.forceCloseFundPercentage,
          force_close_insurance_fund_address: params.forceCloseInsuranceFundAddress,
          incremental_interest_payment_fund_percentage: params.incrementalInterestPaymentFundPercentage,
          incremental_interest_payment_insurance_fund_address: params.incrementalInterestPaymentInsuranceFundAddress,
          sq_modifier: params.sqModifier,
          safety_factor: params.safetyFactor,
          closed_pools: params.closedPools,
          incremental_interest_payment_enabled: params.incrementalInterestPaymentEnabled,
          whitelisting_enabled: params.whitelistingEnabled
        }
      };
    },
    fromAmino: ({
      signer,
      params
    }: AminoMsgUpdateParams["value"]): MsgUpdateParams => {
      return {
        signer,
        params: {
          leverageMax: params.leverage_max,
          interestRateMax: params.interest_rate_max,
          interestRateMin: params.interest_rate_min,
          interestRateIncrease: params.interest_rate_increase,
          interestRateDecrease: params.interest_rate_decrease,
          healthGainFactor: params.health_gain_factor,
          epochLength: Long.fromString(params.epoch_length),
          pools: params.pools,
          forceCloseThreshold: params.force_close_threshold,
          removalQueueThreshold: params.removal_queue_threshold,
          maxOpenPositions: Long.fromString(params.max_open_positions),
          poolOpenThreshold: params.pool_open_threshold,
          forceCloseFundPercentage: params.force_close_fund_percentage,
          forceCloseInsuranceFundAddress: params.force_close_insurance_fund_address,
          incrementalInterestPaymentFundPercentage: params.incremental_interest_payment_fund_percentage,
          incrementalInterestPaymentInsuranceFundAddress: params.incremental_interest_payment_insurance_fund_address,
          sqModifier: params.sq_modifier,
          safetyFactor: params.safety_factor,
          closedPools: params.closed_pools,
          incrementalInterestPaymentEnabled: params.incremental_interest_payment_enabled,
          whitelistingEnabled: params.whitelisting_enabled
        }
      };
    }
  },
  "/sifnode.margin.v1.MsgUpdatePools": {
    aminoType: "/sifnode.margin.v1.MsgUpdatePools",
    toAmino: ({
      signer,
      pools,
      closedPools
    }: MsgUpdatePools): AminoMsgUpdatePools["value"] => {
      return {
        signer,
        pools,
        closed_pools: closedPools
      };
    },
    fromAmino: ({
      signer,
      pools,
      closed_pools
    }: AminoMsgUpdatePools["value"]): MsgUpdatePools => {
      return {
        signer,
        pools,
        closedPools: closed_pools
      };
    }
  },
  "/sifnode.margin.v1.MsgWhitelist": {
    aminoType: "/sifnode.margin.v1.MsgWhitelist",
    toAmino: ({
      signer,
      whitelistedAddress
    }: MsgWhitelist): AminoMsgWhitelist["value"] => {
      return {
        signer,
        whitelisted_address: whitelistedAddress
      };
    },
    fromAmino: ({
      signer,
      whitelisted_address
    }: AminoMsgWhitelist["value"]): MsgWhitelist => {
      return {
        signer,
        whitelistedAddress: whitelisted_address
      };
    }
  },
  "/sifnode.margin.v1.MsgDewhitelist": {
    aminoType: "/sifnode.margin.v1.MsgDewhitelist",
    toAmino: ({
      signer,
      whitelistedAddress
    }: MsgDewhitelist): AminoMsgDewhitelist["value"] => {
      return {
        signer,
        whitelisted_address: whitelistedAddress
      };
    },
    fromAmino: ({
      signer,
      whitelisted_address
    }: AminoMsgDewhitelist["value"]): MsgDewhitelist => {
      return {
        signer,
        whitelistedAddress: whitelisted_address
      };
    }
  }
};