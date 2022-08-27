import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "@osmonauts/helpers";
export interface TxCreateQuote {
  market: string;
  duration: string;
  provider: Uint8Array;
  backing: string;
  spot: string;
  ask: string;
  bid: string;
}
export interface CreateQuoteData {
  time: Long;
  id: number;
  consensus: DecCoin;
  commission: DecCoin;
  reward: Coin;
  adjustment: string;
}

function createBaseTxCreateQuote(): TxCreateQuote {
  return {
    market: "",
    duration: "",
    provider: new Uint8Array(),
    backing: "",
    spot: "",
    ask: "",
    bid: ""
  };
}

export const TxCreateQuote = {
  encode(message: TxCreateQuote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.market !== "") {
      writer.uint32(10).string(message.market);
    }

    if (message.duration !== "") {
      writer.uint32(18).string(message.duration);
    }

    if (message.provider.length !== 0) {
      writer.uint32(26).bytes(message.provider);
    }

    if (message.backing !== "") {
      writer.uint32(34).string(message.backing);
    }

    if (message.spot !== "") {
      writer.uint32(42).string(message.spot);
    }

    if (message.ask !== "") {
      writer.uint32(50).string(message.ask);
    }

    if (message.bid !== "") {
      writer.uint32(58).string(message.bid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxCreateQuote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxCreateQuote();

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
          message.provider = reader.bytes();
          break;

        case 4:
          message.backing = reader.string();
          break;

        case 5:
          message.spot = reader.string();
          break;

        case 6:
          message.ask = reader.string();
          break;

        case 7:
          message.bid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxCreateQuote {
    return {
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      provider: isSet(object.provider) ? bytesFromBase64(object.provider) : new Uint8Array(),
      backing: isSet(object.backing) ? String(object.backing) : "",
      spot: isSet(object.spot) ? String(object.spot) : "",
      ask: isSet(object.ask) ? String(object.ask) : "",
      bid: isSet(object.bid) ? String(object.bid) : ""
    };
  },

  toJSON(message: TxCreateQuote): unknown {
    const obj: any = {};
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = message.duration);
    message.provider !== undefined && (obj.provider = base64FromBytes(message.provider !== undefined ? message.provider : new Uint8Array()));
    message.backing !== undefined && (obj.backing = message.backing);
    message.spot !== undefined && (obj.spot = message.spot);
    message.ask !== undefined && (obj.ask = message.ask);
    message.bid !== undefined && (obj.bid = message.bid);
    return obj;
  },

  fromPartial(object: DeepPartial<TxCreateQuote>): TxCreateQuote {
    const message = createBaseTxCreateQuote();
    message.market = object.market ?? "";
    message.duration = object.duration ?? "";
    message.provider = object.provider ?? new Uint8Array();
    message.backing = object.backing ?? "";
    message.spot = object.spot ?? "";
    message.ask = object.ask ?? "";
    message.bid = object.bid ?? "";
    return message;
  }

};

function createBaseCreateQuoteData(): CreateQuoteData {
  return {
    time: Long.ZERO,
    id: 0,
    consensus: undefined,
    commission: undefined,
    reward: undefined,
    adjustment: ""
  };
}

export const CreateQuoteData = {
  encode(message: CreateQuoteData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.time.isZero()) {
      writer.uint32(8).int64(message.time);
    }

    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
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

    if (message.adjustment !== "") {
      writer.uint32(50).string(message.adjustment);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateQuoteData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateQuoteData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.time = (reader.int64() as Long);
          break;

        case 2:
          message.id = reader.uint32();
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

        case 6:
          message.adjustment = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CreateQuoteData {
    return {
      time: isSet(object.time) ? Long.fromString(object.time) : Long.ZERO,
      id: isSet(object.id) ? Number(object.id) : 0,
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      commission: isSet(object.commission) ? DecCoin.fromJSON(object.commission) : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined,
      adjustment: isSet(object.adjustment) ? String(object.adjustment) : ""
    };
  },

  toJSON(message: CreateQuoteData): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = (message.time || Long.ZERO).toString());
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? DecCoin.toJSON(message.commission) : undefined);
    message.reward !== undefined && (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
    message.adjustment !== undefined && (obj.adjustment = message.adjustment);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateQuoteData>): CreateQuoteData {
    const message = createBaseCreateQuoteData();
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.ZERO;
    message.id = object.id ?? 0;
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? DecCoin.fromPartial(object.commission) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    message.adjustment = object.adjustment ?? "";
    return message;
  }

};