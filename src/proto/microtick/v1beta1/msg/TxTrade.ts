import { DataActiveTrade } from "../keeper/DataActiveTrade";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "@osmonauts/helpers";
export interface TxMarketTrade {
  market: string;
  duration: string;
  taker: Uint8Array;
  orderType: string;
  quantity: string;
}
export interface MarketTradeData {
  time: Long;
  trade: DataActiveTrade;
  consensus: DecCoin;
  commission: DecCoin;
  reward: Coin;
}

function createBaseTxMarketTrade(): TxMarketTrade {
  return {
    market: "",
    duration: "",
    taker: new Uint8Array(),
    orderType: "",
    quantity: ""
  };
}

export const TxMarketTrade = {
  encode(message: TxMarketTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }

    if (message.duration !== "") {
      writer.uint32(18).string(message.duration);
    }

    if (message.taker.length !== 0) {
      writer.uint32(26).bytes(message.taker);
    }

    if (message.orderType !== "") {
      writer.uint32(34).string(message.orderType);
    }

    if (message.quantity !== "") {
      writer.uint32(42).string(message.quantity);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxMarketTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxMarketTrade();

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
          message.taker = reader.bytes();
          break;

        case 4:
          message.orderType = reader.string();
          break;

        case 5:
          message.quantity = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxMarketTrade {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      taker: isSet(object.taker) ? bytesFromBase64(object.taker) : new Uint8Array(),
      orderType: isSet(object.orderType) ? String(object.orderType) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : ""
    };
  },

  toJSON(message: TxMarketTrade): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = message.duration);
    message.taker !== undefined && (obj.taker = base64FromBytes(message.taker !== undefined ? message.taker : new Uint8Array()));
    message.orderType !== undefined && (obj.orderType = message.orderType);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    return obj;
  },

  fromPartial(object: DeepPartial<TxMarketTrade>): TxMarketTrade {
    const message = createBaseTxMarketTrade();
    message.market = object.market ?? "";
    message.duration = object.duration ?? "";
    message.taker = object.taker ?? new Uint8Array();
    message.orderType = object.orderType ?? "";
    message.quantity = object.quantity ?? "";
    return message;
  }

};

function createBaseMarketTradeData(): MarketTradeData {
  return {
    time: Long.ZERO,
    trade: undefined,
    consensus: undefined,
    commission: undefined,
    reward: undefined
  };
}

export const MarketTradeData = {
  encode(message: MarketTradeData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.time.isZero()) {
      writer.uint32(8).int64(message.time);
    }

    if (message.trade !== undefined) {
      DataActiveTrade.encode(message.trade, writer.uint32(18).fork()).ldelim();
    }

    if (message.consensus !== undefined) {
      DecCoin.encode(message.consensus, writer.uint32(26).fork()).ldelim();
    }

    if (message.commission !== undefined) {
      DecCoin.encode(message.commission, writer.uint32(34).fork()).ldelim();
    }

    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketTradeData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketTradeData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.time = (reader.int64() as Long);
          break;

        case 2:
          message.trade = DataActiveTrade.decode(reader, reader.uint32());
          break;

        case 3:
          message.consensus = DecCoin.decode(reader, reader.uint32());
          break;

        case 4:
          message.commission = DecCoin.decode(reader, reader.uint32());
          break;

        case 5:
          message.reward = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MarketTradeData {
    return {
      time: isSet(object.time) ? Long.fromString(object.time) : Long.ZERO,
      trade: isSet(object.trade) ? DataActiveTrade.fromJSON(object.trade) : undefined,
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      commission: isSet(object.commission) ? DecCoin.fromJSON(object.commission) : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined
    };
  },

  toJSON(message: MarketTradeData): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = (message.time || Long.ZERO).toString());
    message.trade !== undefined && (obj.trade = message.trade ? DataActiveTrade.toJSON(message.trade) : undefined);
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? DecCoin.toJSON(message.commission) : undefined);
    message.reward !== undefined && (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketTradeData>): MarketTradeData {
    const message = createBaseMarketTradeData();
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.ZERO;
    message.trade = object.trade !== undefined && object.trade !== null ? DataActiveTrade.fromPartial(object.trade) : undefined;
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? DecCoin.fromPartial(object.commission) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    return message;
  }

};