import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export enum KeyPresenceResponse_Response {
  RESPONSE_UNSPECIFIED = 0,
  RESPONSE_PRESENT = 1,
  RESPONSE_ABSENT = 2,
  RESPONSE_FAIL = 3,
  UNRECOGNIZED = -1,
}
export function keyPresenceResponse_ResponseFromJSON(object: any): KeyPresenceResponse_Response {
  switch (object) {
    case 0:
    case "RESPONSE_UNSPECIFIED":
      return KeyPresenceResponse_Response.RESPONSE_UNSPECIFIED;

    case 1:
    case "RESPONSE_PRESENT":
      return KeyPresenceResponse_Response.RESPONSE_PRESENT;

    case 2:
    case "RESPONSE_ABSENT":
      return KeyPresenceResponse_Response.RESPONSE_ABSENT;

    case 3:
    case "RESPONSE_FAIL":
      return KeyPresenceResponse_Response.RESPONSE_FAIL;

    case -1:
    case "UNRECOGNIZED":
    default:
      return KeyPresenceResponse_Response.UNRECOGNIZED;
  }
}
export function keyPresenceResponse_ResponseToJSON(object: KeyPresenceResponse_Response): string {
  switch (object) {
    case KeyPresenceResponse_Response.RESPONSE_UNSPECIFIED:
      return "RESPONSE_UNSPECIFIED";

    case KeyPresenceResponse_Response.RESPONSE_PRESENT:
      return "RESPONSE_PRESENT";

    case KeyPresenceResponse_Response.RESPONSE_ABSENT:
      return "RESPONSE_ABSENT";

    case KeyPresenceResponse_Response.RESPONSE_FAIL:
      return "RESPONSE_FAIL";

    default:
      return "UNKNOWN";
  }
}

/** Key presence check types */
export interface KeyPresenceRequest {
  keyUid: string;

  /**
   * SEC1-encoded compressed pub key bytes to find the right
   * mnemonic. Latest is used, if empty.
   */
  pubKey: Uint8Array;
}
export interface KeyPresenceResponse {
  response: KeyPresenceResponse_Response;
}

function createBaseKeyPresenceRequest(): KeyPresenceRequest {
  return {
    keyUid: "",
    pubKey: new Uint8Array()
  };
}

export const KeyPresenceRequest = {
  encode(message: KeyPresenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyUid !== "") {
      writer.uint32(10).string(message.keyUid);
    }

    if (message.pubKey.length !== 0) {
      writer.uint32(18).bytes(message.pubKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyPresenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyPresenceRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.keyUid = reader.string();
          break;

        case 2:
          message.pubKey = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeyPresenceRequest {
    return {
      keyUid: isSet(object.keyUid) ? String(object.keyUid) : "",
      pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
    };
  },

  toJSON(message: KeyPresenceRequest): unknown {
    const obj: any = {};
    message.keyUid !== undefined && (obj.keyUid = message.keyUid);
    message.pubKey !== undefined && (obj.pubKey = base64FromBytes(message.pubKey !== undefined ? message.pubKey : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<KeyPresenceRequest>): KeyPresenceRequest {
    const message = createBaseKeyPresenceRequest();
    message.keyUid = object.keyUid ?? "";
    message.pubKey = object.pubKey ?? new Uint8Array();
    return message;
  }

};

function createBaseKeyPresenceResponse(): KeyPresenceResponse {
  return {
    response: 0
  };
}

export const KeyPresenceResponse = {
  encode(message: KeyPresenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.response !== 0) {
      writer.uint32(8).int32(message.response);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyPresenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyPresenceResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.response = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): KeyPresenceResponse {
    return {
      response: isSet(object.response) ? keyPresenceResponse_ResponseFromJSON(object.response) : 0
    };
  },

  toJSON(message: KeyPresenceResponse): unknown {
    const obj: any = {};
    message.response !== undefined && (obj.response = keyPresenceResponse_ResponseToJSON(message.response));
    return obj;
  },

  fromPartial(object: DeepPartial<KeyPresenceResponse>): KeyPresenceResponse {
    const message = createBaseKeyPresenceResponse();
    message.response = object.response ?? 0;
    return message;
  }

};