import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";

/** MsgAddSuper defines the properties of add super account message */
export interface MsgAddSuper {
  description: string;
  address: string;
  addedBy: string;
}

/** MsgAddSuperResponse defines the Msg/AddSuper response type */
export interface MsgAddSuperResponse {}

/** MsgDeleteSuper defines the properties of delete super account message */
export interface MsgDeleteSuper {
  address: string;
  deletedBy: string;
}

/** MsgDeleteSuperResponse defines the Msg/DeleteSuper response type */
export interface MsgDeleteSuperResponse {}

function createBaseMsgAddSuper(): MsgAddSuper {
  return {
    description: "",
    address: "",
    addedBy: ""
  };
}

export const MsgAddSuper = {
  encode(message: MsgAddSuper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }

    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.addedBy !== "") {
      writer.uint32(26).string(message.addedBy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddSuper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddSuper();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;

        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.addedBy = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddSuper {
    return {
      description: isSet(object.description) ? String(object.description) : "",
      address: isSet(object.address) ? String(object.address) : "",
      addedBy: isSet(object.addedBy) ? String(object.addedBy) : ""
    };
  },

  toJSON(message: MsgAddSuper): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    message.address !== undefined && (obj.address = message.address);
    message.addedBy !== undefined && (obj.addedBy = message.addedBy);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddSuper>): MsgAddSuper {
    const message = createBaseMsgAddSuper();
    message.description = object.description ?? "";
    message.address = object.address ?? "";
    message.addedBy = object.addedBy ?? "";
    return message;
  }

};

function createBaseMsgAddSuperResponse(): MsgAddSuperResponse {
  return {};
}

export const MsgAddSuperResponse = {
  encode(_: MsgAddSuperResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddSuperResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddSuperResponse();

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

  fromJSON(_: any): MsgAddSuperResponse {
    return {};
  },

  toJSON(_: MsgAddSuperResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgAddSuperResponse>): MsgAddSuperResponse {
    const message = createBaseMsgAddSuperResponse();
    return message;
  }

};

function createBaseMsgDeleteSuper(): MsgDeleteSuper {
  return {
    address: "",
    deletedBy: ""
  };
}

export const MsgDeleteSuper = {
  encode(message: MsgDeleteSuper, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }

    if (message.deletedBy !== "") {
      writer.uint32(26).string(message.deletedBy);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSuper {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSuper();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.address = reader.string();
          break;

        case 3:
          message.deletedBy = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgDeleteSuper {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      deletedBy: isSet(object.deletedBy) ? String(object.deletedBy) : ""
    };
  },

  toJSON(message: MsgDeleteSuper): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.deletedBy !== undefined && (obj.deletedBy = message.deletedBy);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteSuper>): MsgDeleteSuper {
    const message = createBaseMsgDeleteSuper();
    message.address = object.address ?? "";
    message.deletedBy = object.deletedBy ?? "";
    return message;
  }

};

function createBaseMsgDeleteSuperResponse(): MsgDeleteSuperResponse {
  return {};
}

export const MsgDeleteSuperResponse = {
  encode(_: MsgDeleteSuperResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteSuperResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteSuperResponse();

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

  fromJSON(_: any): MsgDeleteSuperResponse {
    return {};
  },

  toJSON(_: MsgDeleteSuperResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteSuperResponse>): MsgDeleteSuperResponse {
    const message = createBaseMsgDeleteSuperResponse();
    return message;
  }

};