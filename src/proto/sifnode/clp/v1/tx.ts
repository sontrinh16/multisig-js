import { Asset } from "./types";
import { RewardPeriod, ProviderDistributionPeriod } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface MsgUpdateStakingRewardParams {
  signer: string;
  minter: string;
  params: string;
}
export interface MsgUpdateStakingRewardParamsResponse {}
export interface MsgRemoveLiquidity {
  signer: string;
  externalAsset: Asset;
  wBasisPoints: string;
  asymmetry: string;
}
export interface MsgRemoveLiquidityResponse {}
export interface MsgRemoveLiquidityUnits {
  signer: string;
  externalAsset: Asset;
  withdrawUnits: string;
}
export interface MsgRemoveLiquidityUnitsResponse {}
export interface MsgCreatePool {
  signer: string;
  externalAsset: Asset;
  nativeAssetAmount: string;
  externalAssetAmount: string;
}
export interface MsgCreatePoolResponse {}
export interface MsgAddLiquidity {
  signer: string;
  externalAsset: Asset;
  nativeAssetAmount: string;
  externalAssetAmount: string;
}
export interface MsgAddLiquidityResponse {}
export interface MsgModifyPmtpRates {
  signer: string;
  blockRate: string;
  runningRate: string;
  endPolicy: boolean;
}
export interface MsgModifyPmtpRatesResponse {}
export interface MsgUpdatePmtpParams {
  signer: string;
  pmtpPeriodGovernanceRate: string;
  pmtpPeriodEpochLength: Long;
  pmtpPeriodStartBlock: Long;
  pmtpPeriodEndBlock: Long;
}
export interface MsgUpdatePmtpParamsResponse {}
export interface MsgSwap {
  signer: string;
  sentAsset: Asset;
  receivedAsset: Asset;
  sentAmount: string;
  minReceivingAmount: string;
}
export interface MsgSwapResponse {}
export interface MsgDecommissionPool {
  signer: string;
  symbol: string;
}
export interface MsgDecommissionPoolResponse {}
export interface MsgUnlockLiquidityRequest {
  signer: string;
  externalAsset: Asset;
  units: string;
}
export interface MsgUnlockLiquidityResponse {}
export interface MsgUpdateRewardsParamsRequest {
  signer: string;

  /** in blocks */
  liquidityRemovalLockPeriod: Long;

  /** in blocks */
  liquidityRemovalCancelPeriod: Long;
}
export interface MsgUpdateRewardsParamsResponse {}
export interface MsgAddRewardPeriodRequest {
  signer: string;
  rewardPeriods: RewardPeriod[];
}
export interface MsgAddRewardPeriodResponse {}
export interface MsgSetSymmetryThreshold {
  signer: string;
  threshold: string;
  ratio: string;
}
export interface MsgSetSymmetryThresholdResponse {}
export interface MsgCancelUnlock {
  signer: string;
  externalAsset: Asset;
  units: string;
}
export interface MsgCancelUnlockResponse {}
export interface RemovalRequest {
  id: Long;
  value: string;
  msg: MsgRemoveLiquidity;
}
export interface MsgModifyLiquidityProtectionRates {
  signer: string;
  currentRowanLiquidityThreshold: string;
}
export interface MsgModifyLiquidityProtectionRatesResponse {}
export interface MsgUpdateLiquidityProtectionParams {
  signer: string;
  maxRowanLiquidityThreshold: string;
  maxRowanLiquidityThresholdAsset: string;
  epochLength: Long;
  isActive: boolean;
}
export interface MsgUpdateLiquidityProtectionParamsResponse {}
export interface MsgAddProviderDistributionPeriodRequest {
  signer: string;
  distributionPeriods: ProviderDistributionPeriod[];
}
export interface MsgAddProviderDistributionPeriodResponse {}

function createBaseMsgUpdateStakingRewardParams(): MsgUpdateStakingRewardParams {
  return {
    signer: "",
    minter: "",
    params: ""
  };
}

export const MsgUpdateStakingRewardParams = {
  encode(message: MsgUpdateStakingRewardParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.minter !== "") {
      writer.uint32(18).string(message.minter);
    }

    if (message.params !== "") {
      writer.uint32(26).string(message.params);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStakingRewardParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStakingRewardParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.minter = reader.string();
          break;

        case 3:
          message.params = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateStakingRewardParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      minter: isSet(object.minter) ? String(object.minter) : "",
      params: isSet(object.params) ? String(object.params) : ""
    };
  },

  toJSON(message: MsgUpdateStakingRewardParams): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.minter !== undefined && (obj.minter = message.minter);
    message.params !== undefined && (obj.params = message.params);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateStakingRewardParams>): MsgUpdateStakingRewardParams {
    const message = createBaseMsgUpdateStakingRewardParams();
    message.signer = object.signer ?? "";
    message.minter = object.minter ?? "";
    message.params = object.params ?? "";
    return message;
  }

};

function createBaseMsgUpdateStakingRewardParamsResponse(): MsgUpdateStakingRewardParamsResponse {
  return {};
}

