import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/** Params represent the genesis parameters for the module */
export interface Params {
  /** Params represent the genesis parameters for the module */
  minProxyBalance: Long;
}

function createBaseParams(): Params {
  return {
    minProxyBalance: Long.ZERO
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.minProxyBalance.isZero()) {
      writer.uint32(8).int64(message.minProxyBalance);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minProxyBalance = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      minProxyBalance: isSet(object.minProxyBalance) ? Long.fromString(object.minProxyBalance) : Long.ZERO
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.minProxyBalance !== undefined && (obj.minProxyBalance = (message.minProxyBalance || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.minProxyBalance = object.minProxyBalance !== undefined && object.minProxyBalance !== null ? Long.fromValue(object.minProxyBalance) : Long.ZERO;
    return message;
  }

};