import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface InternalDuration {
  name: string;
  duration: number;
}

function createBaseInternalDuration(): InternalDuration {
  return {
    name: "",
    duration: 0
  };
}

export const InternalDuration = {
  encode(message: InternalDuration, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.duration !== 0) {
      writer.uint32(16).uint32(message.duration);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InternalDuration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInternalDuration();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.duration = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): InternalDuration {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      duration: isSet(object.duration) ? Number(object.duration) : 0
    };
  },

  toJSON(message: InternalDuration): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.duration !== undefined && (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial(object: DeepPartial<InternalDuration>): InternalDuration {
    const message = createBaseInternalDuration();
    message.name = object.name ?? "";
    message.duration = object.duration ?? 0;
    return message;
  }

};