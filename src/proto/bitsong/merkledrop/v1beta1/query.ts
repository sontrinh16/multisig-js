import { Merkledrop } from "./merkledrop";
import { Params } from "./params";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";
export interface QueryMerkledropRequest {
  id: Long;
}
export interface QueryMerkledropResponse {
  merkledrop: Merkledrop;
}
export interface QueryIndexClaimedRequest {
  id: Long;
  index: Long;
}
export interface QueryIndexClaimedResponse {
  isClaimed: boolean;
}

/** QueryParametersRequest is request type for the Query/Parameters RPC method */
export interface QueryParamsRequest {}

/** QueryParametersResponse is response type for the Query/Parameters RPC method */
export interface QueryParamsResponse {
  params: Params;
}

function createBaseQueryMerkledropRequest(): QueryMerkledropRequest {
  return {
    id: Long.UZERO
  };
}

export const QueryMerkledropRequest = {
  encode(message: QueryMerkledropRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMerkledropRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMerkledropRequest();

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

  fromJSON(object: any): QueryMerkledropRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: QueryMerkledropRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMerkledropRequest>): QueryMerkledropRequest {
    const message = createBaseQueryMerkledropRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseQueryMerkledropResponse(): QueryMerkledropResponse {
  return {
    merkledrop: undefined
  };
}

export const QueryMerkledropResponse = {
  encode(message: QueryMerkledropResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.merkledrop !== undefined) {
      Merkledrop.encode(message.merkledrop, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMerkledropResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMerkledropResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.merkledrop = Merkledrop.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryMerkledropResponse {
    return {
      merkledrop: isSet(object.merkledrop) ? Merkledrop.fromJSON(object.merkledrop) : undefined
    };
  },

  toJSON(message: QueryMerkledropResponse): unknown {
    const obj: any = {};
    message.merkledrop !== undefined && (obj.merkledrop = message.merkledrop ? Merkledrop.toJSON(message.merkledrop) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryMerkledropResponse>): QueryMerkledropResponse {
    const message = createBaseQueryMerkledropResponse();
    message.merkledrop = object.merkledrop !== undefined && object.merkledrop !== null ? Merkledrop.fromPartial(object.merkledrop) : undefined;
    return message;
  }

};

function createBaseQueryIndexClaimedRequest(): QueryIndexClaimedRequest {
  return {
    id: Long.UZERO,
    index: Long.UZERO
  };
}

export const QueryIndexClaimedRequest = {
  encode(message: QueryIndexClaimedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    if (!message.index.isZero()) {
      writer.uint32(16).uint64(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndexClaimedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIndexClaimedRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.index = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIndexClaimedRequest {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      index: isSet(object.index) ? Long.fromString(object.index) : Long.UZERO
    };
  },

  toJSON(message: QueryIndexClaimedRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIndexClaimedRequest>): QueryIndexClaimedRequest {
    const message = createBaseQueryIndexClaimedRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    return message;
  }

};

function createBaseQueryIndexClaimedResponse(): QueryIndexClaimedResponse {
  return {
    isClaimed: false
  };
}

export const QueryIndexClaimedResponse = {
  encode(message: QueryIndexClaimedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.isClaimed === true) {
      writer.uint32(8).bool(message.isClaimed);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryIndexClaimedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIndexClaimedResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.isClaimed = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryIndexClaimedResponse {
    return {
      isClaimed: isSet(object.isClaimed) ? Boolean(object.isClaimed) : false
    };
  },

  toJSON(message: QueryIndexClaimedResponse): unknown {
    const obj: any = {};
    message.isClaimed !== undefined && (obj.isClaimed = message.isClaimed);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryIndexClaimedResponse>): QueryIndexClaimedResponse {
    const message = createBaseQueryIndexClaimedResponse();
    message.isClaimed = object.isClaimed ?? false;
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