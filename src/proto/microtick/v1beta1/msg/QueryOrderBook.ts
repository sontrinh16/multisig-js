import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface QueryOrderBookRequest {
  market: string;
  duration: string;
  offset: number;
  limit: number;
}
export interface OrderBookQuote {
  id: number;
  premium: DecCoin;
  quantity: DecCoin;
}
export interface QueryOrderBookResponse {
  consensus: DecCoin;
  sumBacking: DecCoin;
  sumWeight: DecCoin;
  offset: number;
  limit: number;
  total: number;
  callAsks: OrderBookQuote[];
  callBids: OrderBookQuote[];
  putAsks: OrderBookQuote[];
  putBids: OrderBookQuote[];
}

function createBaseQueryOrderBookRequest(): QueryOrderBookRequest {
  return {
    market: "",
    duration: "",
    offset: 0,
    limit: 0
  };
}

export const QueryOrderBookRequest = {
  encode(message: QueryOrderBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }

    if (message.duration !== "") {
      writer.uint32(18).string(message.duration);
    }

    if (message.offset !== 0) {
      writer.uint32(24).uint32(message.offset);
    }

    if (message.limit !== 0) {
      writer.uint32(32).uint32(message.limit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderBookRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;

        case 2:
          message.duration = reader.string();
          break;

        case 3:
          message.offset = reader.uint32();
          break;

        case 4:
          message.limit = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOrderBookRequest {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0
    };
  },

  toJSON(message: QueryOrderBookRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = message.duration);
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryOrderBookRequest>): QueryOrderBookRequest {
    const message = createBaseQueryOrderBookRequest();
    message.market = object.market ?? "";
    message.duration = object.duration ?? "";
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  }

};

function createBaseOrderBookQuote(): OrderBookQuote {
  return {
    id: 0,
    premium: undefined,
    quantity: undefined
  };
}

export const OrderBookQuote = {
  encode(message: OrderBookQuote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.premium !== undefined) {
      DecCoin.encode(message.premium, writer.uint32(18).fork()).ldelim();
    }

    if (message.quantity !== undefined) {
      DecCoin.encode(message.quantity, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookQuote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookQuote();

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
          message.quantity = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): OrderBookQuote {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      premium: isSet(object.premium) ? DecCoin.fromJSON(object.premium) : undefined,
      quantity: isSet(object.quantity) ? DecCoin.fromJSON(object.quantity) : undefined
    };
  },

  toJSON(message: OrderBookQuote): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.premium !== undefined && (obj.premium = message.premium ? DecCoin.toJSON(message.premium) : undefined);
    message.quantity !== undefined && (obj.quantity = message.quantity ? DecCoin.toJSON(message.quantity) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<OrderBookQuote>): OrderBookQuote {
    const message = createBaseOrderBookQuote();
    message.id = object.id ?? 0;
    message.premium = object.premium !== undefined && object.premium !== null ? DecCoin.fromPartial(object.premium) : undefined;
    message.quantity = object.quantity !== undefined && object.quantity !== null ? DecCoin.fromPartial(object.quantity) : undefined;
    return message;
  }

};

function createBaseQueryOrderBookResponse(): QueryOrderBookResponse {
  return {
    consensus: undefined,
    sumBacking: undefined,
    sumWeight: undefined,
    offset: 0,
    limit: 0,
    total: 0,
    callAsks: [],
    callBids: [],
    putAsks: [],
    putBids: []
  };
}

