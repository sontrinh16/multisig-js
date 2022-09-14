import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface RefundMsgRequest {
  sender: Uint8Array;
  innerMessage: Any;
}
export interface RefundMsgResponse {
  data: Uint8Array;
  log: string;
}

function createBaseRefundMsgRequest(): RefundMsgRequest {
  return {
    sender: new Uint8Array(),
    innerMessage: undefined
  };
}

export const RefundMsgRequest = {
  encode(message: RefundMsgRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.innerMessage !== undefined) {
      Any.encode(message.innerMessage, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefundMsgRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefundMsgRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.innerMessage = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RefundMsgRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      innerMessage: isSet(object.innerMessage) ? Any.fromJSON(object.innerMessage) : undefined
    };
  },

  toJSON(message: RefundMsgRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.innerMessage !== undefined && (obj.innerMessage = message.innerMessage ? Any.toJSON(message.innerMessage) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<RefundMsgRequest>): RefundMsgRequest {
    const message = createBaseRefundMsgRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.innerMessage = object.innerMessage !== undefined && object.innerMessage !== null ? Any.fromPartial(object.innerMessage) : undefined;
    return message;
  }

};

function createBaseRefundMsgResponse(): RefundMsgResponse {
  return {
    data: new Uint8Array(),
    log: ""
  };
}

export const RefundMsgResponse = {
  encode(message: RefundMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }

    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefundMsgResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefundMsgResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        case 2:
          message.log = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RefundMsgResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : ""
    };
  },

  toJSON(message: RefundMsgResponse): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial(object: DeepPartial<RefundMsgResponse>): RefundMsgResponse {
    const message = createBaseRefundMsgResponse();
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    return message;
  }

};