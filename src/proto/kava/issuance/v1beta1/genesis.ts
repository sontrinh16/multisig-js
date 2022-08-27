import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toDuration, fromDuration, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";

/** GenesisState defines the issuance module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  supplies: AssetSupply[];
}

/** Params defines the parameters for the issuance module. */
export interface Params {
  assets: Asset[];
}

/** Asset type for assets in the issuance module */
export interface Asset {
  owner: string;
  denom: string;
  blockedAddresses: string[];
  paused: boolean;
  blockable: boolean;
  rateLimit: RateLimit;
}

/** RateLimit parameters for rate-limiting the supply of an issued asset */
export interface RateLimit {
  active: boolean;
  limit: Uint8Array;
  timePeriod: string;
}

/**
 * AssetSupply contains information about an asset's rate-limited supply (the
 * total supply of the asset is tracked in the top-level supply module)
 */
export interface AssetSupply {
  currentSupply: Coin;
  timeElapsed: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    supplies: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.supplies) {
      AssetSupply.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        case 2:
          message.supplies.push(AssetSupply.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      supplies: Array.isArray(object?.supplies) ? object.supplies.map((e: any) => AssetSupply.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.supplies) {
      obj.supplies = message.supplies.map(e => e ? AssetSupply.toJSON(e) : undefined);
    } else {
      obj.supplies = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.supplies = object.supplies?.map(e => AssetSupply.fromPartial(e)) || [];
    return message;
  }

};

function createBaseParams(): Params {
  return {
    assets: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      assets: Array.isArray(object?.assets) ? object.assets.map((e: any) => Asset.fromJSON(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.assets) {
      obj.assets = message.assets.map(e => e ? Asset.toJSON(e) : undefined);
    } else {
      obj.assets = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.assets = object.assets?.map(e => Asset.fromPartial(e)) || [];
    return message;
  }

};

function createBaseAsset(): Asset {
  return {
    owner: "",
    denom: "",
    blockedAddresses: [],
    paused: false,
    blockable: false,
    rateLimit: undefined
  };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }

    for (const v of message.blockedAddresses) {
      writer.uint32(26).string(v!);
    }

    if (message.paused === true) {
      writer.uint32(32).bool(message.paused);
    }

    if (message.blockable === true) {
      writer.uint32(40).bool(message.blockable);
    }

    if (message.rateLimit !== undefined) {
      RateLimit.encode(message.rateLimit, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.denom = reader.string();
          break;

        case 3:
          message.blockedAddresses.push(reader.string());
          break;

        case 4:
          message.paused = reader.bool();
          break;

        case 5:
          message.blockable = reader.bool();
          break;

        case 6:
          message.rateLimit = RateLimit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Asset {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      blockedAddresses: Array.isArray(object?.blockedAddresses) ? object.blockedAddresses.map((e: any) => String(e)) : [],
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      blockable: isSet(object.blockable) ? Boolean(object.blockable) : false,
      rateLimit: isSet(object.rateLimit) ? RateLimit.fromJSON(object.rateLimit) : undefined
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);

    if (message.blockedAddresses) {
      obj.blockedAddresses = message.blockedAddresses.map(e => e);
    } else {
      obj.blockedAddresses = [];
    }

    message.paused !== undefined && (obj.paused = message.paused);
    message.blockable !== undefined && (obj.blockable = message.blockable);
    message.rateLimit !== undefined && (obj.rateLimit = message.rateLimit ? RateLimit.toJSON(message.rateLimit) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Asset>): Asset {
    const message = createBaseAsset();
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.blockedAddresses = object.blockedAddresses?.map(e => e) || [];
    message.paused = object.paused ?? false;
    message.blockable = object.blockable ?? false;
    message.rateLimit = object.rateLimit !== undefined && object.rateLimit !== null ? RateLimit.fromPartial(object.rateLimit) : undefined;
    return message;
  }

};

function createBaseRateLimit(): RateLimit {
  return {
    active: false,
    limit: new Uint8Array(),
    timePeriod: undefined
  };
}

export const RateLimit = {
  encode(message: RateLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.active === true) {
      writer.uint32(8).bool(message.active);
    }

    if (message.limit.length !== 0) {
      writer.uint32(18).bytes(message.limit);
    }

    if (message.timePeriod !== undefined) {
      Duration.encode(toDuration(message.timePeriod), writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RateLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRateLimit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.active = reader.bool();
          break;

        case 2:
          message.limit = reader.bytes();
          break;

        case 3:
          message.timePeriod = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RateLimit {
    return {
      active: isSet(object.active) ? Boolean(object.active) : false,
      limit: isSet(object.limit) ? bytesFromBase64(object.limit) : new Uint8Array(),
      timePeriod: isSet(object.timePeriod) ? String(object.timePeriod) : undefined
    };
  },

  toJSON(message: RateLimit): unknown {
    const obj: any = {};
    message.active !== undefined && (obj.active = message.active);
    message.limit !== undefined && (obj.limit = base64FromBytes(message.limit !== undefined ? message.limit : new Uint8Array()));
    message.timePeriod !== undefined && (obj.timePeriod = message.timePeriod);
    return obj;
  },

  fromPartial(object: DeepPartial<RateLimit>): RateLimit {
    const message = createBaseRateLimit();
    message.active = object.active ?? false;
    message.limit = object.limit ?? new Uint8Array();
    message.timePeriod = object.timePeriod ?? undefined;
    return message;
  }

};

function createBaseAssetSupply(): AssetSupply {
  return {
    currentSupply: undefined,
    timeElapsed: undefined
  };
}

export const AssetSupply = {
  encode(message: AssetSupply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currentSupply !== undefined) {
      Coin.encode(message.currentSupply, writer.uint32(10).fork()).ldelim();
    }

    if (message.timeElapsed !== undefined) {
      Duration.encode(toDuration(message.timeElapsed), writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetSupply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSupply();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.currentSupply = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.timeElapsed = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AssetSupply {
    return {
      currentSupply: isSet(object.currentSupply) ? Coin.fromJSON(object.currentSupply) : undefined,
      timeElapsed: isSet(object.timeElapsed) ? String(object.timeElapsed) : undefined
    };
  },

  toJSON(message: AssetSupply): unknown {
    const obj: any = {};
    message.currentSupply !== undefined && (obj.currentSupply = message.currentSupply ? Coin.toJSON(message.currentSupply) : undefined);
    message.timeElapsed !== undefined && (obj.timeElapsed = message.timeElapsed);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetSupply>): AssetSupply {
    const message = createBaseAssetSupply();
    message.currentSupply = object.currentSupply !== undefined && object.currentSupply !== null ? Coin.fromPartial(object.currentSupply) : undefined;
    message.timeElapsed = object.timeElapsed ?? undefined;
    return message;
  }

};