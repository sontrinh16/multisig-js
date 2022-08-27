import { Registry } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface QueryEntriesResponse {
  registry: Registry;
}
export interface QueryEntriesRequest {}

function createBaseQueryEntriesResponse(): QueryEntriesResponse {
  return {
    registry: undefined
  };
}

export const QueryEntriesResponse = {
  encode(message: QueryEntriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.registry !== undefined) {
      Registry.encode(message.registry, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntriesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.registry = Registry.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryEntriesResponse {
    return {
      registry: isSet(object.registry) ? Registry.fromJSON(object.registry) : undefined
    };
  },

  toJSON(message: QueryEntriesResponse): unknown {
    const obj: any = {};
    message.registry !== undefined && (obj.registry = message.registry ? Registry.toJSON(message.registry) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryEntriesResponse>): QueryEntriesResponse {
    const message = createBaseQueryEntriesResponse();
    message.registry = object.registry !== undefined && object.registry !== null ? Registry.fromPartial(object.registry) : undefined;
    return message;
  }

};

function createBaseQueryEntriesRequest(): QueryEntriesRequest {
  return {};
}

export const QueryEntriesRequest = {
  encode(_: QueryEntriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEntriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEntriesRequest();

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

  fromJSON(_: any): QueryEntriesRequest {
    return {};
  },

  toJSON(_: QueryEntriesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryEntriesRequest>): QueryEntriesRequest {
    const message = createBaseQueryEntriesRequest();
    return message;
  }

};