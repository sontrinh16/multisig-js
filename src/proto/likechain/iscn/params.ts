import { DecCoin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface Params {
  registryName: string;
  feePerByte: DecCoin;
}

function createBaseParams(): Params {
  return {
    registryName: "",
    feePerByte: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registryName !== "") {
      writer.uint32(10).string(message.registryName);
    }

    if (message.feePerByte !== undefined) {
      DecCoin.encode(message.feePerByte, writer.uint32(18).fork()).ldelim();
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
          message.registryName = reader.string();
          break;

        case 2:
          message.feePerByte = DecCoin.decode(reader, reader.uint32());
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
      registryName: isSet(object.registryName) ? String(object.registryName) : "",
      feePerByte: isSet(object.feePerByte) ? DecCoin.fromJSON(object.feePerByte) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.registryName !== undefined && (obj.registryName = message.registryName);
    message.feePerByte !== undefined && (obj.feePerByte = message.feePerByte ? DecCoin.toJSON(message.feePerByte) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.registryName = object.registryName ?? "";
    message.feePerByte = object.feePerByte !== undefined && object.feePerByte !== null ? DecCoin.fromPartial(object.feePerByte) : undefined;
    return message;
  }

};