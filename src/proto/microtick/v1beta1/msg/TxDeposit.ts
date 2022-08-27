import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "@osmonauts/helpers";
export interface TxDepositQuote {
  id: number;
  requester: Uint8Array;
  deposit: string;
}
export interface DepositQuoteData {
  time: Long;
  market: string;
  duration: string;
  consensus: DecCoin;
  backing: DecCoin;
  commission: DecCoin;
  reward: Coin;
  adjustment: string;
}

function createBaseTxDepositQuote(): TxDepositQuote {
  return {
    id: 0,
    requester: new Uint8Array(),
    deposit: ""
  };
}

export const TxDepositQuote = {
  encode(message: TxDepositQuote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.requester.length !== 0) {
      writer.uint32(18).bytes(message.requester);
    }

    if (message.deposit !== "") {
      writer.uint32(26).string(message.deposit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxDepositQuote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDepositQuote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.requester = reader.bytes();
          break;

        case 3:
          message.deposit = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxDepositQuote {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      requester: isSet(object.requester) ? bytesFromBase64(object.requester) : new Uint8Array(),
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },

  toJSON(message: TxDepositQuote): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.requester !== undefined && (obj.requester = base64FromBytes(message.requester !== undefined ? message.requester : new Uint8Array()));
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },

  fromPartial(object: DeepPartial<TxDepositQuote>): TxDepositQuote {
    const message = createBaseTxDepositQuote();
    message.id = object.id ?? 0;
    message.requester = object.requester ?? new Uint8Array();
    message.deposit = object.deposit ?? "";
    return message;
  }

};

function createBaseDepositQuoteData(): DepositQuoteData {
  return {
    time: Long.ZERO,
    market: "",
    duration: "",
    consensus: undefined,
    backing: undefined,
    commission: undefined,
    reward: undefined,
    adjustment: ""
  };
}

export const DepositQuoteData = {
  encode(message: DepositQuoteData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.time.isZero()) {
      writer.uint32(8).int64(message.time);
    }

    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }

    if (message.duration !== "") {
      writer.uint32(26).string(message.duration);
    }

    if (message.consensus !== undefined) {
      DecCoin.encode(message.consensus, writer.uint32(34).fork()).ldelim();
    }

    if (message.backing !== undefined) {
      DecCoin.encode(message.backing, writer.uint32(42).fork()).ldelim();
    }

    if (message.commission !== undefined) {
      DecCoin.encode(message.commission, writer.uint32(50).fork()).ldelim();
    }

    if (message.reward !== undefined) {
      Coin.encode(message.reward, writer.uint32(58).fork()).ldelim();
    }

    if (message.adjustment !== "") {
      writer.uint32(66).string(message.adjustment);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DepositQuoteData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositQuoteData();

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
          message.consensus = DecCoin.decode(reader, reader.uint32());
          break;

        case 5:
          message.backing = DecCoin.decode(reader, reader.uint32());
          break;

        case 6:
          message.commission = DecCoin.decode(reader, reader.uint32());
          break;

        case 7:
          message.reward = Coin.decode(reader, reader.uint32());
          break;

        case 8:
          message.adjustment = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositQuoteData {
    return {
      time: isSet(object.time) ? Long.fromString(object.time) : Long.ZERO,
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      backing: isSet(object.backing) ? DecCoin.fromJSON(object.backing) : undefined,
      commission: isSet(object.commission) ? DecCoin.fromJSON(object.commission) : undefined,
      reward: isSet(object.reward) ? Coin.fromJSON(object.reward) : undefined,
      adjustment: isSet(object.adjustment) ? String(object.adjustment) : ""
    };
  },

  toJSON(message: DepositQuoteData): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = (message.time || Long.ZERO).toString());
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = message.duration);
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);
    message.backing !== undefined && (obj.backing = message.backing ? DecCoin.toJSON(message.backing) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? DecCoin.toJSON(message.commission) : undefined);
    message.reward !== undefined && (obj.reward = message.reward ? Coin.toJSON(message.reward) : undefined);
    message.adjustment !== undefined && (obj.adjustment = message.adjustment);
    return obj;
  },

  fromPartial(object: DeepPartial<DepositQuoteData>): DepositQuoteData {
    const message = createBaseDepositQuoteData();
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.ZERO;
    message.market = object.market ?? "";
    message.duration = object.duration ?? "";
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.backing = object.backing !== undefined && object.backing !== null ? DecCoin.fromPartial(object.backing) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? DecCoin.fromPartial(object.commission) : undefined;
    message.reward = object.reward !== undefined && object.reward !== null ? Coin.fromPartial(object.reward) : undefined;
    message.adjustment = object.adjustment ?? "";
    return message;
  }

};