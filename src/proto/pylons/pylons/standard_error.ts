import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface StandardError {
  code: string;
  message: string;
}

function createBaseStandardError(): StandardError {
  return {
    code: "",
    message: ""
  };
}

export const StandardError = {
  encode(message: StandardError, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }

    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StandardError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStandardError();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;

        case 2:
          message.message = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StandardError {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      message: isSet(object.message) ? String(object.message) : ""
    };
  },

  toJSON(message: StandardError): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial(object: DeepPartial<StandardError>): StandardError {
    const message = createBaseStandardError();
    message.code = object.code ?? "";
    message.message = object.message ?? "";
    return message;
  }

};