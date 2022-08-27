import { Cork } from "./cork";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "@osmonauts/helpers";

/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequest {
  /** the cork to send across the bridge */
  cork: Cork;

  /** signer account address */
  signer: string;
}
export interface MsgSubmitCorkResponse {}

/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequest {
  /** the scheduled cork */
  cork: Cork;

  /** the block height that must be reached */
  blockHeight: Long;

  /** signer account address */
  signer: string;
}
export interface MsgScheduleCorkResponse {}

function createBaseMsgSubmitCorkRequest(): MsgSubmitCorkRequest {
  return {
    cork: undefined,
    signer: ""
  };
}

export const MsgSubmitCorkRequest = {
  encode(message: MsgSubmitCorkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }

    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitCorkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitCorkRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cork = Cork.decode(reader, reader.uint32());
          break;

        case 2:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSubmitCorkRequest {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgSubmitCorkRequest): unknown {
    const obj: any = {};
    message.cork !== undefined && (obj.cork = message.cork ? Cork.toJSON(message.cork) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSubmitCorkRequest>): MsgSubmitCorkRequest {
    const message = createBaseMsgSubmitCorkRequest();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgSubmitCorkResponse(): MsgSubmitCorkResponse {
  return {};
}

export const MsgSubmitCorkResponse = {
  encode(_: MsgSubmitCorkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitCorkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitCorkResponse();

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

  fromJSON(_: any): MsgSubmitCorkResponse {
    return {};
  },

  toJSON(_: MsgSubmitCorkResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSubmitCorkResponse>): MsgSubmitCorkResponse {
    const message = createBaseMsgSubmitCorkResponse();
    return message;
  }

};

function createBaseMsgScheduleCorkRequest(): MsgScheduleCorkRequest {
  return {
    cork: undefined,
    blockHeight: Long.UZERO,
    signer: ""
  };
}

export const MsgScheduleCorkRequest = {
  encode(message: MsgScheduleCorkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cork !== undefined) {
      Cork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }

    if (!message.blockHeight.isZero()) {
      writer.uint32(16).uint64(message.blockHeight);
    }

    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgScheduleCorkRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgScheduleCorkRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cork = Cork.decode(reader, reader.uint32());
          break;

        case 2:
          message.blockHeight = (reader.uint64() as Long);
          break;

        case 3:
          message.signer = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgScheduleCorkRequest {
    return {
      cork: isSet(object.cork) ? Cork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? Long.fromString(object.blockHeight) : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },

  toJSON(message: MsgScheduleCorkRequest): unknown {
    const obj: any = {};
    message.cork !== undefined && (obj.cork = message.cork ? Cork.toJSON(message.cork) : undefined);
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgScheduleCorkRequest>): MsgScheduleCorkRequest {
    const message = createBaseMsgScheduleCorkRequest();
    message.cork = object.cork !== undefined && object.cork !== null ? Cork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? Long.fromValue(object.blockHeight) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  }

};

function createBaseMsgScheduleCorkResponse(): MsgScheduleCorkResponse {
  return {};
}

export const MsgScheduleCorkResponse = {
  encode(_: MsgScheduleCorkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgScheduleCorkResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgScheduleCorkResponse();

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

  fromJSON(_: any): MsgScheduleCorkResponse {
    return {};
  },

  toJSON(_: MsgScheduleCorkResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgScheduleCorkResponse>): MsgScheduleCorkResponse {
    const message = createBaseMsgScheduleCorkResponse();
    return message;
  }

};