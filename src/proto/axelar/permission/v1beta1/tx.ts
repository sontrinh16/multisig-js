import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface UpdateGovernanceKeyRequest {
  sender: Uint8Array;
  governanceKey: LegacyAminoPubKey;
}
export interface UpdateGovernanceKeyResponse {}

/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequest {
  sender: Uint8Array;
  controller: Uint8Array;
}
export interface RegisterControllerResponse {}

/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequest {
  sender: Uint8Array;
  controller: Uint8Array;
}
export interface DeregisterControllerResponse {}

function createBaseUpdateGovernanceKeyRequest(): UpdateGovernanceKeyRequest {
  return {
    sender: new Uint8Array(),
    governanceKey: undefined
  };
}

export const UpdateGovernanceKeyRequest = {
  encode(message: UpdateGovernanceKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.governanceKey !== undefined) {
      LegacyAminoPubKey.encode(message.governanceKey, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGovernanceKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGovernanceKeyRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.governanceKey = LegacyAminoPubKey.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UpdateGovernanceKeyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      governanceKey: isSet(object.governanceKey) ? LegacyAminoPubKey.fromJSON(object.governanceKey) : undefined
    };
  },

  toJSON(message: UpdateGovernanceKeyRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.governanceKey !== undefined && (obj.governanceKey = message.governanceKey ? LegacyAminoPubKey.toJSON(message.governanceKey) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<UpdateGovernanceKeyRequest>): UpdateGovernanceKeyRequest {
    const message = createBaseUpdateGovernanceKeyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.governanceKey = object.governanceKey !== undefined && object.governanceKey !== null ? LegacyAminoPubKey.fromPartial(object.governanceKey) : undefined;
    return message;
  }

};

function createBaseUpdateGovernanceKeyResponse(): UpdateGovernanceKeyResponse {
  return {};
}

export const UpdateGovernanceKeyResponse = {
  encode(_: UpdateGovernanceKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateGovernanceKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateGovernanceKeyResponse();

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

  fromJSON(_: any): UpdateGovernanceKeyResponse {
    return {};
  },

  toJSON(_: UpdateGovernanceKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<UpdateGovernanceKeyResponse>): UpdateGovernanceKeyResponse {
    const message = createBaseUpdateGovernanceKeyResponse();
    return message;
  }

};

function createBaseRegisterControllerRequest(): RegisterControllerRequest {
  return {
    sender: new Uint8Array(),
    controller: new Uint8Array()
  };
}

export const RegisterControllerRequest = {
  encode(message: RegisterControllerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.controller.length !== 0) {
      writer.uint32(18).bytes(message.controller);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterControllerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterControllerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.controller = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RegisterControllerRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      controller: isSet(object.controller) ? bytesFromBase64(object.controller) : new Uint8Array()
    };
  },

  toJSON(message: RegisterControllerRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.controller !== undefined && (obj.controller = base64FromBytes(message.controller !== undefined ? message.controller : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<RegisterControllerRequest>): RegisterControllerRequest {
    const message = createBaseRegisterControllerRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.controller = object.controller ?? new Uint8Array();
    return message;
  }

};

function createBaseRegisterControllerResponse(): RegisterControllerResponse {
  return {};
}

export const RegisterControllerResponse = {
  encode(_: RegisterControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterControllerResponse();

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

  fromJSON(_: any): RegisterControllerResponse {
    return {};
  },

  toJSON(_: RegisterControllerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RegisterControllerResponse>): RegisterControllerResponse {
    const message = createBaseRegisterControllerResponse();
    return message;
  }

};

function createBaseDeregisterControllerRequest(): DeregisterControllerRequest {
  return {
    sender: new Uint8Array(),
    controller: new Uint8Array()
  };
}

export const DeregisterControllerRequest = {
  encode(message: DeregisterControllerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.controller.length !== 0) {
      writer.uint32(18).bytes(message.controller);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterControllerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeregisterControllerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.controller = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeregisterControllerRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      controller: isSet(object.controller) ? bytesFromBase64(object.controller) : new Uint8Array()
    };
  },

  toJSON(message: DeregisterControllerRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.controller !== undefined && (obj.controller = base64FromBytes(message.controller !== undefined ? message.controller : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<DeregisterControllerRequest>): DeregisterControllerRequest {
    const message = createBaseDeregisterControllerRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.controller = object.controller ?? new Uint8Array();
    return message;
  }

};

function createBaseDeregisterControllerResponse(): DeregisterControllerResponse {
  return {};
}

export const DeregisterControllerResponse = {
  encode(_: DeregisterControllerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterControllerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeregisterControllerResponse();

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

  fromJSON(_: any): DeregisterControllerResponse {
    return {};
  },

  toJSON(_: DeregisterControllerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DeregisterControllerResponse>): DeregisterControllerResponse {
    const message = createBaseDeregisterControllerResponse();
    return message;
  }

};