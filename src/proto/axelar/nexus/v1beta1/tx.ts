import { FeeInfo } from "../exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface RegisterChainMaintainerRequest {
  sender: Uint8Array;
  chains: string[];
}
export interface RegisterChainMaintainerResponse {}
export interface DeregisterChainMaintainerRequest {
  sender: Uint8Array;
  chains: string[];
}
export interface DeregisterChainMaintainerResponse {}

/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequest {
  sender: Uint8Array;
  chains: string[];
}
export interface ActivateChainResponse {}

/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequest {
  sender: Uint8Array;
  chains: string[];
}
export interface DeactivateChainResponse {}

/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequest {
  sender: Uint8Array;
  feeInfo: FeeInfo;
}
export interface RegisterAssetFeeResponse {}

function createBaseRegisterChainMaintainerRequest(): RegisterChainMaintainerRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}

export const RegisterChainMaintainerRequest = {
  encode(message: RegisterChainMaintainerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    for (const v of message.chains) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterChainMaintainerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterChainMaintainerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.chains.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RegisterChainMaintainerRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: RegisterChainMaintainerRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));

    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<RegisterChainMaintainerRequest>): RegisterChainMaintainerRequest {
    const message = createBaseRegisterChainMaintainerRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  }

};

function createBaseRegisterChainMaintainerResponse(): RegisterChainMaintainerResponse {
  return {};
}

export const RegisterChainMaintainerResponse = {
  encode(_: RegisterChainMaintainerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterChainMaintainerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterChainMaintainerResponse();

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

  fromJSON(_: any): RegisterChainMaintainerResponse {
    return {};
  },

  toJSON(_: RegisterChainMaintainerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RegisterChainMaintainerResponse>): RegisterChainMaintainerResponse {
    const message = createBaseRegisterChainMaintainerResponse();
    return message;
  }

};

function createBaseDeregisterChainMaintainerRequest(): DeregisterChainMaintainerRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}

export const DeregisterChainMaintainerRequest = {
  encode(message: DeregisterChainMaintainerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    for (const v of message.chains) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterChainMaintainerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeregisterChainMaintainerRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.chains.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeregisterChainMaintainerRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: DeregisterChainMaintainerRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));

    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<DeregisterChainMaintainerRequest>): DeregisterChainMaintainerRequest {
    const message = createBaseDeregisterChainMaintainerRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  }

};

function createBaseDeregisterChainMaintainerResponse(): DeregisterChainMaintainerResponse {
  return {};
}

export const DeregisterChainMaintainerResponse = {
  encode(_: DeregisterChainMaintainerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeregisterChainMaintainerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeregisterChainMaintainerResponse();

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

  fromJSON(_: any): DeregisterChainMaintainerResponse {
    return {};
  },

  toJSON(_: DeregisterChainMaintainerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DeregisterChainMaintainerResponse>): DeregisterChainMaintainerResponse {
    const message = createBaseDeregisterChainMaintainerResponse();
    return message;
  }

};

function createBaseActivateChainRequest(): ActivateChainRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}

export const ActivateChainRequest = {
  encode(message: ActivateChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    for (const v of message.chains) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateChainRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.chains.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ActivateChainRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ActivateChainRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));

    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ActivateChainRequest>): ActivateChainRequest {
    const message = createBaseActivateChainRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  }

};

function createBaseActivateChainResponse(): ActivateChainResponse {
  return {};
}

export const ActivateChainResponse = {
  encode(_: ActivateChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActivateChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActivateChainResponse();

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

  fromJSON(_: any): ActivateChainResponse {
    return {};
  },

  toJSON(_: ActivateChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<ActivateChainResponse>): ActivateChainResponse {
    const message = createBaseActivateChainResponse();
    return message;
  }

};

function createBaseDeactivateChainRequest(): DeactivateChainRequest {
  return {
    sender: new Uint8Array(),
    chains: []
  };
}

export const DeactivateChainRequest = {
  encode(message: DeactivateChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    for (const v of message.chains) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateChainRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.chains.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DeactivateChainRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      chains: Array.isArray(object?.chains) ? object.chains.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: DeactivateChainRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));

    if (message.chains) {
      obj.chains = message.chains.map(e => e);
    } else {
      obj.chains = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<DeactivateChainRequest>): DeactivateChainRequest {
    const message = createBaseDeactivateChainRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.chains = object.chains?.map(e => e) || [];
    return message;
  }

};

function createBaseDeactivateChainResponse(): DeactivateChainResponse {
  return {};
}

export const DeactivateChainResponse = {
  encode(_: DeactivateChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeactivateChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeactivateChainResponse();

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

  fromJSON(_: any): DeactivateChainResponse {
    return {};
  },

  toJSON(_: DeactivateChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DeactivateChainResponse>): DeactivateChainResponse {
    const message = createBaseDeactivateChainResponse();
    return message;
  }

};

function createBaseRegisterAssetFeeRequest(): RegisterAssetFeeRequest {
  return {
    sender: new Uint8Array(),
    feeInfo: undefined
  };
}

export const RegisterAssetFeeRequest = {
  encode(message: RegisterAssetFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.feeInfo !== undefined) {
      FeeInfo.encode(message.feeInfo, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterAssetFeeRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.feeInfo = FeeInfo.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RegisterAssetFeeRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      feeInfo: isSet(object.feeInfo) ? FeeInfo.fromJSON(object.feeInfo) : undefined
    };
  },

  toJSON(message: RegisterAssetFeeRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.feeInfo !== undefined && (obj.feeInfo = message.feeInfo ? FeeInfo.toJSON(message.feeInfo) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RegisterAssetFeeRequest>): RegisterAssetFeeRequest {
    const message = createBaseRegisterAssetFeeRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.feeInfo = object.feeInfo !== undefined && object.feeInfo !== null ? FeeInfo.fromPartial(object.feeInfo) : undefined;
    return message;
  }

};

function createBaseRegisterAssetFeeResponse(): RegisterAssetFeeResponse {
  return {};
}

export const RegisterAssetFeeResponse = {
  encode(_: RegisterAssetFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterAssetFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterAssetFeeResponse();

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

  fromJSON(_: any): RegisterAssetFeeResponse {
    return {};
  },

  toJSON(_: RegisterAssetFeeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<RegisterAssetFeeResponse>): RegisterAssetFeeResponse {
    const message = createBaseRegisterAssetFeeResponse();
    return message;
  }

};