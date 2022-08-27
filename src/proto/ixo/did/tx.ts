import { DidCredential } from "./did";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** MsgAddDid defines a message for adding a DID. */
export interface MsgAddDid {
  did: string;
  pubKey: string;
}

/** MsgAddDidResponse defines the Msg/AddDid response type. */
export interface MsgAddDidResponse {}

/** MsgAddCredential defines a message for adding a credential to the signer's DID. */
export interface MsgAddCredential {
  didCredential: DidCredential;
}

/** MsgAddCredentialResponse defines the Msg/AddCredential response type. */
export interface MsgAddCredentialResponse {}

function createBaseMsgAddDid(): MsgAddDid {
  return {
    did: "",
    pubKey: ""
  };
}

export const MsgAddDid = {
  encode(message: MsgAddDid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== "") {
      writer.uint32(10).string(message.did);
    }

    if (message.pubKey !== "") {
      writer.uint32(18).string(message.pubKey);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddDid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddDid();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.did = reader.string();
          break;

        case 2:
          message.pubKey = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddDid {
    return {
      did: isSet(object.did) ? String(object.did) : "",
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : ""
    };
  },

  toJSON(message: MsgAddDid): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddDid>): MsgAddDid {
    const message = createBaseMsgAddDid();
    message.did = object.did ?? "";
    message.pubKey = object.pubKey ?? "";
    return message;
  }

};

function createBaseMsgAddDidResponse(): MsgAddDidResponse {
  return {};
}

export const MsgAddDidResponse = {
  encode(_: MsgAddDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddDidResponse();

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

  fromJSON(_: any): MsgAddDidResponse {
    return {};
  },

  toJSON(_: MsgAddDidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddDidResponse>): MsgAddDidResponse {
    const message = createBaseMsgAddDidResponse();
    return message;
  }

};

function createBaseMsgAddCredential(): MsgAddCredential {
  return {
    didCredential: undefined
  };
}

export const MsgAddCredential = {
  encode(message: MsgAddCredential, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didCredential !== undefined) {
      DidCredential.encode(message.didCredential, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCredential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCredential();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.didCredential = DidCredential.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddCredential {
    return {
      didCredential: isSet(object.didCredential) ? DidCredential.fromJSON(object.didCredential) : undefined
    };
  },

  toJSON(message: MsgAddCredential): unknown {
    const obj: any = {};
    message.didCredential !== undefined && (obj.didCredential = message.didCredential ? DidCredential.toJSON(message.didCredential) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddCredential>): MsgAddCredential {
    const message = createBaseMsgAddCredential();
    message.didCredential = object.didCredential !== undefined && object.didCredential !== null ? DidCredential.fromPartial(object.didCredential) : undefined;
    return message;
  }

};

function createBaseMsgAddCredentialResponse(): MsgAddCredentialResponse {
  return {};
}

export const MsgAddCredentialResponse = {
  encode(_: MsgAddCredentialResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddCredentialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddCredentialResponse();

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

  fromJSON(_: any): MsgAddCredentialResponse {
    return {};
  },

  toJSON(_: MsgAddCredentialResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddCredentialResponse>): MsgAddCredentialResponse {
    const message = createBaseMsgAddCredentialResponse();
    return message;
  }

};