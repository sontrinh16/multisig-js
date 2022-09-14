import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface RegisterProxyRequest {
  sender: Uint8Array;
  proxyAddr: Uint8Array;
}
export interface RegisterProxyResponse {}
export interface DeactivateProxyRequest {
  sender: Uint8Array;
}
export interface DeactivateProxyResponse {}

function createBaseRegisterProxyRequest(): RegisterProxyRequest {
  return {
    sender: new Uint8Array(),
    proxyAddr: new Uint8Array()
  };
}

export const RegisterProxyRequest = {
  encode(message: RegisterProxyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.proxyAddr.length !== 0) {
      writer.uint32(18).bytes(message.proxyAddr);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterProxyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterProxyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.proxyAddr = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RegisterProxyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      proxyAddr: isSet(object.proxyAddr) ? bytesFromBase64(object.proxyAddr) : new Uint8Array()
    };
  },

  toJSON(message: RegisterProxyRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.proxyAddr !== undefined && (obj.proxyAddr = base64FromBytes(message.proxyAddr !== undefined ? message.proxyAddr : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<RegisterProxyRequest>): RegisterProxyRequest {
    const message = createBaseRegisterProxyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.proxyAddr = object.proxyAddr ?? new Uint8Array();
    return message;
  }

};

function createBaseRegisterProxyResponse(): RegisterProxyResponse {
  return {};
}

export const RegisterProxyResponse = {
  encode(_: RegisterProxyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterProxyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterProxyResponse();

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

  fromJSON(_: any): RegisterProxyResponse {
    return {};
  },

  toJSON(_: RegisterProxyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RegisterProxyResponse>): RegisterProxyResponse {
    const message = createBaseRegisterProxyResponse();
    return message;
  }

};

function createBaseDeactivateProxyRequest(): DeactivateProxyRequest {
  return {
    sender: new Uint8Array()
  };
}

export const DeactivateProxyRequest = {
  encode(message: DeactivateProxyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProxyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateProxyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeactivateProxyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
    };
  },

  toJSON(message: DeactivateProxyRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<DeactivateProxyRequest>): DeactivateProxyRequest {
    const message = createBaseDeactivateProxyRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  }

};

function createBaseDeactivateProxyResponse(): DeactivateProxyResponse {
  return {};
}

export const DeactivateProxyResponse = {
  encode(_: DeactivateProxyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateProxyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateProxyResponse();

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

  fromJSON(_: any): DeactivateProxyResponse {
    return {};
  },

  toJSON(_: DeactivateProxyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DeactivateProxyResponse>): DeactivateProxyResponse {
    const message = createBaseDeactivateProxyResponse();
    return message;
  }

};