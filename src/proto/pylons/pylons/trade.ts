import { CoinInput, ItemInput } from "./recipe";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface ItemRef {
  cookbookId: string;
  itemId: string;
}
export interface Trade {
  creator: string;
  id: Long;
  coinInputs: CoinInput[];
  itemInputs: ItemInput[];
  coinOutputs: Coin[];
  itemOutputs: ItemRef[];
  extraInfo: string;
  receiver: string;
  tradedItemInputs: ItemRef[];
}

function createBaseItemRef(): ItemRef {
  return {
    cookbookId: "",
    itemId: ""
  };
}

export const ItemRef = {
  encode(message: ItemRef, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookbookId !== "") {
      writer.uint32(10).string(message.cookbookId);
    }

    if (message.itemId !== "") {
      writer.uint32(18).string(message.itemId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ItemRef {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemRef();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cookbookId = reader.string();
          break;

        case 2:
          message.itemId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ItemRef {
    return {
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      itemId: isSet(object.itemId) ? String(object.itemId) : ""
    };
  },

  toJSON(message: ItemRef): unknown {
    const obj: any = {};
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.itemId !== undefined && (obj.itemId = message.itemId);
    return obj;
  },

  fromPartial(object: DeepPartial<ItemRef>): ItemRef {
    const message = createBaseItemRef();
    message.cookbookId = object.cookbookId ?? "";
    message.itemId = object.itemId ?? "";
    return message;
  }

};

function createBaseTrade(): Trade {
  return {
    creator: "",
    id: Long.UZERO,
    coinInputs: [],
    itemInputs: [],
    coinOutputs: [],
    itemOutputs: [],
    extraInfo: "",
    receiver: "",
    tradedItemInputs: []
  };
}

export const Trade = {
  encode(message: Trade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    for (const v of message.coinInputs) {
      CoinInput.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.itemInputs) {
      ItemInput.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.coinOutputs) {
      Coin.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.itemOutputs) {
      ItemRef.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.extraInfo !== "") {
      writer.uint32(58).string(message.extraInfo);
    }

    if (message.receiver !== "") {
      writer.uint32(66).string(message.receiver);
    }

    for (const v of message.tradedItemInputs) {
      ItemRef.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.coinInputs.push(CoinInput.decode(reader, reader.uint32()));
          break;

        case 4:
          message.itemInputs.push(ItemInput.decode(reader, reader.uint32()));
          break;

        case 5:
          message.coinOutputs.push(Coin.decode(reader, reader.uint32()));
          break;

        case 6:
          message.itemOutputs.push(ItemRef.decode(reader, reader.uint32()));
          break;

        case 7:
          message.extraInfo = reader.string();
          break;

        case 8:
          message.receiver = reader.string();
          break;

        case 9:
          message.tradedItemInputs.push(ItemRef.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Trade {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      coinInputs: Array.isArray(object?.coinInputs) ? object.coinInputs.map((e: any) => CoinInput.fromJSON(e)) : [],
      itemInputs: Array.isArray(object?.itemInputs) ? object.itemInputs.map((e: any) => ItemInput.fromJSON(e)) : [],
      coinOutputs: Array.isArray(object?.coinOutputs) ? object.coinOutputs.map((e: any) => Coin.fromJSON(e)) : [],
      itemOutputs: Array.isArray(object?.itemOutputs) ? object.itemOutputs.map((e: any) => ItemRef.fromJSON(e)) : [],
      extraInfo: isSet(object.extraInfo) ? String(object.extraInfo) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      tradedItemInputs: Array.isArray(object?.tradedItemInputs) ? object.tradedItemInputs.map((e: any) => ItemRef.fromJSON(e)) : []
    };
  },

  toJSON(message: Trade): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());

    if (message.coinInputs) {
      obj.coinInputs = message.coinInputs.map(e => e ? CoinInput.toJSON(e) : undefined);
    } else {
      obj.coinInputs = [];
    }

    if (message.itemInputs) {
      obj.itemInputs = message.itemInputs.map(e => e ? ItemInput.toJSON(e) : undefined);
    } else {
      obj.itemInputs = [];
    }

    if (message.coinOutputs) {
      obj.coinOutputs = message.coinOutputs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coinOutputs = [];
    }

    if (message.itemOutputs) {
      obj.itemOutputs = message.itemOutputs.map(e => e ? ItemRef.toJSON(e) : undefined);
    } else {
      obj.itemOutputs = [];
    }

    message.extraInfo !== undefined && (obj.extraInfo = message.extraInfo);
    message.receiver !== undefined && (obj.receiver = message.receiver);

    if (message.tradedItemInputs) {
      obj.tradedItemInputs = message.tradedItemInputs.map(e => e ? ItemRef.toJSON(e) : undefined);
    } else {
      obj.tradedItemInputs = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Trade>): Trade {
    const message = createBaseTrade();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.coinInputs = object.coinInputs?.map(e => CoinInput.fromPartial(e)) || [];
    message.itemInputs = object.itemInputs?.map(e => ItemInput.fromPartial(e)) || [];
    message.coinOutputs = object.coinOutputs?.map(e => Coin.fromPartial(e)) || [];
    message.itemOutputs = object.itemOutputs?.map(e => ItemRef.fromPartial(e)) || [];
    message.extraInfo = object.extraInfo ?? "";
    message.receiver = object.receiver ?? "";
    message.tradedItemInputs = object.tradedItemInputs?.map(e => ItemRef.fromPartial(e)) || [];
    return message;
  }

};