export const MsgUpdateStakingRewardParamsResponse = {
  encode(_: MsgUpdateStakingRewardParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateStakingRewardParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateStakingRewardParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateStakingRewardParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateStakingRewardParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateStakingRewardParamsResponse>): MsgUpdateStakingRewardParamsResponse {
    const message = createBaseMsgUpdateStakingRewardParamsResponse();
    return message;
  }

};

function createBaseMsgRemoveLiquidity(): MsgRemoveLiquidity {
  return {
    signer: "",
    externalAsset: undefined,
    wBasisPoints: "",
    asymmetry: ""
  };
}

export const MsgRemoveLiquidity = {
  encode(message: MsgRemoveLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }

    if (message.wBasisPoints !== "") {
      writer.uint32(26).string(message.wBasisPoints);
    }

    if (message.asymmetry !== "") {
      writer.uint32(34).string(message.asymmetry);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.externalAsset = Asset.decode(reader, reader.uint32());
          break;

        case 3:
          message.wBasisPoints = reader.string();
          break;

        case 4:
          message.asymmetry = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRemoveLiquidity {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      wBasisPoints: isSet(object.wBasisPoints) ? String(object.wBasisPoints) : "",
      asymmetry: isSet(object.asymmetry) ? String(object.asymmetry) : ""
    };
  },

  toJSON(message: MsgRemoveLiquidity): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.externalAsset !== undefined && (obj.externalAsset = message.externalAsset ? Asset.toJSON(message.externalAsset) : undefined);
    message.wBasisPoints !== undefined && (obj.wBasisPoints = message.wBasisPoints);
    message.asymmetry !== undefined && (obj.asymmetry = message.asymmetry);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveLiquidity>): MsgRemoveLiquidity {
    const message = createBaseMsgRemoveLiquidity();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.wBasisPoints = object.wBasisPoints ?? "";
    message.asymmetry = object.asymmetry ?? "";
    return message;
  }

};

function createBaseMsgRemoveLiquidityResponse(): MsgRemoveLiquidityResponse {
  return {};
}

export const MsgRemoveLiquidityResponse = {
  encode(_: MsgRemoveLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgRemoveLiquidityResponse {
    return {};
  },

  toJSON(_: MsgRemoveLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRemoveLiquidityResponse>): MsgRemoveLiquidityResponse {
    const message = createBaseMsgRemoveLiquidityResponse();
    return message;
  }

};

function createBaseMsgRemoveLiquidityUnits(): MsgRemoveLiquidityUnits {
  return {
    signer: "",
    externalAsset: undefined,
    withdrawUnits: ""
  };
}

export const MsgRemoveLiquidityUnits = {
  encode(message: MsgRemoveLiquidityUnits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }

    if (message.withdrawUnits !== "") {
      writer.uint32(26).string(message.withdrawUnits);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidityUnits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidityUnits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.externalAsset = Asset.decode(reader, reader.uint32());
          break;

        case 3:
          message.withdrawUnits = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRemoveLiquidityUnits {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      withdrawUnits: isSet(object.withdrawUnits) ? String(object.withdrawUnits) : ""
    };
  },

  toJSON(message: MsgRemoveLiquidityUnits): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.externalAsset !== undefined && (obj.externalAsset = message.externalAsset ? Asset.toJSON(message.externalAsset) : undefined);
    message.withdrawUnits !== undefined && (obj.withdrawUnits = message.withdrawUnits);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveLiquidityUnits>): MsgRemoveLiquidityUnits {
    const message = createBaseMsgRemoveLiquidityUnits();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.withdrawUnits = object.withdrawUnits ?? "";
    return message;
  }

};

function createBaseMsgRemoveLiquidityUnitsResponse(): MsgRemoveLiquidityUnitsResponse {
  return {};
}

