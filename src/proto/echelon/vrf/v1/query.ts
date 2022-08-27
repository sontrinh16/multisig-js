import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Randomval } from "./randomval";
import { Userval } from "./userval";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export interface QueryGetRandomvalRequest {
  index: string;
}
export interface QueryGetRandomvalResponse {
  randomval: Randomval;
}
export interface QueryAllRandomvalRequest {
  pagination: PageRequest;
}
export interface QueryAllRandomvalResponse {
  randomval: Randomval[];
  pagination: PageResponse;
}
export interface QueryGetUservalRequest {
  index: string;
}
export interface QueryGetUservalResponse {
  userval: Userval;
}
export interface QueryAllUservalRequest {
  pagination: PageRequest;
}
export interface QueryAllUservalResponse {
  userval: Userval[];
  pagination: PageResponse;
}
export interface QueryVerifyValuesRequest {
  pubkey: string;
  message: string;
  vrv: string;
  proof: string;
}
export interface QueryVerifyValuesResponse {
  verified: string;
}

function createBaseQueryGetRandomvalRequest(): QueryGetRandomvalRequest {
  return {
    index: ""
  };
}

export const QueryGetRandomvalRequest = {
  encode(message: QueryGetRandomvalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRandomvalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRandomvalRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetRandomvalRequest {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },

  toJSON(message: QueryGetRandomvalRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetRandomvalRequest>): QueryGetRandomvalRequest {
    const message = createBaseQueryGetRandomvalRequest();
    message.index = object.index ?? "";
    return message;
  }

};

function createBaseQueryGetRandomvalResponse(): QueryGetRandomvalResponse {
  return {
    randomval: undefined
  };
}

export const QueryGetRandomvalResponse = {
  encode(message: QueryGetRandomvalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.randomval !== undefined) {
      Randomval.encode(message.randomval, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetRandomvalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRandomvalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.randomval = Randomval.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetRandomvalResponse {
    return {
      randomval: isSet(object.randomval) ? Randomval.fromJSON(object.randomval) : undefined
    };
  },

  toJSON(message: QueryGetRandomvalResponse): unknown {
    const obj: any = {};
    message.randomval !== undefined && (obj.randomval = message.randomval ? Randomval.toJSON(message.randomval) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetRandomvalResponse>): QueryGetRandomvalResponse {
    const message = createBaseQueryGetRandomvalResponse();
    message.randomval = object.randomval !== undefined && object.randomval !== null ? Randomval.fromPartial(object.randomval) : undefined;
    return message;
  }

};

function createBaseQueryAllRandomvalRequest(): QueryAllRandomvalRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllRandomvalRequest = {
  encode(message: QueryAllRandomvalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRandomvalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRandomvalRequest();

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

  fromJSON(object: any): QueryAllRandomvalRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllRandomvalRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllRandomvalRequest>): QueryAllRandomvalRequest {
    const message = createBaseQueryAllRandomvalRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllRandomvalResponse(): QueryAllRandomvalResponse {
  return {
    randomval: [],
    pagination: undefined
  };
}

export const QueryAllRandomvalResponse = {
  encode(message: QueryAllRandomvalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.randomval) {
      Randomval.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllRandomvalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRandomvalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.randomval.push(Randomval.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllRandomvalResponse {
    return {
      randomval: Array.isArray(object?.randomval) ? object.randomval.map((e: any) => Randomval.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllRandomvalResponse): unknown {
    const obj: any = {};

    if (message.randomval) {
      obj.randomval = message.randomval.map(e => e ? Randomval.toJSON(e) : undefined);
    } else {
      obj.randomval = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllRandomvalResponse>): QueryAllRandomvalResponse {
    const message = createBaseQueryAllRandomvalResponse();
    message.randomval = object.randomval?.map(e => Randomval.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryGetUservalRequest(): QueryGetUservalRequest {
  return {
    index: ""
  };
}

export const QueryGetUservalRequest = {
  encode(message: QueryGetUservalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUservalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUservalRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetUservalRequest {
    return {
      index: isSet(object.index) ? String(object.index) : ""
    };
  },

  toJSON(message: QueryGetUservalRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUservalRequest>): QueryGetUservalRequest {
    const message = createBaseQueryGetUservalRequest();
    message.index = object.index ?? "";
    return message;
  }

};

function createBaseQueryGetUservalResponse(): QueryGetUservalResponse {
  return {
    userval: undefined
  };
}

export const QueryGetUservalResponse = {
  encode(message: QueryGetUservalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userval !== undefined) {
      Userval.encode(message.userval, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetUservalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetUservalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.userval = Userval.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryGetUservalResponse {
    return {
      userval: isSet(object.userval) ? Userval.fromJSON(object.userval) : undefined
    };
  },

  toJSON(message: QueryGetUservalResponse): unknown {
    const obj: any = {};
    message.userval !== undefined && (obj.userval = message.userval ? Userval.toJSON(message.userval) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetUservalResponse>): QueryGetUservalResponse {
    const message = createBaseQueryGetUservalResponse();
    message.userval = object.userval !== undefined && object.userval !== null ? Userval.fromPartial(object.userval) : undefined;
    return message;
  }

};

function createBaseQueryAllUservalRequest(): QueryAllUservalRequest {
  return {
    pagination: undefined
  };
}

export const QueryAllUservalRequest = {
  encode(message: QueryAllUservalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUservalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUservalRequest();

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

  fromJSON(object: any): QueryAllUservalRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllUservalRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUservalRequest>): QueryAllUservalRequest {
    const message = createBaseQueryAllUservalRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryAllUservalResponse(): QueryAllUservalResponse {
  return {
    userval: [],
    pagination: undefined
  };
}

export const QueryAllUservalResponse = {
  encode(message: QueryAllUservalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.userval) {
      Userval.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllUservalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllUservalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.userval.push(Userval.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllUservalResponse {
    return {
      userval: Array.isArray(object?.userval) ? object.userval.map((e: any) => Userval.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryAllUservalResponse): unknown {
    const obj: any = {};

    if (message.userval) {
      obj.userval = message.userval.map(e => e ? Userval.toJSON(e) : undefined);
    } else {
      obj.userval = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllUservalResponse>): QueryAllUservalResponse {
    const message = createBaseQueryAllUservalResponse();
    message.userval = object.userval?.map(e => Userval.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }

};

function createBaseQueryVerifyValuesRequest(): QueryVerifyValuesRequest {
  return {
    pubkey: "",
    message: "",
    vrv: "",
    proof: ""
  };
}

export const QueryVerifyValuesRequest = {
  encode(message: QueryVerifyValuesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubkey !== "") {
      writer.uint32(10).string(message.pubkey);
    }

    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }

    if (message.vrv !== "") {
      writer.uint32(26).string(message.vrv);
    }

    if (message.proof !== "") {
      writer.uint32(34).string(message.proof);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyValuesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyValuesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubkey = reader.string();
          break;

        case 2:
          message.message = reader.string();
          break;

        case 3:
          message.vrv = reader.string();
          break;

        case 4:
          message.proof = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVerifyValuesRequest {
    return {
      pubkey: isSet(object.pubkey) ? String(object.pubkey) : "",
      message: isSet(object.message) ? String(object.message) : "",
      vrv: isSet(object.vrv) ? String(object.vrv) : "",
      proof: isSet(object.proof) ? String(object.proof) : ""
    };
  },

  toJSON(message: QueryVerifyValuesRequest): unknown {
    const obj: any = {};
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    message.message !== undefined && (obj.message = message.message);
    message.vrv !== undefined && (obj.vrv = message.vrv);
    message.proof !== undefined && (obj.proof = message.proof);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVerifyValuesRequest>): QueryVerifyValuesRequest {
    const message = createBaseQueryVerifyValuesRequest();
    message.pubkey = object.pubkey ?? "";
    message.message = object.message ?? "";
    message.vrv = object.vrv ?? "";
    message.proof = object.proof ?? "";
    return message;
  }

};

function createBaseQueryVerifyValuesResponse(): QueryVerifyValuesResponse {
  return {
    verified: ""
  };
}

export const QueryVerifyValuesResponse = {
  encode(message: QueryVerifyValuesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verified !== "") {
      writer.uint32(10).string(message.verified);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVerifyValuesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyValuesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.verified = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVerifyValuesResponse {
    return {
      verified: isSet(object.verified) ? String(object.verified) : ""
    };
  },

  toJSON(message: QueryVerifyValuesResponse): unknown {
    const obj: any = {};
    message.verified !== undefined && (obj.verified = message.verified);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVerifyValuesResponse>): QueryVerifyValuesResponse {
    const message = createBaseQueryVerifyValuesResponse();
    message.verified = object.verified ?? "";
    return message;
  }

};