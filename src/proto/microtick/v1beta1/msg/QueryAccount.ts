import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface QueryAccountRequest {
  account: Uint8Array;
  offset: number;
  limit: number;
}
export interface QueryAccountResponse {
  account: Uint8Array;
  balances: DecCoin[];
  placedQuotes: number;
  placedTrades: number;
  offset: number;
  limit: number;
  totalActiveQuotes: number;
  activeQuotes: number[];
  totalActiveTrades: number;
  activeTrades: number[];
  quoteBacking: DecCoin;
  tradeBacking: DecCoin;
  settleBacking: DecCoin;
}

function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    account: new Uint8Array(),
    offset: 0,
    limit: 0
  };
}

export const QueryAccountRequest = {
  encode(message: QueryAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account.length !== 0) {
      writer.uint32(10).bytes(message.account);
    }

    if (message.offset !== 0) {
      writer.uint32(16).uint32(message.offset);
    }

    if (message.limit !== 0) {
      writer.uint32(24).uint32(message.limit);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.bytes();
          break;

        case 2:
          message.offset = reader.uint32();
          break;

        case 3:
          message.limit = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountRequest {
    return {
      account: isSet(object.account) ? bytesFromBase64(object.account) : new Uint8Array(),
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0
    };
  },

  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = base64FromBytes(message.account !== undefined ? message.account : new Uint8Array()));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.account = object.account ?? new Uint8Array();
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    return message;
  }

};

function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    account: new Uint8Array(),
    balances: [],
    placedQuotes: 0,
    placedTrades: 0,
    offset: 0,
    limit: 0,
    totalActiveQuotes: 0,
    activeQuotes: [],
    totalActiveTrades: 0,
    activeTrades: [],
    quoteBacking: undefined,
    tradeBacking: undefined,
    settleBacking: undefined
  };
}

