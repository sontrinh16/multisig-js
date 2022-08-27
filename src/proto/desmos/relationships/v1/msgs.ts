import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "@osmonauts/helpers";

/**
 * MsgCreateRelationship represents a message to create a relationship
 * between two users on a specific subspace.
 */
export interface MsgCreateRelationship {
  signer: string;
  counterparty: string;
  subspaceId: Long;
}

/**
 * MsgCreateRelationshipResponse defines the Msg/CreateRelationship response
 * type.
 */
export interface MsgCreateRelationshipResponse {}

/**
 * MsgDeleteRelationship represents a message to delete the relationship
 * between two users.
 */
export interface MsgDeleteRelationship {
  signer: string;
  counterparty: string;
  subspaceId: Long;
}

/**
 * MsgDeleteRelationshipResponse defines the Msg/DeleteRelationship response
 * type.
 */
export interface MsgDeleteRelationshipResponse {}

/**
 * MsgBlockUser represents a message to block another user specifying an
 * optional reason.
 */
export interface MsgBlockUser {
  blocker: string;
  blocked: string;
  reason: string;
  subspaceId: Long;
}

/** MsgBlockUserResponse defines the Msg/BlockUser response type. */
export interface MsgBlockUserResponse {}

/** MsgUnblockUser represents a message to unblock a previously blocked user. */
export interface MsgUnblockUser {
  blocker: string;
  blocked: string;
  subspaceId: Long;
}

/** MsgUnblockUserResponse defines the Msg/UnblockUser response type. */
export interface MsgUnblockUserResponse {}

function createBaseMsgCreateRelationship(): MsgCreateRelationship {
  return {
    signer: "",
    counterparty: "",
    subspaceId: Long.UZERO
  };
}

