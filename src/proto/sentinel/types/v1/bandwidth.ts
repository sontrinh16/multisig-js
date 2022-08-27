import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface Bandwidth {
  upload: string;
  download: string;
}

function createBaseBandwidth(): Bandwidth {
  return {
    upload: "",
    download: ""
  };
}

export const Bandwidth = {
  encode(message: Bandwidth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upload !== "") {
      writer.uint32(10).string(message.upload);
    }

    if (message.download !== "") {
      writer.uint32(18).string(message.download);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bandwidth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBandwidth();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.upload = reader.string();
          break;

        case 2:
          message.download = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Bandwidth {
    return {
      upload: isSet(object.upload) ? String(object.upload) : "",
      download: isSet(object.download) ? String(object.download) : ""
    };
  },

  toJSON(message: Bandwidth): unknown {
    const obj: any = {};
    message.upload !== undefined && (obj.upload = message.upload);
    message.download !== undefined && (obj.download = message.download);
    return obj;
  },

  fromPartial(object: DeepPartial<Bandwidth>): Bandwidth {
    const message = createBaseBandwidth();
    message.upload = object.upload ?? "";
    message.download = object.download ?? "";
    return message;
  }

};