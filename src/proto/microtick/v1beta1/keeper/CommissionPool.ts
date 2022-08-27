import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface commission_pool {
  pool: DecCoin;
}

function createBaseCommission_pool(): commission_pool {
  return {
    pool: undefined
  };
}

export const commission_pool = {
  encode(message: commission_pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pool !== undefined) {
      DecCoin.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): commission_pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommission_pool();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pool = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): commission_pool {
    return {
      pool: isSet(object.pool) ? DecCoin.fromJSON(object.pool) : undefined
    };
  },

  toJSON(message: commission_pool): unknown {
    const obj: any = {};
    message.pool !== undefined && (obj.pool = message.pool ? DecCoin.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<commission_pool>): commission_pool {
    const message = createBaseCommission_pool();
    message.pool = object.pool !== undefined && object.pool !== null ? DecCoin.fromPartial(object.pool) : undefined;
    return message;
  }

};