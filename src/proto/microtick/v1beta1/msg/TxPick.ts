import { DataActiveTrade } from "../keeper/DataActiveTrade";
import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "@osmonauts/helpers";
export interface TxPickTrade {
  id: number;
  taker: Uint8Array;
  orderType: string;
}
export interface PickTradeData {
  time: Long;
  market: string;
  duration: string;
  trade: DataActiveTrade;
  consensus: DecCoin;
  commission: DecCoin;
  reward: Coin;
}

function createBaseTxPickTrade(): TxPickTrade {
  return {
    id: 0,
    taker: new Uint8Array(),
    orderType: ""
  };
}

export const TxPickTrade = {
  encode(message: TxPickTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.taker.length !== 0) {
      writer.uint32(18).bytes(message.taker);
    }

    if (message.orderType !== "") {
      writer.uint32(26).string(message.orderType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxPickTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxPickTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.taker = reader.bytes();
          break;

        case 3:
          message.orderType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxPickTrade {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      taker: isSet(object.taker) ? bytesFromBase64(object.taker) : new Uint8Array(),
      orderType: isSet(object.orderType) ? String(object.orderType) : ""
    };
  },

  toJSON(message: TxPickTrade): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.taker !== undefined && (obj.taker = base64FromBytes(message.taker !== undefined ? message.taker : new Uint8Array()));
    message.orderType !== undefined && (obj.orderType = message.orderType);
    return obj;
  },

  fromPartial(object: DeepPartial<TxPickTrade>): TxPickTrade {
    const message = createBaseTxPickTrade();
    message.id = object.id ?? 0;
    message.taker = object.taker ?? new Uint8Array();
    message.orderType = object.orderType ?? "";
    return message;
  }

};

function createBasePickTradeData(): PickTradeData {
  return {
    time: Long.ZERO,
    market: "",
    duration: "",
    trade: undefined,
    consensus: undefined,
    commission: undefined,
    reward: undefined
  };
}

export const PickTradeData = {
  encode(message: PickTradeData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.time.isZero()) {
      writer.uint32(8).int64(message.time);
    }

    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }

    if (message.duration !== "") {
      writer.uint32(26).string(message.duration);
    }

    if (message.trade !== undefined) {
      DataActiveTrade.encode(message.trade, writer.uint32(34).fork()).ldelim();
    }

    if (message.consensus !== undefined) {
      DecCoin.encode(message.consensus, writer.uint32(42).fork()).ldelim();
    }

    if (message.commission !== undefined) {
      DecCoin.encode(message.commission, writer.uint32(50).fork()).ldelim();
    }

    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(58).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PickTradeData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePickTradeData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.time = (reader.int64() as Long);
          break;

        case 2:
          message.market = reader.string();
          break;

        case 3:
          message.duration = reader.string();
          break;

        case 4:
          message.trade = DataActiveTrade.decode(reader, reader.uint32());
          break;

        case 5:
          message.consensus = DecCoin.decode(reader, reader.uint32());
          break;

        case 6:
          message.commission = DecCoin.decode(reader, reader.uint32());
          break;

        case 7:
          message.reward = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PickTradeData {
    return {
      time: isSet(object.time) ? Long.fromString(object.time) : Long.ZERO,
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      trade: isSet(object.trade) ? DataActiveTrade.fromJSON(object.trade) : undefined,
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      commission: isSet(object.commission) ? DecCoin.fromJSON(object.commission) : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined
    };
  },

  toJSON(message: PickTradeData): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = (message.time || Long.ZERO).toString());
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = message.duration);
    message.trade !== undefined && (obj.trade = message.trade ? DataActiveTrade.toJSON(message.trade) : undefined);
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? DecCoin.toJSON(message.commission) : undefined);
    message.reward !== undefined && (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PickTradeData>): PickTradeData {
    const message = createBasePickTradeData();
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.ZERO;
    message.market = object.market ?? "";
    message.duration = object.duration ?? "";
    message.trade = object.trade !== undefined && object.trade !== null ? DataActiveTrade.fromPartial(object.trade) : undefined;
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? DecCoin.fromPartial(object.commission) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    return message;
  }

};