export const QueryOrderBookResponse = {
  encode(message: QueryOrderBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensus !== undefined) {
      DecCoin.encode(message.consensus, writer.uint32(10).fork()).ldelim();
    }

    if (message.sumBacking !== undefined) {
      DecCoin.encode(message.sumBacking, writer.uint32(18).fork()).ldelim();
    }

    if (message.sumWeight !== undefined) {
      DecCoin.encode(message.sumWeight, writer.uint32(26).fork()).ldelim();
    }

    if (message.offset !== 0) {
      writer.uint32(32).uint32(message.offset);
    }

    if (message.limit !== 0) {
      writer.uint32(40).uint32(message.limit);
    }

    if (message.total !== 0) {
      writer.uint32(48).uint32(message.total);
    }

    for (const v of message.callAsks) {
      OrderBookQuote.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.callBids) {
      OrderBookQuote.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.putAsks) {
      OrderBookQuote.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.putBids) {
      OrderBookQuote.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderBookResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderBookResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.consensus = DecCoin.decode(reader, reader.uint32());
          break;

        case 2:
          message.sumBacking = DecCoin.decode(reader, reader.uint32());
          break;

        case 3:
          message.sumWeight = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.offset = reader.uint32();
          break;

        case 5:
          message.limit = reader.uint32();
          break;

        case 6:
          message.total = reader.uint32();
          break;

        case 7:
          message.callAsks.push(OrderBookQuote.decode(reader, reader.uint32()));
          break;

        case 8:
          message.callBids.push(OrderBookQuote.decode(reader, reader.uint32()));
          break;

        case 9:
          message.putAsks.push(OrderBookQuote.decode(reader, reader.uint32()));
          break;

        case 10:
          message.putBids.push(OrderBookQuote.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryOrderBookResponse {
    return {
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      sumBacking: isSet(object.sumBacking) ? DecCoin.fromJSON(object.sumBacking) : undefined,
      sumWeight: isSet(object.sumWeight) ? DecCoin.fromJSON(object.sumWeight) : undefined,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
      callAsks: Array.isArray(object?.callAsks) ? object.callAsks.map((e: any) => OrderBookQuote.fromJSON(e)) : [],
      callBids: Array.isArray(object?.callBids) ? object.callBids.map((e: any) => OrderBookQuote.fromJSON(e)) : [],
      putAsks: Array.isArray(object?.putAsks) ? object.putAsks.map((e: any) => OrderBookQuote.fromJSON(e)) : [],
      putBids: Array.isArray(object?.putBids) ? object.putBids.map((e: any) => OrderBookQuote.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryOrderBookResponse): unknown {
    const obj: any = {};
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);
    message.sumBacking !== undefined && (obj.sumBacking = message.sumBacking ? DecCoin.toJSON(message.sumBacking) : undefined);
    message.sumWeight !== undefined && (obj.sumWeight = message.sumWeight ? DecCoin.toJSON(message.sumWeight) : undefined);
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.total !== undefined && (obj.total = Math.round(message.total));

    if (message.callAsks) {
      obj.callAsks = message.callAsks.map(e => e ? OrderBookQuote.toJSON(e) : undefined);
    } else {
      obj.callAsks = [];
    }

    if (message.callBids) {
      obj.callBids = message.callBids.map(e => e ? OrderBookQuote.toJSON(e) : undefined);
    } else {
      obj.callBids = [];
    }

    if (message.putAsks) {
      obj.putAsks = message.putAsks.map(e => e ? OrderBookQuote.toJSON(e) : undefined);
    } else {
      obj.putAsks = [];
    }

    if (message.putBids) {
      obj.putBids = message.putBids.map(e => e ? OrderBookQuote.toJSON(e) : undefined);
    } else {
      obj.putBids = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryOrderBookResponse>): QueryOrderBookResponse {
    const message = createBaseQueryOrderBookResponse();
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.sumBacking = object.sumBacking !== undefined && object.sumBacking !== null ? DecCoin.fromPartial(object.sumBacking) : undefined;
    message.sumWeight = object.sumWeight !== undefined && object.sumWeight !== null ? DecCoin.fromPartial(object.sumWeight) : undefined;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    message.total = object.total ?? 0;
    message.callAsks = object.callAsks?.map(e => OrderBookQuote.fromPartial(e)) || [];
    message.callBids = object.callBids?.map(e => OrderBookQuote.fromPartial(e)) || [];
    message.putAsks = object.putAsks?.map(e => OrderBookQuote.fromPartial(e)) || [];
    message.putBids = object.putBids?.map(e => OrderBookQuote.fromPartial(e)) || [];
    return message;
  }

};