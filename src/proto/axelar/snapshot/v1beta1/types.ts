import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface ProxiedValidator {
  validator: Uint8Array;
  proxy: Uint8Array;
  active: boolean;
}

function createBaseProxiedValidator(): ProxiedValidator {
  return {
    validator: new Uint8Array(),
    proxy: new Uint8Array(),
    active: false
  };
}

export const ProxiedValidator = {
  encode(message: ProxiedValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator.length !== 0) {
      writer.uint32(10).bytes(message.validator);
    }

    if (message.proxy.length !== 0) {
      writer.uint32(18).bytes(message.proxy);
    }

    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProxiedValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProxiedValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validator = reader.bytes();
          break;

        case 2:
          message.proxy = reader.bytes();
          break;

        case 3:
          message.active = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ProxiedValidator {
    return {
      validator: isSet(object.validator) ? bytesFromBase64(object.validator) : new Uint8Array(),
      proxy: isSet(object.proxy) ? bytesFromBase64(object.proxy) : new Uint8Array(),
      active: isSet(object.active) ? Boolean(object.active) : false
    };
  },

  toJSON(message: ProxiedValidator): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = base64FromBytes(message.validator !== undefined ? message.validator : new Uint8Array()));
    message.proxy !== undefined && (obj.proxy = base64FromBytes(message.proxy !== undefined ? message.proxy : new Uint8Array()));
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial(object: DeepPartial<ProxiedValidator>): ProxiedValidator {
    const message = createBaseProxiedValidator();
    message.validator = object.validator ?? new Uint8Array();
    message.proxy = object.proxy ?? new Uint8Array();
    message.active = object.active ?? false;
    return message;
  }

};