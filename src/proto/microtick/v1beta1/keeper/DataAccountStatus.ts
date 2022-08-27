import { OrderedList } from "./OrderedList";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface DataAccountStatus {
  account: Uint8Array;
  activeQuotes: OrderedList;
  activeTrades: OrderedList;
  placedQuotes: number;
  placedTrades: number;
  quoteBacking: DecCoin;
  tradeBacking: DecCoin;
  settleBacking: DecCoin;
}

function createBaseDataAccountStatus(): DataAccountStatus {
  return {
    account: new Uint8Array(),
    activeQuotes: undefined,
    activeTrades: undefined,
    placedQuotes: 0,
    placedTrades: 0,
    quoteBacking: undefined,
    tradeBacking: undefined,
    settleBacking: undefined
  };
}

export const DataAccountStatus = {
  encode(message: DataAccountStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account.length !== 0) {
      writer.uint32(10).bytes(message.account);
    }

    if (message.activeQuotes !== undefined) {
      OrderedList.encode(message.activeQuotes, writer.uint32(18).fork()).ldelim();
    }

    if (message.activeTrades !== undefined) {
      OrderedList.encode(message.activeTrades, writer.uint32(26).fork()).ldelim();
    }

    if (message.placedQuotes !== 0) {
      writer.uint32(32).uint32(message.placedQuotes);
    }

    if (message.placedTrades !== 0) {
      writer.uint32(40).uint32(message.placedTrades);
    }

    if (message.quoteBacking !== undefined) {
      DecCoin.encode(message.quoteBacking, writer.uint32(50).fork()).ldelim();
    }

    if (message.tradeBacking !== undefined) {
      DecCoin.encode(message.tradeBacking, writer.uint32(58).fork()).ldelim();
    }

    if (message.settleBacking !== undefined) {
      DecCoin.encode(message.settleBacking, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataAccountStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataAccountStatus();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.bytes();
          break;

        case 2:
          message.activeQuotes = OrderedList.decode(reader, reader.uint32());
          break;

        case 3:
          message.activeTrades = OrderedList.decode(reader, reader.uint32());
          break;

        case 4:
          message.placedQuotes = reader.uint32();
          break;

        case 5:
          message.placedTrades = reader.uint32();
          break;

        case 6:
          message.quoteBacking = DecCoin.decode(reader, reader.uint32());
          break;

        case 7:
          message.tradeBacking = DecCoin.decode(reader, reader.uint32());
          break;

        case 8:
          message.settleBacking = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DataAccountStatus {
    return {
      account: isSet(object.account) ? bytesFromBase64(object.account) : new Uint8Array(),
      activeQuotes: isSet(object.activeQuotes) ? OrderedList.fromJSON(object.activeQuotes) : undefined,
      activeTrades: isSet(object.activeTrades) ? OrderedList.fromJSON(object.activeTrades) : undefined,
      placedQuotes: isSet(object.placedQuotes) ? Number(object.placedQuotes) : 0,
      placedTrades: isSet(object.placedTrades) ? Number(object.placedTrades) : 0,
      quoteBacking: isSet(object.quoteBacking) ? DecCoin.fromJSON(object.quoteBacking) : undefined,
      tradeBacking: isSet(object.tradeBacking) ? DecCoin.fromJSON(object.tradeBacking) : undefined,
      settleBacking: isSet(object.settleBacking) ? DecCoin.fromJSON(object.settleBacking) : undefined
    };
  },

  toJSON(message: DataAccountStatus): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = base64FromBytes(message.account !== undefined ? message.account : new Uint8Array()));
    message.activeQuotes !== undefined && (obj.activeQuotes = message.activeQuotes ? OrderedList.toJSON(message.activeQuotes) : undefined);
    message.activeTrades !== undefined && (obj.activeTrades = message.activeTrades ? OrderedList.toJSON(message.activeTrades) : undefined);
    message.placedQuotes !== undefined && (obj.placedQuotes = Math.round(message.placedQuotes));
    message.placedTrades !== undefined && (obj.placedTrades = Math.round(message.placedTrades));
    message.quoteBacking !== undefined && (obj.quoteBacking = message.quoteBacking ? DecCoin.toJSON(message.quoteBacking) : undefined);
    message.tradeBacking !== undefined && (obj.tradeBacking = message.tradeBacking ? DecCoin.toJSON(message.tradeBacking) : undefined);
    message.settleBacking !== undefined && (obj.settleBacking = message.settleBacking ? DecCoin.toJSON(message.settleBacking) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DataAccountStatus>): DataAccountStatus {
    const message = createBaseDataAccountStatus();
    message.account = object.account ?? new Uint8Array();
    message.activeQuotes = object.activeQuotes !== undefined && object.activeQuotes !== null ? OrderedList.fromPartial(object.activeQuotes) : undefined;
    message.activeTrades = object.activeTrades !== undefined && object.activeTrades !== null ? OrderedList.fromPartial(object.activeTrades) : undefined;
    message.placedQuotes = object.placedQuotes ?? 0;
    message.placedTrades = object.placedTrades ?? 0;
    message.quoteBacking = object.quoteBacking !== undefined && object.quoteBacking !== null ? DecCoin.fromPartial(object.quoteBacking) : undefined;
    message.tradeBacking = object.tradeBacking !== undefined && object.tradeBacking !== null ? DecCoin.fromPartial(object.tradeBacking) : undefined;
    message.settleBacking = object.settleBacking !== undefined && object.settleBacking !== null ? DecCoin.fromPartial(object.settleBacking) : undefined;
    return message;
  }

};