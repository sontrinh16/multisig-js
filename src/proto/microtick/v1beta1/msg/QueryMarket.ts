import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface QueryMarketRequest {
  market: string;
}
export interface MarketOrderBookStatus {
  name: string;
  sumBacking: DecCoin;
  sumWeight: DecCoin;
  insideAsk: DecCoin;
  insideBid: DecCoin;
  insideCallAsk: DecCoin;
  insideCallBid: DecCoin;
  insidePutAsk: DecCoin;
  insidePutBid: DecCoin;
}
export interface QueryMarketResponse {
  market: string;
  description: string;
  consensus: DecCoin;
  orderBooks: MarketOrderBookStatus[];
  totalBacking: DecCoin;
  totalWeight: DecCoin;
}

function createBaseQueryMarketRequest(): QueryMarketRequest {
  return {
    market: ""
  };
}

export const QueryMarketRequest = {
  encode(message: QueryMarketRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryMarketRequest {
    return {
      market: isSet(object.market) ? String(object.market) : ""
    };
  },

  toJSON(message: QueryMarketRequest): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMarketRequest>): QueryMarketRequest {
    const message = createBaseQueryMarketRequest();
    message.market = object.market ?? "";
    return message;
  }

};

function createBaseMarketOrderBookStatus(): MarketOrderBookStatus {
  return {
    name: "",
    sumBacking: undefined,
    sumWeight: undefined,
    insideAsk: undefined,
    insideBid: undefined,
    insideCallAsk: undefined,
    insideCallBid: undefined,
    insidePutAsk: undefined,
    insidePutBid: undefined
  };
}

