import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, Long } from "@osmonauts/helpers";
export interface DataQuotedParams {
  id: number;
  final: boolean;
  premium: DecCoin;
  remainBacking: DecCoin;
  spot: DecCoin;
}
export interface DataTradeLeg {
  legId: number;
  type: boolean;
  backing: DecCoin;
  premium: DecCoin;
  cost: DecCoin;
  quantity: DecCoin;
  long: Uint8Array;
  short: Uint8Array;
  quoted: DataQuotedParams;
}
export interface DataActiveTrade {
  id: number;
  market: string;
  duration: string;
  order: string;
  taker: Uint8Array;
  quantity: DecCoin;
  legs: DataTradeLeg[];
  start: Long;
  expiration: Long;
  strike: DecCoin;
  commission: DecCoin;
  settleIncentive: DecCoin;
}

function createBaseDataQuotedParams(): DataQuotedParams {
  return {
    id: 0,
    final: false,
    premium: undefined,
    remainBacking: undefined,
    spot: undefined
  };
}

export const DataQuotedParams = {
  encode(message: DataQuotedParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.final === true) {
      writer.uint32(16).bool(message.final);
    }

    if (message.premium !== undefined) {
      DecCoin.encode(message.premium, writer.uint32(26).fork()).ldelim();
    }

    if (message.remainBacking !== undefined) {
      DecCoin.encode(message.remainBacking, writer.uint32(34).fork()).ldelim();
    }

    if (message.spot !== undefined) {
      DecCoin.encode(message.spot, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataQuotedParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataQuotedParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.final = reader.bool();
          break;

        case 3:
          message.premium = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.remainBacking = DecCoin.decode(reader, reader.uint32());
          break;

        case 5:
          message.spot = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DataQuotedParams {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      final: isSet(object.final) ? Boolean(object.final) : false,
      premium: isSet(object.premium) ? DecCoin.fromJSON(object.premium) : undefined,
      remainBacking: isSet(object.remainBacking) ? DecCoin.fromJSON(object.remainBacking) : undefined,
      spot: isSet(object.spot) ? DecCoin.fromJSON(object.spot) : undefined
    };
  },

  toJSON(message: DataQuotedParams): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.final !== undefined && (obj.final = message.final);
    message.premium !== undefined && (obj.premium = message.premium ? DecCoin.toJSON(message.premium) : undefined);
    message.remainBacking !== undefined && (obj.remainBacking = message.remainBacking ? DecCoin.toJSON(message.remainBacking) : undefined);
    message.spot !== undefined && (obj.spot = message.spot ? DecCoin.toJSON(message.spot) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DataQuotedParams>): DataQuotedParams {
    const message = createBaseDataQuotedParams();
    message.id = object.id ?? 0;
    message.final = object.final ?? false;
    message.premium = object.premium !== undefined && object.premium !== null ? DecCoin.fromPartial(object.premium) : undefined;
    message.remainBacking = object.remainBacking !== undefined && object.remainBacking !== null ? DecCoin.fromPartial(object.remainBacking) : undefined;
    message.spot = object.spot !== undefined && object.spot !== null ? DecCoin.fromPartial(object.spot) : undefined;
    return message;
  }

};

function createBaseDataTradeLeg(): DataTradeLeg {
  return {
    legId: 0,
    type: false,
    backing: undefined,
    premium: undefined,
    cost: undefined,
    quantity: undefined,
    long: new Uint8Array(),
    short: new Uint8Array(),
    quoted: undefined
  };
}

export const DataTradeLeg = {
  encode(message: DataTradeLeg, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legId !== 0) {
      writer.uint32(8).uint32(message.legId);
    }

    if (message.type === true) {
      writer.uint32(16).bool(message.type);
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
      DataQuotedParams.encode(message.quoted, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataTradeLeg {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataTradeLeg();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.legId = reader.uint32();
          break;

        case 2:
          message.type = reader.bool();
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
          message.quoted = DataQuotedParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DataTradeLeg {
    return {
      legId: isSet(object.legId) ? Number(object.legId) : 0,
      type: isSet(object.type) ? Boolean(object.type) : false,
      backing: isSet(object.backing) ? DecCoin.fromJSON(object.backing) : undefined,
      premium: isSet(object.premium) ? DecCoin.fromJSON(object.premium) : undefined,
      cost: isSet(object.cost) ? DecCoin.fromJSON(object.cost) : undefined,
      quantity: isSet(object.quantity) ? DecCoin.fromJSON(object.quantity) : undefined,
      long: isSet(object.long) ? bytesFromBase64(object.long) : new Uint8Array(),
      short: isSet(object.short) ? bytesFromBase64(object.short) : new Uint8Array(),
      quoted: isSet(object.quoted) ? DataQuotedParams.fromJSON(object.quoted) : undefined
    };
  },

  toJSON(message: DataTradeLeg): unknown {
    const obj: any = {};
    message.legId !== undefined && (obj.legId = Math.round(message.legId));
    message.type !== undefined && (obj.type = message.type);
    message.backing !== undefined && (obj.backing = message.backing ? DecCoin.toJSON(message.backing) : undefined);
    message.premium !== undefined && (obj.premium = message.premium ? DecCoin.toJSON(message.premium) : undefined);
    message.cost !== undefined && (obj.cost = message.cost ? DecCoin.toJSON(message.cost) : undefined);
    message.quantity !== undefined && (obj.quantity = message.quantity ? DecCoin.toJSON(message.quantity) : undefined);
    message.long !== undefined && (obj.long = base64FromBytes(message.long !== undefined ? message.long : new Uint8Array()));
    message.short !== undefined && (obj.short = base64FromBytes(message.short !== undefined ? message.short : new Uint8Array()));
    message.quoted !== undefined && (obj.quoted = message.quoted ? DataQuotedParams.toJSON(message.quoted) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DataTradeLeg>): DataTradeLeg {
    const message = createBaseDataTradeLeg();
    message.legId = object.legId ?? 0;
    message.type = object.type ?? false;
    message.backing = object.backing !== undefined && object.backing !== null ? DecCoin.fromPartial(object.backing) : undefined;
    message.premium = object.premium !== undefined && object.premium !== null ? DecCoin.fromPartial(object.premium) : undefined;
    message.cost = object.cost !== undefined && object.cost !== null ? DecCoin.fromPartial(object.cost) : undefined;
    message.quantity = object.quantity !== undefined && object.quantity !== null ? DecCoin.fromPartial(object.quantity) : undefined;
    message.long = object.long ?? new Uint8Array();
    message.short = object.short ?? new Uint8Array();
    message.quoted = object.quoted !== undefined && object.quoted !== null ? DataQuotedParams.fromPartial(object.quoted) : undefined;
    return message;
  }

};

function createBaseDataActiveTrade(): DataActiveTrade {
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
    settleIncentive: undefined
  };
}

export const DataActiveTrade = {
  encode(message: DataActiveTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      DataTradeLeg.encode(v!, writer.uint32(58).fork()).ldelim();
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

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataActiveTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataActiveTrade();

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
          message.legs.push(DataTradeLeg.decode(reader, reader.uint32()));
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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DataActiveTrade {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      order: isSet(object.order) ? String(object.order) : "",
      taker: isSet(object.taker) ? bytesFromBase64(object.taker) : new Uint8Array(),
      quantity: isSet(object.quantity) ? DecCoin.fromJSON(object.quantity) : undefined,
      legs: Array.isArray(object?.legs) ? object.legs.map((e: any) => DataTradeLeg.fromJSON(e)) : [],
      start: isSet(object.start) ? Long.fromString(object.start) : Long.ZERO,
      expiration: isSet(object.expiration) ? Long.fromString(object.expiration) : Long.ZERO,
      strike: isSet(object.strike) ? DecCoin.fromJSON(object.strike) : undefined,
      commission: isSet(object.commission) ? DecCoin.fromJSON(object.commission) : undefined,
      settleIncentive: isSet(object.settleIncentive) ? DecCoin.fromJSON(object.settleIncentive) : undefined
    };
  },

  toJSON(message: DataActiveTrade): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = message.duration);
    message.order !== undefined && (obj.order = message.order);
    message.taker !== undefined && (obj.taker = base64FromBytes(message.taker !== undefined ? message.taker : new Uint8Array()));
    message.quantity !== undefined && (obj.quantity = message.quantity ? DecCoin.toJSON(message.quantity) : undefined);

    if (message.legs) {
      obj.legs = message.legs.map(e => e ? DataTradeLeg.toJSON(e) : undefined);
    } else {
      obj.legs = [];
    }

    message.start !== undefined && (obj.start = (message.start || Long.ZERO).toString());
    message.expiration !== undefined && (obj.expiration = (message.expiration || Long.ZERO).toString());
    message.strike !== undefined && (obj.strike = message.strike ? DecCoin.toJSON(message.strike) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? DecCoin.toJSON(message.commission) : undefined);
    message.settleIncentive !== undefined && (obj.settleIncentive = message.settleIncentive ? DecCoin.toJSON(message.settleIncentive) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DataActiveTrade>): DataActiveTrade {
    const message = createBaseDataActiveTrade();
    message.id = object.id ?? 0;
    message.market = object.market ?? "";
    message.duration = object.duration ?? "";
    message.order = object.order ?? "";
    message.taker = object.taker ?? new Uint8Array();
    message.quantity = object.quantity !== undefined && object.quantity !== null ? DecCoin.fromPartial(object.quantity) : undefined;
    message.legs = object.legs?.map(e => DataTradeLeg.fromPartial(e)) || [];
    message.start = object.start !== undefined && object.start !== null ? Long.fromValue(object.start) : Long.ZERO;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Long.fromValue(object.expiration) : Long.ZERO;
    message.strike = object.strike !== undefined && object.strike !== null ? DecCoin.fromPartial(object.strike) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? DecCoin.fromPartial(object.commission) : undefined;
    message.settleIncentive = object.settleIncentive !== undefined && object.settleIncentive !== null ? DecCoin.fromPartial(object.settleIncentive) : undefined;
    return message;
  }

};