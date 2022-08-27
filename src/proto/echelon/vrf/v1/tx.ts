import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface MsgCreateRandom {
  creator: string;
  multiplier: Long;
}
export interface MsgCreateRandomResponse {
  id: Long;
}

function createBaseMsgCreateRandom(): MsgCreateRandom {
  return {
    creator: "",
    multiplier: Long.UZERO
  };
}

export const MsgCreateRandom = {
  encode(message: MsgCreateRandom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }

    if (!message.multiplier.isZero()) {
      writer.uint32(16).uint64(message.multiplier);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRandom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRandom();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;

        case 2:
          message.multiplier = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateRandom {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      multiplier: isSet(object.multiplier) ? Long.fromString(object.multiplier) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateRandom): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.multiplier !== undefined && (obj.multiplier = (message.multiplier || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRandom>): MsgCreateRandom {
    const message = createBaseMsgCreateRandom();
    message.creator = object.creator ?? "";
    message.multiplier = object.multiplier !== undefined && object.multiplier !== null ? Long.fromValue(object.multiplier) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCreateRandomResponse(): MsgCreateRandomResponse {
  return {
    id: Long.UZERO
  };
}

export const MsgCreateRandomResponse = {
  encode(message: MsgCreateRandomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRandomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRandomResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateRandomResponse {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateRandomResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRandomResponse>): MsgCreateRandomResponse {
    const message = createBaseMsgCreateRandomResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};