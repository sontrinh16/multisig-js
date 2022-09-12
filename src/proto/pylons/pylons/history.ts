import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface History {
  address: string;
  amount: string;
  cookbookId: string;
  recipeId: string;
  createdAt: Long;
  type: string;
  txId: string;
}

function createBaseHistory(): History {
  return {
    address: "",
    amount: "",
    cookbookId: "",
    recipeId: "",
    createdAt: Long.ZERO,
    type: "",
    txId: ""
  };
}

export const History = {
  encode(message: History, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }

    if (message.cookbookId !== "") {
      writer.uint32(26).string(message.cookbookId);
    }

    if (message.recipeId !== "") {
      writer.uint32(34).string(message.recipeId);
    }

    if (!message.createdAt.isZero()) {
      writer.uint32(40).int64(message.createdAt);
    }

    if (message.type !== "") {
      writer.uint32(50).string(message.type);
    }

    if (message.txId !== "") {
      writer.uint32(58).string(message.txId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): History {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistory();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.amount = reader.string();
          break;

        case 3:
          message.cookbookId = reader.string();
          break;

        case 4:
          message.recipeId = reader.string();
          break;

        case 5:
          message.createdAt = (reader.int64() as Long);
          break;

        case 6:
          message.type = reader.string();
          break;

        case 7:
          message.txId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): History {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      cookbookId: isSet(object.cookbookId) ? String(object.cookbookId) : "",
      recipeId: isSet(object.recipeId) ? String(object.recipeId) : "",
      createdAt: isSet(object.createdAt) ? Long.fromString(object.createdAt) : Long.ZERO,
      type: isSet(object.type) ? String(object.type) : "",
      txId: isSet(object.txId) ? String(object.txId) : ""
    };
  },

  toJSON(message: History): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.amount !== undefined && (obj.amount = message.amount);
    message.cookbookId !== undefined && (obj.cookbookId = message.cookbookId);
    message.recipeId !== undefined && (obj.recipeId = message.recipeId);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    message.type !== undefined && (obj.type = message.type);
    message.txId !== undefined && (obj.txId = message.txId);
    return obj;
  },

  fromPartial(object: DeepPartial<History>): History {
    const message = createBaseHistory();
    message.address = object.address ?? "";
    message.amount = object.amount ?? "";
    message.cookbookId = object.cookbookId ?? "";
    message.recipeId = object.recipeId ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    message.type = object.type ?? "";
    message.txId = object.txId ?? "";
    return message;
  }

};