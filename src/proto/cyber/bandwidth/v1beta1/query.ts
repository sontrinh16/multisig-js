import { DecProto } from "../../../cosmos/base/v1beta1/coin";
import { NeuronBandwidth, Params } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";
export interface QueryLoadRequest {}
export interface QueryLoadResponse {
  load: DecProto;
}
export interface QueryPriceRequest {}
export interface QueryPriceResponse {
  price: DecProto;
}
export interface QueryTotalBandwidthRequest {}
export interface QueryTotalBandwidthResponse {
  totalBandwidth: Long;
}
export interface QueryNeuronBandwidthRequest {
  neuron: string;
}
export interface QueryNeuronBandwidthResponse {
  neuronBandwidth: NeuronBandwidth;
}
export interface QueryParamsRequest {}
export interface QueryParamsResponse {
  params: Params;
}

function createBaseQueryLoadRequest(): QueryLoadRequest {
  return {};
}

export const QueryLoadRequest = {
  encode(_: QueryLoadRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLoadRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLoadRequest();

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

  fromJSON(_: any): QueryLoadRequest {
    return {};
  },

  toJSON(_: QueryLoadRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryLoadRequest>): QueryLoadRequest {
    const message = createBaseQueryLoadRequest();
    return message;
  }

};

function createBaseQueryLoadResponse(): QueryLoadResponse {
  return {
    load: undefined
  };
}

export const QueryLoadResponse = {
  encode(message: QueryLoadResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.load !== undefined) {
      DecProto.encode(message.load, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLoadResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLoadResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.load = DecProto.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryLoadResponse {
    return {
      load: isSet(object.load) ? DecProto.fromJSON(object.load) : undefined
    };
  },

  toJSON(message: QueryLoadResponse): unknown {
    const obj: any = {};
    message.load !== undefined && (obj.load = message.load ? DecProto.toJSON(message.load) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryLoadResponse>): QueryLoadResponse {
    const message = createBaseQueryLoadResponse();
    message.load = object.load !== undefined && object.load !== null ? DecProto.fromPartial(object.load) : undefined;
    return message;
  }

};

function createBaseQueryPriceRequest(): QueryPriceRequest {
  return {};
}

export const QueryPriceRequest = {
  encode(_: QueryPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceRequest();

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

  fromJSON(_: any): QueryPriceRequest {
    return {};
  },

  toJSON(_: QueryPriceRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryPriceRequest>): QueryPriceRequest {
    const message = createBaseQueryPriceRequest();
    return message;
  }

};

function createBaseQueryPriceResponse(): QueryPriceResponse {
  return {
    price: undefined
  };
}

export const QueryPriceResponse = {
  encode(message: QueryPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      DecProto.encode(message.price, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.price = DecProto.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryPriceResponse {
    return {
      price: isSet(object.price) ? DecProto.fromJSON(object.price) : undefined
    };
  },

  toJSON(message: QueryPriceResponse): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? DecProto.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryPriceResponse>): QueryPriceResponse {
    const message = createBaseQueryPriceResponse();
    message.price = object.price !== undefined && object.price !== null ? DecProto.fromPartial(object.price) : undefined;
    return message;
  }

};

function createBaseQueryTotalBandwidthRequest(): QueryTotalBandwidthRequest {
  return {};
}

export const QueryTotalBandwidthRequest = {
  encode(_: QueryTotalBandwidthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBandwidthRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBandwidthRequest();

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

  fromJSON(_: any): QueryTotalBandwidthRequest {
    return {};
  },

  toJSON(_: QueryTotalBandwidthRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryTotalBandwidthRequest>): QueryTotalBandwidthRequest {
    const message = createBaseQueryTotalBandwidthRequest();
    return message;
  }

};

function createBaseQueryTotalBandwidthResponse(): QueryTotalBandwidthResponse {
  return {
    totalBandwidth: Long.UZERO
  };
}

export const QueryTotalBandwidthResponse = {
  encode(message: QueryTotalBandwidthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.totalBandwidth.isZero()) {
      writer.uint32(8).uint64(message.totalBandwidth);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalBandwidthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalBandwidthResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalBandwidth = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTotalBandwidthResponse {
    return {
      totalBandwidth: isSet(object.totalBandwidth) ? Long.fromString(object.totalBandwidth) : Long.UZERO
    };
  },

  toJSON(message: QueryTotalBandwidthResponse): unknown {
    const obj: any = {};
    message.totalBandwidth !== undefined && (obj.totalBandwidth = (message.totalBandwidth || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTotalBandwidthResponse>): QueryTotalBandwidthResponse {
    const message = createBaseQueryTotalBandwidthResponse();
    message.totalBandwidth = object.totalBandwidth !== undefined && object.totalBandwidth !== null ? Long.fromValue(object.totalBandwidth) : Long.UZERO;
    return message;
  }

};

function createBaseQueryNeuronBandwidthRequest(): QueryNeuronBandwidthRequest {
  return {
    neuron: ""
  };
}

export const QueryNeuronBandwidthRequest = {
  encode(message: QueryNeuronBandwidthRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.neuron !== "") {
      writer.uint32(10).string(message.neuron);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNeuronBandwidthRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNeuronBandwidthRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.neuron = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNeuronBandwidthRequest {
    return {
      neuron: isSet(object.neuron) ? String(object.neuron) : ""
    };
  },

  toJSON(message: QueryNeuronBandwidthRequest): unknown {
    const obj: any = {};
    message.neuron !== undefined && (obj.neuron = message.neuron);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryNeuronBandwidthRequest>): QueryNeuronBandwidthRequest {
    const message = createBaseQueryNeuronBandwidthRequest();
    message.neuron = object.neuron ?? "";
    return message;
  }

};

function createBaseQueryNeuronBandwidthResponse(): QueryNeuronBandwidthResponse {
  return {
    neuronBandwidth: undefined
  };
}

export const QueryNeuronBandwidthResponse = {
  encode(message: QueryNeuronBandwidthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.neuronBandwidth !== undefined) {
      NeuronBandwidth.encode(message.neuronBandwidth, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNeuronBandwidthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNeuronBandwidthResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.neuronBandwidth = NeuronBandwidth.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryNeuronBandwidthResponse {
    return {
      neuronBandwidth: isSet(object.neuronBandwidth) ? NeuronBandwidth.fromJSON(object.neuronBandwidth) : undefined
    };
  },

  toJSON(message: QueryNeuronBandwidthResponse): unknown {
    const obj: any = {};
    message.neuronBandwidth !== undefined && (obj.neuronBandwidth = message.neuronBandwidth ? NeuronBandwidth.toJSON(message.neuronBandwidth) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryNeuronBandwidthResponse>): QueryNeuronBandwidthResponse {
    const message = createBaseQueryNeuronBandwidthResponse();
    message.neuronBandwidth = object.neuronBandwidth !== undefined && object.neuronBandwidth !== null ? NeuronBandwidth.fromPartial(object.neuronBandwidth) : undefined;
    return message;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }

};