export const MarketOrderBookStatus = {
  encode(message: MarketOrderBookStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.sumBacking !== undefined) {
      DecCoin.encode(message.sumBacking, writer.uint32(18).fork()).ldelim();
    }

    if (message.sumWeight !== undefined) {
      DecCoin.encode(message.sumWeight, writer.uint32(26).fork()).ldelim();
    }

    if (message.insideAsk !== undefined) {
      DecCoin.encode(message.insideAsk, writer.uint32(34).fork()).ldelim();
    }

    if (message.insideBid !== undefined) {
      DecCoin.encode(message.insideBid, writer.uint32(42).fork()).ldelim();
    }

    if (message.insideCallAsk !== undefined) {
      DecCoin.encode(message.insideCallAsk, writer.uint32(50).fork()).ldelim();
    }

    if (message.insideCallBid !== undefined) {
      DecCoin.encode(message.insideCallBid, writer.uint32(58).fork()).ldelim();
    }

    if (message.insidePutAsk !== undefined) {
      DecCoin.encode(message.insidePutAsk, writer.uint32(66).fork()).ldelim();
    }

    if (message.insidePutBid !== undefined) {
      DecCoin.encode(message.insidePutBid, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketOrderBookStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketOrderBookStatus();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.sumBacking = DecCoin.decode(reader, reader.uint32());
          break;

        case 3:
          message.sumWeight = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.insideAsk = DecCoin.decode(reader, reader.uint32());
          break;

        case 5:
          message.insideBid = DecCoin.decode(reader, reader.uint32());
          break;

        case 6:
          message.insideCallAsk = DecCoin.decode(reader, reader.uint32());
          break;

        case 7:
          message.insideCallBid = DecCoin.decode(reader, reader.uint32());
          break;

        case 8:
          message.insidePutAsk = DecCoin.decode(reader, reader.uint32());
          break;

        case 9:
          message.insidePutBid = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MarketOrderBookStatus {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      sumBacking: isSet(object.sumBacking) ? DecCoin.fromJSON(object.sumBacking) : undefined,
      sumWeight: isSet(object.sumWeight) ? DecCoin.fromJSON(object.sumWeight) : undefined,
      insideAsk: isSet(object.insideAsk) ? DecCoin.fromJSON(object.insideAsk) : undefined,
      insideBid: isSet(object.insideBid) ? DecCoin.fromJSON(object.insideBid) : undefined,
      insideCallAsk: isSet(object.insideCallAsk) ? DecCoin.fromJSON(object.insideCallAsk) : undefined,
      insideCallBid: isSet(object.insideCallBid) ? DecCoin.fromJSON(object.insideCallBid) : undefined,
      insidePutAsk: isSet(object.insidePutAsk) ? DecCoin.fromJSON(object.insidePutAsk) : undefined,
      insidePutBid: isSet(object.insidePutBid) ? DecCoin.fromJSON(object.insidePutBid) : undefined
    };
  },

  toJSON(message: MarketOrderBookStatus): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.sumBacking !== undefined && (obj.sumBacking = message.sumBacking ? DecCoin.toJSON(message.sumBacking) : undefined);
    message.sumWeight !== undefined && (obj.sumWeight = message.sumWeight ? DecCoin.toJSON(message.sumWeight) : undefined);
    message.insideAsk !== undefined && (obj.insideAsk = message.insideAsk ? DecCoin.toJSON(message.insideAsk) : undefined);
    message.insideBid !== undefined && (obj.insideBid = message.insideBid ? DecCoin.toJSON(message.insideBid) : undefined);
    message.insideCallAsk !== undefined && (obj.insideCallAsk = message.insideCallAsk ? DecCoin.toJSON(message.insideCallAsk) : undefined);
    message.insideCallBid !== undefined && (obj.insideCallBid = message.insideCallBid ? DecCoin.toJSON(message.insideCallBid) : undefined);
    message.insidePutAsk !== undefined && (obj.insidePutAsk = message.insidePutAsk ? DecCoin.toJSON(message.insidePutAsk) : undefined);
    message.insidePutBid !== undefined && (obj.insidePutBid = message.insidePutBid ? DecCoin.toJSON(message.insidePutBid) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketOrderBookStatus>): MarketOrderBookStatus {
    const message = createBaseMarketOrderBookStatus();
    message.name = object.name ?? "";
    message.sumBacking = object.sumBacking !== undefined && object.sumBacking !== null ? DecCoin.fromPartial(object.sumBacking) : undefined;
    message.sumWeight = object.sumWeight !== undefined && object.sumWeight !== null ? DecCoin.fromPartial(object.sumWeight) : undefined;
    message.insideAsk = object.insideAsk !== undefined && object.insideAsk !== null ? DecCoin.fromPartial(object.insideAsk) : undefined;
    message.insideBid = object.insideBid !== undefined && object.insideBid !== null ? DecCoin.fromPartial(object.insideBid) : undefined;
    message.insideCallAsk = object.insideCallAsk !== undefined && object.insideCallAsk !== null ? DecCoin.fromPartial(object.insideCallAsk) : undefined;
    message.insideCallBid = object.insideCallBid !== undefined && object.insideCallBid !== null ? DecCoin.fromPartial(object.insideCallBid) : undefined;
    message.insidePutAsk = object.insidePutAsk !== undefined && object.insidePutAsk !== null ? DecCoin.fromPartial(object.insidePutAsk) : undefined;
    message.insidePutBid = object.insidePutBid !== undefined && object.insidePutBid !== null ? DecCoin.fromPartial(object.insidePutBid) : undefined;
    return message;
  }

};

function createBaseQueryMarketResponse(): QueryMarketResponse {
  return {
    market: "",
    description: "",
    consensus: undefined,
    orderBooks: [],
    totalBacking: undefined,
    totalWeight: undefined
  };
}

export const QueryMarketResponse = {
  encode(message: QueryMarketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }

    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }

    if (message.consensus !== undefined) {
      DecCoin.encode(message.consensus, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.orderBooks) {
      MarketOrderBookStatus.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.totalBacking !== undefined) {
      DecCoin.encode(message.totalBacking, writer.uint32(42).fork()).ldelim();
    }

    if (message.totalWeight !== undefined) {
      DecCoin.encode(message.totalWeight, writer.uint32(50).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.market = reader.string();
          break;

        case 2:
          message.description = reader.string();
          break;

        case 3:
          message.consensus = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.orderBooks.push(MarketOrderBookStatus.decode(reader, reader.uint32()));
          break;

        case 5:
          message.totalBacking = DecCoin.decode(reader, reader.uint32());
          break;

        case 6:
          message.totalWeight = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryMarketResponse {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      description: isSet(object.description) ? String(object.description) : "",
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      orderBooks: Array.isArray(object?.orderBooks) ? object.orderBooks.map((e: any) => MarketOrderBookStatus.fromJSON(e)) : [],
      totalBacking: isSet(object.totalBacking) ? DecCoin.fromJSON(object.totalBacking) : undefined,
      totalWeight: isSet(object.totalWeight) ? DecCoin.fromJSON(object.totalWeight) : undefined
    };
  },

  toJSON(message: QueryMarketResponse): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.description !== undefined && (obj.description = message.description);
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);

    if (message.orderBooks) {
      obj.orderBooks = message.orderBooks.map(e => e ? MarketOrderBookStatus.toJSON(e) : undefined);
    } else {
      obj.orderBooks = [];
    }

    message.totalBacking !== undefined && (obj.totalBacking = message.totalBacking ? DecCoin.toJSON(message.totalBacking) : undefined);
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight ? DecCoin.toJSON(message.totalWeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMarketResponse>): QueryMarketResponse {
    const message = createBaseQueryMarketResponse();
    message.market = object.market ?? "";
    message.description = object.description ?? "";
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.orderBooks = object.orderBooks?.map(e => MarketOrderBookStatus.fromPartial(e)) || [];
    message.totalBacking = object.totalBacking !== undefined && object.totalBacking !== null ? DecCoin.fromPartial(object.totalBacking) : undefined;
    message.totalWeight = object.totalWeight !== undefined && object.totalWeight !== null ? DecCoin.fromPartial(object.totalWeight) : undefined;
    return message;
  }

};