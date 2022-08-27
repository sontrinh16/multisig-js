import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Userval {
  index: string;
  useraddr: string;
  count: Long;
}

function createBaseUserval(): Userval {
  return {
    index: "",
    useraddr: "",
    count: Long.ZERO
  };
}

export const Userval = {
  encode(message: Userval, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }

    if (message.useraddr !== "") {
      writer.uint32(18).string(message.useraddr);
    }

    if (!message.count.isZero()) {
      writer.uint32(24).int64(message.count);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Userval {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserval();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;

        case 2:
          message.useraddr = reader.string();
          break;

        case 3:
          message.count = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Userval {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      useraddr: isSet(object.useraddr) ? String(object.useraddr) : "",
      count: isSet(object.count) ? Long.fromString(object.count) : Long.ZERO
    };
  },

  toJSON(message: Userval): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.useraddr !== undefined && (obj.useraddr = message.useraddr);
    message.count !== undefined && (obj.count = (message.count || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Userval>): Userval {
    const message = createBaseUserval();
    message.index = object.index ?? "";
    message.useraddr = object.useraddr ?? "";
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.ZERO;
    return message;
  }

};