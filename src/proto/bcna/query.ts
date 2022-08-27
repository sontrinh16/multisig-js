import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { Bitcannaid } from "./bitcannaid";
import { Supplychain } from "./supplychain";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet, Long } from "@osmonauts/helpers";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryGetBitcannaidRequest {
  id: Long;
}
export interface QueryGetBitcannaidResponse {
  Bitcannaid: Bitcannaid;
}
export interface QueryAllBitcannaidRequest {
  pagination: PageRequest;
}
export interface QueryAllBitcannaidResponse {
  Bitcannaid: Bitcannaid[];
  pagination: PageResponse;
}
export interface QueryGetSupplychainRequest {
  id: Long;
}
export interface QueryGetSupplychainResponse {
  Supplychain: Supplychain;
}
export interface QueryAllSupplychainRequest {
  pagination: PageRequest;
}
export interface QueryAllSupplychainResponse {
  Supplychain: Supplychain[];
  pagination: PageResponse;
}

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

function createBaseQueryGetBitcannaidRequest(): QueryGetBitcannaidRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryGetBitcannaidRequest = {
  encode(message: QueryGetBitcannaidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBitcannaidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBitcannaidRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetBitcannaidRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: QueryGetBitcannaidRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBitcannaidRequest>): QueryGetBitcannaidRequest {
    const message = createBaseQueryGetBitcannaidRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetBitcannaidResponse(): QueryGetBitcannaidResponse {
  return {
    Bitcannaid: undefined
  };
}

export const QueryGetBitcannaidResponse = {
  encode(message: QueryGetBitcannaidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Bitcannaid !== undefined) {
      Bitcannaid.encode(message.Bitcannaid, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetBitcannaidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetBitcannaidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Bitcannaid = Bitcannaid.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetBitcannaidResponse {
    return {
      Bitcannaid: isSet(object.Bitcannaid) ? Bitcannaid.fromJSON(object.Bitcannaid) : undefined
    };
  },

  toJSON(message: QueryGetBitcannaidResponse): unknown {
    const obj: any = {};
    message.Bitcannaid !== undefined && (obj.Bitcannaid = message.Bitcannaid ? Bitcannaid.toJSON(message.Bitcannaid) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetBitcannaidResponse>): QueryGetBitcannaidResponse {
    const message = createBaseQueryGetBitcannaidResponse();
    message.Bitcannaid = object.Bitcannaid !== undefined && object.Bitcannaid !== null ? Bitcannaid.fromPartial(object.Bitcannaid) : undefined;
    return message;
  }

};

function createBaseQueryAllBitcannaidRequest(): QueryAllBitcannaidRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllBitcannaidRequest = {
  encode(message: QueryAllBitcannaidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBitcannaidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBitcannaidRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllBitcannaidRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllBitcannaidRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBitcannaidRequest>): QueryAllBitcannaidRequest {
    const message = createBaseQueryAllBitcannaidRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllBitcannaidResponse(): QueryAllBitcannaidResponse {
  return {
    Bitcannaid: [],
    pagination: undefined
  };
}

export const QueryAllBitcannaidResponse = {
  encode(message: QueryAllBitcannaidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Bitcannaid) {
      Bitcannaid.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllBitcannaidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllBitcannaidResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Bitcannaid.push(Bitcannaid.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllBitcannaidResponse {
    return {
      Bitcannaid: Array.isArray(object?.Bitcannaid) ? object.Bitcannaid.map((e: any) => Bitcannaid.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllBitcannaidResponse): unknown {
    const obj: any = {};

    if (message.Bitcannaid) {
      obj.Bitcannaid = message.Bitcannaid.map(e => e ? Bitcannaid.toJSON(e) : undefined);
    } else {
      obj.Bitcannaid = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllBitcannaidResponse>): QueryAllBitcannaidResponse {
    const message = createBaseQueryAllBitcannaidResponse();
    message.Bitcannaid = object.Bitcannaid?.map(e => Bitcannaid.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetSupplychainRequest(): QueryGetSupplychainRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryGetSupplychainRequest = {
  encode(message: QueryGetSupplychainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSupplychainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSupplychainRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetSupplychainRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: QueryGetSupplychainRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetSupplychainRequest>): QueryGetSupplychainRequest {
    const message = createBaseQueryGetSupplychainRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryGetSupplychainResponse(): QueryGetSupplychainResponse {
  return {
    Supplychain: undefined
  };
}

export const QueryGetSupplychainResponse = {
  encode(message: QueryGetSupplychainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Supplychain !== undefined) {
      Supplychain.encode(message.Supplychain, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetSupplychainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSupplychainResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Supplychain = Supplychain.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetSupplychainResponse {
    return {
      Supplychain: isSet(object.Supplychain) ? Supplychain.fromJSON(object.Supplychain) : undefined
    };
  },

  toJSON(message: QueryGetSupplychainResponse): unknown {
    const obj: any = {};
    message.Supplychain !== undefined && (obj.Supplychain = message.Supplychain ? Supplychain.toJSON(message.Supplychain) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetSupplychainResponse>): QueryGetSupplychainResponse {
    const message = createBaseQueryGetSupplychainResponse();
    message.Supplychain = object.Supplychain !== undefined && object.Supplychain !== null ? Supplychain.fromPartial(object.Supplychain) : undefined;
    return message;
  }

};

function createBaseQueryAllSupplychainRequest(): QueryAllSupplychainRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllSupplychainRequest = {
  encode(message: QueryAllSupplychainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSupplychainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSupplychainRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllSupplychainRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllSupplychainRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllSupplychainRequest>): QueryAllSupplychainRequest {
    const message = createBaseQueryAllSupplychainRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllSupplychainResponse(): QueryAllSupplychainResponse {
  return {
    Supplychain: [],
    pagination: undefined
  };
}

export const QueryAllSupplychainResponse = {
  encode(message: QueryAllSupplychainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Supplychain) {
      Supplychain.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllSupplychainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllSupplychainResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.Supplychain.push(Supplychain.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryAllSupplychainResponse {
    return {
      Supplychain: Array.isArray(object?.Supplychain) ? object.Supplychain.map((e: any) => Supplychain.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllSupplychainResponse): unknown {
    const obj: any = {};

    if (message.Supplychain) {
      obj.Supplychain = message.Supplychain.map(e => e ? Supplychain.toJSON(e) : undefined);
    } else {
      obj.Supplychain = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllSupplychainResponse>): QueryAllSupplychainResponse {
    const message = createBaseQueryAllSupplychainResponse();
    message.Supplychain = object.Supplychain?.map(e => Supplychain.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};