export const MsgRemoveLiquidityUnitsResponse = {
  encode(_: MsgRemoveLiquidityUnitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveLiquidityUnitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveLiquidityUnitsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgRemoveLiquidityUnitsResponse {
    return {};
  },

  toJSON(_: MsgRemoveLiquidityUnitsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRemoveLiquidityUnitsResponse>): MsgRemoveLiquidityUnitsResponse {
    const message = createBaseMsgRemoveLiquidityUnitsResponse();
    return message;
  }

};

function createBaseMsgCreatePool(): MsgCreatePool {
  return {
    signer: "",
    externalAsset: undefined,
    nativeAssetAmount: "",
    externalAssetAmount: ""
  };
}

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }

    if (message.nativeAssetAmount !== "") {
      writer.uint32(26).string(message.nativeAssetAmount);
    }

    if (message.externalAssetAmount !== "") {
      writer.uint32(34).string(message.externalAssetAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.externalAsset = Asset.decode(reader, reader.uint32());
          break;

        case 3:
          message.nativeAssetAmount = reader.string();
          break;

        case 4:
          message.externalAssetAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreatePool {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      nativeAssetAmount: isSet(object.nativeAssetAmount) ? String(object.nativeAssetAmount) : "",
      externalAssetAmount: isSet(object.externalAssetAmount) ? String(object.externalAssetAmount) : ""
    };
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.externalAsset !== undefined && (obj.externalAsset = message.externalAsset ? Asset.toJSON(message.externalAsset) : undefined);
    message.nativeAssetAmount !== undefined && (obj.nativeAssetAmount = message.nativeAssetAmount);
    message.externalAssetAmount !== undefined && (obj.externalAssetAmount = message.externalAssetAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = createBaseMsgCreatePool();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.nativeAssetAmount = object.nativeAssetAmount ?? "";
    message.externalAssetAmount = object.externalAssetAmount ?? "";
    return message;
  }

};

function createBaseMsgCreatePoolResponse(): MsgCreatePoolResponse {
  return {};
}

export const MsgCreatePoolResponse = {
  encode(_: MsgCreatePoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreatePoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCreatePoolResponse {
    return {};
  },

  toJSON(_: MsgCreatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = createBaseMsgCreatePoolResponse();
    return message;
  }

};

function createBaseMsgAddLiquidity(): MsgAddLiquidity {
  return {
    signer: "",
    externalAsset: undefined,
    nativeAssetAmount: "",
    externalAssetAmount: ""
  };
}

export const MsgAddLiquidity = {
  encode(message: MsgAddLiquidity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }

    if (message.nativeAssetAmount !== "") {
      writer.uint32(26).string(message.nativeAssetAmount);
    }

    if (message.externalAssetAmount !== "") {
      writer.uint32(34).string(message.externalAssetAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidity();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.externalAsset = Asset.decode(reader, reader.uint32());
          break;

        case 3:
          message.nativeAssetAmount = reader.string();
          break;

        case 4:
          message.externalAssetAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddLiquidity {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      nativeAssetAmount: isSet(object.nativeAssetAmount) ? String(object.nativeAssetAmount) : "",
      externalAssetAmount: isSet(object.externalAssetAmount) ? String(object.externalAssetAmount) : ""
    };
  },

  toJSON(message: MsgAddLiquidity): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.externalAsset !== undefined && (obj.externalAsset = message.externalAsset ? Asset.toJSON(message.externalAsset) : undefined);
    message.nativeAssetAmount !== undefined && (obj.nativeAssetAmount = message.nativeAssetAmount);
    message.externalAssetAmount !== undefined && (obj.externalAssetAmount = message.externalAssetAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddLiquidity>): MsgAddLiquidity {
    const message = createBaseMsgAddLiquidity();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.nativeAssetAmount = object.nativeAssetAmount ?? "";
    message.externalAssetAmount = object.externalAssetAmount ?? "";
    return message;
  }

};

function createBaseMsgAddLiquidityResponse(): MsgAddLiquidityResponse {
  return {};
}

export const MsgAddLiquidityResponse = {
  encode(_: MsgAddLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddLiquidityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgAddLiquidityResponse {
    return {};
  },

  toJSON(_: MsgAddLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddLiquidityResponse>): MsgAddLiquidityResponse {
    const message = createBaseMsgAddLiquidityResponse();
    return message;
  }

};

function createBaseMsgModifyPmtpRates(): MsgModifyPmtpRates {
  return {
    signer: "",
    blockRate: "",
    runningRate: "",
    endPolicy: false
  };
}

export const MsgModifyPmtpRates = {
  encode(message: MsgModifyPmtpRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.blockRate !== "") {
      writer.uint32(18).string(message.blockRate);
    }

    if (message.runningRate !== "") {
      writer.uint32(26).string(message.runningRate);
    }

    if (message.endPolicy === true) {
      writer.uint32(32).bool(message.endPolicy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyPmtpRates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyPmtpRates();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.blockRate = reader.string();
          break;

        case 3:
          message.runningRate = reader.string();
          break;

        case 4:
          message.endPolicy = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgModifyPmtpRates {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      blockRate: isSet(object.blockRate) ? String(object.blockRate) : "",
      runningRate: isSet(object.runningRate) ? String(object.runningRate) : "",
      endPolicy: isSet(object.endPolicy) ? Boolean(object.endPolicy) : false
    };
  },

  toJSON(message: MsgModifyPmtpRates): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.blockRate !== undefined && (obj.blockRate = message.blockRate);
    message.runningRate !== undefined && (obj.runningRate = message.runningRate);
    message.endPolicy !== undefined && (obj.endPolicy = message.endPolicy);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgModifyPmtpRates>): MsgModifyPmtpRates {
    const message = createBaseMsgModifyPmtpRates();
    message.signer = object.signer ?? "";
    message.blockRate = object.blockRate ?? "";
    message.runningRate = object.runningRate ?? "";
    message.endPolicy = object.endPolicy ?? false;
    return message;
  }

};

function createBaseMsgModifyPmtpRatesResponse(): MsgModifyPmtpRatesResponse {
  return {};
}

export const MsgModifyPmtpRatesResponse = {
  encode(_: MsgModifyPmtpRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyPmtpRatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyPmtpRatesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgModifyPmtpRatesResponse {
    return {};
  },

  toJSON(_: MsgModifyPmtpRatesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgModifyPmtpRatesResponse>): MsgModifyPmtpRatesResponse {
    const message = createBaseMsgModifyPmtpRatesResponse();
    return message;
  }

};

function createBaseMsgUpdatePmtpParams(): MsgUpdatePmtpParams {
  return {
    signer: "",
    pmtpPeriodGovernanceRate: "",
    pmtpPeriodEpochLength: Long.ZERO,
    pmtpPeriodStartBlock: Long.ZERO,
    pmtpPeriodEndBlock: Long.ZERO
  };
}

export const MsgUpdatePmtpParams = {
  encode(message: MsgUpdatePmtpParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.pmtpPeriodGovernanceRate !== "") {
      writer.uint32(18).string(message.pmtpPeriodGovernanceRate);
    }

    if (!message.pmtpPeriodEpochLength.isZero()) {
      writer.uint32(24).int64(message.pmtpPeriodEpochLength);
    }

    if (!message.pmtpPeriodStartBlock.isZero()) {
      writer.uint32(32).int64(message.pmtpPeriodStartBlock);
    }

    if (!message.pmtpPeriodEndBlock.isZero()) {
      writer.uint32(40).int64(message.pmtpPeriodEndBlock);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePmtpParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePmtpParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.pmtpPeriodGovernanceRate = reader.string();
          break;

        case 3:
          message.pmtpPeriodEpochLength = (reader.int64() as Long);
          break;

        case 4:
          message.pmtpPeriodStartBlock = (reader.int64() as Long);
          break;

        case 5:
          message.pmtpPeriodEndBlock = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdatePmtpParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      pmtpPeriodGovernanceRate: isSet(object.pmtpPeriodGovernanceRate) ? String(object.pmtpPeriodGovernanceRate) : "",
      pmtpPeriodEpochLength: isSet(object.pmtpPeriodEpochLength) ? Long.fromString(object.pmtpPeriodEpochLength) : Long.ZERO,
      pmtpPeriodStartBlock: isSet(object.pmtpPeriodStartBlock) ? Long.fromString(object.pmtpPeriodStartBlock) : Long.ZERO,
      pmtpPeriodEndBlock: isSet(object.pmtpPeriodEndBlock) ? Long.fromString(object.pmtpPeriodEndBlock) : Long.ZERO
    };
  },

  toJSON(message: MsgUpdatePmtpParams): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.pmtpPeriodGovernanceRate !== undefined && (obj.pmtpPeriodGovernanceRate = message.pmtpPeriodGovernanceRate);
    message.pmtpPeriodEpochLength !== undefined && (obj.pmtpPeriodEpochLength = (message.pmtpPeriodEpochLength || Long.ZERO).toString());
    message.pmtpPeriodStartBlock !== undefined && (obj.pmtpPeriodStartBlock = (message.pmtpPeriodStartBlock || Long.ZERO).toString());
    message.pmtpPeriodEndBlock !== undefined && (obj.pmtpPeriodEndBlock = (message.pmtpPeriodEndBlock || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePmtpParams>): MsgUpdatePmtpParams {
    const message = createBaseMsgUpdatePmtpParams();
    message.signer = object.signer ?? "";
    message.pmtpPeriodGovernanceRate = object.pmtpPeriodGovernanceRate ?? "";
    message.pmtpPeriodEpochLength = object.pmtpPeriodEpochLength !== undefined && object.pmtpPeriodEpochLength !== null ? Long.fromValue(object.pmtpPeriodEpochLength) : Long.ZERO;
    message.pmtpPeriodStartBlock = object.pmtpPeriodStartBlock !== undefined && object.pmtpPeriodStartBlock !== null ? Long.fromValue(object.pmtpPeriodStartBlock) : Long.ZERO;
    message.pmtpPeriodEndBlock = object.pmtpPeriodEndBlock !== undefined && object.pmtpPeriodEndBlock !== null ? Long.fromValue(object.pmtpPeriodEndBlock) : Long.ZERO;
    return message;
  }

};

function createBaseMsgUpdatePmtpParamsResponse(): MsgUpdatePmtpParamsResponse {
  return {};
}

export const MsgUpdatePmtpParamsResponse = {
  encode(_: MsgUpdatePmtpParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePmtpParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePmtpParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdatePmtpParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdatePmtpParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdatePmtpParamsResponse>): MsgUpdatePmtpParamsResponse {
    const message = createBaseMsgUpdatePmtpParamsResponse();
    return message;
  }

};

function createBaseMsgSwap(): MsgSwap {
  return {
    signer: "",
    sentAsset: undefined,
    receivedAsset: undefined,
    sentAmount: "",
    minReceivingAmount: ""
  };
}

export const MsgSwap = {
  encode(message: MsgSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.sentAsset !== undefined) {
      Asset.encode(message.sentAsset, writer.uint32(18).fork()).ldelim();
    }

    if (message.receivedAsset !== undefined) {
      Asset.encode(message.receivedAsset, writer.uint32(26).fork()).ldelim();
    }

    if (message.sentAmount !== "") {
      writer.uint32(34).string(message.sentAmount);
    }

    if (message.minReceivingAmount !== "") {
      writer.uint32(42).string(message.minReceivingAmount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.sentAsset = Asset.decode(reader, reader.uint32());
          break;

        case 3:
          message.receivedAsset = Asset.decode(reader, reader.uint32());
          break;

        case 4:
          message.sentAmount = reader.string();
          break;

        case 5:
          message.minReceivingAmount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSwap {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      sentAsset: isSet(object.sentAsset) ? Asset.fromJSON(object.sentAsset) : undefined,
      receivedAsset: isSet(object.receivedAsset) ? Asset.fromJSON(object.receivedAsset) : undefined,
      sentAmount: isSet(object.sentAmount) ? String(object.sentAmount) : "",
      minReceivingAmount: isSet(object.minReceivingAmount) ? String(object.minReceivingAmount) : ""
    };
  },

  toJSON(message: MsgSwap): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.sentAsset !== undefined && (obj.sentAsset = message.sentAsset ? Asset.toJSON(message.sentAsset) : undefined);
    message.receivedAsset !== undefined && (obj.receivedAsset = message.receivedAsset ? Asset.toJSON(message.receivedAsset) : undefined);
    message.sentAmount !== undefined && (obj.sentAmount = message.sentAmount);
    message.minReceivingAmount !== undefined && (obj.minReceivingAmount = message.minReceivingAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSwap>): MsgSwap {
    const message = createBaseMsgSwap();
    message.signer = object.signer ?? "";
    message.sentAsset = object.sentAsset !== undefined && object.sentAsset !== null ? Asset.fromPartial(object.sentAsset) : undefined;
    message.receivedAsset = object.receivedAsset !== undefined && object.receivedAsset !== null ? Asset.fromPartial(object.receivedAsset) : undefined;
    message.sentAmount = object.sentAmount ?? "";
    message.minReceivingAmount = object.minReceivingAmount ?? "";
    return message;
  }

};

function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {};
}

export const MsgSwapResponse = {
  encode(_: MsgSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgSwapResponse {
    return {};
  },

  toJSON(_: MsgSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  }

};

function createBaseMsgDecommissionPool(): MsgDecommissionPool {
  return {
    signer: "",
    symbol: ""
  };
}

export const MsgDecommissionPool = {
  encode(message: MsgDecommissionPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDecommissionPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDecommissionPool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDecommissionPool {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },

  toJSON(message: MsgDecommissionPool): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDecommissionPool>): MsgDecommissionPool {
    const message = createBaseMsgDecommissionPool();
    message.signer = object.signer ?? "";
    message.symbol = object.symbol ?? "";
    return message;
  }

};

function createBaseMsgDecommissionPoolResponse(): MsgDecommissionPoolResponse {
  return {};
}

export const MsgDecommissionPoolResponse = {
  encode(_: MsgDecommissionPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDecommissionPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDecommissionPoolResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgDecommissionPoolResponse {
    return {};
  },

  toJSON(_: MsgDecommissionPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDecommissionPoolResponse>): MsgDecommissionPoolResponse {
    const message = createBaseMsgDecommissionPoolResponse();
    return message;
  }

};

function createBaseMsgUnlockLiquidityRequest(): MsgUnlockLiquidityRequest {
  return {
    signer: "",
    externalAsset: undefined,
    units: ""
  };
}

export const MsgUnlockLiquidityRequest = {
  encode(message: MsgUnlockLiquidityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }

    if (message.units !== "") {
      writer.uint32(26).string(message.units);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlockLiquidityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockLiquidityRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.externalAsset = Asset.decode(reader, reader.uint32());
          break;

        case 3:
          message.units = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUnlockLiquidityRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      units: isSet(object.units) ? String(object.units) : ""
    };
  },

  toJSON(message: MsgUnlockLiquidityRequest): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.externalAsset !== undefined && (obj.externalAsset = message.externalAsset ? Asset.toJSON(message.externalAsset) : undefined);
    message.units !== undefined && (obj.units = message.units);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnlockLiquidityRequest>): MsgUnlockLiquidityRequest {
    const message = createBaseMsgUnlockLiquidityRequest();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.units = object.units ?? "";
    return message;
  }

};

function createBaseMsgUnlockLiquidityResponse(): MsgUnlockLiquidityResponse {
  return {};
}

export const MsgUnlockLiquidityResponse = {
  encode(_: MsgUnlockLiquidityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnlockLiquidityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnlockLiquidityResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUnlockLiquidityResponse {
    return {};
  },

  toJSON(_: MsgUnlockLiquidityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUnlockLiquidityResponse>): MsgUnlockLiquidityResponse {
    const message = createBaseMsgUnlockLiquidityResponse();
    return message;
  }

};

function createBaseMsgUpdateRewardsParamsRequest(): MsgUpdateRewardsParamsRequest {
  return {
    signer: "",
    liquidityRemovalLockPeriod: Long.UZERO,
    liquidityRemovalCancelPeriod: Long.UZERO
  };
}

export const MsgUpdateRewardsParamsRequest = {
  encode(message: MsgUpdateRewardsParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (!message.liquidityRemovalLockPeriod.isZero()) {
      writer.uint32(16).uint64(message.liquidityRemovalLockPeriod);
    }

    if (!message.liquidityRemovalCancelPeriod.isZero()) {
      writer.uint32(24).uint64(message.liquidityRemovalCancelPeriod);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRewardsParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardsParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.liquidityRemovalLockPeriod = (reader.uint64() as Long);
          break;

        case 3:
          message.liquidityRemovalCancelPeriod = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateRewardsParamsRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      liquidityRemovalLockPeriod: isSet(object.liquidityRemovalLockPeriod) ? Long.fromString(object.liquidityRemovalLockPeriod) : Long.UZERO,
      liquidityRemovalCancelPeriod: isSet(object.liquidityRemovalCancelPeriod) ? Long.fromString(object.liquidityRemovalCancelPeriod) : Long.UZERO
    };
  },

  toJSON(message: MsgUpdateRewardsParamsRequest): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.liquidityRemovalLockPeriod !== undefined && (obj.liquidityRemovalLockPeriod = (message.liquidityRemovalLockPeriod || Long.UZERO).toString());
    message.liquidityRemovalCancelPeriod !== undefined && (obj.liquidityRemovalCancelPeriod = (message.liquidityRemovalCancelPeriod || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateRewardsParamsRequest>): MsgUpdateRewardsParamsRequest {
    const message = createBaseMsgUpdateRewardsParamsRequest();
    message.signer = object.signer ?? "";
    message.liquidityRemovalLockPeriod = object.liquidityRemovalLockPeriod !== undefined && object.liquidityRemovalLockPeriod !== null ? Long.fromValue(object.liquidityRemovalLockPeriod) : Long.UZERO;
    message.liquidityRemovalCancelPeriod = object.liquidityRemovalCancelPeriod !== undefined && object.liquidityRemovalCancelPeriod !== null ? Long.fromValue(object.liquidityRemovalCancelPeriod) : Long.UZERO;
    return message;
  }

};

function createBaseMsgUpdateRewardsParamsResponse(): MsgUpdateRewardsParamsResponse {
  return {};
}

export const MsgUpdateRewardsParamsResponse = {
  encode(_: MsgUpdateRewardsParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRewardsParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRewardsParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateRewardsParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateRewardsParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateRewardsParamsResponse>): MsgUpdateRewardsParamsResponse {
    const message = createBaseMsgUpdateRewardsParamsResponse();
    return message;
  }

};

function createBaseMsgAddRewardPeriodRequest(): MsgAddRewardPeriodRequest {
  return {
    signer: "",
    rewardPeriods: []
  };
}

export const MsgAddRewardPeriodRequest = {
  encode(message: MsgAddRewardPeriodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    for (const v of message.rewardPeriods) {
      RewardPeriod.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRewardPeriodRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRewardPeriodRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.rewardPeriods.push(RewardPeriod.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddRewardPeriodRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      rewardPeriods: Array.isArray(object?.rewardPeriods) ? object.rewardPeriods.map((e: any) => RewardPeriod.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgAddRewardPeriodRequest): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);

    if (message.rewardPeriods) {
      obj.rewardPeriods = message.rewardPeriods.map(e => e ? RewardPeriod.toJSON(e) : undefined);
    } else {
      obj.rewardPeriods = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddRewardPeriodRequest>): MsgAddRewardPeriodRequest {
    const message = createBaseMsgAddRewardPeriodRequest();
    message.signer = object.signer ?? "";
    message.rewardPeriods = object.rewardPeriods?.map(e => RewardPeriod.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgAddRewardPeriodResponse(): MsgAddRewardPeriodResponse {
  return {};
}

export const MsgAddRewardPeriodResponse = {
  encode(_: MsgAddRewardPeriodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRewardPeriodResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRewardPeriodResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgAddRewardPeriodResponse {
    return {};
  },

  toJSON(_: MsgAddRewardPeriodResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddRewardPeriodResponse>): MsgAddRewardPeriodResponse {
    const message = createBaseMsgAddRewardPeriodResponse();
    return message;
  }

};

function createBaseMsgSetSymmetryThreshold(): MsgSetSymmetryThreshold {
  return {
    signer: "",
    threshold: "",
    ratio: ""
  };
}

export const MsgSetSymmetryThreshold = {
  encode(message: MsgSetSymmetryThreshold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }

    if (message.ratio !== "") {
      writer.uint32(26).string(message.ratio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSymmetryThreshold {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSymmetryThreshold();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.threshold = reader.string();
          break;

        case 3:
          message.ratio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetSymmetryThreshold {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      ratio: isSet(object.ratio) ? String(object.ratio) : ""
    };
  },

  toJSON(message: MsgSetSymmetryThreshold): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.ratio !== undefined && (obj.ratio = message.ratio);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetSymmetryThreshold>): MsgSetSymmetryThreshold {
    const message = createBaseMsgSetSymmetryThreshold();
    message.signer = object.signer ?? "";
    message.threshold = object.threshold ?? "";
    message.ratio = object.ratio ?? "";
    return message;
  }

};

function createBaseMsgSetSymmetryThresholdResponse(): MsgSetSymmetryThresholdResponse {
  return {};
}

export const MsgSetSymmetryThresholdResponse = {
  encode(_: MsgSetSymmetryThresholdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetSymmetryThresholdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetSymmetryThresholdResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgSetSymmetryThresholdResponse {
    return {};
  },

  toJSON(_: MsgSetSymmetryThresholdResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetSymmetryThresholdResponse>): MsgSetSymmetryThresholdResponse {
    const message = createBaseMsgSetSymmetryThresholdResponse();
    return message;
  }

};

function createBaseMsgCancelUnlock(): MsgCancelUnlock {
  return {
    signer: "",
    externalAsset: undefined,
    units: ""
  };
}

export const MsgCancelUnlock = {
  encode(message: MsgCancelUnlock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.externalAsset !== undefined) {
      Asset.encode(message.externalAsset, writer.uint32(18).fork()).ldelim();
    }

    if (message.units !== "") {
      writer.uint32(26).string(message.units);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUnlock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnlock();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.externalAsset = Asset.decode(reader, reader.uint32());
          break;

        case 3:
          message.units = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancelUnlock {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      externalAsset: isSet(object.externalAsset) ? Asset.fromJSON(object.externalAsset) : undefined,
      units: isSet(object.units) ? String(object.units) : ""
    };
  },

  toJSON(message: MsgCancelUnlock): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.externalAsset !== undefined && (obj.externalAsset = message.externalAsset ? Asset.toJSON(message.externalAsset) : undefined);
    message.units !== undefined && (obj.units = message.units);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelUnlock>): MsgCancelUnlock {
    const message = createBaseMsgCancelUnlock();
    message.signer = object.signer ?? "";
    message.externalAsset = object.externalAsset !== undefined && object.externalAsset !== null ? Asset.fromPartial(object.externalAsset) : undefined;
    message.units = object.units ?? "";
    return message;
  }

};

function createBaseMsgCancelUnlockResponse(): MsgCancelUnlockResponse {
  return {};
}

export const MsgCancelUnlockResponse = {
  encode(_: MsgCancelUnlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUnlockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUnlockResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgCancelUnlockResponse {
    return {};
  },

  toJSON(_: MsgCancelUnlockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelUnlockResponse>): MsgCancelUnlockResponse {
    const message = createBaseMsgCancelUnlockResponse();
    return message;
  }

};

function createBaseRemovalRequest(): RemovalRequest {
  return {
    id: Long.ZERO,
    value: "",
    msg: undefined
  };
}

export const RemovalRequest = {
  encode(message: RemovalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).int64(message.id);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    if (message.msg !== undefined) {
      MsgRemoveLiquidity.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RemovalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRemovalRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.int64() as Long);
          break;

        case 2:
          message.value = reader.string();
          break;

        case 3:
          message.msg = MsgRemoveLiquidity.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RemovalRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.ZERO,
      value: isSet(object.value) ? String(object.value) : "",
      msg: isSet(object.msg) ? MsgRemoveLiquidity.fromJSON(object.msg) : undefined
    };
  },

  toJSON(message: RemovalRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.ZERO).toString());
    message.value !== undefined && (obj.value = message.value);
    message.msg !== undefined && (obj.msg = message.msg ? MsgRemoveLiquidity.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RemovalRequest>): RemovalRequest {
    const message = createBaseRemovalRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.ZERO;
    message.value = object.value ?? "";
    message.msg = object.msg !== undefined && object.msg !== null ? MsgRemoveLiquidity.fromPartial(object.msg) : undefined;
    return message;
  }

};

function createBaseMsgModifyLiquidityProtectionRates(): MsgModifyLiquidityProtectionRates {
  return {
    signer: "",
    currentRowanLiquidityThreshold: ""
  };
}

export const MsgModifyLiquidityProtectionRates = {
  encode(message: MsgModifyLiquidityProtectionRates, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.currentRowanLiquidityThreshold !== "") {
      writer.uint32(18).string(message.currentRowanLiquidityThreshold);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyLiquidityProtectionRates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyLiquidityProtectionRates();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.currentRowanLiquidityThreshold = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgModifyLiquidityProtectionRates {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      currentRowanLiquidityThreshold: isSet(object.currentRowanLiquidityThreshold) ? String(object.currentRowanLiquidityThreshold) : ""
    };
  },

  toJSON(message: MsgModifyLiquidityProtectionRates): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.currentRowanLiquidityThreshold !== undefined && (obj.currentRowanLiquidityThreshold = message.currentRowanLiquidityThreshold);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgModifyLiquidityProtectionRates>): MsgModifyLiquidityProtectionRates {
    const message = createBaseMsgModifyLiquidityProtectionRates();
    message.signer = object.signer ?? "";
    message.currentRowanLiquidityThreshold = object.currentRowanLiquidityThreshold ?? "";
    return message;
  }

};

function createBaseMsgModifyLiquidityProtectionRatesResponse(): MsgModifyLiquidityProtectionRatesResponse {
  return {};
}

export const MsgModifyLiquidityProtectionRatesResponse = {
  encode(_: MsgModifyLiquidityProtectionRatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgModifyLiquidityProtectionRatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgModifyLiquidityProtectionRatesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgModifyLiquidityProtectionRatesResponse {
    return {};
  },

  toJSON(_: MsgModifyLiquidityProtectionRatesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgModifyLiquidityProtectionRatesResponse>): MsgModifyLiquidityProtectionRatesResponse {
    const message = createBaseMsgModifyLiquidityProtectionRatesResponse();
    return message;
  }

};

function createBaseMsgUpdateLiquidityProtectionParams(): MsgUpdateLiquidityProtectionParams {
  return {
    signer: "",
    maxRowanLiquidityThreshold: "",
    maxRowanLiquidityThresholdAsset: "",
    epochLength: Long.UZERO,
    isActive: false
  };
}

export const MsgUpdateLiquidityProtectionParams = {
  encode(message: MsgUpdateLiquidityProtectionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.maxRowanLiquidityThreshold !== "") {
      writer.uint32(18).string(message.maxRowanLiquidityThreshold);
    }

    if (message.maxRowanLiquidityThresholdAsset !== "") {
      writer.uint32(34).string(message.maxRowanLiquidityThresholdAsset);
    }

    if (!message.epochLength.isZero()) {
      writer.uint32(24).uint64(message.epochLength);
    }

    if (message.isActive === true) {
      writer.uint32(40).bool(message.isActive);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateLiquidityProtectionParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateLiquidityProtectionParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.maxRowanLiquidityThreshold = reader.string();
          break;

        case 4:
          message.maxRowanLiquidityThresholdAsset = reader.string();
          break;

        case 3:
          message.epochLength = (reader.uint64() as Long);
          break;

        case 5:
          message.isActive = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateLiquidityProtectionParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      maxRowanLiquidityThreshold: isSet(object.maxRowanLiquidityThreshold) ? String(object.maxRowanLiquidityThreshold) : "",
      maxRowanLiquidityThresholdAsset: isSet(object.maxRowanLiquidityThresholdAsset) ? String(object.maxRowanLiquidityThresholdAsset) : "",
      epochLength: isSet(object.epochLength) ? Long.fromString(object.epochLength) : Long.UZERO,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false
    };
  },

  toJSON(message: MsgUpdateLiquidityProtectionParams): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.maxRowanLiquidityThreshold !== undefined && (obj.maxRowanLiquidityThreshold = message.maxRowanLiquidityThreshold);
    message.maxRowanLiquidityThresholdAsset !== undefined && (obj.maxRowanLiquidityThresholdAsset = message.maxRowanLiquidityThresholdAsset);
    message.epochLength !== undefined && (obj.epochLength = (message.epochLength || Long.UZERO).toString());
    message.isActive !== undefined && (obj.isActive = message.isActive);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateLiquidityProtectionParams>): MsgUpdateLiquidityProtectionParams {
    const message = createBaseMsgUpdateLiquidityProtectionParams();
    message.signer = object.signer ?? "";
    message.maxRowanLiquidityThreshold = object.maxRowanLiquidityThreshold ?? "";
    message.maxRowanLiquidityThresholdAsset = object.maxRowanLiquidityThresholdAsset ?? "";
    message.epochLength = object.epochLength !== undefined && object.epochLength !== null ? Long.fromValue(object.epochLength) : Long.UZERO;
    message.isActive = object.isActive ?? false;
    return message;
  }

};

function createBaseMsgUpdateLiquidityProtectionParamsResponse(): MsgUpdateLiquidityProtectionParamsResponse {
  return {};
}

export const MsgUpdateLiquidityProtectionParamsResponse = {
  encode(_: MsgUpdateLiquidityProtectionParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateLiquidityProtectionParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateLiquidityProtectionParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgUpdateLiquidityProtectionParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateLiquidityProtectionParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateLiquidityProtectionParamsResponse>): MsgUpdateLiquidityProtectionParamsResponse {
    const message = createBaseMsgUpdateLiquidityProtectionParamsResponse();
    return message;
  }

};

function createBaseMsgAddProviderDistributionPeriodRequest(): MsgAddProviderDistributionPeriodRequest {
  return {
    signer: "",
    distributionPeriods: []
  };
}

export const MsgAddProviderDistributionPeriodRequest = {
  encode(message: MsgAddProviderDistributionPeriodRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    for (const v of message.distributionPeriods) {
      ProviderDistributionPeriod.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProviderDistributionPeriodRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddProviderDistributionPeriodRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.distributionPeriods.push(ProviderDistributionPeriod.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddProviderDistributionPeriodRequest {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      distributionPeriods: Array.isArray(object?.distributionPeriods) ? object.distributionPeriods.map((e: any) => ProviderDistributionPeriod.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgAddProviderDistributionPeriodRequest): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);

    if (message.distributionPeriods) {
      obj.distributionPeriods = message.distributionPeriods.map(e => e ? ProviderDistributionPeriod.toJSON(e) : undefined);
    } else {
      obj.distributionPeriods = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddProviderDistributionPeriodRequest>): MsgAddProviderDistributionPeriodRequest {
    const message = createBaseMsgAddProviderDistributionPeriodRequest();
    message.signer = object.signer ?? "";
    message.distributionPeriods = object.distributionPeriods?.map(e => ProviderDistributionPeriod.fromPartial(e)) || [];
    return message;
  }

};

function createBaseMsgAddProviderDistributionPeriodResponse(): MsgAddProviderDistributionPeriodResponse {
  return {};
}

export const MsgAddProviderDistributionPeriodResponse = {
  encode(_: MsgAddProviderDistributionPeriodResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddProviderDistributionPeriodResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddProviderDistributionPeriodResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MsgAddProviderDistributionPeriodResponse {
    return {};
  },

  toJSON(_: MsgAddProviderDistributionPeriodResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddProviderDistributionPeriodResponse>): MsgAddProviderDistributionPeriodResponse {
    const message = createBaseMsgAddProviderDistributionPeriodResponse();
    return message;
  }

};