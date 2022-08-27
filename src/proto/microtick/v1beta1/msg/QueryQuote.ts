import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface QueryQuoteRequest {
  id: number;
}
export interface QueryQuoteResponse {
  id: number;
  provider: Uint8Array;
  market: string;
  duration: string;
  backing: DecCoin;
  ask: DecCoin;
  bid: DecCoin;
  quantity: DecCoin;
  consensus: DecCoin;
  spot: DecCoin;
  callAsk: DecCoin;
  callBid: DecCoin;
  putAsk: DecCoin;
  putBid: DecCoin;
  modified: Long;
  canModify: Long;
}

function createBaseQueryQuoteRequest(): QueryQuoteRequest {
  return {
    id: 0
  };
}

export const QueryQuoteRequest = {
  encode(message: QueryQuoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteRequest();

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

  fromJSON(object: any): QueryQuoteRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0
    };
  },

  toJSON(message: QueryQuoteRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryQuoteRequest>): QueryQuoteRequest {
    const message = createBaseQueryQuoteRequest();
    message.id = object.id ?? 0;
    return message;
  }

};

function createBaseQueryQuoteResponse(): QueryQuoteResponse {
  return {
    id: 0,
    provider: new Uint8Array(),
    market: "",
    duration: "",
    backing: undefined,
    ask: undefined,
    bid: undefined,
    quantity: undefined,
    consensus: undefined,
    spot: undefined,
    callAsk: undefined,
    callBid: undefined,
    putAsk: undefined,
    putBid: undefined,
    modified: Long.ZERO,
    canModify: Long.ZERO
  };
}

