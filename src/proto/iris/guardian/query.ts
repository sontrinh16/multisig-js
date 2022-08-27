import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Super } from "./guardian";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** QuerySupersRequest is request type for the Query/Supers RPC method */
export interface QuerySupersRequest {
  /** pagination defines an optional pagination for the request */
  pagination: PageRequest;
}

/** QuerySupersResponse is response type for the Query/Supers RPC method */
export interface QuerySupersResponse {
  supers: Super[];
  pagination: PageResponse;
}

function createBaseQuerySupersRequest(): QuerySupersRequest {
  return {
    pagination: undefined
  };
}

export const QuerySupersRequest = {
  encode(message: QuerySupersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupersRequest();

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

  fromJSON(object: any): QuerySupersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySupersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySupersRequest>): QuerySupersRequest {
    const message = createBaseQuerySupersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQuerySupersResponse(): QuerySupersResponse {
  return {
    supers: [],
    pagination: undefined
  };
}

export const QuerySupersResponse = {
  encode(message: QuerySupersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.supers) {
      Super.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupersResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.supers.push(Super.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySupersResponse {
    return {
      supers: Array.isArray(object?.supers) ? object.supers.map((e: any) => Super.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QuerySupersResponse): unknown {
    const obj: any = {};

    if (message.supers) {
      obj.supers = message.supers.map(e => e ? Super.toJSON(e) : undefined);
    } else {
      obj.supers = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QuerySupersResponse>): QuerySupersResponse {
    const message = createBaseQuerySupersResponse();
    message.supers = object.supers?.map(e => Super.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};