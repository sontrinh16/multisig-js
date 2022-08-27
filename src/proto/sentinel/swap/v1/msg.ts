import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";

/**
 * MsgSwapRequest defines the SDK message for swapping an ERC-20 token to the
 * native coin
 */
export interface MsgSwapRequest {
  from: string;
  txHash: Uint8Array;
  receiver: string;
  amount: string;
}

/** MsgSwapResponse defines the response of message MsgSwapRequest */
export interface MsgSwapResponse {}

function createBaseMsgSwapRequest(): MsgSwapRequest {
  return {
    from: "",
    txHash: new Uint8Array(),
    receiver: "",
    amount: ""
  };
}

export const MsgSwapRequest = {
  encode(message: MsgSwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }

    if (message.txHash.length !== 0) {
      writer.uint32(18).bytes(message.txHash);
    }

    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }

    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.txHash = reader.bytes();
          break;

        case 3:
          message.receiver = reader.string();
          break;

        case 4:
          message.amount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgSwapRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      txHash: isSet(object.txHash) ? bytesFromBase64(object.txHash) : new Uint8Array(),
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },

  toJSON(message: MsgSwapRequest): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.txHash !== undefined && (obj.txHash = base64FromBytes(message.txHash !== undefined ? message.txHash : new Uint8Array()));
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSwapRequest>): MsgSwapRequest {
    const message = createBaseMsgSwapRequest();
    message.from = object.from ?? "";
    message.txHash = object.txHash ?? new Uint8Array();
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    return message;
  }

};

function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {};
}

export const MsgSwapResponse = {
  encode(_: MsgSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapResponse();

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

  fromJSON(_: any): MsgSwapResponse {
    return {};
  },

  toJSON(_: MsgSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  }

};