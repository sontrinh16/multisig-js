import { DecCoin } from "../../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";

/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesRequest {}

/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesResponse {
  minimumGasPrices: DecCoin[];
}

function createBaseQueryMinimumGasPricesRequest(): QueryMinimumGasPricesRequest {
  return {};
}

export const QueryMinimumGasPricesRequest = {
  encode(_: QueryMinimumGasPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinimumGasPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinimumGasPricesRequest();

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

  fromJSON(_: any): QueryMinimumGasPricesRequest {
    return {};
  },

  toJSON(_: QueryMinimumGasPricesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryMinimumGasPricesRequest>): QueryMinimumGasPricesRequest {
    const message = createBaseQueryMinimumGasPricesRequest();
    return message;
  }

};

function createBaseQueryMinimumGasPricesResponse(): QueryMinimumGasPricesResponse {
  return {
    minimumGasPrices: []
  };
}

export const QueryMinimumGasPricesResponse = {
  encode(message: QueryMinimumGasPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minimumGasPrices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMinimumGasPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinimumGasPricesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minimumGasPrices.push(DecCoin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryMinimumGasPricesResponse {
    return {
      minimumGasPrices: Array.isArray(object?.minimumGasPrices) ? object.minimumGasPrices.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },

  toJSON(message: QueryMinimumGasPricesResponse): unknown {
    const obj: any = {};

    if (message.minimumGasPrices) {
      obj.minimumGasPrices = message.minimumGasPrices.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.minimumGasPrices = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<QueryMinimumGasPricesResponse>): QueryMinimumGasPricesResponse {
    const message = createBaseQueryMinimumGasPricesResponse();
    message.minimumGasPrices = object.minimumGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }

};