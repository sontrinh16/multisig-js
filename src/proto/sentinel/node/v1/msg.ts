import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** MsgRegisterRequest defines the SDK message for registering a node */
export interface MsgRegisterRequest {
  from: string;
  provider: string;
  price: Coin[];
  remoteUrl: string;
}

/** MsgUpdateRequest defines the SDK message for updating a node */
export interface MsgUpdateRequest {
  from: string;
  provider: string;
  price: Coin[];
  remoteUrl: string;
}

/**
 * MsgSetStatusRequest defines the SDK message for modifying the status of a
 * node
 */
export interface MsgSetStatusRequest {
  from: string;
  status: Status;
}

/** MsgRegisterResponse defines the response of message MsgRegisterRequest */
export interface MsgRegisterResponse {}

/** MsgUpdateResponse defines the response of message MsgUpdateRequest */
export interface MsgUpdateResponse {}

/** MsgSetStatusResponse defines the response of message MsgSetStatusRequest */
export interface MsgSetStatusResponse {}

function createBaseMsgRegisterRequest(): MsgRegisterRequest {
  return {
    from: "",
    provider: "",
    price: [],
    remoteUrl: ""
  };
}

export const MsgRegisterRequest = {
  encode(message: MsgRegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }

    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
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
          message.provider = reader.string();
          break;

        case 3:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.remoteUrl = reader.string();
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
      provider: isSet(object.provider) ? String(object.provider) : "",
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      remoteUrl: isSet(object.remoteUrl) ? String(object.remoteUrl) : ""
    };
  },

  toJSON(message: MsgRegisterRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.provider !== undefined && (obj.provider = message.provider);

    if (message.price) {
      obj.price = message.price.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.price = [];
    }

    message.remoteUrl !== undefined && (obj.remoteUrl = message.remoteUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterRequest>): MsgRegisterRequest {
    const message = createBaseMsgRegisterRequest();
    message.from = object.from ?? "";
    message.provider = object.provider ?? "";
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  }

};

function createBaseMsgUpdateRequest(): MsgUpdateRequest {
  return {
    from: "",
    provider: "",
    price: [],
    remoteUrl: ""
  };
}

export const MsgUpdateRequest = {
  encode(message: MsgUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }

    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.remoteUrl !== "") {
      writer.uint32(34).string(message.remoteUrl);
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
          message.provider = reader.string();
          break;

        case 3:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.remoteUrl = reader.string();
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
      provider: isSet(object.provider) ? String(object.provider) : "",
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      remoteUrl: isSet(object.remoteUrl) ? String(object.remoteUrl) : ""
    };
  },

  toJSON(message: MsgUpdateRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.provider !== undefined && (obj.provider = message.provider);

    if (message.price) {
      obj.price = message.price.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.price = [];
    }

    message.remoteUrl !== undefined && (obj.remoteUrl = message.remoteUrl);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateRequest>): MsgUpdateRequest {
    const message = createBaseMsgUpdateRequest();
    message.from = object.from ?? "";
    message.provider = object.provider ?? "";
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.remoteUrl = object.remoteUrl ?? "";
    return message;
  }

};

function createBaseMsgSetStatusRequest(): MsgSetStatusRequest {
  return {
    from: "",
    status: 0
  };
}

export const MsgSetStatusRequest = {
  encode(message: MsgSetStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStatusRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.status = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSetStatusRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0
    };
  },

  toJSON(message: MsgSetStatusRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetStatusRequest>): MsgSetStatusRequest {
    const message = createBaseMsgSetStatusRequest();
    message.from = object.from ?? "";
    message.status = object.status ?? 0;
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

function createBaseMsgSetStatusResponse(): MsgSetStatusResponse {
  return {};
}

export const MsgSetStatusResponse = {
  encode(_: MsgSetStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetStatusResponse();

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

  fromJSON(_: any): MsgSetStatusResponse {
    return {};
  },

  toJSON(_: MsgSetStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSetStatusResponse>): MsgSetStatusResponse {
    const message = createBaseMsgSetStatusResponse();
    return message;
  }

};