export const MsgCreateRelationship = {
  encode(message: MsgCreateRelationship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.counterparty !== "") {
      writer.uint32(18).string(message.counterparty);
    }

    if (!message.subspaceId.isZero()) {
      writer.uint32(24).uint64(message.subspaceId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRelationship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRelationship();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.counterparty = reader.string();
          break;

        case 3:
          message.subspaceId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateRelationship {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      counterparty: isSet(object.counterparty) ? String(object.counterparty) : "",
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateRelationship): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.counterparty !== undefined && (obj.counterparty = message.counterparty);
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRelationship>): MsgCreateRelationship {
    const message = createBaseMsgCreateRelationship();
    message.signer = object.signer ?? "";
    message.counterparty = object.counterparty ?? "";
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgCreateRelationshipResponse(): MsgCreateRelationshipResponse {
  return {};
}

export const MsgCreateRelationshipResponse = {
  encode(_: MsgCreateRelationshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateRelationshipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateRelationshipResponse();

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

  fromJSON(_: any): MsgCreateRelationshipResponse {
    return {};
  },

  toJSON(_: MsgCreateRelationshipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateRelationshipResponse>): MsgCreateRelationshipResponse {
    const message = createBaseMsgCreateRelationshipResponse();
    return message;
  }

};

function createBaseMsgDeleteRelationship(): MsgDeleteRelationship {
  return {
    signer: "",
    counterparty: "",
    subspaceId: Long.UZERO
  };
}

export const MsgDeleteRelationship = {
  encode(message: MsgDeleteRelationship, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }

    if (message.counterparty !== "") {
      writer.uint32(18).string(message.counterparty);
    }

    if (!message.subspaceId.isZero()) {
      writer.uint32(24).uint64(message.subspaceId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRelationship {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRelationship();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;

        case 2:
          message.counterparty = reader.string();
          break;

        case 3:
          message.subspaceId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteRelationship {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      counterparty: isSet(object.counterparty) ? String(object.counterparty) : "",
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO
    };
  },

  toJSON(message: MsgDeleteRelationship): unknown {
    const obj: any = {};
    message.signer !== undefined && (obj.signer = message.signer);
    message.counterparty !== undefined && (obj.counterparty = message.counterparty);
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteRelationship>): MsgDeleteRelationship {
    const message = createBaseMsgDeleteRelationship();
    message.signer = object.signer ?? "";
    message.counterparty = object.counterparty ?? "";
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgDeleteRelationshipResponse(): MsgDeleteRelationshipResponse {
  return {};
}

export const MsgDeleteRelationshipResponse = {
  encode(_: MsgDeleteRelationshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteRelationshipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteRelationshipResponse();

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

  fromJSON(_: any): MsgDeleteRelationshipResponse {
    return {};
  },

  toJSON(_: MsgDeleteRelationshipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteRelationshipResponse>): MsgDeleteRelationshipResponse {
    const message = createBaseMsgDeleteRelationshipResponse();
    return message;
  }

};

function createBaseMsgBlockUser(): MsgBlockUser {
  return {
    blocker: "",
    blocked: "",
    reason: "",
    subspaceId: Long.UZERO
  };
}

export const MsgBlockUser = {
  encode(message: MsgBlockUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blocker !== "") {
      writer.uint32(10).string(message.blocker);
    }

    if (message.blocked !== "") {
      writer.uint32(18).string(message.blocked);
    }

    if (message.reason !== "") {
      writer.uint32(26).string(message.reason);
    }

    if (!message.subspaceId.isZero()) {
      writer.uint32(32).uint64(message.subspaceId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlockUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockUser();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blocker = reader.string();
          break;

        case 2:
          message.blocked = reader.string();
          break;

        case 3:
          message.reason = reader.string();
          break;

        case 4:
          message.subspaceId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgBlockUser {
    return {
      blocker: isSet(object.blocker) ? String(object.blocker) : "",
      blocked: isSet(object.blocked) ? String(object.blocked) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO
    };
  },

  toJSON(message: MsgBlockUser): unknown {
    const obj: any = {};
    message.blocker !== undefined && (obj.blocker = message.blocker);
    message.blocked !== undefined && (obj.blocked = message.blocked);
    message.reason !== undefined && (obj.reason = message.reason);
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBlockUser>): MsgBlockUser {
    const message = createBaseMsgBlockUser();
    message.blocker = object.blocker ?? "";
    message.blocked = object.blocked ?? "";
    message.reason = object.reason ?? "";
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgBlockUserResponse(): MsgBlockUserResponse {
  return {};
}

export const MsgBlockUserResponse = {
  encode(_: MsgBlockUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBlockUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBlockUserResponse();

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

  fromJSON(_: any): MsgBlockUserResponse {
    return {};
  },

  toJSON(_: MsgBlockUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBlockUserResponse>): MsgBlockUserResponse {
    const message = createBaseMsgBlockUserResponse();
    return message;
  }

};

function createBaseMsgUnblockUser(): MsgUnblockUser {
  return {
    blocker: "",
    blocked: "",
    subspaceId: Long.UZERO
  };
}

export const MsgUnblockUser = {
  encode(message: MsgUnblockUser, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blocker !== "") {
      writer.uint32(10).string(message.blocker);
    }

    if (message.blocked !== "") {
      writer.uint32(18).string(message.blocked);
    }

    if (!message.subspaceId.isZero()) {
      writer.uint32(32).uint64(message.subspaceId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnblockUser {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnblockUser();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.blocker = reader.string();
          break;

        case 2:
          message.blocked = reader.string();
          break;

        case 4:
          message.subspaceId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgUnblockUser {
    return {
      blocker: isSet(object.blocker) ? String(object.blocker) : "",
      blocked: isSet(object.blocked) ? String(object.blocked) : "",
      subspaceId: isSet(object.subspaceId) ? Long.fromString(object.subspaceId) : Long.UZERO
    };
  },

  toJSON(message: MsgUnblockUser): unknown {
    const obj: any = {};
    message.blocker !== undefined && (obj.blocker = message.blocker);
    message.blocked !== undefined && (obj.blocked = message.blocked);
    message.subspaceId !== undefined && (obj.subspaceId = (message.subspaceId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUnblockUser>): MsgUnblockUser {
    const message = createBaseMsgUnblockUser();
    message.blocker = object.blocker ?? "";
    message.blocked = object.blocked ?? "";
    message.subspaceId = object.subspaceId !== undefined && object.subspaceId !== null ? Long.fromValue(object.subspaceId) : Long.UZERO;
    return message;
  }

};

function createBaseMsgUnblockUserResponse(): MsgUnblockUserResponse {
  return {};
}

export const MsgUnblockUserResponse = {
  encode(_: MsgUnblockUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnblockUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnblockUserResponse();

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

  fromJSON(_: any): MsgUnblockUserResponse {
    return {};
  },

  toJSON(_: MsgUnblockUserResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUnblockUserResponse>): MsgUnblockUserResponse {
    const message = createBaseMsgUnblockUserResponse();
    return message;
  }

};