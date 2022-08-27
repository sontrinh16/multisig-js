import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface Supplychain {
  id: Long;
  product: string;
  info: string;
  supplyinfo: string;
  creator: string;
}

function createBaseSupplychain(): Supplychain {
  return {
    id: Long.UZERO,
    product: "",
    info: "",
    supplyinfo: "",
    creator: ""
  };
}

export const Supplychain = {
  encode(message: Supplychain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (message.product !== "") {
      writer.uint32(18).string(message.product);
    }

    if (message.info !== "") {
      writer.uint32(26).string(message.info);
    }

    if (message.supplyinfo !== "") {
      writer.uint32(34).string(message.supplyinfo);
    }

    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Supplychain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupplychain();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.product = reader.string();
          break;

        case 3:
          message.info = reader.string();
          break;

        case 4:
          message.supplyinfo = reader.string();
          break;

        case 5:
          message.creator = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Supplychain {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      product: isSet(object.product) ? String(object.product) : "",
      info: isSet(object.info) ? String(object.info) : "",
      supplyinfo: isSet(object.supplyinfo) ? String(object.supplyinfo) : "",
      creator: isSet(object.creator) ? String(object.creator) : ""
    };
  },

  toJSON(message: Supplychain): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.product !== undefined && (obj.product = message.product);
    message.info !== undefined && (obj.info = message.info);
    message.supplyinfo !== undefined && (obj.supplyinfo = message.supplyinfo);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Supplychain>): Supplychain {
    const message = createBaseSupplychain();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.product = object.product ?? "";
    message.info = object.info ?? "";
    message.supplyinfo = object.supplyinfo ?? "";
    message.creator = object.creator ?? "";
    return message;
  }

};