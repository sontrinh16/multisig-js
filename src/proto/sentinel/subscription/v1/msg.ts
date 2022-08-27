import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";

/** MsgSubscribeToNodeRequest defines the SDK message for subscribing to a node */
export interface MsgSubscribeToNodeRequest {
  from: string;
  address: string;
  deposit: Coin;
}

/** MsgSubscribeToPlanRequest defines the SDK message for subscribing to a plan */
export interface MsgSubscribeToPlanRequest {
  from: string;
  id: Long;
  denom: string;
}

/** MsgCancelRequest defines the SDK message for cancelling a subscription */
export interface MsgCancelRequest {
  from: string;
  id: Long;
}

/** MsgAddQuotaRequest defines the SDK message for adding the quota to an address */
export interface MsgAddQuotaRequest {
  from: string;
  id: Long;
  address: string;
  bytes: string;
}

/**
 * MsgUpdateQuotaRequest defines the SDK message for updating the quota of an
 * address
 */
export interface MsgUpdateQuotaRequest {
  from: string;
  id: Long;
  address: string;
  bytes: string;
}

/**
 * MsgSubscribeToNodeResponse defines the response of message
 * MsgSubscribeToNodeRequest
 */
export interface MsgSubscribeToNodeResponse {}

/**
 * MsgSubscribeToPlanResponse defines the response of message
 * MsgSubscribeToPlanRequest
 */
export interface MsgSubscribeToPlanResponse {}

/** MsgCancelResponse defines the response of message MsgCancelRequest */
export interface MsgCancelResponse {}

/** MsgAddQuotaResponse defines the response of message MsgAddQuotaRequest */
export interface MsgAddQuotaResponse {}

/** MsgUpdateQuotaResponse defines the response of message MsgUpdateQuotaRequest */
export interface MsgUpdateQuotaResponse {}

function createBaseMsgSubscribeToNodeRequest(): MsgSubscribeToNodeRequest {
  return {
    from: "",
    address: "",
    deposit: undefined
  };
}

export const MsgSubscribeToNodeRequest = {
  encode(message: MsgSubscribeToNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToNodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToNodeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubscribeToNodeRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      address: isSet(object.address) ? String(object.address) : "",
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined
    };
  },

  toJSON(message: MsgSubscribeToNodeRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.address !== undefined && (obj.address = message.address);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubscribeToNodeRequest>): MsgSubscribeToNodeRequest {
    const message = createBaseMsgSubscribeToNodeRequest();
    message.from = object.from ?? "";
    message.address = object.address ?? "";
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  }

};

function createBaseMsgSubscribeToPlanRequest(): MsgSubscribeToPlanRequest {
  return {
    from: "",
    id: Long.UZERO,
    denom: ""
  };
}

export const MsgSubscribeToPlanRequest = {
  encode(message: MsgSubscribeToPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToPlanRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.denom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubscribeToPlanRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },

  toJSON(message: MsgSubscribeToPlanRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubscribeToPlanRequest>): MsgSubscribeToPlanRequest {
    const message = createBaseMsgSubscribeToPlanRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.denom = object.denom ?? "";
    return message;
  }

};

function createBaseMsgCancelRequest(): MsgCancelRequest {
  return {
    from: "",
    id: Long.UZERO
  };
}

export const MsgCancelRequest = {
  encode(message: MsgCancelRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCancelRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO
    };
  },

  toJSON(message: MsgCancelRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelRequest>): MsgCancelRequest {
    const message = createBaseMsgCancelRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }

};

function createBaseMsgAddQuotaRequest(): MsgAddQuotaRequest {
  return {
    from: "",
    id: Long.UZERO,
    address: "",
    bytes: ""
  };
}

