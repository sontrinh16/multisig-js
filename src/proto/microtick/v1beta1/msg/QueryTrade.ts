import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, Long } from "@osmonauts/helpers";
export interface QueryTradeRequest {
  id: number;
}
export interface ResponseQuotedParams {
  id: number;
  premium: DecCoin;
  remainBacking: string;
  spot: DecCoin;
}
export interface ResponseTradeLeg {
  legId: number;
  type: string;
  backing: DecCoin;
  premium: DecCoin;
  cost: DecCoin;
  quantity: DecCoin;
  long: Uint8Array;
  short: Uint8Array;
  quoted: ResponseQuotedParams;
  currentValue: string;
}
export interface QueryTradeResponse {
  id: number;
  market: string;
  duration: string;
  order: string;
  taker: Uint8Array;
  quantity: DecCoin;
  legs: ResponseTradeLeg[];
  start: Long;
  expiration: Long;
  strike: DecCoin;
  commission: DecCoin;
  settleIncentive: DecCoin;
  consensus: DecCoin;
  currentValue: string;
}

function createBaseQueryTradeRequest(): QueryTradeRequest {
  return {
    id: 0
  };
}

export const QueryTradeRequest = {
  encode(message: QueryTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTradeRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },

  toJSON(message: QueryTradeRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTradeRequest>): QueryTradeRequest {
    const message = createBaseQueryTradeRequest();
    message.id = object.id ?? 0;
    return message;
  }

};

function createBaseResponseQuotedParams(): ResponseQuotedParams {
  return {
    id: 0,
    premium: undefined,
    remainBacking: "",
    spot: undefined
  };
}

