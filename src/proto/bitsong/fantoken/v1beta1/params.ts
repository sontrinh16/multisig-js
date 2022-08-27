import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** Params defines fantoken module's parameters */
export interface Params {
  issueFee: Coin;
  mintFee: Coin;
  burnFee: Coin;
}

function createBaseParams(): Params {
  return {
    issueFee: undefined,
    mintFee: undefined,
    burnFee: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.issueFee !== undefined) {
      Coin.encode(message.issueFee, writer.uint32(10).fork()).ldelim();
    }

    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(18).fork()).ldelim();
    }

    if (message.burnFee !== undefined) {
      Coin.encode(message.burnFee, writer.uint32(26).fork()).ldelim();
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
          message.issueFee = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;

        case 3:
          message.burnFee = Coin.decode(reader, reader.uint32());
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
      issueFee: isSet(object.issueFee) ? Coin.fromJSON(object.issueFee) : undefined,
      mintFee: isSet(object.mintFee) ? Coin.fromJSON(object.mintFee) : undefined,
      burnFee: isSet(object.burnFee) ? Coin.fromJSON(object.burnFee) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.issueFee !== undefined && (obj.issueFee = message.issueFee ? Coin.toJSON(message.issueFee) : undefined);
    message.mintFee !== undefined && (obj.mintFee = message.mintFee ? Coin.toJSON(message.mintFee) : undefined);
    message.burnFee !== undefined && (obj.burnFee = message.burnFee ? Coin.toJSON(message.burnFee) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.issueFee = object.issueFee !== undefined && object.issueFee !== null ? Coin.fromPartial(object.issueFee) : undefined;
    message.mintFee = object.mintFee !== undefined && object.mintFee !== null ? Coin.fromPartial(object.mintFee) : undefined;
    message.burnFee = object.burnFee !== undefined && object.burnFee !== null ? Coin.fromPartial(object.burnFee) : undefined;
    return message;
  }

};