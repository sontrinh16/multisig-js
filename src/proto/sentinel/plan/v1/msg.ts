import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { Status, statusFromJSON, statusToJSON } from "../../types/v1/status";
import * as _m0 from "protobufjs/minimal";
import { toDuration, fromDuration, isSet, DeepPartial, Long } from "@osmonauts/helpers";

/** MsgAddRequest defines the SDK message for adding a plan */
export interface MsgAddRequest {
  from: string;
  price: Coin[];
  validity: string;
  bytes: string;
}

/**
 * MsgSetStatusRequest defines the SDK message for modifying the status of a
 * plan
 */
export interface MsgSetStatusRequest {
  from: string;
  id: Long;
  status: Status;
}

/** MsgAddNodeRequest defines the SDK message for adding a node to a plan */
export interface MsgAddNodeRequest {
  from: string;
  id: Long;
  address: string;
}

/** MsgRemoveNodeRequest defines the SDK message for removing a node from a plan */
export interface MsgRemoveNodeRequest {
  from: string;
  id: Long;
  address: string;
}

/** MsgAddResponse defines the response of message MsgRegisterRequest */
export interface MsgAddResponse {}

/** MsgSetStatusResponse defines the response of message MsgSetStatusRequest */
export interface MsgSetStatusResponse {}

/** MsgAddNodeResponse defines the response of message MsgAddNodeRequest */
export interface MsgAddNodeResponse {}

/** MsgRemoveNodeResponse defines the response of message MsgRemoveNodeRequest */
export interface MsgRemoveNodeResponse {}

function createBaseMsgAddRequest(): MsgAddRequest {
  return {
    from: "",
    price: [],
    validity: undefined,
    bytes: ""
  };
}

export const MsgAddRequest = {
  encode(message: MsgAddRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    for (const v of message.price) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.validity !== undefined) {
      Duration.encode(toDuration(message.validity), writer.uint32(26).fork()).ldelim();
    }

    if (message.bytes !== "") {
      writer.uint32(34).string(message.bytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.price.push(Coin.decode(reader, reader.uint32()));
          break;

        case 3:
          message.validity = fromDuration(Duration.decode(reader, reader.uint32()));
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

  fromJSON(object: any): MsgAddRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      price: Array.isArray(object?.price) ? object.price.map((e: any) => Coin.fromJSON(e)) : [],
      validity: isSet(object.validity) ? String(object.validity) : undefined,
      bytes: isSet(object.bytes) ? String(object.bytes) : ""
    };
  },

  toJSON(message: MsgAddRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);

    if (message.price) {
      obj.price = message.price.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.price = [];
    }

    message.validity !== undefined && (obj.validity = message.validity);
    message.bytes !== undefined && (obj.bytes = message.bytes);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddRequest>): MsgAddRequest {
    const message = createBaseMsgAddRequest();
    message.from = object.from ?? "";
    message.price = object.price?.map(e => Coin.fromPartial(e)) || [];
    message.validity = object.validity ?? undefined;
    message.bytes = object.bytes ?? "";
    return message;
  }

};

function createBaseMsgSetStatusRequest(): MsgSetStatusRequest {
  return {
    from: "",
    id: Long.UZERO,
    status: 0
  };
}

export const MsgSetStatusRequest = {
  encode(message: MsgSetStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
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
          message.id = (reader.uint64() as Long);
          break;

        case 3:
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
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      status: isSet(object.status) ? statusFromJSON(object.status) : 0
    };
  },

  toJSON(message: MsgSetStatusRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetStatusRequest>): MsgSetStatusRequest {
    const message = createBaseMsgSetStatusRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.status = object.status ?? 0;
    return message;
  }

};

function createBaseMsgAddNodeRequest(): MsgAddNodeRequest {
  return {
    from: "",
    id: Long.UZERO,
    address: ""
  };
}

export const MsgAddNodeRequest = {
  encode(message: MsgAddNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddNodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddNodeRequest();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddNodeRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: MsgAddNodeRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddNodeRequest>): MsgAddNodeRequest {
    const message = createBaseMsgAddNodeRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseMsgRemoveNodeRequest(): MsgRemoveNodeRequest {
  return {
    from: "",
    id: Long.UZERO,
    address: ""
  };
}

export const MsgRemoveNodeRequest = {
  encode(message: MsgRemoveNodeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }

    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveNodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveNodeRequest();

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

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgRemoveNodeRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      address: isSet(object.address) ? String(object.address) : ""
    };
  },

  toJSON(message: MsgRemoveNodeRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveNodeRequest>): MsgRemoveNodeRequest {
    const message = createBaseMsgRemoveNodeRequest();
    message.from = object.from ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.address = object.address ?? "";
    return message;
  }

};

function createBaseMsgAddResponse(): MsgAddResponse {
  return {};
}

export const MsgAddResponse = {
  encode(_: MsgAddResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddResponse();

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

  fromJSON(_: any): MsgAddResponse {
    return {};
  },

  toJSON(_: MsgAddResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddResponse>): MsgAddResponse {
    const message = createBaseMsgAddResponse();
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

function createBaseMsgAddNodeResponse(): MsgAddNodeResponse {
  return {};
}

export const MsgAddNodeResponse = {
  encode(_: MsgAddNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddNodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddNodeResponse();

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

  fromJSON(_: any): MsgAddNodeResponse {
    return {};
  },

  toJSON(_: MsgAddNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddNodeResponse>): MsgAddNodeResponse {
    const message = createBaseMsgAddNodeResponse();
    return message;
  }

};

function createBaseMsgRemoveNodeResponse(): MsgRemoveNodeResponse {
  return {};
}

export const MsgRemoveNodeResponse = {
  encode(_: MsgRemoveNodeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveNodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveNodeResponse();

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

  fromJSON(_: any): MsgRemoveNodeResponse {
    return {};
  },

  toJSON(_: MsgRemoveNodeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRemoveNodeResponse>): MsgRemoveNodeResponse {
    const message = createBaseMsgRemoveNodeResponse();
    return message;
  }

};