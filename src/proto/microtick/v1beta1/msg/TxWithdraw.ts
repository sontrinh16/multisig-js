import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "@osmonauts/helpers";
export interface TxWithdrawQuote {
  id: number;
  requester: Uint8Array;
  withdraw: string;
}
export interface WithdrawQuoteData {
  time: Long;
  market: string;
  duration: string;
  consensus: DecCoin;
  backing: DecCoin;
  commission: DecCoin;
}

function createBaseTxWithdrawQuote(): TxWithdrawQuote {
  return {
    id: 0,
    requester: new Uint8Array(),
    withdraw: ""
  };
}

export const TxWithdrawQuote = {
  encode(message: TxWithdrawQuote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.requester.length !== 0) {
      writer.uint32(18).bytes(message.requester);
    }

    if (message.withdraw !== "") {
      writer.uint32(26).string(message.withdraw);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxWithdrawQuote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxWithdrawQuote();

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
          message.withdraw = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxWithdrawQuote {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      requester: isSet(object.requester) ? bytesFromBase64(object.requester) : new Uint8Array(),
      withdraw: isSet(object.withdraw) ? String(object.withdraw) : ""
    };
  },

  toJSON(message: TxWithdrawQuote): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.requester !== undefined && (obj.requester = base64FromBytes(message.requester !== undefined ? message.requester : new Uint8Array()));
    message.withdraw !== undefined && (obj.withdraw = message.withdraw);
    return obj;
  },

  fromPartial(object: DeepPartial<TxWithdrawQuote>): TxWithdrawQuote {
    const message = createBaseTxWithdrawQuote();
    message.id = object.id ?? 0;
    message.requester = object.requester ?? new Uint8Array();
    message.withdraw = object.withdraw ?? "";
    return message;
  }

};

function createBaseWithdrawQuoteData(): WithdrawQuoteData {
  return {
    time: Long.ZERO,
    market: "",
    duration: "",
    consensus: undefined,
    backing: undefined,
    commission: undefined
  };
}

export const WithdrawQuoteData = {
  encode(message: WithdrawQuoteData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawQuoteData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawQuoteData();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WithdrawQuoteData {
    return {
      time: isSet(object.time) ? Long.fromString(object.time) : Long.ZERO,
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      backing: isSet(object.backing) ? DecCoin.fromJSON(object.backing) : undefined,
      commission: isSet(object.commission) ? DecCoin.fromJSON(object.commission) : undefined
    };
  },

  toJSON(message: WithdrawQuoteData): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = (message.time || Long.ZERO).toString());
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = message.duration);
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);
    message.backing !== undefined && (obj.backing = message.backing ? DecCoin.toJSON(message.backing) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? DecCoin.toJSON(message.commission) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<WithdrawQuoteData>): WithdrawQuoteData {
    const message = createBaseWithdrawQuoteData();
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.ZERO;
    message.market = object.market ?? "";
    message.duration = object.duration ?? "";
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.backing = object.backing !== undefined && object.backing !== null ? DecCoin.fromPartial(object.backing) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? DecCoin.fromPartial(object.commission) : undefined;
    return message;
  }

};