import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface QuerySyntheticRequest {
  market: string;
  duration: string;
  offset: number;
  limit: number;
}
export interface SyntheticQuote {
  spot: DecCoin;
  quantity: DecCoin;
}
export interface QuerySyntheticResponse {
  consensus: DecCoin;
  sumBacking: DecCoin;
  sumWeight: DecCoin;
  offset: number;
  limit: number;
  totalAsks: number;
  totalBids: number;
  asks: SyntheticQuote[];
  bids: SyntheticQuote[];
}

function createBaseQuerySyntheticRequest(): QuerySyntheticRequest {
  return {
    market: "",
    duration: "",
    offset: 0,
    limit: 0
  };
}

export const QuerySyntheticRequest = {
  encode(message: QuerySyntheticRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySyntheticRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySyntheticRequest();

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

  fromJSON(object: any): QuerySyntheticRequest {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0
    };
  },

  toJSON(message: QuerySyntheticRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = message.duration);
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySyntheticRequest>): QuerySyntheticRequest {
    const message = createBaseQuerySyntheticRequest();
    message.market = object.market ?? "";
    message.duration = object.duration ?? "";
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  }

};

function createBaseSyntheticQuote(): SyntheticQuote {
  return {
    spot: undefined,
    quantity: undefined
  };
}

export const SyntheticQuote = {
  encode(message: SyntheticQuote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.spot !== undefined) {
      DecCoin.encode(message.spot, writer.uint32(42).fork()).ldelim();
    }

    if (message.quantity !== undefined) {
      DecCoin.encode(message.quantity, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SyntheticQuote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSyntheticQuote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 5:
          message.spot = DecCoin.decode(reader, reader.uint32());
          break;

        case 6:
          message.quantity = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SyntheticQuote {
    return {
      spot: isSet(object.spot) ? DecCoin.fromJSON(object.spot) : undefined,
      quantity: isSet(object.quantity) ? DecCoin.fromJSON(object.quantity) : undefined
    };
  },

  toJSON(message: SyntheticQuote): unknown {
    const obj: any = {};
    message.spot !== undefined && (obj.spot = message.spot ? DecCoin.toJSON(message.spot) : undefined);
    message.quantity !== undefined && (obj.quantity = message.quantity ? DecCoin.toJSON(message.quantity) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SyntheticQuote>): SyntheticQuote {
    const message = createBaseSyntheticQuote();
    message.spot = object.spot !== undefined && object.spot !== null ? DecCoin.fromPartial(object.spot) : undefined;
    message.quantity = object.quantity !== undefined && object.quantity !== null ? DecCoin.fromPartial(object.quantity) : undefined;
    return message;
  }

};

function createBaseQuerySyntheticResponse(): QuerySyntheticResponse {
  return {
    consensus: undefined,
    sumBacking: undefined,
    sumWeight: undefined,
    offset: 0,
    limit: 0,
    totalAsks: 0,
    totalBids: 0,
    asks: [],
    bids: []
  };
}

export const QuerySyntheticResponse = {
  encode(message: QuerySyntheticResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    if (message.totalAsks !== 0) {
      writer.uint32(48).uint32(message.totalAsks);
    }

    if (message.totalBids !== 0) {
      writer.uint32(56).uint32(message.totalBids);
    }

    for (const v of message.asks) {
      SyntheticQuote.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.bids) {
      SyntheticQuote.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySyntheticResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySyntheticResponse();

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
          message.totalAsks = reader.uint32();
          break;

        case 7:
          message.totalBids = reader.uint32();
          break;

        case 8:
          message.asks.push(SyntheticQuote.decode(reader, reader.uint32()));
          break;

        case 9:
          message.bids.push(SyntheticQuote.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuerySyntheticResponse {
    return {
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      sumBacking: isSet(object.sumBacking) ? DecCoin.fromJSON(object.sumBacking) : undefined,
      sumWeight: isSet(object.sumWeight) ? DecCoin.fromJSON(object.sumWeight) : undefined,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      totalAsks: isSet(object.totalAsks) ? Number(object.totalAsks) : 0,
      totalBids: isSet(object.totalBids) ? Number(object.totalBids) : 0,
      asks: Array.isArray(object?.asks) ? object.asks.map((e: any) => SyntheticQuote.fromJSON(e)) : [],
      bids: Array.isArray(object?.bids) ? object.bids.map((e: any) => SyntheticQuote.fromJSON(e)) : []
    };
  },

  toJSON(message: QuerySyntheticResponse): unknown {
    const obj: any = {};
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);
    message.sumBacking !== undefined && (obj.sumBacking = message.sumBacking ? DecCoin.toJSON(message.sumBacking) : undefined);
    message.sumWeight !== undefined && (obj.sumWeight = message.sumWeight ? DecCoin.toJSON(message.sumWeight) : undefined);
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.totalAsks !== undefined && (obj.totalAsks = Math.round(message.totalAsks));
    message.totalBids !== undefined && (obj.totalBids = Math.round(message.totalBids));

    if (message.asks) {
      obj.asks = message.asks.map(e => e ? SyntheticQuote.toJSON(e) : undefined);
    } else {
      obj.asks = [];
    }

    if (message.bids) {
      obj.bids = message.bids.map(e => e ? SyntheticQuote.toJSON(e) : undefined);
    } else {
      obj.bids = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QuerySyntheticResponse>): QuerySyntheticResponse {
    const message = createBaseQuerySyntheticResponse();
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.sumBacking = object.sumBacking !== undefined && object.sumBacking !== null ? DecCoin.fromPartial(object.sumBacking) : undefined;
    message.sumWeight = object.sumWeight !== undefined && object.sumWeight !== null ? DecCoin.fromPartial(object.sumWeight) : undefined;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    message.totalAsks = object.totalAsks ?? 0;
    message.totalBids = object.totalBids ?? 0;
    message.asks = object.asks?.map(e => SyntheticQuote.fromPartial(e)) || [];
    message.bids = object.bids?.map(e => SyntheticQuote.fromPartial(e)) || [];
    return message;
  }

};