export const MsgAddQuotaRequest = {
  encode(message: MsgAddQuotaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    if (message.bytes !== "") {
      writer.uint32(34).string(message.bytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddQuotaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddQuotaRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.address = reader.string();
          break;

        case 4:
          message.bytes = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddQuotaRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      bytes: isSet(object.bytes) ? String(object.bytes) : ""
    };
  },

  toJSON(message: MsgAddQuotaRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.bytes !== undefined && (obj.bytes = message.bytes);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddQuotaRequest>): MsgAddQuotaRequest {
    const message = createBaseMsgAddQuotaRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    message.bytes = object.bytes ?? "";
    return message;
  }

};

function createBaseMsgUpdateQuotaRequest(): MsgUpdateQuotaRequest {
  return {
    from: "",
    id: Long.UZERO,
    address: "",
    bytes: ""
  };
}

export const MsgUpdateQuotaRequest = {
  encode(message: MsgUpdateQuotaRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    if (message.bytes !== "") {
      writer.uint32(34).string(message.bytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateQuotaRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateQuotaRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.id = (reader.uint64() as Long);
          break;

        case 3:
          message.address = reader.string();
          break;

        case 4:
          message.bytes = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUpdateQuotaRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : "",
      bytes: isSet(object.bytes) ? String(object.bytes) : ""
    };
  },

  toJSON(message: MsgUpdateQuotaRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    message.bytes !== undefined && (obj.bytes = message.bytes);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateQuotaRequest>): MsgUpdateQuotaRequest {
    const message = createBaseMsgUpdateQuotaRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    message.bytes = object.bytes ?? "";
    return message;
  }

};

function createBaseMsgSubscribeToNodeResponse(): MsgSubscribeToNodeResponse {
  return {};
}

export const MsgSubscribeToNodeResponse = {
  encode(_: MsgSubscribeToNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToNodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToNodeResponse();

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

  fromJSON(_: any): MsgSubscribeToNodeResponse {
    return {};
  },

  toJSON(_: MsgSubscribeToNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSubscribeToNodeResponse>): MsgSubscribeToNodeResponse {
    const message = createBaseMsgSubscribeToNodeResponse();
    return message;
  }

};

function createBaseMsgSubscribeToPlanResponse(): MsgSubscribeToPlanResponse {
  return {};
}

export const MsgSubscribeToPlanResponse = {
  encode(_: MsgSubscribeToPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubscribeToPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubscribeToPlanResponse();

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

  fromJSON(_: any): MsgSubscribeToPlanResponse {
    return {};
  },

  toJSON(_: MsgSubscribeToPlanResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSubscribeToPlanResponse>): MsgSubscribeToPlanResponse {
    const message = createBaseMsgSubscribeToPlanResponse();
    return message;
  }

};

function createBaseMsgCancelResponse(): MsgCancelResponse {
  return {};
}

export const MsgCancelResponse = {
  encode(_: MsgCancelResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelResponse();

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

  fromJSON(_: any): MsgCancelResponse {
    return {};
  },

  toJSON(_: MsgCancelResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCancelResponse>): MsgCancelResponse {
    const message = createBaseMsgCancelResponse();
    return message;
  }

};

function createBaseMsgAddQuotaResponse(): MsgAddQuotaResponse {
  return {};
}

export const MsgAddQuotaResponse = {
  encode(_: MsgAddQuotaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddQuotaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddQuotaResponse();

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

  fromJSON(_: any): MsgAddQuotaResponse {
    return {};
  },

  toJSON(_: MsgAddQuotaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddQuotaResponse>): MsgAddQuotaResponse {
    const message = createBaseMsgAddQuotaResponse();
    return message;
  }

};

function createBaseMsgUpdateQuotaResponse(): MsgUpdateQuotaResponse {
  return {};
}

export const MsgUpdateQuotaResponse = {
  encode(_: MsgUpdateQuotaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateQuotaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateQuotaResponse();

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

  fromJSON(_: any): MsgUpdateQuotaResponse {
    return {};
  },

  toJSON(_: MsgUpdateQuotaResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateQuotaResponse>): MsgUpdateQuotaResponse {
    const message = createBaseMsgUpdateQuotaResponse();
    return message;
  }

};