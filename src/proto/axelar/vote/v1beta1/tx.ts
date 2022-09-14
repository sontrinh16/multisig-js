import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface VoteRequest {
  sender: Uint8Array;
  pollId: Long;
  vote: Any;
}
export interface VoteResponse {
  log: string;
}

function createBaseVoteRequest(): VoteRequest {
  return {
    sender: new Uint8Array(),
    pollId: Long.UZERO,
    vote: undefined
  };
}

export const VoteRequest = {
  encode(message: VoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (!message.pollId.isZero()) {
      writer.uint32(32).uint64(message.pollId);
    }

    if (message.vote !== undefined) {
      Any.encode(message.vote, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 4:
          message.pollId = (reader.uint64() as Long);
          break;

        case 5:
          message.vote = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VoteRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      pollId: isSet(object.pollId) ? Long.fromString(object.pollId) : Long.UZERO,
      vote: isSet(object.vote) ? Any.fromJSON(object.vote) : undefined
    };
  },

  toJSON(message: VoteRequest): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.pollId !== undefined && (obj.pollId = (message.pollId || Long.UZERO).toString());
    message.vote !== undefined && (obj.vote = message.vote ? Any.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<VoteRequest>): VoteRequest {
    const message = createBaseVoteRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.pollId = object.pollId !== undefined && object.pollId !== null ? Long.fromValue(object.pollId) : Long.UZERO;
    message.vote = object.vote !== undefined && object.vote !== null ? Any.fromPartial(object.vote) : undefined;
    return message;
  }

};

function createBaseVoteResponse(): VoteResponse {
  return {
    log: ""
  };
}

export const VoteResponse = {
  encode(message: VoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVoteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.log = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VoteResponse {
    return {
      log: isSet(object.log) ? String(object.log) : ""
    };
  },

  toJSON(message: VoteResponse): unknown {
    const obj: any = {};
    message.log !== undefined && (obj.log = message.log);
    return obj;
  },

  fromPartial(object: DeepPartial<VoteResponse>): VoteResponse {
    const message = createBaseVoteResponse();
    message.log = object.log ?? "";
    return message;
  }

};