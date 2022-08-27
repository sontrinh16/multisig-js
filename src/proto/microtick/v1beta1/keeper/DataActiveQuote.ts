import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface DataActiveQuote {
  id: number;
  market: string;
  duration: number;
  durationName: string;
  provider: Uint8Array;
  modified: Long;
  canModify: Long;
  backing: DecCoin;
  ask: DecCoin;
  bid: DecCoin;
  quantity: DecCoin;
  spot: DecCoin;
}

function createBaseDataActiveQuote(): DataActiveQuote {
  return {
    id: 0,
    market: "",
    duration: 0,
    durationName: "",
    provider: new Uint8Array(),
    modified: Long.ZERO,
    canModify: Long.ZERO,
    backing: undefined,
    ask: undefined,
    bid: undefined,
    quantity: undefined,
    spot: undefined
  };
}

export const DataActiveQuote = {
  encode(message: DataActiveQuote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }

    if (message.market !== "") {
      writer.uint32(18).string(message.market);
    }

    if (message.duration !== 0) {
      writer.uint32(24).uint32(message.duration);
    }

    if (message.durationName !== "") {
      writer.uint32(34).string(message.durationName);
    }

    if (message.provider.length !== 0) {
      writer.uint32(42).bytes(message.provider);
    }

    if (!message.modified.isZero()) {
      writer.uint32(48).int64(message.modified);
    }

    if (!message.canModify.isZero()) {
      writer.uint32(56).int64(message.canModify);
    }

    if (message.backing !== undefined) {
      DecCoin.encode(message.backing, writer.uint32(66).fork()).ldelim();
    }

    if (message.ask !== undefined) {
      DecCoin.encode(message.ask, writer.uint32(74).fork()).ldelim();
    }

    if (message.bid !== undefined) {
      DecCoin.encode(message.bid, writer.uint32(82).fork()).ldelim();
    }

    if (message.quantity !== undefined) {
      DecCoin.encode(message.quantity, writer.uint32(90).fork()).ldelim();
    }

    if (message.spot !== undefined) {
      DecCoin.encode(message.spot, writer.uint32(98).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataActiveQuote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataActiveQuote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;

        case 2:
          message.market = reader.string();
          break;

        case 3:
          message.duration = reader.uint32();
          break;

        case 4:
          message.durationName = reader.string();
          break;

        case 5:
          message.provider = reader.bytes();
          break;

        case 6:
          message.modified = (reader.int64() as Long);
          break;

        case 7:
          message.canModify = (reader.int64() as Long);
          break;

        case 8:
          message.backing = DecCoin.decode(reader, reader.uint32());
          break;

        case 9:
          message.ask = DecCoin.decode(reader, reader.uint32());
          break;

        case 10:
          message.bid = DecCoin.decode(reader, reader.uint32());
          break;

        case 11:
          message.quantity = DecCoin.decode(reader, reader.uint32());
          break;

        case 12:
          message.spot = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DataActiveQuote {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      market: isSet(object.market) ? String(object.market) : "",
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      durationName: isSet(object.durationName) ? String(object.durationName) : "",
      provider: isSet(object.provider) ? bytesFromBase64(object.provider) : new Uint8Array(),
      modified: isSet(object.modified) ? Long.fromString(object.modified) : Long.ZERO,
      canModify: isSet(object.canModify) ? Long.fromString(object.canModify) : Long.ZERO,
      backing: isSet(object.backing) ? DecCoin.fromJSON(object.backing) : undefined,
      ask: isSet(object.ask) ? DecCoin.fromJSON(object.ask) : undefined,
      bid: isSet(object.bid) ? DecCoin.fromJSON(object.bid) : undefined,
      quantity: isSet(object.quantity) ? DecCoin.fromJSON(object.quantity) : undefined,
      spot: isSet(object.spot) ? DecCoin.fromJSON(object.spot) : undefined
    };
  },

  toJSON(message: DataActiveQuote): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.market !== undefined && (obj.market = message.market);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    message.durationName !== undefined && (obj.durationName = message.durationName);
    message.provider !== undefined && (obj.provider = base64FromBytes(message.provider !== undefined ? message.provider : new Uint8Array()));
    message.modified !== undefined && (obj.modified = (message.modified || Long.ZERO).toString());
    message.canModify !== undefined && (obj.canModify = (message.canModify || Long.ZERO).toString());
    message.backing !== undefined && (obj.backing = message.backing ? DecCoin.toJSON(message.backing) : undefined);
    message.ask !== undefined && (obj.ask = message.ask ? DecCoin.toJSON(message.ask) : undefined);
    message.bid !== undefined && (obj.bid = message.bid ? DecCoin.toJSON(message.bid) : undefined);
    message.quantity !== undefined && (obj.quantity = message.quantity ? DecCoin.toJSON(message.quantity) : undefined);
    message.spot !== undefined && (obj.spot = message.spot ? DecCoin.toJSON(message.spot) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DataActiveQuote>): DataActiveQuote {
    const message = createBaseDataActiveQuote();
    message.id = object.id ?? 0;
    message.market = object.market ?? "";
    message.duration = object.duration ?? 0;
    message.durationName = object.durationName ?? "";
    message.provider = object.provider ?? new Uint8Array();
    message.modified = object.modified !== undefined && object.modified !== null ? Long.fromValue(object.modified) : Long.ZERO;
    message.canModify = object.canModify !== undefined && object.canModify !== null ? Long.fromValue(object.canModify) : Long.ZERO;
    message.backing = object.backing !== undefined && object.backing !== null ? DecCoin.fromPartial(object.backing) : undefined;
    message.ask = object.ask !== undefined && object.ask !== null ? DecCoin.fromPartial(object.ask) : undefined;
    message.bid = object.bid !== undefined && object.bid !== null ? DecCoin.fromPartial(object.bid) : undefined;
    message.quantity = object.quantity !== undefined && object.quantity !== null ? DecCoin.fromPartial(object.quantity) : undefined;
    message.spot = object.spot !== undefined && object.spot !== null ? DecCoin.fromPartial(object.spot) : undefined;
    return message;
  }

};