import { AdminAccount } from "./types";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "@osmonauts/helpers";
export interface ListAccountsRequest {}
export interface ListAccountsResponse {
  keys: AdminAccount[];
}

function createBaseListAccountsRequest(): ListAccountsRequest {
  return {};
}

export const ListAccountsRequest = {
  encode(_: ListAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccountsRequest();

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

  fromJSON(_: any): ListAccountsRequest {
    return {};
  },

  toJSON(_: ListAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ListAccountsRequest>): ListAccountsRequest {
    const message = createBaseListAccountsRequest();
    return message;
  }

};

function createBaseListAccountsResponse(): ListAccountsResponse {
  return {
    keys: []
  };
}

export const ListAccountsResponse = {
  encode(message: ListAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.keys) {
      AdminAccount.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAccountsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.keys.push(AdminAccount.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ListAccountsResponse {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => AdminAccount.fromJSON(e)) : []
    };
  },

  toJSON(message: ListAccountsResponse): unknown {
    const obj: any = {};

    if (message.keys) {
      obj.keys = message.keys.map(e => e ? AdminAccount.toJSON(e) : undefined);
    } else {
      obj.keys = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ListAccountsResponse>): ListAccountsResponse {
    const message = createBaseListAccountsResponse();
    message.keys = object.keys?.map(e => AdminAccount.fromPartial(e)) || [];
    return message;
  }

};