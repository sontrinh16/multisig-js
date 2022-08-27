import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface Quota {
  address: string;
  allocated: string;
  consumed: string;
}

function createBaseQuota(): Quota {
  return {
    address: "",
    allocated: "",
    consumed: ""
  };
}

export const Quota = {
  encode(message: Quota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }

    if (message.allocated !== "") {
      writer.uint32(18).string(message.allocated);
    }

    if (message.consumed !== "") {
      writer.uint32(26).string(message.consumed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quota {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuota();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;

        case 2:
          message.allocated = reader.string();
          break;

        case 3:
          message.consumed = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Quota {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      allocated: isSet(object.allocated) ? String(object.allocated) : "",
      consumed: isSet(object.consumed) ? String(object.consumed) : ""
    };
  },

  toJSON(message: Quota): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.allocated !== undefined && (obj.allocated = message.allocated);
    message.consumed !== undefined && (obj.consumed = message.consumed);
    return obj;
  },

  fromPartial(object: DeepPartial<Quota>): Quota {
    const message = createBaseQuota();
    message.address = object.address ?? "";
    message.allocated = object.allocated ?? "";
    message.consumed = object.consumed ?? "";
    return message;
  }

};