export const ResponseQuotedParams = {
  encode(message: ResponseQuotedParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.premium !== undefined) {
      DecCoin.encode(message.premium, writer.uint32(18).fork()).ldelim();
    }

    if (message.remainBacking !== "") {
      writer.uint32(26).string(message.remainBacking);
    }

    if (message.spot !== undefined) {
      DecCoin.encode(message.spot, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuotedParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuotedParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.premium = DecCoin.decode(reader, reader.uint32());
          break;

        case 3:
          message.remainBacking = reader.string();
          break;

        case 4:
          message.spot = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseQuotedParams {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      premium: isSet(object.premium) ? DecCoin.fromJSON(object.premium) : undefined,
      remainBacking: isSet(object.remainBacking) ? String(object.remainBacking) : "",
      spot: isSet(object.spot) ? DecCoin.fromJSON(object.spot) : undefined
    };
  },

  toJSON(message: ResponseQuotedParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.premium !== undefined && (obj.premium = message.premium ? DecCoin.toJSON(message.premium) : undefined);
    message.remainBacking !== undefined && (obj.remainBacking = message.remainBacking);
    message.spot !== undefined && (obj.spot = message.spot ? DecCoin.toJSON(message.spot) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseQuotedParams>): ResponseQuotedParams {
    const message = createBaseResponseQuotedParams();
    message.id = object.id ?? 0;
    message.premium = object.premium !== undefined && object.premium !== null ? DecCoin.fromPartial(object.premium) : undefined;
    message.remainBacking = object.remainBacking ?? "";
    message.spot = object.spot !== undefined && object.spot !== null ? DecCoin.fromPartial(object.spot) : undefined;
    return message;
  }

};

function createBaseResponseTradeLeg(): ResponseTradeLeg {
  return {
    legId: 0,
    type: "",
    backing: undefined,
    premium: undefined,
    cost: undefined,
    quantity: undefined,
    long: new Uint8Array(),
    short: new Uint8Array(),
    quoted: undefined,
    currentValue: ""
  };
}

export const ResponseTradeLeg = {
  encode(message: ResponseTradeLeg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legId !== 0) {
      writer.uint32(8).uint32(message.legId);
    }

    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }

    if (message.backing !== undefined) {
      DecCoin.encode(message.backing, writer.uint32(26).fork()).ldelim();
    }

    if (message.premium !== undefined) {
      DecCoin.encode(message.premium, writer.uint32(34).fork()).ldelim();
    }

    if (message.cost !== undefined) {
      DecCoin.encode(message.cost, writer.uint32(42).fork()).ldelim();
    }

    if (message.quantity !== undefined) {
      DecCoin.encode(message.quantity, writer.uint32(50).fork()).ldelim();
    }

    if (message.long.length !== 0) {
      writer.uint32(58).bytes(message.long);
    }

    if (message.short.length !== 0) {
      writer.uint32(66).bytes(message.short);
    }

    if (message.quoted !== undefined) {
      ResponseQuotedParams.encode(message.quoted, writer.uint32(74).fork()).ldelim();
    }

    if (message.currentValue !== "") {
      writer.uint32(82).string(message.currentValue);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseTradeLeg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseTradeLeg();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.legId = reader.uint32();
          break;

        case 2:
          message.type = reader.string();
          break;

        case 3:
          message.backing = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.premium = DecCoin.decode(reader, reader.uint32());
          break;

        case 5:
          message.cost = DecCoin.decode(reader, reader.uint32());
          break;

        case 6:
          message.quantity = DecCoin.decode(reader, reader.uint32());
          break;

        case 7:
          message.long = reader.bytes();
          break;

        case 8:
          message.short = reader.bytes();
          break;

        case 9:
          message.quoted = ResponseQuotedParams.decode(reader, reader.uint32());
          break;

        case 10:
          message.currentValue = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResponseTradeLeg {
    return {
      legId: isSet(object.legId) ? Number(object.legId) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      backing: isSet(object.backing) ? DecCoin.fromJSON(object.backing) : undefined,
      premium: isSet(object.premium) ? DecCoin.fromJSON(object.premium) : undefined,
      cost: isSet(object.cost) ? DecCoin.fromJSON(object.cost) : undefined,
      quantity: isSet(object.quantity) ? DecCoin.fromJSON(object.quantity) : undefined,
      long: isSet(object.long) ? bytesFromBase64(object.long) : new Uint8Array(),
      short: isSet(object.short) ? bytesFromBase64(object.short) : new Uint8Array(),
      quoted: isSet(object.quoted) ? ResponseQuotedParams.fromJSON(object.quoted) : undefined,
      currentValue: isSet(object.currentValue) ? String(object.currentValue) : ""
    };
  },

  toJSON(message: ResponseTradeLeg): unknown {
    const obj: any = {};
    message.legId !== undefined && (obj.legId = Math.round(message.legId));
    message.type !== undefined && (obj.type = message.type);
    message.backing !== undefined && (obj.backing = message.backing ? DecCoin.toJSON(message.backing) : undefined);
    message.premium !== undefined && (obj.premium = message.premium ? DecCoin.toJSON(message.premium) : undefined);
    message.cost !== undefined && (obj.cost = message.cost ? DecCoin.toJSON(message.cost) : undefined);
    message.quantity !== undefined && (obj.quantity = message.quantity ? DecCoin.toJSON(message.quantity) : undefined);
    message.long !== undefined && (obj.long = base64FromBytes(message.long !== undefined ? message.long : new Uint8Array()));
    message.short !== undefined && (obj.short = base64FromBytes(message.short !== undefined ? message.short : new Uint8Array()));
    message.quoted !== undefined && (obj.quoted = message.quoted ? ResponseQuotedParams.toJSON(message.quoted) : undefined);
    message.currentValue !== undefined && (obj.currentValue = message.currentValue);
    return obj;
  },

  fromPartial(object: DeepPartial<ResponseTradeLeg>): ResponseTradeLeg {
    const message = createBaseResponseTradeLeg();
    message.legId = object.legId ?? 0;
    message.type = object.type ?? "";
    message.backing = object.backing !== undefined && object.backing !== null ? DecCoin.fromPartial(object.backing) : undefined;
    message.premium = object.premium !== undefined && object.premium !== null ? DecCoin.fromPartial(object.premium) : undefined;
    message.cost = object.cost !== undefined && object.cost !== null ? DecCoin.fromPartial(object.cost) : undefined;
    message.quantity = object.quantity !== undefined && object.quantity !== null ? DecCoin.fromPartial(object.quantity) : undefined;
    message.long = object.long ?? new Uint8Array();
    message.short = object.short ?? new Uint8Array();
    message.quoted = object.quoted !== undefined && object.quoted !== null ? ResponseQuotedParams.fromPartial(object.quoted) : undefined;
    message.currentValue = object.currentValue ?? "";
    return message;
  }

};

function createBaseQueryTradeResponse(): QueryTradeResponse {
  return {
    id: 0,
    market: "",
    duration: "",
    order: "",
    taker: new Uint8Array(),
    quantity: undefined,
    legs: [],
    start: Long.ZERO,
    expiration: Long.ZERO,
    strike: undefined,
    commission: undefined,
    settleIncentive: undefined,
    consensus: undefined,
    currentValue: ""
  };
}

export const QueryTradeResponse = {
  encode(message: QueryTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }

    if (message.duration !== "") {
      writer.uint32(26).string(message.duration);
    }

    if (message.order !== "") {
      writer.uint32(34).string(message.order);
    }

    if (message.taker.length !== 0) {
      writer.uint32(42).bytes(message.taker);
    }

    if (message.quantity !== undefined) {
      DecCoin.encode(message.quantity, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.legs) {
      ResponseTradeLeg.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (!message.start.isZero()) {
      writer.uint32(64).int64(message.start);
    }

    if (!message.expiration.isZero()) {
      writer.uint32(72).int64(message.expiration);
    }

    if (message.strike !== undefined) {
      DecCoin.encode(message.strike, writer.uint32(82).fork()).ldelim();
    }

    if (message.commission !== undefined) {
      DecCoin.encode(message.commission, writer.uint32(90).fork()).ldelim();
    }

    if (message.settleIncentive !== undefined) {
      DecCoin.encode(message.settleIncentive, writer.uint32(98).fork()).ldelim();
    }

    if (message.consensus !== undefined) {
      DecCoin.encode(message.consensus, writer.uint32(106).fork()).ldelim();
    }

    if (message.currentValue !== "") {
      writer.uint32(114).string(message.currentValue);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTradeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.market = reader.string();
          break;

        case 3:
          message.duration = reader.string();
          break;

        case 4:
          message.order = reader.string();
          break;

        case 5:
          message.taker = reader.bytes();
          break;

        case 6:
          message.quantity = DecCoin.decode(reader, reader.uint32());
          break;

        case 7:
          message.legs.push(ResponseTradeLeg.decode(reader, reader.uint32()));
          break;

        case 8:
          message.start = (reader.int64() as Long);
          break;

        case 9:
          message.expiration = (reader.int64() as Long);
          break;

        case 10:
          message.strike = DecCoin.decode(reader, reader.uint32());
          break;

        case 11:
          message.commission = DecCoin.decode(reader, reader.uint32());
          break;

        case 12:
          message.settleIncentive = DecCoin.decode(reader, reader.uint32());
          break;

        case 13:
          message.consensus = DecCoin.decode(reader, reader.uint32());
          break;

        case 14:
          message.currentValue = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTradeResponse {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      order: isSet(object.order) ? String(object.order) : "",
      taker: isSet(object.taker) ? bytesFromBase64(object.taker) : new Uint8Array(),
      quantity: isSet(object.quantity) ? DecCoin.fromJSON(object.quantity) : undefined,
      legs: Array.isArray(object?.legs) ? object.legs.map((e: any) => ResponseTradeLeg.fromJSON(e)) : [],
      start: isSet(object.start) ? Long.fromString(object.start) : Long.ZERO,
      expiration: isSet(object.expiration) ? Long.fromString(object.expiration) : Long.ZERO,
      strike: isSet(object.strike) ? DecCoin.fromJSON(object.strike) : undefined,
      commission: isSet(object.commission) ? DecCoin.fromJSON(object.commission) : undefined,
      settleIncentive: isSet(object.settleIncentive) ? DecCoin.fromJSON(object.settleIncentive) : undefined,
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      currentValue: isSet(object.currentValue) ? String(object.currentValue) : ""
    };
  },

  toJSON(message: QueryTradeResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = message.duration);
    message.order !== undefined && (obj.order = message.order);
    message.taker !== undefined && (obj.taker = base64FromBytes(message.taker !== undefined ? message.taker : new Uint8Array()));
    message.quantity !== undefined && (obj.quantity = message.quantity ? DecCoin.toJSON(message.quantity) : undefined);

    if (message.legs) {
      obj.legs = message.legs.map(e => e ? ResponseTradeLeg.toJSON(e) : undefined);
    } else {
      obj.legs = [];
    }

    message.start !== undefined && (obj.start = (message.start || Long.ZERO).toString());
    message.expiration !== undefined && (obj.expiration = (message.expiration || Long.ZERO).toString());
    message.strike !== undefined && (obj.strike = message.strike ? DecCoin.toJSON(message.strike) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? DecCoin.toJSON(message.commission) : undefined);
    message.settleIncentive !== undefined && (obj.settleIncentive = message.settleIncentive ? DecCoin.toJSON(message.settleIncentive) : undefined);
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);
    message.currentValue !== undefined && (obj.currentValue = message.currentValue);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTradeResponse>): QueryTradeResponse {
    const message = createBaseQueryTradeResponse();
    message.id = object.id ?? 0;
    message.market = object.market ?? "";
    message.duration = object.duration ?? "";
    message.order = object.order ?? "";
    message.taker = object.taker ?? new Uint8Array();
    message.quantity = object.quantity !== undefined && object.quantity !== null ? DecCoin.fromPartial(object.quantity) : undefined;
    message.legs = object.legs?.map(e => ResponseTradeLeg.fromPartial(e)) || [];
    message.start = object.start !== undefined && object.start !== null ? Long.fromValue(object.start) : Long.ZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Long.fromValue(object.expiration) : Long.ZERO;
    message.strike = object.strike !== undefined && object.strike !== null ? DecCoin.fromPartial(object.strike) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? DecCoin.fromPartial(object.commission) : undefined;
    message.settleIncentive = object.settleIncentive !== undefined && object.settleIncentive !== null ? DecCoin.fromPartial(object.settleIncentive) : undefined;
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.currentValue = object.currentValue ?? "";
    return message;
  }

};