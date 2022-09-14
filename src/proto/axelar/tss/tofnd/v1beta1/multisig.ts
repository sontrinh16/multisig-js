import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "@osmonauts/helpers";
export interface KeygenRequest {
  keyUid: string;

  /** used only for logging */
  partyUid: string;
}
export interface KeygenResponse {
  /** SEC1-encoded compressed curve point */
  pubKey?: Uint8Array;

  /** reply with an error message if keygen fails */
  error?: string;
}
export interface SignRequest {
  keyUid: string;

  /** 32-byte pre-hashed message digest */
  msgToSign: Uint8Array;

  /** used only for logging */
  partyUid: string;

  /**
   * SEC1-encoded compressed pub key bytes to find the right
   * mnemonic. Latest is used, if empty.
   */
  pubKey: Uint8Array;
}
export interface SignResponse {
  /** ASN.1 DER-encoded ECDSA signature */
  signature?: Uint8Array;

  /** reply with an error message if sign fails */
  error?: string;
}

function createBaseKeygenRequest(): KeygenRequest {
  return {
    keyUid: "",
    partyUid: ""
  };
}

export const KeygenRequest = {
  encode(message: KeygenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyUid !== "") {
      writer.uint32(10).string(message.keyUid);
    }

    if (message.partyUid !== "") {
      writer.uint32(18).string(message.partyUid);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keyUid = reader.string();
          break;

        case 2:
          message.partyUid = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeygenRequest {
    return {
      keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
      partyUid: isSet(object.partyUid) ? String(object.partyUid) : ""
    };
  },

  toJSON(message: KeygenRequest): unknown {
    const obj: any = {};
    message.keyUid !== undefined && (obj.keyUid = message.keyUid);
    message.partyUid !== undefined && (obj.partyUid = message.partyUid);
    return obj;
  },

  fromPartial(object: DeepPartial<KeygenRequest>): KeygenRequest {
    const message = createBaseKeygenRequest();
    message.keyUid = object.keyUid ?? "";
    message.partyUid = object.partyUid ?? "";
    return message;
  }

};

function createBaseKeygenResponse(): KeygenResponse {
  return {
    pubKey: undefined,
    error: undefined
  };
}

export const KeygenResponse = {
  encode(message: KeygenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      writer.uint32(10).bytes(message.pubKey);
    }

    if (message.error !== undefined) {
      writer.uint32(18).string(message.error);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeygenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeygenResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = reader.bytes();
          break;

        case 2:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeygenResponse {
    return {
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined
    };
  },

  toJSON(message: KeygenResponse): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey !== undefined ? base64FromBytes(message.pubKey) : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<KeygenResponse>): KeygenResponse {
    const message = createBaseKeygenResponse();
    message.pubKey = object.pubKey ?? undefined;
    message.error = object.error ?? undefined;
    return message;
  }

};

function createBaseSignRequest(): SignRequest {
  return {
    keyUid: "",
    msgToSign: new Uint8Array(),
    partyUid: "",
    pubKey: new Uint8Array()
  };
}

export const SignRequest = {
  encode(message: SignRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyUid !== "") {
      writer.uint32(10).string(message.keyUid);
    }

    if (message.msgToSign.length !== 0) {
      writer.uint32(18).bytes(message.msgToSign);
    }

    if (message.partyUid !== "") {
      writer.uint32(26).string(message.partyUid);
    }

    if (message.pubKey.length !== 0) {
      writer.uint32(34).bytes(message.pubKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keyUid = reader.string();
          break;

        case 2:
          message.msgToSign = reader.bytes();
          break;

        case 3:
          message.partyUid = reader.string();
          break;

        case 4:
          message.pubKey = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignRequest {
    return {
      keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
      msgToSign: isSet(object.msgToSign) ? bytesFromBase64(object.msgToSign) : new Uint8Array(),
      partyUid: isSet(object.partyUid) ? String(object.partyUid) : "",
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
    };
  },

  toJSON(message: SignRequest): unknown {
    const obj: any = {};
    message.keyUid !== undefined && (obj.keyUid = message.keyUid);
    message.msgToSign !== undefined && (obj.msgToSign = base64FromBytes(message.msgToSign !== undefined ? message.msgToSign : new Uint8Array()));
    message.partyUid !== undefined && (obj.partyUid = message.partyUid);
    message.pubKey !== undefined && (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<SignRequest>): SignRequest {
    const message = createBaseSignRequest();
    message.keyUid = object.keyUid ?? "";
    message.msgToSign = object.msgToSign ?? new Uint8Array();
    message.partyUid = object.partyUid ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  }

};

function createBaseSignResponse(): SignResponse {
  return {
    signature: undefined,
    error: undefined
  };
}

export const SignResponse = {
  encode(message: SignResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature !== undefined) {
      writer.uint32(10).bytes(message.signature);
    }

    if (message.error !== undefined) {
      writer.uint32(18).string(message.error);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;

        case 2:
          message.error = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SignResponse {
    return {
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : undefined,
      error: isSet(object.error) ? String(object.error) : undefined
    };
  },

  toJSON(message: SignResponse): unknown {
    const obj: any = {};
    message.signature !== undefined && (obj.signature = message.signature !== undefined ? base64FromBytes(message.signature) : undefined);
    message.error !== undefined && (obj.error = message.error);
    return obj;
  },

  fromPartial(object: DeepPartial<SignResponse>): SignResponse {
    const message = createBaseSignResponse();
    message.signature = object.signature ?? undefined;
    message.error = object.error ?? undefined;
    return message;
  }

};