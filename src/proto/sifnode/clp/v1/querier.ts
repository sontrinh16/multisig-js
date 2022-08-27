import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Pool } from "./pool";
import { LiquidityProvider, Asset, LiquidityProviderData, PmtpEpoch } from "./types";
import { Params, RewardParams, PmtpParams, PmtpRateParams, LiquidityProtectionParams, LiquidityProtectionRateParams, ProviderDistributionParams } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface PoolReq {
  symbol: string;
}
export interface PoolRes {
  pool: Pool;
  clpModuleAddress: string;
  height: Long;
}
export interface PoolsReq {
  pagination: PageRequest;
}
export interface PoolsRes {
  pools: Pool[];
  clpModuleAddress: string;
  height: Long;
  pagination: PageResponse;
}
export interface LiquidityProviderReq {
  symbol: string;
  lpAddress: string;
}
export interface LiquidityProviderRes {
  liquidityProvider: LiquidityProvider;
  nativeAssetBalance: string;
  externalAssetBalance: string;
  height: Long;
}
export interface AssetListReq {
  lpAddress: string;
  pagination: PageRequest;
}
export interface AssetListRes {
  assets: Asset[];
  height: Long;
  pagination: PageResponse;
}
export interface LiquidityProviderDataReq {
  lpAddress: string;
  pagination: PageRequest;
}
export interface LiquidityProviderDataRes {
  liquidityProviderData: LiquidityProviderData[];
  height: Long;
  pagination: PageRequest;
}
export interface LiquidityProviderListReq {
  symbol: string;

  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface LiquidityProviderListRes {
  liquidityProviders: LiquidityProvider[];
  height: Long;

  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface LiquidityProvidersReq {
  pagination: PageRequest;
}
export interface LiquidityProvidersRes {
  liquidityProviders: LiquidityProvider[];
  height: Long;
  pagination: PageResponse;
}
export interface ParamsReq {}
export interface ParamsRes {
  params: Params;
  symmetryThreshold: string;
  symmetryRatioThreshold: string;
}
export interface RewardParamsReq {}
export interface RewardParamsRes {
  params: RewardParams;
}
export interface PmtpParamsReq {}
export interface PmtpParamsRes {
  params: PmtpParams;
  pmtpRateParams: PmtpRateParams;
  pmtpEpoch: PmtpEpoch;
  height: Long;
}
export interface LiquidityProtectionParamsReq {}
export interface LiquidityProtectionParamsRes {
  params: LiquidityProtectionParams;
  rateParams: LiquidityProtectionRateParams;
  height: Long;
}
export interface ProviderDistributionParamsReq {}
export interface ProviderDistributionParamsRes {
  params: ProviderDistributionParams;
}

function createBasePoolReq(): PoolReq {
  return {
    symbol: ""
  };
}

export const PoolReq = {
  encode(message: PoolReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolReq();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolReq {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },

  toJSON(message: PoolReq): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolReq>): PoolReq {
    const message = createBasePoolReq();
    message.symbol = object.symbol ?? "";
    return message;
  }

};

function createBasePoolRes(): PoolRes {
  return {
    pool: undefined,
    clpModuleAddress: "",
    height: Long.ZERO
  };
}

export const PoolRes = {
  encode(message: PoolRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    if (message.clpModuleAddress !== "") {
      writer.uint32(18).string(message.clpModuleAddress);
    }

    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;

        case 2:
          message.clpModuleAddress = reader.string();
          break;

        case 3:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolRes {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      clpModuleAddress: isSet(object.clpModuleAddress) ? String(object.clpModuleAddress) : "",
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: PoolRes): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.clpModuleAddress !== undefined && (obj.clpModuleAddress = message.clpModuleAddress);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<PoolRes>): PoolRes {
    const message = createBasePoolRes();
    message.pool = object.pool !== undefined && object.pool !== null ? Pool.fromPartial(object.pool) : undefined;
    message.clpModuleAddress = object.clpModuleAddress ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBasePoolsReq(): PoolsReq {
  return {
    pagination: undefined
  };
}

export const PoolsReq = {
  encode(message: PoolsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolsReq();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolsReq {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: PoolsReq): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolsReq>): PoolsReq {
    const message = createBasePoolsReq();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBasePoolsRes(): PoolsRes {
  return {
    pools: [],
    clpModuleAddress: "",
    height: Long.ZERO,
    pagination: undefined
  };
}

export const PoolsRes = {
  encode(message: PoolsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.clpModuleAddress !== "") {
      writer.uint32(18).string(message.clpModuleAddress);
    }

    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolsRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;

        case 2:
          message.clpModuleAddress = reader.string();
          break;

        case 3:
          message.height = (reader.int64() as Long);
          break;

        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolsRes {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
      clpModuleAddress: isSet(object.clpModuleAddress) ? String(object.clpModuleAddress) : "",
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: PoolsRes): unknown {
    const obj: any = {};

    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toJSON(e) : undefined);
    } else {
      obj.pools = [];
    }

    message.clpModuleAddress !== undefined && (obj.clpModuleAddress = message.clpModuleAddress);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolsRes>): PoolsRes {
    const message = createBasePoolsRes();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.clpModuleAddress = object.clpModuleAddress ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseLiquidityProviderReq(): LiquidityProviderReq {
  return {
    symbol: "",
    lpAddress: ""
  };
}

export const LiquidityProviderReq = {
  encode(message: LiquidityProviderReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.lpAddress !== "") {
      writer.uint32(18).string(message.lpAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProviderReq();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.lpAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LiquidityProviderReq {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      lpAddress: isSet(object.lpAddress) ? String(object.lpAddress) : ""
    };
  },

  toJSON(message: LiquidityProviderReq): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.lpAddress !== undefined && (obj.lpAddress = message.lpAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<LiquidityProviderReq>): LiquidityProviderReq {
    const message = createBaseLiquidityProviderReq();
    message.symbol = object.symbol ?? "";
    message.lpAddress = object.lpAddress ?? "";
    return message;
  }

};

function createBaseLiquidityProviderRes(): LiquidityProviderRes {
  return {
    liquidityProvider: undefined,
    nativeAssetBalance: "",
    externalAssetBalance: "",
    height: Long.ZERO
  };
}

export const LiquidityProviderRes = {
  encode(message: LiquidityProviderRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidityProvider !== undefined) {
      LiquidityProvider.encode(message.liquidityProvider, writer.uint32(10).fork()).ldelim();
    }

    if (message.nativeAssetBalance !== "") {
      writer.uint32(18).string(message.nativeAssetBalance);
    }

    if (message.externalAssetBalance !== "") {
      writer.uint32(26).string(message.externalAssetBalance);
    }

    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProviderRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidityProvider = LiquidityProvider.decode(reader, reader.uint32());
          break;

        case 2:
          message.nativeAssetBalance = reader.string();
          break;

        case 3:
          message.externalAssetBalance = reader.string();
          break;

        case 4:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LiquidityProviderRes {
    return {
      liquidityProvider: isSet(object.liquidityProvider) ? LiquidityProvider.fromJSON(object.liquidityProvider) : undefined,
      nativeAssetBalance: isSet(object.nativeAssetBalance) ? String(object.nativeAssetBalance) : "",
      externalAssetBalance: isSet(object.externalAssetBalance) ? String(object.externalAssetBalance) : "",
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: LiquidityProviderRes): unknown {
    const obj: any = {};
    message.liquidityProvider !== undefined && (obj.liquidityProvider = message.liquidityProvider ? LiquidityProvider.toJSON(message.liquidityProvider) : undefined);
    message.nativeAssetBalance !== undefined && (obj.nativeAssetBalance = message.nativeAssetBalance);
    message.externalAssetBalance !== undefined && (obj.externalAssetBalance = message.externalAssetBalance);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<LiquidityProviderRes>): LiquidityProviderRes {
    const message = createBaseLiquidityProviderRes();
    message.liquidityProvider = object.liquidityProvider !== undefined && object.liquidityProvider !== null ? LiquidityProvider.fromPartial(object.liquidityProvider) : undefined;
    message.nativeAssetBalance = object.nativeAssetBalance ?? "";
    message.externalAssetBalance = object.externalAssetBalance ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseAssetListReq(): AssetListReq {
  return {
    lpAddress: "",
    pagination: undefined
  };
}

export const AssetListReq = {
  encode(message: AssetListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lpAddress !== "") {
      writer.uint32(10).string(message.lpAddress);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetListReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetListReq();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lpAddress = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetListReq {
    return {
      lpAddress: isSet(object.lpAddress) ? String(object.lpAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: AssetListReq): unknown {
    const obj: any = {};
    message.lpAddress !== undefined && (obj.lpAddress = message.lpAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetListReq>): AssetListReq {
    const message = createBaseAssetListReq();
    message.lpAddress = object.lpAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseAssetListRes(): AssetListRes {
  return {
    assets: [],
    height: Long.ZERO,
    pagination: undefined
  };
}

export const AssetListRes = {
  encode(message: AssetListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetListRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetListRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetListRes {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: AssetListRes): unknown {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }

    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetListRes>): AssetListRes {
    const message = createBaseAssetListRes();
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseLiquidityProviderDataReq(): LiquidityProviderDataReq {
  return {
    lpAddress: "",
    pagination: undefined
  };
}

export const LiquidityProviderDataReq = {
  encode(message: LiquidityProviderDataReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lpAddress !== "") {
      writer.uint32(10).string(message.lpAddress);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderDataReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProviderDataReq();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.lpAddress = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LiquidityProviderDataReq {
    return {
      lpAddress: isSet(object.lpAddress) ? String(object.lpAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: LiquidityProviderDataReq): unknown {
    const obj: any = {};
    message.lpAddress !== undefined && (obj.lpAddress = message.lpAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LiquidityProviderDataReq>): LiquidityProviderDataReq {
    const message = createBaseLiquidityProviderDataReq();
    message.lpAddress = object.lpAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseLiquidityProviderDataRes(): LiquidityProviderDataRes {
  return {
    liquidityProviderData: [],
    height: Long.ZERO,
    pagination: undefined
  };
}

export const LiquidityProviderDataRes = {
  encode(message: LiquidityProviderDataRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidityProviderData) {
      LiquidityProviderData.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderDataRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProviderDataRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidityProviderData.push(LiquidityProviderData.decode(reader, reader.uint32()));
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LiquidityProviderDataRes {
    return {
      liquidityProviderData: Array.isArray(object?.liquidityProviderData) ? object.liquidityProviderData.map((e: any) => LiquidityProviderData.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: LiquidityProviderDataRes): unknown {
    const obj: any = {};

    if (message.liquidityProviderData) {
      obj.liquidityProviderData = message.liquidityProviderData.map(e => e ? LiquidityProviderData.toJSON(e) : undefined);
    } else {
      obj.liquidityProviderData = [];
    }

    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LiquidityProviderDataRes>): LiquidityProviderDataRes {
    const message = createBaseLiquidityProviderDataRes();
    message.liquidityProviderData = object.liquidityProviderData?.map(e => LiquidityProviderData.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseLiquidityProviderListReq(): LiquidityProviderListReq {
  return {
    symbol: "",
    pagination: undefined
  };
}

export const LiquidityProviderListReq = {
  encode(message: LiquidityProviderListReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.symbol !== "") {
      writer.uint32(10).string(message.symbol);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderListReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProviderListReq();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.symbol = reader.string();
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LiquidityProviderListReq {
    return {
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: LiquidityProviderListReq): unknown {
    const obj: any = {};
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LiquidityProviderListReq>): LiquidityProviderListReq {
    const message = createBaseLiquidityProviderListReq();
    message.symbol = object.symbol ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseLiquidityProviderListRes(): LiquidityProviderListRes {
  return {
    liquidityProviders: [],
    height: Long.ZERO,
    pagination: undefined
  };
}

export const LiquidityProviderListRes = {
  encode(message: LiquidityProviderListRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidityProviders) {
      LiquidityProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProviderListRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProviderListRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidityProviders.push(LiquidityProvider.decode(reader, reader.uint32()));
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LiquidityProviderListRes {
    return {
      liquidityProviders: Array.isArray(object?.liquidityProviders) ? object.liquidityProviders.map((e: any) => LiquidityProvider.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: LiquidityProviderListRes): unknown {
    const obj: any = {};

    if (message.liquidityProviders) {
      obj.liquidityProviders = message.liquidityProviders.map(e => e ? LiquidityProvider.toJSON(e) : undefined);
    } else {
      obj.liquidityProviders = [];
    }

    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LiquidityProviderListRes>): LiquidityProviderListRes {
    const message = createBaseLiquidityProviderListRes();
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProvider.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseLiquidityProvidersReq(): LiquidityProvidersReq {
  return {
    pagination: undefined
  };
}

export const LiquidityProvidersReq = {
  encode(message: LiquidityProvidersReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProvidersReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvidersReq();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LiquidityProvidersReq {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: LiquidityProvidersReq): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LiquidityProvidersReq>): LiquidityProvidersReq {
    const message = createBaseLiquidityProvidersReq();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseLiquidityProvidersRes(): LiquidityProvidersRes {
  return {
    liquidityProviders: [],
    height: Long.ZERO,
    pagination: undefined
  };
}

export const LiquidityProvidersRes = {
  encode(message: LiquidityProvidersRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.liquidityProviders) {
      LiquidityProvider.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(16).int64(message.height);
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProvidersRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProvidersRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.liquidityProviders.push(LiquidityProvider.decode(reader, reader.uint32()));
          break;

        case 2:
          message.height = (reader.int64() as Long);
          break;

        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LiquidityProvidersRes {
    return {
      liquidityProviders: Array.isArray(object?.liquidityProviders) ? object.liquidityProviders.map((e: any) => LiquidityProvider.fromJSON(e)) : [],
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: LiquidityProvidersRes): unknown {
    const obj: any = {};

    if (message.liquidityProviders) {
      obj.liquidityProviders = message.liquidityProviders.map(e => e ? LiquidityProvider.toJSON(e) : undefined);
    } else {
      obj.liquidityProviders = [];
    }

    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<LiquidityProvidersRes>): LiquidityProvidersRes {
    const message = createBaseLiquidityProvidersRes();
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProvider.fromPartial(e)) || [];
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseParamsReq(): ParamsReq {
  return {};
}

export const ParamsReq = {
  encode(_: ParamsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsReq();

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

  fromJSON(_: any): ParamsReq {
    return {};
  },

  toJSON(_: ParamsReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ParamsReq>): ParamsReq {
    const message = createBaseParamsReq();
    return message;
  }

};

function createBaseParamsRes(): ParamsRes {
  return {
    params: undefined,
    symmetryThreshold: "",
    symmetryRatioThreshold: ""
  };
}

export const ParamsRes = {
  encode(message: ParamsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.symmetryThreshold !== "") {
      writer.uint32(18).string(message.symmetryThreshold);
    }

    if (message.symmetryRatioThreshold !== "") {
      writer.uint32(26).string(message.symmetryRatioThreshold);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.symmetryThreshold = reader.string();
          break;

        case 3:
          message.symmetryRatioThreshold = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ParamsRes {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      symmetryThreshold: isSet(object.symmetryThreshold) ? String(object.symmetryThreshold) : "",
      symmetryRatioThreshold: isSet(object.symmetryRatioThreshold) ? String(object.symmetryRatioThreshold) : ""
    };
  },

  toJSON(message: ParamsRes): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.symmetryThreshold !== undefined && (obj.symmetryThreshold = message.symmetryThreshold);
    message.symmetryRatioThreshold !== undefined && (obj.symmetryRatioThreshold = message.symmetryRatioThreshold);
    return obj;
  },

  fromPartial(object: DeepPartial<ParamsRes>): ParamsRes {
    const message = createBaseParamsRes();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.symmetryThreshold = object.symmetryThreshold ?? "";
    message.symmetryRatioThreshold = object.symmetryRatioThreshold ?? "";
    return message;
  }

};

function createBaseRewardParamsReq(): RewardParamsReq {
  return {};
}

export const RewardParamsReq = {
  encode(_: RewardParamsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardParamsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardParamsReq();

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

  fromJSON(_: any): RewardParamsReq {
    return {};
  },

  toJSON(_: RewardParamsReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RewardParamsReq>): RewardParamsReq {
    const message = createBaseRewardParamsReq();
    return message;
  }

};

function createBaseRewardParamsRes(): RewardParamsRes {
  return {
    params: undefined
  };
}

export const RewardParamsRes = {
  encode(message: RewardParamsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      RewardParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RewardParamsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRewardParamsRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = RewardParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RewardParamsRes {
    return {
      params: isSet(object.params) ? RewardParams.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: RewardParamsRes): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? RewardParams.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RewardParamsRes>): RewardParamsRes {
    const message = createBaseRewardParamsRes();
    message.params = object.params !== undefined && object.params !== null ? RewardParams.fromPartial(object.params) : undefined;
    return message;
  }

};

function createBasePmtpParamsReq(): PmtpParamsReq {
  return {};
}

export const PmtpParamsReq = {
  encode(_: PmtpParamsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PmtpParamsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePmtpParamsReq();

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

  fromJSON(_: any): PmtpParamsReq {
    return {};
  },

  toJSON(_: PmtpParamsReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<PmtpParamsReq>): PmtpParamsReq {
    const message = createBasePmtpParamsReq();
    return message;
  }

};

function createBasePmtpParamsRes(): PmtpParamsRes {
  return {
    params: undefined,
    pmtpRateParams: undefined,
    pmtpEpoch: undefined,
    height: Long.ZERO
  };
}

export const PmtpParamsRes = {
  encode(message: PmtpParamsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      PmtpParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.pmtpRateParams !== undefined) {
      PmtpRateParams.encode(message.pmtpRateParams, writer.uint32(18).fork()).ldelim();
    }

    if (message.pmtpEpoch !== undefined) {
      PmtpEpoch.encode(message.pmtpEpoch, writer.uint32(26).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(32).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PmtpParamsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePmtpParamsRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = PmtpParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.pmtpRateParams = PmtpRateParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.pmtpEpoch = PmtpEpoch.decode(reader, reader.uint32());
          break;

        case 4:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PmtpParamsRes {
    return {
      params: isSet(object.params) ? PmtpParams.fromJSON(object.params) : undefined,
      pmtpRateParams: isSet(object.pmtpRateParams) ? PmtpRateParams.fromJSON(object.pmtpRateParams) : undefined,
      pmtpEpoch: isSet(object.pmtpEpoch) ? PmtpEpoch.fromJSON(object.pmtpEpoch) : undefined,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: PmtpParamsRes): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? PmtpParams.toJSON(message.params) : undefined);
    message.pmtpRateParams !== undefined && (obj.pmtpRateParams = message.pmtpRateParams ? PmtpRateParams.toJSON(message.pmtpRateParams) : undefined);
    message.pmtpEpoch !== undefined && (obj.pmtpEpoch = message.pmtpEpoch ? PmtpEpoch.toJSON(message.pmtpEpoch) : undefined);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<PmtpParamsRes>): PmtpParamsRes {
    const message = createBasePmtpParamsRes();
    message.params = object.params !== undefined && object.params !== null ? PmtpParams.fromPartial(object.params) : undefined;
    message.pmtpRateParams = object.pmtpRateParams !== undefined && object.pmtpRateParams !== null ? PmtpRateParams.fromPartial(object.pmtpRateParams) : undefined;
    message.pmtpEpoch = object.pmtpEpoch !== undefined && object.pmtpEpoch !== null ? PmtpEpoch.fromPartial(object.pmtpEpoch) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseLiquidityProtectionParamsReq(): LiquidityProtectionParamsReq {
  return {};
}

export const LiquidityProtectionParamsReq = {
  encode(_: LiquidityProtectionParamsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProtectionParamsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProtectionParamsReq();

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

  fromJSON(_: any): LiquidityProtectionParamsReq {
    return {};
  },

  toJSON(_: LiquidityProtectionParamsReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<LiquidityProtectionParamsReq>): LiquidityProtectionParamsReq {
    const message = createBaseLiquidityProtectionParamsReq();
    return message;
  }

};

function createBaseLiquidityProtectionParamsRes(): LiquidityProtectionParamsRes {
  return {
    params: undefined,
    rateParams: undefined,
    height: Long.ZERO
  };
}

export const LiquidityProtectionParamsRes = {
  encode(message: LiquidityProtectionParamsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      LiquidityProtectionParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    if (message.rateParams !== undefined) {
      LiquidityProtectionRateParams.encode(message.rateParams, writer.uint32(18).fork()).ldelim();
    }

    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LiquidityProtectionParamsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLiquidityProtectionParamsRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = LiquidityProtectionParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.rateParams = LiquidityProtectionRateParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.height = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LiquidityProtectionParamsRes {
    return {
      params: isSet(object.params) ? LiquidityProtectionParams.fromJSON(object.params) : undefined,
      rateParams: isSet(object.rateParams) ? LiquidityProtectionRateParams.fromJSON(object.rateParams) : undefined,
      height: isSet(object.height) ? Long.fromString(object.height) : Long.ZERO
    };
  },

  toJSON(message: LiquidityProtectionParamsRes): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? LiquidityProtectionParams.toJSON(message.params) : undefined);
    message.rateParams !== undefined && (obj.rateParams = message.rateParams ? LiquidityProtectionRateParams.toJSON(message.rateParams) : undefined);
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<LiquidityProtectionParamsRes>): LiquidityProtectionParamsRes {
    const message = createBaseLiquidityProtectionParamsRes();
    message.params = object.params !== undefined && object.params !== null ? LiquidityProtectionParams.fromPartial(object.params) : undefined;
    message.rateParams = object.rateParams !== undefined && object.rateParams !== null ? LiquidityProtectionRateParams.fromPartial(object.rateParams) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }

};

function createBaseProviderDistributionParamsReq(): ProviderDistributionParamsReq {
  return {};
}

export const ProviderDistributionParamsReq = {
  encode(_: ProviderDistributionParamsReq, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderDistributionParamsReq {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderDistributionParamsReq();

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

  fromJSON(_: any): ProviderDistributionParamsReq {
    return {};
  },

  toJSON(_: ProviderDistributionParamsReq): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ProviderDistributionParamsReq>): ProviderDistributionParamsReq {
    const message = createBaseProviderDistributionParamsReq();
    return message;
  }

};

function createBaseProviderDistributionParamsRes(): ProviderDistributionParamsRes {
  return {
    params: undefined
  };
}

export const ProviderDistributionParamsRes = {
  encode(message: ProviderDistributionParamsRes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      ProviderDistributionParams.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProviderDistributionParamsRes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderDistributionParamsRes();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = ProviderDistributionParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProviderDistributionParamsRes {
    return {
      params: isSet(object.params) ? ProviderDistributionParams.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: ProviderDistributionParamsRes): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? ProviderDistributionParams.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ProviderDistributionParamsRes>): ProviderDistributionParamsRes {
    const message = createBaseProviderDistributionParamsRes();
    message.params = object.params !== undefined && object.params !== null ? ProviderDistributionParams.fromPartial(object.params) : undefined;
    return message;
  }

};