import { Coin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";

/** DoubleKeyValue describes double key/value set */
export interface DoubleKeyValue {
  key: string;
  value: string;
}

/** LongKeyValue describes long key/value set */
export interface LongKeyValue {
  key: string;
  value: Long;
}

/** StringKeyValue describes string key/value set */
export interface StringKeyValue {
  key: string;
  value: string;
}
export interface Item {
  owner: string;
  cookbookId: string;
  id: string;
  nodeVersion: Long;
  doubles: DoubleKeyValue[];
  longs: LongKeyValue[];
  strings: StringKeyValue[];
  mutableStrings: StringKeyValue[];
  tradeable: boolean;
  lastUpdate: Long;
  transferFee: Coin[];

  /** The percentage of a trade sale retained by the cookbook owner. In the range (0.0, 1.0). */
  tradePercentage: string;
  createdAt: Long;
  updatedAt: Long;
  recipeId: string;
}
export interface ItemHistory {
  cookbookId: string;
  id: string;
  from: string;
  to: string;
  createdAt: Long;
}

function createBaseDoubleKeyValue(): DoubleKeyValue {
  return {
    key: "",
    value: ""
  };
}

export const DoubleKeyValue = {
  encode(message: DoubleKeyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleKeyValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleKeyValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DoubleKeyValue {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: DoubleKeyValue): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<DoubleKeyValue>): DoubleKeyValue {
    const message = createBaseDoubleKeyValue();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseLongKeyValue(): LongKeyValue {
  return {
    key: "",
    value: Long.ZERO
  };
}

export const LongKeyValue = {
  encode(message: LongKeyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (!message.value.isZero()) {
      writer.uint32(16).int64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LongKeyValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLongKeyValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LongKeyValue {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromString(object.value) : Long.ZERO
    };
  },

  toJSON(message: LongKeyValue): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<LongKeyValue>): LongKeyValue {
    const message = createBaseLongKeyValue();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  }

};

function createBaseStringKeyValue(): StringKeyValue {
  return {
    key: "",
    value: ""
  };
}

export const StringKeyValue = {
  encode(message: StringKeyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringKeyValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringKeyValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StringKeyValue {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: StringKeyValue): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<StringKeyValue>): StringKeyValue {
    const message = createBaseStringKeyValue();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};

function createBaseItem(): Item {
  return {
    owner: "",
    cookbookId: "",
    id: "",
    nodeVersion: Long.UZERO,
    doubles: [],
    longs: [],
    strings: [],
    mutableStrings: [],
    tradeable: false,
    lastUpdate: Long.ZERO,
    transferFee: [],
    tradePercentage: "",
    createdAt: Long.ZERO,
    updatedAt: Long.ZERO,
    recipeId: ""
  };
}

export const Item = {
  encode(message: Item, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.cookbookId !== "") {
      writer.uint32(18).string(message.cookbookId);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    if (!message.nodeVersion.isZero()) {
      writer.uint32(32).uint64(message.nodeVersion);
    }

    for (const v of message.doubles) {
      DoubleKeyValue.encode(v!, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.longs) {
      LongKeyValue.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.strings) {
      StringKeyValue.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    for (const v of message.mutableStrings) {
      StringKeyValue.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    if (message.tradeable === true) {
      writer.uint32(72).bool(message.tradeable);
    }

    if (!message.lastUpdate.isZero()) {
      writer.uint32(80).int64(message.lastUpdate);
    }

    for (const v of message.transferFee) {
      Coin.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    if (message.tradePercentage !== "") {
      writer.uint32(98).string(message.tradePercentage);
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(104).int64(message.createdAt);
    }

    if (!message.updatedAt.isZero()) {
      writer.uint32(112).int64(message.updatedAt);
    }

    if (message.recipeId !== "") {
      writer.uint32(122).string(message.recipeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Item {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.cookbookId = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        case 4:
          message.nodeVersion = (reader.uint64() as Long);
          break;

        case 5:
          message.doubles.push(DoubleKeyValue.decode(reader, reader.uint32()));
          break;

        case 6:
          message.longs.push(LongKeyValue.decode(reader, reader.uint32()));
          break;

        case 7:
          message.strings.push(StringKeyValue.decode(reader, reader.uint32()));
          break;

        case 8:
          message.mutableStrings.push(StringKeyValue.decode(reader, reader.uint32()));
          break;

        case 9:
          message.tradeable = reader.bool();
          break;

        case 10:
          message.lastUpdate = (reader.int64() as Long);
          break;

        case 11:
          message.transferFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 12:
          message.tradePercentage = reader.string();
          break;

        case 13:
          message.createdAt = (reader.int64() as Long);
          break;

        case 14:
          message.updatedAt = (reader.int64() as Long);
          break;

        case 15:
          message.recipeId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Item {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      nodeVersion: isSet(object.nodeVersion) ? Long.fromString(object.nodeVersion) : Long.UZERO,
      doubles: Array.isArray(object?.doubles) ? object.doubles.map((e: any) => DoubleKeyValue.fromJSON(e)) : [],
      longs: Array.isArray(object?.longs) ? object.longs.map((e: any) => LongKeyValue.fromJSON(e)) : [],
      strings: Array.isArray(object?.strings) ? object.strings.map((e: any) => StringKeyValue.fromJSON(e)) : [],
      mutableStrings: Array.isArray(object?.mutableStrings) ? object.mutableStrings.map((e: any) => StringKeyValue.fromJSON(e)) : [],
      tradeable: isSet(object.tradeable) ? Boolean(object.tradeable) : false,
      lastUpdate: isSet(object.lastUpdate) ? Long.fromString(object.lastUpdate) : Long.ZERO,
      transferFee: Array.isArray(object?.transferFee) ? object.transferFee.map((e: any) => Coin.fromJSON(e)) : [],
      tradePercentage: isSet(object.tradePercentage) ? String(object.tradePercentage) : "",
      createdAt: isSet(object.createdAt) ? Long.fromString(object.createdAt) : Long.ZERO,
      updatedAt: isSet(object.updatedAt) ? Long.fromString(object.updatedAt) : Long.ZERO,
      recipeId: isSet(object.recipeId) ? String(object.recipeId) : ""
    };
  },

  toJSON(message: Item): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.id !== undefined && (obj.id = message.id);
    message.nodeVersion !== undefined && (obj.nodeVersion = (message.nodeVersion || Long.UZERO).toString());

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

    if (message.mutableStrings) {
      obj.mutableStrings = message.mutableStrings.map(e => e ? StringKeyValue.toJSON(e) : undefined);
    } else {
      obj.mutableStrings = [];
    }

    message.tradeable !== undefined && (obj.tradeable = message.tradeable);
    message.lastUpdate !== undefined && (obj.lastUpdate = (message.lastUpdate || Long.ZERO).toString());

    if (message.transferFee) {
      obj.transferFee = message.transferFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.transferFee = [];
    }

    message.tradePercentage !== undefined && (obj.tradePercentage = message.tradePercentage);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    message.updatedAt !== undefined && (obj.updatedAt = (message.updatedAt || Long.ZERO).toString());
    message.recipeId !== undefined && (obj.recipeId = message.recipeId);
    return obj;
  },

  fromPartial(object: DeepPartial<Item>): Item {
    const message = createBaseItem();
    message.owner = object.owner ?? "";
    message.cookbookId = object.cookbookId ?? "";
    message.id = object.id ?? "";
    message.nodeVersion = object.nodeVersion !== undefined && object.nodeVersion !== null ? Long.fromValue(object.nodeVersion) : Long.UZERO;
    message.doubles = object.doubles?.map(e => DoubleKeyValue.fromPartial(e)) || [];
    message.longs = object.longs?.map(e => LongKeyValue.fromPartial(e)) || [];
    message.strings = object.strings?.map(e => StringKeyValue.fromPartial(e)) || [];
    message.mutableStrings = object.mutableStrings?.map(e => StringKeyValue.fromPartial(e)) || [];
    message.tradeable = object.tradeable ?? false;
    message.lastUpdate = object.lastUpdate !== undefined && object.lastUpdate !== null ? Long.fromValue(object.lastUpdate) : Long.ZERO;
    message.transferFee = object.transferFee?.map(e => Coin.fromPartial(e)) || [];
    message.tradePercentage = object.tradePercentage ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? Long.fromValue(object.updatedAt) : Long.ZERO;
    message.recipeId = object.recipeId ?? "";
    return message;
  }

};

function createBaseItemHistory(): ItemHistory {
  return {
    cookbookId: "",
    id: "",
    from: "",
    to: "",
    createdAt: Long.ZERO
  };
}

export const ItemHistory = {
  encode(message: ItemHistory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cookbookId !== "") {
      writer.uint32(18).string(message.cookbookId);
    }

    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }

    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }

    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(48).int64(message.createdAt);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ItemHistory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemHistory();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.cookbookId = reader.string();
          break;

        case 3:
          message.id = reader.string();
          break;

        case 4:
          message.from = reader.string();
          break;

        case 5:
          message.to = reader.string();
          break;

        case 6:
          message.createdAt = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ItemHistory {
    return {
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      createdAt: isSet(object.createdAt) ? Long.fromString(object.createdAt) : Long.ZERO
    };
  },

  toJSON(message: ItemHistory): unknown {
    const obj: any = {};
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.id !== undefined && (obj.id = message.id);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ItemHistory>): ItemHistory {
    const message = createBaseItemHistory();
    message.cookbookId = object.cookbookId ?? "";
    message.id = object.id ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    return message;
  }

};