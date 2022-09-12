import { DoubleKeyValue, LongKeyValue, StringKeyValue } from "./item";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";
export interface ItemRecord {
  id: string;
  doubles: DoubleKeyValue[];
  longs: LongKeyValue[];
  strings: StringKeyValue[];
}
export interface Execution {
  creator: string;
  id: string;
  recipeId: string;
  cookbookId: string;
  recipeVersion: string;
  nodeVersion: Long;
  blockHeight: Long;
  itemInputs: ItemRecord[];
  coinInputs: Coin[];
  coinOutputs: Coin[];
  itemOutputIds: string[];
  itemModifyOutputIds: string[];
}

function createBaseItemRecord(): ItemRecord {
  return {
    id: "",
    doubles: [],
    longs: [],
    strings: []
  };
}

export const ItemRecord = {
  encode(message: ItemRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    for (const v of message.doubles) {
      DoubleKeyValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.longs) {
      LongKeyValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.strings) {
      StringKeyValue.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ItemRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.doubles.push(DoubleKeyValue.decode(reader, reader.uint32()));
          break;

        case 3:
          message.longs.push(LongKeyValue.decode(reader, reader.uint32()));
          break;

        case 4:
          message.strings.push(StringKeyValue.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ItemRecord {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      doubles: Array.isArray(object?.doubles) ? object.doubles.map((e: any) => DoubleKeyValue.fromJSON(e)) : [],
      longs: Array.isArray(object?.longs) ? object.longs.map((e: any) => LongKeyValue.fromJSON(e)) : [],
      strings: Array.isArray(object?.strings) ? object.strings.map((e: any) => StringKeyValue.fromJSON(e)) : []
    };
  },

  toJSON(message: ItemRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);

    if (message.doubles) {
      obj.doubles = message.doubles.map(e => e ? DoubleKeyValue.toJSON(e) : undefined);
    } else {
      obj.doubles = [];
    }

    if (message.longs) {
      obj.longs = message.longs.map(e => e ? LongKeyValue.toJSON(e) : undefined);
    } else {
      obj.longs = [];
    }

    if (message.strings) {
      obj.strings = message.strings.map(e => e ? StringKeyValue.toJSON(e) : undefined);
    } else {
      obj.strings = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ItemRecord>): ItemRecord {
    const message = createBaseItemRecord();
    message.id = object.id ?? "";
    message.doubles = object.doubles?.map(e => DoubleKeyValue.fromPartial(e)) || [];
    message.longs = object.longs?.map(e => LongKeyValue.fromPartial(e)) || [];
    message.strings = object.strings?.map(e => StringKeyValue.fromPartial(e)) || [];
    return message;
  }

};

function createBaseExecution(): Execution {
  return {
    creator: "",
    id: "",
    recipeId: "",
    cookbookId: "",
    recipeVersion: "",
    nodeVersion: Long.UZERO,
    blockHeight: Long.ZERO,
    itemInputs: [],
    coinInputs: [],
    coinOutputs: [],
    itemOutputIds: [],
    itemModifyOutputIds: []
  };
}

export const Execution = {
  encode(message: Execution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }

    if (message.recipeId !== "") {
      writer.uint32(26).string(message.recipeId);
    }

    if (message.cookbookId !== "") {
      writer.uint32(34).string(message.cookbookId);
    }

    if (message.recipeVersion !== "") {
      writer.uint32(42).string(message.recipeVersion);
    }

    if (!message.nodeVersion.isZero()) {
      writer.uint32(48).uint64(message.nodeVersion);
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(56).int64(message.blockHeight);
    }

    for (const v of message.itemInputs) {
      ItemRecord.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    for (const v of message.coinInputs) {
      Coin.encode(v!, writer.uint32(74).fork()).ldelim();
    }

    for (const v of message.coinOutputs) {
      Coin.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    for (const v of message.itemOutputIds) {
      writer.uint32(90).string(v!);
    }

    for (const v of message.itemModifyOutputIds) {
      writer.uint32(98).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Execution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecution();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.id = reader.string();
          break;

        case 3:
          message.recipeId = reader.string();
          break;

        case 4:
          message.cookbookId = reader.string();
          break;

        case 5:
          message.recipeVersion = reader.string();
          break;

        case 6:
          message.nodeVersion = (reader.uint64() as Long);
          break;

        case 7:
          message.blockHeight = (reader.int64() as Long);
          break;

        case 8:
          message.itemInputs.push(ItemRecord.decode(reader, reader.uint32()));
          break;

        case 9:
          message.coinInputs.push(Coin.decode(reader, reader.uint32()));
          break;

        case 10:
          message.coinOutputs.push(Coin.decode(reader, reader.uint32()));
          break;

        case 11:
          message.itemOutputIds.push(reader.string());
          break;

        case 12:
          message.itemModifyOutputIds.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Execution {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      recipeId: isSet(object.recipeId) ? String(object.recipeId) : "",
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      recipeVersion: isSet(object.recipeVersion) ? String(object.recipeVersion) : "",
      nodeVersion: isSet(object.nodeVersion) ? Long.fromString(object.nodeVersion) : Long.UZERO,
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.ZERO,
      itemInputs: Array.isArray(object?.itemInputs) ? object.itemInputs.map((e: any) => ItemRecord.fromJSON(e)) : [],
      coinInputs: Array.isArray(object?.coinInputs) ? object.coinInputs.map((e: any) => Coin.fromJSON(e)) : [],
      coinOutputs: Array.isArray(object?.coinOutputs) ? object.coinOutputs.map((e: any) => Coin.fromJSON(e)) : [],
      itemOutputIds: Array.isArray(object?.itemOutputIds) ? object.itemOutputIds.map((e: any) => String(e)) : [],
      itemModifyOutputIds: Array.isArray(object?.itemModifyOutputIds) ? object.itemModifyOutputIds.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: Execution): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.recipeId !== undefined && (obj.recipeId = message.recipeId);
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.recipeVersion !== undefined && (obj.recipeVersion = message.recipeVersion);
    message.nodeVersion !== undefined && (obj.nodeVersion = (message.nodeVersion || Long.UZERO).toString());
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.ZERO).toString());

    if (message.itemInputs) {
      obj.itemInputs = message.itemInputs.map(e => e ? ItemRecord.toJSON(e) : undefined);
    } else {
      obj.itemInputs = [];
    }

    if (message.coinInputs) {
      obj.coinInputs = message.coinInputs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coinInputs = [];
    }

    if (message.coinOutputs) {
      obj.coinOutputs = message.coinOutputs.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coinOutputs = [];
    }

    if (message.itemOutputIds) {
      obj.itemOutputIds = message.itemOutputIds.map(e => e);
    } else {
      obj.itemOutputIds = [];
    }

    if (message.itemModifyOutputIds) {
      obj.itemModifyOutputIds = message.itemModifyOutputIds.map(e => e);
    } else {
      obj.itemModifyOutputIds = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Execution>): Execution {
    const message = createBaseExecution();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.recipeId = object.recipeId ?? "";
    message.cookbookId = object.cookbookId ?? "";
    message.recipeVersion = object.recipeVersion ?? "";
    message.nodeVersion = object.nodeVersion !== undefined && object.nodeVersion !== null ? Long.fromValue(object.nodeVersion) : Long.UZERO;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.ZERO;
    message.itemInputs = object.itemInputs?.map(e => ItemRecord.fromPartial(e)) || [];
    message.coinInputs = object.coinInputs?.map(e => Coin.fromPartial(e)) || [];
    message.coinOutputs = object.coinOutputs?.map(e => Coin.fromPartial(e)) || [];
    message.itemOutputIds = object.itemOutputIds?.map(e => e) || [];
    message.itemModifyOutputIds = object.itemModifyOutputIds?.map(e => e) || [];
    return message;
  }

};