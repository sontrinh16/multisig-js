import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Asset {
  id: Long;
  name: string;
  denom: string;
  decimals: Long;
}

function createBaseAsset(): Asset {
  return {
    id: Long.UZERO,
    name: "",
    denom: "",
    decimals: Long.ZERO
  };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    if (!message.decimals.isZero()) {
      writer.uint32(32).int64(message.decimals);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.denom = reader.string();
          break;

        case 4:
          message.decimals = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Asset {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      name: isSet(object.name) ? String(object.name) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      decimals: isSet(object.decimals) ? Long.fromString(object.decimals) : Long.ZERO
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.name !== undefined && (obj.name = message.name);
    message.denom !== undefined && (obj.denom = message.denom);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Asset>): Asset {
    const message = createBaseAsset();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.name = object.name ?? "";
    message.denom = object.denom ?? "";
    message.decimals = object.decimals !== undefined && object.decimals !== null ? Long.fromValue(object.decimals) : Long.ZERO;
    return message;
  }

};