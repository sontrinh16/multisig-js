import { DecCoin } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "@osmonauts/helpers";
export interface MinGasPriceRequest {}
export interface MinGasPriceResponse {
  minGasPrice: DecCoin;
}

function createBaseMinGasPriceRequest(): MinGasPriceRequest {
  return {};
}

export const MinGasPriceRequest = {
  encode(_: MinGasPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinGasPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinGasPriceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(_: any): MinGasPriceRequest {
    return {};
  },

  toJSON(_: MinGasPriceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MinGasPriceRequest>): MinGasPriceRequest {
    const message = createBaseMinGasPriceRequest();
    return message;
  }

};

function createBaseMinGasPriceResponse(): MinGasPriceResponse {
  return {
    minGasPrice: undefined
  };
}

export const MinGasPriceResponse = {
  encode(message: MinGasPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minGasPrice !== undefined) {
      DecCoin.encode(message.minGasPrice, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MinGasPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinGasPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minGasPrice = DecCoin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MinGasPriceResponse {
    return {
      minGasPrice: isSet(object.minGasPrice) ? DecCoin.fromJSON(object.minGasPrice) : undefined
    };
  },

  toJSON(message: MinGasPriceResponse): unknown {
    const obj: any = {};
    message.minGasPrice !== undefined && (obj.minGasPrice = message.minGasPrice ? DecCoin.toJSON(message.minGasPrice) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MinGasPriceResponse>): MinGasPriceResponse {
    const message = createBaseMinGasPriceResponse();
    message.minGasPrice = object.minGasPrice !== undefined && object.minGasPrice !== null ? DecCoin.fromPartial(object.minGasPrice) : undefined;
    return message;
  }

};