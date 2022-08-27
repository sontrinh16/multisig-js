import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface PageRequest {
  page: number;
  perPage: number;
}
export interface PageResponse {
  total: number;
}

function createBasePageRequest(): PageRequest {
  return {
    page: 0,
    perPage: 0
  };
}

export const PageRequest = {
  encode(message: PageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.page !== 0) {
      writer.uint32(8).uint32(message.page);
    }

    if (message.perPage !== 0) {
      writer.uint32(16).uint32(message.perPage);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.page = reader.uint32();
          break;

        case 2:
          message.perPage = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PageRequest {
    return {
      page: isSet(object.page) ? Number(object.page) : 0,
      perPage: isSet(object.perPage) ? Number(object.perPage) : 0
    };
  },

  toJSON(message: PageRequest): unknown {
    const obj: any = {};
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.perPage !== undefined && (obj.perPage = Math.round(message.perPage));
    return obj;
  },

  fromPartial(object: DeepPartial<PageRequest>): PageRequest {
    const message = createBasePageRequest();
    message.page = object.page ?? 0;
    message.perPage = object.perPage ?? 0;
    return message;
  }

};

function createBasePageResponse(): PageResponse {
  return {
    total: 0
  };
}

export const PageResponse = {
  encode(message: PageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.total !== 0) {
      writer.uint32(8).uint32(message.total);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.total = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PageResponse {
    return {
      total: isSet(object.total) ? Number(object.total) : 0
    };
  },

  toJSON(message: PageResponse): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  fromPartial(object: DeepPartial<PageResponse>): PageResponse {
    const message = createBasePageResponse();
    message.total = object.total ?? 0;
    return message;
  }

};