export const QueryAccountResponse = {
  encode(message: QueryAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account.length !== 0) {
      writer.uint32(10).bytes(message.account);
    }

    for (const v of message.balances) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.placedQuotes !== 0) {
      writer.uint32(24).uint32(message.placedQuotes);
    }

    if (message.placedTrades !== 0) {
      writer.uint32(32).uint32(message.placedTrades);
    }

    if (message.offset !== 0) {
      writer.uint32(40).uint32(message.offset);
    }

    if (message.limit !== 0) {
      writer.uint32(48).uint32(message.limit);
    }

    if (message.totalActiveQuotes !== 0) {
      writer.uint32(56).uint32(message.totalActiveQuotes);
    }

    writer.uint32(66).fork();

    for (const v of message.activeQuotes) {
      writer.uint32(v);
    }

    writer.ldelim();

    if (message.totalActiveTrades !== 0) {
      writer.uint32(72).uint32(message.totalActiveTrades);
    }

    writer.uint32(82).fork();

    for (const v of message.activeTrades) {
      writer.uint32(v);
    }

    writer.ldelim();

    if (message.quoteBacking !== undefined) {
      DecCoin.encode(message.quoteBacking, writer.uint32(90).fork()).ldelim();
    }

    if (message.tradeBacking !== undefined) {
      DecCoin.encode(message.tradeBacking, writer.uint32(98).fork()).ldelim();
    }

    if (message.settleBacking !== undefined) {
      DecCoin.encode(message.settleBacking, writer.uint32(106).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.account = reader.bytes();
          break;

        case 2:
          message.balances.push(DecCoin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.placedQuotes = reader.uint32();
          break;

        case 4:
          message.placedTrades = reader.uint32();
          break;

        case 5:
          message.offset = reader.uint32();
          break;

        case 6:
          message.limit = reader.uint32();
          break;

        case 7:
          message.totalActiveQuotes = reader.uint32();
          break;

        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.activeQuotes.push(reader.uint32());
            }
          } else {
            message.activeQuotes.push(reader.uint32());
          }

          break;

        case 9:
          message.totalActiveTrades = reader.uint32();
          break;

        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.activeTrades.push(reader.uint32());
            }
          } else {
            message.activeTrades.push(reader.uint32());
          }

          break;

        case 11:
          message.quoteBacking = DecCoin.decode(reader, reader.uint32());
          break;

        case 12:
          message.tradeBacking = DecCoin.decode(reader, reader.uint32());
          break;

        case 13:
          message.settleBacking = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAccountResponse {
    return {
      account: isSet(object.account) ? bytesFromBase64(object.account) : new Uint8Array(),
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => DecCoin.fromJSON(e)) : [],
      placedQuotes: isSet(object.placedQuotes) ? Number(object.placedQuotes) : 0,
      placedTrades: isSet(object.placedTrades) ? Number(object.placedTrades) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      totalActiveQuotes: isSet(object.totalActiveQuotes) ? Number(object.totalActiveQuotes) : 0,
      activeQuotes: Array.isArray(object?.activeQuotes) ? object.activeQuotes.map((e: any) => Number(e)) : [],
      totalActiveTrades: isSet(object.totalActiveTrades) ? Number(object.totalActiveTrades) : 0,
      activeTrades: Array.isArray(object?.activeTrades) ? object.activeTrades.map((e: any) => Number(e)) : [],
      quoteBacking: isSet(object.quoteBacking) ? DecCoin.fromJSON(object.quoteBacking) : undefined,
      tradeBacking: isSet(object.tradeBacking) ? DecCoin.fromJSON(object.tradeBacking) : undefined,
      settleBacking: isSet(object.settleBacking) ? DecCoin.fromJSON(object.settleBacking) : undefined
    };
  },

  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = base64FromBytes(message.account !== undefined ? message.account : new Uint8Array()));

    if (message.balances) {
      obj.balances = message.balances.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.balances = [];
    }

    message.placedQuotes !== undefined && (obj.placedQuotes = Math.round(message.placedQuotes));
    message.placedTrades !== undefined && (obj.placedTrades = Math.round(message.placedTrades));
    message.offset !== undefined && (obj.offset = Math.round(message.offset));
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.totalActiveQuotes !== undefined && (obj.totalActiveQuotes = Math.round(message.totalActiveQuotes));

    if (message.activeQuotes) {
      obj.activeQuotes = message.activeQuotes.map(e => Math.round(e));
    } else {
      obj.activeQuotes = [];
    }

    message.totalActiveTrades !== undefined && (obj.totalActiveTrades = Math.round(message.totalActiveTrades));

    if (message.activeTrades) {
      obj.activeTrades = message.activeTrades.map(e => Math.round(e));
    } else {
      obj.activeTrades = [];
    }

    message.quoteBacking !== undefined && (obj.quoteBacking = message.quoteBacking ? DecCoin.toJSON(message.quoteBacking) : undefined);
    message.tradeBacking !== undefined && (obj.tradeBacking = message.tradeBacking ? DecCoin.toJSON(message.tradeBacking) : undefined);
    message.settleBacking !== undefined && (obj.settleBacking = message.settleBacking ? DecCoin.toJSON(message.settleBacking) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    message.account = object.account ?? new Uint8Array();
    message.balances = object.balances?.map(e => DecCoin.fromPartial(e)) || [];
    message.placedQuotes = object.placedQuotes ?? 0;
    message.placedTrades = object.placedTrades ?? 0;
    message.offset = object.offset ?? 0;
    message.limit = object.limit ?? 0;
    message.totalActiveQuotes = object.totalActiveQuotes ?? 0;
    message.activeQuotes = object.activeQuotes?.map(e => e) || [];
    message.totalActiveTrades = object.totalActiveTrades ?? 0;
    message.activeTrades = object.activeTrades?.map(e => e) || [];
    message.quoteBacking = object.quoteBacking !== undefined && object.quoteBacking !== null ? DecCoin.fromPartial(object.quoteBacking) : undefined;
    message.tradeBacking = object.tradeBacking !== undefined && object.tradeBacking !== null ? DecCoin.fromPartial(object.tradeBacking) : undefined;
    message.settleBacking = object.settleBacking !== undefined && object.settleBacking !== null ? DecCoin.fromPartial(object.settleBacking) : undefined;
    return message;
  }

};