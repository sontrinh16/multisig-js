import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Vault {
  id: Long;
  pairId: Long;
  owner: string;
  amountIn: string;
  amountOut: string;
}

function createBaseVault(): Vault {
  return {
    id: Long.UZERO,
    pairId: Long.UZERO,
    owner: "",
    amountIn: "",
    amountOut: ""
  };
}

export const Vault = {
  encode(message: Vault, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.pairId.isZero()) {
      writer.uint32(16).uint64(message.pairId);
    }

    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }

    if (message.amountIn !== "") {
      writer.uint32(34).string(message.amountIn);
    }

    if (message.amountOut !== "") {
      writer.uint32(42).string(message.amountOut);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vault {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVault();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.pairId = (reader.uint64() as Long);
          break;

        case 3:
          message.owner = reader.string();
          break;

        case 4:
          message.amountIn = reader.string();
          break;

        case 5:
          message.amountOut = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Vault {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      pairId: isSet(object.pairId) ? Long.fromString(object.pairId) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : ""
    };
  },

  toJSON(message: Vault): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.pairId !== undefined && (obj.pairId = (message.pairId || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    return obj;
  },

  fromPartial(object: DeepPartial<Vault>): Vault {
    const message = createBaseVault();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.pairId = object.pairId !== undefined && object.pairId !== null ? Long.fromValue(object.pairId) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    return message;
  }

};