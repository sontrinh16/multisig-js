import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial, Long } from "@osmonauts/helpers";
export interface TxCancelQuote {
  id: number;
  requester: Uint8Array;
}
export interface CancelQuoteData {
  time: Long;
  account: Uint8Array;
  market: string;
  duration: string;
  consensus: DecCoin;
  refund: DecCoin;
  slash: DecCoin;
  commission: DecCoin;
}

function createBaseTxCancelQuote(): TxCancelQuote {
  return {
    id: 0,
    requester: new Uint8Array()
  };
}

export const TxCancelQuote = {
  encode(message: TxCancelQuote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.requester.length !== 0) {
      writer.uint32(18).bytes(message.requester);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TxCancelQuote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxCancelQuote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.requester = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TxCancelQuote {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      requester: isSet(object.requester) ? bytesFromBase64(object.requester) : new Uint8Array()
    };
  },

  toJSON(message: TxCancelQuote): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.requester !== undefined && (obj.requester = base64FromBytes(message.requester !== undefined ? message.requester : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<TxCancelQuote>): TxCancelQuote {
    const message = createBaseTxCancelQuote();
    message.id = object.id ?? 0;
    message.requester = object.requester ?? new Uint8Array();
    return message;
  }

};

function createBaseCancelQuoteData(): CancelQuoteData {
  return {
    time: Long.ZERO,
    account: new Uint8Array(),
    market: "",
    duration: "",
    consensus: undefined,
    refund: undefined,
    slash: undefined,
    commission: undefined
  };
}

export const CancelQuoteData = {
  encode(message: CancelQuoteData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.time.isZero()) {
      writer.uint32(8).int64(message.time);
    }

    if (message.account.length !== 0) {
      writer.uint32(18).bytes(message.account);
    }

    if (message.market !== "") {
      writer.uint32(26).string(message.market);
    }

    if (message.duration !== "") {
      writer.uint32(34).string(message.duration);
    }

    if (message.consensus !== undefined) {
      DecCoin.encode(message.consensus, writer.uint32(42).fork()).ldelim();
    }

    if (message.refund !== undefined) {
      DecCoin.encode(message.refund, writer.uint32(50).fork()).ldelim();
    }

    if (message.slash !== undefined) {
      DecCoin.encode(message.slash, writer.uint32(58).fork()).ldelim();
    }

    if (message.commission !== undefined) {
      DecCoin.encode(message.commission, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelQuoteData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelQuoteData();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.time = (reader.int64() as Long);
          break;

        case 2:
          message.account = reader.bytes();
          break;

        case 3:
          message.market = reader.string();
          break;

        case 4:
          message.duration = reader.string();
          break;

        case 5:
          message.consensus = DecCoin.decode(reader, reader.uint32());
          break;

        case 6:
          message.refund = DecCoin.decode(reader, reader.uint32());
          break;

        case 7:
          message.slash = DecCoin.decode(reader, reader.uint32());
          break;

        case 8:
          message.commission = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CancelQuoteData {
    return {
      time: isSet(object.time) ? Long.fromString(object.time) : Long.ZERO,
      account: isSet(object.account) ? bytesFromBase64(object.account) : new Uint8Array(),
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? String(object.duration) : "",
      consensus: isSet(object.consensus) ? DecCoin.fromJSON(object.consensus) : undefined,
      refund: isSet(object.refund) ? DecCoin.fromJSON(object.refund) : undefined,
      slash: isSet(object.slash) ? DecCoin.fromJSON(object.slash) : undefined,
      commission: isSet(object.commission) ? DecCoin.fromJSON(object.commission) : undefined
    };
  },

  toJSON(message: CancelQuoteData): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = (message.time || Long.ZERO).toString());
    message.account !== undefined && (obj.account = base64FromBytes(message.account !== undefined ? message.account : new Uint8Array()));
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = message.duration);
    message.consensus !== undefined && (obj.consensus = message.consensus ? DecCoin.toJSON(message.consensus) : undefined);
    message.refund !== undefined && (obj.refund = message.refund ? DecCoin.toJSON(message.refund) : undefined);
    message.slash !== undefined && (obj.slash = message.slash ? DecCoin.toJSON(message.slash) : undefined);
    message.commission !== undefined && (obj.commission = message.commission ? DecCoin.toJSON(message.commission) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CancelQuoteData>): CancelQuoteData {
    const message = createBaseCancelQuoteData();
    message.time = object.time !== undefined && object.time !== null ? Long.fromValue(object.time) : Long.ZERO;
    message.account = object.account ?? new Uint8Array();
    message.market = object.market ?? "";
    message.duration = object.duration ?? "";
    message.consensus = object.consensus !== undefined && object.consensus !== null ? DecCoin.fromPartial(object.consensus) : undefined;
    message.refund = object.refund !== undefined && object.refund !== null ? DecCoin.fromPartial(object.refund) : undefined;
    message.slash = object.slash !== undefined && object.slash !== null ? DecCoin.fromPartial(object.slash) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? DecCoin.fromPartial(object.commission) : undefined;
    return message;
  }

};