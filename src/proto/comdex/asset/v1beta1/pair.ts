import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Pair {
  id: Long;
  assetIn: Long;
  assetOut: Long;
  liquidationRatio: string;
}

function createBasePair(): Pair {
  return {
    id: Long.UZERO,
    assetIn: Long.UZERO,
    assetOut: Long.UZERO,
    liquidationRatio: ""
  };
}

export const Pair = {
  encode(message: Pair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.assetIn.isZero()) {
      writer.uint32(16).uint64(message.assetIn);
    }

    if (!message.assetOut.isZero()) {
      writer.uint32(24).uint64(message.assetOut);
    }

    if (message.liquidationRatio !== "") {
      writer.uint32(34).string(message.liquidationRatio);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pair {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePair();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.assetIn = (reader.uint64() as Long);
          break;

        case 3:
          message.assetOut = (reader.uint64() as Long);
          break;

        case 4:
          message.liquidationRatio = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Pair {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      assetIn: isSet(object.assetIn) ? Long.fromString(object.assetIn) : Long.UZERO,
      assetOut: isSet(object.assetOut) ? Long.fromString(object.assetOut) : Long.UZERO,
      liquidationRatio: isSet(object.liquidationRatio) ? String(object.liquidationRatio) : ""
    };
  },

  toJSON(message: Pair): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.assetIn !== undefined && (obj.assetIn = (message.assetIn || Long.UZERO).toString());
    message.assetOut !== undefined && (obj.assetOut = (message.assetOut || Long.UZERO).toString());
    message.liquidationRatio !== undefined && (obj.liquidationRatio = message.liquidationRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<Pair>): Pair {
    const message = createBasePair();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.assetIn = object.assetIn !== undefined && object.assetIn !== null ? Long.fromValue(object.assetIn) : Long.UZERO;
    message.assetOut = object.assetOut !== undefined && object.assetOut !== null ? Long.fromValue(object.assetOut) : Long.UZERO;
    message.liquidationRatio = object.liquidationRatio ?? "";
    return message;
  }

};