export const QueryQuoteResponse = {
  encode(message: QueryQuoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.provider.length !== 0) {
      writer.uint32(18).bytes(message.provider);
    }

    if (message.market !== "") {
      writer.uint32(26).string(message.market);
    }

    if (message.duration !== "") {
      writer.uint32(34).string(message.duration);
    }

    if (message.backing !== undefined) {
      DecCoin.encode(message.backing, writer.uint32(42).fork()).ldelim();
    }

    if (message.ask !== undefined) {
      DecCoin.encode(message.ask, writer.uint32(50).fork()).ldelim();
    }

    if (message.bid !== undefined) {
      DecCoin.encode(message.bid, writer.uint32(58).fork()).ldelim();
    }

    if (message.quantity !== undefined) {
      DecCoin.encode(message.quantity, writer.uint32(66).fork()).ldelim();
    }

    if (message.consensus !== undefined) {
      DecCoin.encode(message.consensus, writer.uint32(74).fork()).ldelim();
    }

    if (message.spot !== undefined) {
      DecCoin.encode(message.spot, writer.uint32(82).fork()).ldelim();
    }

    if (message.callAsk !== undefined) {
      DecCoin.encode(message.callAsk, writer.uint32(90).fork()).ldelim();
    }

    if (message.callBid !== undefined) {
      DecCoin.encode(message.callBid, writer.uint32(98).fork()).ldelim();
    }

    if (message.putAsk !== undefined) {
      DecCoin.encode(message.putAsk, writer.uint32(106).fork()).ldelim();
    }

    if (message.putBid !== undefined) {
      DecCoin.encode(message.putBid, writer.uint32(114).fork()).ldelim();
    }

    if (!message.modified.isZero()) {
      writer.uint32(120).int64(message.modified);
    }

    if (!message.canModify.isZero()) {
      writer.uint32(128).int64(message.canModify);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryQuoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuoteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.provider = reader.bytes();
          break;

        case 3:
          message.market = reader.string();
          break;

        case 4:
          message.duration = reader.string();
          break;

        case 5:
          message.backing = DecCoin.decode(reader, reader.uint32());
          break;

        case 6:
          message.ask = DecCoin.decode(reader, reader.uint32());
          break;

        case 7:
          message.bid = DecCoin.decode(reader, reader.uint32());
          break;

        case 8:
          message.quantity = DecCoin.decode(reader, reader.uint32());
          break;

        case 9:
          message.consensus = DecCoin.decode(reader, reader.uint32());
          break;

        case 10:
          message.spot = DecCoin.decode(reader, reader.uint32());
          break;

        case 11:
          message.callAsk = DecCoin.decode(reader, reader.uint32());
          break;

        case 12:
          message.callBid = DecCoin.decode(reader, reader.uint32());
          break;

        case 13:
          message.putAsk = DecCoin.decode(reader, reader.uint32());
          break;

        case 14:
          message.putBid = DecCoin.decode(reader, reader.uint32());
          break;

        case 15:
          message.modified = (reader.int64() as Long);
          break;

        case 16:
          message.canModify = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryQuoteResponse {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      provider: isSet(object.provider) ? bytesFromBase64(object.provider) : new Uint8Array(),
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      backing: isSet(object.backing) ? DecCoin.fromJSON(object.backing) : undefined,
      ask: isSet(object.ask) ? DecCoin.fromJSON(object.ask) : undefined,
      bid: isSet(object.bid) ? DecCoin.fromJSON(object.bid) : undefined,
      quantity: isSet(object.quantity) ? DecCoin.fromJSON(object.quantity) : undefined,
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      spot: isSet(object.spot) ? DecCoin.fromJSON(object.spot) : undefined,
      callAsk: isSet(object.callAsk) ? DecCoin.fromJSON(object.callAsk) : undefined,
      callBid: isSet(object.callBid) ? DecCoin.fromJSON(object.callBid) : undefined,
      putAsk: isSet(object.putAsk) ? DecCoin.fromJSON(object.putAsk) : undefined,
      putBid: isSet(object.putBid) ? DecCoin.fromJSON(object.putBid) : undefined,
      modified: isSet(object.modified) ? Long.fromString(object.modified) : Long.ZERO,
      canModify: isSet(object.canModify) ? Long.fromString(object.canModify) : Long.ZERO
    };
  },

  toJSON(message: QueryQuoteResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.provider !== undefined && (obj.provider = base64FromBytes(message.provider !== undefined ? message.provider : new Uint8Array()));
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = message.duration);
    message.backing !== undefined && (obj.backing = message.backing ? DecCoin.toJSON(message.backing) : undefined);
    message.ask !== undefined && (obj.ask = message.ask ? DecCoin.toJSON(message.ask) : undefined);
    message.bid !== undefined && (obj.bid = message.bid ? DecCoin.toJSON(message.bid) : undefined);
    message.quantity !== undefined && (obj.quantity = message.quantity ? DecCoin.toJSON(message.quantity) : undefined);
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);
    message.spot !== undefined && (obj.spot = message.spot ? DecCoin.toJSON(message.spot) : undefined);
    message.callAsk !== undefined && (obj.callAsk = message.callAsk ? DecCoin.toJSON(message.callAsk) : undefined);
    message.callBid !== undefined && (obj.callBid = message.callBid ? DecCoin.toJSON(message.callBid) : undefined);
    message.putAsk !== undefined && (obj.putAsk = message.putAsk ? DecCoin.toJSON(message.putAsk) : undefined);
    message.putBid !== undefined && (obj.putBid = message.putBid ? DecCoin.toJSON(message.putBid) : undefined);
    message.modified !== undefined && (obj.modified = (message.modified || Long.ZERO).toString());
    message.canModify !== undefined && (obj.canModify = (message.canModify || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryQuoteResponse>): QueryQuoteResponse {
    const message = createBaseQueryQuoteResponse();
    message.id = object.id ?? 0;
    message.provider = object.provider ?? new Uint8Array();
    message.market = object.market ?? "";
    message.duration = object.duration ?? "";
    message.backing = object.backing !== undefined && object.backing !== null ? DecCoin.fromPartial(object.backing) : undefined;
    message.ask = object.ask !== undefined && object.ask !== null ? DecCoin.fromPartial(object.ask) : undefined;
    message.bid = object.bid !== undefined && object.bid !== null ? DecCoin.fromPartial(object.bid) : undefined;
    message.quantity = object.quantity !== undefined && object.quantity !== null ? DecCoin.fromPartial(object.quantity) : undefined;
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.spot = object.spot !== undefined && object.spot !== null ? DecCoin.fromPartial(object.spot) : undefined;
    message.callAsk = object.callAsk !== undefined && object.callAsk !== null ? DecCoin.fromPartial(object.callAsk) : undefined;
    message.callBid = object.callBid !== undefined && object.callBid !== null ? DecCoin.fromPartial(object.callBid) : undefined;
    message.putAsk = object.putAsk !== undefined && object.putAsk !== null ? DecCoin.fromPartial(object.putAsk) : undefined;
    message.putBid = object.putBid !== undefined && object.putBid !== null ? DecCoin.fromPartial(object.putBid) : undefined;
    message.modified = object.modified !== undefined && object.modified !== null ? Long.fromValue(object.modified) : Long.ZERO;
    message.canModify = object.canModify !== undefined && object.canModify !== null ? Long.fromValue(object.canModify) : Long.ZERO;
    return message;
  }

};