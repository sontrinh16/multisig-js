import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes, Long } from "@osmonauts/helpers";
export interface StartKeygenRequest {
  sender: string;
  keyId: string;
}
export interface StartKeygenResponse {}
export interface SubmitPubKeyRequest {
  sender: string;
  keyId: string;
  pubKey: Uint8Array;
  signature: Uint8Array;
}
export interface SubmitPubKeyResponse {}
export interface SubmitSignatureRequest {
  sender: string;
  sigId: Long;
  signature: Uint8Array;
}
export interface SubmitSignatureResponse {}
export interface RotateKeyRequest {
  sender: Uint8Array;
  chain: string;
  keyId: string;
}
export interface RotateKeyResponse {}

function createBaseStartKeygenRequest(): StartKeygenRequest {
  return {
    sender: "",
    keyId: ""
  };
}

export const StartKeygenRequest = {
  encode(message: StartKeygenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartKeygenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartKeygenRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.keyId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StartKeygenRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },

  toJSON(message: StartKeygenRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial(object: DeepPartial<StartKeygenRequest>): StartKeygenRequest {
    const message = createBaseStartKeygenRequest();
    message.sender = object.sender ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  }

};

function createBaseStartKeygenResponse(): StartKeygenResponse {
  return {};
}

export const StartKeygenResponse = {
  encode(_: StartKeygenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartKeygenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartKeygenResponse();

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

  fromJSON(_: any): StartKeygenResponse {
    return {};
  },

  toJSON(_: StartKeygenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<StartKeygenResponse>): StartKeygenResponse {
    const message = createBaseStartKeygenResponse();
    return message;
  }

};

function createBaseSubmitPubKeyRequest(): SubmitPubKeyRequest {
  return {
    sender: "",
    keyId: "",
    pubKey: new Uint8Array(),
    signature: new Uint8Array()
  };
}

export const SubmitPubKeyRequest = {
  encode(message: SubmitPubKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }

    if (message.pubKey.length !== 0) {
      writer.uint32(26).bytes(message.pubKey);
    }

    if (message.signature.length !== 0) {
      writer.uint32(34).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitPubKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitPubKeyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.keyId = reader.string();
          break;

        case 3:
          message.pubKey = reader.bytes();
          break;

        case 4:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SubmitPubKeyRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array(),
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },

  toJSON(message: SubmitPubKeyRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.pubKey !== undefined && (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<SubmitPubKeyRequest>): SubmitPubKeyRequest {
    const message = createBaseSubmitPubKeyRequest();
    message.sender = object.sender ?? "";
    message.keyId = object.keyId ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }

};

function createBaseSubmitPubKeyResponse(): SubmitPubKeyResponse {
  return {};
}

export const SubmitPubKeyResponse = {
  encode(_: SubmitPubKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitPubKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitPubKeyResponse();

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

  fromJSON(_: any): SubmitPubKeyResponse {
    return {};
  },

  toJSON(_: SubmitPubKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<SubmitPubKeyResponse>): SubmitPubKeyResponse {
    const message = createBaseSubmitPubKeyResponse();
    return message;
  }

};

function createBaseSubmitSignatureRequest(): SubmitSignatureRequest {
  return {
    sender: "",
    sigId: Long.UZERO,
    signature: new Uint8Array()
  };
}

export const SubmitSignatureRequest = {
  encode(message: SubmitSignatureRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }

    if (!message.sigId.isZero()) {
      writer.uint32(16).uint64(message.sigId);
    }

    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitSignatureRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitSignatureRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;

        case 2:
          message.sigId = (reader.uint64() as Long);
          break;

        case 3:
          message.signature = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SubmitSignatureRequest {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      sigId: isSet(object.sigId) ? Long.fromString(object.sigId) : Long.UZERO,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array()
    };
  },

  toJSON(message: SubmitSignatureRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.sigId !== undefined && (obj.sigId = (message.sigId || Long.UZERO).toString());
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<SubmitSignatureRequest>): SubmitSignatureRequest {
    const message = createBaseSubmitSignatureRequest();
    message.sender = object.sender ?? "";
    message.sigId = object.sigId !== undefined && object.sigId !== null ? Long.fromValue(object.sigId) : Long.UZERO;
    message.signature = object.signature ?? new Uint8Array();
    return message;
  }

};

function createBaseSubmitSignatureResponse(): SubmitSignatureResponse {
  return {};
}

export const SubmitSignatureResponse = {
  encode(_: SubmitSignatureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubmitSignatureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitSignatureResponse();

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

  fromJSON(_: any): SubmitSignatureResponse {
    return {};
  },

  toJSON(_: SubmitSignatureResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<SubmitSignatureResponse>): SubmitSignatureResponse {
    const message = createBaseSubmitSignatureResponse();
    return message;
  }

};

function createBaseRotateKeyRequest(): RotateKeyRequest {
  return {
    sender: new Uint8Array(),
    chain: "",
    keyId: ""
  };
}

export const RotateKeyRequest = {
  encode(message: RotateKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }

    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RotateKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRotateKeyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.chain = reader.string();
          break;

        case 3:
          message.keyId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RotateKeyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : ""
    };
  },

  toJSON(message: RotateKeyRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    return obj;
  },

  fromPartial(object: DeepPartial<RotateKeyRequest>): RotateKeyRequest {
    const message = createBaseRotateKeyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    return message;
  }

};

function createBaseRotateKeyResponse(): RotateKeyResponse {
  return {};
}

export const RotateKeyResponse = {
  encode(_: RotateKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RotateKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRotateKeyResponse();

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

  fromJSON(_: any): RotateKeyResponse {
    return {};
  },

  toJSON(_: RotateKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RotateKeyResponse>): RotateKeyResponse {
    const message = createBaseRotateKeyResponse();
    return message;
  }

};