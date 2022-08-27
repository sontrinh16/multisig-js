import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** MsgRegisterRequest defines the SDK message for registering a provider */
export interface MsgRegisterRequest {
  from: string;
  name: string;
  identity: string;
  website: string;
  description: string;
}

/** MsgUpdateRequest defines the SDK message for updating a provider */
export interface MsgUpdateRequest {
  from: string;
  name: string;
  identity: string;
  website: string;
  description: string;
}

/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponse {}

/** MsgUpdateResponse defines the response of message MsgUpdateRequest */
export interface MsgUpdateResponse {}

function createBaseMsgRegisterRequest(): MsgRegisterRequest {
  return {
    from: "",
    name: "",
    identity: "",
    website: "",
    description: ""
  };
}

export const MsgRegisterRequest = {
  encode(message: MsgRegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }

    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }

    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.identity = reader.string();
          break;

        case 4:
          message.website = reader.string();
          break;

        case 5:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRegisterRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      name: isSet(object.name) ? String(object.name) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: MsgRegisterRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.name !== undefined && (obj.name = message.name);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterRequest>): MsgRegisterRequest {
    const message = createBaseMsgRegisterRequest();
    message.from = object.from ?? "";
    message.name = object.name ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.description = object.description ?? "";
    return message;
  }

};

function createBaseMsgUpdateRequest(): MsgUpdateRequest {
  return {
    from: "",
    name: "",
    identity: "",
    website: "",
    description: ""
  };
}

export const MsgUpdateRequest = {
  encode(message: MsgUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }

    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }

    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.identity = reader.string();
          break;

        case 4:
          message.website = reader.string();
          break;

        case 5:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      name: isSet(object.name) ? String(object.name) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: MsgUpdateRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.name !== undefined && (obj.name = message.name);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateRequest>): MsgUpdateRequest {
    const message = createBaseMsgUpdateRequest();
    message.from = object.from ?? "";
    message.name = object.name ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.description = object.description ?? "";
    return message;
  }

};

function createBaseMsgRegisterResponse(): MsgRegisterResponse {
  return {};
}

export const MsgRegisterResponse = {
  encode(_: MsgRegisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterResponse();

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

  fromJSON(_: any): MsgRegisterResponse {
    return {};
  },

  toJSON(_: MsgRegisterResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRegisterResponse>): MsgRegisterResponse {
    const message = createBaseMsgRegisterResponse();
    return message;
  }

};

function createBaseMsgUpdateResponse(): MsgUpdateResponse {
  return {};
}

export const MsgUpdateResponse = {
  encode(_: MsgUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateResponse();

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

  fromJSON(_: any): MsgUpdateResponse {
    return {};
  },

  toJSON(_: MsgUpdateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateResponse>): MsgUpdateResponse {
    const message = createBaseMsgUpdateResponse();
    return message;
  }

};