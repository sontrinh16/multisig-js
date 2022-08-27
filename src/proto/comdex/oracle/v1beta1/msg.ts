import { Height } from "../../../ibc/core/client/v1/client";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface MsgAddMarketRequest {
  from: string;
  symbol: string;
  scriptId: Long;
  id: Long;
}
export interface MsgAddMarketResponse {}
export interface MsgUpdateMarketRequest {
  from: string;
  symbol: string;
  scriptId: Long;
}
export interface MsgUpdateMarketResponse {}
export interface MsgRemoveMarketForAssetRequest {
  from: string;
  id: Long;
  symbol: string;
}
export interface MsgRemoveMarketForAssetResponse {}
export interface MsgFetchPriceRequest {
  from: string;
  sourcePort: string;
  sourceChannel: string;
  timeoutHeight: Height;
  timeoutTimestamp: Long;
  symbols: string[];
  scriptId: Long;
  feeLimit: Coin[];
  prepareGas: Long;
  executeGas: Long;
}
export interface MsgFetchPriceResponse {}

function createBaseMsgAddMarketRequest(): MsgAddMarketRequest {
  return {
    from: "",
    symbol: "",
    scriptId: Long.UZERO,
    id: Long.UZERO
  };
}

export const MsgAddMarketRequest = {
  encode(message: MsgAddMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    if (!message.scriptId.isZero()) {
      writer.uint32(24).uint64(message.scriptId);
    }

    if (!message.id.isZero()) {
      writer.uint32(32).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMarketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.scriptId = (reader.uint64() as Long);
          break;

        case 4:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddMarketRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      scriptId: isSet(object.scriptId) ? Long.fromString(object.scriptId) : Long.UZERO,
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: MsgAddMarketRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.scriptId !== undefined && (obj.scriptId = (message.scriptId || Long.UZERO).toString());
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddMarketRequest>): MsgAddMarketRequest {
    const message = createBaseMsgAddMarketRequest();
    message.from = object.from ?? "";
    message.symbol = object.symbol ?? "";
    message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? Long.fromValue(object.scriptId) : Long.UZERO;
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgAddMarketResponse(): MsgAddMarketResponse {
  return {};
}

export const MsgAddMarketResponse = {
  encode(_: MsgAddMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddMarketResponse();

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

  fromJSON(_: any): MsgAddMarketResponse {
    return {};
  },

  toJSON(_: MsgAddMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddMarketResponse>): MsgAddMarketResponse {
    const message = createBaseMsgAddMarketResponse();
    return message;
  }

};

function createBaseMsgUpdateMarketRequest(): MsgUpdateMarketRequest {
  return {
    from: "",
    symbol: "",
    scriptId: Long.UZERO
  };
}

export const MsgUpdateMarketRequest = {
  encode(message: MsgUpdateMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }

    if (!message.scriptId.isZero()) {
      writer.uint32(24).uint64(message.scriptId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMarketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.symbol = reader.string();
          break;

        case 3:
          message.scriptId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateMarketRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      scriptId: isSet(object.scriptId) ? Long.fromString(object.scriptId) : Long.UZERO
    };
  },

  toJSON(message: MsgUpdateMarketRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.scriptId !== undefined && (obj.scriptId = (message.scriptId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMarketRequest>): MsgUpdateMarketRequest {
    const message = createBaseMsgUpdateMarketRequest();
    message.from = object.from ?? "";
    message.symbol = object.symbol ?? "";
    message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? Long.fromValue(object.scriptId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgUpdateMarketResponse(): MsgUpdateMarketResponse {
  return {};
}

export const MsgUpdateMarketResponse = {
  encode(_: MsgUpdateMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMarketResponse();

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

  fromJSON(_: any): MsgUpdateMarketResponse {
    return {};
  },

  toJSON(_: MsgUpdateMarketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateMarketResponse>): MsgUpdateMarketResponse {
    const message = createBaseMsgUpdateMarketResponse();
    return message;
  }

};

function createBaseMsgRemoveMarketForAssetRequest(): MsgRemoveMarketForAssetRequest {
  return {
    from: "",
    id: Long.UZERO,
    symbol: ""
  };
}

export const MsgRemoveMarketForAssetRequest = {
  encode(message: MsgRemoveMarketForAssetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMarketForAssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMarketForAssetRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.symbol = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRemoveMarketForAssetRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      symbol: isSet(object.symbol) ? String(object.symbol) : ""
    };
  },

  toJSON(message: MsgRemoveMarketForAssetRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveMarketForAssetRequest>): MsgRemoveMarketForAssetRequest {
    const message = createBaseMsgRemoveMarketForAssetRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.symbol = object.symbol ?? "";
    return message;
  }

};

function createBaseMsgRemoveMarketForAssetResponse(): MsgRemoveMarketForAssetResponse {
  return {};
}

export const MsgRemoveMarketForAssetResponse = {
  encode(_: MsgRemoveMarketForAssetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveMarketForAssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveMarketForAssetResponse();

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

  fromJSON(_: any): MsgRemoveMarketForAssetResponse {
    return {};
  },

  toJSON(_: MsgRemoveMarketForAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRemoveMarketForAssetResponse>): MsgRemoveMarketForAssetResponse {
    const message = createBaseMsgRemoveMarketForAssetResponse();
    return message;
  }

};

function createBaseMsgFetchPriceRequest(): MsgFetchPriceRequest {
  return {
    from: "",
    sourcePort: "",
    sourceChannel: "",
    timeoutHeight: undefined,
    timeoutTimestamp: Long.UZERO,
    symbols: [],
    scriptId: Long.UZERO,
    feeLimit: [],
    prepareGas: Long.UZERO,
    executeGas: Long.UZERO
  };
}

export const MsgFetchPriceRequest = {
  encode(message: MsgFetchPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.sourcePort !== "") {
      writer.uint32(18).string(message.sourcePort);
    }

    if (message.sourceChannel !== "") {
      writer.uint32(26).string(message.sourceChannel);
    }

    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(34).fork()).ldelim();
    }

    if (!message.timeoutTimestamp.isZero()) {
      writer.uint32(40).uint64(message.timeoutTimestamp);
    }

    for (const v of message.symbols) {
      writer.uint32(50).string(v!);
    }

    if (!message.scriptId.isZero()) {
      writer.uint32(56).uint64(message.scriptId);
    }

    for (const v of message.feeLimit) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (!message.prepareGas.isZero()) {
      writer.uint32(72).uint64(message.prepareGas);
    }

    if (!message.executeGas.isZero()) {
      writer.uint32(80).uint64(message.executeGas);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFetchPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFetchPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.sourcePort = reader.string();
          break;

        case 3:
          message.sourceChannel = reader.string();
          break;

        case 4:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;

        case 5:
          message.timeoutTimestamp = (reader.uint64() as Long);
          break;

        case 6:
          message.symbols.push(reader.string());
          break;

        case 7:
          message.scriptId = (reader.uint64() as Long);
          break;

        case 8:
          message.feeLimit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 9:
          message.prepareGas = (reader.uint64() as Long);
          break;

        case 10:
          message.executeGas = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgFetchPriceRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      sourcePort: isSet(object.sourcePort) ? String(object.sourcePort) : "",
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      timeoutHeight: isSet(object.timeoutHeight) ? Height.fromJSON(object.timeoutHeight) : undefined,
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Long.fromString(object.timeoutTimestamp) : Long.UZERO,
      symbols: Array.isArray(object?.symbols) ? object.symbols.map((e: any) => String(e)) : [],
      scriptId: isSet(object.scriptId) ? Long.fromString(object.scriptId) : Long.UZERO,
      feeLimit: Array.isArray(object?.feeLimit) ? object.feeLimit.map((e: any) => Coin.fromJSON(e)) : [],
      prepareGas: isSet(object.prepareGas) ? Long.fromString(object.prepareGas) : Long.UZERO,
      executeGas: isSet(object.executeGas) ? Long.fromString(object.executeGas) : Long.UZERO
    };
  },

  toJSON(message: MsgFetchPriceRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.sourcePort !== undefined && (obj.sourcePort = message.sourcePort);
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
    message.timeoutHeight !== undefined && (obj.timeoutHeight = message.timeoutHeight ? Height.toJSON(message.timeoutHeight) : undefined);
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || Long.UZERO).toString());

    if (message.symbols) {
      obj.symbols = message.symbols.map(e => e);
    } else {
      obj.symbols = [];
    }

    message.scriptId !== undefined && (obj.scriptId = (message.scriptId || Long.UZERO).toString());

    if (message.feeLimit) {
      obj.feeLimit = message.feeLimit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.feeLimit = [];
    }

    message.prepareGas !== undefined && (obj.prepareGas = (message.prepareGas || Long.UZERO).toString());
    message.executeGas !== undefined && (obj.executeGas = (message.executeGas || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgFetchPriceRequest>): MsgFetchPriceRequest {
    const message = createBaseMsgFetchPriceRequest();
    message.from = object.from ?? "";
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : undefined;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? Long.fromValue(object.timeoutTimestamp) : Long.UZERO;
    message.symbols = object.symbols?.map(e => e) || [];
    message.scriptId = object.scriptId !== undefined && object.scriptId !== null ? Long.fromValue(object.scriptId) : Long.UZERO;
    message.feeLimit = object.feeLimit?.map(e => Coin.fromPartial(e)) || [];
    message.prepareGas = object.prepareGas !== undefined && object.prepareGas !== null ? Long.fromValue(object.prepareGas) : Long.UZERO;
    message.executeGas = object.executeGas !== undefined && object.executeGas !== null ? Long.fromValue(object.executeGas) : Long.UZERO;
    return message;
  }

};

function createBaseMsgFetchPriceResponse(): MsgFetchPriceResponse {
  return {};
}

export const MsgFetchPriceResponse = {
  encode(_: MsgFetchPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFetchPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFetchPriceResponse();

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

  fromJSON(_: any): MsgFetchPriceResponse {
    return {};
  },

  toJSON(_: MsgFetchPriceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgFetchPriceResponse>): MsgFetchPriceResponse {
    const message = createBaseMsgFetchPriceResponse();
    return message;
  }

};