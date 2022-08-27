import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "@osmonauts/helpers";
export interface EventSwap {
  txHash: Uint8Array;
  receiver: string;
}

function createBaseEventSwap(): EventSwap {
  return {
    txHash: new Uint8Array(),
    receiver: ""
  };
}

export const EventSwap = {
  encode(message: EventSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txHash.length !== 0) {
      writer.uint32(10).bytes(message.txHash);
    }

    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSwap();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.txHash = reader.bytes();
          break;

        case 2:
          message.receiver = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EventSwap {
    return {
      txHash: isSet(object.txHash) ? bytesFromBase64(object.txHash) : new Uint8Array(),
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },

  toJSON(message: EventSwap): unknown {
    const obj: any = {};
    message.txHash !== undefined && (obj.txHash = base64FromBytes(message.txHash !== undefined ? message.txHash : new Uint8Array()));
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<EventSwap>): EventSwap {
    const message = createBaseEventSwap();
    message.txHash = object.txHash ?? new Uint8Array();
    message.receiver = object.receiver ?? "";
    return message;
  }

};