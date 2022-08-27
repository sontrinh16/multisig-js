import { OrderedList } from "./OrderedList";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface DataOrderBook {
  name: string;
  callAsks: OrderedList;
  callBids: OrderedList;
  putAsks: OrderedList;
  putBids: OrderedList;
  sumBacking: DecCoin;
  sumWeight: DecCoin;
}
export interface DataMarket {
  market: string;
  description: string;
  consensus: DecCoin;
  orderBooks: DataOrderBook[];
  totalBacking: DecCoin;
  totalSpots: string;
  totalWeight: DecCoin;
  quotes: OrderedList;
}

function createBaseDataOrderBook(): DataOrderBook {
  return {
    name: "",
    callAsks: undefined,
    callBids: undefined,
    putAsks: undefined,
    putBids: undefined,
    sumBacking: undefined,
    sumWeight: undefined
  };
}

export const DataOrderBook = {
  encode(message: DataOrderBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.callAsks !== undefined) {
      OrderedList.encode(message.callAsks, writer.uint32(18).fork()).ldelim();
    }

    if (message.callBids !== undefined) {
      OrderedList.encode(message.callBids, writer.uint32(26).fork()).ldelim();
    }

    if (message.putAsks !== undefined) {
      OrderedList.encode(message.putAsks, writer.uint32(34).fork()).ldelim();
    }

    if (message.putBids !== undefined) {
      OrderedList.encode(message.putBids, writer.uint32(42).fork()).ldelim();
    }

    if (message.sumBacking !== undefined) {
      DecCoin.encode(message.sumBacking, writer.uint32(50).fork()).ldelim();
    }

    if (message.sumWeight !== undefined) {
      DecCoin.encode(message.sumWeight, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataOrderBook {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataOrderBook();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.callAsks = OrderedList.decode(reader, reader.uint32());
          break;

        case 3:
          message.callBids = OrderedList.decode(reader, reader.uint32());
          break;

        case 4:
          message.putAsks = OrderedList.decode(reader, reader.uint32());
          break;

        case 5:
          message.putBids = OrderedList.decode(reader, reader.uint32());
          break;

        case 6:
          message.sumBacking = DecCoin.decode(reader, reader.uint32());
          break;

        case 7:
          message.sumWeight = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DataOrderBook {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      callAsks: isSet(object.callAsks) ? OrderedList.fromJSON(object.callAsks) : undefined,
      callBids: isSet(object.callBids) ? OrderedList.fromJSON(object.callBids) : undefined,
      putAsks: isSet(object.putAsks) ? OrderedList.fromJSON(object.putAsks) : undefined,
      putBids: isSet(object.putBids) ? OrderedList.fromJSON(object.putBids) : undefined,
      sumBacking: isSet(object.sumBacking) ? DecCoin.fromJSON(object.sumBacking) : undefined,
      sumWeight: isSet(object.sumWeight) ? DecCoin.fromJSON(object.sumWeight) : undefined
    };
  },

  toJSON(message: DataOrderBook): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.callAsks !== undefined && (obj.callAsks = message.callAsks ? OrderedList.toJSON(message.callAsks) : undefined);
    message.callBids !== undefined && (obj.callBids = message.callBids ? OrderedList.toJSON(message.callBids) : undefined);
    message.putAsks !== undefined && (obj.putAsks = message.putAsks ? OrderedList.toJSON(message.putAsks) : undefined);
    message.putBids !== undefined && (obj.putBids = message.putBids ? OrderedList.toJSON(message.putBids) : undefined);
    message.sumBacking !== undefined && (obj.sumBacking = message.sumBacking ? DecCoin.toJSON(message.sumBacking) : undefined);
    message.sumWeight !== undefined && (obj.sumWeight = message.sumWeight ? DecCoin.toJSON(message.sumWeight) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DataOrderBook>): DataOrderBook {
    const message = createBaseDataOrderBook();
    message.name = object.name ?? "";
    message.callAsks = object.callAsks !== undefined && object.callAsks !== null ? OrderedList.fromPartial(object.callAsks) : undefined;
    message.callBids = object.callBids !== undefined && object.callBids !== null ? OrderedList.fromPartial(object.callBids) : undefined;
    message.putAsks = object.putAsks !== undefined && object.putAsks !== null ? OrderedList.fromPartial(object.putAsks) : undefined;
    message.putBids = object.putBids !== undefined && object.putBids !== null ? OrderedList.fromPartial(object.putBids) : undefined;
    message.sumBacking = object.sumBacking !== undefined && object.sumBacking !== null ? DecCoin.fromPartial(object.sumBacking) : undefined;
    message.sumWeight = object.sumWeight !== undefined && object.sumWeight !== null ? DecCoin.fromPartial(object.sumWeight) : undefined;
    return message;
  }

};

function createBaseDataMarket(): DataMarket {
  return {
    market: "",
    description: "",
    consensus: undefined,
    orderBooks: [],
    totalBacking: undefined,
    totalSpots: "",
    totalWeight: undefined,
    quotes: undefined
  };
}

export const DataMarket = {
  encode(message: DataMarket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      DataOrderBook.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.totalBacking !== undefined) {
      DecCoin.encode(message.totalBacking, writer.uint32(42).fork()).ldelim();
    }

    if (message.totalSpots !== "") {
      writer.uint32(50).string(message.totalSpots);
    }

    if (message.totalWeight !== undefined) {
      DecCoin.encode(message.totalWeight, writer.uint32(58).fork()).ldelim();
    }

    if (message.quotes !== undefined) {
      OrderedList.encode(message.quotes, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataMarket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataMarket();

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
          message.orderBooks.push(DataOrderBook.decode(reader, reader.uint32()));
          break;

        case 5:
          message.totalBacking = DecCoin.decode(reader, reader.uint32());
          break;

        case 6:
          message.totalSpots = reader.string();
          break;

        case 7:
          message.totalWeight = DecCoin.decode(reader, reader.uint32());
          break;

        case 8:
          message.quotes = OrderedList.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DataMarket {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      description: isSet(object.description) ? String(object.description) : "",
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      orderBooks: Array.isArray(object?.orderBooks) ? object.orderBooks.map((e: any) => DataOrderBook.fromJSON(e)) : [],
      totalBacking: isSet(object.totalBacking) ? DecCoin.fromJSON(object.totalBacking) : undefined,
      totalSpots: isSet(object.totalSpots) ? String(object.totalSpots) : "",
      totalWeight: isSet(object.totalWeight) ? DecCoin.fromJSON(object.totalWeight) : undefined,
      quotes: isSet(object.quotes) ? OrderedList.fromJSON(object.quotes) : undefined
    };
  },

  toJSON(message: DataMarket): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.description !== undefined && (obj.description = message.description);
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);

    if (message.orderBooks) {
      obj.orderBooks = message.orderBooks.map(e => e ? DataOrderBook.toJSON(e) : undefined);
    } else {
      obj.orderBooks = [];
    }

    message.totalBacking !== undefined && (obj.totalBacking = message.totalBacking ? DecCoin.toJSON(message.totalBacking) : undefined);
    message.totalSpots !== undefined && (obj.totalSpots = message.totalSpots);
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight ? DecCoin.toJSON(message.totalWeight) : undefined);
    message.quotes !== undefined && (obj.quotes = message.quotes ? OrderedList.toJSON(message.quotes) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DataMarket>): DataMarket {
    const message = createBaseDataMarket();
    message.market = object.market ?? "";
    message.description = object.description ?? "";
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.orderBooks = object.orderBooks?.map(e => DataOrderBook.fromPartial(e)) || [];
    message.totalBacking = object.totalBacking !== undefined && object.totalBacking !== null ? DecCoin.fromPartial(object.totalBacking) : undefined;
    message.totalSpots = object.totalSpots ?? "";
    message.totalWeight = object.totalWeight !== undefined && object.totalWeight !== null ? DecCoin.fromPartial(object.totalWeight) : undefined;
    message.quotes = object.quotes !== undefined && object.quotes !== null ? OrderedList.fromPartial(object.quotes) : undefined;
    return message;
  }

};