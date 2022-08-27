import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Bitcannaid {
  id: Long;
  bcnaid: string;
  address: string;
  creator: string;
}

function createBaseBitcannaid(): Bitcannaid {
  return {
    id: Long.UZERO,
    bcnaid: "",
    address: "",
    creator: ""
  };
}

export const Bitcannaid = {
  encode(message: Bitcannaid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.bcnaid !== "") {
      writer.uint32(18).string(message.bcnaid);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bitcannaid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBitcannaid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.bcnaid = reader.string();
          break;

        case 3:
          message.address = reader.string();
          break;

        case 4:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Bitcannaid {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      bcnaid: isSet(object.bcnaid) ? String(object.bcnaid) : "",
      address: isSet(object.address) ? String(object.address) : "",
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },

  toJSON(message: Bitcannaid): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.bcnaid !== undefined && (obj.bcnaid = message.bcnaid);
    message.address !== undefined && (obj.address = message.address);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Bitcannaid>): Bitcannaid {
    const message = createBaseBitcannaid();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.bcnaid = object.bcnaid ?? "";
    message.address = object.address ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};